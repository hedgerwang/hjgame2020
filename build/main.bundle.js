/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/joypad.js/dist/joypad.min.js":
/*!***************************************************!*\
  !*** ./node_modules/joypad.js/dist/joypad.min.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*	
    joypad.js v2.1.4	
    Copyright (c) 2019 Arun Michael Dsouza (amdsouza92@gmail.com)	
    Licence: MIT	
*/
!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var o={events:{},publish:function(t,e){this.events.hasOwnProperty(t)&&this.events[t].forEach(t=>t(e))},subscribe:function(t,e){return this.events.hasOwnProperty(t)||(this.events[t]=[]),this.events[t].push(e),{unsubscribe:function(){this.events[t].splice(this.events[t].indexOf(e),1)}.bind(this)}}};const i={NATIVE:"gamepadconnected",ALIAS:"connect"},s={NATIVE:"gamepaddisconnected",ALIAS:"disconnect"},r={NATIVE:null,ALIAS:"button_press"},a={NATIVE:null,ALIAS:"axis_move"},u={NAME:"left_stick",AXES:{X:0,Y:1}},d={NAME:"right_stick",AXES:{X:2,Y:3}},c="left",p="right",l="top",b="bottom",A={button_0:0,button_1:1,button_2:2,button_3:3,button_4:4,button_5:5,button_6:6,button_7:7,button_8:8,button_9:9,button_10:10,button_11:11,button_12:12,button_13:13,button_14:14,button_15:15,button_16:16,button_17:17},f=t=>{console.warn&&"function"==typeof console.warn?console.warn(t):console.log(t)};var h={loopStarted:!1,instances:{},buttonEvents:{joypad:[]},settings:{axisMovementThreshold:.8},remove:function(t){return delete this.instances[t]},on:function(t,e){switch(t){case i.ALIAS:return o.subscribe(i.ALIAS,e);case s.ALIAS:return o.subscribe(s.ALIAS,e);case r.ALIAS:return o.subscribe(r.ALIAS,e);case a.ALIAS:return o.subscribe(a.ALIAS,e)}},vibrate:function(t,e){const{vibrationActuator:n}=t,o=e||this.settings.vibration;if((t=>!!(t&&t.type&&t.playEffect&&"function"==typeof t.playEffect))(n)){const{type:e}=n;return t.vibrationActuator.playEffect(e,o)}f("No vibration actuator interface found - https://developer.mozilla.org/en-US/docs/Web/API/GamepadHapticActuator")},set:function(t){const{axisMovementThreshold:e,vibration:n,customButtonMapping:o}=t,i=parseFloat(e);isNaN(i)||(this.settings.axisMovementThreshold=i),this.settings.vibration=n,this.settings.customButtonMapping=o}};var v={id:null,start:function(){const t=window.requestAnimationFrame||window.webkitRequestAnimationFrame,{buttonEvents:e}=h;let n=window.navigator.getGamepads();(n=Array.prototype.slice.call(n)).forEach((t,n)=>{t&&(e.joypad[n]||(e.joypad[n]={}),h.instances[n]=t,m(t),y(t))}),e.joypad.forEach(t=>{t&&Object.keys(t).forEach(e=>{w(e,t)})}),this.id=t(this.start.bind(this))},stop:function(t){return(window.cancelAnimationFrame||window.webkitCancelAnimationFrame)(t)}};const m=t=>{t.buttons.forEach((e,n)=>{const{customButtonMapping:o}=h.settings,i=((t,e)=>{let n=[];return Object.keys(e).forEach(o=>{e[o]===t?n.push(o):Array.isArray(e[o])&&-1!==e[o].indexOf(t)&&n.push(o)}),n})(n,o||A),{buttonEvents:s}=h;i&&i.length&&i.forEach(o=>{e.pressed?(s.joypad[t.index][o]||(s.joypad[t.index][o]={pressed:!0,hold:!1,released:!1}),s.joypad[t.index][o].button=e,s.joypad[t.index][o].index=n,s.joypad[t.index][o].gamepad=t):!e.pressed&&s.joypad[t.index][o]&&(s.joypad[t.index][o].released=!0,s.joypad[t.index][o].hold=!1)})})},y=t=>{const{axisMovementThreshold:e}=h.settings,{axes:n}=t,o=n.length/2;n.forEach((n,i)=>{if(Math.abs(n)>e){let e=null,s=null,r=n;e=i<o?u.NAME:d.NAME,i!==u.AXES.X&&i!==d.AXES.X||(s=n<0?c:p),i!==u.AXES.Y&&i!==d.AXES.Y||(s=n<0?l:b);const A={gamepad:t,totalSticks:o,stickMoved:e,directionOfMovement:s,axisMovementValue:r,axis:i};return window.dispatchEvent((t=>new CustomEvent(a.ALIAS,{detail:t}))(A))}})},w=(t,e)=>{if(e[t].pressed){const n=t=>new CustomEvent(r.ALIAS,{detail:t}),{index:o,gamepad:i}=e[t],s={buttonName:t,button:e[t].button,index:o,gamepad:i};window.dispatchEvent(n(s)),e[t].pressed=!1,e[t].hold=!0}else e[t].hold||e[t].released&&delete e[t]};window.addEventListener(i.NATIVE,t=>{if(o.publish(i.ALIAS,t),!h.loopStarted)return h.loopStarted=!0,v.start()}),window.addEventListener(s.NATIVE,t=>{if(o.publish(s.ALIAS,t),h.remove(t.gamepad.index),h.buttonEvents.joypad[t.gamepad.index]=null,!Object.keys(h.instances).length)return h.loopStarted=!1,v.stop(v.id)}),window.addEventListener(r.ALIAS,t=>o.publish(r.ALIAS,t)),window.addEventListener(a.ALIAS,t=>o.publish(a.ALIAS,t)),(()=>!(!window.navigator.getGamepads||"function"!=typeof window.navigator.getGamepads))()?window.joypad=h:(window.joypad={},f("Your browser does not support the Gamepad API - https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API"))}]);

/***/ }),

/***/ "./src/javascripts/BoundingBox.js":
/*!****************************************!*\
  !*** ./src/javascripts/BoundingBox.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BoundingBox; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Vec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vec */ "./src/javascripts/Vec.js");




function isPointAtBox(point, box) {
  if (point.x > box.pos.x + box.size.x || point.x < box.pos.x || point.y > box.pos.y + box.size.y || point.y < box.pos.y) {
    return false;
  }

  return true;
}

var BoundingBox =
/*#__PURE__*/
function () {
  function BoundingBox(pos, size) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BoundingBox);

    this.pos = pos;
    this.size = size;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BoundingBox, [{
    key: "isOverlapping",
    value: function isOverlapping(box) {
      return isPointAtBox(box.pos, this) || isPointAtBox(new _Vec__WEBPACK_IMPORTED_MODULE_2__["default"](box.pos.x + box.size.x, box.pos.y), this) || isPointAtBox(new _Vec__WEBPACK_IMPORTED_MODULE_2__["default"](box.pos.x, box.size.y + box.pos.y), this) || isPointAtBox(new _Vec__WEBPACK_IMPORTED_MODULE_2__["default"](box.pos.x + box.size.x, box.size.y + box.pos.y), this);
    }
  }]);

  return BoundingBox;
}();



/***/ }),

/***/ "./src/javascripts/Coin.js":
/*!*********************************!*\
  !*** ./src/javascripts/Coin.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Coin; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./State */ "./src/javascripts/State.js");
/* harmony import */ var _Vec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Vec */ "./src/javascripts/Vec.js");





var SIZE = new _Vec__WEBPACK_IMPORTED_MODULE_4__["default"](0.6, 0.6);
var PI2 = Math.PI * 2;
var wobbleSpeed = 8;
var wobbleDist = 0.07;

var Coin =
/*#__PURE__*/
function () {
  function Coin(pos, basePos, _wobble) {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Coin);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "collide", function (state) {
      var filtered = state.actors.filter(function (a) {
        return a != _this;
      });
      var status = state.status;

      if (!filtered.some(function (a) {
        return a.type == 'coin';
      })) {
        status = 'won';
      }

      return new _State__WEBPACK_IMPORTED_MODULE_3__["default"](state.level, filtered, status);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "update", function (time) {
      var wobble = _this.wobble + time * wobbleSpeed;
      var wobblePos = Math.sin(wobble) * wobbleDist;
      return new Coin(_this.basePos.plus(new _Vec__WEBPACK_IMPORTED_MODULE_4__["default"](0, wobblePos)), _this.basePos, wobble);
    });

    this.pos = pos;
    this.basePos = basePos;
    this.wobble = _wobble;
    this.size = SIZE;
    this.type = 'coin';
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Coin, null, [{
    key: "create",
    value: function create(pos) {
      var basePos = pos.plus(new _Vec__WEBPACK_IMPORTED_MODULE_4__["default"](0.2, 0.1));
      return new Coin(basePos, basePos, Math.random() * PI2);
    }
  }]);

  return Coin;
}();



/***/ }),

/***/ "./src/javascripts/Configs.js":
/*!************************************!*\
  !*** ./src/javascripts/Configs.js ***!
  \************************************/
/*! exports provided: GAME_LEVELS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_LEVELS", function() { return GAME_LEVELS; });
var GAME_LEVELS = ["\n###############\n...............\n...............\n..F......F.....\n...............\n...............\n...............\n..............\n...............\n...............\n...............\n..@............\n..#....M..M....\n###############\n", "\n#####################################\n.....................................\n...@..#..#.####.###...###..####...##.\n......#..#.#....#..#.#.....#.....#..#\n......####.####.#..#.#.###.####..###.\n......#..#.#....#..#.#...#.#.....#.#.\n......#..#.####.###...###..####..#..#\n.....................................\n.....................................\n.....................................\n...........o........o................\n.....................................\n.......o.......o...M...oooo....o.....\n############+++######################\n...........#+++#.....................\n...........#####.....................\n  ", "\n################################\n................................\n................................\n................................\n................................\n................................\n................................\n..@.....M###....o......oooo.....\n############+++#################\n...........#+++#................\n...........#####................\n  ", "                             \n................................................................................\n................................................................................\n................................................................................\n................................................................................\n................................................................................\n................................................................................\n..................................................................###...........\n...................................................##......##....##+##..........\n....................................o.o......##..................#+++#..........\n.................................................................##+##..........\n...................................#####..........................#v#...........\n............................................................................##..\n..##......................................o.o................................#..\n..#.....................o....................................................#..\n..#.....................................#####.............................o.#..\n..#..@.......####.......o....................................................#..\n..#.......M..#..#..oooooooo..........ooooooooooooo...............#####.......#..\n..############..###############...####################.....#######...#########..\n..............................#...#..................#.....#....................\n..............................#+++#..................#+++++#....................\n..............................#+++#..................#+++++#....................\n..............................#####..................#######....................\n................................................................................\n................................................................................\n", "                                                                     \n................................................................................\n................................................................................\n....###############################.............................................\n...##.............................##########################################....\n...#.......................................................................##...\n...#....o...................................................................#...\n...#................................................=.......................#...\n...#.o........################...................o..o...........|........o..#...\n...#.........................#..............................................#...\n...#....o....................##########.....###################....##########...\n...#..................................#+++++#.................#....#............\n...###############....oo......=o.o.o..#######.###############.#....#............\n.....#...............o..o.............#.......#......#........#....#............\n.....#....................#############..######.####.#.########....########.....\n.....#.............########..............#...........#.#..................#.....\n.....#..........####......####...#####################.#..................#.....\n.....#........###............###.......................########....########.....\n.....#.......##................#########################......#....#............\n.....#.......#................................................#....#............\n.....###......................................................#....#............\n.......#...............o...........................................#............\n.......#...............................................o...........#............\n.......#########......###.....############.........................##...........\n.............#..................#........#####....#######.o.........########....\n.............#++++++++++++++++++#............#....#.....#..................#....\n.............#++++++++++++++++++#..........###....###...####.o.............#....\n.............####################..........#........#......#.....|.........#....\n...........................................#++++++++#......####............#....\n...........................................#++++++++#.........#........@...#....\n...........................................#++++++++#.........##############....\n...........................................##########...........................\n................................................................................\n", "\n......................................#++#........................#######....................................#+#..\n......................................#++#.....................####.....####.................................#+#..\n......................................#++##########...........##...........##................................#+#..\n......................................##++++++++++##.........##.............##...............................#+#..\n.......................................##########++#.........#....................................o...o...o..#+#..\n................................................##+#.........#.....o...o....................................##+#..\n.................................................#+#.........#................................###############++#..\n.................................................#v#.........#.....#...#........................++++++++++++++##..\n.............................................................##..|...|...|..##............#####################...\n..............................................................##+++++++++++##............v........................\n...............................................................####+++++####......................................\n...............................................#.....#............#######........###.........###..................\n...............................................#.....#...........................#.#.........#.#..................\n...............................................#.....#.............................#.........#....................\n...............................................#.....#.............................##........#....................\n...............................................##....#.............................#.........#....................\n...............................................#.....#......o..o.....#...#.........#.........#....................\n...............#######........###...###........#.....#...............#...#.........#.........#....................\n..............##.....##.........#...#..........#.....#.....######....#...#...#########.......#....................\n.............##.......##........#.o.#..........#....##...............#...#...#...............#....................\n.....@.......#.........#........#...#..........#.....#...............#...#...#...............#....................\n....###......#.........#........#...#..........#.....#...............#...#####...######......#....................\n....#.#......#.........#.......##.o.##.........#.....#...............#.....o.....#.#.........#....................\n++++#.#++++++#.........#++++++##.....##++++++++##....#++++++++++.....#.....=.....#.#.........#....................\n++++#.#++++++#.........#+++++##.......##########.....#+++++++##+.....#############.##..o.o..##....................\n++++#.#++++++#.........#+++++#....o.................##++++++##.+....................##.....##.....................\n++++#.#++++++#.........#+++++#.....................##++++++##..+.....................#######......................\n++++#.#++++++#.........#+++++##.......##############++++++##...+..................................................\n++++#.#++++++#.........#++++++#########++++++++++++++++++##....+..................................................\n++++#.#++++++#.........#++++++++++++++++++++++++++++++++##.....+..................................................\n", "\n..............................................................................................................\n..............................................................................................................\n..............................................................................................................\n..............................................................................................................\n..............................................................................................................\n........................................o.....................................................................\n..............................................................................................................\n........................................#.....................................................................\n........................................#.....................................................................\n........................................#.....................................................................\n........................................#.....................................................................\n.......................................###....................................................................\n.......................................#.#.................+++........+++..###................................\n.......................................#.#.................+#+........+#+.....................................\n.....................................###.###................#..........#......................................\n......................................#...#.................#...oooo...#.......###............................\n......................................#...#.................#..........#......#+++#...........................\n......................................#...#.................############.......###............................\n.....................................##...##......#...#......#................................................\n......................................#...#########...########..............#.#...............................\n......................................#...#...........#....................#+++#..............................\n......................................#...#...........#.....................###...............................\n.....................................##...##..........#.......................................................\n......................................#...#=.=.=.=....#............###........................................\n......................................#...#...........#...........#+++#.......................................\n......................................#...#....=.=.=.=#.....o......###.......###..............................\n.....................................##...##..........#.....................#+++#.............................\n..............................o...o...#...#...........#.....#................##v........###...................\n......................................#...#...........#..............#.................#+++#..................\n.............................###.###.###.###.....o.o..#++++++++++++++#...................v#...................\n.............................#.###.#.#.###.#..........#++++++++++++++#........................................\n.............................#.............#...#######################........................................\n.............................##...........##.........................................###......................\n..###.........................#.....#.....#.........................................#+++#................###..\n..#.#.........................#....###....#..........................................###.................#.#..\n..#...........................#....###....#######........................#####.............................#..\n..#...........................#...........#..............................#...#.............................#..\n..#...........................##..........#..............................#.#.#.............................#..\n..#.......................................#.......|####|....|####|.....###.###.............................#..\n..#................###.............o.o....#..............................#.........###.....................#..\n..#...............#####.......##..........#.............................###.......#+++#..........#.........#..\n..#...............o###o.......#....###....#.............................#.#........###..........###........#..\n..#................###........#############..#.oo.#....#.oo.#....#.oo..##.##....................###........#..\n..#......@..........#.........#...........#++#....#++++#....#++++#....##...##....................#.........#..\n..#############################...........#############################.....################################..\n..............................................................................................................\n..............................................................................................................\n", "\n..................................................................................................###.#.......\n......................................................................................................#.......\n..................................................................................................#####.......\n..................................................................................................#...........\n..................................................................................................#.###.......\n..........................o.......................................................................#.#.#.......\n.............................................................................................o.o.o###.#.......\n...................###................................................................................#.......\n.......+..o..+................................................#####.#####.#####.#####.#####.#####.#####.......\n.......#.....#................................................#...#.#...#.#...#.#...#.#...#.#...#.#...........\n.......#=.o..#............#...................................###.#.###.#.###.#.###.#.###.#.###.#.#####.......\n.......#.....#..................................................#.#...#.#...#.#...#.#...#.#...#.#.....#.......\n.......+..o..+............o..................................####.#####.#####.#####.#####.#####.#######.......\n..............................................................................................................\n..........o..............###..............................##..................................................\n..............................................................................................................\n..............................................................................................................\n......................................................##......................................................\n...................###.........###............................................................................\n..............................................................................................................\n..........................o.....................................................#......#......................\n..........................................................##.....##...........................................\n.............###.........###.........###.................................#..................#.................\n..............................................................................................................\n.................................................................||...........................................\n..###########.................................................................................................\n..#.........#.o.#########.o.#########.o.##................................................#...................\n..#.........#...#.......#...#.......#...#.................||..................#.....#.........................\n..#..@......#####...o...#####...o...#####.....................................................................\n..#######.....................................#####.......##.....##.....###...................................\n........#=..................=................=#...#.....................###...................................\n........#######################################...#+++++++++++++++++++++###+++++++++++++++++++++++++++++++++++\n..................................................############################################################\n..............................................................................................................\n"].map(function (str) {
  return str.trim();
}); // GAME_LEVELS[0] = GAME_LEVELS[3];
//GAME_LEVELS.shift();
//GAME_LEVELS.shift();

/***/ }),

/***/ "./src/javascripts/DOMDisplay.js":
/*!***************************************!*\
  !*** ./src/javascripts/DOMDisplay.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DOMDisplay; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _getViewportSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getViewportSize */ "./src/javascripts/getViewportSize.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./log */ "./src/javascripts/log.js");







function elt(name, attrs) {
  var dom = document.createElement(name);

  for (var _i = 0, _Object$keys = Object.keys(attrs); _i < _Object$keys.length; _i++) {
    var attr = _Object$keys[_i];
    dom.setAttribute(attr, attrs[attr]);
  }

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  for (var _i2 = 0, _children = children; _i2 < _children.length; _i2++) {
    var child = _children[_i2];
    dom.appendChild(child);
  }

  return dom;
}

var scale = 20;

function drawGrid(level) {
  return elt.apply(void 0, ['table', {
    "class": 'grid',
    style: "width: ".concat(level.width * scale, "px")
  }].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(level.rows.map(function (row) {
    return elt.apply(void 0, ['tr', {
      style: "height: ".concat(scale, "px")
    }].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(row.map(function (type) {
      return elt('td', {
        "class": type
      });
    }))));
  }))));
}

function drawActors(actors) {
  return elt.apply(void 0, ['div', {
    "class": 'actors'
  }].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(actors.map(function (actor) {
    var rect = elt('div', {
      "class": "actor ".concat(actor.type)
    });
    rect.style.width = "".concat(actor.size.x * scale, "px");
    rect.style.height = "".concat(actor.size.y * scale, "px");
    var px = "".concat(actor.pos.x * scale, "px");
    var py = "".concat(actor.pos.y * scale, "px");
    rect.style.left = px;
    rect.style.top = py;
    var direction = actor.attrs ? actor.attrs.direction : null;
    rect.setAttribute('data-direction', direction || '');
    rect.setAttribute('data-costume', actor.costume || '');
    var opacity = actor.attrs ? actor.attrs.opacity : null;

    if (typeof opacity === 'number') {
      rect.style.opacity = opacity;
    }

    return rect;
  }))));
}

var DOMDisplay =
/*#__PURE__*/
function () {
  function DOMDisplay(parent, level) {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DOMDisplay);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_currentScale", NaN);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "syncState", function (state) {
      if (_this.actorLayer) {
        _this.actorLayer.remove();
      }

      _this.actorLayer = drawActors(state.actors);

      _this.foreground.appendChild(_this.actorLayer);

      _this.dom.className = "game ".concat(state.status);

      _this.scrollPlayerIntoView(state);

      _this._autoScale();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "scrollPlayerIntoView", function (state) {
      var width = _this.foreground.clientWidth;
      var height = _this.foreground.clientHeight;
      var margin = width / 3; // The viewport

      var left = _this.foreground.scrollLeft,
          right = left + width;
      var top = _this.foreground.scrollTop,
          bottom = top + height;
      var player = state.player;
      var center = player.pos.plus(player.size.times(0.5)).times(scale);
      var _this$foreground = _this.foreground,
          scrollLeft = _this$foreground.scrollLeft,
          scrollTop = _this$foreground.scrollTop;

      if (center.x < left + margin) {
        _this.foreground.scrollLeft = center.x - margin;
      } else if (center.x > right - margin) {
        _this.foreground.scrollLeft = center.x + margin - width;
      }

      if (center.y < top + margin) {
        _this.foreground.scrollTop = center.y - margin;
      } else if (center.y > bottom - margin) {
        _this.foreground.scrollTop = center.y + margin - height;
      }

      _this.coinsScored.textContent = _this.level.coinsCount - state.actors.filter(function (ac) {
        return ac.type === 'coin';
      }).length;
      var bx1 = -scrollLeft * 0.2;
      var bx2 = -scrollLeft * 0.4;
      _this.bg1.style.backgroundPosition = "".concat(bx1, "px bottom");
      _this.bg2.style.backgroundPosition = "".concat(bx2, "px bottom");
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_currentGame", NaN);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_autoScale", function (event) {
      var game = _this.dom;

      if (!game) {
        _this._currentScale = NaN;
        return;
      }

      var currentScale = _this._currentScale;
      var style = document.defaultView.getComputedStyle(game);
      var hh = parseInt(style.height, 10);
      var ww = parseInt(style.width, 10);

      var _getViewportSize = Object(_getViewportSize__WEBPACK_IMPORTED_MODULE_4__["default"])(),
          width = _getViewportSize.width,
          height = _getViewportSize.height;

      var vh = height - 20;
      var vw = width - 20;
      var scale = Math.round(10 * (vh > vw ? vw / ww : vh / hh)) / 10;

      if (scale && scale !== currentScale) {
        _this._currentScale = scale; // log({scale, vw, vh});

        game.style.transform = "scale(".concat(scale, ")");
      }
    });

    this.level = level;
    var grid = drawGrid(level);
    this.grid = grid;
    var coinsScored = elt('span', {
      "class": 'coins-scored'
    });
    var coinsTotal = elt('span', {
      "class": 'coins-all'
    });
    coinsTotal.innerHTML = ' / ' + String(level.coinsCount);
    var scores = elt('div', {
      "class": 'scores'
    }, coinsScored, coinsTotal);
    this.scores = scores;
    this.coinsScored = coinsScored;
    var bg1 = elt('div', {
      "class": 'background background-1'
    });
    var bg2 = elt('div', {
      "class": 'background background-2'
    });
    var foreground = elt('div', {
      "class": 'foreground'
    }, grid);
    this.foreground = foreground;
    this.dom = elt('div', {
      "class": 'game',
      'data-level': level.index + 1
    }, foreground, scores, bg1, bg2);
    this.actorLayer = null;
    this.bg1 = bg1;
    this.bg2 = bg2;
    parent.appendChild(this.dom);
    window.addEventListener('resize', this._autoScale, true);
    document.addEventListener('scroll', this._autoScale, true);
    console.log('DOMDisplay', Date.now());
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DOMDisplay, [{
    key: "clear",
    value: function clear() {
      this.dom.remove();
      this.dom = null;
      window.removeEventListener('resize', this._autoScale, true);
    }
  }]);

  return DOMDisplay;
}();



/***/ }),

/***/ "./src/javascripts/FlyGuardian.js":
/*!****************************************!*\
  !*** ./src/javascripts/FlyGuardian.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FlyGuardian; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BoundingBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BoundingBox */ "./src/javascripts/BoundingBox.js");
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./State */ "./src/javascripts/State.js");
/* harmony import */ var _Vec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Vec */ "./src/javascripts/Vec.js");







var SIZE = new _Vec__WEBPACK_IMPORTED_MODULE_6__["default"](4, 2);
var dir = 0;

var FlyGuardian =
/*#__PURE__*/
function () {
  function FlyGuardian(_pos, _speed, _costume, _attrs) {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, FlyGuardian);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "collide", function (state) {
      return new _State__WEBPACK_IMPORTED_MODULE_5__["default"](state.level, state.actors, 'lost');
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "update", function (time, state) {
      var now = Date.now();
      var frame = now % 8 <= 4 ? 1 : 2;
      var costume = "frame-".concat(frame);
      var speed = _this.speed;

      var pos = _this.pos.plus(speed.times(time));

      var attrs = _this.attrs;

      if (state.level.touches(pos, _this.size, 'wall')) {
        pos = _this.pos;
        speed = _this.speed.times(-1);
      } else {
        var boxThis = new _BoundingBox__WEBPACK_IMPORTED_MODULE_4__["default"](pos, _this.size);
        var anotherGuardian = state.actors.find(function (actor) {
          if (actor == _this || actor.type !== 'fly-guardian') {
            return false;
          }

          var boxThat = new _BoundingBox__WEBPACK_IMPORTED_MODULE_4__["default"](actor.pos, actor.size);
          return boxThis.isOverlapping(boxThat);
        });

        if (anotherGuardian) {
          var mx = anotherGuardian.pos.x + anotherGuardian.size.x / 2;
          pos = _this.pos;

          if (speed.x > 0 && pos.x < mx) {
            speed = speed.times(-1);
          }

          if (speed.x < 0 && pos.x > mx) {
            speed = speed.times(-1);
          }
        }
      }

      var direction = speed.x < 0 ? 'left' : 'right';

      if (attrs.direction !== direction) {
        attrs = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, attrs, {
          direction: direction
        });
      }

      return new FlyGuardian(pos, speed, costume, attrs);
    });

    this.attrs = _attrs;
    this.costume = _costume || 'frame-1';
    this.pos = _pos;
    this.size = SIZE;
    this.speed = _speed;
    this.type = 'fly-guardian';
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(FlyGuardian, null, [{
    key: "create",
    value: function create(pos, ch) {
      dir++;
      var speed = dir % 2 ? new _Vec__WEBPACK_IMPORTED_MODULE_6__["default"](2, 0) : new _Vec__WEBPACK_IMPORTED_MODULE_6__["default"](-2, 0);
      return new FlyGuardian(pos, speed, 'frame-1', {
        direction: dir % 2 ? 'left' : 'right'
      });
    }
  }]);

  return FlyGuardian;
}();



/***/ }),

/***/ "./src/javascripts/Game.js":
/*!*********************************!*\
  !*** ./src/javascripts/Game.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DOMDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMDisplay */ "./src/javascripts/DOMDisplay.js");
/* harmony import */ var _InputManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InputManager */ "./src/javascripts/InputManager.js");
/* harmony import */ var _Level__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Level */ "./src/javascripts/Level.js");
/* harmony import */ var _Sound__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Sound */ "./src/javascripts/Sound.js");
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./State */ "./src/javascripts/State.js");
/* harmony import */ var _Configs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Configs */ "./src/javascripts/Configs.js");










function runAnimation(frameFunc) {
  var lastTime = null;

  function frame(time) {
    if (lastTime != null) {
      var timeStep = Math.min(time - lastTime, 100) / 1000;

      if (frameFunc(timeStep) === false) {
        return;
      }
    }

    lastTime = time;
    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

function runLevel(viewport, level, Display, inputManager) {
  var display = new Display(viewport, level);
  var state = _State__WEBPACK_IMPORTED_MODULE_7__["default"].start(level);
  var ending = 1;
  return new Promise(function (resolve) {
    runAnimation(function (time) {
      state = state.update(time, inputManager.getState());
      display.syncState(state);

      if (state.status == 'playing') {
        return true;
      } else if (ending > 0) {
        ending -= time;
        return true;
      } else {
        display.clear();
        resolve(state.status);
        return false;
      }
    });
  });
}

function runGame(_x, _x2, _x3, _x4) {
  return _runGame.apply(this, arguments);
}

function _runGame() {
  _runGame = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(viewport, plans, Display, inputKeys) {
    var ii, level, status;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ii = 0;

          case 1:
            if (!(ii < plans.length)) {
              _context.next = 9;
              break;
            }

            level = new _Level__WEBPACK_IMPORTED_MODULE_5__["default"](plans[ii], ii);
            _context.next = 5;
            return runLevel(viewport, level, Display, inputKeys);

          case 5:
            status = _context.sent;

            if (status == 'won') {
              ii++;
            }

          case 7:
            _context.next = 1;
            break;

          case 9:
            alert("You've won!");

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _runGame.apply(this, arguments);
}

var initialIntercostumeEvents = ['touchend', 'mouseup', 'keyup']; // Long sound must be trigged by user's intercostume.

function playGameSound(event) {
  if (event.type === 'keyup' && !/Arrow/.test(event.key)) {
    return;
  }

  if (_Sound__WEBPACK_IMPORTED_MODULE_6__["default"].get('playing_1.mp3').play(true)) {
    initialIntercostumeEvents.forEach(function (type) {
      return window.removeEventListener(type, playGameSound, true);
    });
  }
}

var Game = function Game() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Game);

  var viewport = document.createElement('div');
  viewport.className = 'viewport';
  document.body.appendChild(viewport); // Long sound must be trigged by user's intercostume first.

  initialIntercostumeEvents.forEach(function (type) {
    return window.addEventListener(type, playGameSound, true);
  });
  var inputManager = new _InputManager__WEBPACK_IMPORTED_MODULE_4__["default"](viewport);
  runGame(viewport, _Configs__WEBPACK_IMPORTED_MODULE_8__["GAME_LEVELS"], _DOMDisplay__WEBPACK_IMPORTED_MODULE_3__["default"], inputManager);

  window.onerror = function (msg, url, line) {
    // alert(msg);
    return true; // same as preventDefault
  };

  window.addEventListener('gamepadconnected', function (e) {
    console.log('Gamepad connected at index %d: %s. %d buttons, %d axes.', e.gamepad.index, e.gamepad.id, e.gamepad.buttons.length, e.gamepad.axes.length);
  });
};



/***/ }),

/***/ "./src/javascripts/InputManager.js":
/*!*****************************************!*\
  !*** ./src/javascripts/InputManager.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputManager; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Sound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sound */ "./src/javascripts/Sound.js");
/* harmony import */ var _canUseTouch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./canUseTouch */ "./src/javascripts/canUseTouch.js");
/* harmony import */ var joypad_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! joypad.js */ "./node_modules/joypad.js/dist/joypad.min.js");
/* harmony import */ var joypad_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(joypad_js__WEBPACK_IMPORTED_MODULE_4__);





var KEYS = {
  ArrowLeft: 'ArrowLeft',
  ArrowUp: 'ArrowUp',
  ArrowRight: 'ArrowRight',
  ' ': 'ArrowUp'
};

function createDOM() {
  var dom = document.createElement('div');
  dom.className = 'input-manager-panel';
  dom.innerHTML = "\n      <a class=\"control control-left\" name=\"".concat(KEYS.ArrowLeft, "\">\n        <i class=\"left-arrow arrow\"></i>\n      </a>\n      <a class=\"control control-right\" name=\"").concat(KEYS.ArrowRight, "\">\n        <i class=\"right-arrow arrow\"></i>\n      </a>\n      <a class=\"control control-up\" name=\"").concat(KEYS.ArrowUp, "\">\n        <i class=\"up-arrow arrow\"></i>\n      </a>\n    ");
  return dom;
}

function noop() {}

function bindEvents(inputMapping) {
  Object.keys(inputMapping).forEach(function (key) {
    window.addEventListener(key, inputMapping[key], {
      passive: false,
      capture: true
    });
  });
}

function preventDefault(event) {
  event.preventDefault();
}

function isTouching(touchEvent, rect) {
  var x = touchEvent.screenX;
  var y = touchEvent.screenY;
  var top = rect.top,
      left = rect.left,
      right = rect.right,
      bottom = rect.bottom;
  return y >= top && x <= right && y <= bottom && x >= left;
}

function calculateLayouts(elements) {
  var map = new Map();
  elements.forEach(function (el) {
    var _el$getBoundingClient = el.getBoundingClientRect(),
        top = _el$getBoundingClient.top,
        left = _el$getBoundingClient.left,
        right = _el$getBoundingClient.right,
        bottom = _el$getBoundingClient.bottom;

    var rect = {
      top: top,
      left: left,
      right: right,
      bottom: bottom
    };
    map.set(el, rect);
  });
  return map;
}

var InputState = function InputState() {
  var _this = this;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, InputState);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "toJSON", function () {
    var json = {};
    Object.keys(KEYS).forEach(function (key) {
      json[key] = _this[key];
    });
    return json;
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "toggleKey", function (key, enabled) {
    if (_this[key] === enabled) {
      return _this;
    } else {
      return Object.assign(new InputState(), _this.toJSON(), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, key, enabled));
    }
  });

  Object.keys(KEYS).forEach(function (key) {
    _this[key] = false;
  });
};

var InputManager = function InputManager(viewport) {
  var _this2 = this;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, InputManager);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getState", function () {
    return _this2._pressedState;
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "_onJoyPadPress", function (e) {
    var buttonName = e.detail.buttonName;
    var key = KEYS.ArrowUp;

    _this2._pressKey(key);

    setTimeout(_this2._releaseKey.bind(_this2, key), 150);
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "_onJoyPadMove", function (e) {
    var _e$detail = e.detail,
        directionOfMovement = _e$detail.directionOfMovement,
        stickMoved = _e$detail.stickMoved;
    var key;

    if (stickMoved === 'left_stick') {
      if (directionOfMovement === 'left') {
        key = KEYS.ArrowLeft;
      } else if (directionOfMovement === 'right') {
        key = KEYS.ArrowRight;
      }
    }

    if (_this2._joyPadMoveData) {
      _this2._releaseKey(_this2._joyPadMoveData.key);

      clearTimeout(_this2._joyPadMoveData.timer);
      _this2._joyPadMoveData = null;
    }

    if (key) {
      _this2._joyPadMoveData = {
        key: key,
        timer: setTimeout(_this2._releaseKey.bind(_this2, key), 150)
      };

      _this2._pressKey(key);
    }
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "_render", function () {
    var state = _this2.getState();

    _this2._controls.forEach(function (control) {
      var key = control.name;

      if (state[key]) {
        control.classList.add('pressed');
      } else {
        control.classList.remove('pressed');
      }
    });
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "_pressKey", function (keyValue) {
    var key = KEYS[keyValue];
    var state = _this2._pressedState;

    switch (key) {
      case KEYS.ArrowLeft:
      case KEYS.ArrowRight:
      case KEYS.ArrowUp:
        state = state.toggleKey(key, true);
        break;
    }

    if (state !== _this2._pressedState) {
      _this2._pressedState = state;

      _this2._render(); // window.scrollTo(0, 1000);


      if (key === KEYS.ArrowUp) {
        _Sound__WEBPACK_IMPORTED_MODULE_2__["default"].get('jump_2.mp3').play();
      }
    }
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "_releaseKey", function (keyValue) {
    var key = KEYS[keyValue];
    var state = _this2._pressedState;

    switch (key) {
      case KEYS.ArrowLeft:
      case KEYS.ArrowRight:
      case KEYS.ArrowUp:
        state = state.toggleKey(key, false);
        break;
    }

    if (state !== _this2._pressedState) {
      _this2._pressedState = state;

      _this2._render();
    }
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "_onKeyDown", function (event) {
    _this2._pressKey(event.key);
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "_onKeyUp", function (event) {
    _this2._releaseKey(event.key);
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "_onMouseDown", function (event) {
    var touches = event.touches ? Array.from(event.touches) : [event];
    var touchedControls = touches.map(function (tt) {
      return tt.target.closest('.control');
    }).filter(Boolean);
    touchedControls.forEach(function (control) {
      _this2._pressKey(control.name);
    });
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "_onMouseUp", function (event) {
    var touches = event.touches ? Array.from(event.touches) : [];
    var touchedControls = new Set(touches.map(function (tt) {
      return tt.target.closest('.control');
    }).filter(Boolean));

    _this2._controls.forEach(function (control) {
      if (!touchedControls.has(control)) {
        _this2._releaseKey(control.name);
      }
    });
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "_onMouseMove", function (event) {
    var touches = event.touches ? Array.from(event.touches) : [];
    touches.push(event);

    _this2._controls.forEach(function (control) {
      var key = control.name;

      var rect = _this2._layouts.get(control);

      var touching = touches.some(function (touchEvent) {
        return isTouching(touchEvent, rect);
      });

      if (touching) {
        _this2._pressKey(key);
      } else {
        _this2._releaseKey(key);
      }
    });
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "_onResize", function () {
    setTimeout(function () {
      _this2._layouts = calculateLayouts(_this2._controls);
    }, 100);
  });

  var dom = createDOM();
  viewport.appendChild(dom);
  var useTouch = Object(_canUseTouch__WEBPACK_IMPORTED_MODULE_3__["default"])();
  this._pressedState = new InputState();
  this._dom = dom;
  this._controls = Array.from(dom.querySelectorAll('.control'));
  this._layouts = calculateLayouts(this._controls);
  this._joyPadMoveData = null;
  var inputMapping = useTouch ? {
    keydown: this._onKeyDown,
    keyup: this._onKeyUp,
    touchstart: this._onMouseDown,
    touchend: this._onMouseUp,
    touchcancel: this._onMouseUp,
    touchmove: this._onMouseMove // contextmenu: preventDefault,

  } : {
    keydown: this._onKeyDown,
    keyup: this._onKeyUp,
    mousedown: this._onMouseDown,
    mouseup: this._onMouseUp,
    mousemove: this._onMouseMove // contextmenu: preventDefault,

  };
  bindEvents(inputMapping);
  var appBinding = useTouch ? {
    touchstart: preventDefault,
    touchmove: preventDefault,
    resize: this._onResize,
    onorientationchang: this._onResize
  } : {
    mousedown: preventDefault,
    resize: this._onResize
  };
  bindEvents(appBinding);
  var _window = window,
      joypad = _window.joypad;

  if (joypad) {
    joypad.on('button_press', this._onJoyPadPress);
    joypad.on('axis_move', this._onJoyPadMove);
  }
};



/***/ }),

/***/ "./src/javascripts/Lava.js":
/*!*********************************!*\
  !*** ./src/javascripts/Lava.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Lava; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./State */ "./src/javascripts/State.js");
/* harmony import */ var _Vec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Vec */ "./src/javascripts/Vec.js");





var SIZE = new _Vec__WEBPACK_IMPORTED_MODULE_4__["default"](1, 1);

var Lava =
/*#__PURE__*/
function () {
  function Lava(pos, speed, costume, attrs) {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Lava);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "collide", function (state) {
      return new _State__WEBPACK_IMPORTED_MODULE_3__["default"](state.level, state.actors, 'lost');
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "update", function (time, state) {
      var newPos = _this.pos.plus(_this.speed.times(time));

      if (!state.level.touches(newPos, _this.size, 'wall')) {
        return new Lava(newPos, _this.speed, _this.costume, _this.attrs);
      } else if (_this.attrs.reset) {
        return new Lava(_this.attrs.reset, _this.speed, _this.costume, _this.attrs);
      } else {
        return new Lava(_this.pos, _this.speed.times(-1), _this.costume);
      }
    });

    this.attrs = attrs || {};
    this.costume = costume;
    this.pos = pos;
    this.size = SIZE;
    this.speed = speed;
    this.type = 'lava';
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Lava, null, [{
    key: "create",
    value: function create(pos, ch) {
      if (ch == '=') {
        return new Lava(pos, new _Vec__WEBPACK_IMPORTED_MODULE_4__["default"](2, 0), 'movex');
      } else if (ch == '|') {
        return new Lava(pos, new _Vec__WEBPACK_IMPORTED_MODULE_4__["default"](0, 2), 'movey');
      } else if (ch == 'v') {
        return new Lava(pos, new _Vec__WEBPACK_IMPORTED_MODULE_4__["default"](0, 3), 'drop', {
          reset: pos
        });
      }
    }
  }]);

  return Lava;
}();



/***/ }),

/***/ "./src/javascripts/Level.js":
/*!**********************************!*\
  !*** ./src/javascripts/Level.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Level; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Coin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Coin */ "./src/javascripts/Coin.js");
/* harmony import */ var _FlyGuardian__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FlyGuardian */ "./src/javascripts/FlyGuardian.js");
/* harmony import */ var _Lava__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Lava */ "./src/javascripts/Lava.js");
/* harmony import */ var _Monster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Monster */ "./src/javascripts/Monster.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Player */ "./src/javascripts/Player.js");
/* harmony import */ var _Vec__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Vec */ "./src/javascripts/Vec.js");









var levelChars = {
  '#': 'wall',
  '+': 'lava',
  '.': 'empty',
  '=': _Lava__WEBPACK_IMPORTED_MODULE_5__["default"],
  '@': _Player__WEBPACK_IMPORTED_MODULE_7__["default"],
  '|': _Lava__WEBPACK_IMPORTED_MODULE_5__["default"],
  F: _FlyGuardian__WEBPACK_IMPORTED_MODULE_4__["default"],
  M: _Monster__WEBPACK_IMPORTED_MODULE_6__["default"],
  o: _Coin__WEBPACK_IMPORTED_MODULE_3__["default"],
  v: _Lava__WEBPACK_IMPORTED_MODULE_5__["default"]
};

var Level = function Level(plan, index) {
  var _this = this;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Level);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "touches", function (pos, size, type) {
    var xStart = Math.floor(pos.x);
    var xEnd = Math.ceil(pos.x + size.x);
    var yStart = Math.floor(pos.y);
    var yEnd = Math.ceil(pos.y + size.y);

    for (var y = yStart; y < yEnd; y++) {
      for (var x = xStart; x < xEnd; x++) {
        var isOutside = x < 0 || x >= _this.width || y < 0 || y >= _this.height;
        var here = isOutside ? 'wall' : _this.rows[y][x];
        if (here == type) return true;
      }
    }

    return false;
  });

  var rows = plan.trim().split('\n').map(function (l) {
    return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(l);
  });
  this.height = rows.length;
  this.width = rows[0].length;
  this.startActors = [];
  this.coinsCount = 0;
  this.index = index || 0;
  this.rows = rows.map(function (row, y) {
    return row.map(function (ch, x) {
      var type = levelChars[ch];

      if (!type) {
        throw new Error("unsupprted type = \"".concat(ch, "\" "));
      }

      if (typeof type == 'string') {
        return type;
      }

      if (type === _Coin__WEBPACK_IMPORTED_MODULE_3__["default"]) {
        _this.coinsCount++;
      }

      _this.startActors.push(type.create(new _Vec__WEBPACK_IMPORTED_MODULE_8__["default"](x, y), ch));

      return 'empty';
    });
  });
};



/***/ }),

/***/ "./src/javascripts/Monster.js":
/*!************************************!*\
  !*** ./src/javascripts/Monster.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Monster; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./State */ "./src/javascripts/State.js");
/* harmony import */ var _Vec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Vec */ "./src/javascripts/Vec.js");





var SIZE = new _Vec__WEBPACK_IMPORTED_MODULE_4__["default"](1, 1);
var DEAD_POS = new _Vec__WEBPACK_IMPORTED_MODULE_4__["default"](-1, -1);
var DEAD_SPEED = new _Vec__WEBPACK_IMPORTED_MODULE_4__["default"](0, 0);

function isKilling(player, monsterPos) {
  return player.pos.x + player.size.x > monsterPos.x && player.pos.x < monsterPos.x + SIZE.x && player.pos.y + player.size.y > monsterPos.y && player.pos.y < monsterPos.y && player.speed.y > 0;
}

var Monster =
/*#__PURE__*/
function () {
  function Monster(pos, speed, costume, attrs) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Monster);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "deadAt", null);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "disposed", null);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "costume", null);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "opacity", 1);

    this.attrs = attrs || {};
    this.costume = costume || '';
    this.pos = pos;
    this.size = SIZE;
    this.speed = speed;
    this.type = 'monster';
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Monster, [{
    key: "update",
    value: function update(time, state) {
      if (this.disposed) {
        return this;
      }

      var deadAt = this.attrs.deadAt;

      if (deadAt) {
        var duration = Date.now() - deadAt;

        if (duration > 1000) {
          return new Monster(DEAD_POS, DEAD_SPEED, 'dying', {
            deadAt: deadAt,
            disposed: true,
            opacity: 0
          });
        } else {
          return new Monster(this.pos, DEAD_SPEED, 'dying', {
            deadAt: deadAt,
            disposed: false,
            opacity: 1 - duration / 1000
          });
        }
      }

      var newPos = this.pos.plus(this.speed.times(time));
      var dx = (newPos.x | 0) % 2;
      var costume = dx < 1 ? 'step-1' : 'step-2';

      if (isKilling(state.player, newPos)) {
        return new Monster(this.pos, DEAD_SPEED, 'dying', {
          deadAt: Date.now(),
          disposed: false,
          opacity: 1
        });
      }

      if (!state.level.touches(newPos, this.size, 'wall')) {
        return new Monster(newPos, this.speed, costume, this.attrs);
      } else {
        return new Monster(this.pos, this.speed.times(-1), costume, this.attrs);
      }
    }
  }, {
    key: "collide",
    value: function collide(state) {
      var _this = this;

      var _this$attrs = this.attrs,
          deadAt = _this$attrs.deadAt,
          disposed = _this$attrs.disposed;

      if (deadAt) {
        if (disposed) {
          return new _State__WEBPACK_IMPORTED_MODULE_3__["default"](state.level, state.actors.filter(function (ac) {
            return ac !== _this;
          }), state.status);
        } else {
          return state;
        }
      }

      var status = isKilling(state.player, this.pos) ? state.status : 'lost';
      return new _State__WEBPACK_IMPORTED_MODULE_3__["default"](state.level, state.actors, status);
    }
  }], [{
    key: "create",
    value: function create(pos) {
      return new Monster(pos, new _Vec__WEBPACK_IMPORTED_MODULE_4__["default"](2, 0));
    }
  }]);

  return Monster;
}();



/***/ }),

/***/ "./src/javascripts/Player.js":
/*!***********************************!*\
  !*** ./src/javascripts/Player.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Vec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Vec */ "./src/javascripts/Vec.js");
/* harmony import */ var _Sound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sound */ "./src/javascripts/Sound.js");





var SIZE = new _Vec__WEBPACK_IMPORTED_MODULE_3__["default"](0.8, 1.5);
var playerXSpeed = 7;
var gravity = 30;
var jumpSpeed = 17;

var Player =
/*#__PURE__*/
function () {
  function Player(_pos, _speed, _costume, attrs) {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Player);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "update", function (time, state, keys) {
      var xSpeed = 0;

      if (keys.ArrowLeft) {
        xSpeed -= playerXSpeed;
      }

      if (keys.ArrowRight) {
        xSpeed += playerXSpeed;
      }

      var pos = _this.pos;
      var movedX = pos.plus(new _Vec__WEBPACK_IMPORTED_MODULE_3__["default"](xSpeed * time, 0));

      if (!state.level.touches(movedX, _this.size, 'wall')) {
        pos = movedX;
      }

      var ySpeed = _this.speed.y + time * gravity;
      var movedY = pos.plus(new _Vec__WEBPACK_IMPORTED_MODULE_3__["default"](0, ySpeed * time));

      if (!state.level.touches(movedY, _this.size, 'wall')) {
        pos = movedY;
      } else if (keys.ArrowUp && ySpeed > 0) {
        ySpeed = -jumpSpeed;
      } else {
        ySpeed = 0;
      }

      var costume = _this.costume;
      var direction = _this.attrs.direction;

      if (xSpeed === 0) {
        costume = 'stand';
      } else {
        var dx = (pos.x | 0) % 2;
        costume = dx < 1 ? 'step-1' : 'step-2';
        direction = xSpeed > 0 ? 'right' : 'left';
      }

      if (ySpeed !== 0) {
        costume = 'jump';
      }

      var speed = new _Vec__WEBPACK_IMPORTED_MODULE_3__["default"](xSpeed, ySpeed);
      var sound;
      return new Player(pos, speed, costume, {
        direction: direction
      });
    });

    this.pos = _pos;
    this.speed = _speed;
    this.size = SIZE;
    this.type = 'player';
    this.costume = _costume;
    this.attrs = attrs || {};
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Player, null, [{
    key: "create",
    value: function create(initialPos) {
      var speed = new _Vec__WEBPACK_IMPORTED_MODULE_3__["default"](0, 0);
      var direction = 'right';
      var costume = 'stand';
      var pos = initialPos.plus(new _Vec__WEBPACK_IMPORTED_MODULE_3__["default"](0, -0.5));
      return new Player(pos, speed, costume, {
        direction: direction
      });
    }
  }]);

  return Player;
}();



/***/ }),

/***/ "./src/javascripts/Sound.js":
/*!**********************************!*\
  !*** ./src/javascripts/Sound.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sound; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);



var instances = new Map();

var Sound =
/*#__PURE__*/
function () {
  function Sound(src) {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Sound);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "stop", function () {
      if (_this._playing) {
        var el = _this._tryElement();

        el.pause();
        el.muted = true;
        el.currentTime = 0;
        _this._playing = false;
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_onEnd", function () {
      _this.stop();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_onLoad", function () {
      _this._ready = true;
      console.log('loaded sound', _this._src);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_tryElement", function () {
      var el = _this._el;

      if (el) {
        return el;
      }

      el = document.createElement('audio');
      el.setAttribute('preload', 'auto');
      el.setAttribute('controls', 'none');
      el.preload = true;
      el.loop = false; // el.style.display = 'none';

      el.onended = _this._onEnd;
      el.oncanplay = _this._onLoad;
      el.src = _this._src; // el.muted = true;

      el.pause();
      _this._el = el;

      if (!document.body) {
        window.addEventListener('load', _this._renderEl, true);
      } else {
        _this._renderEl();
      }

      return el;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_renderEl", function (event) {
      document.body.appendChild(_this._el);

      if (event) {
        window.removeEventListener('load', _this._renderEl, true);
      }
    });

    this._src = src;
    this._el = null;
    this._playing = false;
    this._ready = false;

    this._tryElement();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Sound, [{
    key: "play",
    value: function play() {
      var _this2 = this;

      var loop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this._playing || !this._ready) {
        return false;
      }

      this.stop();
      this._playing = true;
      requestAnimationFrame(function () {
        var el = _this2._tryElement();

        el.loop = !!loop;
        el.muted = false;
        el.autoplay = true;
        el.currentTime = 0;
        el.play().then(function (played) {//
        }, function (error) {
          _this2.stop();
        });
      });
      return true;
    }
  }], [{
    key: "get",
    value: function get(src) {
      var sound = instances[src] || new Sound(src);
      instances[src] = sound;
      return sound;
    }
  }]);

  return Sound;
}(); // Preload sounds.



Sound.get('playing_1.mp3');
Sound.get('jump_2.mp3');
Sound.get('ohno_2.mp3');

/***/ }),

/***/ "./src/javascripts/State.js":
/*!**********************************!*\
  !*** ./src/javascripts/State.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return State; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Sound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sound */ "./src/javascripts/Sound.js");





function overlap(actor1, actor2) {
  return actor1.pos.x + actor1.size.x > actor2.pos.x && actor1.pos.x < actor2.pos.x + actor2.size.x && actor1.pos.y + actor1.size.y > actor2.pos.y && actor1.pos.y < actor2.pos.y + actor2.size.y;
}

var State =
/*#__PURE__*/
function () {
  function State(level, _actors, status) {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, State);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "update", function (time, keys) {
      var actors = _this.actors.map(function (actor) {
        return actor.update(time, _this, keys);
      });

      var newState = new State(_this.level, actors, _this.status);

      if (newState.status != 'playing') {
        return newState;
      }

      var currentPlayer = _this.player;
      var player = newState.player;

      if (_this.level.touches(player.pos, player.size, 'lava')) {
        return new State(_this.level, actors, 'lost');
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = actors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var actor = _step.value;

          if (actor != player && overlap(actor, player)) {
            newState = actor.collide(newState);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return newState;
    });

    this.level = level;
    this.actors = _actors;
    this.status = status;

    if (status === 'lost') {
      // Note that can't play in mobile because it's not trigger by user event.
      _Sound__WEBPACK_IMPORTED_MODULE_3__["default"].get('ohno_2.mp3').play();
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(State, [{
    key: "player",
    get: function get() {
      return this.actors.find(function (a) {
        return a.type == 'player';
      });
    }
  }], [{
    key: "start",
    value: function start(level) {
      return new State(level, level.startActors, 'playing');
    }
  }]);

  return State;
}();



/***/ }),

/***/ "./src/javascripts/Vec.js":
/*!********************************!*\
  !*** ./src/javascripts/Vec.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vec; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var Vec =
/*#__PURE__*/
function () {
  function Vec(x, y) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Vec);

    this._x = x;
    this._y = y;
    this._length = null;
    this.x = x;
    this.y = y;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Vec, [{
    key: "plus",
    value: function plus(vector) {
      return new Vec(this._x + vector.x, this._y + vector.y);
    }
  }, {
    key: "minus",
    value: function minus(vector) {
      return new Vec(this._x - vector.x, this._y - vector.y);
    }
  }, {
    key: "length",
    value: function length() {
      if (this._length === null) {
        var x = this._y;
        var y = this._y;
        this._length = Math.sqrt(x * x + y * y);
      }

      return this._length;
    }
  }, {
    key: "times",
    value: function times(factor) {
      return new Vec(this._x * factor, this._y * factor);
    }
  }]);

  return Vec;
}();



/***/ }),

/***/ "./src/javascripts/canUseTouch.js":
/*!****************************************!*\
  !*** ./src/javascripts/canUseTouch.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return canUseTouch; });
function canUseTouch() {
  var _document = document,
      defaultView = _document.defaultView,
      documentElement = _document.documentElement;
  var style = defaultView.getComputedStyle(documentElement, 'before');
  console.log(style.content);
  return /touch/.test(String(style.content));
}

/***/ }),

/***/ "./src/javascripts/getViewportSize.js":
/*!********************************************!*\
  !*** ./src/javascripts/getViewportSize.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getViewportSize; });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "./src/javascripts/log.js");

function getViewportSize() {
  var viewport = document.querySelector('.viewport') || document.body || document.documentElement;
  var clientWidth = viewport.clientWidth,
      offsetWidth = viewport.offsetWidth,
      clientHeight = viewport.clientHeight,
      offsetHeight = viewport.offsetHeight;
  var width = Math.min(offsetWidth, clientWidth, window.innerWidth);
  var height = Math.min(offsetHeight, clientHeight, window.innerHeight); // log(width, height);

  return {
    width: width,
    height: height
  };
}

/***/ }),

/***/ "./src/javascripts/log.js":
/*!********************************!*\
  !*** ./src/javascripts/log.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return log; });
var dom = document.createElement('div');
dom.className = 'log';
var enabled = 0;
function log() {
  if (!enabled) {
    return;
  }

  if (!dom.parentNode && document.body) {
    document.body.appendChild(dom);
  }

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  dom.textContent = JSON.stringify(args);
  console.log.apply(console, args);
}

/***/ }),

/***/ "./src/javascripts/main.js":
/*!*********************************!*\
  !*** ./src/javascripts/main.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ "./src/javascripts/Game.js");


window.onload = function () {
  new _Game__WEBPACK_IMPORTED_MODULE_0__["default"]();
};

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map