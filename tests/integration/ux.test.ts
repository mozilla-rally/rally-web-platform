/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getChromeDriver, getFirefoxDriver } from "./utils";
import { By, until } from "selenium-webdriver";
import { promises as fs } from 'fs';
import { createReadStream } from "fs";
import readline from "readline";

// The number of milliseconds to wait for some
// property to change in tests. This should be
// a long time to account for slow CI.
const WAIT_FOR_PROPERTY = 10000;

// Wait ten minutes overall before Jest times the test out.
jest.setTimeout(60 * 10000);

const headlessMode = false;
const installExtension = false;

let screenshotCount = 0;
let driver;

/**
* Find the element and perform an action on it.
*
* @param driver
*        The Selenium driver to use.
* @param locator
*        The locator for an element to look for and execute actions on.
* @param action
*        A function in the form `e => {}` that will be called
*        and receive the element once ready.
*/
async function findAndAct(driver, locator, action) {
  await driver.wait(until.elementLocated(locator), WAIT_FOR_PROPERTY);
  await driver.wait(until.elementIsEnabled(await driver.findElement(locator)), WAIT_FOR_PROPERTY);
  await driver.wait(until.elementIsVisible(await driver.findElement(locator)), WAIT_FOR_PROPERTY);

  // FIXME slow animations can obscure elements that the user is trying to interact with, without
  // a signal to know that they are complete the best we can do is retry them. Let's log it though,
  // the fact that it's happening at all means it might be a bad experience for users with slow and/or busy hardware.
  await driver.wait(async () => {
    const element = await driver.findElement(locator);
    try {
      action(element);
      return true;
    } catch (ex) {
      console.debug(ex);
      return false;
    }
  }, WAIT_FOR_PROPERTY);
}

describe("Rally Web Platform UX flows", function () {
  beforeEach(async () => {
    driver = await getFirefoxDriver(headlessMode, installExtension);
  });

  afterEach(async () => {
    screenshotCount++;

    const image = await driver.takeScreenshot();
    const screenshotFilename = `screenshots/out-${screenshotCount}.png`;
    try {
      await fs.access("./screenshots")
    } catch (ex) {
      await fs.mkdir("./screenshots");
    }
    await fs.writeFile(screenshotFilename, image, "base64");
    console.log(`recorded screenshot: ${screenshotFilename}`)

    await driver.quit();
  });

  it("signs into website and tries all available UI", async function () {
    await driver.get("http://localhost:5000");
    await driver.wait(
      until.titleIs("Sign Up | Mozilla Rally"),
      WAIT_FOR_PROPERTY
    );
    findAndAct(driver, By.css("button"), e => e.click());

    // Google sign-in prompt should open
    await driver.wait(async () => {
      return (await driver.getAllWindowHandles()).length === 2;
    }, WAIT_FOR_PROPERTY);

    await driver.switchTo().window((await driver.getAllWindowHandles())[1]);

    await driver.wait(
      until.titleIs("Auth Emulator IDP Login Widget"),
      WAIT_FOR_PROPERTY
    );

    // FIXME this emulator auth pop-up isn't ready on the default "loaded" event, the window will close anyway so retry until it responds.
    await driver.executeScript(`window.setInterval(() => document.querySelector(".mdc-list-item__secondary-text").click(), 1000)`);

    // Google sign-in prompt should close.
    await driver.wait(async () => {
      return (await driver.getAllWindowHandles()).length === 1;
    }, WAIT_FOR_PROPERTY);

    // Switch back to original window.
    await driver.switchTo().window((await driver.getAllWindowHandles())[0]);

    // TODO add Cancel button test, not implemented by site yet.
    await findAndAct(driver, By.xpath('//button[text()="Accept & Enroll"]'), e => e.click());
    // await findAndAct(driver, By.xpath('//button[text()="Skip for Now"]'), e => e.click());

    // Start to join study, but cancel.
    await findAndAct(driver, By.xpath('//button[text()="Join Study"]'), e => e.click());
    await findAndAct(driver, By.xpath('//button[text()="Cancel"]'), e => e.click());

    // Start to join study, and confirm.
    await findAndAct(driver, By.xpath('//button[text()="Join Study"]'), e => e.click());
    await findAndAct(driver, By.xpath('//button[text()="Accept & Enroll"]'), e => e.click());

    // Start to leave study, but cancel.
    await findAndAct(driver, By.xpath('//button[text()="Leave Study"]'), e => e.click());
    await findAndAct(driver, By.xpath('//button[text()="Cancel"]'), e => e.click());

    // Start to leave study, and confirm.
    await findAndAct(driver, By.xpath('//button[text()="Leave Study"]'), e => e.click());
    await findAndAct(driver, By.xpath('(//button[text()="Leave Study"])[2]'), e => e.click())
  });

  /*
  let fileBuffer = await fs.readFile("./integration.log");
  expect(fileBuffer.toString().includes(`Current study installed but not enrolled`)).toBe(true);
  console.log("debug123 installed-not-enrolled:", fileBuffer.toString().includes(`Current study installed but not enrolled`));

  // Start to join study, and confirm.
  await findAndAct(driver, By.xpath('//button[text()="Join Study"]'), e => e.click());
  await findAndAct(driver, By.xpath('//button[text()="Accept & Enroll"]'), e => e.click());

  fileBuffer = await fs.readFile("./integration.log");
  expect(fileBuffer.toString().includes(`Start data collection`)).toBe(true);

  // Start to leave study, but cancel.
  await findAndAct(driver, By.xpath('//button[text()="Leave Study"]'), e => e.click());
  await findAndAct(driver, By.xpath('//button[text()="Cancel"]'), e => e.click());

  fileBuffer = await fs.readFile("./integration.log");
  expect(fileBuffer.toString().includes(`Pause data collection`)).toBe(false);

  // Start to leave study, and confirm.
  await findAndAct(driver, By.xpath('//button[text()="Leave Study"]'), e => e.click());
  await findAndAct(driver, By.xpath('(//button[text()="Leave Study"])[2]'), e => e.click());

  fileBuffer = await fs.readFile("./integration.log");
  expect(fileBuffer.toString().includes(`Pause data collection`)).toBe(true);
  // FIXME the website hasn't implemented this yet
  // await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath('//button[text()="Accent & Enroll"]'))), WAIT_FOR_PROPERTY);
  */

  it("fails to sign up for a new email account with invalid info", async function () {
    await driver.get("http://localhost:5000");
    await driver.wait(
      until.titleIs("Sign Up | Mozilla Rally"),
      WAIT_FOR_PROPERTY
    );

    // Invalid email address fails.
    await driver.findElement(By.id('id_name')).sendKeys("test123");
    await driver.findElement(By.id('id_user_email')).sendKeys("test123");
    await findAndAct(driver, By.xpath('//button[text()="Sign Up"]'), e => e.click());

    await driver.findElement(By.id('id_name')).clear();
    await driver.findElement(By.id('id_user_email')).clear();

    // Weak password fails.
    await driver.findElement(By.id('id_name')).sendKeys("test123");
    await driver.findElement(By.id('id_user_email')).sendKeys("test123");
    await findAndAct(driver, By.xpath('//button[text()="Sign Up"]'), e => e.click());

    await driver.findElement(By.id('id_name')).clear();
    await driver.findElement(By.id('id_user_email')).clear();

    // Signing up into an ID already used registered with a different provider fails.
    await driver.findElement(By.id('id_name')).sendKeys("test123");
    await driver.findElement(By.id('id_user_email')).sendKeys("test123");
    await findAndAct(driver, By.xpath('//button[text()="Sign Up"]'), e => e.click());
  });

  it("fails to sign into website with invalid email credentials", async function () {
    await driver.get("http://localhost:5000");
    await driver.wait(
      until.titleIs("Sign Up | Mozilla Rally"),
      WAIT_FOR_PROPERTY
    );

    // Totally invalid credentials fail
    await driver.findElement(By.id('id_name')).sendKeys("test123");
    await driver.findElement(By.id('id_user_email')).sendKeys("test123");
    await findAndAct(driver, By.xpath('//button[text()="Log In"]'), e => e.click());

    await driver.findElement(By.id('id_name')).clear();
    await driver.findElement(By.id('id_user_email')).clear();

    // Logging into an ID already used registered with a different provider fails
    await driver.findElement(By.id('id_name')).sendKeys("test123");
    await driver.findElement(By.id('id_user_email')).sendKeys("test123");
    await findAndAct(driver, By.xpath('//button[text()="Log In"]'), e => e.click());
  });

  it("signs up for website with valid email credentials", async function () {
    await driver.get("http://localhost:5000");
    await driver.wait(
      until.titleIs("Sign Up | Mozilla Rally"),
      WAIT_FOR_PROPERTY
    );

    // Valid credentials succeed.
    await driver.findElement(By.id('id_name')).sendKeys("test@example.com");
    await driver.findElement(By.id('id_user_email')).sendKeys("validpass123");
    await findAndAct(driver, By.xpath('//button[text()="Sign Up"]'), e => e.click());

    await driver.findElement(By.id('id_name')).clear();
    await driver.findElement(By.id('id_user_email')).clear();

    // Unverified account can be logged into, but cannot be used until verified.
    await driver.findElement(By.id('id_name')).sendKeys("test@example.com");
    await driver.findElement(By.id('id_user_email')).sendKeys("validpass123");
    await findAndAct(driver, By.xpath('//button[text()="Log In"]'), e => e.click());

    const readInterface = readline.createInterface({
      input: createReadStream('integration.log'),
      output: process.stdout
    });

    let verifiedEmail = false;
    readInterface.on('line', async function (line) {
      if (!verifiedEmail && line.includes(`To verify the email address test@example.com, follow this link:`)) {
        const result = line.split(" ");
        const url = result[result.length - 1];
        await driver.executeScript(`window.open("${url}");`);
        verifiedEmail = true;
      }
    });

    // Wait for Selenium to open confirmation link.
    await driver.wait(async () => {
      return (await driver.getAllWindowHandles()).length === 2;
    }, WAIT_FOR_PROPERTY);

    // Switch back to original window.
    await driver.switchTo().window((await driver.getAllWindowHandles())[0]);

    await driver.wait(
      until.titleIs("Sign Up | Mozilla Rally"),
      WAIT_FOR_PROPERTY
    );
    await findAndAct(driver, By.xpath('//button[text()="Log In"]'), e => e.click());

    await driver.wait(
      until.titleIs("Privacy Policy | Mozilla Rally"),
      WAIT_FOR_PROPERTY
    );

    // FIXME logout and log back in
  });
});