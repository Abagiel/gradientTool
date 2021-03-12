// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"modules/src/utils/functions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$ = $;
exports.delClass = delClass;
exports.stopPropagation = stopPropagation;
exports.objectToCSS = objectToCSS;
exports.wrapper = wrapper;
exports.strToArr = strToArr;
exports.getEventOptions = getEventOptions;
exports.eventCondition = eventCondition;

function $(selector) {
  return document.querySelector(selector);
}

function delClass(target, clas) {
  target.classList.remove(clas);
}

function stopPropagation(e) {
  if (e) e.stopPropagation();
}

function objectToCSS() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.entries(obj).map(function (v) {
    return v.join(': ');
  }).join(';');
}

function camelToDash(s) {
  return s.replace(/[A-Z]/g, function (m) {
    return "-" + m.toLowerCase();
  });
}

function moveDataFromChildToParent(target) {
  var childData = target.firstElementChild.dataset;
  Object.entries(childData).forEach(function (d) {
    return target.setAttribute('data-' + camelToDash(d[0]), d[1]);
  });
}

function wrapper(selector, html) {
  var container = document.createElement(selector);
  container.insertAdjacentHTML('beforeend', html);
  moveDataFromChildToParent(container);
  return container;
}

function strToArr(str, point) {
  return str.split(point);
}

function getEventOptions(data) {
  var options = {};
  options.event = data[0];
  options.selector = data[1];
  if (data.length <= 2) return options;
  var keyData = data[2].split('=');
  options.value = keyData;
  return options;
}

function eventCondition(e, value) {
  if (!value) return false;
  var key = value[0];
  return handlers["".concat(key, "Handler")](e, value);
}

var handlers = {
  keyHandler: function keyHandler(e, value) {
    var val = value[1];
    if (e.key === val) return true;
    return false;
  },
  coordHandler: function coordHandler(e, value) {
    var coords = value[1].split(',');
    var x = coords[0].split('-');
    var y = coords[1].split('-');
    var cx = e.clientX;
    var cy = e.clientY;
    if (cx >= x[0] && cx <= x[1] && cy >= y[0] && cy <= y[1]) return true;
    return false;
  }
};
},{}],"modules/src/modules/classes/AnimationBlock.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _functions = require("../../utils/functions.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AnimationBlock = /*#__PURE__*/function () {
  function AnimationBlock(startClass, endClass) {
    _classCallCheck(this, AnimationBlock);

    this.start = startClass;
    this.end = endClass;
  }

  _createClass(AnimationBlock, [{
    key: "shouldCancelAnimation",
    value: function shouldCancelAnimation(callback) {
      if (!this.start) {
        if (callback) callback();
        return;
      }
    }
  }, {
    key: "runStart",
    value: function runStart(target) {
      this.shouldCancelAnimation();
      target.style.animationDirection = 'normal';
      target.classList.add(this.start);
      this.observer(target, 'end');
    }
  }, {
    key: "runEnd",
    value: function runEnd(target, callback) {
      this.shouldCancelAnimation(callback);

      if (this.end === this.start) {
        target.style.animationDirection = 'reverse';
      }

      target.classList.add(this.end);
      this.observer(target, 'end', callback);
    }
  }, {
    key: "observer",
    value: function observer(target, type, fn) {
      var _this = this;

      var ev = "animation".concat(type);

      target["on".concat(ev)] = function (e) {
        (0, _functions.delClass)(target, _this[type]);
        if (fn) fn();
      };
    }
  }]);

  return AnimationBlock;
}();

exports.default = AnimationBlock;
},{"../../utils/functions.js":"modules/src/utils/functions.js"}],"modules/src/modules/classes/HintBlocks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HintBlock = void 0;

var _AnimationBlock = _interopRequireDefault(require("./AnimationBlock.js"));

var _functions = require("../../utils/functions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HintBlock = /*#__PURE__*/function () {
  function HintBlock(option) {
    var _this = this;

    _classCallCheck(this, HintBlock);

    _defineProperty(this, "show", function (value, e) {
      (0, _functions.stopPropagation)(e);
      if (_this.isVisible) return;
      if (value && !(0, _functions.eventCondition)(e, value)) return;

      _this.root.append(_this.hint);

      _this.isVisible = true;
      ++_this.count;

      _this.animation.runStart(_this.hint);

      _this.addTrigger(_this.hideOption, 'hide');
    });

    _defineProperty(this, "hide", function (value, e) {
      (0, _functions.stopPropagation)(e);
      if (value && !(0, _functions.eventCondition)(e, value)) return;

      _this.animation.runEnd(_this.hint, function () {
        return _this.hint.remove();
      });

      _this.isVisible = false;

      _this.removeEvents();
    });

    this.root = option.root;
    this.hideOption = option.hide;
    this.showOption = option.show;
    this.animation = new _AnimationBlock.default(option.start, option.end);
    this.hint = option.hint;
    this.limit = option.count || Infinity;
    this.count = 0;
    this.isVisible = false;
    this.hideEvent = null;
    this.showEvent = null;
  }

  _createClass(HintBlock, [{
    key: "removeEvents",
    value: function removeEvents() {
      if (this.hideEvent) this.hideEvent();

      if (this.showEvent && this.count >= this.limit) {
        this.showEvent();
      }
    }
  }, {
    key: "addTrigger",
    value: function addTrigger(type, method) {
      if (typeof type === 'number') {
        this.actionByTime(this[method], type);
      }

      if (_typeof(type) === 'object') {
        var options = (0, _functions.getEventOptions)(type);
        this.addEvent(options, this[method], method);
      }
    }
  }, {
    key: "actionByTime",
    value: function actionByTime(fn, time) {
      setTimeout(fn, time);
    }
  }, {
    key: "addEvent",
    value: function addEvent(_ref, fn, type) {
      var event = _ref.event,
          selector = _ref.selector,
          value = _ref.value;
      var target = document.querySelector(selector);

      var func = function func(e) {
        return fn(value, e);
      };

      this["".concat(type, "Event")] = function () {
        target.removeEventListener(event, func);
      };

      target.addEventListener(event, func);
    }
  }]);

  return HintBlock;
}();

exports.HintBlock = HintBlock;
},{"./AnimationBlock.js":"modules/src/modules/classes/AnimationBlock.js","../../utils/functions.js":"modules/src/utils/functions.js"}],"modules/src/modules/classes/DefaultHint.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _HintBlocks = require("./HintBlocks.js");

var _functions = require("../../utils/functions.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DefaultHint = /*#__PURE__*/function (_HintBlock) {
  _inherits(DefaultHint, _HintBlock);

  var _super = _createSuper(DefaultHint);

  function DefaultHint(option) {
    var _this;

    _classCallCheck(this, DefaultHint);

    _this = _super.call(this, {
      root: (0, _functions.$)(option.root) || document.body,
      count: option.count,
      show: option.show,
      hide: option.hide,
      start: option.start,
      end: option.end || option.start
    });
    _this.text = option.text;
    _this.styles = option.styles;

    _this.init();

    return _this;
  }

  _createClass(DefaultHint, [{
    key: "init",
    value: function init() {
      this.createHintBlock();
      this.addTrigger(this.showOption, 'show');
    }
  }, {
    key: "createHintBlock",
    value: function createHintBlock() {
      this.hint = document.createElement('div');
      this.hint.textContent = this.text;
      this.hint.className = 'hinter_hint_block';
      this.hint.setAttribute('style', (0, _functions.objectToCSS)(this.styles));
    }
  }]);

  return DefaultHint;
}(_HintBlocks.HintBlock);

exports.default = DefaultHint;
},{"./HintBlocks.js":"modules/src/modules/classes/HintBlocks.js","../../utils/functions.js":"modules/src/utils/functions.js"}],"modules/src/modules/classes/ElementHint.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _HintBlocks = require("./HintBlocks.js");

var _functions = require("../../utils/functions.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ElementHint = /*#__PURE__*/function (_HintBlock) {
  _inherits(ElementHint, _HintBlock);

  var _super = _createSuper(ElementHint);

  function ElementHint(element) {
    var _this;

    _classCallCheck(this, ElementHint);

    _this = _super.call(this, {
      root: (0, _functions.$)(element.dataset.hinterRoot) || element.parentElement || document.body,
      count: element.dataset.hinterCount,
      hide: (0, _functions.strToArr)(element.dataset.hinterHide, ':'),
      show: (0, _functions.strToArr)(element.dataset.hinterShow, ':'),
      start: element.dataset.hinterStart,
      end: element.dataset.hinterEnd || element.dataset.hinterStart,
      hint: element
    });

    _this.init();

    return _this;
  }

  _createClass(ElementHint, [{
    key: "init",
    value: function init() {
      this.hint.remove();
      this.addTrigger(this.showOption, 'show');
    }
  }]);

  return ElementHint;
}(_HintBlocks.HintBlock);

exports.default = ElementHint;
},{"./HintBlocks.js":"modules/src/modules/classes/HintBlocks.js","../../utils/functions.js":"modules/src/utils/functions.js"}],"modules/src/utils/selectHintBlock.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hintBlock = hintBlock;

var _DefaultHint = _interopRequireDefault(require("../modules/classes/DefaultHint.js"));

var _ElementHint = _interopRequireDefault(require("../modules/classes/ElementHint.js"));

var _functions = require("./functions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function hintBlock(hint) {
  if (typeof hint === 'string') return new _ElementHint.default((0, _functions.wrapper)('div', hint));
  if (_typeof(hint) === 'object' && hint.tagName) return new _ElementHint.default(hint);
  if (_typeof(hint) === 'object') return new _DefaultHint.default(hint);
}
},{"../modules/classes/DefaultHint.js":"modules/src/modules/classes/DefaultHint.js","../modules/classes/ElementHint.js":"modules/src/modules/classes/ElementHint.js","./functions.js":"modules/src/utils/functions.js"}],"modules/src/modules/Tool.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _selectHintBlock = require("../utils/selectHintBlock.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tool = /*#__PURE__*/function () {
  function Tool(hints) {
    _classCallCheck(this, Tool);

    this.hints = hints;
    this.init();
  }

  _createClass(Tool, [{
    key: "init",
    value: function init() {
      this.hints.map(_selectHintBlock.hintBlock);
    }
  }]);

  return Tool;
}();

exports.default = Tool;
},{"../utils/selectHintBlock.js":"modules/src/utils/selectHintBlock.js"}],"modules/src/utils/config.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hints = void 0;
var hints = [{
  show: 1000,
  hide: 3000,
  start: 'move',
  text: 'Hello, it is Gradient Tool!',
  styles: {
    top: '10px',
    left: '10px',
    width: 'auto',
    height: 'auto'
  }
}, {
  show: 2000,
  hide: 3000,
  start: 'move',
  text: 'Click on gradient block to close gradient settings',
  styles: {
    top: '60px',
    left: '10px',
    width: 'auto',
    height: 'auto'
  }
}, {
  count: 1,
  show: ['click', '[data-gradient="gradienT"]'],
  hide: ['mousemove', '#showSettings'],
  start: 'moveleft',
  text: 'Click on block in right border to open settings',
  styles: {
    top: '10px',
    right: '10px',
    width: 'auto',
    height: 'auto'
  }
}];
exports.hints = hints;
},{}],"modules/src/index.js":[function(require,module,exports) {
"use strict";

var _Tool = _interopRequireDefault(require("./modules/Tool.js"));

var _config = require("./utils/config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _Tool.default(_config.hints);
},{"./modules/Tool.js":"modules/src/modules/Tool.js","./utils/config.js":"modules/src/utils/config.js"}],"../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "12852" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","modules/src/index.js"], null)
//# sourceMappingURL=/src.e114b2dd.js.map