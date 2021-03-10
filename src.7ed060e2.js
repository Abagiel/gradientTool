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
})({"../src/modules/ColorBlock.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ColorBlock = /*#__PURE__*/function () {
  function ColorBlock(id, options) {
    _classCallCheck(this, ColorBlock);

    this.id = id;
    this.color = options.color;
    this.degree = options.degree;
    this.opacity = options.opacity;
  }

  _createClass(ColorBlock, [{
    key: "render",
    value: function render() {
      return "\n\t\t\t<div id=\"color-block\">\n\t\t\t\t<form class=\"color-form\">\n\t\t\t\t\t<input value=".concat(this.color, " type=\"color\" data-color=\"color\" data-gradient=\"").concat(this.id, "\" />\n\t\t\t\t\t<input value=").concat(this.opacity, " type=\"number\" min=\"0\" max=\"1\" step=\"0.05\" data-color=\"opacity\" data-gradient=\"").concat(this.id, "\" />\n\t\t\t\t\t<input value=").concat(this.degree, " type=\"number\" min=\"0\" max=\"100\" data-color=\"degree\" data-gradient=\"").concat(this.id, "\" />\n\t\t\t\t\t<button id=\"remove-color\" data-gradient=\"").concat(this.id, "\">&times;</button>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t");
    }
  }]);

  return ColorBlock;
}();

exports.default = ColorBlock;
},{}],"../src/utils/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ELLIPSE_SHAPE = exports.CIRCLE_SHAPE = exports.RADIAL_Y = exports.RADIAL_X = exports.GRADIENT_CONIC_R = exports.GRADIENT_CONIC = exports.GRADIENT_RADIAL_R = exports.GRADIENT_RADIAL = exports.GRADIENT_LINEAR_R = exports.GRADIENT_LINEAR = exports.RADIAL_SHAPE_ID = exports.GRADIENT_TYPE_ID = void 0;
var GRADIENT_TYPE_ID = 'gradient-type';
exports.GRADIENT_TYPE_ID = GRADIENT_TYPE_ID;
var RADIAL_SHAPE_ID = 'radial-shape';
exports.RADIAL_SHAPE_ID = RADIAL_SHAPE_ID;
var GRADIENT_LINEAR = 'linear-gradient';
exports.GRADIENT_LINEAR = GRADIENT_LINEAR;
var GRADIENT_LINEAR_R = 'repeating-linear-gradient';
exports.GRADIENT_LINEAR_R = GRADIENT_LINEAR_R;
var GRADIENT_RADIAL = 'radial-gradient';
exports.GRADIENT_RADIAL = GRADIENT_RADIAL;
var GRADIENT_RADIAL_R = 'repeating-radial-gradient';
exports.GRADIENT_RADIAL_R = GRADIENT_RADIAL_R;
var GRADIENT_CONIC = 'conic-gradient';
exports.GRADIENT_CONIC = GRADIENT_CONIC;
var GRADIENT_CONIC_R = 'repeating-conic-gradient';
exports.GRADIENT_CONIC_R = GRADIENT_CONIC_R;
var RADIAL_X = 'radial-x';
exports.RADIAL_X = RADIAL_X;
var RADIAL_Y = 'radial-y';
exports.RADIAL_Y = RADIAL_Y;
var CIRCLE_SHAPE = 'circle';
exports.CIRCLE_SHAPE = CIRCLE_SHAPE;
var ELLIPSE_SHAPE = 'ellipse';
exports.ELLIPSE_SHAPE = ELLIPSE_SHAPE;
},{}],"../src/utils/config.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorsOptions = colorsOptions;
exports.options = options;
exports.selector = void 0;

var _constants = require("./constants.js");

var selector = '[data-gradient="gradienT"]';
exports.selector = selector;

function colorsOptions() {
  return {
    color: '#ffffff',
    opacity: 1,
    degree: 0
  };
}

function options() {
  return {
    angle: 0,
    type: _constants.GRADIENT_LINEAR,
    shape: _constants.CIRCLE_SHAPE,
    x: 0,
    y: 0,
    repeat: 'repeat',
    bgh: 0,
    bgw: 0,
    bgx: '0',
    bgy: '0',
    deg: 0,
    cx: 0,
    cy: 0
  };
}

;
},{"./constants.js":"../src/utils/constants.js"}],"../src/modules/templates/buttons.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeGradient = exports.addColorBtn = void 0;

function createButton(idx, text) {
  return "<button id=\"".concat(idx, "\">").concat(text, "</button>");
}

var addColorBtn = createButton('add-color', 'Add Color');
exports.addColorBtn = addColorBtn;
var removeGradient = createButton('remove-gradient', 'Remove Gradient');
exports.removeGradient = removeGradient;
},{}],"../src/modules/templates/headings.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createH4 = createH4;

function createH4(text) {
  return "<h4>".concat(text, "</h4>");
}
},{}],"../src/modules/templates/select.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.backgroundRepeatSelect = backgroundRepeatSelect;
exports.gradientTypeSelect = gradientTypeSelect;
exports.radialShapeSelect = radialShapeSelect;

var _headings = require("./headings.js");

var _constants = require("../../utils/constants.js");

function createOption(content, value, ie) {
  var selected = ie === value ? 'selected' : '';
  return "<option ".concat(selected, " value=\"").concat(value, "\">").concat(content, "</option>");
}

function createSelect(id, content) {
  return "\n\t\t<select id=\"".concat(id, "\" data-select=\"").concat(id, "\" >\n\t\t\t").concat(content, "\n\t\t</select>\n\t");
}

function backgroundRepeatSelect(type) {
  var options = "\n\t\t".concat(createOption('Repeat', 'repeat', type), "\n\t\t").concat(createOption('Repeat X', 'repeat-x', type), "\n\t\t").concat(createOption('Repeat Y', 'repeat-y', type), "\n\t\t").concat(createOption('Revert', 'revert', type), "\n\t\t").concat(createOption('Round', 'round', type), "\n\t\t").concat(createOption('Space', 'space', type), "\n\t\t").concat(createOption('No Repeat', 'no-repeat', type));
  return (0, _headings.createH4)('Background Repeat') + createSelect('bg-repeat', options);
}

function gradientTypeSelect(type) {
  var options = "\n\t\t".concat(createOption('Linear', _constants.GRADIENT_LINEAR, type), "\n\t\t").concat(createOption('Radial', _constants.GRADIENT_RADIAL, type), "\n\t\t").concat(createOption('Conic', _constants.GRADIENT_CONIC, type), "\n\t\t").concat(createOption('Repeat Radial', _constants.GRADIENT_RADIAL_R, type), "\n\t\t").concat(createOption('Repeat Linear', _constants.GRADIENT_LINEAR_R, type), "\n\t\t").concat(createOption('Repeat Conic', _constants.GRADIENT_CONIC_R, type));
  return (0, _headings.createH4)('Select Gradient Type') + createSelect(_constants.GRADIENT_TYPE_ID, options);
}

function radialShapeSelect(shape) {
  var options = "\n\t\t".concat(createOption('Circle', _constants.CIRCLE_SHAPE, shape), "\n\t\t").concat(createOption('Ellipse', _constants.ELLIPSE_SHAPE, shape));
  return (0, _headings.createH4)('Select Shape') + createSelect(_constants.RADIAL_SHAPE_ID, options);
}
},{"./headings.js":"../src/modules/templates/headings.js","../../utils/constants.js":"../src/utils/constants.js"}],"../src/modules/templates/inputs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createInputNumber = createInputNumber;
exports.createInputRange = createInputRange;
exports.linearGradientOptions = linearGradientOptions;
exports.radialGradienOptions = radialGradienOptions;

var _select = require("./select.js");

var _constants = require("../../utils/constants.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createTagAttr(options) {
  return Object.entries(options).filter(function (option) {
    return option[1];
  }).map(function (option) {
    return option.join('=');
  }).join(' ');
}

function createInput(type, options) {
  options = _objectSpread(_objectSpread({}, options), {}, {
    type: type
  });
  return "<input ".concat(createTagAttr(options), " />");
}

function createInputNumber(value, placeholder, data, min, max, id) {
  var _createInput;

  return createInput('number', (_createInput = {
    value: value,
    placeholder: placeholder,
    min: min,
    'data-number': data
  }, _defineProperty(_createInput, "min", min), _defineProperty(_createInput, "max", max), _defineProperty(_createInput, "id", id), _createInput));
}

function createInputRange(value, data, min, max, id) {
  return createInput('range', {
    value: value,
    'data-range': data,
    min: min,
    max: max,
    id: id
  });
}

function linearGradientOptions(_ref) {
  var angle = _ref.angle;
  return createInputRange(angle, 'angle', 0, 360, 'linear-angle');
}

function radialGradienOptions(_ref2) {
  var shape = _ref2.shape,
      x = _ref2.x,
      y = _ref2.y;
  var coordLineX = createInputRange(x, 'x', 0, 100, _constants.RADIAL_X);
  var coordLineY = createInputRange(y, 'y', 0, 100, _constants.RADIAL_Y);
  return (0, _select.radialShapeSelect)(shape) + coordLineX + coordLineY;
}
},{"./select.js":"../src/modules/templates/select.js","../../utils/constants.js":"../src/utils/constants.js"}],"../src/modules/templates/forms.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.backgroundSizeForm = backgroundSizeForm;
exports.backgroundPositionForm = backgroundPositionForm;
exports.conicOptionsForm = conicOptionsForm;

var _inputs = require("./inputs.js");

var _headings = require("./headings.js");

var createForm = function createForm(content) {
  return "<form>".concat(content, "</form>");
};

function backgroundSizeForm(h, w) {
  var inputs = "\n\t\t".concat((0, _inputs.createInputNumber)(h, 'Height', 'bgh', '0'), "\n\t\t").concat((0, _inputs.createInputNumber)(w, 'Width', 'bgw', '0'));
  return (0, _headings.createH4)('Background Size') + createForm(inputs);
}

function backgroundPositionForm(x, y) {
  var inputs = "\n\t\t".concat((0, _inputs.createInputNumber)(x, 'X', 'bgx', '0'), "\n\t\t").concat((0, _inputs.createInputNumber)(y, 'Y', 'bgy', '0'));
  return (0, _headings.createH4)('Background Position') + createForm(inputs);
}

function conicOptionsForm(_ref) {
  var deg = _ref.deg,
      cx = _ref.cx,
      cy = _ref.cy;
  var inputs = "\n\t\t".concat((0, _inputs.createInputRange)(deg, 'deg', '0', 360), "\n\t\t").concat((0, _inputs.createInputNumber)(cx, 'X', 'cx', '0', null), "\n\t\t").concat((0, _inputs.createInputNumber)(cy, 'Y', 'cy', '0', null));
  return createForm(inputs);
}
},{"./inputs.js":"../src/modules/templates/inputs.js","./headings.js":"../src/modules/templates/headings.js"}],"../src/modules/templates/templates.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _buttons = require("./buttons.js");

var _inputs = require("./inputs.js");

var _select = require("./select.js");

var _forms = require("./forms.js");

var _constants = require("../../utils/constants.js");

var _gradientTypes;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function backgroundOptions(_ref) {
  var h = _ref['bgh'],
      w = _ref['bgw'],
      x = _ref['bgx'],
      y = _ref['bgy'],
      repeat = _ref.repeat;
  return (0, _forms.backgroundSizeForm)(h, w) + (0, _forms.backgroundPositionForm)(x, y) + (0, _select.backgroundRepeatSelect)(repeat);
}

function commonOptions(props) {
  var btns = "<div>".concat(_buttons.removeGradient + _buttons.addColorBtn, "</div>");
  return btns + backgroundOptions(props);
}

var gradientTypes = (_gradientTypes = {}, _defineProperty(_gradientTypes, _constants.GRADIENT_LINEAR, _inputs.linearGradientOptions), _defineProperty(_gradientTypes, _constants.GRADIENT_LINEAR_R, _inputs.linearGradientOptions), _defineProperty(_gradientTypes, _constants.GRADIENT_RADIAL, _inputs.radialGradienOptions), _defineProperty(_gradientTypes, _constants.GRADIENT_RADIAL_R, _inputs.radialGradienOptions), _defineProperty(_gradientTypes, _constants.GRADIENT_CONIC, _forms.conicOptionsForm), _defineProperty(_gradientTypes, _constants.GRADIENT_CONIC_R, _forms.conicOptionsForm), _gradientTypes);

function selectGradientOptions(props) {
  var type = props.type;
  var options = gradientTypes[type](props);
  return commonOptions(props) + (0, _select.gradientTypeSelect)(type) + options;
}

var _default = selectGradientOptions;
exports.default = _default;
},{"./buttons.js":"../src/modules/templates/buttons.js","./inputs.js":"../src/modules/templates/inputs.js","./select.js":"../src/modules/templates/select.js","./forms.js":"../src/modules/templates/forms.js","../../utils/constants.js":"../src/utils/constants.js"}],"../src/utils/functions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linearGradientStyle = linearGradientStyle;
exports.radialGradientStyle = radialGradientStyle;
exports.conicGradientStyle = conicGradientStyle;
exports.toCamelCase = toCamelCase;
exports.mergeColors = mergeColors;
exports.mergeValues = mergeValues;
exports.getOptionName = getOptionName;

function linearGradientStyle(_ref, colors) {
  var type = _ref.type,
      angle = _ref.angle;
  return ",".concat(type, "(").concat(angle, "deg").concat(colors, ")");
}

function radialGradientStyle(_ref2, colors) {
  var type = _ref2.type,
      shape = _ref2.shape,
      x = _ref2.x,
      y = _ref2.y;
  return ",".concat(type, "(").concat(shape, " at ").concat(x, "% ").concat(y, "%").concat(colors, ")");
}

function conicGradientStyle(_ref3, colors) {
  var type = _ref3.type,
      deg = _ref3.deg,
      cx = _ref3.cx,
      cy = _ref3.cy;
  return ",".concat(type, "(from ").concat(deg, "deg at ").concat(cx, "px ").concat(cy, "px").concat(colors, ")");
}

function hexToRGBA(color, opacity) {
  var r = +parseInt(color.substr(1, 2), 16);
  var g = +parseInt(color.substr(3, 2), 16);
  var b = +parseInt(color.substr(5, 2), 16);
  return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(opacity, ")");
}

function capitalize(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

function toCamelCase(str) {
  if (!str.includes('-')) return;
  var strArr = str.split('-');
  return strArr[0] + capitalize(strArr[1]);
}

function mergeColors(colorsArr) {
  var colorsStr = '';
  colorsArr.forEach(function (c) {
    colorsStr += ', ' + hexToRGBA(c.color, c.opacity) + ' ' + c.degree + '%';
  });
  return colorsStr;
}

var toTwoValue = function toTwoValue(v) {
  return isNaN(+v) ? v + ' ' : v + 'px ';
};

function mergeValues() {
  var result = ',';

  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  values.filter(function (v) {
    return v;
  }).forEach(function (v) {
    return result += toTwoValue(v);
  });
  return result;
}

function getOptionName(str) {
  return str.includes('-') ? str.split('-')[1] : str;
}
},{}],"../src/utils/typesHandler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _functions = require("./functions.js");

var _constants = require("./constants.js");

var _GRADIENT_LINEAR$GRAD;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (_GRADIENT_LINEAR$GRAD = {}, _defineProperty(_GRADIENT_LINEAR$GRAD, _constants.GRADIENT_LINEAR, _functions.linearGradientStyle), _defineProperty(_GRADIENT_LINEAR$GRAD, _constants.GRADIENT_LINEAR_R, _functions.linearGradientStyle), _defineProperty(_GRADIENT_LINEAR$GRAD, _constants.GRADIENT_RADIAL, _functions.radialGradientStyle), _defineProperty(_GRADIENT_LINEAR$GRAD, _constants.GRADIENT_RADIAL_R, _functions.radialGradientStyle), _defineProperty(_GRADIENT_LINEAR$GRAD, _constants.GRADIENT_CONIC, _functions.conicGradientStyle), _defineProperty(_GRADIENT_LINEAR$GRAD, _constants.GRADIENT_CONIC_R, _functions.conicGradientStyle), _GRADIENT_LINEAR$GRAD);

exports.default = _default;
},{"./functions.js":"../src/utils/functions.js","./constants.js":"../src/utils/constants.js"}],"../src/utils/eventHandlers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enter = exports.prevent = void 0;

var prevent = function prevent(e) {
  return e.preventDefault();
};

exports.prevent = prevent;

var enter = function enter(e) {
  return e.keyCode === 13 ? prevent(e) : null;
};

exports.enter = enter;
},{}],"../src/modules/GradientBlock.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ColorBlock = _interopRequireDefault(require("./ColorBlock.js"));

var _config = require("../utils/config.js");

var _templates = _interopRequireDefault(require("./templates/templates.js"));

var _functions = require("../utils/functions.js");

var _typesHandler = _interopRequireDefault(require("../utils/typesHandler.js"));

var _eventHandlers = require("../utils/eventHandlers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GradientBlock = /*#__PURE__*/function () {
  function GradientBlock(root, tool) {
    _classCallCheck(this, GradientBlock);

    this._id = 'con-' + tool.id;
    this.tool = tool;
    this.root = root;
    this.id = -1;
    this.colors = [];
    this.colorsOptions = [];
    this.options = (0, _config.options)();
    this.elements = tool.elements;
    this.isInit = false;
  }

  _createClass(GradientBlock, [{
    key: "init",
    value: function init() {
      this.clearColors();
      this.addColor();
      this.addColor();
      this.addEvents();
      this.renderChildern();
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      if (!this.isInit) {
        this.tool.addEvent([['input', this.inputHandler.bind(this)], ['click', this.clickHandler.bind(this)], ['submit', _eventHandlers.prevent], ['keydown', _eventHandlers.enter]], this.root);
        this.isInit = true;
      }
    }
  }, {
    key: "clearColors",
    value: function clearColors() {
      this.colors = [];
      this.id = -1;
    }
  }, {
    key: "addColor",
    value: function addColor() {
      if (!this.colorsOptions[this.id + 1]) {
        this.colorsOptions.push((0, _config.colorsOptions)());
      }

      this.colors.push(new _ColorBlock.default(++this.id, this.colorsOptions[this.id]));
    }
  }, {
    key: "renderChildern",
    value: function renderChildern() {
      var _this = this;

      this.tool.clearRoot(this.root);
      this.tool.insertHTML((0, _templates.default)(this.options), this.root);
      this.colors.forEach(function (g) {
        return _this.tool.insertHTML(g.render(), _this.root);
      });
    }
  }, {
    key: "renderElements",
    value: function renderElements() {
      this.tool.renderElements(this.getGradient.bind(this), this.getBackgroudOption.bind(this));
    }
  }, {
    key: "removeColor",
    value: function removeColor(id) {
      this.colors = this.colors.filter(function (gr) {
        return gr.id !== id;
      });
    }
  }, {
    key: "removeGradient",
    value: function removeGradient() {
      this.tool.removeGradient(this._id);
    }
  }, {
    key: "getGradient",
    value: function getGradient() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.tool.gradients.forEach(function (g) {
        var type = g.options.type;
        var colors = (0, _functions.mergeColors)(g.colors);
        str += _typesHandler.default[type](g.options, colors);
      });
      return str.slice(1);
    }
  }, {
    key: "getBackgroudOption",
    value: function getBackgroudOption() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var key1 = arguments.length > 1 ? arguments[1] : undefined;
      var key2 = arguments.length > 2 ? arguments[2] : undefined;
      this.tool.gradients.forEach(function (g) {
        var k1 = g.options[key1];
        var k2 = g.options[key2];
        var option = (0, _functions.mergeValues)(k1, k2);
        str += option;
      });
      return str.slice(1);
    }
  }, {
    key: "changeOptions",
    value: function changeOptions(idx, value) {
      var option = (0, _functions.getOptionName)(idx);
      this.options[option] = value;
      if (option === 'type') this.renderChildern();
    }
  }, {
    key: "clickHandler",
    value: function clickHandler(e) {
      var method = (0, _functions.toCamelCase)(e.target.id);
      var id = +e.target.dataset.gradient;
      if (!this[method]) return;
      this[method](id);
      this.renderChildern();
      this.renderElements();
    }
  }, {
    key: "inputHandler",
    value: function inputHandler(e) {
      var _this2 = this;

      var dataset = Object.values(e.target.dataset)[0];
      var value = e.target.value;

      if (e.target.dataset.gradient) {
        var idx = +e.target.dataset.gradient;
        var type = e.target.dataset.color;
        this.colors.forEach(function (col, id) {
          if (col.id === idx) {
            col[type] = value;
            _this2.colorsOptions[id][type] = value;
          }
        });
      }

      if (dataset && !e.target.dataset.gradient) {
        this.changeOptions(dataset, value);
      }

      this.renderElements();
    }
  }]);

  return GradientBlock;
}();

exports.default = GradientBlock;
},{"./ColorBlock.js":"../src/modules/ColorBlock.js","../utils/config.js":"../src/utils/config.js","./templates/templates.js":"../src/modules/templates/templates.js","../utils/functions.js":"../src/utils/functions.js","../utils/typesHandler.js":"../src/utils/typesHandler.js","../utils/eventHandlers.js":"../src/utils/eventHandlers.js"}],"../src/modules/Tool.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GradientBlock = _interopRequireDefault(require("./GradientBlock.js"));

var _config = require("../utils/config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Test = /*#__PURE__*/function () {
  function Test() {
    _classCallCheck(this, Test);

    this.root = document.createElement('div');
    this.id = -1;
    this.gradients = [];
    this.elements = Array.from(document.querySelectorAll(_config.selector));
  }

  _createClass(Test, [{
    key: "init",
    value: function init() {
      this.createRoot();
      this.addGradient();
    }
  }, {
    key: "addGradient",
    value: function addGradient() {
      var root = this.addContainer();
      this.gradients.push(new _GradientBlock.default(root, this));
      this.initGradients();
    }
  }, {
    key: "removeGradient",
    value: function removeGradient(id) {
      this.removeContainer(id);
      this.gradients = this.gradients.filter(function (g) {
        return g._id !== id;
      });
    }
  }, {
    key: "addContainer",
    value: function addContainer() {
      var container = document.createElement('div');
      container.id = 'con-' + ++this.id;
      this.root.append(container);
      return container;
    }
  }, {
    key: "removeContainer",
    value: function removeContainer(id) {
      document.querySelector("#".concat(id)).remove();
    }
  }, {
    key: "initGradients",
    value: function initGradients() {
      this.gradients.forEach(function (gr) {
        return gr.init();
      });
    }
  }, {
    key: "createRoot",
    value: function createRoot() {
      var addGradientBtn = document.createElement('button');
      addGradientBtn.id = 'add-gradient';
      addGradientBtn.textContent = 'Add Gradient';
      this.root.append(addGradientBtn);
      this.addEvent([['click', this.addGradient.bind(this)]], addGradientBtn);
      this.root.id = 'gradienT';
      document.body.append(this.root);
    }
  }, {
    key: "clearRoot",
    value: function clearRoot(root) {
      root.innerHTML = '';
    }
  }, {
    key: "insertHTML",
    value: function insertHTML(html, root) {
      root.insertAdjacentHTML('beforeend', html);
    }
  }, {
    key: "addEvent",
    value: function addEvent(events, root) {
      events.forEach(function (e) {
        return root.addEventListener(e[0], e[1]);
      });
    }
  }, {
    key: "renderElements",
    value: function renderElements(fn, option) {
      console.log(option('', 'bgx', 'bgy'));
      this.elements.forEach(function (el) {
        el.style.backgroundImage = fn();
        el.style.backgroundSize = option('', 'bgw', 'bgh');
        el.style.backgroundPosition = option('', 'bgx', 'bgy');
        el.style.backgroundRepeat = option('', 'repeat');
      });
    }
  }]);

  return Test;
}();

exports.default = Test;
},{"./GradientBlock.js":"../src/modules/GradientBlock.js","../utils/config.js":"../src/utils/config.js"}],"../src/index.js":[function(require,module,exports) {
"use strict";

var _Tool = _interopRequireDefault(require("./modules/Tool.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _Tool.default().init();
},{"./modules/Tool.js":"../src/modules/Tool.js"}],"../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "5821" + '/');

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
},{}]},{},["../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../src/index.js"], null)
//# sourceMappingURL=/src.7ed060e2.js.map