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
})({"9SDp2":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "738d5c9610084689";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
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
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
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
    bundle.hotData = {};
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

},{}],"dMIWn":[function(require,module,exports) {
var _adapter = require("@nitipit/adapter/src/adapter");
var _lift = require("gadjet/src/style/lift");
(0, _adapter.addStyle)`
.lift {
    padding: 0.5rem;
    margin: 0.5rem;
    border: 1px solid;
}
.lv-1 {
    ${(0, _lift.lift)({
    level: 1
})}
}
.lv-2 {
    ${(0, _lift.lift)({
    level: 2
})}
}
.lv-3 {
    ${(0, _lift.lift)({
    level: 3
})}
}
.lv-4 {
    ${(0, _lift.lift)({
    level: 4
})}
}
.lv-5 {
    ${(0, _lift.lift)({
    level: 5
})}
}
`;

},{"@nitipit/adapter/src/adapter":"1Fra8","gadjet/src/style/lift":"9caa5"}],"1Fra8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addStyle", ()=>(0, _css.injectGlobal));
parcelHelpers.export(exports, "define", ()=>define);
parcelHelpers.export(exports, "StyleClass", ()=>StyleClass);
parcelHelpers.export(exports, "Adapter", ()=>Adapter);
var _css = require("@emotion/css");
const define = (tagName, Class = Adapter)=>{
    Class.define(tagName);
};
class StyleClass {
    static css(style = {}) {
        return "";
    }
    static style(style = {}) {
        return "";
    }
}
class Adapter extends HTMLElement {
    static Style = StyleClass;
    static get tagName() {
        if (!this._tagName) throw `${this.name} hasn't been defined a tag name`;
        return this._tagName;
    }
    static set tagName(tagName) {
        this._tagName = tagName;
    }
    static define(tagName) {
        // To extends this function, sub-elements must be defined before call
        // this function as `super.define(tagName);`
        try {
            customElements.define(tagName, this);
        } catch (error) {
            if (error instanceof DOMException) {
                console.error(`DOMException: '${this.name}' ` + `has already been defined to tag '${this.tagName}'\n` + `${error.stack}`);
                return;
            }
        }
        this.tagName = tagName;
        this.initStyle();
    }
    static initStyle() {
        (0, _css.injectGlobal)`
        ${this.tagName} {
            all: unset;
        }`;
        if (!this.Style) return;
        (0, _css.injectGlobal)`
        ${this.tagName} {
            ${this.Style.css()}
        }`;
    }
    static tagStyle(style) {
        if (typeof style == "string") {
            (0, _css.injectGlobal)`
            ${this.tagName} {
                ${style}
            }`;
            return;
        }
        (0, _css.injectGlobal)`
        ${this.tagName} {
            ${this.Style.style(style)}
        }`;
    }
    static classStyle(class_, style) {
        if (typeof style == "string") (0, _css.injectGlobal)`
            ${this.tagName}.${class_} {
                ${style}
            }`;
        else if (typeof style == "object") (0, _css.injectGlobal)`
            ${this.tagName}.${class_} {
                ${this.Style.style(style)}
            }`;
    }
    static max_id = Math.pow(16, 4) - 1;
    static instance = {};
    static _generate_id() {
        return `adt-${Math.floor(Math.random() * this.max_id).toString(16)}`;
    }
    constructor(){
        super();
        this._class = this.constructor;
        let id = this._class._generate_id();
        while(id in this._class.instance)id = this._class._generate_id();
        this._class.instance[id] = true;
        this._id = id;
    }
    addStyle(style) {
        this.classList.add(this._id);
        let selector = this.classList.value.replace(/ /g, ".");
        if (typeof style == "string") (0, _css.injectGlobal)`
            ${this.tagName}.${selector} {
                ${style}
            }`;
        else if (typeof style == "object") (0, _css.injectGlobal)`
            ${this.tagName}.${selector} {
                ${this._class.Style.style(style)}
            }`;
    }
    notify(name, options) {
        const event = new CustomEvent(name, options);
        this.dispatchEvent(event);
    }
}

},{"@emotion/css":"gyRZs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gyRZs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cache", ()=>cache);
parcelHelpers.export(exports, "css", ()=>css);
parcelHelpers.export(exports, "cx", ()=>cx);
parcelHelpers.export(exports, "flush", ()=>flush);
parcelHelpers.export(exports, "getRegisteredStyles", ()=>getRegisteredStyles);
parcelHelpers.export(exports, "hydrate", ()=>hydrate);
parcelHelpers.export(exports, "injectGlobal", ()=>injectGlobal);
parcelHelpers.export(exports, "keyframes", ()=>keyframes);
parcelHelpers.export(exports, "merge", ()=>merge);
parcelHelpers.export(exports, "sheet", ()=>sheet);
var _cache = require("@emotion/cache");
var _serialize = require("@emotion/serialize");
var _utils = require("@emotion/utils");
var _emotionCssCreateInstanceEsmJs = require("../create-instance/dist/emotion-css-create-instance.esm.js");
var _emotionCssCreateInstanceEsmJsDefault = parcelHelpers.interopDefault(_emotionCssCreateInstanceEsmJs);
var _createEmotion = (0, _emotionCssCreateInstanceEsmJsDefault.default)({
    key: "css"
}), flush = _createEmotion.flush, hydrate = _createEmotion.hydrate, cx = _createEmotion.cx, merge = _createEmotion.merge, getRegisteredStyles = _createEmotion.getRegisteredStyles, injectGlobal = _createEmotion.injectGlobal, keyframes = _createEmotion.keyframes, css = _createEmotion.css, sheet = _createEmotion.sheet, cache = _createEmotion.cache;

},{"@emotion/cache":"3Umtj","@emotion/serialize":"kS2E2","@emotion/utils":"6UI8e","../create-instance/dist/emotion-css-create-instance.esm.js":"k89zX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Umtj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _sheet = require("@emotion/sheet");
var _stylis = require("stylis");
var _weakMemoize = require("@emotion/weak-memoize");
var _memoize = require("@emotion/memoize");
var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
    var previous = 0;
    var character = 0;
    while(true){
        previous = character;
        character = (0, _stylis.peek)(); // &\f
        if (previous === 38 && character === 12) points[index] = 1;
        if ((0, _stylis.token)(character)) break;
        (0, _stylis.next)();
    }
    return (0, _stylis.slice)(begin, (0, _stylis.position));
};
var toRules = function toRules(parsed, points) {
    // pretend we've started with a comma
    var index = -1;
    var character = 44;
    do switch((0, _stylis.token)(character)){
        case 0:
            // &\f
            if (character === 38 && (0, _stylis.peek)() === 12) // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
            // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
            // and when it should just concatenate the outer and inner selectors
            // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
            points[index] = 1;
            parsed[index] += identifierWithPointTracking((0, _stylis.position) - 1, points, index);
            break;
        case 2:
            parsed[index] += (0, _stylis.delimit)(character);
            break;
        case 4:
            // comma
            if (character === 44) {
                // colon
                parsed[++index] = (0, _stylis.peek)() === 58 ? "&\f" : "";
                points[index] = parsed[index].length;
                break;
            }
        // fallthrough
        default:
            parsed[index] += (0, _stylis.from)(character);
    }
    while (character = (0, _stylis.next)());
    return parsed;
};
var getRules = function getRules(value, points) {
    return (0, _stylis.dealloc)(toRules((0, _stylis.alloc)(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11
var fixedElements = /* #__PURE__ */ new WeakMap();
var compat = function compat(element) {
    if (element.type !== "rule" || !element.parent || // positive .length indicates that this rule contains pseudo
    // negative .length indicates that this rule has been already prefixed
    element.length < 1) return;
    var value = element.value, parent = element.parent;
    var isImplicitRule = element.column === parent.column && element.line === parent.line;
    while(parent.type !== "rule"){
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
    if (element.type === "decl") {
        var value = element.value;
        if (value.charCodeAt(0) === 108 && // charcode for b
        value.charCodeAt(2) === 98) {
            // this ignores label
            element["return"] = "";
            element.value = "";
        }
    }
};
var ignoreFlag = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason";
var isIgnoringComment = function isIgnoringComment(element) {
    return element.type === "comm" && element.children.indexOf(ignoreFlag) > -1;
};
var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
    return function(element, index, children) {
        if (element.type !== "rule" || cache.compat) return;
        var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);
        if (unsafePseudoClasses) {
            var isNested = element.parent === children[0]; // in nested rules comments become children of the "auto-inserted" rule
            //
            // considering this input:
            // .a {
            //   .b /* comm */ {}
            //   color: hotpink;
            // }
            // we get output corresponding to this:
            // .a {
            //   & {
            //     /* comm */
            //     color: hotpink;
            //   }
            //   .b {}
            // }
            var commentContainer = isNested ? children[0].children : children;
            for(var i = commentContainer.length - 1; i >= 0; i--){
                var node = commentContainer[i];
                if (node.line < element.line) break;
                 // it is quite weird but comments are *usually* put at `column: element.column - 1`
                // so we seek *from the end* for the node that is earlier than the rule's `element` and check that
                // this will also match inputs like this:
                // .a {
                //   /* comm */
                //   .b {}
                // }
                //
                // but that is fine
                //
                // it would be the easiest to change the placement of the comment to be the first child of the rule:
                // .a {
                //   .b { /* comm */ }
                // }
                // with such inputs we wouldn't have to search for the comment at all
                // TODO: consider changing this comment placement in the next major version
                if (node.column < element.column) {
                    if (isIgnoringComment(node)) return;
                    break;
                }
            }
            unsafePseudoClasses.forEach(function(unsafePseudoClass) {
                console.error('The pseudo class "' + unsafePseudoClass + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + unsafePseudoClass.split("-child")[0] + '-of-type".');
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
    element.type = "";
    element.value = "";
    element["return"] = "";
    element.children = "";
    element.props = "";
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
/* eslint-disable no-fallthrough */ function prefix(value, length) {
    switch((0, _stylis.hash)(value, length)){
        // color-adjust
        case 5103:
            return (0, _stylis.WEBKIT) + "print-" + value + value;
        // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
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
            return (0, _stylis.WEBKIT) + value + value;
        // appearance, user-select, transform, hyphens, text-size-adjust
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return (0, _stylis.WEBKIT) + value + (0, _stylis.MOZ) + value + (0, _stylis.MS) + value + value;
        // flex, flex-direction
        case 6828:
        case 4268:
            return (0, _stylis.WEBKIT) + value + (0, _stylis.MS) + value + value;
        // order
        case 6165:
            return (0, _stylis.WEBKIT) + value + (0, _stylis.MS) + "flex-" + value + value;
        // align-items
        case 5187:
            return (0, _stylis.WEBKIT) + value + (0, _stylis.replace)(value, /(\w+).+(:[^]+)/, (0, _stylis.WEBKIT) + "box-$1$2" + (0, _stylis.MS) + "flex-$1$2") + value;
        // align-self
        case 5443:
            return (0, _stylis.WEBKIT) + value + (0, _stylis.MS) + "flex-item-" + (0, _stylis.replace)(value, /flex-|-self/, "") + value;
        // align-content
        case 4675:
            return (0, _stylis.WEBKIT) + value + (0, _stylis.MS) + "flex-line-pack" + (0, _stylis.replace)(value, /align-content|flex-|-self/, "") + value;
        // flex-shrink
        case 5548:
            return (0, _stylis.WEBKIT) + value + (0, _stylis.MS) + (0, _stylis.replace)(value, "shrink", "negative") + value;
        // flex-basis
        case 5292:
            return (0, _stylis.WEBKIT) + value + (0, _stylis.MS) + (0, _stylis.replace)(value, "basis", "preferred-size") + value;
        // flex-grow
        case 6060:
            return (0, _stylis.WEBKIT) + "box-" + (0, _stylis.replace)(value, "-grow", "") + (0, _stylis.WEBKIT) + value + (0, _stylis.MS) + (0, _stylis.replace)(value, "grow", "positive") + value;
        // transition
        case 4554:
            return (0, _stylis.WEBKIT) + (0, _stylis.replace)(value, /([^-])(transform)/g, "$1" + (0, _stylis.WEBKIT) + "$2") + value;
        // cursor
        case 6187:
            return (0, _stylis.replace)((0, _stylis.replace)((0, _stylis.replace)(value, /(zoom-|grab)/, (0, _stylis.WEBKIT) + "$1"), /(image-set)/, (0, _stylis.WEBKIT) + "$1"), value, "") + value;
        // background, background-image
        case 5495:
        case 3959:
            return (0, _stylis.replace)(value, /(image-set\([^]*)/, (0, _stylis.WEBKIT) + "$1" + "$`$1");
        // justify-content
        case 4968:
            return (0, _stylis.replace)((0, _stylis.replace)(value, /(.+:)(flex-)?(.*)/, (0, _stylis.WEBKIT) + "box-pack:$3" + (0, _stylis.MS) + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + (0, _stylis.WEBKIT) + value + value;
        // (margin|padding)-inline-(start|end)
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return (0, _stylis.replace)(value, /(.+)-inline(.+)/, (0, _stylis.WEBKIT) + "$1$2") + value;
        // (min|max)?(width|height|inline-size|block-size)
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
            // stretch, max-content, min-content, fill-available
            if ((0, _stylis.strlen)(value) - 1 - length > 6) switch((0, _stylis.charat)(value, length + 1)){
                // (m)ax-content, (m)in-content
                case 109:
                    // -
                    if ((0, _stylis.charat)(value, length + 4) !== 45) break;
                // (f)ill-available, (f)it-content
                case 102:
                    return (0, _stylis.replace)(value, /(.+:)(.+)-([^]+)/, "$1" + (0, _stylis.WEBKIT) + "$2-$3" + "$1" + (0, _stylis.MOZ) + ((0, _stylis.charat)(value, length + 3) == 108 ? "$3" : "$2-$3")) + value;
                // (s)tretch
                case 115:
                    return ~(0, _stylis.indexof)(value, "stretch") ? prefix((0, _stylis.replace)(value, "stretch", "fill-available"), length) + value : value;
            }
            break;
        // position: sticky
        case 4949:
            // (s)ticky?
            if ((0, _stylis.charat)(value, length + 1) !== 115) break;
        // display: (flex|inline-flex)
        case 6444:
            switch((0, _stylis.charat)(value, (0, _stylis.strlen)(value) - 3 - (~(0, _stylis.indexof)(value, "!important") && 10))){
                // stic(k)y
                case 107:
                    return (0, _stylis.replace)(value, ":", ":" + (0, _stylis.WEBKIT)) + value;
                // (inline-)?fl(e)x
                case 101:
                    return (0, _stylis.replace)(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + (0, _stylis.WEBKIT) + ((0, _stylis.charat)(value, 14) === 45 ? "inline-" : "") + "box$3" + "$1" + (0, _stylis.WEBKIT) + "$2$3" + "$1" + (0, _stylis.MS) + "$2box$3") + value;
            }
            break;
        // writing-mode
        case 5936:
            switch((0, _stylis.charat)(value, length + 11)){
                // vertical-l(r)
                case 114:
                    return (0, _stylis.WEBKIT) + value + (0, _stylis.MS) + (0, _stylis.replace)(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
                // vertical-r(l)
                case 108:
                    return (0, _stylis.WEBKIT) + value + (0, _stylis.MS) + (0, _stylis.replace)(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
                // horizontal(-)tb
                case 45:
                    return (0, _stylis.WEBKIT) + value + (0, _stylis.MS) + (0, _stylis.replace)(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
            }
            return (0, _stylis.WEBKIT) + value + (0, _stylis.MS) + value + value;
    }
    return value;
}
var prefixer = function prefixer(element, index, children, callback) {
    if (element.length > -1) {
        if (!element["return"]) switch(element.type){
            case 0, _stylis.DECLARATION:
                element["return"] = prefix(element.value, element.length);
                break;
            case 0, _stylis.KEYFRAMES:
                return (0, _stylis.serialize)([
                    (0, _stylis.copy)(element, {
                        value: (0, _stylis.replace)(element.value, "@", "@" + (0, _stylis.WEBKIT))
                    })
                ], callback);
            case 0, _stylis.RULESET:
                if (element.length) return (0, _stylis.combine)(element.props, function(value) {
                    switch((0, _stylis.match)(value, /(::plac\w+|:read-\w+)/)){
                        // :read-(only|write)
                        case ":read-only":
                        case ":read-write":
                            return (0, _stylis.serialize)([
                                (0, _stylis.copy)(element, {
                                    props: [
                                        (0, _stylis.replace)(value, /:(read-\w+)/, ":" + (0, _stylis.MOZ) + "$1")
                                    ]
                                })
                            ], callback);
                        // :placeholder
                        case "::placeholder":
                            return (0, _stylis.serialize)([
                                (0, _stylis.copy)(element, {
                                    props: [
                                        (0, _stylis.replace)(value, /:(plac\w+)/, ":" + (0, _stylis.WEBKIT) + "input-$1")
                                    ]
                                }),
                                (0, _stylis.copy)(element, {
                                    props: [
                                        (0, _stylis.replace)(value, /:(plac\w+)/, ":" + (0, _stylis.MOZ) + "$1")
                                    ]
                                }),
                                (0, _stylis.copy)(element, {
                                    props: [
                                        (0, _stylis.replace)(value, /:(plac\w+)/, (0, _stylis.MS) + "input-$1")
                                    ]
                                })
                            ], callback);
                    }
                    return "";
                });
        }
    }
};
var defaultStylisPlugins = [
    prefixer
];
var createCache = function createCache(options) {
    var key = options.key;
    if (!key) throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\nIf multiple caches share the same key they might \"fight\" for each other's style elements.");
    if (key === "css") {
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
            var dataEmotionAttribute = node.getAttribute("data-emotion");
            if (dataEmotionAttribute.indexOf(" ") === -1) return;
            document.head.appendChild(node);
            node.setAttribute("data-s", "");
        });
    }
    var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + key + '" was passed');
    var inserted = {};
    var container;
    var nodesToHydrate = [];
    container = options.container || document.head;
    Array.prototype.forEach.call(// means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + key + ' "]'), function(node) {
        var attrib = node.getAttribute("data-emotion").split(" "); // $FlowFixMe
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
        (0, _stylis.stringify),
        function(element) {
            if (!element.root) {
                if (element["return"]) currentSheet.insert(element["return"]);
                else if (element.value && element.type !== (0, _stylis.COMMENT)) // insert empty rule in non-production environments
                // so @emotion/jest can grab `key` from the (JS)DOM for caches without any rules inserted yet
                currentSheet.insert(element.value + "{}");
            }
        }
    ];
    var serializer = (0, _stylis.middleware)(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis(styles) {
        return (0, _stylis.serialize)((0, _stylis.compile)(styles), serializer);
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
        sheet: new (0, _sheet.StyleSheet)({
            key: key,
            container: container,
            nonce: options.nonce,
            speedy: options.speedy,
            prepend: options.prepend,
            insertionPoint: options.insertionPoint
        }),
        nonce: options.nonce,
        inserted: inserted,
        registered: {},
        insert: _insert
    };
    cache.sheet.hydrate(nodesToHydrate);
    return cache;
};
exports.default = createCache;

},{"@emotion/sheet":"1BWeq","stylis":"bMCXt","@emotion/weak-memoize":"grJxk","@emotion/memoize":"2vzJd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1BWeq":[function(require,module,exports) {
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
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StyleSheet", ()=>StyleSheet);
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
    var tag = document.createElement("style");
    tag.setAttribute("data-emotion", options.key);
    if (options.nonce !== undefined) tag.setAttribute("nonce", options.nonce);
    tag.appendChild(document.createTextNode(""));
    tag.setAttribute("data-s", "");
    return tag;
}
var StyleSheet = /*#__PURE__*/ function() {
    // Using Node instead of HTMLElement since container may be a ShadowRoot
    function StyleSheet(options) {
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
    var _proto = StyleSheet.prototype;
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
        console.error("You're attempting to insert the following rule:\n" + rule + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.");
        this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule;
        if (this.isSpeedy) {
            var sheet = sheetForTag(tag);
            try {
                // this is the ultrafast version, works across browsers
                // the big drawback is that the css won't be editable in devtools
                sheet.insertRule(rule, sheet.cssRules.length);
            } catch (e) {
                if (!/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(rule)) console.error('There was a problem inserting the following rule: "' + rule + '"', e);
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
    return StyleSheet;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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
parcelHelpers.export(exports, "CHARSET", ()=>f);
parcelHelpers.export(exports, "COMMENT", ()=>n);
parcelHelpers.export(exports, "COUNTER_STYLE", ()=>w);
parcelHelpers.export(exports, "DECLARATION", ()=>s);
parcelHelpers.export(exports, "DOCUMENT", ()=>v);
parcelHelpers.export(exports, "FONT_FACE", ()=>b);
parcelHelpers.export(exports, "FONT_FEATURE_VALUES", ()=>d);
parcelHelpers.export(exports, "IMPORT", ()=>i);
parcelHelpers.export(exports, "KEYFRAMES", ()=>h);
parcelHelpers.export(exports, "MEDIA", ()=>u);
parcelHelpers.export(exports, "MOZ", ()=>r);
parcelHelpers.export(exports, "MS", ()=>e);
parcelHelpers.export(exports, "NAMESPACE", ()=>p);
parcelHelpers.export(exports, "PAGE", ()=>t);
parcelHelpers.export(exports, "RULESET", ()=>c);
parcelHelpers.export(exports, "SUPPORTS", ()=>l);
parcelHelpers.export(exports, "VIEWPORT", ()=>o);
parcelHelpers.export(exports, "WEBKIT", ()=>a);
parcelHelpers.export(exports, "abs", ()=>$);
parcelHelpers.export(exports, "alloc", ()=>U);
parcelHelpers.export(exports, "append", ()=>S);
parcelHelpers.export(exports, "assign", ()=>g);
parcelHelpers.export(exports, "caret", ()=>Q);
parcelHelpers.export(exports, "char", ()=>K);
parcelHelpers.export(exports, "character", ()=>G);
parcelHelpers.export(exports, "characters", ()=>H);
parcelHelpers.export(exports, "charat", ()=>C);
parcelHelpers.export(exports, "column", ()=>D);
parcelHelpers.export(exports, "combine", ()=>q);
parcelHelpers.export(exports, "comment", ()=>te);
parcelHelpers.export(exports, "commenter", ()=>re);
parcelHelpers.export(exports, "compile", ()=>ne);
parcelHelpers.export(exports, "copy", ()=>J);
parcelHelpers.export(exports, "dealloc", ()=>V);
parcelHelpers.export(exports, "declaration", ()=>ue);
parcelHelpers.export(exports, "delimit", ()=>W);
parcelHelpers.export(exports, "delimiter", ()=>ee);
parcelHelpers.export(exports, "escaping", ()=>_);
parcelHelpers.export(exports, "from", ()=>k);
parcelHelpers.export(exports, "hash", ()=>m);
parcelHelpers.export(exports, "identifier", ()=>ae);
parcelHelpers.export(exports, "indexof", ()=>z);
parcelHelpers.export(exports, "length", ()=>E);
parcelHelpers.export(exports, "line", ()=>B);
parcelHelpers.export(exports, "match", ()=>y);
parcelHelpers.export(exports, "middleware", ()=>le);
parcelHelpers.export(exports, "namespace", ()=>he);
parcelHelpers.export(exports, "next", ()=>N);
parcelHelpers.export(exports, "node", ()=>I);
parcelHelpers.export(exports, "parse", ()=>ce);
parcelHelpers.export(exports, "peek", ()=>P);
parcelHelpers.export(exports, "position", ()=>F);
parcelHelpers.export(exports, "prefix", ()=>ie);
parcelHelpers.export(exports, "prefixer", ()=>pe);
parcelHelpers.export(exports, "prev", ()=>L);
parcelHelpers.export(exports, "replace", ()=>j);
parcelHelpers.export(exports, "ruleset", ()=>se);
parcelHelpers.export(exports, "rulesheet", ()=>ve);
parcelHelpers.export(exports, "serialize", ()=>fe);
parcelHelpers.export(exports, "sizeof", ()=>M);
parcelHelpers.export(exports, "slice", ()=>R);
parcelHelpers.export(exports, "stringify", ()=>oe);
parcelHelpers.export(exports, "strlen", ()=>A);
parcelHelpers.export(exports, "substr", ()=>O);
parcelHelpers.export(exports, "token", ()=>T);
parcelHelpers.export(exports, "tokenize", ()=>X);
parcelHelpers.export(exports, "tokenizer", ()=>Z);
parcelHelpers.export(exports, "trim", ()=>x);
parcelHelpers.export(exports, "whitespace", ()=>Y);
var e = "-ms-";
var r = "-moz-";
var a = "-webkit-";
var n = "comm";
var c = "rule";
var s = "decl";
var t = "@page";
var u = "@media";
var i = "@import";
var f = "@charset";
var o = "@viewport";
var l = "@supports";
var v = "@document";
var p = "@namespace";
var h = "@keyframes";
var b = "@font-face";
var w = "@counter-style";
var d = "@font-feature-values";
var $ = Math.abs;
var k = String.fromCharCode;
var g = Object.assign;
function m(e, r) {
    return C(e, 0) ^ 45 ? (((r << 2 ^ C(e, 0)) << 2 ^ C(e, 1)) << 2 ^ C(e, 2)) << 2 ^ C(e, 3) : 0;
}
function x(e) {
    return e.trim();
}
function y(e, r) {
    return (e = r.exec(e)) ? e[0] : e;
}
function j(e, r, a) {
    return e.replace(r, a);
}
function z(e, r) {
    return e.indexOf(r);
}
function C(e, r) {
    return e.charCodeAt(r) | 0;
}
function O(e, r, a) {
    return e.slice(r, a);
}
function A(e) {
    return e.length;
}
function M(e) {
    return e.length;
}
function S(e, r) {
    return r.push(e), e;
}
function q(e, r) {
    return e.map(r).join("");
}
var B = 1;
var D = 1;
var E = 0;
var F = 0;
var G = 0;
var H = "";
function I(e, r, a, n, c, s, t) {
    return {
        value: e,
        root: r,
        parent: a,
        type: n,
        props: c,
        children: s,
        line: B,
        column: D,
        length: t,
        return: ""
    };
}
function J(e, r) {
    return g(I("", null, null, "", null, null, 0), e, {
        length: -e.length
    }, r);
}
function K() {
    return G;
}
function L() {
    G = F > 0 ? C(H, --F) : 0;
    if (D--, G === 10) D = 1, B--;
    return G;
}
function N() {
    G = F < E ? C(H, F++) : 0;
    if (D++, G === 10) D = 1, B++;
    return G;
}
function P() {
    return C(H, F);
}
function Q() {
    return F;
}
function R(e, r) {
    return O(H, e, r);
}
function T(e) {
    switch(e){
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
function U(e) {
    return B = D = 1, E = A(H = e), F = 0, [];
}
function V(e) {
    return H = "", e;
}
function W(e) {
    return x(R(F - 1, ee(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function X(e) {
    return V(Z(U(e)));
}
function Y(e) {
    while(G = P())if (G < 33) N();
    else break;
    return T(e) > 2 || T(G) > 3 ? "" : " ";
}
function Z(e) {
    while(N())switch(T(G)){
        case 0:
            S(ae(F - 1), e);
            break;
        case 2:
            S(W(G), e);
            break;
        default:
            S(k(G), e);
    }
    return e;
}
function _(e, r) {
    while(--r && N())if (G < 48 || G > 102 || G > 57 && G < 65 || G > 70 && G < 97) break;
    return R(e, Q() + (r < 6 && P() == 32 && N() == 32));
}
function ee(e) {
    while(N())switch(G){
        case e:
            return F;
        case 34:
        case 39:
            if (e !== 34 && e !== 39) ee(G);
            break;
        case 40:
            if (e === 41) ee(e);
            break;
        case 92:
            N();
            break;
    }
    return F;
}
function re(e, r) {
    while(N())if (e + G === 57) break;
    else if (e + G === 84 && P() === 47) break;
    return "/*" + R(r, F - 1) + "*" + k(e === 47 ? e : N());
}
function ae(e) {
    while(!T(P()))N();
    return R(e, F);
}
function ne(e) {
    return V(ce("", null, null, null, [
        ""
    ], e = U(e), 0, [
        0
    ], e));
}
function ce(e, r, a, n, c, s, t, u, i) {
    var f = 0;
    var o = 0;
    var l = t;
    var v = 0;
    var p = 0;
    var h = 0;
    var b = 1;
    var w = 1;
    var d = 1;
    var $ = 0;
    var g = "";
    var m = c;
    var x = s;
    var y = n;
    var O = g;
    while(w)switch(h = $, $ = N()){
        case 40:
            if (h != 108 && C(O, l - 1) == 58) {
                if (z(O += j(W($), "&", "&\f"), "&\f") != -1) d = -1;
                break;
            }
        case 34:
        case 39:
        case 91:
            O += W($);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            O += Y(h);
            break;
        case 92:
            O += _(Q() - 1, 7);
            continue;
        case 47:
            switch(P()){
                case 42:
                case 47:
                    S(te(re(N(), Q()), r, a), i);
                    break;
                default:
                    O += "/";
            }
            break;
        case 123 * b:
            u[f++] = A(O) * d;
        case 125 * b:
        case 59:
        case 0:
            switch($){
                case 0:
                case 125:
                    w = 0;
                case 59 + o:
                    if (p > 0 && A(O) - l) S(p > 32 ? ue(O + ";", n, a, l - 1) : ue(j(O, " ", "") + ";", n, a, l - 2), i);
                    break;
                case 59:
                    O += ";";
                default:
                    S(y = se(O, r, a, f, o, c, u, g, m = [], x = [], l), s);
                    if ($ === 123) {
                        if (o === 0) ce(O, r, y, y, m, s, l, u, x);
                        else switch(v === 99 && C(O, 3) === 110 ? 100 : v){
                            case 100:
                            case 109:
                            case 115:
                                ce(e, y, y, n && S(se(e, y, y, 0, 0, c, u, g, c, m = [], l), x), c, x, l, u, n ? m : x);
                                break;
                            default:
                                ce(O, y, y, y, [
                                    ""
                                ], x, 0, u, x);
                        }
                    }
            }
            f = o = p = 0, b = d = 1, g = O = "", l = t;
            break;
        case 58:
            l = 1 + A(O), p = h;
        default:
            if (b < 1) {
                if ($ == 123) --b;
                else if ($ == 125 && b++ == 0 && L() == 125) continue;
            }
            switch(O += k($), $ * b){
                case 38:
                    d = o > 0 ? 1 : (O += "\f", -1);
                    break;
                case 44:
                    u[f++] = (A(O) - 1) * d, d = 1;
                    break;
                case 64:
                    if (P() === 45) O += W(N());
                    v = P(), o = l = A(g = O += ae(Q())), $++;
                    break;
                case 45:
                    if (h === 45 && A(O) == 2) b = 0;
            }
    }
    return s;
}
function se(e, r, a, n, s, t, u, i, f, o, l) {
    var v = s - 1;
    var p = s === 0 ? t : [
        ""
    ];
    var h = M(p);
    for(var b = 0, w = 0, d = 0; b < n; ++b)for(var k = 0, g = O(e, v + 1, v = $(w = u[b])), m = e; k < h; ++k)if (m = x(w > 0 ? p[k] + " " + g : j(g, /&\f/g, p[k]))) f[d++] = m;
    return I(e, r, a, s === 0 ? c : i, f, o, l);
}
function te(e, r, a) {
    return I(e, r, a, n, k(K()), O(e, 2, -2), 0);
}
function ue(e, r, a, n) {
    return I(e, r, a, s, O(e, 0, n), O(e, n + 1, -1), n);
}
function ie(n, c, s) {
    switch(m(n, c)){
        case 5103:
            return a + "print-" + n + n;
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
            return a + n + n;
        case 4789:
            return r + n + n;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return a + n + r + n + e + n + n;
        case 5936:
            switch(C(n, c + 11)){
                case 114:
                    return a + n + e + j(n, /[svh]\w+-[tblr]{2}/, "tb") + n;
                case 108:
                    return a + n + e + j(n, /[svh]\w+-[tblr]{2}/, "tb-rl") + n;
                case 45:
                    return a + n + e + j(n, /[svh]\w+-[tblr]{2}/, "lr") + n;
            }
        case 6828:
        case 4268:
        case 2903:
            return a + n + e + n + n;
        case 6165:
            return a + n + e + "flex-" + n + n;
        case 5187:
            return a + n + j(n, /(\w+).+(:[^]+)/, a + "box-$1$2" + e + "flex-$1$2") + n;
        case 5443:
            return a + n + e + "flex-item-" + j(n, /flex-|-self/g, "") + (!y(n, /flex-|baseline/) ? e + "grid-row-" + j(n, /flex-|-self/g, "") : "") + n;
        case 4675:
            return a + n + e + "flex-line-pack" + j(n, /align-content|flex-|-self/g, "") + n;
        case 5548:
            return a + n + e + j(n, "shrink", "negative") + n;
        case 5292:
            return a + n + e + j(n, "basis", "preferred-size") + n;
        case 6060:
            return a + "box-" + j(n, "-grow", "") + a + n + e + j(n, "grow", "positive") + n;
        case 4554:
            return a + j(n, /([^-])(transform)/g, "$1" + a + "$2") + n;
        case 6187:
            return j(j(j(n, /(zoom-|grab)/, a + "$1"), /(image-set)/, a + "$1"), n, "") + n;
        case 5495:
        case 3959:
            return j(n, /(image-set\([^]*)/, a + "$1" + "$`$1");
        case 4968:
            return j(j(n, /(.+:)(flex-)?(.*)/, a + "box-pack:$3" + e + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + a + n + n;
        case 4200:
            if (!y(n, /flex-|baseline/)) return e + "grid-column-align" + O(n, c) + n;
            break;
        case 2592:
        case 3360:
            return e + j(n, "template-", "") + n;
        case 4384:
        case 3616:
            if (s && s.some(function(e, r) {
                return c = r, y(e.props, /grid-\w+-end/);
            })) return ~z(n + (s = s[c].value), "span") ? n : e + j(n, "-start", "") + n + e + "grid-row-span:" + (~z(s, "span") ? y(s, /\d+/) : +y(s, /\d+/) - +y(n, /\d+/)) + ";";
            return e + j(n, "-start", "") + n;
        case 4896:
        case 4128:
            return s && s.some(function(e) {
                return y(e.props, /grid-\w+-start/);
            }) ? n : e + j(j(n, "-end", "-span"), "span ", "") + n;
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return j(n, /(.+)-inline(.+)/, a + "$1$2") + n;
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
            if (A(n) - 1 - c > 6) switch(C(n, c + 1)){
                case 109:
                    if (C(n, c + 4) !== 45) break;
                case 102:
                    return j(n, /(.+:)(.+)-([^]+)/, "$1" + a + "$2-$3" + "$1" + r + (C(n, c + 3) == 108 ? "$3" : "$2-$3")) + n;
                case 115:
                    return ~z(n, "stretch") ? ie(j(n, "stretch", "fill-available"), c, s) + n : n;
            }
            break;
        case 5152:
        case 5920:
            return j(n, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, a, c, s, t, u, i) {
                return e + a + ":" + c + i + (s ? e + a + "-span:" + (t ? u : +u - +c) + i : "") + n;
            });
        case 4949:
            if (C(n, c + 6) === 121) return j(n, ":", ":" + a) + n;
            break;
        case 6444:
            switch(C(n, C(n, 14) === 45 ? 18 : 11)){
                case 120:
                    return j(n, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + a + (C(n, 14) === 45 ? "inline-" : "") + "box$3" + "$1" + a + "$2$3" + "$1" + e + "$2box$3") + n;
                case 100:
                    return j(n, ":", ":" + e) + n;
            }
            break;
        case 5719:
        case 2647:
        case 2135:
        case 3927:
        case 2391:
            return j(n, "scroll-", "scroll-snap-") + n;
    }
    return n;
}
function fe(e, r) {
    var a = "";
    var n = M(e);
    for(var c = 0; c < n; c++)a += r(e[c], c, e, r) || "";
    return a;
}
function oe(e, r, a, t) {
    switch(e.type){
        case i:
        case s:
            return e.return = e.return || e.value;
        case n:
            return "";
        case h:
            return e.return = e.value + "{" + fe(e.children, t) + "}";
        case c:
            e.value = e.props.join(",");
    }
    return A(a = fe(e.children, t)) ? e.return = e.value + "{" + a + "}" : "";
}
function le(e) {
    var r = M(e);
    return function(a, n, c, s) {
        var t = "";
        for(var u = 0; u < r; u++)t += e[u](a, n, c, s) || "";
        return t;
    };
}
function ve(e) {
    return function(r) {
        if (!r.root) {
            if (r = r.return) e(r);
        }
    };
}
function pe(n, t, u, i) {
    if (n.length > -1) {
        if (!n.return) switch(n.type){
            case s:
                n.return = ie(n.value, n.length, u);
                return;
            case h:
                return fe([
                    J(n, {
                        value: j(n.value, "@", "@" + a)
                    })
                ], i);
            case c:
                if (n.length) return q(n.props, function(c) {
                    switch(y(c, /(::plac\w+|:read-\w+)/)){
                        case ":read-only":
                        case ":read-write":
                            return fe([
                                J(n, {
                                    props: [
                                        j(c, /:(read-\w+)/, ":" + r + "$1")
                                    ]
                                })
                            ], i);
                        case "::placeholder":
                            return fe([
                                J(n, {
                                    props: [
                                        j(c, /:(plac\w+)/, ":" + a + "input-$1")
                                    ]
                                }),
                                J(n, {
                                    props: [
                                        j(c, /:(plac\w+)/, ":" + r + "$1")
                                    ]
                                }),
                                J(n, {
                                    props: [
                                        j(c, /:(plac\w+)/, e + "input-$1")
                                    ]
                                })
                            ], i);
                    }
                    return "";
                });
        }
    }
}
function he(e) {
    switch(e.type){
        case c:
            e.props = e.props.map(function(r) {
                return q(X(r), function(r, a, n) {
                    switch(C(r, 0)){
                        case 12:
                            return O(r, 1, A(r));
                        case 0:
                        case 40:
                        case 43:
                        case 62:
                        case 126:
                            return r;
                        case 58:
                            if (n[++a] === "global") n[a] = "", n[++a] = "\f" + O(n[a], a = 1, -1);
                        case 32:
                            return a === 1 ? "" : r;
                        default:
                            switch(a){
                                case 0:
                                    e = r;
                                    return M(n) > 1 ? "" : r;
                                case a = M(n) - 1:
                                case 2:
                                    return a === 2 ? r + e + e : r + e;
                                default:
                                    return r;
                            }
                    }
                });
            });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"grJxk":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2vzJd":[function(require,module,exports) {
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
parcelHelpers.export(exports, "serializeStyles", ()=>serializeStyles);
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
    return value != null && typeof value !== "boolean";
};
var processStyleName = /* #__PURE__ */ (0, _memoizeDefault.default)(function(styleName) {
    return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue(key, value) {
    switch(key){
        case "animation":
        case "animationName":
            if (typeof value === "string") return value.replace(animationRegex, function(match, p1, p2) {
                cursor = {
                    name: p1,
                    styles: p2,
                    next: cursor
                };
                return p1;
            });
    }
    if ((0, _unitlessDefault.default)[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) return value + "px";
    return value;
};
var contentValuePattern = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
var contentValues = [
    "normal",
    "none",
    "initial",
    "inherit",
    "unset"
];
var oldProcessStyleValue = processStyleValue;
var msPattern = /^-ms-/;
var hyphenPattern = /-(.)/g;
var hyphenatedCache = {};
processStyleValue = function processStyleValue(key, value) {
    if (key === "content") {
        if (typeof value !== "string" || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
    }
    var processed = oldProcessStyleValue(key, value);
    if (processed !== "" && !isCustomProperty(key) && key.indexOf("-") !== -1 && hyphenatedCache[key] === undefined) {
        hyphenatedCache[key] = true;
        console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, "ms-").replace(hyphenPattern, function(str, _char) {
            return _char.toUpperCase();
        }) + "?");
    }
    return processed;
};
var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function handleInterpolation(mergedProps, registered, interpolation) {
    if (interpolation == null) return "";
    if (interpolation.__emotion_styles !== undefined) {
        if (interpolation.toString() === "NO_COMPONENT_SELECTOR") throw new Error(noComponentSelectorMessage);
        return interpolation;
    }
    switch(typeof interpolation){
        case "boolean":
            return "";
        case "object":
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
        case "function":
            if (mergedProps !== undefined) {
                var previousCursor = cursor;
                var result = interpolation(mergedProps);
                cursor = previousCursor;
                return handleInterpolation(mergedProps, registered, result);
            } else console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
            break;
        case "string":
            var matched = [];
            var replaced = interpolation.replace(animationRegex, function(match, p1, p2) {
                var fakeVarName = "animation" + matched.length;
                matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, "") + "`");
                return "${" + fakeVarName + "}";
            });
            if (matched.length) console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(matched, [
                "`" + replaced + "`"
            ]).join("\n") + "\n\nYou should wrap it with `css` like this:\n\n" + ("css`" + replaced + "`"));
            break;
    } // finalize string values (regular strings and functions interpolated into css calls)
    if (registered == null) return interpolation;
    var cached = registered[interpolation];
    return cached !== undefined ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
    var string = "";
    if (Array.isArray(obj)) for(var i = 0; i < obj.length; i++)string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    else for(var _key in obj){
        var value = obj[_key];
        if (typeof value !== "object") {
            if (registered != null && registered[value] !== undefined) string += _key + "{" + registered[value] + "}";
            else if (isProcessableValue(value)) string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        } else {
            if (_key === "NO_COMPONENT_SELECTOR" && true) throw new Error(noComponentSelectorMessage);
            if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === undefined)) {
                for(var _i = 0; _i < value.length; _i++)if (isProcessableValue(value[_i])) string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            } else {
                var interpolated = handleInterpolation(mergedProps, registered, value);
                switch(_key){
                    case "animation":
                    case "animationName":
                        string += processStyleName(_key) + ":" + interpolated + ";";
                        break;
                    default:
                        if (_key === "undefined") console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
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
    if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== undefined) return args[0];
    var stringMode = true;
    var styles = "";
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
        return "";
    });
    labelPattern.lastIndex = 0;
    var identifierName = "";
    var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5
    while((match = labelPattern.exec(styles)) !== null)identifierName += "-" + // $FlowFixMe we know it's not null
    match[1];
    var name = (0, _hashDefault.default)(styles) + identifierName;
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

},{"@emotion/hash":"clggK","@emotion/unitless":"2Tu84","@emotion/memoize":"2vzJd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"clggK":[function(require,module,exports) {
/* eslint-disable */ // Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function murmur2(str) {
    // 'm' and 'r' are mixing constants generated offline.
    // They're not really 'magic', they just happen to work well.
    // const m = 0x5bd1e995;
    // const r = 24;
    // Initialize the hash
    var h = 0; // Mix 4 bytes at a time into the hash
    var k, i = 0, len = str.length;
    for(; len >= 4; ++i, len -= 4){
        k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
        k = /* Math.imul(k, m): */ (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
        k ^= /* k >>> r: */ k >>> 24;
        h = /* Math.imul(k, m): */ (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^ /* Math.imul(h, m): */ (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Handle the last few bytes of the input array
    switch(len){
        case 3:
            h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
        case 2:
            h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
        case 1:
            h ^= str.charCodeAt(i) & 0xff;
            h = /* Math.imul(h, m): */ (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Do a few final mixes of the hash to ensure the last few
    // bytes are well-incorporated.
    h ^= h >>> 13;
    h = /* Math.imul(h, m): */ (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    return ((h ^ h >>> 15) >>> 0).toString(36);
}
exports.default = murmur2;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Tu84":[function(require,module,exports) {
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
parcelHelpers.export(exports, "getRegisteredStyles", ()=>getRegisteredStyles);
parcelHelpers.export(exports, "insertStyles", ()=>insertStyles);
parcelHelpers.export(exports, "registerStyles", ()=>registerStyles);
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames) {
    var rawClassName = "";
    classNames.split(" ").forEach(function(className) {
        if (registered[className] !== undefined) registeredStyles.push(registered[className] + ";");
        else rawClassName += className + " ";
    });
    return rawClassName;
}
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
    var className = cache.key + "-" + serialized.name;
    if (// class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false || // we need to always store it if we're in compat mode and
    // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser === false) && cache.registered[className] === undefined) cache.registered[className] = serialized.styles;
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
    registerStyles(cache, serialized, isStringTag);
    var className = cache.key + "-" + serialized.name;
    if (cache.inserted[serialized.name] === undefined) {
        var current = serialized;
        do {
            var maybeStyles = cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
            current = current.next;
        }while (current !== undefined);
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
    if (cache.inserted[serialized.name] === undefined) return cache.insert("", serialized, cache.sheet, true);
}
function merge(registered, css, className) {
    var registeredStyles = [];
    var rawClassName = (0, _utils.getRegisteredStyles)(registered, registeredStyles, className);
    if (registeredStyles.length < 2) return className;
    return rawClassName + css(registeredStyles);
}
var createEmotion = function createEmotion(options) {
    var cache = (0, _cacheDefault.default)(options); // $FlowFixMe
    cache.sheet.speedy = function(value) {
        if (this.ctr !== 0) throw new Error("speedy must be changed before any rules are inserted");
        this.isSpeedy = value;
    };
    cache.compat = true;
    var css = function css() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        var serialized = (0, _serialize.serializeStyles)(args, cache.registered, undefined);
        (0, _utils.insertStyles)(cache, serialized, false);
        return cache.key + "-" + serialized.name;
    };
    var keyframes = function keyframes() {
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
        var serialized = (0, _serialize.serializeStyles)(args, cache.registered);
        var animation = "animation-" + serialized.name;
        insertWithoutScoping(cache, {
            name: serialized.name,
            styles: "@keyframes " + animation + "{" + serialized.styles + "}"
        });
        return animation;
    };
    var injectGlobal = function injectGlobal() {
        for(var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++)args[_key3] = arguments[_key3];
        var serialized = (0, _serialize.serializeStyles)(args, cache.registered);
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
            cache.registered = {};
            cache.inserted = {};
            cache.sheet.flush();
        },
        // $FlowFixMe
        sheet: cache.sheet,
        cache: cache,
        getRegisteredStyles: (0, _utils.getRegisteredStyles).bind(null, cache.registered),
        merge: merge.bind(null, cache.registered, css)
    };
};
var classnames = function classnames(args) {
    var cls = "";
    for(var i = 0; i < args.length; i++){
        var arg = args[i];
        if (arg == null) continue;
        var toAdd = void 0;
        switch(typeof arg){
            case "boolean":
                break;
            case "object":
                if (Array.isArray(arg)) toAdd = classnames(arg);
                else {
                    toAdd = "";
                    for(var k in arg)if (arg[k] && k) {
                        toAdd && (toAdd += " ");
                        toAdd += k;
                    }
                }
                break;
            default:
                toAdd = arg;
        }
        if (toAdd) {
            cls && (cls += " ");
            cls += toAdd;
        }
    }
    return cls;
};
exports.default = createEmotion;

},{"@emotion/cache":"3Umtj","@emotion/serialize":"kS2E2","@emotion/utils":"6UI8e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9caa5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "lift", ()=>lift);
const lift = ({ level =3 , shadowColor ="rgb(0, 0, 0, 50%)"  })=>{
    if (level < 0 || level > 5) level = 0;
    const boxShadow = [
        `0 0 0 0 ${shadowColor}`,
        `0 1px 3px 0 ${shadowColor}`,
        `0 2px 5px 0 ${shadowColor}`,
        `0 4px 9px 0 ${shadowColor}`,
        `0 8px 17px 0 ${shadowColor}`,
        `0 16px 33px 0 ${shadowColor}`
    ];
    return `box-shadow: ${boxShadow[level]};`.trim();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["9SDp2","dMIWn"], "dMIWn", "parcelRequirefd77")

//# sourceMappingURL=lift.js.map
