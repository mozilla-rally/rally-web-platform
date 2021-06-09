var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var browserPolyfill = {exports: {}};

(function (module, exports) {
(function (global, factory) {
  {
    factory(module);
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : commonjsGlobal, function (module) {

  if (typeof browser === "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
    const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)"; // Wrapping the bulk of this polyfill in a one-time-use function is a minor
    // optimization for Firefox. Since Spidermonkey does not fully parse the
    // contents of a function until the first time it's called, and since it will
    // never actually need to be called, this allows the polyfill to be included
    // in Firefox nearly for free.

    const wrapAPIs = extensionAPIs => {
      // NOTE: apiMetadata is associated to the content of the api-metadata.json file
      // at build time by replacing the following "include" with the content of the
      // JSON file.
      const apiMetadata = {
        "alarms": {
          "clear": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "clearAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "get": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "bookmarks": {
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getChildren": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getRecent": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getSubTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTree": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "browserAction": {
          "disable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "enable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "getBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getBadgeText": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "openPopup": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setBadgeText": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "browsingData": {
          "remove": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "removeCache": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCookies": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeDownloads": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFormData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeHistory": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeLocalStorage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePasswords": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePluginData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "settings": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "commands": {
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "contextMenus": {
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "cookies": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAllCookieStores": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "set": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "devtools": {
          "inspectedWindow": {
            "eval": {
              "minArgs": 1,
              "maxArgs": 2,
              "singleCallbackArg": false
            }
          },
          "panels": {
            "create": {
              "minArgs": 3,
              "maxArgs": 3,
              "singleCallbackArg": true
            },
            "elements": {
              "createSidebarPane": {
                "minArgs": 1,
                "maxArgs": 1
              }
            }
          }
        },
        "downloads": {
          "cancel": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "download": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "erase": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFileIcon": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "open": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "pause": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFile": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "resume": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "extension": {
          "isAllowedFileSchemeAccess": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "isAllowedIncognitoAccess": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "history": {
          "addUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "deleteRange": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getVisits": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "i18n": {
          "detectLanguage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAcceptLanguages": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "identity": {
          "launchWebAuthFlow": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "idle": {
          "queryState": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "management": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getSelf": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setEnabled": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "uninstallSelf": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "notifications": {
          "clear": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPermissionLevel": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "pageAction": {
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "hide": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "permissions": {
          "contains": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "request": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "runtime": {
          "getBackgroundPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPlatformInfo": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "openOptionsPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "requestUpdateCheck": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "sendMessage": {
            "minArgs": 1,
            "maxArgs": 3
          },
          "sendNativeMessage": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "setUninstallURL": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "sessions": {
          "getDevices": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getRecentlyClosed": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "restore": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "storage": {
          "local": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "managed": {
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "sync": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          }
        },
        "tabs": {
          "captureVisibleTab": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "detectLanguage": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "discard": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "duplicate": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "executeScript": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getZoom": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getZoomSettings": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goBack": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goForward": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "highlight": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "insertCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "query": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "reload": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "sendMessage": {
            "minArgs": 2,
            "maxArgs": 3
          },
          "setZoom": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "setZoomSettings": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "update": {
            "minArgs": 1,
            "maxArgs": 2
          }
        },
        "topSites": {
          "get": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "webNavigation": {
          "getAllFrames": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFrame": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "webRequest": {
          "handlerBehaviorChanged": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "windows": {
          "create": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getLastFocused": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        }
      };

      if (Object.keys(apiMetadata).length === 0) {
        throw new Error("api-metadata.json has not been included in browser-polyfill");
      }
      /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */


      class DefaultWeakMap extends WeakMap {
        constructor(createItem, items = undefined) {
          super(items);
          this.createItem = createItem;
        }

        get(key) {
          if (!this.has(key)) {
            this.set(key, this.createItem(key));
          }

          return super.get(key);
        }

      }
      /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */


      const isThenable = value => {
        return value && typeof value === "object" && typeof value.then === "function";
      };
      /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.reject
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function}
       *        The generated callback function.
       */


      const makeCallback = (promise, metadata) => {
        return (...callbackArgs) => {
          if (extensionAPIs.runtime.lastError) {
            promise.reject(new Error(extensionAPIs.runtime.lastError.message));
          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
            promise.resolve(callbackArgs[0]);
          } else {
            promise.resolve(callbackArgs);
          }
        };
      };

      const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";
      /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */


      const wrapAsyncFunction = (name, metadata) => {
        return function asyncFunctionWrapper(target, ...args) {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }

          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }

          return new Promise((resolve, reject) => {
            if (metadata.fallbackToNoCallback) {
              // This API method has currently no callback on Chrome, but it return a promise on Firefox,
              // and so the polyfill will try to call it with a callback first, and it will fallback
              // to not passing the callback if the first call fails.
              try {
                target[name](...args, makeCallback({
                  resolve,
                  reject
                }, metadata));
              } catch (cbError) {
                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                target[name](...args); // Update the API method metadata, so that the next API calls will not try to
                // use the unsupported callback anymore.

                metadata.fallbackToNoCallback = false;
                metadata.noCallback = true;
                resolve();
              }
            } else if (metadata.noCallback) {
              target[name](...args);
              resolve();
            } else {
              target[name](...args, makeCallback({
                resolve,
                reject
              }, metadata));
            }
          });
        };
      };
      /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */


      const wrapMethod = (target, method, wrapper) => {
        return new Proxy(method, {
          apply(targetMethod, thisObj, args) {
            return wrapper.call(thisObj, target, ...args);
          }

        });
      };

      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
      /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */

      const wrapObject = (target, wrappers = {}, metadata = {}) => {
        let cache = Object.create(null);
        let handlers = {
          has(proxyTarget, prop) {
            return prop in target || prop in cache;
          },

          get(proxyTarget, prop, receiver) {
            if (prop in cache) {
              return cache[prop];
            }

            if (!(prop in target)) {
              return undefined;
            }

            let value = target[prop];

            if (typeof value === "function") {
              // This is a method on the underlying object. Check if we need to do
              // any wrapping.
              if (typeof wrappers[prop] === "function") {
                // We have a special-case wrapper for this method.
                value = wrapMethod(target, target[prop], wrappers[prop]);
              } else if (hasOwnProperty(metadata, prop)) {
                // This is an async method that we have metadata for. Create a
                // Promise wrapper for it.
                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                value = wrapMethod(target, target[prop], wrapper);
              } else {
                // This is a method that we don't know or care about. Return the
                // original method, bound to the underlying object.
                value = value.bind(target);
              }
            } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
              // This is an object that we need to do some wrapping for the children
              // of. Create a sub-object wrapper for it with the appropriate child
              // metadata.
              value = wrapObject(value, wrappers[prop], metadata[prop]);
            } else if (hasOwnProperty(metadata, "*")) {
              // Wrap all properties in * namespace.
              value = wrapObject(value, wrappers[prop], metadata["*"]);
            } else {
              // We don't need to do any wrapping for this property,
              // so just forward all access to the underlying object.
              Object.defineProperty(cache, prop, {
                configurable: true,
                enumerable: true,

                get() {
                  return target[prop];
                },

                set(value) {
                  target[prop] = value;
                }

              });
              return value;
            }

            cache[prop] = value;
            return value;
          },

          set(proxyTarget, prop, value, receiver) {
            if (prop in cache) {
              cache[prop] = value;
            } else {
              target[prop] = value;
            }

            return true;
          },

          defineProperty(proxyTarget, prop, desc) {
            return Reflect.defineProperty(cache, prop, desc);
          },

          deleteProperty(proxyTarget, prop) {
            return Reflect.deleteProperty(cache, prop);
          }

        }; // Per contract of the Proxy API, the "get" proxy handler must return the
        // original value of the target if that value is declared read-only and
        // non-configurable. For this reason, we create an object with the
        // prototype set to `target` instead of using `target` directly.
        // Otherwise we cannot return a custom object for APIs that
        // are declared read-only and non-configurable, such as `chrome.devtools`.
        //
        // The proxy handlers themselves will still use the original `target`
        // instead of the `proxyTarget`, so that the methods and properties are
        // dereferenced via the original targets.

        let proxyTarget = Object.create(target);
        return new Proxy(proxyTarget, handlers);
      };
      /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */


      const wrapEvent = wrapperMap => ({
        addListener(target, listener, ...args) {
          target.addListener(wrapperMap.get(listener), ...args);
        },

        hasListener(target, listener) {
          return target.hasListener(wrapperMap.get(listener));
        },

        removeListener(target, listener) {
          target.removeListener(wrapperMap.get(listener));
        }

      });

      const onRequestFinishedWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }
        /**
         * Wraps an onRequestFinished listener function so that it will return a
         * `getContent()` property which returns a `Promise` rather than using a
         * callback API.
         *
         * @param {object} req
         *        The HAR entry object representing the network request.
         */


        return function onRequestFinished(req) {
          const wrappedReq = wrapObject(req, {}
          /* wrappers */
          , {
            getContent: {
              minArgs: 0,
              maxArgs: 0
            }
          });
          listener(wrappedReq);
        };
      }); // Keep track if the deprecation warning has been logged at least once.

      let loggedSendResponseDeprecationWarning = false;
      const onMessageWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }
        /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */


        return function onMessage(message, sender, sendResponse) {
          let didCallSendResponse = false;
          let wrappedSendResponse;
          let sendResponsePromise = new Promise(resolve => {
            wrappedSendResponse = function (response) {
              if (!loggedSendResponseDeprecationWarning) {
                console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);
                loggedSendResponseDeprecationWarning = true;
              }

              didCallSendResponse = true;
              resolve(response);
            };
          });
          let result;

          try {
            result = listener(message, sender, wrappedSendResponse);
          } catch (err) {
            result = Promise.reject(err);
          }

          const isResultThenable = result !== true && isThenable(result); // If the listener didn't returned true or a Promise, or called
          // wrappedSendResponse synchronously, we can exit earlier
          // because there will be no response sent from this listener.

          if (result !== true && !isResultThenable && !didCallSendResponse) {
            return false;
          } // A small helper to send the message if the promise resolves
          // and an error if the promise rejects (a wrapped sendMessage has
          // to translate the message into a resolved promise or a rejected
          // promise).


          const sendPromisedResult = promise => {
            promise.then(msg => {
              // send the message value.
              sendResponse(msg);
            }, error => {
              // Send a JSON representation of the error if the rejected value
              // is an instance of error, or the object itself otherwise.
              let message;

              if (error && (error instanceof Error || typeof error.message === "string")) {
                message = error.message;
              } else {
                message = "An unexpected error occurred";
              }

              sendResponse({
                __mozWebExtensionPolyfillReject__: true,
                message
              });
            }).catch(err => {
              // Print an error on the console if unable to send the response.
              console.error("Failed to send onMessage rejected reply", err);
            });
          }; // If the listener returned a Promise, send the resolved value as a
          // result, otherwise wait the promise related to the wrappedSendResponse
          // callback to resolve and send it as a response.


          if (isResultThenable) {
            sendPromisedResult(result);
          } else {
            sendPromisedResult(sendResponsePromise);
          } // Let Chrome know that the listener is replying.


          return true;
        };
      });

      const wrappedSendMessageCallback = ({
        reject,
        resolve
      }, reply) => {
        if (extensionAPIs.runtime.lastError) {
          // Detect when none of the listeners replied to the sendMessage call and resolve
          // the promise to undefined as in Firefox.
          // See https://github.com/mozilla/webextension-polyfill/issues/130
          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
            resolve();
          } else {
            reject(new Error(extensionAPIs.runtime.lastError.message));
          }
        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
          // Convert back the JSON representation of the error into
          // an Error instance.
          reject(new Error(reply.message));
        } else {
          resolve(reply);
        }
      };

      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
        if (args.length < metadata.minArgs) {
          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
        }

        if (args.length > metadata.maxArgs) {
          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
        }

        return new Promise((resolve, reject) => {
          const wrappedCb = wrappedSendMessageCallback.bind(null, {
            resolve,
            reject
          });
          args.push(wrappedCb);
          apiNamespaceObj.sendMessage(...args);
        });
      };

      const staticWrappers = {
        devtools: {
          network: {
            onRequestFinished: wrapEvent(onRequestFinishedWrappers)
          }
        },
        runtime: {
          onMessage: wrapEvent(onMessageWrappers),
          onMessageExternal: wrapEvent(onMessageWrappers),
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 1,
            maxArgs: 3
          })
        },
        tabs: {
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 2,
            maxArgs: 3
          })
        }
      };
      const settingMetadata = {
        clear: {
          minArgs: 1,
          maxArgs: 1
        },
        get: {
          minArgs: 1,
          maxArgs: 1
        },
        set: {
          minArgs: 1,
          maxArgs: 1
        }
      };
      apiMetadata.privacy = {
        network: {
          "*": settingMetadata
        },
        services: {
          "*": settingMetadata
        },
        websites: {
          "*": settingMetadata
        }
      };
      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
    };

    if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) {
      throw new Error("This script should only be loaded in a browser extension.");
    } // The build process adds a UMD wrapper around this file, which makes the
    // `module` variable available.


    module.exports = wrapAPIs(chrome);
  } else {
    module.exports = browser;
  }
});
//# sourceMappingURL=browser-polyfill.js.map
}(browserPolyfill));

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

class Storage {
  constructor() {
    // We don't want a persistent storage for pending consent,
    // we must clear it across browser restarts and whenever the
    // core add-on is deactivated.
    this.pendingConsents = [];
  }

  /**
   * Gets the stored value from the local browser storage.
   *
   * @param {String} key
   *        The name of the key to retrieve data from.
   */
  async getItem(key) {
    try {
      return (await browser.storage.local.get(key))[key];
    } catch (err) {
      console.error(`Storage - failed to read ${key} from the local storage`, err);
      return Promise.resolve();
    }
  }

  /**
   * Store a value in the local browser storage.
   *
   * @param {String} key
   *        The name of the key to store data into.
   * @param {<Primitive Type> or Array} value
   *        The value to store. It can be any of the primitive
   *        types (e.g. numbers, booleans) or Array types. See
   *        the documentation for additional information:
   *        https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/set
   */
  async setItem(key, value) {
    return browser.storage.local.set({ [key]: value });
  }

  async getRallyID() {
    return await this.getItem("rallyId");
  }

  async setRallyID(uuid) {
    return await this.setItem("rallyId", uuid);
  }

  async getDeletionID() {
    return await this.getItem("deletionId");
  }

  async setDeletionID(uuid) {
    return await this.setItem("deletionId", uuid);
  }

  async clearRallyID() {
    return await browser.storage.local.remove("rallyId");
  }

  async clearDeletionID() {
    return await browser.storage.local.remove("deletionId");
  }

  /**
   * Get the provided demographic data.
   *
   * @returns {Promise} resolved with the list of demographic answers
   *          already provided by the user.
   */
  async getDemographicsData() {
    return await this.getItem("demographicsData");
  }

  /**
   * Set the provided demographic data.
   *
   * @returns {Promise} 
   */
  async setDemographicsData(data) {
    return await this.setItem("demographicsData", data);
  }

    /**
   * Get the provided demographic data.
   *
   * @returns {Promise} resolved with a boolean denoting
   *          if the user finished the first run of the 
   *          Core Add-On.
   */
  async getFirstRunCompletion() {
    return await this.getItem("firstRunCompleted");
  }

  /**
   * Set the provided demographic data.
   *
   * @returns {Promise} 
   */
  async setFirstRunCompletion(firstRun) {
    return await this.setItem("firstRunCompleted", firstRun);
  }

  /**
   * Get the list of study ids user took part to.
   *
   * @returns {Promise} resolved with the list of activated studies
   *          if the study is added to the list, rejected on errors.
   */
  async getActivatedStudies() {
    // Attempt to retrieve any previously stored study ids.
    return await this.getItem("activatedStudies").then(
        stored => {
          // This branch will be hit even if `activatedStudies` was never
          // stored (e.g. this is the first save). Make sure to account for
          // that case by returning an empty array.
          return stored || [];
        }
      );
  }

  /**
   * Adds a study id to the stored list of activated studies.
   *
   * @param {String} studyId
   *        The id of the study to add to the list. If the id
   *        is already present, this function is a no-op.
   * @returns {Promise} resolved with the list of activated studies
   *          if the study is added to the list, rejected on errors.
   */
  async appendActivatedStudy(studyId) {
    // Attempt to retrieve any previously stored study ids.
    let storedIds = await this.getActivatedStudies();

    // If the study id is already present bail out.
    if (storedIds.includes(studyId)) {
      return storedIds;
    }

    storedIds.push(studyId);

    // Store the updated list.
    await browser.storage.local.set({activatedStudies: storedIds});

    return storedIds;
  }

  async removeActivatedStudy(studyId) {
    let storedIds = await this.getActivatedStudies();
    if (!storedIds.includes(studyId)) {
      return storedIds;
    }

    storedIds = storedIds.filter(s => s !== studyId);

    // Store the updated list.
    await browser.storage.local.set({activatedStudies: storedIds});

    return storedIds;
  }

  async clearActivatedStudies() {
    return await browser.storage.local.remove("activatedStudies");
  }

  /**
   * Record that user consented to join a study, but
   * the study was not installed yet.
   *
   * @param {String} the study id.
   */
  addPendingConsent(studyId) {
    if (!this.pendingConsents.includes(studyId)) {
      this.pendingConsents.push(studyId);
    }
  }

  /**
   * Remove the given study from the pending consent state.
   *
   * @returns {Boolean} whether or not the study was in the
   *          "pending consent" state.
   */
  removePendingConsent(studyId) {
    if (!this.pendingConsents.includes(studyId)) {
      return false;
    }

    this.pendingConsents = this.pendingConsents.filter(s => s !== studyId);

    return true;
  }
}

const GLEAN_SCHEMA_VERSION = 1;
const GLEAN_VERSION = "0.15.0";
const PING_INFO_STORAGE = "glean_ping_info";
const CLIENT_INFO_STORAGE = "glean_client_info";
const KNOWN_CLIENT_ID = "c0ffeec0-ffee-c0ff-eec0-ffeec0ffeec0";
const DEFAULT_TELEMETRY_ENDPOINT = "https://incoming.telemetry.mozilla.org";
const DELETION_REQUEST_PING_NAME = "deletion-request";
const GLEAN_MAX_SOURCE_TAGS = 5;

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

var DispatcherState;
(function (DispatcherState) {
    DispatcherState[DispatcherState["Uninitialized"] = 0] = "Uninitialized";
    DispatcherState[DispatcherState["Idle"] = 1] = "Idle";
    DispatcherState[DispatcherState["Processing"] = 2] = "Processing";
    DispatcherState[DispatcherState["Stopped"] = 3] = "Stopped";
})(DispatcherState || (DispatcherState = {}));
var Commands;
(function (Commands) {
    Commands[Commands["Task"] = 0] = "Task";
    Commands[Commands["Stop"] = 1] = "Stop";
    Commands[Commands["Clear"] = 2] = "Clear";
    Commands[Commands["TestTask"] = 3] = "TestTask";
})(Commands || (Commands = {}));
class Dispatcher {
    constructor(maxPreInitQueueSize = 100) {
        this.maxPreInitQueueSize = maxPreInitQueueSize;
        this.queue = [];
        this.state = 0;
    }
    getNextCommand() {
        return this.queue.shift();
    }
    async executeTask(task) {
        try {
            await task();
        }
        catch (e) {
            console.error("Error executing task:", e);
        }
    }
    async execute() {
        let nextCommand = this.getNextCommand();
        while (nextCommand) {
            switch (nextCommand.command) {
                case (1):
                    this.state = 3;
                    return;
                case (2):
                    this.queue.forEach(c => {
                        if (c.command === 3) {
                            c.resolver();
                        }
                    });
                    this.queue = [];
                    this.state = 3;
                    return;
                case (3):
                    await this.executeTask(nextCommand.task);
                    nextCommand.resolver();
                    nextCommand = this.getNextCommand();
                    continue;
                case (0):
                    await this.executeTask(nextCommand.task);
                    nextCommand = this.getNextCommand();
            }
        }
    }
    triggerExecution() {
        if (this.state === 1 && this.queue.length > 0) {
            this.state = 2;
            this.currentJob = this.execute();
            this.currentJob
                .then(() => {
                this.currentJob = undefined;
                if (this.state === 2) {
                    this.state = 1;
                }
            })
                .catch(error => {
                console.error("IMPOSSIBLE: Something went wrong while the dispatcher was executing the tasks queue.", error);
            });
        }
    }
    launchInternal(command, priorityTask = false) {
        if (!priorityTask && this.state === 0) {
            if (this.queue.length >= this.maxPreInitQueueSize) {
                console.warn("Unable to enqueue task, pre init queue is full.");
                return false;
            }
        }
        if (priorityTask) {
            this.queue.unshift(command);
        }
        else {
            this.queue.push(command);
        }
        this.triggerExecution();
        return true;
    }
    launch(task) {
        this.launchInternal({
            task,
            command: 0
        });
    }
    flushInit(task) {
        if (this.state !== 0) {
            console.warn("Attempted to initialize the Dispatcher, but it is already initialized. Ignoring.");
            return;
        }
        if (task) {
            this.launchInternal({
                task,
                command: 0
            }, true);
        }
        this.state = 1;
        this.triggerExecution();
    }
    clear() {
        this.launchInternal({ command: 2 }, true);
        this.resume();
    }
    stop() {
        this.launchInternal({ command: 1 }, true);
    }
    resume() {
        if (this.state === 3) {
            this.state = 1;
            this.triggerExecution();
        }
    }
    async testBlockOnQueue() {
        return this.currentJob && await this.currentJob;
    }
    async testUninitialize() {
        if (this.state === 0) {
            return;
        }
        this.clear();
        await this.testBlockOnQueue();
        this.state = 0;
    }
    testLaunch(task) {
        return new Promise((resolver, reject) => {
            this.resume();
            const wasLaunched = this.launchInternal({
                resolver,
                task,
                command: 3
            });
            if (!wasLaunched) {
                reject();
            }
        });
    }
}

class Context {
    constructor() {
        this._initialized = false;
    }
    static get instance() {
        if (!Context._instance) {
            Context._instance = new Context();
        }
        return Context._instance;
    }
    static async testUninitialize() {
        if (Context.instance._dispatcher) {
            await Context.instance._dispatcher.testUninitialize();
        }
        Context.instance._dispatcher = null;
        Context.initialized = false;
    }
    static get dispatcher() {
        if (!Context.instance._dispatcher) {
            Context.instance._dispatcher = new Dispatcher();
        }
        return Context.instance._dispatcher;
    }
    static set dispatcher(dispatcher) {
        Context.instance._dispatcher = dispatcher;
    }
    static get uploadEnabled() {
        return Context.instance._uploadEnabled;
    }
    static set uploadEnabled(upload) {
        Context.instance._uploadEnabled = upload;
    }
    static get metricsDatabase() {
        return Context.instance._metricsDatabase;
    }
    static set metricsDatabase(db) {
        Context.instance._metricsDatabase = db;
    }
    static get eventsDatabase() {
        return Context.instance._eventsDatabase;
    }
    static set eventsDatabase(db) {
        Context.instance._eventsDatabase = db;
    }
    static get pingsDatabase() {
        return Context.instance._pingsDatabase;
    }
    static set pingsDatabase(db) {
        Context.instance._pingsDatabase = db;
    }
    static get errorManager() {
        return Context.instance._errorManager;
    }
    static set errorManager(db) {
        Context.instance._errorManager = db;
    }
    static get applicationId() {
        return Context.instance._applicationId;
    }
    static set applicationId(id) {
        Context.instance._applicationId = id;
    }
    static get initialized() {
        return Context.instance._initialized;
    }
    static set initialized(init) {
        Context.instance._initialized = init;
    }
    static get debugOptions() {
        return Context.instance._debugOptions;
    }
    static set debugOptions(options) {
        Context.instance._debugOptions = options;
    }
}

var ErrorType;
(function (ErrorType) {
    ErrorType["InvalidValue"] = "invalid_value";
    ErrorType["InvalidLabel"] = "invalid_label";
    ErrorType["InvalidState"] = "invalid_state";
    ErrorType["InvalidOverflow"] = "invalid_overflow";
})(ErrorType || (ErrorType = {}));

function isJSONValue(v) {
    if (isString(v) || isBoolean(v) || isNumber(v)) {
        return true;
    }
    if (isObject(v)) {
        if (Object.keys(v).length === 0) {
            return true;
        }
        for (const key in v) {
            return isJSONValue(v[key]);
        }
    }
    if (Array.isArray(v)) {
        return v.every((e) => isJSONValue(e));
    }
    return false;
}
function isObject(v) {
    return (typeof v === "object" && v !== null && v.constructor === Object);
}
function isUndefined(v) {
    return typeof v === "undefined";
}
function isString(v) {
    return typeof v === "string";
}
function isBoolean(v) {
    return typeof v === "boolean";
}
function isNumber(v) {
    return typeof v === "number" && !isNaN(v);
}
function isInteger(v) {
    return isNumber(v) && Number.isInteger(v);
}
function sanitizeApplicationId(applicationId) {
    return applicationId.replace(/[^a-z0-9]+/gi, "-").toLowerCase();
}
function validateURL(v) {
    const urlPattern = /^(http|https):\/\/[a-zA-Z0-9._-]+(:\d+){0,1}(\/{0,1})$/i;
    return urlPattern.test(v);
}
function validateHeader(v) {
    return /^[a-z0-9-]{1,20}$/i.test(v);
}
function generateUUIDv4() {
    if (typeof crypto !== "undefined") {
        return v4();
    }
    else {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, v = c == "x" ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
async function truncateStringAtBoundaryWithError(metric, value, length) {
    const truncated = value.substr(0, length);
    if (truncated !== value) {
        await Context.errorManager.record(metric, ErrorType.InvalidOverflow, `Value length ${value.length} exceeds maximum of ${length}.`);
    }
    return truncated;
}

class Configuration {
    constructor(config) {
        this.appBuild = config === null || config === void 0 ? void 0 : config.appBuild;
        this.appDisplayVersion = config === null || config === void 0 ? void 0 : config.appDisplayVersion;
        this.debug = Configuration.sanitizeDebugOptions(config === null || config === void 0 ? void 0 : config.debug);
        if ((config === null || config === void 0 ? void 0 : config.serverEndpoint) && !validateURL(config.serverEndpoint)) {
            throw new Error(`Unable to initialize Glean, serverEndpoint ${config.serverEndpoint} is an invalid URL.`);
        }
        this.serverEndpoint = (config && config.serverEndpoint)
            ? config.serverEndpoint : DEFAULT_TELEMETRY_ENDPOINT;
        this.httpClient = config === null || config === void 0 ? void 0 : config.httpClient;
    }
    static sanitizeDebugOptions(debug) {
        const correctedDebugOptions = debug || {};
        if ((debug === null || debug === void 0 ? void 0 : debug.debugViewTag) !== undefined && !Configuration.validateDebugViewTag(debug === null || debug === void 0 ? void 0 : debug.debugViewTag)) {
            delete correctedDebugOptions["debugViewTag"];
        }
        if ((debug === null || debug === void 0 ? void 0 : debug.sourceTags) !== undefined && !Configuration.validateSourceTags(debug === null || debug === void 0 ? void 0 : debug.sourceTags)) {
            delete correctedDebugOptions["sourceTags"];
        }
        return correctedDebugOptions;
    }
    static validateDebugViewTag(tag) {
        const validation = validateHeader(tag);
        if (!validation) {
            console.error(`"${tag}" is not a valid \`debugViewTag\` value.`, "Please make sure the value passed satisfies the regex `^[a-zA-Z0-9-]{1,20}$`.");
        }
        return validation;
    }
    static validateSourceTags(tags) {
        if (tags.length < 1 || tags.length > GLEAN_MAX_SOURCE_TAGS) {
            console.error(`A list of tags cannot contain more than ${GLEAN_MAX_SOURCE_TAGS} elements.`);
            return false;
        }
        for (const tag of tags) {
            if (tag.startsWith("glean")) {
                console.error("Tags starting with `glean` are reserved and must not be used.");
                return false;
            }
            if (!validateHeader(tag)) {
                return false;
            }
        }
        return true;
    }
}

class Metric {
    constructor(v) {
        if (!this.validate(v)) {
            throw new Error("Unable to create new Metric instance, values is in unexpected format.");
        }
        this._inner = v;
    }
    get() {
        return this._inner;
    }
    set(v) {
        if (!this.validate(v)) {
            console.error(`Unable to set metric to ${JSON.stringify(v)}. Value is in unexpected format. Ignoring.`);
            return;
        }
        this._inner = v;
    }
}

class LabeledMetric extends Metric {
    constructor(v) {
        super(v);
    }
    validate(v) {
        return true;
    }
    payload() {
        return this._inner;
    }
}
const MAX_LABELS = 16;
const MAX_LABEL_LENGTH = 61;
const OTHER_LABEL = "__other__";
const LABEL_REGEX = /^[a-z_][a-z0-9_-]{0,29}(\.[a-z_][a-z0-9_-]{0,29})*$/;
function combineIdentifierAndLabel(metricName, label) {
    return `${metricName}/${label}`;
}
function stripLabel(identifier) {
    return identifier.split("/")[0];
}
async function getValidDynamicLabel(metricsDatabase, metric) {
    if (metric.dynamicLabel === undefined) {
        throw new Error("This point should never be reached.");
    }
    const key = combineIdentifierAndLabel(metric.baseIdentifier(), metric.dynamicLabel);
    for (const ping of metric.sendInPings) {
        if (await metricsDatabase.hasMetric(metric.lifetime, ping, metric.type, key)) {
            return key;
        }
    }
    let numUsedKeys = 0;
    for (const ping of metric.sendInPings) {
        numUsedKeys += await metricsDatabase.countByBaseIdentifier(metric.lifetime, ping, metric.type, metric.baseIdentifier());
    }
    let hitError = false;
    if (numUsedKeys >= MAX_LABELS) {
        hitError = true;
    }
    else if (metric.dynamicLabel.length > MAX_LABEL_LENGTH) {
        hitError = true;
        await Context.errorManager.record(metric, ErrorType.InvalidLabel, `Label length ${metric.dynamicLabel.length} exceeds maximum of ${MAX_LABEL_LENGTH}.`);
    }
    else if (!LABEL_REGEX.test(metric.dynamicLabel)) {
        hitError = true;
        await Context.errorManager.record(metric, ErrorType.InvalidLabel, `Label must be snake_case, got '${metric.dynamicLabel}'.`);
    }
    return (hitError)
        ? combineIdentifierAndLabel(metric.baseIdentifier(), OTHER_LABEL)
        : key;
}
class LabeledMetricType {
    constructor(meta, submetric, labels) {
        return new Proxy(this, {
            get: (_target, label) => {
                if (labels) {
                    return LabeledMetricType.createFromStaticLabel(meta, submetric, labels, label);
                }
                return LabeledMetricType.createFromDynamicLabel(meta, submetric, label);
            }
        });
    }
    static createFromStaticLabel(meta, submetricClass, allowedLabels, label) {
        const adjustedLabel = allowedLabels.includes(label) ? label : OTHER_LABEL;
        const newMeta = {
            ...meta,
            name: combineIdentifierAndLabel(meta.name, adjustedLabel)
        };
        return new submetricClass(newMeta);
    }
    static createFromDynamicLabel(meta, submetricClass, label) {
        const newMeta = {
            ...meta,
            dynamicLabel: label
        };
        return new submetricClass(newMeta);
    }
}

class MetricType {
    constructor(type, meta) {
        this.type = type;
        this.name = meta.name;
        this.category = meta.category;
        this.sendInPings = meta.sendInPings;
        this.lifetime = meta.lifetime;
        this.disabled = meta.disabled;
        this.dynamicLabel = meta.dynamicLabel;
    }
    baseIdentifier() {
        if (this.category.length > 0) {
            return `${this.category}.${this.name}`;
        }
        else {
            return this.name;
        }
    }
    async identifier(metricsDatabase) {
        const baseIdentifier = this.baseIdentifier();
        if (!isUndefined(this.dynamicLabel)) {
            return await getValidDynamicLabel(metricsDatabase, this);
        }
        else {
            return baseIdentifier;
        }
    }
    shouldRecord(uploadEnabled) {
        return (uploadEnabled && !this.disabled);
    }
    async testGetNumRecordedErrors(errorType, ping = this.sendInPings[0]) {
        return Context.errorManager.testGetNumRecordedErrors(this, errorType, ping);
    }
}

class BooleanMetric extends Metric {
    constructor(v) {
        super(v);
    }
    validate(v) {
        return isBoolean(v);
    }
    payload() {
        return this._inner;
    }
}
class BooleanMetricType extends MetricType {
    constructor(meta) {
        super("boolean", meta);
    }
    set(value) {
        Context.dispatcher.launch(async () => {
            if (!this.shouldRecord(Context.uploadEnabled)) {
                return;
            }
            const metric = new BooleanMetric(value);
            await Context.metricsDatabase.record(this, metric);
        });
    }
    async testGetValue(ping = this.sendInPings[0]) {
        let metric;
        await Context.dispatcher.testLaunch(async () => {
            metric = await Context.metricsDatabase.getMetric(ping, this);
        });
        return metric;
    }
}

class CounterMetric extends Metric {
    constructor(v) {
        super(v);
    }
    validate(v) {
        if (!isInteger(v)) {
            return false;
        }
        if (v <= 0) {
            return false;
        }
        return true;
    }
    payload() {
        return this._inner;
    }
}
class CounterMetricType extends MetricType {
    constructor(meta) {
        super("counter", meta);
    }
    static async _private_addUndispatched(instance, amount) {
        if (!instance.shouldRecord(Context.uploadEnabled)) {
            return;
        }
        if (isUndefined(amount)) {
            amount = 1;
        }
        if (amount <= 0) {
            await Context.errorManager.record(instance, ErrorType.InvalidValue, `Added negative and zero value ${amount}`);
            return;
        }
        const transformFn = ((amount) => {
            return (v) => {
                let metric;
                let result;
                try {
                    metric = new CounterMetric(v);
                    result = metric.get() + amount;
                }
                catch (_a) {
                    metric = new CounterMetric(amount);
                    result = amount;
                }
                if (result > Number.MAX_SAFE_INTEGER) {
                    result = Number.MAX_SAFE_INTEGER;
                }
                metric.set(result);
                return metric;
            };
        })(amount);
        await Context.metricsDatabase.transform(instance, transformFn);
    }
    add(amount) {
        Context.dispatcher.launch(async () => CounterMetricType._private_addUndispatched(this, amount));
    }
    async testGetValue(ping = this.sendInPings[0]) {
        let metric;
        await Context.dispatcher.testLaunch(async () => {
            metric = await Context.metricsDatabase.getMetric(ping, this);
        });
        return metric;
    }
}

var TimeUnit;
(function (TimeUnit) {
    TimeUnit["Nanosecond"] = "nanosecond";
    TimeUnit["Microsecond"] = "microsecond";
    TimeUnit["Millisecond"] = "millisecond";
    TimeUnit["Second"] = "second";
    TimeUnit["Minute"] = "minute";
    TimeUnit["Hour"] = "hour";
    TimeUnit["Day"] = "day";
})(TimeUnit || (TimeUnit = {}));
var TimeUnit$1 = TimeUnit;

function formatTimezoneOffset(timezone) {
    const offset = (timezone / 60) * -1;
    const sign = offset > 0 ? "+" : "-";
    const hours = Math.abs(offset).toString().padStart(2, "0");
    return `${sign}${hours}:00`;
}
class DatetimeMetric extends Metric {
    constructor(v) {
        super(v);
    }
    static fromDate(v, timeUnit) {
        return new DatetimeMetric({
            timeUnit,
            timezone: v.getTimezoneOffset(),
            date: v.toISOString()
        });
    }
    get date() {
        return new Date(this._inner.date);
    }
    get timezone() {
        return this._inner.timezone;
    }
    get timeUnit() {
        return this._inner.timeUnit;
    }
    get dateISOString() {
        return this._inner.date;
    }
    validate(v) {
        if (!isObject(v) || Object.keys(v).length !== 3) {
            return false;
        }
        const timeUnitVerification = "timeUnit" in v && isString(v.timeUnit) && Object.values(TimeUnit$1).includes(v.timeUnit);
        const timezoneVerification = "timezone" in v && isNumber(v.timezone);
        const dateVerification = "date" in v && isString(v.date) && v.date.length === 24 && !isNaN(Date.parse(v.date));
        if (!timeUnitVerification || !timezoneVerification || !dateVerification) {
            return false;
        }
        return true;
    }
    payload() {
        const extractedDateInfo = this.dateISOString.match(/\d+/g);
        if (!extractedDateInfo || extractedDateInfo.length < 0) {
            throw new Error("IMPOSSIBLE: Unable to extract date information from DatetimeMetric.");
        }
        const correctedDate = new Date(parseInt(extractedDateInfo[0]), parseInt(extractedDateInfo[1]) - 1, parseInt(extractedDateInfo[2]), parseInt(extractedDateInfo[3]) - (this.timezone / 60), parseInt(extractedDateInfo[4]), parseInt(extractedDateInfo[5]), parseInt(extractedDateInfo[6]));
        const timezone = formatTimezoneOffset(this.timezone);
        const year = correctedDate.getFullYear().toString().padStart(2, "0");
        const month = (correctedDate.getMonth() + 1).toString().padStart(2, "0");
        const day = correctedDate.getDate().toString().padStart(2, "0");
        if (this.timeUnit === TimeUnit$1.Day) {
            return `${year}-${month}-${day}${timezone}`;
        }
        const hours = correctedDate.getHours().toString().padStart(2, "0");
        if (this.timeUnit === TimeUnit$1.Hour) {
            return `${year}-${month}-${day}T${hours}${timezone}`;
        }
        const minutes = correctedDate.getMinutes().toString().padStart(2, "0");
        if (this.timeUnit === TimeUnit$1.Minute) {
            return `${year}-${month}-${day}T${hours}:${minutes}${timezone}`;
        }
        const seconds = correctedDate.getSeconds().toString().padStart(2, "0");
        if (this.timeUnit === TimeUnit$1.Second) {
            return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${timezone}`;
        }
        const milliseconds = correctedDate.getMilliseconds().toString().padStart(3, "0");
        if (this.timeUnit === TimeUnit$1.Millisecond) {
            return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}${timezone}`;
        }
        if (this.timeUnit === TimeUnit$1.Microsecond) {
            return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}000${timezone}`;
        }
        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}000000${timezone}`;
    }
}
class DatetimeMetricType extends MetricType {
    constructor(meta, timeUnit) {
        super("datetime", meta);
        this.timeUnit = timeUnit;
    }
    static async _private_setUndispatched(instance, value) {
        if (!instance.shouldRecord(Context.uploadEnabled)) {
            return;
        }
        if (!value) {
            value = new Date();
        }
        const truncatedDate = value;
        switch (instance.timeUnit) {
            case (TimeUnit$1.Day):
                truncatedDate.setMilliseconds(0);
                truncatedDate.setSeconds(0);
                truncatedDate.setMinutes(0);
                truncatedDate.setMilliseconds(0);
            case (TimeUnit$1.Hour):
                truncatedDate.setMilliseconds(0);
                truncatedDate.setSeconds(0);
                truncatedDate.setMinutes(0);
            case (TimeUnit$1.Minute):
                truncatedDate.setMilliseconds(0);
                truncatedDate.setSeconds(0);
            case (TimeUnit$1.Second):
                truncatedDate.setMilliseconds(0);
        }
        const metric = DatetimeMetric.fromDate(value, instance.timeUnit);
        await Context.metricsDatabase.record(instance, metric);
    }
    set(value) {
        Context.dispatcher.launch(() => DatetimeMetricType._private_setUndispatched(this, value));
    }
    async testGetValueAsDatetimeMetric(ping) {
        let value;
        await Context.dispatcher.testLaunch(async () => {
            value = await Context.metricsDatabase.getMetric(ping, this);
        });
        if (value) {
            return new DatetimeMetric(value);
        }
    }
    async testGetValueAsString(ping = this.sendInPings[0]) {
        const metric = await this.testGetValueAsDatetimeMetric(ping);
        return metric ? metric.payload() : undefined;
    }
    async testGetValue(ping = this.sendInPings[0]) {
        const metric = await this.testGetValueAsDatetimeMetric(ping);
        return metric ? metric.date : undefined;
    }
}

class QuantityMetric extends Metric {
    constructor(v) {
        super(v);
    }
    validate(v) {
        if (!isInteger(v)) {
            return false;
        }
        if (v < 0) {
            return false;
        }
        return true;
    }
    payload() {
        return this._inner;
    }
}
class QuantityMetricType extends MetricType {
    constructor(meta) {
        super("quantity", meta);
    }
    static async _private_setUndispatched(instance, value) {
        if (!instance.shouldRecord(Context.uploadEnabled)) {
            return;
        }
        if (value < 0) {
            await Context.errorManager.record(instance, ErrorType.InvalidValue, `Set negative value ${value}`);
            return;
        }
        if (value > Number.MAX_SAFE_INTEGER) {
            value = Number.MAX_SAFE_INTEGER;
        }
        const metric = new QuantityMetric(value);
        await Context.metricsDatabase.record(instance, metric);
    }
    set(value) {
        Context.dispatcher.launch(() => QuantityMetricType._private_setUndispatched(this, value));
    }
    async testGetValue(ping = this.sendInPings[0]) {
        let metric;
        await Context.dispatcher.testLaunch(async () => {
            metric = await Context.metricsDatabase.getMetric(ping, this);
        });
        return metric;
    }
}

const MAX_LENGTH_VALUE = 100;
class StringMetric extends Metric {
    constructor(v) {
        super(v);
    }
    validate(v) {
        if (!isString(v)) {
            return false;
        }
        if (v.length > MAX_LENGTH_VALUE) {
            return false;
        }
        return true;
    }
    payload() {
        return this._inner;
    }
}
class StringMetricType extends MetricType {
    constructor(meta) {
        super("string", meta);
    }
    static async _private_setUndispatched(instance, value) {
        if (!instance.shouldRecord(Context.uploadEnabled)) {
            return;
        }
        const truncatedValue = await truncateStringAtBoundaryWithError(instance, value, MAX_LENGTH_VALUE);
        const metric = new StringMetric(truncatedValue);
        await Context.metricsDatabase.record(instance, metric);
    }
    set(value) {
        Context.dispatcher.launch(() => StringMetricType._private_setUndispatched(this, value));
    }
    async testGetValue(ping = this.sendInPings[0]) {
        let metric;
        await Context.dispatcher.testLaunch(async () => {
            metric = await Context.metricsDatabase.getMetric(ping, this);
        });
        return metric;
    }
}

class TimespanMetric extends Metric {
    constructor(v) {
        super(v);
    }
    get timespan() {
        switch (this._inner.timeUnit) {
            case TimeUnit$1.Nanosecond:
                return this._inner.timespan * 10 ** 6;
            case TimeUnit$1.Microsecond:
                return this._inner.timespan * 10 ** 3;
            case TimeUnit$1.Millisecond:
                return this._inner.timespan;
            case TimeUnit$1.Second:
                return Math.round(this._inner.timespan / 1000);
            case TimeUnit$1.Minute:
                return Math.round(this._inner.timespan / 1000 / 60);
            case TimeUnit$1.Hour:
                return Math.round(this._inner.timespan / 1000 / 60 / 60);
            case TimeUnit$1.Day:
                return Math.round(this._inner.timespan / 1000 / 60 / 60 / 24);
        }
    }
    validate(v) {
        if (!isObject(v) || Object.keys(v).length !== 2) {
            return false;
        }
        const timeUnitVerification = "timeUnit" in v && isString(v.timeUnit) && Object.values(TimeUnit$1).includes(v.timeUnit);
        const timespanVerification = "timespan" in v && isNumber(v.timespan) && v.timespan >= 0;
        if (!timeUnitVerification || !timespanVerification) {
            return false;
        }
        return true;
    }
    payload() {
        return {
            time_unit: this._inner.timeUnit,
            value: this.timespan
        };
    }
}

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
class UUIDMetric extends Metric {
    constructor(v) {
        super(v);
    }
    validate(v) {
        if (!isString(v)) {
            return false;
        }
        return UUID_REGEX.test(v);
    }
    payload() {
        return this._inner;
    }
}
class UUIDMetricType extends MetricType {
    constructor(meta) {
        super("uuid", meta);
    }
    static async _private_setUndispatched(instance, value) {
        if (!instance.shouldRecord(Context.uploadEnabled)) {
            return;
        }
        if (!value) {
            value = generateUUIDv4();
        }
        let metric;
        try {
            metric = new UUIDMetric(value);
        }
        catch (_a) {
            await Context.errorManager.record(instance, ErrorType.InvalidValue, `"${value}" is not a valid UUID.`);
            return;
        }
        await Context.metricsDatabase.record(instance, metric);
    }
    set(value) {
        Context.dispatcher.launch(() => UUIDMetricType._private_setUndispatched(this, value));
    }
    generateAndSet() {
        if (!this.shouldRecord(Context.uploadEnabled)) {
            return;
        }
        const value = generateUUIDv4();
        this.set(value);
        return value;
    }
    async testGetValue(ping = this.sendInPings[0]) {
        let metric;
        await Context.dispatcher.testLaunch(async () => {
            metric = await Context.metricsDatabase.getMetric(ping, this);
        });
        return metric;
    }
}

const METRIC_MAP = Object.freeze({
    "boolean": BooleanMetric,
    "counter": CounterMetric,
    "datetime": DatetimeMetric,
    "labeled_boolean": LabeledMetric,
    "labeled_counter": LabeledMetric,
    "labeled_string": LabeledMetric,
    "quantity": QuantityMetric,
    "string": StringMetric,
    "timespan": TimespanMetric,
    "uuid": UUIDMetric,
});
function createMetric(type, v) {
    if (!(type in METRIC_MAP)) {
        throw new Error(`Unable to create metric of unknown type ${type}`);
    }
    return new METRIC_MAP[type](v);
}
function validateMetricInternalRepresentation(type, v) {
    try {
        createMetric(type, v);
        return true;
    }
    catch (_a) {
        return false;
    }
}

function isValidInternalMetricsRepresentation(v) {
    if (isObject(v)) {
        for (const metricType in v) {
            const metrics = v[metricType];
            if (isObject(metrics)) {
                for (const metricIdentifier in metrics) {
                    if (!validateMetricInternalRepresentation(metricType, metrics[metricIdentifier])) {
                        return false;
                    }
                }
            }
            else {
                return false;
            }
        }
        return true;
    }
    else {
        return false;
    }
}
function createMetricsPayload(v) {
    const result = {};
    for (const metricType in v) {
        const metrics = v[metricType];
        result[metricType] = {};
        for (const metricIdentifier in metrics) {
            const metric = createMetric(metricType, metrics[metricIdentifier]);
            result[metricType][metricIdentifier] = metric.payload();
        }
    }
    return result;
}
class MetricsDatabase {
    constructor(storage) {
        this.userStore = new storage("userLifetimeMetrics");
        this.pingStore = new storage("pingLifetimeMetrics");
        this.appStore = new storage("appLifetimeMetrics");
    }
    _chooseStore(lifetime) {
        switch (lifetime) {
            case "user":
                return this.userStore;
            case "ping":
                return this.pingStore;
            case "application":
                return this.appStore;
        }
    }
    async record(metric, value) {
        await this.transform(metric, () => value);
    }
    async transform(metric, transformFn) {
        if (metric.disabled) {
            return;
        }
        const store = this._chooseStore(metric.lifetime);
        const storageKey = await metric.identifier(this);
        for (const ping of metric.sendInPings) {
            const finalTransformFn = (v) => transformFn(v).get();
            await store.update([ping, metric.type, storageKey], finalTransformFn);
        }
    }
    async hasMetric(lifetime, ping, metricType, metricIdentifier) {
        const store = this._chooseStore(lifetime);
        const value = await store.get([ping, metricType, metricIdentifier]);
        return !isUndefined(value);
    }
    async countByBaseIdentifier(lifetime, ping, metricType, metricIdentifier) {
        const store = this._chooseStore(lifetime);
        const pingStorage = await store.get([ping, metricType]);
        if (isUndefined(pingStorage)) {
            return 0;
        }
        return Object.keys(pingStorage).filter(n => n.startsWith(metricIdentifier)).length;
    }
    async getMetric(ping, metric) {
        const store = this._chooseStore(metric.lifetime);
        const storageKey = await metric.identifier(this);
        const value = await store.get([ping, metric.type, storageKey]);
        if (!isUndefined(value) && !validateMetricInternalRepresentation(metric.type, value)) {
            console.error(`Unexpected value found for metric ${storageKey}: ${JSON.stringify(value)}. Clearing.`);
            await store.delete([ping, metric.type, storageKey]);
            return;
        }
        else {
            return value;
        }
    }
    async getAndValidatePingData(ping, lifetime) {
        const store = this._chooseStore(lifetime);
        const data = await store.get([ping]);
        if (isUndefined(data)) {
            return {};
        }
        if (!isValidInternalMetricsRepresentation(data)) {
            console.error(`Unexpected value found for ping ${ping} in ${lifetime} store: ${JSON.stringify(data)}. Clearing.`);
            await store.delete([ping]);
            return {};
        }
        return data;
    }
    processLabeledMetric(snapshot, metricType, metricId, metricData) {
        const newType = `labeled_${metricType}`;
        const idLabelSplit = metricId.split("/", 2);
        const newId = idLabelSplit[0];
        const label = idLabelSplit[1];
        if (newType in snapshot && newId in snapshot[newType]) {
            const existingData = snapshot[newType][newId];
            snapshot[newType][newId] = {
                ...existingData,
                [label]: metricData
            };
        }
        else {
            snapshot[newType] = {
                ...snapshot[newType],
                [newId]: {
                    [label]: metricData
                }
            };
        }
    }
    async getPingMetrics(ping, clearPingLifetimeData) {
        const userData = await this.getAndValidatePingData(ping, "user");
        const pingData = await this.getAndValidatePingData(ping, "ping");
        const appData = await this.getAndValidatePingData(ping, "application");
        if (clearPingLifetimeData) {
            await this.clear("ping", ping);
        }
        const response = {};
        for (const data of [userData, pingData, appData]) {
            for (const metricType in data) {
                for (const metricId in data[metricType]) {
                    if (metricId.includes("/")) {
                        this.processLabeledMetric(response, metricType, metricId, data[metricType][metricId]);
                    }
                    else {
                        response[metricType] = {
                            ...response[metricType],
                            [metricId]: data[metricType][metricId]
                        };
                    }
                }
            }
        }
        if (Object.keys(response).length === 0) {
            return;
        }
        else {
            return createMetricsPayload(response);
        }
    }
    async clear(lifetime, ping) {
        const store = this._chooseStore(lifetime);
        const storageIndex = ping ? [ping] : [];
        await store.delete(storageIndex);
    }
    async clearAll() {
        await this.userStore.delete([]);
        await this.pingStore.delete([]);
        await this.appStore.delete([]);
    }
}

function isValidPingInternalRepresentation(v) {
    if (isObject(v) && (Object.keys(v).length === 2 || Object.keys(v).length === 3)) {
        const hasValidPath = "path" in v && isString(v.path);
        const hasValidPayload = "payload" in v && isJSONValue(v.payload) && isObject(v.payload);
        const hasValidHeaders = (!("headers" in v)) || (isJSONValue(v.headers) && isObject(v.headers));
        if (!hasValidPath || !hasValidPayload || !hasValidHeaders) {
            return false;
        }
        return true;
    }
    return false;
}
class PingsDatabase {
    constructor(store) {
        this.store = new store("pings");
    }
    attachObserver(observer) {
        this.observer = observer;
    }
    async recordPing(path, identifier, payload, headers) {
        const ping = {
            path,
            payload
        };
        if (headers) {
            ping.headers = headers;
        }
        await this.store.update([identifier], () => ping);
        this.observer && this.observer.update(identifier, ping);
    }
    async deletePing(identifier) {
        await this.store.delete([identifier]);
    }
    async getAllPings() {
        const allStoredPings = await this.store._getWholeStore();
        const finalPings = {};
        for (const identifier in allStoredPings) {
            const ping = allStoredPings[identifier];
            if (isValidPingInternalRepresentation(ping)) {
                finalPings[identifier] = ping;
            }
            else {
                console.warn("Unexpected data found in pings database. Deleting.");
                await this.store.delete([identifier]);
            }
        }
        return finalPings;
    }
    async scanPendingPings() {
        if (!this.observer) {
            return;
        }
        const pings = await this.getAllPings();
        for (const identifier in pings) {
            this.observer.update(identifier, pings[identifier]);
        }
    }
    async clearAll() {
        await this.store.delete([]);
    }
}

var PingUploaderStatus;
(function (PingUploaderStatus) {
    PingUploaderStatus[PingUploaderStatus["Idle"] = 0] = "Idle";
    PingUploaderStatus[PingUploaderStatus["Uploading"] = 1] = "Uploading";
    PingUploaderStatus[PingUploaderStatus["Cancelling"] = 2] = "Cancelling";
})(PingUploaderStatus || (PingUploaderStatus = {}));
class PingUploader {
    constructor(config, platform, pingsDatabase) {
        this.initialized = false;
        this.queue = [];
        this.status = 0;
        this.uploader = config.httpClient ? config.httpClient : platform.uploader;
        this.platformInfo = platform.info;
        this.serverEndpoint = config.serverEndpoint;
        this.pingsDatabase = pingsDatabase;
    }
    setInitialized(state) {
        this.initialized = state !== null && state !== void 0 ? state : true;
    }
    enqueuePing(ping) {
        let isDuplicate = false;
        for (const queuedPing of this.queue) {
            if (queuedPing.identifier === ping.identifier) {
                isDuplicate = true;
            }
        }
        !isDuplicate && this.queue.push(ping);
    }
    getNextPing() {
        return this.queue.shift();
    }
    async preparePingForUpload(ping) {
        const stringifiedBody = JSON.stringify(ping.payload);
        let headers = ping.headers || {};
        headers = {
            ...ping.headers,
            "Content-Type": "application/json; charset=utf-8",
            "Content-Length": stringifiedBody.length.toString(),
            "Date": (new Date()).toISOString(),
            "X-Client-Type": "Glean.js",
            "X-Client-Version": GLEAN_VERSION,
            "X-Telemetry-Agent": `Glean/${GLEAN_VERSION} (JS on ${await this.platformInfo.os()})`
        };
        return {
            headers,
            payload: stringifiedBody
        };
    }
    async attemptPingUpload(ping) {
        if (!this.initialized) {
            console.warn("Attempted to upload a ping, but Glean is not initialized yet. Ignoring.");
            return { result: 0 };
        }
        const finalPing = await this.preparePingForUpload(ping);
        const result = await this.uploader.post(`${this.serverEndpoint}${ping.path}`, finalPing.payload, finalPing.headers);
        return result;
    }
    async processPingUploadResponse(identifier, response) {
        const { status, result } = response;
        if (status && status >= 200 && status < 300) {
            console.info(`Ping ${identifier} succesfully sent ${status}.`);
            await this.pingsDatabase.deletePing(identifier);
            return false;
        }
        if (result === 1 || (status && status >= 400 && status < 500)) {
            console.warn(`Unrecoverable upload failure while attempting to send ping ${identifier}. Error was ${status !== null && status !== void 0 ? status : "no status"}.`);
            await this.pingsDatabase.deletePing(identifier);
            return false;
        }
        console.warn(`Recoverable upload failure while attempting to send ping ${identifier}, will retry. Error was ${status !== null && status !== void 0 ? status : "no status"}.`);
        return true;
    }
    async triggerUploadInternal() {
        let retries = 0;
        let nextPing = this.getNextPing();
        while (nextPing && this.status !== 2) {
            const status = await this.attemptPingUpload(nextPing);
            const shouldRetry = await this.processPingUploadResponse(nextPing.identifier, status);
            if (shouldRetry) {
                retries++;
                this.enqueuePing(nextPing);
            }
            if (retries >= 3) {
                console.info("Reached maximum recoverable failures for the current uploading window. You are done.");
                return;
            }
            nextPing = this.getNextPing();
        }
    }
    async triggerUpload() {
        if (this.status !== 0) {
            return;
        }
        this.status = 1;
        try {
            this.currentJob = this.triggerUploadInternal();
            await this.currentJob;
        }
        finally {
            this.status = 0;
        }
    }
    async cancelUpload() {
        if (this.status === 1) {
            this.status = 2;
            await this.currentJob;
        }
        return;
    }
    async clearPendingPingsQueue() {
        await this.cancelUpload();
        this.queue = [];
    }
    update(identifier, ping) {
        this.enqueuePing({ identifier, ...ping });
        void this.triggerUpload();
    }
}

class CoreMetrics {
    constructor() {
        this.clientId = new UUIDMetricType({
            name: "client_id",
            category: "",
            sendInPings: ["glean_client_info"],
            lifetime: "user",
            disabled: false,
        });
        this.firstRunDate = new DatetimeMetricType({
            name: "first_run_date",
            category: "",
            sendInPings: ["glean_client_info"],
            lifetime: "user",
            disabled: false,
        }, TimeUnit$1.Day);
        this.os = new StringMetricType({
            name: "os",
            category: "",
            sendInPings: ["glean_client_info"],
            lifetime: "application",
            disabled: false,
        });
        this.osVersion = new StringMetricType({
            name: "os_version",
            category: "",
            sendInPings: ["glean_client_info"],
            lifetime: "application",
            disabled: false,
        });
        this.architecture = new StringMetricType({
            name: "architecture",
            category: "",
            sendInPings: ["glean_client_info"],
            lifetime: "application",
            disabled: false,
        });
        this.locale = new StringMetricType({
            name: "locale",
            category: "",
            sendInPings: ["glean_client_info"],
            lifetime: "application",
            disabled: false,
        });
        this.appBuild = new StringMetricType({
            name: "app_build",
            category: "",
            sendInPings: ["glean_client_info"],
            lifetime: "application",
            disabled: false,
        });
        this.appDisplayVersion = new StringMetricType({
            name: "app_display_version",
            category: "",
            sendInPings: ["glean_client_info"],
            lifetime: "application",
            disabled: false,
        });
    }
    async initialize(config, platform, metricsDatabase) {
        await this.initializeClientId(metricsDatabase);
        await this.initializeFirstRunDate(metricsDatabase);
        await StringMetricType._private_setUndispatched(this.os, await platform.info.os());
        await StringMetricType._private_setUndispatched(this.osVersion, await platform.info.osVersion());
        await StringMetricType._private_setUndispatched(this.architecture, await platform.info.arch());
        await StringMetricType._private_setUndispatched(this.locale, await platform.info.locale());
        await StringMetricType._private_setUndispatched(this.appBuild, config.appBuild || "Unknown");
        await StringMetricType._private_setUndispatched(this.appDisplayVersion, config.appDisplayVersion || "Unknown");
    }
    async initializeClientId(metricsDatabase) {
        let needNewClientId = false;
        const clientIdData = await metricsDatabase.getMetric(CLIENT_INFO_STORAGE, this.clientId);
        if (clientIdData) {
            try {
                const currentClientId = createMetric("uuid", clientIdData);
                if (currentClientId.payload() === KNOWN_CLIENT_ID) {
                    needNewClientId = true;
                }
            }
            catch (_a) {
                console.warn("Unexpected value found for Glean clientId. Ignoring.");
                needNewClientId = true;
            }
        }
        else {
            needNewClientId = true;
        }
        if (needNewClientId) {
            await UUIDMetricType._private_setUndispatched(this.clientId, generateUUIDv4());
        }
    }
    async initializeFirstRunDate(metricsDatabase) {
        const firstRunDate = await metricsDatabase.getMetric(CLIENT_INFO_STORAGE, this.firstRunDate);
        if (!firstRunDate) {
            await DatetimeMetricType._private_setUndispatched(this.firstRunDate);
        }
    }
}

class RecordedEvent {
    constructor(category, name, timestamp, extra) {
        this.category = category;
        this.name = name;
        this.timestamp = timestamp;
        this.extra = extra;
    }
    static toJSONObject(e) {
        return {
            "category": e.category,
            "name": e.name,
            "timestamp": e.timestamp,
            "extra": e.extra,
        };
    }
    static fromJSONObject(e) {
        return new RecordedEvent(e["category"], e["name"], e["timestamp"], e["extra"]);
    }
}
class EventsDatabase {
    constructor(storage) {
        this.eventsStore = new storage("events");
    }
    async record(metric, value) {
        if (metric.disabled) {
            return;
        }
        for (const ping of metric.sendInPings) {
            const transformFn = (v) => {
                var _a;
                const existing = (_a = v) !== null && _a !== void 0 ? _a : [];
                existing.push(RecordedEvent.toJSONObject(value));
                return existing;
            };
            await this.eventsStore.update([ping], transformFn);
        }
    }
    async getEvents(ping, metric) {
        const events = await this.getAndValidatePingData(ping);
        if (events.length === 0) {
            return;
        }
        return events
            .filter((e) => {
            return (e.category === metric.category) && (e.name === metric.name);
        });
    }
    async getAndValidatePingData(ping) {
        const data = await this.eventsStore.get([ping]);
        if (isUndefined(data)) {
            return [];
        }
        if (!Array.isArray(data)) {
            console.error(`Unexpected value found for ping ${ping}: ${JSON.stringify(data)}. Clearing.`);
            await this.eventsStore.delete([ping]);
            return [];
        }
        return data.map((e) => RecordedEvent.fromJSONObject(e));
    }
    async getPingEvents(ping, clearPingLifetimeData) {
        const pingData = await this.getAndValidatePingData(ping);
        if (clearPingLifetimeData) {
            await this.eventsStore.delete([ping]);
        }
        if (pingData.length === 0) {
            return;
        }
        const sortedData = pingData.sort((a, b) => {
            return a.timestamp - b.timestamp;
        });
        const firstTimestamp = sortedData[0].timestamp;
        return sortedData.map((e) => {
            const adjusted = RecordedEvent.toJSONObject(e);
            adjusted["timestamp"] = e.timestamp - firstTimestamp;
            return adjusted;
        });
    }
    async clearAll() {
        await this.eventsStore.delete([]);
    }
}

class CoreEvent {
    constructor(name) {
        this.name = name;
    }
    get registeredPluginIdentifier() {
        var _a;
        return (_a = this.plugin) === null || _a === void 0 ? void 0 : _a.name;
    }
    registerPlugin(plugin) {
        if (this.plugin) {
            console.error(`Attempted to register plugin '${plugin.name}', which listens to the event '${plugin.event}'.`, `That event is already watched by plugin '${this.plugin.name}'`, `Plugin '${plugin.name}' will be ignored.`);
            return;
        }
        this.plugin = plugin;
    }
    deregisterPlugin() {
        this.plugin = undefined;
    }
    trigger(...args) {
        if (this.plugin) {
            return this.plugin.action(...args);
        }
    }
}
const CoreEvents = {
    afterPingCollection: new CoreEvent("afterPingCollection")
};

const GLEAN_START_TIME = new Date();
async function getSequenceNumber(metricsDatabase, ping) {
    const seq = new CounterMetricType({
        category: "",
        name: `${ping.name}#sequence`,
        sendInPings: [PING_INFO_STORAGE],
        lifetime: "user",
        disabled: false
    });
    const currentSeqData = await metricsDatabase.getMetric(PING_INFO_STORAGE, seq);
    await CounterMetricType._private_addUndispatched(seq, 1);
    if (currentSeqData) {
        try {
            const metric = new CounterMetric(currentSeqData);
            return metric.payload();
        }
        catch (e) {
            console.warn(`Unexpected value found for sequence number in ping ${ping.name}. Ignoring.`);
        }
    }
    return 0;
}
async function getStartEndTimes(metricsDatabase, ping) {
    const start = new DatetimeMetricType({
        category: "",
        name: `${ping.name}#start`,
        sendInPings: [PING_INFO_STORAGE],
        lifetime: "user",
        disabled: false
    }, TimeUnit$1.Minute);
    const startTimeData = await metricsDatabase.getMetric(PING_INFO_STORAGE, start);
    let startTime;
    if (startTimeData) {
        startTime = new DatetimeMetric(startTimeData);
    }
    else {
        startTime = DatetimeMetric.fromDate(GLEAN_START_TIME, TimeUnit$1.Minute);
    }
    const endTimeData = new Date();
    await DatetimeMetricType._private_setUndispatched(start, endTimeData);
    const endTime = DatetimeMetric.fromDate(endTimeData, TimeUnit$1.Minute);
    return {
        startTime: startTime.payload(),
        endTime: endTime.payload()
    };
}
async function buildPingInfoSection(metricsDatabase, ping, reason) {
    const seq = await getSequenceNumber(metricsDatabase, ping);
    const { startTime, endTime } = await getStartEndTimes(metricsDatabase, ping);
    const pingInfo = {
        seq,
        start_time: startTime,
        end_time: endTime
    };
    if (reason) {
        pingInfo.reason = reason;
    }
    return pingInfo;
}
async function buildClientInfoSection(metricsDatabase, ping) {
    let clientInfo = await metricsDatabase.getPingMetrics(CLIENT_INFO_STORAGE, true);
    if (!clientInfo) {
        console.warn("Empty client info data. Will submit anyways.");
        clientInfo = {};
    }
    let finalClientInfo = {
        "telemetry_sdk_build": GLEAN_VERSION
    };
    for (const metricType in clientInfo) {
        finalClientInfo = { ...finalClientInfo, ...clientInfo[metricType] };
    }
    if (!ping.includeClientId) {
        delete finalClientInfo["client_id"];
    }
    return finalClientInfo;
}
function getPingHeaders(debugOptions) {
    const headers = {};
    if (debugOptions === null || debugOptions === void 0 ? void 0 : debugOptions.debugViewTag) {
        headers["X-Debug-ID"] = debugOptions.debugViewTag;
    }
    if (debugOptions === null || debugOptions === void 0 ? void 0 : debugOptions.sourceTags) {
        headers["X-Source-Tags"] = debugOptions.sourceTags.toString();
    }
    if (Object.keys(headers).length > 0) {
        return headers;
    }
}
async function collectPing(metricsDatabase, eventsDatabase, ping, reason) {
    const metricsData = await metricsDatabase.getPingMetrics(ping.name, true);
    const eventsData = await eventsDatabase.getPingEvents(ping.name, true);
    if (!metricsData && !eventsData) {
        if (!ping.sendIfEmpty) {
            console.info(`Storage for ${ping.name} empty. Bailing out.`);
            return;
        }
        console.info(`Storage for ${ping.name} empty. Ping will still be sent.`);
    }
    const metrics = metricsData ? { metrics: metricsData } : {};
    const events = eventsData ? { events: eventsData } : {};
    const pingInfo = await buildPingInfoSection(metricsDatabase, ping, reason);
    const clientInfo = await buildClientInfoSection(metricsDatabase, ping);
    return {
        ...metrics,
        ...events,
        ping_info: pingInfo,
        client_info: clientInfo,
    };
}
function makePath(applicationId, identifier, ping) {
    return `/submit/${applicationId}/${ping.name}/${GLEAN_SCHEMA_VERSION}/${identifier}`;
}
async function collectAndStorePing(identifier, ping, reason) {
    const collectedPayload = await collectPing(Context.metricsDatabase, Context.eventsDatabase, ping, reason);
    if (!collectedPayload) {
        return;
    }
    let modifiedPayload;
    try {
        modifiedPayload = await CoreEvents.afterPingCollection.trigger(collectedPayload);
    }
    catch (e) {
        console.error(`Error while attempting to modify ping payload for the "${ping.name}" ping using`, `the ${JSON.stringify(CoreEvents.afterPingCollection.registeredPluginIdentifier)} plugin.`, "Ping will not be submitted. See more logs below.\n\n", e);
        return;
    }
    if (Context.debugOptions.logPings) {
        console.info(JSON.stringify(collectedPayload, null, 2));
    }
    const finalPayload = modifiedPayload ? modifiedPayload : collectedPayload;
    const headers = getPingHeaders(Context.debugOptions);
    return Context.pingsDatabase.recordPing(makePath(Context.applicationId, identifier, ping), identifier, finalPayload, headers);
}

class PingType {
    constructor(meta) {
        var _a;
        this.name = meta.name;
        this.includeClientId = meta.includeClientId;
        this.sendIfEmpty = meta.sendIfEmpty;
        this.reasonCodes = (_a = meta.reasonCodes) !== null && _a !== void 0 ? _a : [];
    }
    isDeletionRequest() {
        return this.name === DELETION_REQUEST_PING_NAME;
    }
    submit(reason) {
        if (this.testCallback) {
            this.testCallback(reason)
                .then(() => {
                PingType._private_internalSubmit(this, reason, this.resolveTestPromiseFunction);
            })
                .catch(e => {
                console.error(`There was an error validating "${this.name}" (${reason !== null && reason !== void 0 ? reason : "no reason"}):`, e);
                PingType._private_internalSubmit(this, reason, this.rejectTestPromiseFunction);
            });
        }
        else {
            PingType._private_internalSubmit(this, reason);
        }
    }
    static async _private_submitUndispatched(instance, reason, testResolver) {
        if (!Context.initialized) {
            console.info("Glean must be initialized before submitting pings.");
            return;
        }
        if (!Context.uploadEnabled && !instance.isDeletionRequest()) {
            console.info("Glean disabled: not submitting pings. Glean may still submit the deletion-request ping.");
            return;
        }
        let correctedReason = reason;
        if (reason && !instance.reasonCodes.includes(reason)) {
            console.error(`Invalid reason code ${reason} from ${this.name}. Ignoring.`);
            correctedReason = undefined;
        }
        const identifier = generateUUIDv4();
        await collectAndStorePing(identifier, instance, correctedReason);
        if (testResolver) {
            testResolver();
            instance.resolveTestPromiseFunction = undefined;
            instance.rejectTestPromiseFunction = undefined;
            instance.testCallback = undefined;
        }
    }
    static _private_internalSubmit(instance, reason, testResolver) {
        Context.dispatcher.launch(async () => {
            await PingType._private_submitUndispatched(instance, reason, testResolver);
        });
    }
    async testBeforeNextSubmit(callbackFn) {
        if (this.testCallback) {
            console.error(`There is an existing test call for ping "${this.name}". Ignoring.`);
            return;
        }
        return new Promise((resolve, reject) => {
            this.resolveTestPromiseFunction = resolve;
            this.rejectTestPromiseFunction = reject;
            this.testCallback = callbackFn;
        });
    }
}

class CorePings {
    constructor() {
        this.deletionRequest = new PingType({
            name: DELETION_REQUEST_PING_NAME,
            includeClientId: true,
            sendIfEmpty: true,
        });
    }
}

function registerPluginToEvent(plugin) {
    const eventName = plugin.event;
    if (eventName in CoreEvents) {
        const event = CoreEvents[eventName];
        event.registerPlugin(plugin);
        return;
    }
    console.error(`Attempted to register plugin '${plugin.name}', which listens to the event '${plugin.event}'.`, "That is not a valid Glean event. Ignoring");
}
function testResetEvents() {
    for (const event in CoreEvents) {
        CoreEvents[event].deregisterPlugin();
    }
}

function getErrorMetricForMetric(metric, error) {
    const identifier = metric.baseIdentifier();
    const name = stripLabel(identifier);
    return new CounterMetricType({
        name: combineIdentifierAndLabel(error, name),
        category: "glean.error",
        lifetime: "ping",
        sendInPings: metric.sendInPings,
        disabled: false,
    });
}
class ErrorManager {
    async record(metric, error, message, numErrors = 1) {
        const errorMetric = getErrorMetricForMetric(metric, error);
        console.warn(`${metric.baseIdentifier()}: ${message}`);
        if (numErrors > 0) {
            await CounterMetricType._private_addUndispatched(errorMetric, numErrors);
        }
    }
    async testGetNumRecordedErrors(metric, error, ping) {
        const errorMetric = getErrorMetricForMetric(metric, error);
        const numErrors = await errorMetric.testGetValue(ping);
        return numErrors || 0;
    }
}

function getValueFromNestedObject(obj, index) {
    if (index.length === 0) {
        throw Error("The index must contain at least one property to get.");
    }
    let target = obj;
    for (const key of index) {
        if (isObject(target) && key in target) {
            const temp = target[key];
            if (isJSONValue(temp)) {
                target = temp;
            }
        }
        else {
            return;
        }
    }
    return target;
}
function updateNestedObject(obj, index, transformFn) {
    if (index.length === 0) {
        throw Error("The index must contain at least one property to update.");
    }
    const returnObject = { ...obj };
    let target = returnObject;
    for (const key of index.slice(0, index.length - 1)) {
        if (!isObject(target[key])) {
            target[key] = {};
        }
        target = target[key];
    }
    const finalKey = index[index.length - 1];
    const current = target[finalKey];
    try {
        const value = transformFn(current);
        target[finalKey] = value;
        return returnObject;
    }
    catch (e) {
        console.error("Error while transforming stored value. Ignoring old value.", e);
        target[finalKey] = transformFn(undefined);
        return returnObject;
    }
}
function deleteKeyFromNestedObject(obj, index) {
    if (index.length === 0) {
        return {};
    }
    const returnObject = { ...obj };
    let target = returnObject;
    for (const key of index.slice(0, index.length - 1)) {
        const value = target[key];
        if (!isObject(value)) {
            throw Error("Attempted to delete an entry from an invalid index.");
        }
        else {
            target = value;
        }
    }
    const finalKey = index[index.length - 1];
    delete target[finalKey];
    return returnObject;
}

let globalStore = {};
class MockStore {
    constructor(rootKey) {
        this.rootKey = rootKey;
    }
    _getWholeStore() {
        const result = globalStore[this.rootKey] || {};
        return Promise.resolve(result);
    }
    get(index) {
        try {
            const value = getValueFromNestedObject(globalStore, [this.rootKey, ...index]);
            return Promise.resolve(value);
        }
        catch (e) {
            return Promise.reject(e);
        }
    }
    update(index, transformFn) {
        try {
            globalStore = updateNestedObject(globalStore, [this.rootKey, ...index], transformFn);
            return Promise.resolve();
        }
        catch (e) {
            return Promise.reject(e);
        }
    }
    delete(index) {
        try {
            globalStore = deleteKeyFromNestedObject(globalStore, [this.rootKey, ...index]);
        }
        catch (e) {
            console.warn(e.message, "Ignoring.");
        }
        return Promise.resolve();
    }
}

class MockUploader {
    post(_url, _body, _headers) {
        const result = {
            result: 2,
            status: 200
        };
        return Promise.resolve(result);
    }
}
const MockPlatformInfo = {
    os() {
        return Promise.resolve("Unknown");
    },
    osVersion() {
        return Promise.resolve("Unknown");
    },
    arch() {
        return Promise.resolve("Unknown");
    },
    locale() {
        return Promise.resolve("Unknown");
    },
};
const TestPlatform = {
    Storage: MockStore,
    uploader: new MockUploader(),
    info: MockPlatformInfo,
    name: "test"
};

class Glean$1 {
    constructor() {
        if (!isUndefined(Glean$1._instance)) {
            throw new Error(`Tried to instantiate Glean through \`new\`.
      Use Glean.instance instead to access the Glean singleton.`);
        }
        this._coreMetrics = new CoreMetrics();
        this._corePings = new CorePings();
    }
    static get instance() {
        if (!Glean$1._instance) {
            Glean$1._instance = new Glean$1();
        }
        return Glean$1._instance;
    }
    static get pingUploader() {
        return Glean$1.instance._pingUploader;
    }
    static get coreMetrics() {
        return Glean$1.instance._coreMetrics;
    }
    static get corePings() {
        return Glean$1.instance._corePings;
    }
    static async onUploadEnabled() {
        Context.uploadEnabled = true;
        await Glean$1.coreMetrics.initialize(Glean$1.instance._config, Glean$1.platform, Context.metricsDatabase);
    }
    static async onUploadDisabled() {
        await PingType._private_submitUndispatched(Glean$1.corePings.deletionRequest);
        Context.uploadEnabled = false;
        await Glean$1.clearMetrics();
    }
    static async clearMetrics() {
        await Glean$1.pingUploader.clearPendingPingsQueue();
        let firstRunDate;
        try {
            firstRunDate = new DatetimeMetric(await Context.metricsDatabase.getMetric(CLIENT_INFO_STORAGE, Glean$1.coreMetrics.firstRunDate)).date;
        }
        catch (_a) {
            firstRunDate = new Date();
        }
        await Context.eventsDatabase.clearAll();
        await Context.metricsDatabase.clearAll();
        await Context.pingsDatabase.clearAll();
        Context.uploadEnabled = true;
        await UUIDMetricType._private_setUndispatched(Glean$1.coreMetrics.clientId, KNOWN_CLIENT_ID);
        await DatetimeMetricType._private_setUndispatched(Glean$1.coreMetrics.firstRunDate, firstRunDate);
        Context.uploadEnabled = false;
    }
    static initialize(applicationId, uploadEnabled, config) {
        if (Context.initialized) {
            console.warn("Attempted to initialize Glean, but it has already been initialized. Ignoring.");
            return;
        }
        if (applicationId.length === 0) {
            console.error("Unable to initialize Glean, applicationId cannot be an empty string.");
            return;
        }
        if (!Glean$1.instance._platform) {
            console.error("Unable to initialize Glean, environment has not been set.");
            return;
        }
        const correctConfig = new Configuration(config);
        Context.metricsDatabase = new MetricsDatabase(Glean$1.platform.Storage);
        Context.eventsDatabase = new EventsDatabase(Glean$1.platform.Storage);
        Context.pingsDatabase = new PingsDatabase(Glean$1.platform.Storage);
        Context.errorManager = new ErrorManager();
        Glean$1.instance._pingUploader = new PingUploader(correctConfig, Glean$1.platform, Context.pingsDatabase);
        Context.pingsDatabase.attachObserver(Glean$1.pingUploader);
        if (config === null || config === void 0 ? void 0 : config.plugins) {
            for (const plugin of config.plugins) {
                registerPluginToEvent(plugin);
            }
        }
        Context.dispatcher.flushInit(async () => {
            Context.applicationId = sanitizeApplicationId(applicationId);
            Context.debugOptions = correctConfig.debug;
            Glean$1.instance._config = correctConfig;
            await Context.metricsDatabase.clear("application");
            Context.initialized = true;
            Glean$1.pingUploader.setInitialized(true);
            if (uploadEnabled) {
                await Glean$1.onUploadEnabled();
            }
            else {
                const clientId = await Context.metricsDatabase.getMetric(CLIENT_INFO_STORAGE, Glean$1.coreMetrics.clientId);
                if (clientId) {
                    if (clientId !== KNOWN_CLIENT_ID) {
                        await Glean$1.onUploadDisabled();
                    }
                }
                else {
                    await Glean$1.clearMetrics();
                }
            }
            await Context.pingsDatabase.scanPendingPings();
            void Glean$1.pingUploader.triggerUpload();
        });
    }
    static get serverEndpoint() {
        var _a;
        return (_a = Glean$1.instance._config) === null || _a === void 0 ? void 0 : _a.serverEndpoint;
    }
    static get logPings() {
        var _a, _b;
        return ((_b = (_a = Glean$1.instance._config) === null || _a === void 0 ? void 0 : _a.debug) === null || _b === void 0 ? void 0 : _b.logPings) || false;
    }
    static get debugViewTag() {
        var _a;
        return (_a = Glean$1.instance._config) === null || _a === void 0 ? void 0 : _a.debug.debugViewTag;
    }
    static get sourceTags() {
        var _a, _b;
        return (_b = (_a = Glean$1.instance._config) === null || _a === void 0 ? void 0 : _a.debug.sourceTags) === null || _b === void 0 ? void 0 : _b.toString();
    }
    static get platform() {
        if (!Glean$1.instance._platform) {
            throw new Error("IMPOSSIBLE: Attempted to access environment specific APIs before Glean was initialized.");
        }
        return Glean$1.instance._platform;
    }
    static setUploadEnabled(flag) {
        Context.dispatcher.launch(async () => {
            if (!Context.initialized) {
                console.error("Changing upload enabled before Glean is initialized is not supported.\n", "Pass the correct state into `Glean.initialize\n`.", "See documentation at https://mozilla.github.io/glean/book/user/general-api.html#initializing-the-glean-sdk`");
                return;
            }
            if (Context.uploadEnabled !== flag) {
                if (flag) {
                    await Glean$1.onUploadEnabled();
                }
                else {
                    await Glean$1.onUploadDisabled();
                }
            }
        });
    }
    static setLogPings(flag) {
        Context.dispatcher.launch(() => {
            Glean$1.instance._config.debug.logPings = flag;
            return Promise.resolve();
        });
    }
    static setDebugViewTag(value) {
        if (!Configuration.validateDebugViewTag(value)) {
            console.error(`Invalid \`debugViewTag\` ${value}. Ignoring.`);
            return;
        }
        Context.dispatcher.launch(() => {
            Glean$1.instance._config.debug.debugViewTag = value;
            return Promise.resolve();
        });
    }
    static unsetDebugViewTag() {
        Context.dispatcher.launch(() => {
            delete Glean$1.instance._config.debug.debugViewTag;
            return Promise.resolve();
        });
    }
    static setSourceTags(value) {
        if (!Configuration.validateSourceTags(value)) {
            console.error(`Invalid \`sourceTags\` ${value.toString()}. Ignoring.`);
            return;
        }
        Context.dispatcher.launch(() => {
            Glean$1.instance._config.debug.sourceTags = value;
            return Promise.resolve();
        });
    }
    static unsetSourceTags() {
        Context.dispatcher.launch(() => {
            delete Glean$1.instance._config.debug.sourceTags;
            return Promise.resolve();
        });
    }
    static setPlatform(platform) {
        if (Context.initialized) {
            return;
        }
        if (Glean$1.instance._platform && Glean$1.instance._platform.name !== platform.name) {
            console.debug(`Changing Glean platform from "${Glean$1.platform.name}" to "${platform.name}".`);
        }
        Glean$1.instance._platform = platform;
    }
    static async testInitialize(applicationId, uploadEnabled = true, config) {
        Glean$1.setPlatform(TestPlatform);
        Glean$1.initialize(applicationId, uploadEnabled, config);
        await Context.dispatcher.testBlockOnQueue();
    }
    static async testUninitialize() {
        await Context.testUninitialize();
        testResetEvents();
        if (Glean$1.pingUploader) {
            await Glean$1.pingUploader.clearPendingPingsQueue();
        }
    }
    static async testResetGlean(applicationId, uploadEnabled = true, config) {
        await Glean$1.testUninitialize();
        try {
            await Context.eventsDatabase.clearAll();
            await Context.metricsDatabase.clearAll();
            await Context.pingsDatabase.clearAll();
        }
        catch (_a) {
        }
        await Glean$1.testInitialize(applicationId, uploadEnabled, config);
    }
}

function stripNulls(query) {
    for (const key in query) {
        const curr = query[key];
        if (curr === null) {
            delete query[key];
        }
        if (isObject(curr)) {
            if (Object.keys(curr).length === 0) {
                delete query[key];
            }
            else {
                stripNulls(curr);
            }
        }
    }
}
class WebExtStore {
    constructor(rootKey) {
        if (typeof browser === "undefined") {
            throw Error(`The web extensions store should only be user in a browser extension context.
        If running is a browser different from Firefox, make sure you have installed
        the webextension-polyfill peer dependency. To do so, run \`npm i webextension-polyfill\`.`);
        }
        this.store = browser.storage.local;
        this.rootKey = rootKey;
    }
    async _getWholeStore() {
        const result = await this.store.get({ [this.rootKey]: {} });
        return result[this.rootKey];
    }
    _buildQuery(index) {
        let query = null;
        for (const key of [this.rootKey, ...index].reverse()) {
            query = { [key]: query };
        }
        return query;
    }
    async _buildQueryFromStore(transformFn) {
        const store = await this._getWholeStore();
        return { [this.rootKey]: transformFn(store) };
    }
    async get(index) {
        const query = this._buildQuery(index);
        const response = await this.store.get(query);
        stripNulls(response);
        if (!response) {
            return;
        }
        if (isJSONValue(response)) {
            if (isObject(response)) {
                return getValueFromNestedObject(response, [this.rootKey, ...index]);
            }
            else {
                return response;
            }
        }
        console.warn(`Unexpected value found in storage for index ${JSON.stringify(index)}. Ignoring.
      ${JSON.stringify(response, null, 2)}`);
    }
    async update(index, transformFn) {
        if (index.length === 0) {
            throw Error("The index must contain at least one property to update.");
        }
        const query = await this._buildQueryFromStore(store => updateNestedObject(store, index, transformFn));
        return this.store.set(query);
    }
    async delete(index) {
        try {
            const query = await this._buildQueryFromStore(store => deleteKeyFromNestedObject(store, index));
            return this.store.set(query);
        }
        catch (e) {
            console.warn("Ignoring key", e);
        }
    }
}

const DEFAULT_UPLOAD_TIMEOUT_MS = 10000;
var UploadResultStatus;
(function (UploadResultStatus) {
    UploadResultStatus[UploadResultStatus["RecoverableFailure"] = 0] = "RecoverableFailure";
    UploadResultStatus[UploadResultStatus["UnrecoverableFailure"] = 1] = "UnrecoverableFailure";
    UploadResultStatus[UploadResultStatus["Success"] = 2] = "Success";
})(UploadResultStatus || (UploadResultStatus = {}));

class BrowserUploader {
    async post(url, body, headers = {}) {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), DEFAULT_UPLOAD_TIMEOUT_MS);
        let response;
        try {
            response = await fetch(url.toString(), {
                headers,
                method: "POST",
                body: body,
                keepalive: true,
                credentials: "omit",
                signal: controller.signal,
                redirect: "error",
            });
        }
        catch (e) {
            if (e instanceof DOMException) {
                console.error("Timeout while attempting to upload ping.", e);
            }
            else if (e instanceof TypeError) {
                console.error("Network error while attempting to upload ping.", e);
            }
            else {
                console.error("Unknown error while attempting to upload ping.", e);
            }
            clearTimeout(timeout);
            return { result: 0 };
        }
        clearTimeout(timeout);
        return {
            result: 2,
            status: response.status
        };
    }
}
var uploader = new BrowserUploader();

const WebExtPlatformInfo = {
    async os() {
        const platformInfo = await browser.runtime.getPlatformInfo();
        switch (platformInfo.os) {
            case "mac":
                return "Darwin";
            case "win":
                return "Windows";
            case "android":
                return "Android";
            case "cros":
                return "ChromeOS";
            case "linux":
                return "Linux";
            case "openbsd":
                return "OpenBSD";
            default:
                return "Unknown";
        }
    },
    async osVersion() {
        return Promise.resolve("Unknown");
    },
    async arch() {
        const platformInfo = await browser.runtime.getPlatformInfo();
        return platformInfo.arch;
    },
    async locale() {
        return Promise.resolve(navigator.language || "und");
    }
};

const WebExtPlatform = {
    Storage: WebExtStore,
    uploader,
    info: WebExtPlatformInfo,
    name: "webext"
};

var Glean = {
    initialize(applicationId, uploadEnabled, config) {
        Glean$1.setPlatform(WebExtPlatform);
        Glean$1.initialize(applicationId, uploadEnabled, config);
    },
    setUploadEnabled(flag) {
        Glean$1.setUploadEnabled(flag);
    },
    setLogPings(flag) {
        Glean$1.setLogPings(flag);
    },
    setDebugViewTag(value) {
        Glean$1.setDebugViewTag(value);
    },
    unsetDebugViewTag() {
        Glean$1.unsetDebugViewTag();
    },
    setSourceTags(value) {
        Glean$1.setSourceTags(value);
    },
    unsetSourceTags() {
        Glean$1.unsetSourceTags();
    },
    async testResetGlean(applicationId, uploadEnabled = true, config) {
        return Glean$1.testResetGlean(applicationId, uploadEnabled, config);
    }
};

class JOSEError extends Error {
    constructor(message) {
        super(message);
        this.code = 'ERR_JOSE_GENERIC';
        this.name = this.constructor.name;
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
class JOSENotSupported extends JOSEError {
    constructor() {
        super(...arguments);
        this.code = 'ERR_JOSE_NOT_SUPPORTED';
    }
}
class JWEInvalid extends JOSEError {
    constructor() {
        super(...arguments);
        this.code = 'ERR_JWE_INVALID';
    }
}

new TextEncoder();
new TextDecoder();
const MAX_INT32 = 2 ** 32;
function concat(...buffers) {
    const size = buffers.reduce((acc, { length }) => acc + length, 0);
    const buf = new Uint8Array(size);
    let i = 0;
    buffers.forEach((buffer) => {
        buf.set(buffer, i);
        i += buffer.length;
    });
    return buf;
}
function writeUInt32BE(buf, value, offset) {
    if (value < 0 || value >= MAX_INT32) {
        throw new RangeError(`value must be >= 0 and <= ${MAX_INT32 - 1}. Received ${value}`);
    }
    buf.set([value >>> 24, value >>> 16, value >>> 8, value & 0xff], offset);
}
function uint32be(value) {
    const buf = new Uint8Array(4);
    writeUInt32BE(buf, value);
    return buf;
}
async function concatKdf(digest, secret, bits, value) {
    const iterations = Math.ceil((bits >> 3) / 32);
    let res;
    for (let iter = 1; iter <= iterations; iter++) {
        const buf = new Uint8Array(4 + secret.length + value.length);
        buf.set(uint32be(iter));
        buf.set(secret, 4);
        buf.set(value, 4 + secret.length);
        if (!res) {
            res = await digest(buf);
        }
        else {
            res = concat(res, await digest(buf));
        }
    }
    res = res.slice(0, bits >> 3);
    return res;
}

function getGlobal() {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    throw new Error('unable to locate global object');
}
var globalThis$1 = getGlobal();

var crypto$1 = globalThis$1.crypto;

crypto$1.getRandomValues.bind(crypto$1);

const digest = async (algorithm, data) => {
    const subtleDigest = `SHA-${algorithm.substr(-3)}`;
    return new Uint8Array(await crypto$1.subtle.digest(subtleDigest, data));
};

concatKdf.bind(undefined, digest.bind(undefined, 'sha256'));

function validateCrit(Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader) {
    if (joseHeader.crit !== undefined && protectedHeader.crit === undefined) {
        throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
    }
    if (!protectedHeader || protectedHeader.crit === undefined) {
        return new Set();
    }
    if (!Array.isArray(protectedHeader.crit) ||
        protectedHeader.crit.length === 0 ||
        protectedHeader.crit.some((input) => typeof input !== 'string' || input.length === 0)) {
        throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
    }
    let recognized;
    if (recognizedOption !== undefined) {
        recognized = new Map([...Object.entries(recognizedOption), ...recognizedDefault.entries()]);
    }
    else {
        recognized = recognizedDefault;
    }
    for (const parameter of protectedHeader.crit) {
        if (!recognized.has(parameter)) {
            throw new JOSENotSupported(`Extension Header Parameter "${parameter}" is not recognized`);
        }
        if (joseHeader[parameter] === undefined) {
            throw new Err(`Extension Header Parameter "${parameter}" is missing`);
        }
        else if (recognized.get(parameter) && protectedHeader[parameter] === undefined) {
            throw new Err(`Extension Header Parameter "${parameter}" MUST be integrity protected`);
        }
    }
    return new Set(protectedHeader.crit);
}

validateCrit.bind(undefined, JWEInvalid, new Map());

/**
 * The user age.
 *
 * Generated from `user.age`.
 */
const age = new LabeledMetricType({
    category: "user",
    name: "age",
    sendInPings: ["demographics"],
    lifetime: "ping",
    disabled: false,
}, BooleanMetricType, ["band_19_24", "band_25_34", "band_35_44", "band_45_54", "band_55_64", "band_over_65"]);

/**
 * The user gender.
 *
 * Generated from `user.gender`.
 */
const gender = new LabeledMetricType({
    category: "user",
    name: "gender",
    sendInPings: ["demographics"],
    lifetime: "ping",
    disabled: false,
}, BooleanMetricType, ["decline", "female", "male", "neither"]);

/**
 * The user origin: Hispanic, Latinx, Spanish or other.
 *
 * Generated from `user.origin`.
 */
const origin = new LabeledMetricType({
    category: "user",
    name: "origin",
    sendInPings: ["demographics"],
    lifetime: "ping",
    disabled: false,
}, BooleanMetricType, ["hispanic_latinx_spanish", "other"]);

/**
 * The user race / ethnicity.
 *
 * Generated from `user.races`.
 */
const races = new LabeledMetricType({
    category: "user",
    name: "races",
    sendInPings: ["demographics"],
    lifetime: "ping",
    disabled: false,
}, BooleanMetricType, ["am_indian_or_alaska_native", "asian_indian", "black_or_african_american", "chamorro", "chinese", "filipino", "japanese", "korean", "native_hawaiian", "other_asian", "other_pacific_islander", "samoan", "some_other_race", "vietnamese", "white"]);

/**
 * The highest level of school user has completed.
 *
 * Generated from `user.school`.
 */
const school = new LabeledMetricType({
    category: "user",
    name: "school",
    sendInPings: ["demographics"],
    lifetime: "ping",
    disabled: false,
}, BooleanMetricType, ["associates_degree", "bachelors_degree", "college_degree_in_progress", "graduate_degree", "high_school_grad_or_eq", "less_than_high_school", "some_high_school"]);

/**
 * The user household's combined annual income during the
 * past 12 months. This field replaces the previous income field.
 *
 * Generated from `user.exact_income`.
 */
const exactIncome = new QuantityMetricType({
    category: "user",
    name: "exact_income",
    sendInPings: ["demographics"],
    lifetime: "ping",
    disabled: false,
});

/**
 * The user zip code.
 *
 * Generated from `user.zipcode`.
 */
const zipcode = new StringMetricType({
    category: "user",
    name: "zipcode",
    sendInPings: ["demographics"],
    lifetime: "ping",
    disabled: false,
});

/**
 * This ping is sent at the end of the user onboarding process,
 * when and if the user joins the platform.
 *
 * Generated from `enrollment`.
 */
const enrollment = new PingType({
    includeClientId: false,
    sendIfEmpty: true,
    name: "enrollment",
    reasonCodes: [],
});

/**
 * This ping is sent when user clicks the Join button for a study
 * and accepts the study policy.
 *
 * Generated from `study-enrollment`.
 */
const studyEnrollment = new PingType({
    includeClientId: false,
    sendIfEmpty: true,
    name: "study-enrollment",
    reasonCodes: [],
});

/**
 * This ping is sent when user leaves a study.
 *
 * Generated from `study-unenrollment`.
 */
const studyUnenrollment = new PingType({
    includeClientId: false,
    sendIfEmpty: true,
    name: "study-unenrollment",
    reasonCodes: [],
});

/**
 * After a user joins the platform they are asked to fill a
 * demographic survey, in order to help researchers parse the
 * data. The survey is optional and can be partially filled: this
 * ping is submitted right after the survey is filled.
 *
 * Generated from `demographics`.
 */
const demographics = new PingType({
    includeClientId: false,
    sendIfEmpty: true,
    name: "demographics",
    reasonCodes: [],
});

/**
 * This ping is not directly sent by this add-on. However its
 * submission is triggered when hitting the offboarding page,
 * after the Core Add-on is removed, to make sure a data deletion
 * request is sent even when uninstalling from the Browser UI,
 * without going through the Rally UI.
 *
 * Generated from `uninstall-deletion`.
 */
new PingType({
    includeClientId: false,
    sendIfEmpty: true,
    name: "uninstall-deletion",
    reasonCodes: [],
});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// The encryption key id and JWK to encrypt data that go
// to the "core" environment (i.e. `pioneer-core`). See
// bug 1677761 for additional details.
const CORE_ENCRYPTION_KEY_ID = "core";
const CORE_ENCRYPTION_JWK = {
  "crv": "P-256",
  "kid": "core",
  "kty": "EC",
  "x": "muvXFcGjbk2uZCCa8ycoH8hVxeDCGPQ9Ed2-QHlTtuc",
  "y": "xrLUev8_yUrSFAlabnHInvU4JKc6Ew3YXaaoDloQxw8",
};

class DataCollection {
  /**
   * Initializes the data collection engine.
   *
   * @param {boolean} userEnrolled
   *        Whether or not user has enrolled in the platform.
   */
  initialize(userEnrolled) {
    {
      console.warn("DataCollection - Glean disabled by the build configuration.");
      return;
    }
  }

  /**
   * Sends an otherwise-empty ping with the deletion ID other provided info.
   *
   * @param {String} rallyId
   *        The id of the Rally platform.
   * @param {String} payloadType
   *        The type of the encrypted payload. This will define the
   *        `schemaName` of the ping.
   * @param {String} namespace
   *        The namespace to route the ping. This will define the
   *        `schemaNamespace` and `studyName` properties of the ping.
   * @param {String} deletionId
   *        It's sent in the ping, if present, to track deletion of user data without exposing the Rally ID.
   */
  async _sendPingWithDeletionId(rallyId, payloadType, namespace, deletionId) {
    let publicKey;
    let keyId;
    let payload = {};

    if (namespace === "pioneer-core") {
      // When routing pings to the "core" environment, we need to use
      // the proper encryption key.
      keyId = CORE_ENCRYPTION_KEY_ID;
      publicKey = CORE_ENCRYPTION_JWK;
      payload = { deletionId };
    } else {
      // When routing empty pings to the environments for the specific
      // studies, we can use a bogus key (the payload is empty).

      // NOTE - while we're not actually sending useful data in
      // this payload, the current Telemetry pipeline requires
      // that pings are shaped this way so they are routed to the correct
      // study environment.
      //
      // At the moment, the public key used here isn't important but we do
      // need to use *something*.
      keyId = "discarded";
      publicKey = {
        crv: "P-256",
        kty: "EC",
        x: "XLkI3NaY3-AF2nRMspC63BT1u0Y3moXYSfss7VuQ0mk",
        y: "SB0KnIW-pqk85OIEYZenoNkEyOOp5GeWQhS1KeRtEUE",
      };
    }

    await this.sendPing(
      rallyId,
      payloadType,
      payload,
      namespace,
      keyId,
      publicKey
    );
  }

  /**
   * Sends a Pioneer enrollment ping.
   *
   * The `creationDate` provided by the telemetry APIs will be used as the
   * timestamp for considering the user enrolled in pioneer and/or the study.
   *
   * @param {String} rallyId
   *        The id of the Rally platform.
   * @param {String} [schemaNamespace=undefined]
   *        optional schema namespace. It's sent in the ping, if present, to signal
   *        that user enroled in the study.
   * @param {String} deletionId
   *        It's sent in the ping, if present, to track deletion of user data without exposing the Rally ID.
   */
  async sendEnrollmentPing(rallyId, schemaNamespace, deletionId) {
    // If we were provided with a study id, then this is an enrollment to a study.
    // Send the id alongside with the data and change the schema namespace to simplify
    // the work on the ingestion pipeline.
    if (schemaNamespace !== undefined) {
      return await this._sendPingWithDeletionId(rallyId, "pioneer-enrollment", schemaNamespace);
    }

    // If this is a platform enrollment ping (not coming from the study), then the
    // `deletionId` should always be sent.
    if (deletionId === undefined) {
      throw new Error("DataCollection - the enrollment ping must have a deletion id");
    }

    // Note that the schema namespace directly informs how data is segregated after ingestion.
    // If this is an enrollment ping for the pioneer program (in contrast to the enrollment to
    // a specific study), use a meta namespace.
    return await this._sendPingWithDeletionId(rallyId, "pioneer-enrollment", "pioneer-core", deletionId);
  }

  /**
   * Sends a deletion-request ping.
   *
   * @param {String} rallyId
   *        The id of the Rally platform.
   * @param {String} schemaNamespace
   *        It's sent in the ping to signal that user unenrolled from a study.
   */
  async sendDeletionPing(rallyId, schemaNamespace) {
    if (schemaNamespace === undefined) {
      throw new Error("DataCollection - the deletion-request ping requires a schema namespace");
    }

    return await this._sendPingWithDeletionId(rallyId, "deletion-request", schemaNamespace);
  }

  /**
   * Send a ping using the Firefox legacy telemetry.
   *
   * @param {String} rallyId
   *        The id of the Rally platform.
   * @param {String} payloadType
   *        The type of the encrypted payload. This will define the
   *        `schemaName` of the ping.
   * @param {Object} payload
   *        A JSON-serializable payload to be sent with the ping.
   * @param {String} namespace
   *        The namespace to route the ping. This will define the
   *        `schemaNamespace` and `studyName` properties of the ping.
   * @param {String} keyId
   *        The id of the key used to encrypt the payload.
   * @param {Object} key
   *        The JSON Web Key (JWK) used to encrypt the payload.
   *        See the RFC 7517 https://tools.ietf.org/html/rfc7517
   *        for additional information. For example:
   *
   *        {
   *          "kty":"EC",
   *          "crv":"P-256",
   *          "x":"f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
   *          "y":"x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0",
   *          "kid":"Public key used in JWS spec Appendix A.3 example"
   *        }
   */
  async sendPing(rallyId, payloadType, payload, namespace, keyId, key) {
    if (!rallyId || typeof rallyId != "string") {
      throw new Error(`DataCollection.sendPing - invalid Rally id ${rallyId}`);
    }

    {
      console.warn(`DataCollection.sendPing - data submission disabled, ping ${payloadType} not submitted with payload:`, payload);

      return;
    }
  }

  /**
   * Sends a demographic-survey ping with Glean.js.
   *
   * @param {Object} data
   *        A JSON-serializable object containing the demographics
   *        information submitted by the user..
   */
  sendDemographicsInGlean(data) {
    // The schema for the non-glean collection is hard to change.
    // In order for us to not change it, we transform the provided
    // fields in a way that's expected by Glean.

    if ("age" in data) {
      age[`band_${data["age"]}`].set(true);
    }

    if ("gender" in data) {
      gender[data["gender"]].set(true);
    }

    if ("hispanicLatinxSpanishOrigin" in data) {
      const label = (data["hispanicLatinxSpanishOrigin"] === "other")
        ? "other" : "hispanicLatinxSpanish";
      origin[label].set(true);
    }

    if ("race" in data) {
      for (const raceLabel of data["race"]) {
        const label = (raceLabel === "american_indian_or_alaska_native")
          ? "am_indian_or_alaska_native" : raceLabel;
        races[label].set(true);
      }
    }

    if ("school" in data) {
      const KEY_FIXUP = {
        "high_school_graduate_or_equivalent": "high_school_grad_or_eq",
        "some_college_but_no_degree_or_in_progress": "college_degree_in_progress",
      };

      const originalLabel = data["school"];
      const label = (originalLabel in KEY_FIXUP)
        ? KEY_FIXUP[originalLabel] : originalLabel;
      school[label].set(true);
    }

    if ("exactIncome" in data) {
      exactIncome.set(data['exactIncome']);
    }

    if ("zipcode" in data) {
      zipcode.set(data["zipcode"]);
    }

    demographics.submit();
  }

  /**
   * Sends a demographic-survey ping.
   *
   * @param {String} rallyId
   *        The id of the Rally platform.
   * @param {Object} data
   *        A JSON-serializable object containing the demographics
   *        information submitted by the user..
   */
  async sendDemographicSurveyPing(rallyId, data) {
    // Once Rally fully migrates to Glean.js, the whole content of
    // `sendDemographicSurveyPing` should be replaced by `sendDemographicsInGlean`.
    this.sendDemographicsInGlean(data);

    const FIELD_MAPPING = {
      "age": "age",
      "gender": "gender",
      "hispanicLatinxSpanishOrigin": "origin",
      "school": "education"
    };

    // Important: the following code flattens out arrays and nested
    // structures (for example, "race": ["a", "b"] becomes in the
    // payload "races": {"a": true, "b": true}). We do this for two
    // reasons:
    //
    // - Analysts won't have to do string checks (e.g. "races".contain("samoan"))
    //   which is error prone, given that any term could be mispelled and
    //   contain typos. With this approach data points will have their own
    //   column (e.g. "races_samoan") and the stored boolean value indicates
    //   whether or not that race was reported.
    // - This future-proofs data by rationalizing it in terms of how
    //   Glean wants it.

    let processed = {};

    // Map all the fields but "race" (because that has multiple
    // possible values).
    for (const [originalField, newName] of Object.entries(FIELD_MAPPING)) {
      if (originalField in data) {
        processed[newName] = { [data[originalField]]: true };
      }
    }

    // Note: "race" gets renamed to "races" and has multiple
    // values.
    if ("race" in data) {
      processed["races"] = data.race.reduce((a, b) => ((a[b] = true), a), {});
    }

    // Note: "zipcode" gets renamed to "zipCode" and directly
    // assigned a value.
    if ("zipcode" in data) {
      processed["zipCode"] = data["zipcode"];
    }

    if ("exactIncome" in data) {
      processed['exactIncome'] = data["exactIncome"];
    }

    return await this.sendPing(
      rallyId,
      "demographic-survey",
      processed,
      "pioneer-core",
      CORE_ENCRYPTION_KEY_ID,
      CORE_ENCRYPTION_JWK,
    );
  }
}

/**
 * The id of the Rally client.
 *
 * Generated from `rally.id`.
 */
const id = new UUIDMetricType({
    category: "rally",
    name: "id",
    sendInPings: ["deletion-request", "demographics", "enrollment", "study-enrollment", "study-unenrollment", "uninstall-deletion"],
    lifetime: "user",
    disabled: false,
});

/**
 * The id of the study user has joined.
 *
 * Generated from `enrollment.study_id`.
 */
const studyId$1 = new StringMetricType({
    category: "enrollment",
    name: "study_id",
    sendInPings: ["study-enrollment"],
    lifetime: "ping",
    disabled: false,
});

/**
 * The id of the study user has left.
 *
 * Generated from `unenrollment.study_id`.
 */
const studyId = new StringMetricType({
    category: "unenrollment",
    name: "study_id",
    sendInPings: ["study-unenrollment"],
    lifetime: "ping",
    disabled: false,
});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// The path of the embedded resource used to control options.
const OPTIONS_PAGE_PATH = "public/index.html";
// The website to post deletion IDs to.
const OFFBOARD_URL = "https://production.rally.mozilla.org/offboard";
// The static website to send offboarded users to (those with no deletion ID).
const LEAVE_URL = "https://rally.mozilla.org/leaving-rally";

class Core {
  /**
   * @param {Object} args arguments passed in from the user.
   * @param {String} args.availableStudiesURI the URI where the available studies
   *             information is listed. Only used when disableRemoteSettings is `true`.
   * @param {Boolean} args.disableRemoteSettings do not use the official RemoteSettings server.
   *             Default is `true`.
   * @param {String} args.website the URL of the platform website.
   */
  constructor(args) {
    this._userArguments = args;

    this._storage = new Storage();
    this._dataCollection = new DataCollection();

    // Initialize the collection engine once we know if
    // user is enrolled or not.
    this._storage.getRallyID().finally(id =>
      this._dataCollection.initialize(id !== undefined));

    // Asynchronously get the available studies. We don't need to wait
    // for this to finish, the UI can handle the wait.
    this._availableStudies = this._fetchAvailableStudies().then((studies) =>
      this._updateInstalledStudies(studies)
    );
    if (this._userArguments.disableRemoteSettings) {
      console.warn("RemoteSettings disabled, not adding a new studies listener.");
    } else {
      // Register a listener to react to remote-settings updates.
      browser.firefoxPrivilegedApi.onRemoteSettingsSync.addListener((studies) => {
        // FIXME Important: this may be racing with the initial update or if there's two consecutive updates?
        // @see https://github.com/mozilla-rally/rally-core-addon/issues/318
        this._availableStudies = this._updateInstalledStudies(studies);
        this._sendStateUpdateToUI();
      });
    }
    this._connectionPort = null;
  }

  /**
   * Set the URL to be opened in a new tab when the core add-on is uninstalled.
   *
   * After enrollment, a deletion ID will be available to provide to this URL.
   * However, if the user uninstalls the core add-on without enrolling first, then
   * this will open the offboarding URL without the deletion ID.
   */
  async setUninstallURL() {
    // set the URL to redirect when a user uninstalls Rally.
    const deletionId = await this._storage.getDeletionID();
    if (deletionId) {
      // if enrolled,include the deletion ID, for deleting data without exposing the Rally ID.
      browser.runtime.setUninstallURL(`${OFFBOARD_URL}?id=${deletionId}`);
    } else {
      browser.runtime.setUninstallURL(LEAVE_URL);
    }
  }

  initialize() {
    this.setUninstallURL();

    // Whenever the addon icon is clicked, open the control page.
    browser.browserAction.onClicked.addListener(this._openControlPanel);
    // After installing the addon, make sure to show the control page.
    browser.runtime.onInstalled.addListener(async ({ reason, temporary }) => {
      if (reason !== "install") {
        // We're only showing this when the addon is installed!
        return;
      }
      this._openControlPanel();
    });

    // Listen for messages from the options page.
    browser.runtime.onConnect.addListener(
      p => this._onPortConnected(p));

    // Listen for addon install/uninstall and keep the studies
    // installation state up to date.
    browser.management.onInstalled.addListener(
      info => this._handleAddonLifecycle(info, true));
    // The only reason why we need to listen for uninstallation events
    // is to catch studies being uninstalled outside of the control
    // panel.
    browser.management.onUninstalled.addListener(
      info => this._handleAddonLifecycle(info, false));

    // Listen for incoming messages from the studies.
    //
    // ***IMPORTANT***:
    //
    // `_handleExternalMessage` is async, even though
    // https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage
    // discourages that. The reason why it's discouraged is that by being async
    // the handler function would *always* return a Promise, telling the
    // WebExtensions framework that the message was handled, and thus preventing
    // other registered listeners to get the message. For our case, this is
    // not a problem, because:
    //
    //  - we always handle all the messages (always reject or resolve);
    //  - we only expect to have one listener (`_handleExternalMessage`).
    //
    // We want the handler to be async to conveniently handle all the
    // asynchronous calls and updates to the studies list.
    browser.runtime.onMessageExternal.addListener(
      async (m, s) => this._handleExternalMessage(m, s));

    // Listen for messages from the Website.
    browser.runtime.onMessage.addListener(
      (m, s) => this._handleWebMessage(m, s));
  }

  _openControlPanel() {
    browser.runtime.openOptionsPage().catch(e => {
      console.error(`Core.js - Unable to open the control panel`, e);
    });
  }

  /**
   * React to studies installation and uninstallation.
   *
   * @param {ExtensionInfo} info
   *        The information about the addon that triggered the event.
   * @param {Boolean} installed
   *        `true` if the addon was installed, `false` otherwise.
   * @returns {Promise} resolved when the new state is completely
   *          handled.
   */
  async _handleAddonLifecycle(info, installed) {
    // Don't do anything if we received an updated from an addon
    // that's not a study.
    let knownStudies = await this._availableStudies;
    if (!knownStudies.map(s => s.addonId).includes(info.id)) {
      console.debug(
        `Core._handleAddonLifecycle - non-study addon ${info.id} was ${installed ? "installed" : "uninstalled"}`
      );
      return;
    }

    // Update the available studies list with the installation
    // information.
    this._availableStudies = Promise.resolve(knownStudies.map(s => {
      if (s.addonId == info.id) {
        s.studyInstalled = installed;
      }
      return s;
    }));

    if (installed) {
      // We don't mark studies as active unless user has consented to them.
      // This is to prevent side-loaded studies to suddenly start running
      // without user approval. How does this work?
      //
      // 1. Whenever a study is consented and installation is triggered from
      //    the core add-on UI, we record a "pending consent" (i.e. user
      //    consented but the study is not yet installed).
      // 2. When a study is installed we hit _this code_ and check if we
      //    had a prior "pending consent" for it. If so, join the study.
      // 3. Joined installed studies are marked as such in the UI. If a study
      //    is installed, but not joined, they get uninstalled at the earliest
      //    opportunity by the core add-on.
      //
      // Note that pending consent is cleared whenever the core add-on is initialized
      // again, so that pending consent is not retained across browser restarts.
      let hasConsent = await this._storage.removePendingConsent(info.id);
      if (hasConsent) {
        // If we had a pending consent for this study, go on and confirm the
        // study as active/joined.
        await this._enrollStudy(info.id);
      }
    } else {
      // Handle the case of addons being uninstalled manually.
      await this._unenrollStudy(info.id);
    }

    await this._sendStateUpdateToUI();
  }

  /**
   * Handle incoming connections from the Options page.
   *
   * @param {runtime.Port}
   *        The port for which the connection notification was received.
   */
  _onPortConnected(port) {
    const sender = port.sender;
    if ((sender.id != browser.runtime.id)
      || (sender.url != browser.runtime.getURL(OPTIONS_PAGE_PATH))) {
      console.error("Core - received message from unexpected sender");
      port.disconnect();
      return;
    }

    this._connectionPort = port;

    this._connectionPort.onMessage.addListener(
      m => this._handleMessage(m));

    // The onDisconnect event is fired if there's no receiving
    // end or in case of any other error. Log an error and clear
    // the port in that case.
    this._connectionPort.onDisconnect.addListener(e => {
      console.error("Core - there was an error connecting to the page", e);
      this._connectionPort = null;
    });
  }

  /**
   * Handles messages coming in from the options page.
   *
   * @param {Object} message
   *        The payload of the message.
   * @returns {Promise} only used in tests to wait on messages to
   *          be dispatched.
   */
  _handleMessage(message) {
    // We only expect messages coming from the embedded options page
    // at this time. We check for the sender in `_onPortConnected`.

    switch (message.type) {
      case "enrollment":
        return this._enroll()
          .then(r => this._sendStateUpdateToUI());
      case "get-studies":
        return this._sendStateUpdateToUI();
      case "study-unenrollment":
        // We still need to handle this message, even if we're catching
        // addon "uninstall" events: we want users to be able to uninstall
        // from the control panel.
        return this._unenrollStudy(message.data.studyID);
      case "unenrollment":
        return this._unenroll();
      case "update-demographics":
        return this._updateDemographics(message.data)
          .then(r => this._sendStateUpdateToUI());
      case "first-run-completion":
        return this._storage.setFirstRunCompletion(message.data.firstRunCompleted)
          .then(() => this._sendStateUpdateToUI());
      case "pending-consent":
        return this._storePendingConsent(message.data.studyID);
      default:
        return Promise.reject(
          new Error(`Core - unexpected message type ${message.type}`));
    }
  }

  /**
   * Handles messages coming in from studies.
   *
   * IMPORTANT: This is `async` and will always handle all the
   * external messages coming from the studies. It will not allow
   * any other registered listener to catch messages. See
   * the notes at the listener registration site.
   *
   * @param {Object} message
   *        The payload of the message.
   * @param {runtime.MessageSender} sender
   *        An object containing information about who sent
   *        the message.
   * @returns {Promise} The response to the received message.
   *          It can be resolved with a value that is sent to the
   *          `sender`.
   */
  async _handleExternalMessage(message, sender) {
    // We only expect messages coming from known installed studies.
    const availableStudies = await this._availableStudies;
    let installedStudies = availableStudies
      .filter(s => s.studyInstalled)
      .map(s => s.addonId);

    if (!installedStudies.includes(sender.id)) {
      throw new Error(`Core._handleExternalMessage - unexpected sender ${sender.id}`);
    }

    const knownStudy = availableStudies.find(s => s.addonId == sender.id);
    if (!("schemaNamespace" in knownStudy)) {
      return Promise.reject(
        new Error(`Core._handleExternalMessage - No schema namespace specified in remote settings for ${sender.id}`));
    }

    let joinedStudies = await this._storage.getActivatedStudies();
    if (!joinedStudies.includes(sender.id)) {
      throw new Error(`Core._handleExternalMessage - ${sender.id} not joined`);
    }

    const pausedStudies = availableStudies
      .filter(s => s.studyPaused)
      .map(s => s.addonId);

    switch (message.type) {
      case "core-check": {
        let enrolled = !!(await this._storage.getRallyID());
        return {
          type: "core-check-response",
          data: {
            enrolled
          }
        };
      }
      case "telemetry-ping": {
        if (pausedStudies.includes(sender.id)) {
          throw new Error(`Core._handleExternalMessage - ${sender.id} is paused and may not send data`);
        }

        const { payloadType, payload, keyId, key } = message.data;
        let rallyId = await this._storage.getRallyID();
        return await this._dataCollection.sendPing(
          rallyId, payloadType, payload, knownStudy.schemaNamespace, keyId, key
        );
      }
      default:
        throw new Error(`Core._handleExternalMessage - unexpected message type ${message.type}`);
    }
  }

  /**
   * Handles messages coming in from the external website.
   *
   * @param {Object} message
   *        The payload of the message.
   * @param {runtime.MessageSender} sender
   *        An object containing information about who sent
   *        the message.
   * @returns {Promise} The response to the received message.
   *          It can be resolved with a value that is sent to the
   *          `sender` or rejected in case of errors.
   */
  _handleWebMessage(message, sender) {
    console.log("Core - received web message", message, "from", sender, "test");

    try {
      let platformURL = new URL(this._userArguments.website);
      let senderURL = new URL(sender.url);

      if (platformURL.origin != senderURL.origin) {
        return Promise.reject(
          new Error(`Core - received message from unexpected URL ${sender.url}`));
      }
    } catch (ex) {
      return Promise.reject(
        new Error(`Core - cannot validate sender URL ${sender.url}`));
    }

    // We should have received the message from our core addon.
    if (sender.id !== browser.runtime.id) {
      return Promise.reject(
        new Error(`Core - received message from an unexpected webextension ${sender.id}`));
    }

    // ** IMPORTANT **
    //
    // The website should *NOT EVER* be trusted. Other addons could be
    // injecting content scripts there too, impersonating the website
    // and performing requests on its behalf.
    //
    // Do not ever add other features or messages here without thinking
    // thoroughly of the implications: can the message be used to leak
    // information out? Can it be used to mess with studies?

    switch (message.type) {
      case "web-check":
        // The `web-check` message should be safe: any installed addon with
        // the `management` privileges could check for the presence of the
        // core addon and expose that to the web. By exposing this ourselves
        // through content scripts enabled on our domain, we don't make things
        // worse.
        return Promise.resolve({
          type: "web-check-response",
          data: {}
        });
      case "open-rally":
        // The `open-rally` message should be safe: it exclusively opens
        // the addon options page. It's a one-direction communication from the
        // page, as no data gets exfiltrated or no message is reported back.
        return Promise.resolve(this._openControlPanel());
      default:
        return Promise.reject(
          new Error(`Core._handleWebMessage - unexpected message type "${message.type}"`));
    }
  }

  /**
   * Enroll in the platform.
   *
   * This sets up all the required information (e.g. the ID)
   * and sets the relevant data to the pipeline.
   *
   * @returns {Promise} A promise resolved when the enrollment
   *          is complete (does not block on data upload).
   */
  async _enroll() {
    // Generate a proper random UUID, for Rally and also for the deletion ping.
    const rallyId = await browser.firefoxPrivilegedApi.generateUUID();
    const deletionId = await browser.firefoxPrivilegedApi.generateUUID();

    // Store IDs locally for future use.
    await this._storage.setRallyID(rallyId);
    await this._storage.setDeletionID(deletionId);

    // We enrolled in the Rally platform, we're now good
    // to start uploading data if needed.
    Glean.setUploadEnabled(true);

    id.set(rallyId);

    // Override the uninstall URL to include the rallyID, for deleting data without exposing the Rally ID.
    await this.setUninstallURL();

    enrollment.submit();

    // Finally send the ping. Important: remove this line once the migration
    // to Glean.js is finally complete.
    await this._dataCollection.sendEnrollmentPing(rallyId, undefined, deletionId);
  }

  /**
   * Enroll in a Study.
   *
   * This sends the required pings,
   *
   * @returns {Promise} A promise resolved when the enrollment
   *          is complete (does not block on data upload).
   */
  async _enrollStudy(studyAddonId) {
    // We only expect to enroll in known studies.
    let knownStudies = await this._availableStudies;
    if (!knownStudies.map(s => s.addonId).includes(studyAddonId)) {
      return Promise.reject(
        new Error(`Core._enrollStudy - Unknown study ${studyAddonId}`));
    }
    const knownStudy = knownStudies.find(s => s.addonId == studyAddonId);
    if (!("schemaNamespace" in knownStudy)) {
      return Promise.reject(
        new Error(`Core._enrollStudy - No schema namespace specified in remote settings for ${studyAddonId}`));
    }

    // Record that user activated this study.
    await this._storage.appendActivatedStudy(studyAddonId);

    studyId$1.set(studyAddonId);
    studyEnrollment.submit();

    // Finally send the ping. Important: remove this line once the migration
    // to Glean.js is finally complete.
    let rallyId = await this._storage.getRallyID();
    await this._dataCollection.sendEnrollmentPing(rallyId, knownStudy.schemaNamespace);
  }

  /**
   * Unenroll in a Study.
   *
   * This sends the required pings.
   *
   * @returns {Promise} A promise resolved when the unenrollment
   *          is complete (does not block on data upload).
   *          NOTE: this does NOT trigger the study add-on to
   *          uninstall itself at the moment.
   */
  async _unenrollStudy(studyAddonId) {
    // We only expect to unenroll in known studies.
    let knownStudies = await this._availableStudies;
    if (!knownStudies.map(s => s.addonId).includes(studyAddonId)) {
      return Promise.reject(
        new Error(`Core._unenrollStudy - Unknown study ${studyAddonId}`));
    }

    const knownStudy = knownStudies.find(s => s.addonId == studyAddonId);
    if (!("schemaNamespace" in knownStudy)) {
      return Promise.reject(
        new Error(`Core._enrollStudy - No schema namespace specified in remote settings for ${studyAddonId}`));
    }

    // Attempt to send an uninstall message, but move on if the
    // delivery fails: studies will not be able to send anything
    // without the Core Add-on anyway. Moreover, they might have been
    // removed manually from the addons pages (e.g. about:addons).
    try {
      await this._sendMessageToStudy(studyAddonId, "uninstall", {});
    } catch (e) {
      console.error(`Core._unenroll - Unable to uninstall ${studyAddonId}`, e);
    }

    await this._storage.removeActivatedStudy(studyAddonId);

    studyId.set(studyAddonId);
    studyUnenrollment.submit();

    // Important: remove these lines once the migration
    // to Glean.js is finally complete.
    let rallyId = await this._storage.getRallyID();
    await this._dataCollection.sendDeletionPing(rallyId, knownStudy.schemaNamespace);
  }

  /**
   * Unenroll from the platform.
   *
   * This clears all the stored data (e.g. the ID)
   * and sends the relevant deletion requests to the pipeline.
   *
   * @returns {Promise} A promise resolved when the unenrollment
   *          is complete (does not block on data upload).
   */
  async _unenroll() {
    // Uninstall all known studies that are still installed.
    const availableStudies = await this._availableStudies;
    let installedStudies = availableStudies
      .filter(s => s.studyInstalled)
      .map(s => s.addonId);
    for (let studyId of installedStudies) {
      // Attempt to send an uninstall message to each study, but
      // move on if the delivery fails: studies will not be able
      // to send anything without the Core Add-on anyway.
      try {
        await this._sendMessageToStudy(studyId, "uninstall", {});
      } catch (e) {
        console.error(`Core._unenroll - Unable to uninstall ${studyId}`, e);
      }
    }

    let rallyId = await this._storage.getRallyID();

    // Read the list of the studies user activated throughout
    // their stay on the platform and send a deletion request
    // for each of them.
    let studyList = await this._storage.getActivatedStudies();
    for (let studyId$1 of studyList) {
      studyId.set(studyId$1);
      studyUnenrollment.submit();

      // Important: remove these lines once the migration
      // to Glean.js is finally complete.
      const knownStudy = availableStudies.find(s => s.addonId == studyId$1);
      if (!("schemaNamespace" in knownStudy)) {
        console.error(`Core._handleExternalMessage - No schema namespace specified in remote settings for ${studyId$1}`);
      }
      await this._dataCollection.sendDeletionPing(rallyId, knownStudy.schemaNamespace);
    }

    // Clear locally stored IDs.
    await this._storage.clearRallyID();
    await this._storage.clearDeletionID();

    // Clear the list of studies user took part in.
    await this._storage.clearActivatedStudies();

    // Flip upload enabled to disabled: this will trigger a
    // deletion-request.
    Glean.setUploadEnabled(false);

    // Finally, uninstall the addon.
    await browser.management.uninstallSelf({ showConfirmDialog: false });
  }

  /**
   * Sends a message to an available study.
   *
   * @param {String} studyId
   *        The id of the study, as assigned by the platform
   *        it is deployed on (e.g. a Firefox Addon Id).
   * @param {String} type
   *        The type of the message to send. Check `VALID_TYPES`
   *        for a list of supported types.
   * @param {Object} payload
   *        A JSON-serializable object with the message payload.
   * @returns {Promise} resolved with the response from the study
   *          if the message was correctly sent, rejected otherwise.
   */
  async _sendMessageToStudy(studyId, type, payload) {
    const VALID_TYPES = [
      "pause",
      "resume",
      "uninstall",
    ];

    // Make sure `type` is one of the expected values.
    if (!VALID_TYPES.includes(type)) {
      return Promise.reject(
        new Error(`Core._sendMessageToStudy - unexpected message "${type}" to study "${studyId}"`));
    }

    // Validate the studyId against the list of known studies.
    // Only do this for "uninstall" messages.
    let studyList = await this._storage.getActivatedStudies();
    if (!studyList.includes(studyId)
      && type != "uninstall") {
      return Promise.reject(
        new Error(`Core._sendMessageToStudy - "${studyId}" is not a known study`));
    }

    const msg = {
      type,
      data: payload
    };

    return await browser.runtime.sendMessage(studyId, msg, {});
  }

  /**
   * Update the `studyInstalled` property for the available studies.
   * If any studies should be disabled or enabled, then do so now.
   *
   * @returns {Promise(Array<Object>)} resolved with an array of studies
   *          objects, or an empty array on failures. Each study object
   *          has at least the `addonId` and `studyInstalled` properties.
   */
  async _updateInstalledStudies(studies) {
    console.debug("Core._updateInstalledStudies:", studies);

    // If we were able to fetch studies definitions, see if any
    // of them were installed. Start by getting the list of installed
    // addons.
    let installedAddonsIds =
      await browser.management.getAll().then(addons =>
        addons.filter(a => a.type == "extension")
          .map(a => a.id));

    // Attempt to resume any paused studies, or pause any running
    // studies, as appropriate.
    await this._sendRunState(studies, installedAddonsIds);

    return studies.map(s => {
      s.studyInstalled = installedAddonsIds.includes(s.addonId);
      return s;
    });
  }

  /**
   * Send run state (paused, running) message to study add-on(s).
   *
   * @param {Array} studies - list of available studies
   * @param {Array} installedAddonsIds - list of installed study add-on IDs
   */

  async _sendRunState(studies, installedAddonsIds) {
    for (const study of studies) {
      if (installedAddonsIds.includes(study.addonId)) {
        try {
          if (study.studyPaused) {
            await this._sendMessageToStudy(study.addonId, "pause", {});
          } else {
            await this._sendMessageToStudy(study.addonId, "resume", {});
          }
        } catch (err) {
          console.error("Changing study state failed:", err);
        }
      }
    }
  }

  /**
   * Fetch the available studies.
   *
   * This loads the studies from the Firefox Remote Settings service.
   * If `disableRemoteSettings` is `true`, then an URL will be used instead. This is intended for local testing.
   *
   * @returns {Promise(Array<Object>)} resolved with an array of studies
   *          objects, or an empty array on failures.
   */
  async _fetchAvailableStudies() {
    try {
      let studies = [];
      if (this._userArguments.disableRemoteSettings) {
        console.warn("Not using RemoteSettings, fetching from:", this._userArguments.availableStudiesURI);
        const request = await fetch(this._userArguments.availableStudiesURI);
        studies = await request.json();
      } else {
        console.debug("Using RemoteSettings for studies.");
        studies = await browser.firefoxPrivilegedApi.getRemoteSettings();
      }
      return studies;
    } catch (err) {
      console.error(err);
      return [];
    }
  }

  /**
   * Send a message with the latest state to the UI.
   *
   * The state has the following format:
   *
   * ```js
   * {
   *  // The enrollment as a Boolean indicating if user joined
   *  // the platform.
   *  enrolled: true,
   *  // An array with a list of studies, fetched from our servers,
   *  // and integrated with the install status.
   *  availableStudies: [
   *    {
   *      name: "Demo Study",
   *      icons: { ... },
   *      authors { ... },
   *      version: "1.0",
   *      addonId: "demo-study@ion.org",
   *      moreInfo: { ... },
   *      isDefault: false,
   *      downloadLink: "https://example.com",
   *      studyPaused: false,
   *      description: "Some nice description",
   *      privacyPolicyLink: "https://example.com",
   *      joinStudyConsent: "...",
   *      leaveStudyConsent: "...",
   *      dataCollectionDetails: [ ... ],
   *      // Whether or not the study is currently installed.
   *      studyInstalled: false,
   *      // Whether or not the study is joined (consent given).
   *      studyJoined: false,
   *    },
   *  ]
   * }
   * ```
   */
  async _sendStateUpdateToUI() {
    let enrolled = !!(await this._storage.getRallyID());
    let firstRunCompleted = !!(await this._storage.getFirstRunCompletion());

    let availableStudies = await this._availableStudies;
    let demographicsData = await this._storage.getDemographicsData();

    // Report a study as joined only if consent was given.
    // Filter out any paused studies, unless the user is currently enrolled, so they can still leave a study even if paused.
    let joinedStudies = await this._storage.getActivatedStudies();
    availableStudies = availableStudies.map(s => {
      s.studyJoined = joinedStudies.includes(s.addonId);
      return s;
    }).filter(study => (!study.studyPaused || study.studyJoined));

    const newState = {
      enrolled,
      firstRunCompleted,
      availableStudies,
      demographicsData,
    };

    // Send a message to the UI to update the list of studies.
    this._connectionPort.postMessage(
      { type: "update-state", data: newState });
  }

  /**
   * Updates the stored version of the demographics data.
   *
   * After the locally stored data is updated, the recent data
   * is sent to the pipeline.
   *
   * @param {Object} data
   *        A JSON-serializable object containing the demographics
   *        information submitted by the user.
   */
  async _updateDemographics(data) {
    await this._storage.setDemographicsData(data)
      .catch(e => console.error(`Core._updateDemographics - failed to save data`, e));

    let rallyId = await this._storage.getRallyID();
    return await this._dataCollection.sendDemographicSurveyPing(rallyId, data);
  }

  /**
   * Record that consent was given and attempt to uninstall
   * any sideloaded add-on with the same id.
   *
   * We need to uninstall as sideloaded studies did not go
   * through the UI for showing the consent.
   *
   * @param {String} the study id.
   */
  async _storePendingConsent(studyId) {
    this._storage.addPendingConsent(studyId);

    try {
      await this._sendMessageToStudy(studyId, "uninstall", {});
    } catch (e) {
      console.error(`Core._storePendingConsent - Unable to uninstall ${studyId}`, e);
    }
  }
}

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const core = new Core({
    availableStudiesURI: '/public/locally-available-studies.json',
    disableRemoteSettings: true,
    website: 'https://rally.mozilla.org',
});
core.initialize();
