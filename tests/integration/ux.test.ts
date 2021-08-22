/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getFirefoxDriver } from "./utils";
import { By, until } from "selenium-webdriver";

// The number of milliseconds to wait for some
// property to change in tests. This should be
// a long time to account for slow CI.
const WAIT_FOR_PROPERTY = 10000;
jest.setTimeout(60 * 1000);

const headlessMode = true;

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
async function findAndAct(driver, element, action) {
  await driver.wait(until.elementLocated(element), WAIT_FOR_PROPERTY);
  await driver.findElement(element).then(e => action(e));
}

describe("Rally Web Platform extension interop", function () {
  afterEach(async function () {
    await this.driver.quit();
  });
  it("fails to sign into website with invalid credentials", async function () {
    const installExtension = false;
    this.driver = await getFirefoxDriver(headlessMode, installExtension);

  });
  it("signs into website and tries all UX flows without extension installed", async function () {
    const installExtension = false;
    this.driver = await getFirefoxDriver(headlessMode, installExtension);

    await this.driver.get("http://localhost:5000");
    await this.driver.wait(
      until.titleIs("Sign Up | Mozilla Rally"),
      WAIT_FOR_PROPERTY
    );
    findAndAct(this.driver, By.css("button"), e => e.click());

    // Google sign-in prompt should open
    await this.driver.wait(async () => {
      return (await this.driver.getAllWindowHandles()).length === 2;
    }, WAIT_FOR_PROPERTY);

    await this.driver.switchTo().window((await this.driver.getAllWindowHandles())[1]);

    await this.driver.wait(
      until.titleIs("Auth Emulator IDP Login Widget"),
      WAIT_FOR_PROPERTY
    );

    // FIXME this emulator auth pop-up isn't ready on the default "loaded" event, the window will close anyway so retry until it responds.
    await this.driver.executeScript(`window.setInterval(() => document.querySelector(".mdc-list-item__secondary-text").click(), 1000)`);

    // Google sign-in prompt should close.
    await this.driver.wait(async () => {
      return (await this.driver.getAllWindowHandles()).length === 1;
    }, WAIT_FOR_PROPERTY);

    // Switch back to original window.
    await this.driver.switchTo().window((await this.driver.getAllWindowHandles())[0]);

    // TODO add Cancel button test, not implemented by site yet.
    await findAndAct(this.driver, By.xpath('//button[text()="Accept & Enroll"]'), e => e.click());

    // Start to join study, but cancel.
    await findAndAct(this.driver, By.xpath('//button[text()="Join Study"]'), e => e.click());
    await findAndAct(this.driver, By.xpath('//button[text()="Cancel"]'), e => e.click());
    await this.driver.wait(until.elementIsVisible(await this.driver.findElement(By.xpath('//button[text()="Join Study"]'))), WAIT_FOR_PROPERTY);

    // Start to join study, and confirm.
    await findAndAct(this.driver, By.xpath('//button[text()="Join Study"]'), e => e.click());
    await findAndAct(this.driver, By.xpath('//button[text()="Accept & Enroll"]'), e => e.click());
    await this.driver.wait(until.elementIsVisible(await this.driver.findElement(By.xpath('//button[text()="Leave Study"]'))), WAIT_FOR_PROPERTY);

    // Start to leave study, but cancel.
    await findAndAct(this.driver, By.xpath('//button[text()="Leave Study"]'), e => e.click());
    await findAndAct(this.driver, By.xpath('//button[text()="Cancel"]'), e => e.click());
    await this.driver.wait(until.elementIsVisible(await this.driver.findElement(By.xpath('//button[text()="Leave Study"]'))), WAIT_FOR_PROPERTY);

    // Start to leave study, and confirm.
    await findAndAct(this.driver, By.xpath('//button[text()="Leave Study"]'), e => e.click());
    await findAndAct(this.driver, By.xpath('(//button[text()="Leave Study"])[2]'), e => e.click());
    await this.driver.wait(until.elementIsVisible(await this.driver.findElement(By.xpath('//button[text()="Join Study"]'))), WAIT_FOR_PROPERTY);


    // TODO make sure in-page link works
    await this.driver.get("http://localhost:5000/profile");

  });

  it("opens the signup page on extension installation", async function () {
    const installExtension = true;
    this.driver = await getFirefoxDriver(headlessMode, installExtension);

    // We expect the extension to load the rally signup page in a new tab.
    // FIXME - rally-sdk has the dev site hardcoded, need to override this in our test version.
    await this.driver.wait(async () => {
      return (await this.driver.getAllWindowHandles()).length === 2;
    }, WAIT_FOR_PROPERTY);

    // Let's wait until the page is fully loaded and the title matches.
    await this.driver.wait(
      until.titleIs("Sign Up | Mozilla Rally"),
      WAIT_FOR_PROPERTY
    );
  });

  it("signs into website and tries all UX flows with extension installed", async function () {
    const installExtension = true;

    this.driver = await getFirefoxDriver(headlessMode, installExtension);

    // Extension should open website at sign-up link
    // FIXME - rally-sdk has the dev site hardcoded, need to override this in our test version.
    await this.driver.wait(async () => {
      return (await this.driver.getAllWindowHandles()).length === 2;
    }, WAIT_FOR_PROPERTY);

    // Let's wait until the page is fully loaded and the title matches.
    await this.driver.wait(
      until.titleIs("Sign Up | Mozilla Rally"),
      WAIT_FOR_PROPERTY
    );

    await this.driver.get("http://localhost:5000");
    await this.driver.wait(
      until.titleIs("Sign Up | Mozilla Rally"),
      WAIT_FOR_PROPERTY
    );
    findAndAct(this.driver, By.css("button"), e => e.click());

    // Google sign-in prompt should open
    await this.driver.wait(async () => {
      return (await this.driver.getAllWindowHandles()).length === 3;
    }, WAIT_FOR_PROPERTY);

    await this.driver.switchTo().window((await this.driver.getAllWindowHandles())[2]);

    await this.driver.wait(
      until.titleIs("Auth Emulator IDP Login Widget"),
      WAIT_FOR_PROPERTY
    );

    // FIXME this emulator auth pop-up isn't ready on the default "loaded" event, the window will close anyway so retry until it responds.
    await this.driver.executeScript(`window.setInterval(() => document.querySelector(".mdc-list-item__secondary-text").click(), 1000)`);

    // Google sign-in prompt should close.
    await this.driver.wait(async () => {
      return (await this.driver.getAllWindowHandles()).length === 2;
    }, WAIT_FOR_PROPERTY);

    // Switch back to original window.
    await this.driver.switchTo().window((await this.driver.getAllWindowHandles())[1]);

    // TODO add Cancel button test, not implemented by site yet.
    // FIXME this user has already been created on the backend, should we flush this between tests?
    // await findAndAct(this.driver, By.xpath('//button[text()="Accept & Enroll"]'), e => e.click());

    // Start to join study, but cancel.
    await findAndAct(this.driver, By.xpath('//button[text()="Join Study"]'), e => e.click());
    await findAndAct(this.driver, By.xpath('//button[text()="Cancel"]'), e => e.click());
    await this.driver.wait(until.elementIsVisible(await this.driver.findElement(By.xpath('//button[text()="Join Study"]'))), WAIT_FOR_PROPERTY);

    // Start to join study, and confirm.
    await findAndAct(this.driver, By.xpath('//button[text()="Join Study"]'), e => e.click());
    await findAndAct(this.driver, By.xpath('//button[text()="Accept & Enroll"]'), e => e.click());
    await this.driver.wait(until.elementIsVisible(await this.driver.findElement(By.xpath('//button[text()="Leave Study"]'))), WAIT_FOR_PROPERTY);

    // Start to leave study, but cancel.
    await findAndAct(this.driver, By.xpath('//button[text()="Leave Study"]'), e => e.click());
    await findAndAct(this.driver, By.xpath('//button[text()="Cancel"]'), e => e.click());
    await this.driver.wait(until.elementIsVisible(await this.driver.findElement(By.xpath('//button[text()="Leave Study"]'))), WAIT_FOR_PROPERTY);

    // Start to leave study, and confirm.
    await findAndAct(this.driver, By.xpath('//button[text()="Leave Study"]'), e => e.click());
    await findAndAct(this.driver, By.xpath('(//button[text()="Leave Study"])[2]'), e => e.click());
    await this.driver.wait(until.elementIsVisible(await this.driver.findElement(By.xpath('//button[text()="Join Study"]'))), WAIT_FOR_PROPERTY);


    // TODO make sure in-page link works
    await this.driver.get("http://localhost:5000/profile");
  });

});
