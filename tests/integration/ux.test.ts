/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getFirefoxDriver } from "./utils";
import { By, until } from "selenium-webdriver";
import firefox from "selenium-webdriver/firefox";

// The number of milliseconds to wait for some
// property to change in tests. This should be
// a long time to account for slow CI.
const WAIT_FOR_PROPERTY = 5000;

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
  // eslint-disable-next-line mocha/no-hooks-for-single-case
  beforeEach(async function () {
    this.driver = await getFirefoxDriver(true);
  });

  // eslint-disable-next-line mocha/no-hooks-for-single-case
  afterEach(async function () {
    await this.driver.quit();
  });

  it("successfully opens the signup page on installation", async function () {
    // We expect the extension to load the rally signup page in a new tab.
    await this.driver.wait(async () => {
      return (await this.driver.getAllWindowHandles()).length === 2;
    }, WAIT_FOR_PROPERTY);

    // Let's wait until the page is fully loaded and the title matches.
    await this.driver.wait(
      until.titleIs("Sign Up | Mozilla Rally"),
      WAIT_FOR_PROPERTY
    );
  });
});
