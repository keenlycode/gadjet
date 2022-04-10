// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dQugL":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "623905a5a9bbc37c";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"5kVIp":[function(require,module,exports) {
var _ui = require("gadjet/src/ui/ui");
var _progressBar = require("gadjet/src/ui/progress/progress-bar");
var _progressCircle = require("gadjet/src/ui/progress/progress-circle");
_ui.define('el-progress-bar', _progressBar.ProgressBar);
_ui.define('el-progress-circle', _progressCircle.ProgressCircle);

},{"gadjet/src/ui/ui":"jSLlu","gadjet/src/ui/progress/progress-bar":"iuYTP","gadjet/src/ui/progress/progress-circle":"5912A"}],"jSLlu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "define", ()=>define
);
parcelHelpers.export(exports, "StyleClass", ()=>StyleClass
);
parcelHelpers.export(exports, "StyledElement", ()=>StyledElement
);
var _css = require("@emotion/css");
const define = (tagName, Class = StyledElement)=>{
    // Order of this function belows are very crucial.
    // Class state must be defined before `customElements.define`
    Class.tagName = tagName;
    Class.onDefine(tagName);
    Class.initStyle();
};
class StyleClass {
    static css(style = {
    }) {
        return '';
    }
    static style(style = {
    }) {
        return '';
    }
}
class StyledElement extends HTMLElement {
    static onDefine(tagName) {
        // To extends this function, sub-elements must be defined before call
        // this function as `super.onDefine(tagName);`
        customElements.define(tagName, this);
    }
    static initStyle(style) {
        _css.injectGlobal`
        ${this.tagName} {
            ${this.Style.css(style)}
        }`;
    }
    static tagStyle(style) {
        if (typeof style == "string") {
            _css.injectGlobal`
            ${this.tagName} {
                ${style}
            }`;
            return;
        }
        _css.injectGlobal`
        ${this.tagName} {
            ${this.Style.style(style)}
        }`;
    }
    static classStyle(class_, style) {
        if (typeof style == "string") {
            _css.injectGlobal`
            ${this.tagName}.${class_} {
                ${style}
            }`;
            return;
        }
        _css.injectGlobal`
        ${this.tagName}.${class_} {
            ${this.Style.style(style)}
        }`;
    }
    constructor(){
        super();
        this._class = this.constructor;
    }
    addStyle(style) {
        let className;
        if (typeof style == 'string') className = _css.css`${style}`;
        else if (style instanceof Object) className = _css.css`${this._class.Style.style(style)}`;
        className = _css.cx(...this.classList, className);
        this.className = className;
    }
}
StyledElement.Style = StyleClass;

},{"@emotion/css":"gyRZs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gyRZs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cache", ()=>cache
);
parcelHelpers.export(exports, "css", ()=>css
);
parcelHelpers.export(exports, "cx", ()=>cx
);
parcelHelpers.export(exports, "flush", ()=>flush
);
parcelHelpers.export(exports, "getRegisteredStyles", ()=>getRegisteredStyles
);
parcelHelpers.export(exports, "hydrate", ()=>hydrate
);
parcelHelpers.export(exports, "injectGlobal", ()=>injectGlobal
);
parcelHelpers.export(exports, "keyframes", ()=>keyframes
);
parcelHelpers.export(exports, "merge", ()=>merge
);
parcelHelpers.export(exports, "sheet", ()=>sheet
);
var _cache = require("@emotion/cache");
var _serialize = require("@emotion/serialize");
var _utils = require("@emotion/utils");
var _emotionCssCreateInstanceEsmJs = require("../create-instance/dist/emotion-css-create-instance.esm.js");
var _emotionCssCreateInstanceEsmJsDefault = parcelHelpers.interopDefault(_emotionCssCreateInstanceEsmJs);
var _createEmotion = _emotionCssCreateInstanceEsmJsDefault.default({
    key: 'css'
}), flush = _createEmotion.flush, hydrate = _createEmotion.hydrate, cx = _createEmotion.cx, merge = _createEmotion.merge, getRegisteredStyles = _createEmotion.getRegisteredStyles, injectGlobal = _createEmotion.injectGlobal, keyframes = _createEmotion.keyframes, css = _createEmotion.css, sheet = _createEmotion.sheet, cache = _createEmotion.cache;

},{"@emotion/cache":"3Umtj","@emotion/serialize":"kS2E2","@emotion/utils":"6UI8e","../create-instance/dist/emotion-css-create-instance.esm.js":"k89zX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Umtj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _sheet = require("@emotion/sheet");
var _stylis = require("stylis");
var _weakMemoize = require("@emotion/weak-memoize");
var _memoize = require("@emotion/memoize");
var last = function last(arr) {
    return arr.length ? arr[arr.length - 1] : null;
}; // based on https://github.com/thysultan/stylis.js/blob/e6843c373ebcbbfade25ebcc23f540ed8508da0a/src/Tokenizer.js#L239-L244
var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
    var previous = 0;
    var character = 0;
    while(true){
        previous = character;
        character = _stylis.peek(); // &\f
        if (previous === 38 && character === 12) points[index] = 1;
        if (_stylis.token(character)) break;
        _stylis.next();
    }
    return _stylis.slice(begin, _stylis.position);
};
var toRules = function toRules(parsed, points) {
    // pretend we've started with a comma
    var index = -1;
    var character = 44;
    do switch(_stylis.token(character)){
        case 0:
            // &\f
            if (character === 38 && _stylis.peek() === 12) // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
            // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
            // and when it should just concatenate the outer and inner selectors
            // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
            points[index] = 1;
            parsed[index] += identifierWithPointTracking(_stylis.position - 1, points, index);
            break;
        case 2:
            parsed[index] += _stylis.delimit(character);
            break;
        case 4:
            // comma
            if (character === 44) {
                // colon
                parsed[++index] = _stylis.peek() === 58 ? '&\f' : '';
                points[index] = parsed[index].length;
                break;
            }
        // fallthrough
        default:
            parsed[index] += _stylis.from(character);
    }
    while (character = _stylis.next())
    return parsed;
};
var getRules = function getRules(value, points) {
    return _stylis.dealloc(toRules(_stylis.alloc(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11
var fixedElements = /* #__PURE__ */ new WeakMap();
var compat = function compat(element) {
    if (element.type !== 'rule' || !element.parent || // negative .length indicates that this rule has been already prefixed
    element.length < 1) return;
    var value = element.value, parent = element.parent;
    var isImplicitRule = element.column === parent.column && element.line === parent.line;
    while(parent.type !== 'rule'){
        parent = parent.parent;
        if (!parent) return;
    } // short-circuit for the simplest case
    if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) return;
     // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
    // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"
    if (isImplicitRule) return;
    fixedElements.set(element, true);
    var points = [];
    var rules = getRules(value, points);
    var parentRules = parent.props;
    for(var i = 0, k = 0; i < rules.length; i++)for(var j = 0; j < parentRules.length; j++, k++)element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
};
var removeLabel = function removeLabel(element) {
    if (element.type === 'decl') {
        var value = element.value;
        if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
            // this ignores label
            element["return"] = '';
            element.value = '';
        }
    }
};
var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
var isIgnoringComment = function isIgnoringComment(element) {
    return !!element && element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};
var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
    return function(element, index, children) {
        if (element.type !== 'rule') return;
        var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);
        if (unsafePseudoClasses && cache.compat !== true) {
            var prevElement = index > 0 ? children[index - 1] : null;
            if (prevElement && isIgnoringComment(last(prevElement.children))) return;
            unsafePseudoClasses.forEach(function(unsafePseudoClass) {
                console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
            });
        }
    };
};
var isImportRule = function isImportRule(element) {
    return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};
var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
    for(var i = index - 1; i >= 0; i--){
        if (!isImportRule(children[i])) return true;
    }
    return false;
}; // use this to remove incorrect elements from further processing
// so they don't get handed to the `sheet` (or anything else)
// as that could potentially lead to additional logs which in turn could be overhelming to the user
var nullifyElement = function nullifyElement(element) {
    element.type = '';
    element.value = '';
    element["return"] = '';
    element.children = '';
    element.props = '';
};
var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
    if (!isImportRule(element)) return;
    if (element.parent) {
        console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
        nullifyElement(element);
    } else if (isPrependedWithRegularRules(index, children)) {
        console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
        nullifyElement(element);
    }
};
var defaultStylisPlugins = [
    _stylis.prefixer
];
var createCache = function createCache(options) {
    var key = options.key;
    if (!key) throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\nIf multiple caches share the same key they might \"fight\" for each other's style elements.");
    if (key === 'css') {
        var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
        // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
        // note this very very intentionally targets all style elements regardless of the key to ensure
        // that creating a cache works inside of render of a React component
        Array.prototype.forEach.call(ssrStyles, function(node) {
            // we want to only move elements which have a space in the data-emotion attribute value
            // because that indicates that it is an Emotion 11 server-side rendered style elements
            // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
            // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
            // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
            // will not result in the Emotion 10 styles being destroyed
            var dataEmotionAttribute = node.getAttribute('data-emotion');
            if (dataEmotionAttribute.indexOf(' ') === -1) return;
            document.head.appendChild(node);
            node.setAttribute('data-s', '');
        });
    }
    var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    var inserted = {
    }; // $FlowFixMe
    var container;
    var nodesToHydrate = [];
    container = options.container || document.head;
    Array.prototype.forEach.call(// means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function(node) {
        var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe
        for(var i = 1; i < attrib.length; i++)inserted[attrib[i]] = true;
        nodesToHydrate.push(node);
    });
    var _insert;
    var omnipresentPlugins = [
        compat,
        removeLabel
    ];
    omnipresentPlugins.push(createUnsafeSelectorsAlarm({
        get compat () {
            return cache.compat;
        }
    }), incorrectImportAlarm);
    var currentSheet;
    var finalizingPlugins = [
        _stylis.stringify,
        function(element) {
            if (!element.root) {
                if (element["return"]) currentSheet.insert(element["return"]);
                else if (element.value && element.type !== _stylis.COMMENT) // insert empty rule in non-production environments
                // so @emotion/jest can grab `key` from the (JS)DOM for caches without any rules inserted yet
                currentSheet.insert(element.value + "{}");
            }
        }
    ];
    var serializer = _stylis.middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis(styles) {
        return _stylis.serialize(_stylis.compile(styles), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
        currentSheet = sheet;
        if (serialized.map !== undefined) currentSheet = {
            insert: function insert(rule) {
                sheet.insert(rule + serialized.map);
            }
        };
        stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
        if (shouldCache) cache.inserted[serialized.name] = true;
    };
    var cache = {
        key: key,
        sheet: new _sheet.StyleSheet({
            key: key,
            container: container,
            nonce: options.nonce,
            speedy: options.speedy,
            prepend: options.prepend,
            insertionPoint: options.insertionPoint
        }),
        nonce: options.nonce,
        inserted: inserted,
        registered: {
        },
        insert: _insert
    };
    cache.sheet.hydrate(nodesToHydrate);
    return cache;
};
exports.default = createCache;

},{"@emotion/sheet":"1BWeq","stylis":"bMCXt","@emotion/weak-memoize":"iicyL","@emotion/memoize":"WW7h8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1BWeq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StyleSheet", ()=>StyleSheet
);
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/ // $FlowFixMe
function sheetForTag(tag) {
    if (tag.sheet) // $FlowFixMe
    return tag.sheet;
     // this weirdness brought to you by firefox
    /* istanbul ignore next */ for(var i = 0; i < document.styleSheets.length; i++){
        if (document.styleSheets[i].ownerNode === tag) // $FlowFixMe
        return document.styleSheets[i];
    }
}
function createStyleElement(options) {
    var tag = document.createElement('style');
    tag.setAttribute('data-emotion', options.key);
    if (options.nonce !== undefined) tag.setAttribute('nonce', options.nonce);
    tag.appendChild(document.createTextNode(''));
    tag.setAttribute('data-s', '');
    return tag;
}
var StyleSheet = /*#__PURE__*/ function() {
    function StyleSheet1(options) {
        var _this = this;
        this._insertTag = function(tag) {
            var before;
            if (_this.tags.length === 0) {
                if (_this.insertionPoint) before = _this.insertionPoint.nextSibling;
                else if (_this.prepend) before = _this.container.firstChild;
                else before = _this.before;
            } else before = _this.tags[_this.tags.length - 1].nextSibling;
            _this.container.insertBefore(tag, before);
            _this.tags.push(tag);
        };
        this.isSpeedy = options.speedy === undefined ? false : options.speedy;
        this.tags = [];
        this.ctr = 0;
        this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets
        this.key = options.key;
        this.container = options.container;
        this.prepend = options.prepend;
        this.insertionPoint = options.insertionPoint;
        this.before = null;
    }
    var _proto = StyleSheet1.prototype;
    _proto.hydrate = function hydrate(nodes) {
        nodes.forEach(this._insertTag);
    };
    _proto.insert = function insert(rule) {
        // the max length is how many rules we have per style tag, it's 65000 in speedy mode
        // it's 1 in dev because we insert source maps that map a single rule to a location
        // and you can only have one source map per style tag
        if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) this._insertTag(createStyleElement(this));
        var tag = this.tags[this.tags.length - 1];
        var isImportRule = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;
        if (isImportRule && this._alreadyInsertedOrderInsensitiveRule) // this would only cause problem in speedy mode
        // but we don't want enabling speedy to affect the observable behavior
        // so we report this error at all times
        console.error("You're attempting to insert the following rule:\n" + rule + '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.');
        this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule;
        if (this.isSpeedy) {
            var sheet = sheetForTag(tag);
            try {
                // this is the ultrafast version, works across browsers
                // the big drawback is that the css won't be editable in devtools
                sheet.insertRule(rule, sheet.cssRules.length);
            } catch (e) {
                if (!/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear){/.test(rule)) console.error("There was a problem inserting the following rule: \"" + rule + "\"", e);
            }
        } else tag.appendChild(document.createTextNode(rule));
        this.ctr++;
    };
    _proto.flush = function flush() {
        // $FlowFixMe
        this.tags.forEach(function(tag) {
            return tag.parentNode && tag.parentNode.removeChild(tag);
        });
        this.tags = [];
        this.ctr = 0;
        this._alreadyInsertedOrderInsensitiveRule = false;
    };
    return StyleSheet1;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bMCXt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CHARSET", ()=>f
);
parcelHelpers.export(exports, "COMMENT", ()=>c
);
parcelHelpers.export(exports, "COUNTER_STYLE", ()=>w
);
parcelHelpers.export(exports, "DECLARATION", ()=>t
);
parcelHelpers.export(exports, "DOCUMENT", ()=>v
);
parcelHelpers.export(exports, "FONT_FACE", ()=>b
);
parcelHelpers.export(exports, "FONT_FEATURE_VALUES", ()=>$
);
parcelHelpers.export(exports, "IMPORT", ()=>i
);
parcelHelpers.export(exports, "KEYFRAMES", ()=>p
);
parcelHelpers.export(exports, "MEDIA", ()=>u
);
parcelHelpers.export(exports, "MOZ", ()=>r
);
parcelHelpers.export(exports, "MS", ()=>e
);
parcelHelpers.export(exports, "NAMESPACE", ()=>h
);
parcelHelpers.export(exports, "PAGE", ()=>s
);
parcelHelpers.export(exports, "RULESET", ()=>n
);
parcelHelpers.export(exports, "SUPPORTS", ()=>l
);
parcelHelpers.export(exports, "VIEWPORT", ()=>o
);
parcelHelpers.export(exports, "WEBKIT", ()=>a
);
parcelHelpers.export(exports, "abs", ()=>k
);
parcelHelpers.export(exports, "alloc", ()=>U
);
parcelHelpers.export(exports, "append", ()=>S
);
parcelHelpers.export(exports, "assign", ()=>g
);
parcelHelpers.export(exports, "caret", ()=>Q
);
parcelHelpers.export(exports, "char", ()=>K
);
parcelHelpers.export(exports, "character", ()=>G
);
parcelHelpers.export(exports, "characters", ()=>H
);
parcelHelpers.export(exports, "charat", ()=>z
);
parcelHelpers.export(exports, "column", ()=>D
);
parcelHelpers.export(exports, "combine", ()=>q
);
parcelHelpers.export(exports, "comment", ()=>se
);
parcelHelpers.export(exports, "commenter", ()=>re
);
parcelHelpers.export(exports, "compile", ()=>ce
);
parcelHelpers.export(exports, "copy", ()=>J
);
parcelHelpers.export(exports, "dealloc", ()=>V
);
parcelHelpers.export(exports, "declaration", ()=>ue
);
parcelHelpers.export(exports, "delimit", ()=>W
);
parcelHelpers.export(exports, "delimiter", ()=>ee
);
parcelHelpers.export(exports, "escaping", ()=>_
);
parcelHelpers.export(exports, "from", ()=>d
);
parcelHelpers.export(exports, "hash", ()=>m
);
parcelHelpers.export(exports, "identifier", ()=>ae
);
parcelHelpers.export(exports, "indexof", ()=>C
);
parcelHelpers.export(exports, "length", ()=>E
);
parcelHelpers.export(exports, "line", ()=>B
);
parcelHelpers.export(exports, "match", ()=>y
);
parcelHelpers.export(exports, "middleware", ()=>le
);
parcelHelpers.export(exports, "namespace", ()=>pe
);
parcelHelpers.export(exports, "next", ()=>N
);
parcelHelpers.export(exports, "node", ()=>I
);
parcelHelpers.export(exports, "parse", ()=>ne
);
parcelHelpers.export(exports, "peek", ()=>P
);
parcelHelpers.export(exports, "position", ()=>F
);
parcelHelpers.export(exports, "prefix", ()=>ie
);
parcelHelpers.export(exports, "prefixer", ()=>he
);
parcelHelpers.export(exports, "prev", ()=>L
);
parcelHelpers.export(exports, "replace", ()=>j
);
parcelHelpers.export(exports, "ruleset", ()=>te
);
parcelHelpers.export(exports, "rulesheet", ()=>ve
);
parcelHelpers.export(exports, "serialize", ()=>fe
);
parcelHelpers.export(exports, "sizeof", ()=>M
);
parcelHelpers.export(exports, "slice", ()=>R
);
parcelHelpers.export(exports, "stringify", ()=>oe
);
parcelHelpers.export(exports, "strlen", ()=>O
);
parcelHelpers.export(exports, "substr", ()=>A
);
parcelHelpers.export(exports, "token", ()=>T
);
parcelHelpers.export(exports, "tokenize", ()=>X
);
parcelHelpers.export(exports, "tokenizer", ()=>Z
);
parcelHelpers.export(exports, "trim", ()=>x
);
parcelHelpers.export(exports, "whitespace", ()=>Y
);
var e = "-ms-";
var r = "-moz-";
var a = "-webkit-";
var c = "comm";
var n = "rule";
var t = "decl";
var s = "@page";
var u = "@media";
var i = "@import";
var f = "@charset";
var o = "@viewport";
var l = "@supports";
var v = "@document";
var h = "@namespace";
var p = "@keyframes";
var b = "@font-face";
var w = "@counter-style";
var $ = "@font-feature-values";
var k = Math.abs;
var d = String.fromCharCode;
var g = Object.assign;
function m(e1, r1) {
    return (((r1 << 2 ^ z(e1, 0)) << 2 ^ z(e1, 1)) << 2 ^ z(e1, 2)) << 2 ^ z(e1, 3);
}
function x(e2) {
    return e2.trim();
}
function y(e3, r2) {
    return (e3 = r2.exec(e3)) ? e3[0] : e3;
}
function j(e4, r3, a1) {
    return e4.replace(r3, a1);
}
function C(e5, r4) {
    return e5.indexOf(r4);
}
function z(e6, r5) {
    return e6.charCodeAt(r5) | 0;
}
function A(e7, r6, a2) {
    return e7.slice(r6, a2);
}
function O(e8) {
    return e8.length;
}
function M(e9) {
    return e9.length;
}
function S(e10, r7) {
    return r7.push(e10), e10;
}
function q(e11, r8) {
    return e11.map(r8).join("");
}
var B = 1;
var D = 1;
var E = 0;
var F = 0;
var G = 0;
var H = "";
function I(e12, r9, a3, c1, n1, t1, s1) {
    return {
        value: e12,
        root: r9,
        parent: a3,
        type: c1,
        props: n1,
        children: t1,
        line: B,
        column: D,
        length: s1,
        return: ""
    };
}
function J(e13, r10) {
    return g(I("", null, null, "", null, null, 0), e13, {
        length: -e13.length
    }, r10);
}
function K() {
    return G;
}
function L() {
    G = F > 0 ? z(H, --F) : 0;
    if (D--, G === 10) D = 1, B--;
    return G;
}
function N() {
    G = F < E ? z(H, F++) : 0;
    if (D++, G === 10) D = 1, B++;
    return G;
}
function P() {
    return z(H, F);
}
function Q() {
    return F;
}
function R(e14, r11) {
    return A(H, e14, r11);
}
function T(e15) {
    switch(e15){
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
            return 4;
        case 58:
            return 3;
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        case 41:
        case 93:
            return 1;
    }
    return 0;
}
function U(e16) {
    return B = D = 1, E = O(H = e16), F = 0, [];
}
function V(e17) {
    return H = "", e17;
}
function W(e18) {
    return x(R(F - 1, ee(e18 === 91 ? e18 + 2 : e18 === 40 ? e18 + 1 : e18)));
}
function X(e19) {
    return V(Z(U(e19)));
}
function Y(e20) {
    while(G = P())if (G < 33) N();
    else break;
    return T(e20) > 2 || T(G) > 3 ? "" : " ";
}
function Z(e21) {
    while(N())switch(T(G)){
        case 0:
            S(ae(F - 1), e21);
            break;
        case 2:
            S(W(G), e21);
            break;
        default:
            S(d(G), e21);
    }
    return e21;
}
function _(e22, r12) {
    while(--r12 && N())if (G < 48 || G > 102 || G > 57 && G < 65 || G > 70 && G < 97) break;
    return R(e22, Q() + (r12 < 6 && P() == 32 && N() == 32));
}
function ee(e23) {
    while(N())switch(G){
        case e23:
            return F;
        case 34:
        case 39:
            if (e23 !== 34 && e23 !== 39) ee(G);
            break;
        case 40:
            if (e23 === 41) ee(e23);
            break;
        case 92:
            N();
            break;
    }
    return F;
}
function re(e24, r13) {
    while(N())if (e24 + G === 57) break;
    else if (e24 + G === 84 && P() === 47) break;
    return "/*" + R(r13, F - 1) + "*" + d(e24 === 47 ? e24 : N());
}
function ae(e25) {
    while(!T(P()))N();
    return R(e25, F);
}
function ce(e26) {
    return V(ne("", null, null, null, [
        ""
    ], e26 = U(e26), 0, [
        0
    ], e26));
}
function ne(e27, r14, a4, c2, n2, t2, s2, u1, i1) {
    var f1 = 0;
    var o1 = 0;
    var l1 = s2;
    var v1 = 0;
    var h1 = 0;
    var p1 = 0;
    var b1 = 1;
    var w1 = 1;
    var $1 = 1;
    var k1 = 0;
    var g1 = "";
    var m1 = n2;
    var x1 = t2;
    var y1 = c2;
    var z1 = g1;
    while(w1)switch(p1 = k1, k1 = N()){
        case 40:
            if (p1 != 108 && z1.charCodeAt(l1 - 1) == 58) {
                if (C(z1 += j(W(k1), "&", "&\f"), "&\f") != -1) $1 = -1;
                break;
            }
        case 34:
        case 39:
        case 91:
            z1 += W(k1);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            z1 += Y(p1);
            break;
        case 92:
            z1 += _(Q() - 1, 7);
            continue;
        case 47:
            switch(P()){
                case 42:
                case 47:
                    S(se(re(N(), Q()), r14, a4), i1);
                    break;
                default:
                    z1 += "/";
            }
            break;
        case 123 * b1:
            u1[f1++] = O(z1) * $1;
        case 125 * b1:
        case 59:
        case 0:
            switch(k1){
                case 0:
                case 125:
                    w1 = 0;
                case 59 + o1:
                    if (h1 > 0 && O(z1) - l1) S(h1 > 32 ? ue(z1 + ";", c2, a4, l1 - 1) : ue(j(z1, " ", "") + ";", c2, a4, l1 - 2), i1);
                    break;
                case 59:
                    z1 += ";";
                default:
                    S(y1 = te(z1, r14, a4, f1, o1, n2, u1, g1, m1 = [], x1 = [], l1), t2);
                    if (k1 === 123) {
                        if (o1 === 0) ne(z1, r14, y1, y1, m1, t2, l1, u1, x1);
                        else switch(v1){
                            case 100:
                            case 109:
                            case 115:
                                ne(e27, y1, y1, c2 && S(te(e27, y1, y1, 0, 0, n2, u1, g1, n2, m1 = [], l1), x1), n2, x1, l1, u1, c2 ? m1 : x1);
                                break;
                            default:
                                ne(z1, y1, y1, y1, [
                                    ""
                                ], x1, 0, u1, x1);
                        }
                    }
            }
            f1 = o1 = h1 = 0, b1 = $1 = 1, g1 = z1 = "", l1 = s2;
            break;
        case 58:
            l1 = 1 + O(z1), h1 = p1;
        default:
            if (b1 < 1) {
                if (k1 == 123) --b1;
                else if (k1 == 125 && (b1++) == 0 && L() == 125) continue;
            }
            switch(z1 += d(k1), k1 * b1){
                case 38:
                    $1 = o1 > 0 ? 1 : (z1 += "\f", -1);
                    break;
                case 44:
                    u1[f1++] = (O(z1) - 1) * $1, $1 = 1;
                    break;
                case 64:
                    if (P() === 45) z1 += W(N());
                    v1 = P(), o1 = l1 = O(g1 = z1 += ae(Q())), k1++;
                    break;
                case 45:
                    if (p1 === 45 && O(z1) == 2) b1 = 0;
            }
    }
    return t2;
}
function te(e28, r15, a5, c3, t3, s3, u2, i2, f2, o2, l2) {
    var v2 = t3 - 1;
    var h2 = t3 === 0 ? s3 : [
        ""
    ];
    var p2 = M(h2);
    for(var b2 = 0, w2 = 0, $ = 0; b2 < c3; ++b2)for(var d1 = 0, g2 = A(e28, v2 + 1, v2 = k(w2 = u2[b2])), m2 = e28; d1 < p2; ++d1)if (m2 = x(w2 > 0 ? h2[d1] + " " + g2 : j(g2, /&\f/g, h2[d1]))) f2[$++] = m2;
    return I(e28, r15, a5, t3 === 0 ? n : i2, f2, o2, l2);
}
function se(e29, r16, a6) {
    return I(e29, r16, a6, c, d(K()), A(e29, 2, -2), 0);
}
function ue(e30, r17, a7, c4) {
    return I(e30, r17, a7, t, A(e30, 0, c4), A(e30, c4 + 1, -1), c4);
}
function ie(c5, n3) {
    switch(m(c5, n3)){
        case 5103:
            return a + "print-" + c5 + c5;
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
            return a + c5 + c5;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return a + c5 + r + c5 + e + c5 + c5;
        case 6828:
        case 4268:
            return a + c5 + e + c5 + c5;
        case 6165:
            return a + c5 + e + "flex-" + c5 + c5;
        case 5187:
            return a + c5 + j(c5, /(\w+).+(:[^]+)/, a + "box-$1$2" + e + "flex-$1$2") + c5;
        case 5443:
            return a + c5 + e + "flex-item-" + j(c5, /flex-|-self/, "") + c5;
        case 4675:
            return a + c5 + e + "flex-line-pack" + j(c5, /align-content|flex-|-self/, "") + c5;
        case 5548:
            return a + c5 + e + j(c5, "shrink", "negative") + c5;
        case 5292:
            return a + c5 + e + j(c5, "basis", "preferred-size") + c5;
        case 6060:
            return a + "box-" + j(c5, "-grow", "") + a + c5 + e + j(c5, "grow", "positive") + c5;
        case 4554:
            return a + j(c5, /([^-])(transform)/g, "$1" + a + "$2") + c5;
        case 6187:
            return j(j(j(c5, /(zoom-|grab)/, a + "$1"), /(image-set)/, a + "$1"), c5, "") + c5;
        case 5495:
        case 3959:
            return j(c5, /(image-set\([^]*)/, a + "$1" + "$`$1");
        case 4968:
            return j(j(c5, /(.+:)(flex-)?(.*)/, a + "box-pack:$3" + e + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + a + c5 + c5;
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return j(c5, /(.+)-inline(.+)/, a + "$1$2") + c5;
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            if (O(c5) - 1 - n3 > 6) switch(z(c5, n3 + 1)){
                case 109:
                    if (z(c5, n3 + 4) !== 45) break;
                case 102:
                    return j(c5, /(.+:)(.+)-([^]+)/, "$1" + a + "$2-$3" + "$1" + r + (z(c5, n3 + 3) == 108 ? "$3" : "$2-$3")) + c5;
                case 115:
                    return ~C(c5, "stretch") ? ie(j(c5, "stretch", "fill-available"), n3) + c5 : c5;
            }
            break;
        case 4949:
            if (z(c5, n3 + 1) !== 115) break;
        case 6444:
            switch(z(c5, O(c5) - 3 - (~C(c5, "!important") && 10))){
                case 107:
                    return j(c5, ":", ":" + a) + c5;
                case 101:
                    return j(c5, /(.+:)([^;!]+)(;|!.+)?/, "$1" + a + (z(c5, 14) === 45 ? "inline-" : "") + "box$3" + "$1" + a + "$2$3" + "$1" + e + "$2box$3") + c5;
            }
            break;
        case 5936:
            switch(z(c5, n3 + 11)){
                case 114:
                    return a + c5 + e + j(c5, /[svh]\w+-[tblr]{2}/, "tb") + c5;
                case 108:
                    return a + c5 + e + j(c5, /[svh]\w+-[tblr]{2}/, "tb-rl") + c5;
                case 45:
                    return a + c5 + e + j(c5, /[svh]\w+-[tblr]{2}/, "lr") + c5;
            }
            return a + c5 + e + c5 + c5;
    }
    return c5;
}
function fe(e31, r18) {
    var a8 = "";
    var c6 = M(e31);
    for(var n4 = 0; n4 < c6; n4++)a8 += r18(e31[n4], n4, e31, r18) || "";
    return a8;
}
function oe(e32, r, a9, s4) {
    switch(e32.type){
        case i:
        case t:
            return e32.return = e32.return || e32.value;
        case c:
            return "";
        case p:
            return e32.return = e32.value + "{" + fe(e32.children, s4) + "}";
        case n:
            e32.value = e32.props.join(",");
    }
    return O(a9 = fe(e32.children, s4)) ? e32.return = e32.value + "{" + a9 + "}" : "";
}
function le(e33) {
    var r19 = M(e33);
    return function(a10, c7, n5, t4) {
        var s5 = "";
        for(var u3 = 0; u3 < r19; u3++)s5 += e33[u3](a10, c7, n5, t4) || "";
        return s5;
    };
}
function ve(e34) {
    return function(r20) {
        if (!r20.root) {
            if (r20 = r20.return) e34(r20);
        }
    };
}
function he(c8, s, u, i3) {
    if (c8.length > -1) {
        if (!c8.return) switch(c8.type){
            case t:
                c8.return = ie(c8.value, c8.length);
                break;
            case p:
                return fe([
                    J(c8, {
                        value: j(c8.value, "@", "@" + a)
                    })
                ], i3);
            case n:
                if (c8.length) return q(c8.props, function(n6) {
                    switch(y(n6, /(::plac\w+|:read-\w+)/)){
                        case ":read-only":
                        case ":read-write":
                            return fe([
                                J(c8, {
                                    props: [
                                        j(n6, /:(read-\w+)/, ":" + r + "$1")
                                    ]
                                })
                            ], i3);
                        case "::placeholder":
                            return fe([
                                J(c8, {
                                    props: [
                                        j(n6, /:(plac\w+)/, ":" + a + "input-$1")
                                    ]
                                }),
                                J(c8, {
                                    props: [
                                        j(n6, /:(plac\w+)/, ":" + r + "$1")
                                    ]
                                }),
                                J(c8, {
                                    props: [
                                        j(n6, /:(plac\w+)/, e + "input-$1")
                                    ]
                                })
                            ], i3);
                    }
                    return "";
                });
        }
    }
}
function pe(e35) {
    switch(e35.type){
        case n:
            e35.props = e35.props.map(function(r21) {
                return q(X(r21), function(r22, a11, c9) {
                    switch(z(r22, 0)){
                        case 12:
                            return A(r22, 1, O(r22));
                        case 0:
                        case 40:
                        case 43:
                        case 62:
                        case 126:
                            return r22;
                        case 58:
                            if (c9[++a11] === "global") c9[a11] = "", c9[++a11] = "\f" + A(c9[a11], a11 = 1, -1);
                        case 32:
                            return a11 === 1 ? "" : r22;
                        default:
                            switch(a11){
                                case 0:
                                    e35 = r22;
                                    return M(c9) > 1 ? "" : r22;
                                case a11 = M(c9) - 1:
                                case 2:
                                    return a11 === 2 ? r22 + e35 + e35 : r22 + e35;
                                default:
                                    return r22;
                            }
                    }
                });
            });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iicyL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var weakMemoize = function weakMemoize(func) {
    // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
    var cache = new WeakMap();
    return function(arg) {
        if (cache.has(arg)) // $FlowFixMe
        return cache.get(arg);
        var ret = func(arg);
        cache.set(arg, ret);
        return ret;
    };
};
exports.default = weakMemoize;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"WW7h8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function memoize(fn) {
    var cache = Object.create(null);
    return function(arg) {
        if (cache[arg] === undefined) cache[arg] = fn(arg);
        return cache[arg];
    };
}
exports.default = memoize;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kS2E2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "serializeStyles", ()=>serializeStyles
);
var _hash = require("@emotion/hash");
var _hashDefault = parcelHelpers.interopDefault(_hash);
var _unitless = require("@emotion/unitless");
var _unitlessDefault = parcelHelpers.interopDefault(_unitless);
var _memoize = require("@emotion/memoize");
var _memoizeDefault = parcelHelpers.interopDefault(_memoize);
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty(property) {
    return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue(value) {
    return value != null && typeof value !== 'boolean';
};
var processStyleName = /* #__PURE__ */ _memoizeDefault.default(function(styleName) {
    return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});
var processStyleValue = function processStyleValue(key, value) {
    switch(key){
        case 'animation':
        case 'animationName':
            if (typeof value === 'string') return value.replace(animationRegex, function(match, p1, p2) {
                cursor = {
                    name: p1,
                    styles: p2,
                    next: cursor
                };
                return p1;
            });
    }
    if (_unitlessDefault.default[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) return value + 'px';
    return value;
};
var contentValuePattern = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
var contentValues = [
    'normal',
    'none',
    'initial',
    'inherit',
    'unset'
];
var oldProcessStyleValue = processStyleValue;
var msPattern = /^-ms-/;
var hyphenPattern = /-(.)/g;
var hyphenatedCache = {
};
processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
        if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
    }
    var processed = oldProcessStyleValue(key, value);
    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
        hyphenatedCache[key] = true;
        console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function(str, _char) {
            return _char.toUpperCase();
        }) + "?");
    }
    return processed;
};
function handleInterpolation(mergedProps, registered, interpolation) {
    if (interpolation == null) return '';
    if (interpolation.__emotion_styles !== undefined) {
        if (interpolation.toString() === 'NO_COMPONENT_SELECTOR') throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
        return interpolation;
    }
    switch(typeof interpolation){
        case 'boolean':
            return '';
        case 'object':
            if (interpolation.anim === 1) {
                cursor = {
                    name: interpolation.name,
                    styles: interpolation.styles,
                    next: cursor
                };
                return interpolation.name;
            }
            if (interpolation.styles !== undefined) {
                var next = interpolation.next;
                if (next !== undefined) // not the most efficient thing ever but this is a pretty rare case
                // and there will be very few iterations of this generally
                while(next !== undefined){
                    cursor = {
                        name: next.name,
                        styles: next.styles,
                        next: cursor
                    };
                    next = next.next;
                }
                var styles = interpolation.styles + ";";
                if (interpolation.map !== undefined) styles += interpolation.map;
                return styles;
            }
            return createStringFromObject(mergedProps, registered, interpolation);
        case 'function':
            if (mergedProps !== undefined) {
                var previousCursor = cursor;
                var result = interpolation(mergedProps);
                cursor = previousCursor;
                return handleInterpolation(mergedProps, registered, result);
            } else console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
            break;
        case 'string':
            var matched = [];
            var replaced = interpolation.replace(animationRegex, function(match, p1, p2) {
                var fakeVarName = "animation" + matched.length;
                matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
                return "${" + fakeVarName + "}";
            });
            if (matched.length) console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(matched, [
                "`" + replaced + "`"
            ]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
            break;
    } // finalize string values (regular strings and functions interpolated into css calls)
    if (registered == null) return interpolation;
    var cached = registered[interpolation];
    return cached !== undefined ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
    var string = '';
    if (Array.isArray(obj)) for(var i = 0; i < obj.length; i++)string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    else for(var _key in obj){
        var value = obj[_key];
        if (typeof value !== 'object') {
            if (registered != null && registered[value] !== undefined) string += _key + "{" + registered[value] + "}";
            else if (isProcessableValue(value)) string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        } else {
            if (_key === 'NO_COMPONENT_SELECTOR' && true) throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
            if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
                for(var _i = 0; _i < value.length; _i++)if (isProcessableValue(value[_i])) string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            } else {
                var interpolated = handleInterpolation(mergedProps, registered, value);
                switch(_key){
                    case 'animation':
                    case 'animationName':
                        string += processStyleName(_key) + ":" + interpolated + ";";
                        break;
                    default:
                        if (_key === 'undefined') console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                        string += _key + "{" + interpolated + "}";
                }
            }
        }
    }
    return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern;
sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
// keyframes are stored on the SerializedStyles object as a linked list
var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
    if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) return args[0];
    var stringMode = true;
    var styles = '';
    cursor = undefined;
    var strings = args[0];
    if (strings == null || strings.raw === undefined) {
        stringMode = false;
        styles += handleInterpolation(mergedProps, registered, strings);
    } else {
        if (strings[0] === undefined) console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
        styles += strings[0];
    } // we start at 1 since we've already handled the first arg
    for(var i = 1; i < args.length; i++){
        styles += handleInterpolation(mergedProps, registered, args[i]);
        if (stringMode) {
            if (strings[i] === undefined) console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
            styles += strings[i];
        }
    }
    var sourceMap;
    styles = styles.replace(sourceMapPattern, function(match) {
        sourceMap = match;
        return '';
    });
    labelPattern.lastIndex = 0;
    var identifierName = '';
    var match1; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5
    while((match1 = labelPattern.exec(styles)) !== null)identifierName += '-' + match1[1];
    var name = _hashDefault.default(styles) + identifierName;
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
        name: name,
        styles: styles,
        map: sourceMap,
        next: cursor,
        toString: function toString() {
            return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
        }
    };
};

},{"@emotion/hash":"h4XqR","@emotion/unitless":"pVndT","@emotion/memoize":"WW7h8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h4XqR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint-disable */ // Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
    // 'm' and 'r' are mixing constants generated offline.
    // They're not really 'magic', they just happen to work well.
    // const m = 0x5bd1e995;
    // const r = 24;
    // Initialize the hash
    var h = 0; // Mix 4 bytes at a time into the hash
    var k, i = 0, len = str.length;
    for(; len >= 4; ++i, len -= 4){
        k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
        k = /* Math.imul(k, m): */ (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
        k ^= /* k >>> r: */ k >>> 24;
        h = /* Math.imul(k, m): */ (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */ (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
    } // Handle the last few bytes of the input array
    switch(len){
        case 3:
            h ^= (str.charCodeAt(i + 2) & 255) << 16;
        case 2:
            h ^= (str.charCodeAt(i + 1) & 255) << 8;
        case 1:
            h ^= str.charCodeAt(i) & 255;
            h = /* Math.imul(h, m): */ (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
    } // Do a few final mixes of the hash to ensure the last few
    // bytes are well-incorporated.
    h ^= h >>> 13;
    h = /* Math.imul(h, m): */ (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
    return ((h ^ h >>> 15) >>> 0).toString(36);
}
exports.default = murmur2;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"pVndT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var unitlessKeys = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
};
exports.default = unitlessKeys;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6UI8e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRegisteredStyles", ()=>getRegisteredStyles
);
parcelHelpers.export(exports, "insertStyles", ()=>insertStyles
);
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames) {
    var rawClassName = '';
    classNames.split(' ').forEach(function(className) {
        if (registered[className] !== undefined) registeredStyles.push(registered[className] + ";");
        else rawClassName += className + " ";
    });
    return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
    var className = cache.key + "-" + serialized.name;
    if (// class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false || // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser === false) && cache.registered[className] === undefined) cache.registered[className] = serialized.styles;
    if (cache.inserted[serialized.name] === undefined) {
        var current = serialized;
        do {
            var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);
            current = current.next;
        }while (current !== undefined)
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k89zX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cache = require("@emotion/cache");
var _cacheDefault = parcelHelpers.interopDefault(_cache);
var _serialize = require("@emotion/serialize");
var _utils = require("@emotion/utils");
function insertWithoutScoping(cache, serialized) {
    if (cache.inserted[serialized.name] === undefined) return cache.insert('', serialized, cache.sheet, true);
}
function merge(registered, css, className) {
    var registeredStyles = [];
    var rawClassName = _utils.getRegisteredStyles(registered, registeredStyles, className);
    if (registeredStyles.length < 2) return className;
    return rawClassName + css(registeredStyles);
}
var createEmotion = function createEmotion(options) {
    var cache = _cacheDefault.default(options); // $FlowFixMe
    cache.sheet.speedy = function(value) {
        if (this.ctr !== 0) throw new Error('speedy must be changed before any rules are inserted');
        this.isSpeedy = value;
    };
    cache.compat = true;
    var css = function css() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        var serialized = _serialize.serializeStyles(args, cache.registered, undefined);
        _utils.insertStyles(cache, serialized, false);
        return cache.key + "-" + serialized.name;
    };
    var keyframes = function keyframes() {
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
        var serialized = _serialize.serializeStyles(args, cache.registered);
        var animation = "animation-" + serialized.name;
        insertWithoutScoping(cache, {
            name: serialized.name,
            styles: "@keyframes " + animation + "{" + serialized.styles + "}"
        });
        return animation;
    };
    var injectGlobal = function injectGlobal() {
        for(var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++)args[_key3] = arguments[_key3];
        var serialized = _serialize.serializeStyles(args, cache.registered);
        insertWithoutScoping(cache, serialized);
    };
    var cx = function cx() {
        for(var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++)args[_key4] = arguments[_key4];
        return merge(cache.registered, css, classnames(args));
    };
    return {
        css: css,
        cx: cx,
        injectGlobal: injectGlobal,
        keyframes: keyframes,
        hydrate: function hydrate(ids) {
            ids.forEach(function(key) {
                cache.inserted[key] = true;
            });
        },
        flush: function flush() {
            cache.registered = {
            };
            cache.inserted = {
            };
            cache.sheet.flush();
        },
        // $FlowFixMe
        sheet: cache.sheet,
        cache: cache,
        getRegisteredStyles: _utils.getRegisteredStyles.bind(null, cache.registered),
        merge: merge.bind(null, cache.registered, css)
    };
};
var classnames = function classnames1(args) {
    var cls = '';
    for(var i = 0; i < args.length; i++){
        var arg = args[i];
        if (arg == null) continue;
        var toAdd = void 0;
        switch(typeof arg){
            case 'boolean':
                break;
            case 'object':
                if (Array.isArray(arg)) toAdd = classnames1(arg);
                else {
                    toAdd = '';
                    for(var k in arg)if (arg[k] && k) {
                        toAdd && (toAdd += ' ');
                        toAdd += k;
                    }
                }
                break;
            default:
                toAdd = arg;
        }
        if (toAdd) {
            cls && (cls += ' ');
            cls += toAdd;
        }
    }
    return cls;
};
exports.default = createEmotion;

},{"@emotion/cache":"3Umtj","@emotion/serialize":"kS2E2","@emotion/utils":"6UI8e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iuYTP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProgressBar", ()=>ProgressBar
);
var _uhtml = require("uhtml");
var _ui = require("../ui");
var _progressBarStyle = require("./progress-bar.style");
class ProgressBar extends _ui.StyledElement {
    static tagStyle(style) {
        super.tagStyle(style);
    }
    static classStyle(class_, style) {
        super.classStyle(class_, style);
    }
    addStyle(style) {
        super.addStyle(style);
    }
    constructor(){
        super();
        this.max = 100;
        this.render();
    }
    render() {
        _uhtml.render(this, _uhtml.html`<div el="progress"></div>`);
        this.max = parseFloat(this.getAttribute('max')) || this.max;
        this.value = parseFloat(this.getAttribute('value'));
    }
    set value(value) {
        if (typeof value != "number") value = parseFloat(value);
        this._value = value;
        if (isNaN(value)) this.setLoop();
        else this.setProgress(value);
    }
    get value() {
        return this._value;
    }
    setLoop() {
        this.classList.remove('value');
        this.classList.add('loop');
    }
    setProgress(value) {
        this.classList.remove('loop');
        this.classList.add('value');
        let progress = this.querySelector('[el="progress"]');
        progress.style.width = `${value / this.max * 100}%`;
    }
}
ProgressBar.Style = _progressBarStyle.ProgressBarStyle;

},{"uhtml":"if09d","../ui":"jSLlu","./progress-bar.style":"gxwYt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"if09d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Hole", ()=>_rabbitJs.Hole
);
parcelHelpers.export(exports, "render", ()=>render
);
parcelHelpers.export(exports, "html", ()=>html
);
parcelHelpers.export(exports, "svg", ()=>svg
);
parcelHelpers.export(exports, "foreign", ()=>_uhandlers.foreign
);
var _umap = require("umap");
var _umapDefault = parcelHelpers.interopDefault(_umap);
var _rabbitJs = require("./rabbit.js");
var _uhandlers = require("uhandlers");
const { create , defineProperties  } = Object;
// both `html` and `svg` template literal tags are polluted
// with a `for(ref[, id])` and a `node` tag too
const tag = (type)=>{
    // both `html` and `svg` tags have their own cache
    const keyed = _umapDefault.default(new WeakMap);
    // keyed operations always re-use the same cache and unroll
    // the template and its interpolations right away
    const fixed = (cache1)=>(template, ...values)=>_rabbitJs.unroll(cache1, {
                type,
                template,
                values
            })
    ;
    return defineProperties(// non keyed operations are recognized as instance of Hole
    // during the "unroll", recursively resolved and updated
    (template, ...values)=>new _rabbitJs.Hole(type, template, values)
    , {
        for: {
            // keyed operations need a reference object, usually the parent node
            // which is showing keyed results, and optionally a unique id per each
            // related node, handy with JSON results and mutable list of objects
            // that usually carry a unique identifier
            value (ref, id) {
                const memo = keyed.get(ref) || keyed.set(ref, create(null));
                return memo[id] || (memo[id] = fixed(_rabbitJs.createCache()));
            }
        },
        node: {
            // it is possible to create one-off content out of the box via node tag
            // this might return the single created node, or a fragment with all
            // nodes present at the root level and, of course, their child nodes
            value: (template, ...values)=>_rabbitJs.unroll(_rabbitJs.createCache(), {
                    type,
                    template,
                    values
                }).valueOf()
        }
    });
};
// each rendered node gets its own cache
const cache = _umapDefault.default(new WeakMap);
// rendering means understanding what `html` or `svg` tags returned
// and it relates a specific node to its own unique cache.
// Each time the content to render changes, the node is cleaned up
// and the new new content is appended, and if such content is a Hole
// then it's "unrolled" to resolve all its inner nodes.
const render = (where, what)=>{
    const hole = typeof what === 'function' ? what() : what;
    const info = cache.get(where) || cache.set(where, _rabbitJs.createCache());
    const wire = hole instanceof _rabbitJs.Hole ? _rabbitJs.unroll(info, hole) : hole;
    if (wire !== info.wire) {
        info.wire = wire;
        where.textContent = '';
        // valueOf() simply returns the node itself, but in case it was a "wire"
        // it will eventually re-append all nodes to its fragment so that such
        // fragment can be re-appended many times in a meaningful way
        // (wires are basically persistent fragments facades with special behavior)
        where.appendChild(wire.valueOf());
    }
    return where;
};
const html = tag('html');
const svg = tag('svg');

},{"umap":"b3ep2","./rabbit.js":"4YYgA","uhandlers":"ceEOD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b3ep2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (_)=>({
        // About: get: _.get.bind(_)
        // It looks like WebKit/Safari didn't optimize bind at all,
        // so that using bind slows it down by 60%.
        // Firefox and Chrome are just fine in both cases,
        // so let's use the approach that works fast everywhere 👍
        get: (key)=>_.get(key)
        ,
        set: (key, value)=>(_.set(key, value), value)
    })
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4YYgA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createCache", ()=>createCache
);
parcelHelpers.export(exports, "unroll", ()=>unroll
);
/**
 * Holds all details wrappers needed to render the content further on.
 * @constructor
 * @param {string} type The hole type, either `html` or `svg`.
 * @param {string[]} template The template literals used to the define the content.
 * @param {Array} values Zero, one, or more interpolated values to render.
 */ parcelHelpers.export(exports, "Hole", ()=>Hole
);
var _umap = require("umap");
var _umapDefault = parcelHelpers.interopDefault(_umap);
var _uparser = require("uparser");
var _uparserDefault = parcelHelpers.interopDefault(_uparser);
var _uarray = require("uarray");
var _uwire = require("uwire");
var _handlersJs = require("./handlers.js");
var _nodeJs = require("./node.js");
// from a fragment container, create an array of indexes
// related to its child nodes, so that it's possible
// to retrieve later on exact node via reducePath
const createPath = (node)=>{
    const path = [];
    let { parentNode  } = node;
    while(parentNode){
        path.push(_uarray.indexOf.call(parentNode.childNodes, node));
        node = parentNode;
        parentNode = node.parentNode;
    }
    return path;
};
// the prefix is used to identify either comments, attributes, or nodes
// that contain the related unique id. In the attribute cases
// isµX="attribute-name" will be used to map current X update to that
// attribute name, while comments will be like <!--isµX-->, to map
// the update to that specific comment node, hence its parent.
// style and textarea will have <!--isµX--> text content, and are handled
// directly through text-only updates.
const prefix = 'isµ';
// Template Literals are unique per scope and static, meaning a template
// should be parsed once, and once only, as it will always represent the same
// content, within the exact same amount of updates each time.
// This cache relates each template to its unique content and updates.
const cache = _umapDefault.default(new WeakMap);
// a RegExp that helps checking nodes that cannot contain comments
const textOnly = /^(?:plaintext|script|style|textarea|title|xmp)$/i;
const createCache = ()=>({
        stack: [],
        entry: null,
        //  * the template that is representing
        //  * the type of node it represents (html or svg)
        //  * the content fragment with all nodes
        //  * the list of updates per each node (template holes)
        //  * the "wired" node or fragment that will get updates
        // if the template or type are different from the previous one
        // the entry gets re-created each time
        wire: null // each rendered node represent some wired content and
    })
;
// the entry stored in the rendered node cache, and per each "hole"
const createEntry = (type, template)=>{
    const { content , updates  } = mapUpdates(type, template);
    return {
        type,
        template,
        content,
        updates,
        wire: null
    };
};
// a template is instrumented to be able to retrieve where updates are needed.
// Each unique template becomes a fragment, cloned once per each other
// operation based on the same template, i.e. data => html`<p>${data}</p>`
const mapTemplate = (type, template)=>{
    const text = _uparserDefault.default(template, prefix, type === 'svg');
    const content = _nodeJs.createFragment(text, type);
    // once instrumented and reproduced as fragment, it's crawled
    // to find out where each update is in the fragment tree
    const tw = _nodeJs.createWalker(content);
    const nodes = [];
    const length = template.length - 1;
    let i = 0;
    // updates are searched via unique names, linearly increased across the tree
    // <div isµ0="attr" isµ1="other"><!--isµ2--><style><!--isµ3--</style></div>
    let search = `${prefix}${i}`;
    while(i < length){
        const node = tw.nextNode();
        // if not all updates are bound but there's nothing else to crawl
        // it means that there is something wrong with the template.
        if (!node) throw `bad template: ${text}`;
        // if the current node is a comment, and it contains isµX
        // it means the update should take care of any content
        if (node.nodeType === 8) // The only comments to be considered are those
        // which content is exactly the same as the searched one.
        {
            if (node.data === search) {
                nodes.push({
                    type: 'node',
                    path: createPath(node)
                });
                search = `${prefix}${++i}`;
            }
        } else {
            // if the node is not a comment, loop through all its attributes
            // named isµX and relate attribute updates to this node and the
            // attribute name, retrieved through node.getAttribute("isµX")
            // the isµX attribute will be removed as irrelevant for the layout
            // let svg = -1;
            while(node.hasAttribute(search)){
                nodes.push({
                    type: 'attr',
                    path: createPath(node),
                    name: node.getAttribute(search)
                });
                node.removeAttribute(search);
                search = `${prefix}${++i}`;
            }
            // if the node was a style, textarea, or others, check its content
            // and if it is <!--isµX--> then update tex-only this node
            if (textOnly.test(node.tagName) && node.textContent.trim() === `<!--${search}-->`) {
                node.textContent = '';
                nodes.push({
                    type: 'text',
                    path: createPath(node)
                });
                search = `${prefix}${++i}`;
            }
        }
    }
    // once all nodes to update, or their attributes, are known, the content
    // will be cloned in the future to represent the template, and all updates
    // related to such content retrieved right away without needing to re-crawl
    // the exact same template, and its content, more than once.
    return {
        content,
        nodes
    };
};
// if a template is unknown, perform the previous mapping, otherwise grab
// its details such as the fragment with all nodes, and updates info.
const mapUpdates = (type, template)=>{
    const { content , nodes  } = cache.get(template) || cache.set(template, mapTemplate(type, template));
    // clone deeply the fragment
    const fragment = document.importNode(content, true);
    // and relate an update handler per each node that needs one
    const updates = nodes.map(_handlersJs.handlers, fragment);
    // return the fragment and all updates to use within its nodes
    return {
        content: fragment,
        updates
    };
};
const unroll = (info, { type , template , values  })=>{
    const { length  } = values;
    // interpolations can contain holes and arrays, so these need
    // to be recursively discovered
    unrollValues(info, values, length);
    let { entry  } = info;
    // if the cache entry is either null or different from the template
    // and the type this unroll should resolve, create a new entry
    // assigning a new content fragment and the list of updates.
    if (!entry || entry.template !== template || entry.type !== type) info.entry = entry = createEntry(type, template);
    const { content , updates , wire  } = entry;
    // even if the fragment and its nodes is not live yet,
    // it is already possible to update via interpolations values.
    for(let i = 0; i < length; i++)updates[i](values[i]);
    // if the entry was new, or representing a different template or type,
    // create a new persistent entity to use during diffing.
    // This is simply a DOM node, when the template has a single container,
    // as in `<p></p>`, or a "wire" in `<p></p><p></p>` and similar cases.
    return wire || (entry.wire = _uwire.persistent(content));
};
// the stack retains, per each interpolation value, the cache
// related to each interpolation value, or null, if the render
// was conditional and the value is not special (Array or Hole)
const unrollValues = ({ stack  }, values, length)=>{
    for(let i = 0; i < length; i++){
        const hole = values[i];
        // each Hole gets unrolled and re-assigned as value
        // so that domdiff will deal with a node/wire, not with a hole
        if (hole instanceof Hole) values[i] = unroll(stack[i] || (stack[i] = createCache()), hole);
        else if (_uarray.isArray(hole)) unrollValues(stack[i] || (stack[i] = createCache()), hole, hole.length);
        else stack[i] = null;
    }
    if (length < stack.length) stack.splice(length);
};
function Hole(type, template, values) {
    this.type = type;
    this.template = template;
    this.values = values;
}

},{"umap":"b3ep2","uparser":"l3Oqg","uarray":"7ftea","uwire":"eGHCa","./handlers.js":"aEsZd","./node.js":"9Th3F","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l3Oqg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const attr = /([^\s\\>"'=]+)\s*=\s*(['"]?)$/;
const empty = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
const node = /<[a-z][^>]+$/i;
const notNode = />[^<>]*$/;
const selfClosing = /<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/ig;
const trimEnd = /\s+$/;
const isNode = (template, i)=>0 < i-- && (node.test(template[i]) || !notNode.test(template[i]) && isNode(template, i))
;
const regular = (original, name, extra)=>empty.test(name) ? original : `<${name}${extra.replace(trimEnd, '')}></${name}>`
;
exports.default = (template, prefix, svg)=>{
    const text = [];
    const { length  } = template;
    for(let i = 1; i < length; i++){
        const chunk = template[i - 1];
        text.push(attr.test(chunk) && isNode(template, i) ? chunk.replace(attr, (_, $1, $2)=>`${prefix}${i - 1}=${$2 || '"'}${$1}${$2 ? '' : '"'}`
        ) : `${chunk}<!--${prefix}${i - 1}-->`);
    }
    text.push(template[length - 1]);
    const output = text.join('').trim();
    return svg ? output : output.replace(selfClosing, regular);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ftea":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isArray", ()=>isArray
);
parcelHelpers.export(exports, "indexOf", ()=>indexOf
);
parcelHelpers.export(exports, "slice", ()=>slice
);
const { isArray  } = Array;
const { indexOf , slice  } = [];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eGHCa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "diffable", ()=>diffable
);
parcelHelpers.export(exports, "persistent", ()=>persistent
);
var _uarray = require("uarray");
const ELEMENT_NODE = 1;
const nodeType = 111;
const remove = ({ firstChild , lastChild  })=>{
    const range = document.createRange();
    range.setStartAfter(firstChild);
    range.setEndAfter(lastChild);
    range.deleteContents();
    return firstChild;
};
const diffable = (node, operation)=>node.nodeType === nodeType ? 1 / operation < 0 ? operation ? remove(node) : node.lastChild : operation ? node.valueOf() : node.firstChild : node
;
const persistent = (fragment)=>{
    const { childNodes  } = fragment;
    const { length  } = childNodes;
    if (length < 2) return length ? childNodes[0] : fragment;
    const nodes = _uarray.slice.call(childNodes, 0);
    const firstChild = nodes[0];
    const lastChild = nodes[length - 1];
    return {
        ELEMENT_NODE,
        nodeType,
        firstChild,
        lastChild,
        valueOf () {
            if (childNodes.length !== length) {
                let i = 0;
                while(i < length)fragment.appendChild(nodes[i++]);
            }
            return fragment;
        }
    };
};

},{"uarray":"7ftea","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aEsZd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// each mapped update carries the update type and its path
// the type is either node, attribute, or text, while
// the path is how to retrieve the related node to update.
// In the attribute case, the attribute name is also carried along.
parcelHelpers.export(exports, "handlers", ()=>handlers
);
var _uarray = require("uarray");
var _udomdiff = require("udomdiff");
var _udomdiffDefault = parcelHelpers.interopDefault(_udomdiff);
var _uhandlers = require("uhandlers");
var _uwire = require("uwire");
// from a generic path, retrieves the exact targeted node
const reducePath = ({ childNodes  }, i)=>childNodes[i]
;
// this helper avoid code bloat around handleAnything() callback
const diff = (comment, oldNodes, newNodes)=>_udomdiffDefault.default(comment.parentNode, // TODO: there is a possible edge case where a node has been
    //       removed manually, or it was a keyed one, attached
    //       to a shared reference between renders.
    //       In this case udomdiff might fail at removing such node
    //       as its parent won't be the expected one.
    //       The best way to avoid this issue is to filter oldNodes
    //       in search of those not live, or not in the current parent
    //       anymore, but this would require both a change to uwire,
    //       exposing a parentNode from the firstChild, as example,
    //       but also a filter per each diff that should exclude nodes
    //       that are not in there, penalizing performance quite a lot.
    //       As this has been also a potential issue with domdiff,
    //       and both lighterhtml and hyperHTML might fail with this
    //       very specific edge case, I might as well document this possible
    //       "diffing shenanigan" and call it a day.
    oldNodes, newNodes, _uwire.diffable, comment)
;
// if an interpolation represents a comment, the whole
// diffing will be related to such comment.
// This helper is in charge of understanding how the new
// content for such interpolation/hole should be updated
const handleAnything = (comment)=>{
    let oldValue, text, nodes = [];
    const anyContent = (newValue)=>{
        switch(typeof newValue){
            // primitives are handled as text content
            case 'string':
            case 'number':
            case 'boolean':
                if (oldValue !== newValue) {
                    oldValue = newValue;
                    if (!text) text = document.createTextNode('');
                    text.data = newValue;
                    nodes = diff(comment, nodes, [
                        text
                    ]);
                }
                break;
            // null, and undefined are used to cleanup previous content
            case 'object':
            case 'undefined':
                if (newValue == null) {
                    if (oldValue != newValue) {
                        oldValue = newValue;
                        nodes = diff(comment, nodes, []);
                    }
                    break;
                }
                // arrays and nodes have a special treatment
                if (_uarray.isArray(newValue)) {
                    oldValue = newValue;
                    // arrays can be used to cleanup, if empty
                    if (newValue.length === 0) nodes = diff(comment, nodes, []);
                    else if (typeof newValue[0] === 'object') nodes = diff(comment, nodes, newValue);
                    else anyContent(String(newValue));
                    break;
                }
                // if the new value is a DOM node, or a wire, and it's
                // different from the one already live, then it's diffed.
                // if the node is a fragment, it's appended once via its childNodes
                // There is no `else` here, meaning if the content
                // is not expected one, nothing happens, as easy as that.
                if (oldValue !== newValue && 'ELEMENT_NODE' in newValue) {
                    oldValue = newValue;
                    nodes = diff(comment, nodes, newValue.nodeType === 11 ? _uarray.slice.call(newValue.childNodes) : [
                        newValue
                    ]);
                }
                break;
            case 'function':
                anyContent(newValue(comment));
                break;
        }
    };
    return anyContent;
};
// attributes can be:
//  * ref=${...}      for hooks and other purposes
//  * aria=${...}     for aria attributes
//  * ?boolean=${...} for boolean attributes
//  * .dataset=${...} for dataset related attributes
//  * .setter=${...}  for Custom Elements setters or nodes with setters
//                    such as buttons, details, options, select, etc
//  * @event=${...}   to explicitly handle event listeners
//  * onevent=${...}  to automatically handle event listeners
//  * generic=${...}  to handle an attribute just like an attribute
const handleAttribute = (node, name /*, svg*/ )=>{
    switch(name[0]){
        case '?':
            return _uhandlers.boolean(node, name.slice(1), false);
        case '.':
            return _uhandlers.setter(node, name.slice(1));
        case '@':
            return _uhandlers.event(node, 'on' + name.slice(1));
        case 'o':
            if (name[1] === 'n') return _uhandlers.event(node, name);
    }
    switch(name){
        case 'ref':
            return _uhandlers.ref(node);
        case 'aria':
            return _uhandlers.aria(node);
    }
    return _uhandlers.attribute(node, name /*, svg*/ );
};
function handlers(options) {
    const { type , path  } = options;
    const node = path.reduceRight(reducePath, this);
    return type === 'node' ? handleAnything(node) : type === 'attr' ? handleAttribute(node, options.name /*, options.svg*/ ) : _uhandlers.text(node);
}

},{"uarray":"7ftea","udomdiff":"9UVlK","uhandlers":"ceEOD","uwire":"eGHCa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9UVlK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (parentNode, a, b, get, before)=>{
    const bLength = b.length;
    let aEnd = a.length;
    let bEnd = bLength;
    let aStart = 0;
    let bStart = 0;
    let map = null;
    while(aStart < aEnd || bStart < bEnd){
        // append head, tail, or nodes in between: fast path
        if (aEnd === aStart) {
            // we could be in a situation where the rest of nodes that
            // need to be added are not at the end, and in such case
            // the node to `insertBefore`, if the index is more than 0
            // must be retrieved, otherwise it's gonna be the first item.
            const node = bEnd < bLength ? bStart ? get(b[bStart - 1], -0).nextSibling : get(b[bEnd - bStart], 0) : before;
            while(bStart < bEnd)parentNode.insertBefore(get(b[bStart++], 1), node);
        } else if (bEnd === bStart) while(aStart < aEnd){
            // remove the node only if it's unknown or not live
            if (!map || !map.has(a[aStart])) parentNode.removeChild(get(a[aStart], -1));
            aStart++;
        }
        else if (a[aStart] === b[bStart]) {
            aStart++;
            bStart++;
        } else if (a[aEnd - 1] === b[bEnd - 1]) {
            aEnd--;
            bEnd--;
        } else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
            // this is a "shrink" operation that could happen in these cases:
            // [1, 2, 3, 4, 5]
            // [1, 4, 3, 2, 5]
            // or asymmetric too
            // [1, 2, 3, 4, 5]
            // [1, 2, 3, 5, 6, 4]
            const node = get(a[--aEnd], -1).nextSibling;
            parentNode.insertBefore(get(b[bStart++], 1), get(a[aStart++], -1).nextSibling);
            parentNode.insertBefore(get(b[--bEnd], 1), node);
            // mark the future index as identical (yeah, it's dirty, but cheap 👍)
            // The main reason to do this, is that when a[aEnd] will be reached,
            // the loop will likely be on the fast path, as identical to b[bEnd].
            // In the best case scenario, the next loop will skip the tail,
            // but in the worst one, this node will be considered as already
            // processed, bailing out pretty quickly from the map index check
            a[aEnd] = b[bEnd];
        } else {
            // the map requires an O(bEnd - bStart) operation once
            // to store all future nodes indexes for later purposes.
            // In the worst case scenario, this is a full O(N) cost,
            // and such scenario happens at least when all nodes are different,
            // but also if both first and last items of the lists are different
            if (!map) {
                map = new Map;
                let i = bStart;
                while(i < bEnd)map.set(b[i], i++);
            }
            // if it's a future node, hence it needs some handling
            if (map.has(a[aStart])) {
                // grab the index of such node, 'cause it might have been processed
                const index = map.get(a[aStart]);
                // if it's not already processed, look on demand for the next LCS
                if (bStart < index && index < bEnd) {
                    let i = aStart;
                    // counts the amount of nodes that are the same in the future
                    let sequence = 1;
                    while(++i < aEnd && i < bEnd && map.get(a[i]) === index + sequence)sequence++;
                    // effort decision here: if the sequence is longer than replaces
                    // needed to reach such sequence, which would brings again this loop
                    // to the fast path, prepend the difference before a sequence,
                    // and move only the future list index forward, so that aStart
                    // and bStart will be aligned again, hence on the fast path.
                    // An example considering aStart and bStart are both 0:
                    // a: [1, 2, 3, 4]
                    // b: [7, 1, 2, 3, 6]
                    // this would place 7 before 1 and, from that time on, 1, 2, and 3
                    // will be processed at zero cost
                    if (sequence > index - bStart) {
                        const node = get(a[aStart], 0);
                        while(bStart < index)parentNode.insertBefore(get(b[bStart++], 1), node);
                    } else parentNode.replaceChild(get(b[bStart++], 1), get(a[aStart++], -1));
                } else aStart++;
            } else parentNode.removeChild(get(a[aStart++], -1));
        }
    }
    return b;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ceEOD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Foreign", ()=>Foreign
);
parcelHelpers.export(exports, "foreign", ()=>foreign
);
parcelHelpers.export(exports, "aria", ()=>aria
);
parcelHelpers.export(exports, "attribute", ()=>attribute
);
parcelHelpers.export(exports, "boolean", ()=>boolean
);
parcelHelpers.export(exports, "data", ()=>data
);
parcelHelpers.export(exports, "event", ()=>event
);
parcelHelpers.export(exports, "ref", ()=>ref
);
parcelHelpers.export(exports, "setter", ()=>setter
);
parcelHelpers.export(exports, "text", ()=>text
);
var _uarray = require("uarray");
// flag for foreign checks (slower path, fast by default)
let useForeign = false;
class Foreign {
    constructor(handler, value){
        useForeign = true;
        this._ = (...args)=>handler(...args, value)
        ;
    }
}
const foreign = (handler, value)=>new Foreign(handler, value)
;
const aria = (node)=>(values)=>{
        for(const key in values){
            const name = key === 'role' ? key : `aria-${key}`;
            const value = values[key];
            if (value == null) node.removeAttribute(name);
            else node.setAttribute(name, value);
        }
    }
;
const attribute = (node, name)=>{
    let oldValue, orphan = true;
    const attributeNode = document.createAttributeNS(null, name);
    return (newValue)=>{
        if (oldValue !== newValue) {
            oldValue = newValue;
            if (oldValue == null) {
                if (!orphan) {
                    node.removeAttributeNode(attributeNode);
                    orphan = true;
                }
            } else {
                const value = useForeign && newValue instanceof Foreign ? newValue._(node, name) : newValue;
                if (value == null) {
                    if (!orphan) node.removeAttributeNode(attributeNode);
                    orphan = true;
                } else {
                    attributeNode.value = value;
                    if (orphan) {
                        node.setAttributeNodeNS(attributeNode);
                        orphan = false;
                    }
                }
            }
        }
    };
};
const boolean = (node, key, oldValue)=>(newValue)=>{
        if (oldValue !== !!newValue) {
            // when IE won't be around anymore ...
            // node.toggleAttribute(key, oldValue = !!newValue);
            if (oldValue = !!newValue) node.setAttribute(key, '');
            else node.removeAttribute(key);
        }
    }
;
const data = ({ dataset  })=>(values)=>{
        for(const key in values){
            const value = values[key];
            if (value == null) delete dataset[key];
            else dataset[key] = value;
        }
    }
;
const event = (node, name)=>{
    let oldValue, lower, type = name.slice(2);
    if (!(name in node) && (lower = name.toLowerCase()) in node) type = lower.slice(2);
    return (newValue)=>{
        const info = _uarray.isArray(newValue) ? newValue : [
            newValue,
            false
        ];
        if (oldValue !== info[0]) {
            if (oldValue) node.removeEventListener(type, oldValue, info[1]);
            if (oldValue = info[0]) node.addEventListener(type, oldValue, info[1]);
        }
    };
};
const ref = (node)=>{
    let oldValue;
    return (value)=>{
        if (oldValue !== value) {
            oldValue = value;
            if (typeof value === 'function') value(node);
            else value.current = node;
        }
    };
};
const setter = (node, key)=>key === 'dataset' ? data(node) : (value)=>{
        node[key] = value;
    }
;
const text = (node)=>{
    let oldValue;
    return (newValue)=>{
        if (oldValue != newValue) {
            oldValue = newValue;
            node.textContent = newValue == null ? '' : newValue;
        }
    };
};

},{"uarray":"7ftea","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Th3F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createFragment", ()=>createFragment
);
parcelHelpers.export(exports, "createWalker", ()=>createWalker
);
var _createContent = require("@ungap/create-content");
var _createContentDefault = parcelHelpers.interopDefault(_createContent);
// this "hack" tells the library if the browser is IE11 or old Edge
const isImportNodeLengthWrong = document.importNode.length != 1;
const createFragment = isImportNodeLengthWrong ? (text, type, normalize)=>document.importNode(_createContentDefault.default(text, type, normalize), true)
 : _createContentDefault.default;
const createWalker = isImportNodeLengthWrong ? (fragment)=>document.createTreeWalker(fragment, 129, null, false)
 : (fragment)=>document.createTreeWalker(fragment, 129)
;

},{"@ungap/create-content":"4xeIY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4xeIY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*! (c) Andrea Giammarchi - ISC */ var createContent = function(document) {
    var FRAGMENT = 'fragment';
    var TEMPLATE = 'template';
    var HAS_CONTENT = 'content' in create(TEMPLATE);
    var createHTML = HAS_CONTENT ? function(html) {
        var template = create(TEMPLATE);
        template.innerHTML = html;
        return template.content;
    } : function(html) {
        var content = create(FRAGMENT);
        var template = create(TEMPLATE);
        var childNodes = null;
        if (/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(html)) {
            var selector = RegExp.$1;
            template.innerHTML = '<table>' + html + '</table>';
            childNodes = template.querySelectorAll(selector);
        } else {
            template.innerHTML = html;
            childNodes = template.childNodes;
        }
        append(content, childNodes);
        return content;
    };
    function append(root, childNodes) {
        var length = childNodes.length;
        while(length--)root.appendChild(childNodes[0]);
    }
    function create(element) {
        return element === FRAGMENT ? document.createDocumentFragment() : document.createElementNS('http://www.w3.org/1999/xhtml', element);
    }
    // it could use createElementNS when hasNode is there
    // but this fallback is equally fast and easier to maintain
    // it is also battle tested already in all IE
    function createSVG(svg) {
        var content = create(FRAGMENT);
        var template = create('div');
        template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + svg + '</svg>';
        append(content, template.firstChild.childNodes);
        return content;
    }
    return function createContent(markup, type) {
        return (type === 'svg' ? createSVG : createHTML)(markup);
    };
}(document);
exports.default = createContent;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gxwYt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProgressBarStyle", ()=>ProgressBarStyle
);
var _css = require("@emotion/css");
var _ui = require("../ui");
class ProgressBarStyle extends _ui.StyleClass {
    static css(style = {
    }) {
        style = {
            ...this.default,
            ...style
        };
        const loopAnimation = _css.keyframes`
        from {
            width: 0;
            opacity: 1;
        }
        25% {
            opacity: 1;
        }
        to {
            width: 100%;
            opacity: 0;
        }
        `;
        let css = `
        width: 100%;
        &.value {
            display: flex;
            justify-content: flex-start;
            div[el="progress"] {
                will-change: width opacity;
                transition: width 0.25s ease 0s;
                animation: none;
            }
        }

        &.loop {
            display: flex;
            justify-content: center;
            div[el="progress"] {
                will-change: width, opacity;
                transition: none;
                animation: ${loopAnimation} 1.5s ease infinite;
            }
        }

        ${this.style(style)}
        `.trim();
        return css;
    }
    static style(style = {
    }) {
        let css = `
        ${this._progressColor(style)}
        ${this._trackColor(style)}
        ${this._thickness(style)}
        ${this._borderRadius(style)}
        `.trim();
        return css;
    }
    static _progressColor(style = {
    }) {
        if (style.progressColor == undefined) return '';
        return `
        div[el="progress"] {
            background-color: ${style.progressColor};
        }
        `.trim();
    }
    static _trackColor(style = {
    }) {
        if (style.trackColor == undefined) return '';
        return `
        background-color: ${style.trackColor};
        `.trim();
    }
    static _thickness(style = {
    }) {
        if (style.thickness == undefined) return '';
        return `
        div[el="progress"] {
            height: ${style.thickness};
        }
        `.trim();
    }
    static _borderRadius(style = {
    }) {
        if (style.borderRadius == undefined) return '';
        return `
        border-radius: ${style.borderRadius};
        div[el="progress"] {
            border-radius: ${style.borderRadius};
        }
        `.trim();
    }
}
ProgressBarStyle.default = {
    progressColor: 'blue',
    trackColor: '#ccc',
    thickness: '5px',
    borderRadius: '5px'
};

},{"@emotion/css":"gyRZs","../ui":"jSLlu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5912A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProgressCircle", ()=>ProgressCircle
);
var _uhtml = require("uhtml");
var _ui = require("../ui");
var _progressCircleStyle = require("./progress-circle.style");
class ProgressCircle extends _ui.StyledElement {
    static tagStyle(style) {
        super.tagStyle(style);
    }
    static classStyle(class_, style) {
        super.classStyle(class_, style);
    }
    addStyle(style) {
        super.addStyle(style);
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
        this.addStyle({
            radius: value
        });
        this.render();
    }
    get trackWidth() {
        return this._trackWidth;
    }
    set trackWidth(value) {
        this._trackWidth = value;
        this.addStyle({
            trackWidth: value
        });
        this.render();
    }
    set value(value) {
        if (typeof value != "number") value = parseFloat(value);
        this._value = value;
        if (isNaN(value)) {
            this.toLoop();
            return;
        }
        this.setProgress(value / this.max);
    }
    get value() {
        return this._value;
    }
    constructor(){
        super();
        this.max = 100;
        this.el = {
            circle1: null,
            circle2: null
        };
        this._radius = this._class.Style.default.radius;
        this._trackWidth = this._class.Style.default.trackWidth;
        this.render();
    }
    render() {
        let boxSize = 2 * (this.radius + this.trackWidth);
        let cx = this.radius + this.trackWidth;
        let cy = cx;
        _uhtml.render(this, _uhtml.svg`
        <svg viewBox=${`0 0 ${boxSize} ${boxSize}`}>
            <g>
                <circle el="circle1"
                    fill="transparent"
                    r="${this.radius}"
                    cx=${cx}
                    cy=${cy} />
                <circle el="circle2"
                    fill="transparent"
                    r="${this.radius}"
                    cx=${cx}
                    cy=${cy} />
            </g>
        </svg>
        `);
        this.el.circle1 = this.querySelector('circle[el="circle1"]');
        this.el.circle2 = this.querySelector('circle[el="circle2"]');
        this.max = parseFloat(this.getAttribute('max')) || this.max;
        this.value = parseFloat(this.getAttribute('value'));
    }
    toLoop() {
        this.classList.remove('value');
        this.classList.add('loop');
    }
    setProgress(ratio) {
        this.classList.remove('loop');
        this.classList.add('value');
        const circumference = 2 * Math.PI * this.radius;
        const offset = circumference - ratio * circumference;
        this.el.circle2.style.strokeDashoffset = offset.toString();
    }
}
ProgressCircle.Style = _progressCircleStyle.ProgressCircleStyle;

},{"uhtml":"if09d","../ui":"jSLlu","./progress-circle.style":"dByZu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dByZu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProgressCircleStyle", ()=>ProgressCircleStyle
);
var _css = require("@emotion/css");
var _ui = require("../ui");
class ProgressCircleStyle extends _ui.StyleClass {
    static css(style = {
    }) {
        style = {
            ...this.default,
            ...style
        };
        const rotateAnimation = _css.keyframes`
            0% {
                transform: rotateZ(0deg);
            }
            100% {
                transform: rotateZ(360deg);
            }
        `;
        const css = `
        display: flex;
        overflow: hidden;
        &.loop svg {
            animation: 2s linear infinite ${rotateAnimation};
        }
        ${this.style(style)}
        `.trim();
        return css;
    }
    static style(style = {
    }) {
        const css = `
        ${this._radius(style)}
        ${this._trackWidth(style)}
        ${this._progressColor(style)}
        ${this._trackColor(style)}
        `.trim();
        return css;
    }
    static _progressColor(style = {
    }) {
        if (style.progressColor == undefined) return '';
        return `
        &.loop circle[el="circle2"] {
            stroke: ${style.progressColor};
        }
        &.value circle[el="circle2"] {
            stroke: ${style.progressColor};
        }
        `.trim();
    }
    static _trackColor(style = {
    }) {
        if (style.trackColor == undefined) return '';
        return `
        circle[el="circle1"] {
            stroke: ${style.trackColor};
        }
        `.trim();
    }
    static _trackWidth(style = {
    }) {
        if (style.trackWidth == undefined) return '';
        return `
        circle[el="circle1"] {
            stroke-width: ${style.trackWidth};
        }
        &.loop circle[el="circle2"] {
            stroke-width: ${style.trackWidth};
        }
        &.value circle[el="circle2"] {
            stroke-width: ${style.trackWidth};
        }
        `.trim();
    }
    static _radius(style = {
    }) {
        if (style.radius == undefined) return '';
        const circumference = Math.floor(2 * Math.PI * style.radius);
        const loopAnimation = _css.keyframes`
            0%, 25% {
                stroke-dashoffset: ${Math.floor(circumference * 0.97)};
                transform: rotate(0);
            }
            
            50%, 75% {
                stroke-dashoffset: ${Math.floor(circumference * 0.25)};
                transform: rotate(45deg);
            }
            
            100% {
                stroke-dashoffset: ${Math.floor(circumference * 0.97)};
                transform: rotate(360deg);
            }
        `;
        const css = `
        &.loop circle[el="circle2"] {
            stroke-dasharray: ${circumference};
            stroke-linecap: round;
            transition: unset;
            transform: none;
            transform-origin: 50% 50%;
            animation: 1.5s ease-in-out infinite both ${loopAnimation};
        }

        &.value circle[el="circle2"] {
            stroke-linecap: unset;
            stroke-dasharray: ${circumference} ${circumference};
            transition: stroke-dashoffset 0.25s ease-in-out;
            // axis compensation
            transform: rotate(-90deg);
            transform-origin: 50% 50%;
            animation: unset;
        }`.trim();
        return css;
    }
}
ProgressCircleStyle.default = {
    radius: 75,
    trackWidth: 25,
    progressColor: 'blue',
    trackColor: '#ccc'
};

},{"@emotion/css":"gyRZs","../ui":"jSLlu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["dQugL","5kVIp"], "5kVIp", "parcelRequirefd77")

//# sourceMappingURL=progress.js.map
