parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"jXna":[function(require,module,exports) {
"use strict";function e(e){return document.querySelector(e)}function t(e){e&&e.stopPropagation()}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.entries(e).map(function(e){return e.join(": ")}).join(";")}function n(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})}function o(e){var t=e.firstElementChild.dataset;Object.entries(t).forEach(function(t){return e.setAttribute("data-"+n(t[0]),t[1])})}function u(e,t){var r=document.createElement(e);return r.insertAdjacentHTML("beforeend",t),o(r),r}Object.defineProperty(exports,"__esModule",{value:!0}),exports.$=e,exports.stopPropagation=t,exports.objectToCSS=r,exports.wrapper=u;
},{}],"MQ6H":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.HintBlock=void 0;var t=require("../../utils/functions.js");function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var s=function(){function n(e){var o=this;i(this,n),r(this,"show",function(e){(0,t.stopPropagation)(e),o.isVisible||(o.root.append(o.hint),o.isVisible=!0,++o.count,o.addTrigger(o.hideOption,"hide"))}),r(this,"hide",function(e){(0,t.stopPropagation)(e),o.hint.remove(),o.isVisible=!1,o.hideEvent&&o.hideEvent(),o.showEvent&&o.count>=o.limit&&o.showEvent()}),this.root=e.root,this.hideOption=e.hide,this.showOption=e.show,this.hint=e.hint,this.limit=e.count||1/0,this.count=0,this.isVisible=!1,this.hideEvent=null,this.showEvent=null}return o(n,[{key:"addTrigger",value:function(t,i){if("number"==typeof(t=isNaN(+t)?t:+t)&&this.actionByTime(this[i],t),"string"==typeof t){var n=t.split(":")[0],o=t.split(":")[1];this.addEvent(n,o,this[i],i)}"object"===e(t)&&this.addEvent(t[0],t[1],this[i],i)}},{key:"actionByTime",value:function(t,e){setTimeout(t,e)}},{key:"addEvent",value:function(t,e,i,n){var o=document.querySelector(e);this["".concat(n,"Event")]=function(){return o.removeEventListener(t,i)},o.addEventListener(t,i)}}]),n}();exports.HintBlock=s;
},{"../../utils/functions.js":"jXna"}],"dmQP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("./HintBlocks.js"),e=require("../../utils/functions.js");function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=a();return function(){var n,o=y(t);if(e){var r=y(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(n){c(u,t.HintBlock);var r=f(u);function u(t){var n;return o(this,u),(n=r.call(this,{root:(0,e.$)(t.root)||document.body,count:t.count,show:t.show,hide:t.hide})).text=t.text,n.styles=t.styles,n.init(),n}return i(u,[{key:"init",value:function(){this.createHintBlock(),this.addTrigger(this.showOption,"show")}},{key:"createHintBlock",value:function(){this.hint=document.createElement("div"),this.hint.textContent=this.text,this.hint.className="hinter_hint_block",this.hint.setAttribute("style",(0,e.objectToCSS)(this.styles))}}]),u}();exports.default=p;
},{"./HintBlocks.js":"MQ6H","../../utils/functions.js":"jXna"}],"ckcg":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("./HintBlocks.js"),e=require("../../utils/functions.js");function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=l();return function(){var n,r=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}function a(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(n){u(c,t.HintBlock);var o=f(c);function c(t){var n;return r(this,c),(n=o.call(this,{root:(0,e.$)(t.dataset.hinterRoot)||t.parentElement||document.body,count:t.dataset.hinterCount,hide:t.dataset.hinterHide,show:t.dataset.hinterShow,hint:t})).init(),n}return i(c,[{key:"init",value:function(){this.hint.remove(),this.addTrigger(this.showOption,"show")}}]),c}();exports.default=y;
},{"./HintBlocks.js":"MQ6H","../../utils/functions.js":"jXna"}],"qH3a":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.hintBlock=u;var e=n(require("../modules/classes/DefaultHint.js")),t=n(require("../modules/classes/ElementHint.js")),o=require("./functions.js");function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(n){return"string"==typeof n?new t.default((0,o.wrapper)("div",n)):"object"===r(n)&&n.tagName?new t.default(n):"object"===r(n)?new e.default(n):void 0}
},{"../modules/classes/DefaultHint.js":"dmQP","../modules/classes/ElementHint.js":"ckcg","./functions.js":"jXna"}],"lcMI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../utils/selectHintBlock.js");function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}var r=function(){function n(e){t(this,n),this.hints=e,this.init()}return i(n,[{key:"init",value:function(){this.hints.map(e.hintBlock)}}]),n}();exports.default=r;
},{"../utils/selectHintBlock.js":"qH3a"}],"YBr1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.hints=void 0;var t=[{count:1,show:["click","body"],hide:["click","body"],text:"Move cursor to right border to show open settings button",styles:{height:"auto",width:"auto",top:"20px",right:"20px"}},{show:1e3,hide:["click","body"],text:"Click on gradient block to close settings",styles:{height:"auto",width:"auto",top:"20px",left:"20px"}},{show:1e3,hide:["click","body"],text:"Click anywhere to close hints",styles:{height:"auto",width:"auto",top:"60px",left:"20px"}}];exports.hints=t;
},{}],"w4bE":[function(require,module,exports) {
"use strict";var e=r(require("./modules/Tool.js")),u=require("./utils/config.js");function r(e){return e&&e.__esModule?e:{default:e}}new e.default(u.hints);
},{"./modules/Tool.js":"lcMI","./utils/config.js":"YBr1"}]},{},["w4bE"], null)