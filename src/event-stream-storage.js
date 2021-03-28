/** 
 * 
 * @module EventStreamStorage
 */

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
 import browser from 'webextension-polyfill';
 
/**
 * @class EventStreamStorage
 */ export default class EventStreamStorage {
    constructor() {
      this._initialize();
    }

  /** 
   * get all data in storage and return as array
   * 
   * @async
   * @example
   * // existing storage object
   * event.on('something', async () => {
   *  // get existing storage here
   *  const values = await storage.get();
   *  console.log(values);
   * });
   * @returns {array} the stored events
   */
    async get() {
      try {
        const data = await browser.storage.local.get(null);
        delete data.index;
        // objects respect integer index order, so just return 
        return Object.values(data);
      } catch (err) {
        console.error(`Storage - failed to read from the local storage`, err);
        return Promise.resolve();
      }
    }

  /** 
   * pushes a new event into storage
   * 
   * @async
   * @example
   * event.on('newEvent', async (event) => {
   *  // save to storage here
   *  const newLength = await storage.set(event);
   *  console.log({ newLength });
   * });
   * @returns {number} the current length of the storage object
   */
    async push(value) {
      const index = (await browser.storage.local.get("index")).index;
      await browser.storage.local.set({ [index]: value });
      const next = index + 1;
      await browser.storage.local.set({ index: next });
      return next; // return the size of the list.
    }

  /** 
   * clears the storage instance
   * @example
   * event.on('deletion', async () => {
   *  // reset storage here
   *  await storage.reset();
   * });
   * @async
   */
    async reset() {
      browser.storage.local.clear();
      this._initialize();
    }
  
  /** 
   * 
   * @async
   * 
   * @example
   * event.on('next-event', async (event) => {
   *  const currentLength = await storage.length();
   *  if (currentLength < 100) {
   *    await storage.push(event);
   *  }
   * });
   * @returns {number} the current length of the storage array
   */
    async length() {
      return (await browser.storage.local.get('index')).index;
    }

    async _initialize() {
        await browser.storage.local.set({ index: 0 });
    }
  }
  