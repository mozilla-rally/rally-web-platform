/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getChromeDriver, getFirefoxDriver } from "./utils";
import { By, until } from "selenium-webdriver";
import { promises as fs } from 'fs';

// The number of milliseconds to wait for some
// property to change in tests. This should be
// a long time to account for slow CI.
const WAIT_FOR_PROPERTY = 10000;

// Wait ten minutes overall before Jest times the test out.
jest.setTimeout(60 * 10000);

const headlessMode = true;

// Keep a list of WebDriver instances to shut down after screenshotting.
// The tests are responsible for starting WebDrivers, because they need to control when the browser loads an extension at startup.
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

  it("signs into website and tries all UX flows without extension installed", async function () {
    const installExtension = false;
    for (const webDriver of [getFirefoxDriver]) {
      const driver = await webDriver(headlessMode, installExtension);
      drivers.push(driver);

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
      await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath('//button[text()="Join Study"]'))), WAIT_FOR_PROPERTY);

      // Start to join study, and confirm.
      await findAndAct(driver, By.xpath('//button[text()="Join Study"]'), e => e.click());
      await findAndAct(driver, By.xpath('//button[text()="Accept & Enroll"]'), e => e.click());
      await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath('//button[text()="Leave Study"]'))), WAIT_FOR_PROPERTY);

      // Start to leave study, but cancel.
      await findAndAct(driver, By.xpath('//button[text()="Leave Study"]'), e => e.click());
      await findAndAct(driver, By.xpath('//button[text()="Cancel"]'), e => e.click());
      await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath('//button[text()="Leave Study"]'))), WAIT_FOR_PROPERTY);

      // Start to leave study, and confirm.
      await findAndAct(driver, By.xpath('//button[text()="Leave Study"]'), e => e.click());
      await findAndAct(driver, By.xpath('(//button[text()="Leave Study"])[2]'), e => e.click());
      await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath('//button[text()="Join Study"]'))), WAIT_FOR_PROPERTY);

      /* FIXME re-enable
      // Start to leave Rally, but cancel.
      await findAndAct(driver, By.xpath('//button[text()="Leave Mozilla Rally"]'), e => e.click());
      await findAndAct(driver, By.xpath('//button[text()="Cancel"]'), e => e.click());
      await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath('//button[text()="Leave Mozilla Rally"]'))), WAIT_FOR_PROPERTY);

      // Start to leave Rally, and confirm.
      // await findAndAct(driver, By.xpath('//button[text()="Leave Mozilla Rally"]'), e => e.click());

      // The Firebase emulator warning obscures the bottom, scroll to the bottom of the page.
      driver.executeScript("window.scrollTo(0, document.body.scrollHeight);");
      await findAndAct(driver, By.xpath('//button[text()="Leave Rally"]'), e => e.click());
      // FIXME the website hasn't implemented this yet
      await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath('//button[text()="Accent & Enroll"]'))), WAIT_FOR_PROPERTY);
      */
      // TODO make sure in-page link works
      await driver.get("http://localhost:5000/profile");
    }
  });

  it("signs into website and tries all UX flows with extension installed", async function () {
    const installExtension = true;

    // FIXME
    for (const webDriver of [getFirefoxDriver]) {
      const driver = await webDriver(headlessMode, installExtension);
      drivers.push(driver);

      // Extension should open website at sign-up link
      // FIXME - rally-sdk has the dev site hardcoded, need to override this in our test version.
      await driver.wait(async () => {
        return (await driver.getAllWindowHandles()).length === 2;
      }, WAIT_FOR_PROPERTY);

      // Let's wait until the page is fully loaded and the title matches.
      await driver.wait(
        until.titleIs("Sign Up | Mozilla Rally"),
        WAIT_FOR_PROPERTY
      );

      findAndAct(driver, By.css("button"), e => e.click());

      // Google sign-in prompt should open
      await driver.wait(async () => {
        return (await driver.getAllWindowHandles()).length === 3;
      }, WAIT_FOR_PROPERTY);

      await driver.switchTo().window((await driver.getAllWindowHandles())[2]);

      await driver.wait(
        until.titleIs("Auth Emulator IDP Login Widget"),
        WAIT_FOR_PROPERTY
      );

      // FIXME this emulator auth pop-up isn't ready on the default "loaded" event, the window will close anyway so retry until it responds.
      await driver.executeScript(`window.setInterval(() => document.querySelector(".mdc-list-item__secondary-text").click(), 1000)`);

      // Google sign-in prompt should close.
      await driver.wait(async () => {
        return (await driver.getAllWindowHandles()).length === 2;
      }, WAIT_FOR_PROPERTY);

      // Switch back to original window.
      await driver.switchTo().window((await driver.getAllWindowHandles())[1]);

      // TODO add Cancel button test, not implemented by site yet.
      // TODO should we flush Firestore between tests?
      // await findAndAct(driver, By.xpath('//button[text()="Accept & Enroll"]'), e => e.click());
      // await findAndAct(driver, By.xpath('//button[text()="Skip for Now"]'), e => e.click());

      // FIXME why aren't credentials firing immediately after enrollment?
      await driver.get("http://localhost:5000");

      // Start to join study, but cancel.
      await findAndAct(driver, By.xpath('//button[text()="Join Study"]'), e => e.click());
      await findAndAct(driver, By.xpath('//button[text()="Cancel"]'), e => e.click());
      await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath('//button[text()="Join Study"]'))), WAIT_FOR_PROPERTY);

      let fileBuffer = await fs.readFile("./integration.log");
      expect(fileBuffer.toString().includes(`Current study installed but not enrolled`)).toBe(true);
      console.log("debug123 installed-not-enrolled:", fileBuffer.toString().includes(`Current study installed but not enrolled`));

      // Start to join study, and confirm.
      await findAndAct(driver, By.xpath('//button[text()="Join Study"]'), e => e.click());
      await findAndAct(driver, By.xpath('//button[text()="Accept & Enroll"]'), e => e.click());
      await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath('//button[text()="Leave Study"]'))), WAIT_FOR_PROPERTY);

      fileBuffer = await fs.readFile("./integration.log");
      expect(fileBuffer.toString().includes(`Start data collection`)).toBe(true);

      // Start to leave study, but cancel.
      await findAndAct(driver, By.xpath('//button[text()="Leave Study"]'), e => e.click());
      await findAndAct(driver, By.xpath('//button[text()="Cancel"]'), e => e.click());
      await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath('//button[text()="Leave Study"]'))), WAIT_FOR_PROPERTY);

      fileBuffer = await fs.readFile("./integration.log");
      expect(fileBuffer.toString().includes(`Pause data collection`)).toBe(false);

      // Start to leave study, and confirm.
      await findAndAct(driver, By.xpath('//button[text()="Leave Study"]'), e => e.click());
      await findAndAct(driver, By.xpath('(//button[text()="Leave Study"])[2]'), e => e.click());
      await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath('//button[text()="Join Study"]'))), WAIT_FOR_PROPERTY);

      fileBuffer = await fs.readFile("./integration.log");
      expect(fileBuffer.toString().includes(`Pause data collection`)).toBe(true);

      /*
      // Start to leave Rally, but cancel.
      // await findAndAct(driver, By.xpath('//button[text()="Leave Mozilla Rally"]'), e => e.click());

      // The Firebase emulator warning obscures the bottom, scroll to the bottom of the page.s
      driver.executeScript("window.scrollTo(0, document.body.scrollHeight);");
      await findAndAct(driver, By.xpath('//button[text()="Cancel"]'), e => e.click());
      await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath('//button[text()="Leave Mozilla Rally"]'))), WAIT_FOR_PROPERTY);

      // Start to leave Rally, and confirm.
      await findAndAct(driver, By.xpath('//button[text()="Leave Mozilla Rally"]'), e => e.click());

      // The Firebase emulator warning obscures the bottom, scroll to the bottom of the page.s
      driver.executeScript("window.scrollTo(0, document.body.scrollHeight);");

      await findAndAct(driver, By.xpath('//button[text()="Leave Rally"]'), e => e.click());
      */
      // FIXME the website hasn't implemented this yet
      // await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath('//button[text()="Accent & Enroll"]'))), WAIT_FOR_PROPERTY);

      // TODO make sure in-page link works
      await driver.get("http://localhost:5000/profile");
    }
  });
});
