/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Builder } from "selenium-webdriver";
import { until } from "selenium-webdriver";
import firefox from "selenium-webdriver/firefox";
import chrome from "selenium-webdriver/chrome";
import fs from "fs";

// The number of milliseconds to wait for some
// property to change in tests. This should be
// a long time to account for slow CI.
export const WAIT_FOR_PROPERTY = 10000;

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
export async function findAndAct(driver, locator, action) {
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


/**
 * Get a Selenium driver for using the Firefox browser.
 *
 * @param {Boolean} headless
 *        Whether or not to run Firefox in headless mode.
 * @returns {WebDriver} a WebDriver instance to control Firefox.
 */
export async function getFirefoxDriver(loadExtension, headlessMode) {
  const firefoxOptions = new firefox.Options();
  firefoxOptions.setPreference("devtools.console.stdout.content", true);
  firefoxOptions.setPreference("xpinstall.signatures.required", false);

  if (headlessMode) {
    firefoxOptions.headless();
    firefoxOptions.addArguments("-width=1920", "-height=1080");
  }

  if (process.platform === "linux") {
    // Look for the Firefox executable in different locations.
    const FIREFOX_PATHS = [
      "/usr/bin/firefox-trunk",
      "/usr/bin/firefox",
    ];

    for (const path of FIREFOX_PATHS) {
      if (fs.existsSync(path)) {
        firefoxOptions.setBinary(path);
        break;
      }
    }
  } else if (process.platform === "darwin") {
    firefoxOptions.setBinary(
      "/Applications/Firefox Nightly.app/Contents/MacOS/firefox"
    );
  }

  if (loadExtension) {
    firefoxOptions.addExtensions(`${__dirname}/extension.xpi`);
  }

  return await new Builder()
    .forBrowser("firefox")
    .setFirefoxOptions(firefoxOptions)
    .setFirefoxService(new firefox.ServiceBuilder().setStdio("inherit"))
    .build();
}

/**
 * Get a Selenium driver for using the Chrome browser.
 *
 * @param {Boolean} headless
 *        Whether or not to run Chrome in headless mode.
 * @returns {WebDriver} a WebDriver instance to control Firefox.
 */
export async function getChromeDriver(loadExtension, headlessMode) {
  const chromeOptions = new chrome.Options();

  if (headlessMode && loadExtension) {
    throw new Error("Chrome Headless does not support extensions");
  }

  if (headlessMode) {
    chromeOptions.headless();
    chromeOptions.headless();
    chromeOptions.addArguments("window-size=1920,1080");
  }

  if (loadExtension) {
    chromeOptions.addExtensions(`${__dirname}/extension.crx`);
  }

  return await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();
}
