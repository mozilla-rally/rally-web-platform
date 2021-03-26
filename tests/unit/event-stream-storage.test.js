/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
import browser from 'webextension-polyfill';
 import EventStreamStorage from '../../src/event-stream-storage';

describe('EventStreamStorage', function () {
  let storage;
  let webExtensionStorage = {};
  beforeEach(function () {
    webExtensionStorage = {};
    browser.storage.local.get = async function get(key) {
      if (key === null) {
        return webExtensionStorage;
      }
      const value = webExtensionStorage[key];
      return { [key]: value };
    }
    browser.storage.local.set = async function set(obj) {
      const [key, value] = Object.entries(obj)[0];
      webExtensionStorage[key] = value;
    };
    browser.storage.local.clear = async function clear() {
      webExtensionStorage = {};
    }
    storage = new EventStreamStorage();
  });

  describe('constructor()', function() {
    it('sets up an index from the storage set to 0', async function() {
      const startingLength = await storage.length();
      expect(startingLength).toBe(0);
    });
  })

  describe('push()', function () {
    it('appends items to the array with .push()', async function() {
      // browser.storage.local.get.rejects();
      // chrome.storage.local.get.callsArgWith(1, {}).resolves();
      const size = await storage.push({ url: 'link', elapsed: new Date() });
      expect(size).toBe(1);
      const nextSize = await storage.push({ url: 'link', elapsed: new Date() });
      expect(nextSize).toBe(2);
    });
  });

  describe('length()', function() {
    it('returns size of the array with .length()', async function() {
      // FIXME: figure out how to make this pass.
      await storage.push({ url: 'link', elapsed: new Date() });
      await storage.push({ url: 'link', elapsed: new Date() });
      await storage.push({ url: 'link', elapsed: new Date() });
      const lengthFromPush = await storage.push({ url: 'link', elapsed: new Date() });
      const length = await storage.length();
      expect(length).toBe(lengthFromPush);
    });
  })

  describe('get()', function() {
    it('gets all available items with .get()', async function() {
      const links = [
        {url: "link1", elapsed: 1000},
        {url: "link2", elapsed: 2000},
        {url: "link3", elapsed: 300},
      ];
      await storage.push(links[0]);
      await storage.push(links[1]);
      await storage.push(links[2]);
      const output = await storage.get();
      expect(output).toEqual(links);
    })
  });

  describe('reset()', function() {
    it('clears data with .clear()', async function() {
      const links = [
        {url: "link1", elapsed: 1000},
        {url: "link2", elapsed: 2000},
        {url: "link3", elapsed: 300},
      ];
      await storage.push(links[0]);
      await storage.push(links[1]);
      await storage.push(links[2]);
      
      const output = await storage.get();
      expect(output).toEqual(links);
      await storage.reset();
      const newOutput = await storage.get();
      expect(newOutput).toEqual([]);
    })
  })
});
