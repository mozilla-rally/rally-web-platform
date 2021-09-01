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

const headlessMode = true;

// Keep a list of WebDriver instances to shut down after screenshotting.
// The tests are responsible for starting WebDrivers, because they need to control whether the browser loads an extension at startup.
const drivers = [];
let screenshotCount = 0;
let enrolled = false;

/**
* Find the element and perform an action on it.
*
* @param driver
*        The Selenium driver to use.
* @param element
*        The element to look for and execute actions on.
* @param action
*        A function in the form `e => {}` that will be called
*        and receive the element once ready.
*/
async function findAndAct(driver, locator, action) {
  await driver.wait(until.elementLocated(locator), WAIT_FOR_PROPERTY);
  await driver.wait(until.elementIsEnabled(await driver.findElement(locator)), WAIT_FOR_PROPERTY);
  await driver.wait(until.elementIsVisible(await driver.findElement(locator)), WAIT_FOR_PROPERTY);
  await driver.findElement(locator).then(e => action(e));
}

describe("Rally Web Platform extension interop", function () {
  afterEach(async () => {
    while (drivers.length) {
      screenshotCount++;
      const driver = drivers.pop();
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
    }
  });

  it("fails to sign up for a new email account with invalid info", async function () {
    const installExtension = false;
    for (const webDriver of [getChromeDriver, getFirefoxDriver]) {
      const driver = await webDriver(headlessMode, installExtension);
      drivers.push(driver);

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
    }
  });

  it("fails to sign into website with invalid email credentials", async function () {
    const installExtension = false;
    for (const webDriver of [getChromeDriver, getFirefoxDriver]) {
      const driver = await webDriver(headlessMode, installExtension);
      drivers.push(driver);

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
    }
  });

  it("signs up for website with valid email credentials", async function () {
    const installExtension = false;
    for (const webDriver of [getChromeDriver]) {
      const driver = await webDriver(headlessMode, installExtension);
      drivers.push(driver);

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
    }
  });

  it("fails to sign into website with invalid credentials", async function () {
    const installExtension = false;
    for (const webDriver of [getChromeDriver, getFirefoxDriver]) {
      const driver = await webDriver(headlessMode, installExtension);
      drivers.push(driver);

      await driver.get("http://localhost:5000");
      await driver.wait(
        until.titleIs("Sign Up | Mozilla Rally"),
        WAIT_FOR_PROPERTY
      );
    }
  });
});
