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
})({"iPn5k":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "6894d5bba8b0ed70";
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

},{}],"4Nf4r":[function(require,module,exports) {
var _gadjetBundleJs = require("gadjet/dist/module/gadjet.bundle.js");
class MyTag extends (0, _gadjetBundleJs.Tag) {
}
MyTag.define("my-tag");
(0, _gadjetBundleJs.TagX).define("el-tagx");
(0, _gadjetBundleJs.addStyle)`
.preview {
    > * {
        margin: 1rem;
        font-size: 1.5rem;
    }
}
`;

},{"gadjet/dist/module/gadjet.bundle.js":"irIcA"}],"irIcA":[function(require,module,exports) {
function e(e, t) {
    return Object.keys(t).forEach(function(n) {
        "default" === n || "__esModule" === n || e.hasOwnProperty(n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: function() {
                return t[n];
            }
        });
    }), e;
}
function t(e, t, n, r) {
    Object.defineProperty(e, t, {
        get: n,
        set: r,
        enumerable: !0,
        configurable: !0
    });
}
function n(e) {
    return e && e.__esModule ? e.default : e;
}
var r = {};
t(r, "define", ()=>Ee), t(r, "Badge", ()=>bt), t(r, "BoxArrow", ()=>gn), t(r, "Button", ()=>bn), t(r, "ButtonGroup", ()=>vn), t(r, "ButtonPin", ()=>xn), t(r, "ButtonSquare", ()=>$n), t(r, "Card", ()=>Cn), t(r, "Checkbox", ()=>An), t(r, "Input", ()=>Ln), t(r, "InputDate", ()=>zn), t(r, "InputNumber", ()=>Tn), t(r, "InputNumberCenter", ()=>jn), t(r, "InputRadio", ()=>qn), t(r, "InputTag", ()=>Bn), t(r, "Menu", ()=>Un), t(r, "ProgressBar", ()=>vs), t(r, "ProgressCircle", ()=>xs), t(r, "Sidebar", ()=>$s), t(r, "Switch", ()=>Cs), t(r, "Tab", ()=>As), t(r, "Table", ()=>Ls), t(r, "Tag", ()=>Pn), t(r, "TagX", ()=>Dn);
var s = {};
t(s, "addStyle", ()=>Le), t(s, "aspectRatio", ()=>Te), t(s, "bgColor", ()=>dt), t(s, "bgColorInt", ()=>pt), t(s, "fontFluid", ()=>ft), t(s, "lift", ()=>gt);
var i = function() {
    function e(e) {
        var t = this;
        this._insertTag = function(e) {
            var n;
            n = 0 === t.tags.length ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling, t.container.insertBefore(e, n), t.tags.push(e);
        }, this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.insertionPoint = e.insertionPoint, this.before = null;
    }
    var t = e.prototype;
    return t.hydrate = function(e) {
        e.forEach(this._insertTag);
    }, t.insert = function(e) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(function(e) {
            var t = document.createElement("style");
            return t.setAttribute("data-emotion", e.key), void 0 !== e.nonce && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
        }(this));
        var t = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
            var n = function(e) {
                if (e.sheet) return e.sheet;
                for(var t = 0; t < document.styleSheets.length; t++)if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
            }(t);
            try {
                n.insertRule(e, n.cssRules.length);
            } catch (e1) {}
        } else t.appendChild(document.createTextNode(e));
        this.ctr++;
    }, t.flush = function() {
        this.tags.forEach(function(e) {
            return e.parentNode && e.parentNode.removeChild(e);
        }), this.tags = [], this.ctr = 0;
    }, e;
}(), a = "-ms-", o = "-moz-", l = "-webkit-", c = "comm", u = "rule", h = "decl", d = "@keyframes", p = Math.abs, f = String.fromCharCode, g = Object.assign;
function m(e, t) {
    return 45 ^ x(e, 0) ? (((t << 2 ^ x(e, 0)) << 2 ^ x(e, 1)) << 2 ^ x(e, 2)) << 2 ^ x(e, 3) : 0;
}
function b(e) {
    return e.trim();
}
function y(e, t) {
    return (e = t.exec(e)) ? e[0] : e;
}
function v(e, t, n) {
    return e.replace(t, n);
}
function w(e, t) {
    return e.indexOf(t);
}
function x(e, t) {
    return 0 | e.charCodeAt(t);
}
function k(e, t, n) {
    return e.slice(t, n);
}
function $(e) {
    return e.length;
}
function S(e) {
    return e.length;
}
function C(e, t) {
    return t.push(e), e;
}
function _(e, t) {
    return e.map(t).join("");
}
var A = 1, M = 1, L = 0, E = 0, z = 0, N = "";
function T(e, t, n, r, s, i, a) {
    return {
        value: e,
        root: t,
        parent: n,
        type: r,
        props: s,
        children: i,
        line: A,
        column: M,
        length: a,
        return: ""
    };
}
function R(e, t) {
    return g(T("", null, null, "", null, null, 0), e, {
        length: -e.length
    }, t);
}
function j() {
    return z = E < L ? x(N, E++) : 0, M++, 10 === z && (M = 1, A++), z;
}
function O() {
    return x(N, E);
}
function q() {
    return E;
}
function I(e, t) {
    return k(N, e, t);
}
function W(e) {
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
function P(e) {
    return A = M = 1, L = $(N = e), E = 0, [];
}
function H(e) {
    return N = "", e;
}
function D(e) {
    return b(I(E - 1, G(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
}
function F(e) {
    for(; (z = O()) && z < 33;)j();
    return W(e) > 2 || W(z) > 3 ? "" : " ";
}
function B(e, t) {
    for(; --t && j() && !(z < 48 || z > 102 || z > 57 && z < 65 || z > 70 && z < 97););
    return I(e, q() + (t < 6 && 32 == O() && 32 == j()));
}
function G(e) {
    for(; j();)switch(z){
        case e:
            return E;
        case 34:
        case 39:
            34 !== e && 39 !== e && G(z);
            break;
        case 40:
            41 === e && G(e);
            break;
        case 92:
            j();
    }
    return E;
}
function U(e, t) {
    for(; j() && e + z !== 57 && (e + z !== 84 || 47 !== O()););
    return "/*" + I(t, E - 1) + "*" + f(47 === e ? e : j());
}
function Z(e) {
    for(; !W(O());)j();
    return I(e, E);
}
function V(e) {
    return H(Q("", null, null, null, [
        ""
    ], e = P(e), 0, [
        0
    ], e));
}
function Q(e, t, n, r, s, i, a, o, l) {
    for(var c = 0, u = 0, h = a, d = 0, p = 0, g = 0, m = 1, b = 1, y = 1, k = 0, S = "", _ = s, L = i, T = r, R = S; b;)switch(g = k, k = j()){
        case 40:
            if (108 != g && 58 == x(R, h - 1)) {
                -1 != w(R += v(D(k), "&", "&\f"), "&\f") && (y = -1);
                break;
            }
        case 34:
        case 39:
        case 91:
            R += D(k);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            R += F(g);
            break;
        case 92:
            R += B(q() - 1, 7);
            continue;
        case 47:
            switch(O()){
                case 42:
                case 47:
                    C(J(U(j(), q()), t, n), l);
                    break;
                default:
                    R += "/";
            }
            break;
        case 123 * m:
            o[c++] = $(R) * y;
        case 125 * m:
        case 59:
        case 0:
            switch(k){
                case 0:
                case 125:
                    b = 0;
                case 59 + u:
                    p > 0 && $(R) - h && C(p > 32 ? Y(R + ";", r, n, h - 1) : Y(v(R, " ", "") + ";", r, n, h - 2), l);
                    break;
                case 59:
                    R += ";";
                default:
                    if (C(T = X(R, t, n, c, u, s, o, S, _ = [], L = [], h), i), 123 === k) {
                        if (0 === u) Q(R, t, T, T, _, i, h, o, L);
                        else switch(99 === d && 110 === x(R, 3) ? 100 : d){
                            case 100:
                            case 109:
                            case 115:
                                Q(e, T, T, r && C(X(e, T, T, 0, 0, s, o, S, s, _ = [], h), L), s, L, h, o, r ? _ : L);
                                break;
                            default:
                                Q(R, T, T, T, [
                                    ""
                                ], L, 0, o, L);
                        }
                    }
            }
            c = u = p = 0, m = y = 1, S = R = "", h = a;
            break;
        case 58:
            h = 1 + $(R), p = g;
        default:
            if (m < 1) {
                if (123 == k) --m;
                else if (125 == k && 0 == m++ && 125 == (z = E > 0 ? x(N, --E) : 0, M--, 10 === z && (M = 1, A--), z)) continue;
            }
            switch(R += f(k), k * m){
                case 38:
                    y = u > 0 ? 1 : (R += "\f", -1);
                    break;
                case 44:
                    o[c++] = ($(R) - 1) * y, y = 1;
                    break;
                case 64:
                    45 === O() && (R += D(j())), d = O(), u = h = $(S = R += Z(q())), k++;
                    break;
                case 45:
                    45 === g && 2 == $(R) && (m = 0);
            }
    }
    return i;
}
function X(e, t, n, r, s, i, a, o, l, c, h) {
    for(var d = s - 1, f = 0 === s ? i : [
        ""
    ], g = S(f), m = 0, y = 0, w = 0; m < r; ++m)for(var x = 0, $ = k(e, d + 1, d = p(y = a[m])), C = e; x < g; ++x)(C = b(y > 0 ? f[x] + " " + $ : v($, /&\f/g, f[x]))) && (l[w++] = C);
    return T(e, t, n, 0 === s ? u : o, l, c, h);
}
function J(e, t, n) {
    return T(e, t, n, c, f(z), k(e, 2, -2), 0);
}
function Y(e, t, n, r) {
    return T(e, t, n, h, k(e, 0, r), k(e, r + 1, -1), r);
}
function K(e, t) {
    for(var n = "", r = S(e), s = 0; s < r; s++)n += t(e[s], s, e, t) || "";
    return n;
}
function ee(e, t, n, r) {
    switch(e.type){
        case "@import":
        case h:
            return e.return = e.return || e.value;
        case c:
            return "";
        case d:
            return e.return = e.value + "{" + K(e.children, r) + "}";
        case u:
            e.value = e.props.join(",");
    }
    return $(n = K(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function te(e) {
    var t = S(e);
    return function(n, r, s, i) {
        for(var a = "", o = 0; o < t; o++)a += e[o](n, r, s, i) || "";
        return a;
    };
}
var ne = function(e) {
    var t = Object.create(null);
    return function(n) {
        return void 0 === t[n] && (t[n] = e(n)), t[n];
    };
}, re = function(e, t, n) {
    for(var r = 0, s = 0; r = s, s = O(), 38 === r && 12 === s && (t[n] = 1), !W(s);)j();
    return I(e, E);
}, se = function(e, t) {
    return H(function(e, t) {
        var n = -1, r = 44;
        do switch(W(r)){
            case 0:
                38 === r && 12 === O() && (t[n] = 1), e[n] += re(E - 1, t, n);
                break;
            case 2:
                e[n] += D(r);
                break;
            case 4:
                if (44 === r) {
                    e[++n] = 58 === O() ? "&\f" : "", t[n] = e[n].length;
                    break;
                }
            default:
                e[n] += f(r);
        }
        while (r = j());
        return e;
    }(P(e), t));
}, ie = new WeakMap, ae = function(e) {
    if ("rule" === e.type && e.parent && !(e.length < 1)) {
        for(var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line; "rule" !== n.type;)if (!(n = n.parent)) return;
        if ((1 !== e.props.length || 58 === t.charCodeAt(0) || ie.get(n)) && !r) {
            ie.set(e, !0);
            for(var s = [], i = se(t, s), a = n.props, o = 0, l = 0; o < i.length; o++)for(var c = 0; c < a.length; c++, l++)e.props[l] = s[o] ? i[o].replace(/&\f/g, a[c]) : a[c] + " " + i[o];
        }
    }
}, oe = function(e) {
    if ("decl" === e.type) {
        var t = e.value;
        108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && (e.return = "", e.value = "");
    }
};
function le(e, t) {
    switch(m(e, t)){
        case 5103:
            return l + "print-" + e + e;
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
            return l + e + e;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return l + e + o + e + a + e + e;
        case 6828:
        case 4268:
            return l + e + a + e + e;
        case 6165:
            return l + e + a + "flex-" + e + e;
        case 5187:
            return l + e + v(e, /(\w+).+(:[^]+)/, l + "box-$1$2" + a + "flex-$1$2") + e;
        case 5443:
            return l + e + a + "flex-item-" + v(e, /flex-|-self/, "") + e;
        case 4675:
            return l + e + a + "flex-line-pack" + v(e, /align-content|flex-|-self/, "") + e;
        case 5548:
            return l + e + a + v(e, "shrink", "negative") + e;
        case 5292:
            return l + e + a + v(e, "basis", "preferred-size") + e;
        case 6060:
            return l + "box-" + v(e, "-grow", "") + l + e + a + v(e, "grow", "positive") + e;
        case 4554:
            return l + v(e, /([^-])(transform)/g, "$1" + l + "$2") + e;
        case 6187:
            return v(v(v(e, /(zoom-|grab)/, l + "$1"), /(image-set)/, l + "$1"), e, "") + e;
        case 5495:
        case 3959:
            return v(e, /(image-set\([^]*)/, l + "$1$`$1");
        case 4968:
            return v(v(e, /(.+:)(flex-)?(.*)/, l + "box-pack:$3" + a + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + l + e + e;
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return v(e, /(.+)-inline(.+)/, l + "$1$2") + e;
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
            if ($(e) - 1 - t > 6) switch(x(e, t + 1)){
                case 109:
                    if (45 !== x(e, t + 4)) break;
                case 102:
                    return v(e, /(.+:)(.+)-([^]+)/, "$1" + l + "$2-$3$1" + o + (108 == x(e, t + 3) ? "$3" : "$2-$3")) + e;
                case 115:
                    return ~w(e, "stretch") ? le(v(e, "stretch", "fill-available"), t) + e : e;
            }
            break;
        case 4949:
            if (115 !== x(e, t + 1)) break;
        case 6444:
            switch(x(e, $(e) - 3 - (~w(e, "!important") && 10))){
                case 107:
                    return v(e, ":", ":" + l) + e;
                case 101:
                    return v(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + l + (45 === x(e, 14) ? "inline-" : "") + "box$3$1" + l + "$2$3$1" + a + "$2box$3") + e;
            }
            break;
        case 5936:
            switch(x(e, t + 11)){
                case 114:
                    return l + e + a + v(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
                case 108:
                    return l + e + a + v(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
                case 45:
                    return l + e + a + v(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
            }
            return l + e + a + e + e;
    }
    return e;
}
var ce = [
    function(e, t, n, r) {
        if (e.length > -1 && !e.return) switch(e.type){
            case h:
                e.return = le(e.value, e.length);
                break;
            case d:
                return K([
                    R(e, {
                        value: v(e.value, "@", "@" + l)
                    })
                ], r);
            case u:
                if (e.length) return _(e.props, function(t) {
                    switch(y(t, /(::plac\w+|:read-\w+)/)){
                        case ":read-only":
                        case ":read-write":
                            return K([
                                R(e, {
                                    props: [
                                        v(t, /:(read-\w+)/, ":-moz-$1")
                                    ]
                                })
                            ], r);
                        case "::placeholder":
                            return K([
                                R(e, {
                                    props: [
                                        v(t, /:(plac\w+)/, ":" + l + "input-$1")
                                    ]
                                }),
                                R(e, {
                                    props: [
                                        v(t, /:(plac\w+)/, ":-moz-$1")
                                    ]
                                }),
                                R(e, {
                                    props: [
                                        v(t, /:(plac\w+)/, a + "input-$1")
                                    ]
                                })
                            ], r);
                    }
                    return "";
                });
        }
    }
], ue = function(e) {
    var t = e.key;
    if ("css" === t) {
        var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
        Array.prototype.forEach.call(n, function(e) {
            -1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), e.setAttribute("data-s", ""));
        });
    }
    var r, s, a = e.stylisPlugins || ce, o = {}, l = [];
    r = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), function(e) {
        for(var t = e.getAttribute("data-emotion").split(" "), n = 1; n < t.length; n++)o[t[n]] = !0;
        l.push(e);
    });
    var c, u, h = [
        ee,
        (u = function(e) {
            c.insert(e);
        }, function(e) {
            e.root || (e = e.return) && u(e);
        })
    ], d = te([
        ae,
        oe
    ].concat(a, h));
    s = function(e, t, n, r) {
        c = n, K(V(e ? e + "{" + t.styles + "}" : t.styles), d), r && (p.inserted[t.name] = !0);
    };
    var p = {
        key: t,
        sheet: new i({
            key: t,
            container: r,
            nonce: e.nonce,
            speedy: e.speedy,
            prepend: e.prepend,
            insertionPoint: e.insertionPoint
        }),
        nonce: e.nonce,
        inserted: o,
        registered: {},
        insert: s
    };
    return p.sheet.hydrate(l), p;
};
var he = function(e) {
    for(var t, n = 0, r = 0, s = e.length; s >= 4; ++r, s -= 4)t = 1540483477 * (65535 & (t = 255 & e.charCodeAt(r) | (255 & e.charCodeAt(++r)) << 8 | (255 & e.charCodeAt(++r)) << 16 | (255 & e.charCodeAt(++r)) << 24)) + (59797 * (t >>> 16) << 16), n = 1540483477 * (65535 & (t ^= t >>> 24)) + (59797 * (t >>> 16) << 16) ^ 1540483477 * (65535 & n) + (59797 * (n >>> 16) << 16);
    switch(s){
        case 3:
            n ^= (255 & e.charCodeAt(r + 2)) << 16;
        case 2:
            n ^= (255 & e.charCodeAt(r + 1)) << 8;
        case 1:
            n = 1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) + (59797 * (n >>> 16) << 16);
    }
    return (((n = 1540483477 * (65535 & (n ^= n >>> 13)) + (59797 * (n >>> 16) << 16)) ^ n >>> 15) >>> 0).toString(36);
}, de = {
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
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
}, pe = /[A-Z]|^ms/g, fe = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ge = function(e) {
    return 45 === e.charCodeAt(1);
}, me = function(e) {
    return null != e && "boolean" != typeof e;
}, be = ne(function(e) {
    return ge(e) ? e : e.replace(pe, "-$&").toLowerCase();
}), ye = function(e, t) {
    switch(e){
        case "animation":
        case "animationName":
            if ("string" == typeof t) return t.replace(fe, function(e, t, n) {
                return we = {
                    name: t,
                    styles: n,
                    next: we
                }, t;
            });
    }
    return 1 === de[e] || ge(e) || "number" != typeof t || 0 === t ? t : t + "px";
};
function ve(e, t, n) {
    if (null == n) return "";
    if (void 0 !== n.__emotion_styles) return n;
    switch(typeof n){
        case "boolean":
            return "";
        case "object":
            if (1 === n.anim) return we = {
                name: n.name,
                styles: n.styles,
                next: we
            }, n.name;
            if (void 0 !== n.styles) {
                var r = n.next;
                if (void 0 !== r) for(; void 0 !== r;)we = {
                    name: r.name,
                    styles: r.styles,
                    next: we
                }, r = r.next;
                return n.styles + ";";
            }
            return function(e, t, n) {
                var r = "";
                if (Array.isArray(n)) for(var s = 0; s < n.length; s++)r += ve(e, t, n[s]) + ";";
                else for(var i in n){
                    var a = n[i];
                    if ("object" != typeof a) null != t && void 0 !== t[a] ? r += i + "{" + t[a] + "}" : me(a) && (r += be(i) + ":" + ye(i, a) + ";");
                    else if (!Array.isArray(a) || "string" != typeof a[0] || null != t && void 0 !== t[a[0]]) {
                        var o = ve(e, t, a);
                        switch(i){
                            case "animation":
                            case "animationName":
                                r += be(i) + ":" + o + ";";
                                break;
                            default:
                                r += i + "{" + o + "}";
                        }
                    } else for(var l = 0; l < a.length; l++)me(a[l]) && (r += be(i) + ":" + ye(i, a[l]) + ";");
                }
                return r;
            }(e, t, n);
        case "function":
            if (void 0 !== e) {
                var s = we, i = n(e);
                return we = s, ve(e, t, i);
            }
    }
    if (null == t) return n;
    var a = t[n];
    return void 0 !== a ? a : n;
}
var we, xe = /label:\s*([^\s;\n{]+)\s*(;|$)/g, ke = function(e, t, n) {
    if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
    var r = !0, s = "";
    we = void 0;
    var i = e[0];
    null == i || void 0 === i.raw ? (r = !1, s += ve(n, t, i)) : s += i[0];
    for(var a = 1; a < e.length; a++)s += ve(n, t, e[a]), r && (s += i[a]);
    xe.lastIndex = 0;
    for(var o, l = ""; null !== (o = xe.exec(s));)l += "-" + o[1];
    return {
        name: he(s) + l,
        styles: s,
        next: we
    };
};
function $e(e, t, n) {
    var r = "";
    return n.split(" ").forEach(function(n) {
        void 0 !== e[n] ? t.push(e[n] + ";") : r += n + " ";
    }), r;
}
var Se = function(e, t, n) {
    !function(e, t, n) {
        var r = e.key + "-" + t.name;
        !1 === n && void 0 === e.registered[r] && (e.registered[r] = t.styles);
    }(e, t, n);
    var r = e.key + "-" + t.name;
    if (void 0 === e.inserted[t.name]) {
        var s = t;
        do {
            e.insert(t === s ? "." + r : "", s, e.sheet, !0);
            s = s.next;
        }while (void 0 !== s);
    }
};
function Ce(e, t) {
    if (void 0 === e.inserted[t.name]) return e.insert("", t, e.sheet, !0);
}
function _e(e, t, n) {
    var r = [], s = $e(e, r, n);
    return r.length < 2 ? n : s + t(r);
}
var Ae = function e(t) {
    for(var n = "", r = 0; r < t.length; r++){
        var s = t[r];
        if (null != s) {
            var i = void 0;
            switch(typeof s){
                case "boolean":
                    break;
                case "object":
                    if (Array.isArray(s)) i = e(s);
                    else for(var a in i = "", s)s[a] && a && (i && (i += " "), i += a);
                    break;
                default:
                    i = s;
            }
            i && (n && (n += " "), n += i);
        }
    }
    return n;
}, Me = function(e) {
    var t = ue(e);
    t.sheet.speedy = function(e) {
        this.isSpeedy = e;
    }, t.compat = !0;
    var n = function() {
        for(var e = arguments.length, n = new Array(e), r = 0; r < e; r++)n[r] = arguments[r];
        var s = ke(n, t.registered, void 0);
        return Se(t, s, !1), t.key + "-" + s.name;
    };
    return {
        css: n,
        cx: function() {
            for(var e = arguments.length, r = new Array(e), s = 0; s < e; s++)r[s] = arguments[s];
            return _e(t.registered, n, Ae(r));
        },
        injectGlobal: function() {
            for(var e = arguments.length, n = new Array(e), r = 0; r < e; r++)n[r] = arguments[r];
            var s = ke(n, t.registered);
            Ce(t, s);
        },
        keyframes: function() {
            for(var e = arguments.length, n = new Array(e), r = 0; r < e; r++)n[r] = arguments[r];
            var s = ke(n, t.registered), i = "animation-" + s.name;
            return Ce(t, {
                name: s.name,
                styles: "@keyframes " + i + "{" + s.styles + "}"
            }), i;
        },
        hydrate: function(e) {
            e.forEach(function(e) {
                t.inserted[e] = !0;
            });
        },
        flush: function() {
            t.registered = {}, t.inserted = {}, t.sheet.flush();
        },
        sheet: t.sheet,
        cache: t,
        getRegisteredStyles: $e.bind(null, t.registered),
        merge: _e.bind(null, t.registered, n)
    };
}({
    key: "css"
}), Le = (Me.flush, Me.hydrate, Me.cx, Me.merge, Me.getRegisteredStyles, Me.injectGlobal);
Me.keyframes, Me.css, Me.sheet, Me.cache;
const Ee = (e, t = Ne)=>{
    t.define(e);
};
class ze {
    static css(e = {}) {
        return "";
    }
    static style(e = {}) {
        return "";
    }
}
class Ne extends HTMLElement {
    static Style = ze;
    static get tagName() {
        if (!this._tagName) throw `${this.name} hasn't been defined a tag name`;
        return this._tagName;
    }
    static set tagName(e) {
        this._tagName = e;
    }
    static define(e) {
        try {
            customElements.define(e, this);
        } catch (e1) {
            if (e1 instanceof DOMException) return void console.error(`DOMException: '${this.name}' has already been defined to tag '${this.tagName}'\n${e1.stack}`);
        }
        this.tagName = e, this.initStyle();
    }
    static initStyle() {
        Le`
        ${this.tagName} {
            all: unset;
        }`, this.Style && Le`
        ${this.tagName} {
            ${this.Style.css()}
        }`;
    }
    static tagStyle(e) {
        "string" != typeof e ? Le`
        ${this.tagName} {
            ${this.Style.style(e)}
        }` : Le`
            ${this.tagName} {
                ${e}
            }`;
    }
    static classStyle(e, t) {
        "string" == typeof t ? Le`
            ${this.tagName}.${e} {
                ${t}
            }` : "object" == typeof t && Le`
            ${this.tagName}.${e} {
                ${this.Style.style(t)}
            }`;
    }
    static max_id = Math.pow(16, 4) - 1;
    static instance = {};
    static _generate_id() {
        return `adt-${Math.floor(Math.random() * this.max_id).toString(16)}`;
    }
    constructor(){
        super(), this._class = this.constructor;
        let e = this._class._generate_id();
        for(; (e in this._class.instance);)e = this._class._generate_id();
        this._class.instance[e] = !0, this._id = e;
    }
    addStyle(e) {
        this.classList.add(this._id);
        let t = this.classList.value.replace(/ /g, ".");
        "string" == typeof e ? Le`
            ${this.tagName}.${t} {
                ${e}
            }` : "object" == typeof e && Le`
            ${this.tagName}.${t} {
                ${this._class.Style.style(e)}
            }`;
    }
    notify(e, t) {
        const n = new CustomEvent(e, t);
        this.dispatchEvent(n);
    }
}
const Te = (e = "1/1")=>`\n    aspect-ratio: ${e};\n    @supports not (aspect-ratio: ${e}) {\n        &::before {\n            float: left;\n            padding-top: 100% / ${e};\n            content: "";\n        }\n\n        &::after {\n            display: block;\n            content: "";\n            clear: both;\n        }\n    }\n    `.trim();
var Re, je = {}, Oe = {};
Re = {
    aliceblue: [
        240,
        248,
        255
    ],
    antiquewhite: [
        250,
        235,
        215
    ],
    aqua: [
        0,
        255,
        255
    ],
    aquamarine: [
        127,
        255,
        212
    ],
    azure: [
        240,
        255,
        255
    ],
    beige: [
        245,
        245,
        220
    ],
    bisque: [
        255,
        228,
        196
    ],
    black: [
        0,
        0,
        0
    ],
    blanchedalmond: [
        255,
        235,
        205
    ],
    blue: [
        0,
        0,
        255
    ],
    blueviolet: [
        138,
        43,
        226
    ],
    brown: [
        165,
        42,
        42
    ],
    burlywood: [
        222,
        184,
        135
    ],
    cadetblue: [
        95,
        158,
        160
    ],
    chartreuse: [
        127,
        255,
        0
    ],
    chocolate: [
        210,
        105,
        30
    ],
    coral: [
        255,
        127,
        80
    ],
    cornflowerblue: [
        100,
        149,
        237
    ],
    cornsilk: [
        255,
        248,
        220
    ],
    crimson: [
        220,
        20,
        60
    ],
    cyan: [
        0,
        255,
        255
    ],
    darkblue: [
        0,
        0,
        139
    ],
    darkcyan: [
        0,
        139,
        139
    ],
    darkgoldenrod: [
        184,
        134,
        11
    ],
    darkgray: [
        169,
        169,
        169
    ],
    darkgreen: [
        0,
        100,
        0
    ],
    darkgrey: [
        169,
        169,
        169
    ],
    darkkhaki: [
        189,
        183,
        107
    ],
    darkmagenta: [
        139,
        0,
        139
    ],
    darkolivegreen: [
        85,
        107,
        47
    ],
    darkorange: [
        255,
        140,
        0
    ],
    darkorchid: [
        153,
        50,
        204
    ],
    darkred: [
        139,
        0,
        0
    ],
    darksalmon: [
        233,
        150,
        122
    ],
    darkseagreen: [
        143,
        188,
        143
    ],
    darkslateblue: [
        72,
        61,
        139
    ],
    darkslategray: [
        47,
        79,
        79
    ],
    darkslategrey: [
        47,
        79,
        79
    ],
    darkturquoise: [
        0,
        206,
        209
    ],
    darkviolet: [
        148,
        0,
        211
    ],
    deeppink: [
        255,
        20,
        147
    ],
    deepskyblue: [
        0,
        191,
        255
    ],
    dimgray: [
        105,
        105,
        105
    ],
    dimgrey: [
        105,
        105,
        105
    ],
    dodgerblue: [
        30,
        144,
        255
    ],
    firebrick: [
        178,
        34,
        34
    ],
    floralwhite: [
        255,
        250,
        240
    ],
    forestgreen: [
        34,
        139,
        34
    ],
    fuchsia: [
        255,
        0,
        255
    ],
    gainsboro: [
        220,
        220,
        220
    ],
    ghostwhite: [
        248,
        248,
        255
    ],
    gold: [
        255,
        215,
        0
    ],
    goldenrod: [
        218,
        165,
        32
    ],
    gray: [
        128,
        128,
        128
    ],
    green: [
        0,
        128,
        0
    ],
    greenyellow: [
        173,
        255,
        47
    ],
    grey: [
        128,
        128,
        128
    ],
    honeydew: [
        240,
        255,
        240
    ],
    hotpink: [
        255,
        105,
        180
    ],
    indianred: [
        205,
        92,
        92
    ],
    indigo: [
        75,
        0,
        130
    ],
    ivory: [
        255,
        255,
        240
    ],
    khaki: [
        240,
        230,
        140
    ],
    lavender: [
        230,
        230,
        250
    ],
    lavenderblush: [
        255,
        240,
        245
    ],
    lawngreen: [
        124,
        252,
        0
    ],
    lemonchiffon: [
        255,
        250,
        205
    ],
    lightblue: [
        173,
        216,
        230
    ],
    lightcoral: [
        240,
        128,
        128
    ],
    lightcyan: [
        224,
        255,
        255
    ],
    lightgoldenrodyellow: [
        250,
        250,
        210
    ],
    lightgray: [
        211,
        211,
        211
    ],
    lightgreen: [
        144,
        238,
        144
    ],
    lightgrey: [
        211,
        211,
        211
    ],
    lightpink: [
        255,
        182,
        193
    ],
    lightsalmon: [
        255,
        160,
        122
    ],
    lightseagreen: [
        32,
        178,
        170
    ],
    lightskyblue: [
        135,
        206,
        250
    ],
    lightslategray: [
        119,
        136,
        153
    ],
    lightslategrey: [
        119,
        136,
        153
    ],
    lightsteelblue: [
        176,
        196,
        222
    ],
    lightyellow: [
        255,
        255,
        224
    ],
    lime: [
        0,
        255,
        0
    ],
    limegreen: [
        50,
        205,
        50
    ],
    linen: [
        250,
        240,
        230
    ],
    magenta: [
        255,
        0,
        255
    ],
    maroon: [
        128,
        0,
        0
    ],
    mediumaquamarine: [
        102,
        205,
        170
    ],
    mediumblue: [
        0,
        0,
        205
    ],
    mediumorchid: [
        186,
        85,
        211
    ],
    mediumpurple: [
        147,
        112,
        219
    ],
    mediumseagreen: [
        60,
        179,
        113
    ],
    mediumslateblue: [
        123,
        104,
        238
    ],
    mediumspringgreen: [
        0,
        250,
        154
    ],
    mediumturquoise: [
        72,
        209,
        204
    ],
    mediumvioletred: [
        199,
        21,
        133
    ],
    midnightblue: [
        25,
        25,
        112
    ],
    mintcream: [
        245,
        255,
        250
    ],
    mistyrose: [
        255,
        228,
        225
    ],
    moccasin: [
        255,
        228,
        181
    ],
    navajowhite: [
        255,
        222,
        173
    ],
    navy: [
        0,
        0,
        128
    ],
    oldlace: [
        253,
        245,
        230
    ],
    olive: [
        128,
        128,
        0
    ],
    olivedrab: [
        107,
        142,
        35
    ],
    orange: [
        255,
        165,
        0
    ],
    orangered: [
        255,
        69,
        0
    ],
    orchid: [
        218,
        112,
        214
    ],
    palegoldenrod: [
        238,
        232,
        170
    ],
    palegreen: [
        152,
        251,
        152
    ],
    paleturquoise: [
        175,
        238,
        238
    ],
    palevioletred: [
        219,
        112,
        147
    ],
    papayawhip: [
        255,
        239,
        213
    ],
    peachpuff: [
        255,
        218,
        185
    ],
    peru: [
        205,
        133,
        63
    ],
    pink: [
        255,
        192,
        203
    ],
    plum: [
        221,
        160,
        221
    ],
    powderblue: [
        176,
        224,
        230
    ],
    purple: [
        128,
        0,
        128
    ],
    rebeccapurple: [
        102,
        51,
        153
    ],
    red: [
        255,
        0,
        0
    ],
    rosybrown: [
        188,
        143,
        143
    ],
    royalblue: [
        65,
        105,
        225
    ],
    saddlebrown: [
        139,
        69,
        19
    ],
    salmon: [
        250,
        128,
        114
    ],
    sandybrown: [
        244,
        164,
        96
    ],
    seagreen: [
        46,
        139,
        87
    ],
    seashell: [
        255,
        245,
        238
    ],
    sienna: [
        160,
        82,
        45
    ],
    silver: [
        192,
        192,
        192
    ],
    skyblue: [
        135,
        206,
        235
    ],
    slateblue: [
        106,
        90,
        205
    ],
    slategray: [
        112,
        128,
        144
    ],
    slategrey: [
        112,
        128,
        144
    ],
    snow: [
        255,
        250,
        250
    ],
    springgreen: [
        0,
        255,
        127
    ],
    steelblue: [
        70,
        130,
        180
    ],
    tan: [
        210,
        180,
        140
    ],
    teal: [
        0,
        128,
        128
    ],
    thistle: [
        216,
        191,
        216
    ],
    tomato: [
        255,
        99,
        71
    ],
    turquoise: [
        64,
        224,
        208
    ],
    violet: [
        238,
        130,
        238
    ],
    wheat: [
        245,
        222,
        179
    ],
    white: [
        255,
        255,
        255
    ],
    whitesmoke: [
        245,
        245,
        245
    ],
    yellow: [
        255,
        255,
        0
    ],
    yellowgreen: [
        154,
        205,
        50
    ]
};
var qe, Ie;
Ie = function(e) {
    return !(!e || "string" == typeof e) && (e instanceof Array || Array.isArray(e) || e.length >= 0 && (e.splice instanceof Function || Object.getOwnPropertyDescriptor(e, e.length - 1) && "String" !== e.constructor.name));
};
var We = Array.prototype.concat, Pe = Array.prototype.slice, He = qe = function(e) {
    for(var t = [], n = 0, r = e.length; n < r; n++){
        var s = e[n];
        Ie(s) ? t = We.call(t, Pe.call(s)) : t.push(s);
    }
    return t;
};
He.wrap = function(e) {
    return function() {
        return e(He(arguments));
    };
};
var De = Object.hasOwnProperty, Fe = Object.create(null);
for(var Be in Re)De.call(Re, Be) && (Fe[Re[Be]] = Be);
var Ge = Oe = {
    to: {},
    get: {}
};
function Ue(e, t, n) {
    return Math.min(Math.max(t, e), n);
}
function Ze(e) {
    var t = Math.round(e).toString(16).toUpperCase();
    return t.length < 2 ? "0" + t : t;
}
Ge.get = function(e) {
    var t, n;
    switch(e.substring(0, 3).toLowerCase()){
        case "hsl":
            t = Ge.get.hsl(e), n = "hsl";
            break;
        case "hwb":
            t = Ge.get.hwb(e), n = "hwb";
            break;
        default:
            t = Ge.get.rgb(e), n = "rgb";
    }
    return t ? {
        model: n,
        value: t
    } : null;
}, Ge.get.rgb = function(e) {
    if (!e) return null;
    var t, n, r, s = [
        0,
        0,
        0,
        1
    ];
    if (t = e.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)) {
        for(r = t[2], t = t[1], n = 0; n < 3; n++){
            var i = 2 * n;
            s[n] = parseInt(t.slice(i, i + 2), 16);
        }
        r && (s[3] = parseInt(r, 16) / 255);
    } else if (t = e.match(/^#([a-f0-9]{3,4})$/i)) {
        for(r = (t = t[1])[3], n = 0; n < 3; n++)s[n] = parseInt(t[n] + t[n], 16);
        r && (s[3] = parseInt(r + r, 16) / 255);
    } else if (t = e.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)) {
        for(n = 0; n < 3; n++)s[n] = parseInt(t[n + 1], 0);
        t[4] && (t[5] ? s[3] = .01 * parseFloat(t[4]) : s[3] = parseFloat(t[4]));
    } else {
        if (!(t = e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/))) return (t = e.match(/^(\w+)$/)) ? "transparent" === t[1] ? [
            0,
            0,
            0,
            0
        ] : De.call(Re, t[1]) ? ((s = Re[t[1]])[3] = 1, s) : null : null;
        for(n = 0; n < 3; n++)s[n] = Math.round(2.55 * parseFloat(t[n + 1]));
        t[4] && (t[5] ? s[3] = .01 * parseFloat(t[4]) : s[3] = parseFloat(t[4]));
    }
    for(n = 0; n < 3; n++)s[n] = Ue(s[n], 0, 255);
    return s[3] = Ue(s[3], 0, 1), s;
}, Ge.get.hsl = function(e) {
    if (!e) return null;
    var t = e.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
    if (t) {
        var n = parseFloat(t[4]);
        return [
            (parseFloat(t[1]) % 360 + 360) % 360,
            Ue(parseFloat(t[2]), 0, 100),
            Ue(parseFloat(t[3]), 0, 100),
            Ue(isNaN(n) ? 1 : n, 0, 1)
        ];
    }
    return null;
}, Ge.get.hwb = function(e) {
    if (!e) return null;
    var t = e.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
    if (t) {
        var n = parseFloat(t[4]);
        return [
            (parseFloat(t[1]) % 360 + 360) % 360,
            Ue(parseFloat(t[2]), 0, 100),
            Ue(parseFloat(t[3]), 0, 100),
            Ue(isNaN(n) ? 1 : n, 0, 1)
        ];
    }
    return null;
}, Ge.to.hex = function() {
    var e = qe(arguments);
    return "#" + Ze(e[0]) + Ze(e[1]) + Ze(e[2]) + (e[3] < 1 ? Ze(Math.round(255 * e[3])) : "");
}, Ge.to.rgb = function() {
    var e = qe(arguments);
    return e.length < 4 || 1 === e[3] ? "rgb(" + Math.round(e[0]) + ", " + Math.round(e[1]) + ", " + Math.round(e[2]) + ")" : "rgba(" + Math.round(e[0]) + ", " + Math.round(e[1]) + ", " + Math.round(e[2]) + ", " + e[3] + ")";
}, Ge.to.rgb.percent = function() {
    var e = qe(arguments), t = Math.round(e[0] / 255 * 100), n = Math.round(e[1] / 255 * 100), r = Math.round(e[2] / 255 * 100);
    return e.length < 4 || 1 === e[3] ? "rgb(" + t + "%, " + n + "%, " + r + "%)" : "rgba(" + t + "%, " + n + "%, " + r + "%, " + e[3] + ")";
}, Ge.to.hsl = function() {
    var e = qe(arguments);
    return e.length < 4 || 1 === e[3] ? "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)" : "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + e[3] + ")";
}, Ge.to.hwb = function() {
    var e = qe(arguments), t = "";
    return e.length >= 4 && 1 !== e[3] && (t = ", " + e[3]), "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + t + ")";
}, Ge.to.keyword = function(e) {
    return Fe[e.slice(0, 3)];
};
var Ve, Qe, Xe = {};
Qe = {
    aliceblue: [
        240,
        248,
        255
    ],
    antiquewhite: [
        250,
        235,
        215
    ],
    aqua: [
        0,
        255,
        255
    ],
    aquamarine: [
        127,
        255,
        212
    ],
    azure: [
        240,
        255,
        255
    ],
    beige: [
        245,
        245,
        220
    ],
    bisque: [
        255,
        228,
        196
    ],
    black: [
        0,
        0,
        0
    ],
    blanchedalmond: [
        255,
        235,
        205
    ],
    blue: [
        0,
        0,
        255
    ],
    blueviolet: [
        138,
        43,
        226
    ],
    brown: [
        165,
        42,
        42
    ],
    burlywood: [
        222,
        184,
        135
    ],
    cadetblue: [
        95,
        158,
        160
    ],
    chartreuse: [
        127,
        255,
        0
    ],
    chocolate: [
        210,
        105,
        30
    ],
    coral: [
        255,
        127,
        80
    ],
    cornflowerblue: [
        100,
        149,
        237
    ],
    cornsilk: [
        255,
        248,
        220
    ],
    crimson: [
        220,
        20,
        60
    ],
    cyan: [
        0,
        255,
        255
    ],
    darkblue: [
        0,
        0,
        139
    ],
    darkcyan: [
        0,
        139,
        139
    ],
    darkgoldenrod: [
        184,
        134,
        11
    ],
    darkgray: [
        169,
        169,
        169
    ],
    darkgreen: [
        0,
        100,
        0
    ],
    darkgrey: [
        169,
        169,
        169
    ],
    darkkhaki: [
        189,
        183,
        107
    ],
    darkmagenta: [
        139,
        0,
        139
    ],
    darkolivegreen: [
        85,
        107,
        47
    ],
    darkorange: [
        255,
        140,
        0
    ],
    darkorchid: [
        153,
        50,
        204
    ],
    darkred: [
        139,
        0,
        0
    ],
    darksalmon: [
        233,
        150,
        122
    ],
    darkseagreen: [
        143,
        188,
        143
    ],
    darkslateblue: [
        72,
        61,
        139
    ],
    darkslategray: [
        47,
        79,
        79
    ],
    darkslategrey: [
        47,
        79,
        79
    ],
    darkturquoise: [
        0,
        206,
        209
    ],
    darkviolet: [
        148,
        0,
        211
    ],
    deeppink: [
        255,
        20,
        147
    ],
    deepskyblue: [
        0,
        191,
        255
    ],
    dimgray: [
        105,
        105,
        105
    ],
    dimgrey: [
        105,
        105,
        105
    ],
    dodgerblue: [
        30,
        144,
        255
    ],
    firebrick: [
        178,
        34,
        34
    ],
    floralwhite: [
        255,
        250,
        240
    ],
    forestgreen: [
        34,
        139,
        34
    ],
    fuchsia: [
        255,
        0,
        255
    ],
    gainsboro: [
        220,
        220,
        220
    ],
    ghostwhite: [
        248,
        248,
        255
    ],
    gold: [
        255,
        215,
        0
    ],
    goldenrod: [
        218,
        165,
        32
    ],
    gray: [
        128,
        128,
        128
    ],
    green: [
        0,
        128,
        0
    ],
    greenyellow: [
        173,
        255,
        47
    ],
    grey: [
        128,
        128,
        128
    ],
    honeydew: [
        240,
        255,
        240
    ],
    hotpink: [
        255,
        105,
        180
    ],
    indianred: [
        205,
        92,
        92
    ],
    indigo: [
        75,
        0,
        130
    ],
    ivory: [
        255,
        255,
        240
    ],
    khaki: [
        240,
        230,
        140
    ],
    lavender: [
        230,
        230,
        250
    ],
    lavenderblush: [
        255,
        240,
        245
    ],
    lawngreen: [
        124,
        252,
        0
    ],
    lemonchiffon: [
        255,
        250,
        205
    ],
    lightblue: [
        173,
        216,
        230
    ],
    lightcoral: [
        240,
        128,
        128
    ],
    lightcyan: [
        224,
        255,
        255
    ],
    lightgoldenrodyellow: [
        250,
        250,
        210
    ],
    lightgray: [
        211,
        211,
        211
    ],
    lightgreen: [
        144,
        238,
        144
    ],
    lightgrey: [
        211,
        211,
        211
    ],
    lightpink: [
        255,
        182,
        193
    ],
    lightsalmon: [
        255,
        160,
        122
    ],
    lightseagreen: [
        32,
        178,
        170
    ],
    lightskyblue: [
        135,
        206,
        250
    ],
    lightslategray: [
        119,
        136,
        153
    ],
    lightslategrey: [
        119,
        136,
        153
    ],
    lightsteelblue: [
        176,
        196,
        222
    ],
    lightyellow: [
        255,
        255,
        224
    ],
    lime: [
        0,
        255,
        0
    ],
    limegreen: [
        50,
        205,
        50
    ],
    linen: [
        250,
        240,
        230
    ],
    magenta: [
        255,
        0,
        255
    ],
    maroon: [
        128,
        0,
        0
    ],
    mediumaquamarine: [
        102,
        205,
        170
    ],
    mediumblue: [
        0,
        0,
        205
    ],
    mediumorchid: [
        186,
        85,
        211
    ],
    mediumpurple: [
        147,
        112,
        219
    ],
    mediumseagreen: [
        60,
        179,
        113
    ],
    mediumslateblue: [
        123,
        104,
        238
    ],
    mediumspringgreen: [
        0,
        250,
        154
    ],
    mediumturquoise: [
        72,
        209,
        204
    ],
    mediumvioletred: [
        199,
        21,
        133
    ],
    midnightblue: [
        25,
        25,
        112
    ],
    mintcream: [
        245,
        255,
        250
    ],
    mistyrose: [
        255,
        228,
        225
    ],
    moccasin: [
        255,
        228,
        181
    ],
    navajowhite: [
        255,
        222,
        173
    ],
    navy: [
        0,
        0,
        128
    ],
    oldlace: [
        253,
        245,
        230
    ],
    olive: [
        128,
        128,
        0
    ],
    olivedrab: [
        107,
        142,
        35
    ],
    orange: [
        255,
        165,
        0
    ],
    orangered: [
        255,
        69,
        0
    ],
    orchid: [
        218,
        112,
        214
    ],
    palegoldenrod: [
        238,
        232,
        170
    ],
    palegreen: [
        152,
        251,
        152
    ],
    paleturquoise: [
        175,
        238,
        238
    ],
    palevioletred: [
        219,
        112,
        147
    ],
    papayawhip: [
        255,
        239,
        213
    ],
    peachpuff: [
        255,
        218,
        185
    ],
    peru: [
        205,
        133,
        63
    ],
    pink: [
        255,
        192,
        203
    ],
    plum: [
        221,
        160,
        221
    ],
    powderblue: [
        176,
        224,
        230
    ],
    purple: [
        128,
        0,
        128
    ],
    rebeccapurple: [
        102,
        51,
        153
    ],
    red: [
        255,
        0,
        0
    ],
    rosybrown: [
        188,
        143,
        143
    ],
    royalblue: [
        65,
        105,
        225
    ],
    saddlebrown: [
        139,
        69,
        19
    ],
    salmon: [
        250,
        128,
        114
    ],
    sandybrown: [
        244,
        164,
        96
    ],
    seagreen: [
        46,
        139,
        87
    ],
    seashell: [
        255,
        245,
        238
    ],
    sienna: [
        160,
        82,
        45
    ],
    silver: [
        192,
        192,
        192
    ],
    skyblue: [
        135,
        206,
        235
    ],
    slateblue: [
        106,
        90,
        205
    ],
    slategray: [
        112,
        128,
        144
    ],
    slategrey: [
        112,
        128,
        144
    ],
    snow: [
        255,
        250,
        250
    ],
    springgreen: [
        0,
        255,
        127
    ],
    steelblue: [
        70,
        130,
        180
    ],
    tan: [
        210,
        180,
        140
    ],
    teal: [
        0,
        128,
        128
    ],
    thistle: [
        216,
        191,
        216
    ],
    tomato: [
        255,
        99,
        71
    ],
    turquoise: [
        64,
        224,
        208
    ],
    violet: [
        238,
        130,
        238
    ],
    wheat: [
        245,
        222,
        179
    ],
    white: [
        255,
        255,
        255
    ],
    whitesmoke: [
        245,
        245,
        245
    ],
    yellow: [
        255,
        255,
        0
    ],
    yellowgreen: [
        154,
        205,
        50
    ]
};
const Je = {};
for (const e1 of Object.keys(Qe))Je[Qe[e1]] = e1;
const Ye = {
    rgb: {
        channels: 3,
        labels: "rgb"
    },
    hsl: {
        channels: 3,
        labels: "hsl"
    },
    hsv: {
        channels: 3,
        labels: "hsv"
    },
    hwb: {
        channels: 3,
        labels: "hwb"
    },
    cmyk: {
        channels: 4,
        labels: "cmyk"
    },
    xyz: {
        channels: 3,
        labels: "xyz"
    },
    lab: {
        channels: 3,
        labels: "lab"
    },
    lch: {
        channels: 3,
        labels: "lch"
    },
    hex: {
        channels: 1,
        labels: [
            "hex"
        ]
    },
    keyword: {
        channels: 1,
        labels: [
            "keyword"
        ]
    },
    ansi16: {
        channels: 1,
        labels: [
            "ansi16"
        ]
    },
    ansi256: {
        channels: 1,
        labels: [
            "ansi256"
        ]
    },
    hcg: {
        channels: 3,
        labels: [
            "h",
            "c",
            "g"
        ]
    },
    apple: {
        channels: 3,
        labels: [
            "r16",
            "g16",
            "b16"
        ]
    },
    gray: {
        channels: 1,
        labels: [
            "gray"
        ]
    }
};
Ve = Ye;
for (const e2 of Object.keys(Ye)){
    if (!("channels" in Ye[e2])) throw new Error("missing channels property: " + e2);
    if (!("labels" in Ye[e2])) throw new Error("missing channel labels property: " + e2);
    if (Ye[e2].labels.length !== Ye[e2].channels) throw new Error("channel and label counts mismatch: " + e2);
    const { channels: t1 , labels: n1  } = Ye[e2];
    delete Ye[e2].channels, delete Ye[e2].labels, Object.defineProperty(Ye[e2], "channels", {
        value: t1
    }), Object.defineProperty(Ye[e2], "labels", {
        value: n1
    });
}
Ye.rgb.hsl = function(e) {
    const t = e[0] / 255, n = e[1] / 255, r = e[2] / 255, s = Math.min(t, n, r), i = Math.max(t, n, r), a = i - s;
    let o, l;
    i === s ? o = 0 : t === i ? o = (n - r) / a : n === i ? o = 2 + (r - t) / a : r === i && (o = 4 + (t - n) / a), o = Math.min(60 * o, 360), o < 0 && (o += 360);
    const c = (s + i) / 2;
    return l = i === s ? 0 : c <= .5 ? a / (i + s) : a / (2 - i - s), [
        o,
        100 * l,
        100 * c
    ];
}, Ye.rgb.hsv = function(e) {
    let t, n, r, s, i;
    const a = e[0] / 255, o = e[1] / 255, l = e[2] / 255, c = Math.max(a, o, l), u = c - Math.min(a, o, l), h = function(e) {
        return (c - e) / 6 / u + .5;
    };
    return 0 === u ? (s = 0, i = 0) : (i = u / c, t = h(a), n = h(o), r = h(l), a === c ? s = r - n : o === c ? s = 1 / 3 + t - r : l === c && (s = 2 / 3 + n - t), s < 0 ? s += 1 : s > 1 && (s -= 1)), [
        360 * s,
        100 * i,
        100 * c
    ];
}, Ye.rgb.hwb = function(e) {
    const t = e[0], n = e[1];
    let r = e[2];
    const s = Ye.rgb.hsl(e)[0], i = 1 / 255 * Math.min(t, Math.min(n, r));
    return r = 1 - 1 / 255 * Math.max(t, Math.max(n, r)), [
        s,
        100 * i,
        100 * r
    ];
}, Ye.rgb.cmyk = function(e) {
    const t = e[0] / 255, n = e[1] / 255, r = e[2] / 255, s = Math.min(1 - t, 1 - n, 1 - r);
    return [
        100 * ((1 - t - s) / (1 - s) || 0),
        100 * ((1 - n - s) / (1 - s) || 0),
        100 * ((1 - r - s) / (1 - s) || 0),
        100 * s
    ];
}, Ye.rgb.keyword = function(e) {
    const t = Je[e];
    if (t) return t;
    let n, r = 1 / 0;
    for (const t1 of Object.keys(Qe)){
        const a = (i = Qe[t1], ((s = e)[0] - i[0]) ** 2 + (s[1] - i[1]) ** 2 + (s[2] - i[2]) ** 2);
        a < r && (r = a, n = t1);
    }
    var s, i;
    return n;
}, Ye.keyword.rgb = function(e) {
    return Qe[e];
}, Ye.rgb.xyz = function(e) {
    let t = e[0] / 255, n = e[1] / 255, r = e[2] / 255;
    t = t > .04045 ? ((t + .055) / 1.055) ** 2.4 : t / 12.92, n = n > .04045 ? ((n + .055) / 1.055) ** 2.4 : n / 12.92, r = r > .04045 ? ((r + .055) / 1.055) ** 2.4 : r / 12.92;
    return [
        100 * (.4124 * t + .3576 * n + .1805 * r),
        100 * (.2126 * t + .7152 * n + .0722 * r),
        100 * (.0193 * t + .1192 * n + .9505 * r)
    ];
}, Ye.rgb.lab = function(e) {
    const t = Ye.rgb.xyz(e);
    let n = t[0], r = t[1], s = t[2];
    n /= 95.047, r /= 100, s /= 108.883, n = n > .008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116, r = r > .008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116, s = s > .008856 ? s ** (1 / 3) : 7.787 * s + 16 / 116;
    return [
        116 * r - 16,
        500 * (n - r),
        200 * (r - s)
    ];
}, Ye.hsl.rgb = function(e) {
    const t = e[0] / 360, n = e[1] / 100, r = e[2] / 100;
    let s, i, a;
    if (0 === n) return a = 255 * r, [
        a,
        a,
        a
    ];
    s = r < .5 ? r * (1 + n) : r + n - r * n;
    const o = 2 * r - s, l = [
        0,
        0,
        0
    ];
    for(let e1 = 0; e1 < 3; e1++)i = t + 1 / 3 * -(e1 - 1), i < 0 && i++, i > 1 && i--, a = 6 * i < 1 ? o + 6 * (s - o) * i : 2 * i < 1 ? s : 3 * i < 2 ? o + (s - o) * (2 / 3 - i) * 6 : o, l[e1] = 255 * a;
    return l;
}, Ye.hsl.hsv = function(e) {
    const t = e[0];
    let n = e[1] / 100, r = e[2] / 100, s = n;
    const i = Math.max(r, .01);
    r *= 2, n *= r <= 1 ? r : 2 - r, s *= i <= 1 ? i : 2 - i;
    return [
        t,
        100 * (0 === r ? 2 * s / (i + s) : 2 * n / (r + n)),
        100 * ((r + n) / 2)
    ];
}, Ye.hsv.rgb = function(e) {
    const t = e[0] / 60, n = e[1] / 100;
    let r = e[2] / 100;
    const s = Math.floor(t) % 6, i = t - Math.floor(t), a = 255 * r * (1 - n), o = 255 * r * (1 - n * i), l = 255 * r * (1 - n * (1 - i));
    switch(r *= 255, s){
        case 0:
            return [
                r,
                l,
                a
            ];
        case 1:
            return [
                o,
                r,
                a
            ];
        case 2:
            return [
                a,
                r,
                l
            ];
        case 3:
            return [
                a,
                o,
                r
            ];
        case 4:
            return [
                l,
                a,
                r
            ];
        case 5:
            return [
                r,
                a,
                o
            ];
    }
}, Ye.hsv.hsl = function(e) {
    const t = e[0], n = e[1] / 100, r = e[2] / 100, s = Math.max(r, .01);
    let i, a;
    a = (2 - n) * r;
    const o = (2 - n) * s;
    return i = n * s, i /= o <= 1 ? o : 2 - o, i = i || 0, a /= 2, [
        t,
        100 * i,
        100 * a
    ];
}, Ye.hwb.rgb = function(e) {
    const t = e[0] / 360;
    let n = e[1] / 100, r = e[2] / 100;
    const s = n + r;
    let i;
    s > 1 && (n /= s, r /= s);
    const a = Math.floor(6 * t), o = 1 - r;
    i = 6 * t - a, 0 != (1 & a) && (i = 1 - i);
    const l = n + i * (o - n);
    let c, u, h;
    switch(a){
        default:
        case 6:
        case 0:
            c = o, u = l, h = n;
            break;
        case 1:
            c = l, u = o, h = n;
            break;
        case 2:
            c = n, u = o, h = l;
            break;
        case 3:
            c = n, u = l, h = o;
            break;
        case 4:
            c = l, u = n, h = o;
            break;
        case 5:
            c = o, u = n, h = l;
    }
    return [
        255 * c,
        255 * u,
        255 * h
    ];
}, Ye.cmyk.rgb = function(e) {
    const t = e[0] / 100, n = e[1] / 100, r = e[2] / 100, s = e[3] / 100;
    return [
        255 * (1 - Math.min(1, t * (1 - s) + s)),
        255 * (1 - Math.min(1, n * (1 - s) + s)),
        255 * (1 - Math.min(1, r * (1 - s) + s))
    ];
}, Ye.xyz.rgb = function(e) {
    const t = e[0] / 100, n = e[1] / 100, r = e[2] / 100;
    let s, i, a;
    return s = 3.2406 * t + -1.5372 * n + -0.4986 * r, i = -0.9689 * t + 1.8758 * n + .0415 * r, a = .0557 * t + -0.204 * n + 1.057 * r, s = s > .0031308 ? 1.055 * s ** (1 / 2.4) - .055 : 12.92 * s, i = i > .0031308 ? 1.055 * i ** (1 / 2.4) - .055 : 12.92 * i, a = a > .0031308 ? 1.055 * a ** (1 / 2.4) - .055 : 12.92 * a, s = Math.min(Math.max(0, s), 1), i = Math.min(Math.max(0, i), 1), a = Math.min(Math.max(0, a), 1), [
        255 * s,
        255 * i,
        255 * a
    ];
}, Ye.xyz.lab = function(e) {
    let t = e[0], n = e[1], r = e[2];
    t /= 95.047, n /= 100, r /= 108.883, t = t > .008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116, n = n > .008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116, r = r > .008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116;
    return [
        116 * n - 16,
        500 * (t - n),
        200 * (n - r)
    ];
}, Ye.lab.xyz = function(e) {
    let t, n, r;
    n = (e[0] + 16) / 116, t = e[1] / 500 + n, r = n - e[2] / 200;
    const s = n ** 3, i = t ** 3, a = r ** 3;
    return n = s > .008856 ? s : (n - 16 / 116) / 7.787, t = i > .008856 ? i : (t - 16 / 116) / 7.787, r = a > .008856 ? a : (r - 16 / 116) / 7.787, t *= 95.047, n *= 100, r *= 108.883, [
        t,
        n,
        r
    ];
}, Ye.lab.lch = function(e) {
    const t = e[0], n = e[1], r = e[2];
    let s;
    s = 360 * Math.atan2(r, n) / 2 / Math.PI, s < 0 && (s += 360);
    return [
        t,
        Math.sqrt(n * n + r * r),
        s
    ];
}, Ye.lch.lab = function(e) {
    const t = e[0], n = e[1], r = e[2] / 360 * 2 * Math.PI;
    return [
        t,
        n * Math.cos(r),
        n * Math.sin(r)
    ];
}, Ye.rgb.ansi16 = function(e, t = null) {
    const [n, r, s] = e;
    let i = null === t ? Ye.rgb.hsv(e)[2] : t;
    if (i = Math.round(i / 50), 0 === i) return 30;
    let a = 30 + (Math.round(s / 255) << 2 | Math.round(r / 255) << 1 | Math.round(n / 255));
    return 2 === i && (a += 60), a;
}, Ye.hsv.ansi16 = function(e) {
    return Ye.rgb.ansi16(Ye.hsv.rgb(e), e[2]);
}, Ye.rgb.ansi256 = function(e) {
    const t = e[0], n = e[1], r = e[2];
    if (t === n && n === r) return t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232;
    return 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5);
}, Ye.ansi16.rgb = function(e) {
    let t = e % 10;
    if (0 === t || 7 === t) return e > 50 && (t += 3.5), t = t / 10.5 * 255, [
        t,
        t,
        t
    ];
    const n = .5 * (1 + ~~(e > 50));
    return [
        (1 & t) * n * 255,
        (t >> 1 & 1) * n * 255,
        (t >> 2 & 1) * n * 255
    ];
}, Ye.ansi256.rgb = function(e) {
    if (e >= 232) {
        const t = 10 * (e - 232) + 8;
        return [
            t,
            t,
            t
        ];
    }
    let t1;
    e -= 16;
    return [
        Math.floor(e / 36) / 5 * 255,
        Math.floor((t1 = e % 36) / 6) / 5 * 255,
        t1 % 6 / 5 * 255
    ];
}, Ye.rgb.hex = function(e) {
    const t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase();
    return "000000".substring(t.length) + t;
}, Ye.hex.rgb = function(e) {
    const t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!t) return [
        0,
        0,
        0
    ];
    let n = t[0];
    3 === t[0].length && (n = n.split("").map((e)=>e + e).join(""));
    const r = parseInt(n, 16);
    return [
        r >> 16 & 255,
        r >> 8 & 255,
        255 & r
    ];
}, Ye.rgb.hcg = function(e) {
    const t = e[0] / 255, n = e[1] / 255, r = e[2] / 255, s = Math.max(Math.max(t, n), r), i = Math.min(Math.min(t, n), r), a = s - i;
    let o, l;
    return o = a < 1 ? i / (1 - a) : 0, l = a <= 0 ? 0 : s === t ? (n - r) / a % 6 : s === n ? 2 + (r - t) / a : 4 + (t - n) / a, l /= 6, l %= 1, [
        360 * l,
        100 * a,
        100 * o
    ];
}, Ye.hsl.hcg = function(e) {
    const t = e[1] / 100, n = e[2] / 100, r = n < .5 ? 2 * t * n : 2 * t * (1 - n);
    let s = 0;
    return r < 1 && (s = (n - .5 * r) / (1 - r)), [
        e[0],
        100 * r,
        100 * s
    ];
}, Ye.hsv.hcg = function(e) {
    const t = e[1] / 100, n = e[2] / 100, r = t * n;
    let s = 0;
    return r < 1 && (s = (n - r) / (1 - r)), [
        e[0],
        100 * r,
        100 * s
    ];
}, Ye.hcg.rgb = function(e) {
    const t = e[0] / 360, n = e[1] / 100, r = e[2] / 100;
    if (0 === n) return [
        255 * r,
        255 * r,
        255 * r
    ];
    const s = [
        0,
        0,
        0
    ], i = t % 1 * 6, a = i % 1, o = 1 - a;
    let l = 0;
    switch(Math.floor(i)){
        case 0:
            s[0] = 1, s[1] = a, s[2] = 0;
            break;
        case 1:
            s[0] = o, s[1] = 1, s[2] = 0;
            break;
        case 2:
            s[0] = 0, s[1] = 1, s[2] = a;
            break;
        case 3:
            s[0] = 0, s[1] = o, s[2] = 1;
            break;
        case 4:
            s[0] = a, s[1] = 0, s[2] = 1;
            break;
        default:
            s[0] = 1, s[1] = 0, s[2] = o;
    }
    return l = (1 - n) * r, [
        255 * (n * s[0] + l),
        255 * (n * s[1] + l),
        255 * (n * s[2] + l)
    ];
}, Ye.hcg.hsv = function(e) {
    const t = e[1] / 100, n = t + e[2] / 100 * (1 - t);
    let r = 0;
    return n > 0 && (r = t / n), [
        e[0],
        100 * r,
        100 * n
    ];
}, Ye.hcg.hsl = function(e) {
    const t = e[1] / 100, n = e[2] / 100 * (1 - t) + .5 * t;
    let r = 0;
    return n > 0 && n < .5 ? r = t / (2 * n) : n >= .5 && n < 1 && (r = t / (2 * (1 - n))), [
        e[0],
        100 * r,
        100 * n
    ];
}, Ye.hcg.hwb = function(e) {
    const t = e[1] / 100, n = t + e[2] / 100 * (1 - t);
    return [
        e[0],
        100 * (n - t),
        100 * (1 - n)
    ];
}, Ye.hwb.hcg = function(e) {
    const t = e[1] / 100, n = 1 - e[2] / 100, r = n - t;
    let s = 0;
    return r < 1 && (s = (n - r) / (1 - r)), [
        e[0],
        100 * r,
        100 * s
    ];
}, Ye.apple.rgb = function(e) {
    return [
        e[0] / 65535 * 255,
        e[1] / 65535 * 255,
        e[2] / 65535 * 255
    ];
}, Ye.rgb.apple = function(e) {
    return [
        e[0] / 255 * 65535,
        e[1] / 255 * 65535,
        e[2] / 255 * 65535
    ];
}, Ye.gray.rgb = function(e) {
    return [
        e[0] / 100 * 255,
        e[0] / 100 * 255,
        e[0] / 100 * 255
    ];
}, Ye.gray.hsl = function(e) {
    return [
        0,
        0,
        e[0]
    ];
}, Ye.gray.hsv = Ye.gray.hsl, Ye.gray.hwb = function(e) {
    return [
        0,
        100,
        e[0]
    ];
}, Ye.gray.cmyk = function(e) {
    return [
        0,
        0,
        0,
        e[0]
    ];
}, Ye.gray.lab = function(e) {
    return [
        e[0],
        0,
        0
    ];
}, Ye.gray.hex = function(e) {
    const t = 255 & Math.round(e[0] / 100 * 255), n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
    return "000000".substring(n.length) + n;
}, Ye.rgb.gray = function(e) {
    return [
        (e[0] + e[1] + e[2]) / 3 / 255 * 100
    ];
};
var Ke;
function et(e) {
    const t = function() {
        const e = {}, t = Object.keys(Ve);
        for(let n = t.length, r = 0; r < n; r++)e[t[r]] = {
            distance: -1,
            parent: null
        };
        return e;
    }(), n = [
        e
    ];
    for(t[e].distance = 0; n.length;){
        const e1 = n.pop(), r = Object.keys(Ve[e1]);
        for(let s = r.length, i = 0; i < s; i++){
            const s1 = r[i], a = t[s1];
            -1 === a.distance && (a.distance = t[e1].distance + 1, a.parent = e1, n.unshift(s1));
        }
    }
    return t;
}
function tt(e, t) {
    return function(n) {
        return t(e(n));
    };
}
function nt(e, t) {
    const n = [
        t[e].parent,
        e
    ];
    let r = Ve[t[e].parent][e], s = t[e].parent;
    for(; t[s].parent;)n.unshift(t[s].parent), r = tt(Ve[t[s].parent][s], r), s = t[s].parent;
    return r.conversion = n, r;
}
Ke = function(e) {
    const t = et(e), n = {}, r = Object.keys(t);
    for(let e1 = r.length, s = 0; s < e1; s++){
        const e2 = r[s];
        null !== t[e2].parent && (n[e2] = nt(e2, t));
    }
    return n;
};
const rt = {};
Object.keys(Ve).forEach((e)=>{
    rt[e] = {}, Object.defineProperty(rt[e], "channels", {
        value: Ve[e].channels
    }), Object.defineProperty(rt[e], "labels", {
        value: Ve[e].labels
    });
    const t = Ke(e);
    Object.keys(t).forEach((n)=>{
        const r = t[n];
        rt[e][n] = function(e) {
            const t = function(...t) {
                const n = t[0];
                if (null == n) return n;
                n.length > 1 && (t = n);
                const r = e(t);
                if ("object" == typeof r) for(let e1 = r.length, t1 = 0; t1 < e1; t1++)r[t1] = Math.round(r[t1]);
                return r;
            };
            return "conversion" in e && (t.conversion = e.conversion), t;
        }(r), rt[e][n].raw = function(e) {
            const t = function(...t) {
                const n = t[0];
                return null == n ? n : (n.length > 1 && (t = n), e(t));
            };
            return "conversion" in e && (t.conversion = e.conversion), t;
        }(r);
    });
}), Xe = rt;
const st = [
    "keyword",
    "gray",
    "hex"
], it = {};
for (const e3 of Object.keys(Xe))it[[
    ...Xe[e3].labels
].sort().join("")] = e3;
const at = {};
function ot(e, t) {
    if (!(this instanceof ot)) return new ot(e, t);
    if (t && t in st && (t = null), t && !(t in Xe)) throw new Error("Unknown model: " + t);
    let n, r;
    if (null == e) this.model = "rgb", this.color = [
        0,
        0,
        0
    ], this.valpha = 1;
    else if (e instanceof ot) this.model = e.model, this.color = [
        ...e.color
    ], this.valpha = e.valpha;
    else if ("string" == typeof e) {
        const t1 = Oe.get(e);
        if (null === t1) throw new Error("Unable to parse color from string: " + e);
        this.model = t1.model, r = Xe[this.model].channels, this.color = t1.value.slice(0, r), this.valpha = "number" == typeof t1.value[r] ? t1.value[r] : 1;
    } else if (e.length > 0) {
        this.model = t || "rgb", r = Xe[this.model].channels;
        const n1 = Array.prototype.slice.call(e, 0, r);
        this.color = ht(n1, r), this.valpha = "number" == typeof e[r] ? e[r] : 1;
    } else if ("number" == typeof e) this.model = "rgb", this.color = [
        e >> 16 & 255,
        e >> 8 & 255,
        255 & e
    ], this.valpha = 1;
    else {
        this.valpha = 1;
        const t2 = Object.keys(e);
        "alpha" in e && (t2.splice(t2.indexOf("alpha"), 1), this.valpha = "number" == typeof e.alpha ? e.alpha : 0);
        const r1 = t2.sort().join("");
        if (!(r1 in it)) throw new Error("Unable to parse color from object: " + JSON.stringify(e));
        this.model = it[r1];
        const { labels: s  } = Xe[this.model], i = [];
        for(n = 0; n < s.length; n++)i.push(e[s[n]]);
        this.color = ht(i);
    }
    if (at[this.model]) for(r = Xe[this.model].channels, n = 0; n < r; n++){
        const e1 = at[this.model][n];
        e1 && (this.color[n] = e1(this.color[n]));
    }
    this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this);
}
ot.prototype = {
    toString () {
        return this.string();
    },
    toJSON () {
        return this[this.model]();
    },
    string (e) {
        let t = this.model in Oe.to ? this : this.rgb();
        t = t.round("number" == typeof e ? e : 1);
        const n = 1 === t.valpha ? t.color : [
            ...t.color,
            this.valpha
        ];
        return Oe.to[t.model](n);
    },
    percentString (e) {
        const t = this.rgb().round("number" == typeof e ? e : 1), n = 1 === t.valpha ? t.color : [
            ...t.color,
            this.valpha
        ];
        return Oe.to.rgb.percent(n);
    },
    array () {
        return 1 === this.valpha ? [
            ...this.color
        ] : [
            ...this.color,
            this.valpha
        ];
    },
    object () {
        const e = {}, { channels: t  } = Xe[this.model], { labels: n  } = Xe[this.model];
        for(let r = 0; r < t; r++)e[n[r]] = this.color[r];
        return 1 !== this.valpha && (e.alpha = this.valpha), e;
    },
    unitArray () {
        const e = this.rgb().color;
        return e[0] /= 255, e[1] /= 255, e[2] /= 255, 1 !== this.valpha && e.push(this.valpha), e;
    },
    unitObject () {
        const e = this.rgb().object();
        return e.r /= 255, e.g /= 255, e.b /= 255, 1 !== this.valpha && (e.alpha = this.valpha), e;
    },
    round (e) {
        return e = Math.max(e || 0, 0), new ot([
            ...this.color.map(lt(e)),
            this.valpha
        ], this.model);
    },
    alpha (e) {
        return void 0 !== e ? new ot([
            ...this.color,
            Math.max(0, Math.min(1, e))
        ], this.model) : this.valpha;
    },
    red: ct("rgb", 0, ut(255)),
    green: ct("rgb", 1, ut(255)),
    blue: ct("rgb", 2, ut(255)),
    hue: ct([
        "hsl",
        "hsv",
        "hsl",
        "hwb",
        "hcg"
    ], 0, (e)=>(e % 360 + 360) % 360),
    saturationl: ct("hsl", 1, ut(100)),
    lightness: ct("hsl", 2, ut(100)),
    saturationv: ct("hsv", 1, ut(100)),
    value: ct("hsv", 2, ut(100)),
    chroma: ct("hcg", 1, ut(100)),
    gray: ct("hcg", 2, ut(100)),
    white: ct("hwb", 1, ut(100)),
    wblack: ct("hwb", 2, ut(100)),
    cyan: ct("cmyk", 0, ut(100)),
    magenta: ct("cmyk", 1, ut(100)),
    yellow: ct("cmyk", 2, ut(100)),
    black: ct("cmyk", 3, ut(100)),
    x: ct("xyz", 0, ut(95.047)),
    y: ct("xyz", 1, ut(100)),
    z: ct("xyz", 2, ut(108.833)),
    l: ct("lab", 0, ut(100)),
    a: ct("lab", 1),
    b: ct("lab", 2),
    keyword (e) {
        return void 0 !== e ? new ot(e) : Xe[this.model].keyword(this.color);
    },
    hex (e) {
        return void 0 !== e ? new ot(e) : Oe.to.hex(this.rgb().round().color);
    },
    hexa (e) {
        if (void 0 !== e) return new ot(e);
        const t = this.rgb().round().color;
        let n = Math.round(255 * this.valpha).toString(16).toUpperCase();
        return 1 === n.length && (n = "0" + n), Oe.to.hex(t) + n;
    },
    rgbNumber () {
        const e = this.rgb().color;
        return (255 & e[0]) << 16 | (255 & e[1]) << 8 | 255 & e[2];
    },
    luminosity () {
        const e = this.rgb().color, t = [];
        for (const [n, r] of e.entries()){
            const e1 = r / 255;
            t[n] = e1 <= .04045 ? e1 / 12.92 : ((e1 + .055) / 1.055) ** 2.4;
        }
        return .2126 * t[0] + .7152 * t[1] + .0722 * t[2];
    },
    contrast (e) {
        const t = this.luminosity(), n = e.luminosity();
        return t > n ? (t + .05) / (n + .05) : (n + .05) / (t + .05);
    },
    level (e) {
        const t = this.contrast(e);
        return t >= 7 ? "AAA" : t >= 4.5 ? "AA" : "";
    },
    isDark () {
        const e = this.rgb().color;
        return (2126 * e[0] + 7152 * e[1] + 722 * e[2]) / 1e4 < 128;
    },
    isLight () {
        return !this.isDark();
    },
    negate () {
        const e = this.rgb();
        for(let t = 0; t < 3; t++)e.color[t] = 255 - e.color[t];
        return e;
    },
    lighten (e) {
        const t = this.hsl();
        return t.color[2] += t.color[2] * e, t;
    },
    darken (e) {
        const t = this.hsl();
        return t.color[2] -= t.color[2] * e, t;
    },
    saturate (e) {
        const t = this.hsl();
        return t.color[1] += t.color[1] * e, t;
    },
    desaturate (e) {
        const t = this.hsl();
        return t.color[1] -= t.color[1] * e, t;
    },
    whiten (e) {
        const t = this.hwb();
        return t.color[1] += t.color[1] * e, t;
    },
    blacken (e) {
        const t = this.hwb();
        return t.color[2] += t.color[2] * e, t;
    },
    grayscale () {
        const e = this.rgb().color, t = .3 * e[0] + .59 * e[1] + .11 * e[2];
        return ot.rgb(t, t, t);
    },
    fade (e) {
        return this.alpha(this.valpha - this.valpha * e);
    },
    opaquer (e) {
        return this.alpha(this.valpha + this.valpha * e);
    },
    rotate (e) {
        const t = this.hsl();
        let n = t.color[0];
        return n = (n + e) % 360, n = n < 0 ? 360 + n : n, t.color[0] = n, t;
    },
    mix (e, t) {
        if (!e || !e.rgb) throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof e);
        const n = e.rgb(), r = this.rgb(), s = void 0 === t ? .5 : t, i = 2 * s - 1, a = n.alpha() - r.alpha(), o = ((i * a == -1 ? i : (i + a) / (1 + i * a)) + 1) / 2, l = 1 - o;
        return ot.rgb(o * n.red() + l * r.red(), o * n.green() + l * r.green(), o * n.blue() + l * r.blue(), n.alpha() * s + r.alpha() * (1 - s));
    }
};
for (const e4 of Object.keys(Xe)){
    if (st.includes(e4)) continue;
    const { channels: t2  } = Xe[e4];
    ot.prototype[e4] = function(...t) {
        var n;
        return this.model === e4 ? new ot(this) : t.length > 0 ? new ot(t, e4) : new ot([
            ...(n = Xe[this.model][e4].raw(this.color), Array.isArray(n) ? n : [
                n
            ]),
            this.valpha
        ], e4);
    }, ot[e4] = function(...n) {
        let r = n[0];
        return "number" == typeof r && (r = ht(n, t2)), new ot(r, e4);
    };
}
function lt(e) {
    return function(t) {
        return function(e, t) {
            return Number(e.toFixed(t));
        }(t, e);
    };
}
function ct(e, t, n) {
    e = Array.isArray(e) ? e : [
        e
    ];
    for (const r of e)(at[r] || (at[r] = []))[t] = n;
    return e = e[0], function(r) {
        let s;
        return void 0 !== r ? (n && (r = n(r)), s = this[e](), s.color[t] = r, s) : (s = this[e]().color[t], n && (s = n(s)), s);
    };
}
function ut(e) {
    return function(t) {
        return Math.max(0, Math.min(e, t));
    };
}
function ht(e, t) {
    for(let n = 0; n < t; n++)"number" != typeof e[n] && (e[n] = 0);
    return e;
}
je = ot;
const dt = (e = "blue")=>`\n    background-color: ${e};\n    color: ${je(e).isDark() ? "white" : "black"};\n    `.trim(), pt = ({ color: e = "blue" , lighten: t = .2 , saturate: r = .2  })=>{
    const s = new (n(je))(e);
    s.lighten(t).saturate(r);
    return `\n    ${dt(s.toString())}\n    &:hover {\n        background-color: ${s.lighten(t).saturate(r).toString()};\n    }\n    &:active {\n        background-color: ${s.lighten(-t).saturate(r).toString()};\n    }`.trim();
}, ft = ({ vwMin: e = 300 , vwMax: t = 1200 , fontSizeMin: n = 16 , fontSizeMax: r = 18  } = {})=>`\n    font-size: ${n}px;\n    @media screen and (min-width: ${e}px) {\n        font-size: calc(\n            ${n}px + ${`(${r} - ${n}) * ${`(100vw - ${e}px) / (${t} - ${e})`}`}\n        );\n    }\n    @media screen and (min-width: ${t}px) {\n        font-size: ${r}px;\n    }\n    `.trim(), gt = ({ level: e = 3 , shadowColor: t = "rgb(0, 0, 0, 50%)"  })=>{
    (e < 0 || e > 5) && (e = 0);
    return `box-shadow: ${[
        `0 0 0 0 ${t}`,
        `0 1px 3px 0 ${t}`,
        `0 2px 5px 0 ${t}`,
        `0 4px 9px 0 ${t}`,
        `0 8px 17px 0 ${t}`,
        `0 16px 33px 0 ${t}`
    ][e]};`.trim();
};
class mt extends ze {
    static default = {
        color: "blue"
    };
    static css(e = {}) {
        return e = {
            ...this.default,
            ...e
        }, `\n        display: inline-flex;\n        justify-content: center;\n        align-items: center;\n        font-size: 1em;\n        line-height: initial;\n        border-radius: 20em;\n        padding-left: 0.2em;\n        padding-right: 0.2em;\n        min-width: 1.5em;\n        min-height: 1.7em;\n        ${this.style(e)}\n        `.trim();
    }
    static style(e = {}) {
        return `\n        ${this._color(e)}\n        `.trim();
    }
    static _color(e = {}) {
        return null == e.color ? "" : dt(e.color);
    }
}
class bt extends Ne {
    static Style = mt;
    static tagStyle(e) {
        super.tagStyle(e);
    }
    static classStyle(e, t) {
        super.classStyle(e, t);
    }
    addStyle(e) {
        super.addStyle(e);
    }
}
class yt extends ze {
    static default = {
        arrow: "top",
        arrowSize: "8px",
        position: "50%",
        bgColor: "#ccc",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "black",
        borderRadius: "4px"
    };
    static css(e = {}) {
        return e = {
            ...this.default,
            ...e
        }, `\n        display: inline-block;\n        position: relative;\n\n        div[el="box"] {\n            position: relative;\n            background: inherit;\n            z-index: 1;\n        }\n\n        div[el="arrows"] {\n            background: inherit;\n        }\n\n        div[el="arrow-top"] {\n            position: absolute;\n            top: 0;\n            background: inherit;\n            transform: translate(-50%, -50%) rotate(45deg);\n        }\n\n        div[el="arrow-right"] {\n            position: absolute;\n            right: 0;\n            background: inherit;\n            transform: translate(50%, -50%) rotate(135deg);\n        }\n\n        div[el="arrow-bottom"] {\n            position: absolute;\n            bottom: 0;\n            background: inherit;\n            transform: translate(50%, 50%) rotate(225deg);\n        }\n\n        div[el="arrow-left"] {\n            position: absolute;\n            left: 0;\n            background: inherit;\n            transform: translate(-50%, 50%) rotate(315deg);\n        }\n        ${this.style(e)}\n        `.trim();
    }
    static style(e = {}) {
        return `\n        ${this._arrow(e)}\n        ${this._arrowSize(e)}\n        ${this._position(e)}\n        ${this._bgColor(e)}\n        ${this._borderWidth(e)}\n        ${this._borderStyle(e)}\n        ${this._borderColor(e)}\n        ${this._borderRadius(e)}\n\n        `.trim();
    }
    static _arrow(e = {}) {
        if (null == e.arrow) return "";
        return `\n        div[el^="arrow-"] {\n            display: none;\n        }\n        div[el="arrow-${e.arrow}"] {\n            display: block;\n        }\n        `.trim();
    }
    static _arrowSize(e = {}) {
        if (null == e.arrowSize) return "";
        return `\n        div[el^="arrow-"] {\n            width: ${e.arrowSize};\n            height: ${e.arrowSize};\n        }\n        `.trim();
    }
    static _position(e = {}) {
        if (null == e.position) return "";
        return `\n        div[el="arrow-top"] {\n            left: ${e.position};\n        }\n        div[el="arrow-right"] {\n            top: ${e.position};\n        }\n        div[el="arrow-bottom"] {\n            right: ${e.position};\n        }\n        div[el="arrow-left"] {\n            bottom: ${e.position};\n        }\n        `.trim();
    }
    static _bgColor(e = {}) {
        if (null == e.bgColor) return "";
        return `\n        ${dt(e.bgColor)}\n        `.trim();
    }
    static _borderWidth(e = {}) {
        if (null == e.borderWidth) return "";
        return `\n        border-width: ${e.borderWidth};\n        div[el^="arrow-"] {\n            border-width: ${e.borderWidth}\n        }\n        `.trim();
    }
    static _borderStyle(e = {}) {
        if (null == e.borderStyle) return "";
        return `\n        border-style: ${e.borderStyle};\n        div[el^="arrow-"] {\n            border-style: ${e.borderStyle}\n        }\n        `.trim();
    }
    static _borderColor(e = {}) {
        if (null == e.borderColor) return "";
        return `\n        border-color: ${e.borderColor};\n        div[el^="arrow-"] {\n            border-color: ${e.borderColor};\n            border-bottom-color: transparent;\n            border-right-color: transparent;\n        }\n        `.trim();
    }
    static _borderRadius(e = {}) {
        if (null == e.borderRadius) return "";
        return `\n        border-radius: ${e.borderRadius};\n        div[el="box"] {\n            border-radius: ${e.borderRadius};\n        }\n        `.trim();
    }
}
var vt = (e)=>({
        get: (t)=>e.get(t),
        set: (t, n)=>(e.set(t, n), n)
    });
const wt = /([^\s\\>"'=]+)\s*=\s*(['"]?)$/, xt = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i, kt = /<[a-z][^>]+$/i, $t = />[^<>]*$/, St = /<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/gi, Ct = /\s+$/, _t = (e, t)=>0 < t-- && (kt.test(e[t]) || !$t.test(e[t]) && _t(e, t)), At = (e, t, n)=>xt.test(t) ? e : `<${t}${n.replace(Ct, "")}></${t}>`;
var Mt = (e, t, n)=>{
    const r = [], { length: s  } = e;
    for(let n1 = 1; n1 < s; n1++){
        const s1 = e[n1 - 1];
        r.push(wt.test(s1) && _t(e, n1) ? s1.replace(wt, (e, r, s)=>`${t}${n1 - 1}=${s || '"'}${r}${s ? "" : '"'}`) : `${s1}\x3c!--${t}${n1 - 1}--\x3e`);
    }
    r.push(e[s - 1]);
    const i = r.join("").trim();
    return n ? i : i.replace(St, At);
};
const { isArray: Lt  } = Array, { indexOf: Et , slice: zt  } = [], Nt = (e, t)=>111 === e.nodeType ? 1 / t < 0 ? t ? (({ firstChild: e , lastChild: t  })=>{
        const n = document.createRange();
        return n.setStartAfter(e), n.setEndAfter(t), n.deleteContents(), e;
    })(e) : e.lastChild : t ? e.valueOf() : e.firstChild : e, Tt = (e)=>{
    const { childNodes: t  } = e, { length: n  } = t;
    if (n < 2) return n ? t[0] : e;
    const r = zt.call(t, 0);
    return {
        ELEMENT_NODE: 1,
        nodeType: 111,
        firstChild: r[0],
        lastChild: r[n - 1],
        valueOf () {
            if (t.length !== n) {
                let t1 = 0;
                for(; t1 < n;)e.appendChild(r[t1++]);
            }
            return e;
        }
    };
};
var Rt = (e, t, n, r, s)=>{
    const i = n.length;
    let a = t.length, o = i, l = 0, c = 0, u = null;
    for(; l < a || c < o;)if (a === l) {
        const t1 = o < i ? c ? r(n[c - 1], -0).nextSibling : r(n[o - c], 0) : s;
        for(; c < o;)e.insertBefore(r(n[c++], 1), t1);
    } else if (o === c) for(; l < a;)u && u.has(t[l]) || e.removeChild(r(t[l], -1)), l++;
    else if (t[l] === n[c]) l++, c++;
    else if (t[a - 1] === n[o - 1]) a--, o--;
    else if (t[l] === n[o - 1] && n[c] === t[a - 1]) {
        const s1 = r(t[--a], -1).nextSibling;
        e.insertBefore(r(n[c++], 1), r(t[l++], -1).nextSibling), e.insertBefore(r(n[--o], 1), s1), t[a] = n[o];
    } else {
        if (!u) {
            u = new Map;
            let e1 = c;
            for(; e1 < o;)u.set(n[e1], e1++);
        }
        if (u.has(t[l])) {
            const s2 = u.get(t[l]);
            if (c < s2 && s2 < o) {
                let i1 = l, h = 1;
                for(; ++i1 < a && i1 < o && u.get(t[i1]) === s2 + h;)h++;
                if (h > s2 - c) {
                    const i2 = r(t[l], 0);
                    for(; c < s2;)e.insertBefore(r(n[c++], 1), i2);
                } else e.replaceChild(r(n[c++], 1), r(t[l++], -1));
            } else l++;
        } else e.removeChild(r(t[l++], -1));
    }
    return n;
};
let jt = !1;
class Ot {
    constructor(e, t){
        jt = !0, this._ = (...n)=>e(...n, t);
    }
}
const qt = (e)=>(t)=>{
        for(const n in t){
            const r = "role" === n ? n : `aria-${n}`, s = t[n];
            null == s ? e.removeAttribute(r) : e.setAttribute(r, s);
        }
    }, It = (e, t)=>{
    let n, r = !0;
    const s = document.createAttributeNS(null, t);
    return (i)=>{
        if (n !== i) {
            if (n = i, null == n) r || (e.removeAttributeNode(s), r = !0);
            else {
                const n1 = jt && i instanceof Ot ? i._(e, t) : i;
                null == n1 ? (r || e.removeAttributeNode(s), r = !0) : (s.value = n1, r && (e.setAttributeNodeNS(s), r = !1));
            }
        }
    };
}, Wt = (e, t, n)=>(r)=>{
        n !== !!r && ((n = !!r) ? e.setAttribute(t, "") : e.removeAttribute(t));
    }, Pt = (e, t)=>{
    let n, r, s = t.slice(2);
    return !(t in e) && (r = t.toLowerCase()) in e && (s = r.slice(2)), (t)=>{
        const r = Lt(t) ? t : [
            t,
            !1
        ];
        n !== r[0] && (n && e.removeEventListener(s, n, r[1]), (n = r[0]) && e.addEventListener(s, n, r[1]));
    };
}, Ht = (e)=>{
    let t;
    return (n)=>{
        t !== n && (t = n, "function" == typeof n ? n(e) : n.current = e);
    };
}, Dt = (e, t)=>"dataset" === t ? (({ dataset: e  })=>(t)=>{
            for(const n in t){
                const r = t[n];
                null == r ? delete e[n] : e[n] = r;
            }
        })(e) : (n)=>{
        e[t] = n;
    }, Ft = (e)=>{
    let t;
    return (n)=>{
        t != n && (t = n, e.textContent = null == n ? "" : n);
    };
}, Bt = ({ childNodes: e  }, t)=>e[t], Gt = (e, t, n)=>Rt(e.parentNode, t, n, Nt, e), Ut = (e, t)=>{
    switch(t[0]){
        case "?":
            return Wt(e, t.slice(1), !1);
        case ".":
            return Dt(e, t.slice(1));
        case "@":
            return Pt(e, "on" + t.slice(1));
        case "o":
            if ("n" === t[1]) return Pt(e, t);
    }
    switch(t){
        case "ref":
            return Ht(e);
        case "aria":
            return qt(e);
    }
    return It(e, t);
};
function Zt(e) {
    const { type: t , path: n  } = e, r = n.reduceRight(Bt, this);
    return "node" === t ? ((e)=>{
        let t, n, r = [];
        const s = (i)=>{
            switch(typeof i){
                case "string":
                case "number":
                case "boolean":
                    t !== i && (t = i, n || (n = document.createTextNode("")), n.data = i, r = Gt(e, r, [
                        n
                    ]));
                    break;
                case "object":
                case "undefined":
                    if (null == i) {
                        t != i && (t = i, r = Gt(e, r, []));
                        break;
                    }
                    if (Lt(i)) {
                        t = i, 0 === i.length ? r = Gt(e, r, []) : "object" == typeof i[0] ? r = Gt(e, r, i) : s(String(i));
                        break;
                    }
                    t !== i && "ELEMENT_NODE" in i && (t = i, r = Gt(e, r, 11 === i.nodeType ? zt.call(i.childNodes) : [
                        i
                    ]));
                    break;
                case "function":
                    s(i(e));
            }
        };
        return s;
    })(r) : "attr" === t ? Ut(r, e.name) : Ft(r);
}
/*! (c) Andrea Giammarchi - ISC */ var Vt = function(e) {
    "use strict";
    var t = "fragment", n = "template", r = "content" in i(n) ? function(e) {
        var t = i(n);
        return t.innerHTML = e, t.content;
    } : function(e) {
        var r = i(t), a = i(n), o = null;
        if (/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)) {
            var l = RegExp.$1;
            a.innerHTML = "<table>" + e + "</table>", o = a.querySelectorAll(l);
        } else a.innerHTML = e, o = a.childNodes;
        return s(r, o), r;
    };
    return function(e, t) {
        return ("svg" === t ? a : r)(e);
    };
    function s(e, t) {
        for(var n = t.length; n--;)e.appendChild(t[0]);
    }
    function i(n) {
        return n === t ? e.createDocumentFragment() : e.createElementNS("http://www.w3.org/1999/xhtml", n);
    }
    function a(e) {
        var n = i(t), r = i("div");
        return r.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + e + "</svg>", s(n, r.firstChild.childNodes), n;
    }
}(document);
const Qt = 1 != document.importNode.length, Xt = Qt ? (e, t, n)=>document.importNode(Vt(e, t, n), !0) : Vt, Jt = Qt ? (e)=>document.createTreeWalker(e, 129, null, !1) : (e)=>document.createTreeWalker(e, 129), Yt = (e)=>{
    const t = [];
    let { parentNode: n  } = e;
    for(; n;)t.push(Et.call(n.childNodes, e)), n = (e = n).parentNode;
    return t;
}, Kt = "is\xb5", en = vt(new WeakMap), tn = /^(?:plaintext|script|style|textarea|title|xmp)$/i, nn = (e, t)=>{
    const n = Mt(t, Kt, "svg" === e), r = Xt(n, e), s = Jt(r), i = [], a = t.length - 1;
    let o = 0, l = `${Kt}${o}`;
    for(; o < a;){
        const e1 = s.nextNode();
        if (!e1) throw `bad template: ${n}`;
        if (8 === e1.nodeType) e1.data === l && (i.push({
            type: "node",
            path: Yt(e1)
        }), l = `${Kt}${++o}`);
        else {
            for(; e1.hasAttribute(l);)i.push({
                type: "attr",
                path: Yt(e1),
                name: e1.getAttribute(l)
            }), e1.removeAttribute(l), l = `${Kt}${++o}`;
            tn.test(e1.tagName) && e1.textContent.trim() === `\x3c!--${l}--\x3e` && (e1.textContent = "", i.push({
                type: "text",
                path: Yt(e1)
            }), l = `${Kt}${++o}`);
        }
    }
    return {
        content: r,
        nodes: i
    };
}, rn = (e, t)=>{
    const { content: n , nodes: r  } = en.get(t) || en.set(t, nn(e, t)), s = document.importNode(n, !0);
    return {
        content: s,
        updates: r.map(Zt, s)
    };
}, sn = (e, { type: t , template: n , values: r  })=>{
    const { length: s  } = r;
    an(e, r, s);
    let { entry: i  } = e;
    i && i.template === n && i.type === t || (e.entry = i = ((e, t)=>{
        const { content: n , updates: r  } = rn(e, t);
        return {
            type: e,
            template: t,
            content: n,
            updates: r,
            wire: null
        };
    })(t, n));
    const { content: a , updates: o , wire: l  } = i;
    for(let e1 = 0; e1 < s; e1++)o[e1](r[e1]);
    return l || (i.wire = Tt(a));
}, an = ({ stack: e  }, t, n)=>{
    for(let r = 0; r < n; r++){
        const n1 = t[r];
        n1 instanceof on ? t[r] = sn(e[r] || (e[r] = {
            stack: [],
            entry: null,
            wire: null
        }), n1) : Lt(n1) ? an(e[r] || (e[r] = {
            stack: [],
            entry: null,
            wire: null
        }), n1, n1.length) : e[r] = null;
    }
    n < e.length && e.splice(n);
};
function on(e, t, n) {
    this.type = e, this.template = t, this.values = n;
}
const { create: ln , defineProperties: cn  } = Object, un = (e)=>{
    const t = vt(new WeakMap);
    return cn((t, ...n)=>new on(e, t, n), {
        for: {
            value (n, r) {
                const s = t.get(n) || t.set(n, ln(null));
                var i;
                return s[r] || (s[r] = (i = {
                    stack: [],
                    entry: null,
                    wire: null
                }, (t, ...n)=>sn(i, {
                        type: e,
                        template: t,
                        values: n
                    })));
            }
        },
        node: {
            value: (t, ...n)=>sn({
                    stack: [],
                    entry: null,
                    wire: null
                }, {
                    type: e,
                    template: t,
                    values: n
                }).valueOf()
        }
    });
}, hn = vt(new WeakMap), dn = (e, t)=>{
    const n = "function" == typeof t ? t() : t, r = hn.get(e) || hn.set(e, {
        stack: [],
        entry: null,
        wire: null
    }), s = n instanceof on ? sn(r, n) : n;
    return s !== r.wire && (r.wire = s, e.textContent = "", e.appendChild(s.valueOf())), e;
}, pn = un("html"), fn = un("svg");
class gn extends Ne {
    static Style = yt;
    static tagStyle(e) {
        super.tagStyle(e);
    }
    static classStyle(e, t) {
        super.classStyle(e, t);
    }
    addStyle(e) {
        super.addStyle(e);
    }
    constructor(){
        super(), this._innerHTML = this.innerHTML, this.render();
    }
    render() {
        dn(this, pn`
        <div el="box"></div>
        <div el="arrows">
            <div el="arrow-top"></div>
            <div el="arrow-right"></div>
            <div el="arrow-bottom"></div>
            <div el="arrow-left"></div>
        </div>
        `);
        this.querySelector('[el="box"]').innerHTML = this._innerHTML;
    }
}
class mn extends ze {
    static default = {
        color: "blue",
        borderRadius: "4px"
    };
    static css(e = {}) {
        return e = {
            ...this.default,
            ...e
        }, `\n        border: 0;\n        font-size: 1em;\n        line-height: 1;\n        font-weight: bold;\n        text-decoration: none;\n        outline: none;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        height: 2em;\n        padding-left: 0.4em;\n        padding-right: 0.4em;\n        cursor: pointer;\n        transition: 0.2s;\n        box-sizing: border-box;\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        &[disabled]:hover {\n            cursor: not-allowed;\n        }\n        a {\n            text-decoration: none;\n        }\n        ${gt({
            level: 1
        })}\n        &:hover {\n            ${gt({
            level: 2
        })};\n        }\n        &:active {\n            ${gt({
            level: 1
        })};\n        }\n        ${this.style(e)}\n        `.trim();
    }
    static style(e = {}) {
        return `\n        ${this._color(e)}\n        ${this._borderRadius(e)}\n        `.trim();
    }
    static _color(e = {}) {
        if (null == e.color) return "";
        return `\n        ${pt({
            color: e.color
        })}\n        `.trim();
    }
    static _borderRadius(e = {}) {
        if (null == e.borderRadius) return "";
        return `\n        border-radius: ${e.borderRadius};\n        `.trim();
    }
}
class bn extends Ne {
    static Style = mn;
    static tagName = "button";
    static define(e) {
        if ("button" === e.toLocaleLowerCase()) return this.tagName = "button", void this.initStyle();
        super.define(e);
    }
    static tagStyle(e) {
        super.tagStyle(e);
    }
    static classStyle(e, t) {
        super.classStyle(e, t);
    }
    addStyle(e) {
        super.addStyle(e);
    }
}
class yn extends ze {
    static default = {
        borderRadius: "4px"
    };
    static css(e = {}) {
        return e = {
            ...this.default,
            ...e
        }, `\n        display: inline-flex;\n        ${this.style(e)}\n        `.trim();
    }
    static style(e = {}) {
        if (null == e.borderRadius) return "";
        return `\n        > * {\n            border-radius: 0;\n            &:first-of-type {\n                border-radius: ${e.borderRadius} 0 0 ${e.borderRadius};\n            }\n            &:last-of-type {\n                border-radius: 0 ${e.borderRadius} ${e.borderRadius} 0;\n            }\n        }\n        `.trim();
    }
}
class vn extends Ne {
    static Style = yn;
    static tagStyle(e) {
        super.tagStyle(e);
    }
    static classStyle(e, t) {
        super.classStyle(e, t);
    }
    addStyle(e) {
        super.addStyle(e);
    }
}
class wn extends ze {
    static default = {
        color: "blue"
    };
    static css(e = {}) {
        return e = {
            ...this.default,
            ...e
        }, `\n        ${mn.css(e)}\n        user-select: none;\n        border-radius: 50%;\n        min-width: 2em;\n        min-height: 2em;\n        ${this.style(e)}\n        `.trim();
    }
    static style(e = {}) {
        if (null == e.color) return "";
        return `\n        ${mn.style(e)}\n        border-radius: 50%;\n        `.trim();
    }
}
class xn extends Ne {
    static Style = wn;
    static tagStyle(e) {
        super.tagStyle(e);
    }
    static classStyle(e, t) {
        super.classStyle(e, t);
    }
    addStyle(e) {
        super.addStyle(e);
    }
}
class kn extends ze {
    static default = {
        color: "blue",
        borderRadius: "4px"
    };
    static css(e = {}) {
        return e = {
            ...this.default,
            ...e
        }, `\n        ${mn.css(e)}\n        user-select: none;\n        ${Te("1/1")}\n        ${this.style(e)}\n        `.trim();
    }
    static style(e = {}) {
        return `\n        ${mn.style(e)}\n        `.trim();
    }
}
class $n extends Ne {
    static Style = kn;
    static tagStyle(e) {
        super.tagStyle(e);
    }
    static classStyle(e, t) {
        super.classStyle(e, t);
    }
    addStyle(e) {
        super.addStyle(e);
    }
    constructor(){
        super(), this.classList.add("button");
    }
}
class Sn extends ze {
    static default = {
        color: "#eee",
        borderRadius: "4px"
    };
    static css(e) {
        return e = {
            ...this.default,
            ...e
        }, `\n        display: block;\n        ${gt({
            level: 3
        })}\n        ${this.style(e)}\n        `.trim();
    }
    static style(e = {}) {
        return `\n        ${this._color(e)}\n        ${this._borderRadius(e)}\n        `.trim();
    }
    static _color(e = {}) {
        return null == e.color ? "" : `\n        ${dt(e.color)}\n        `.trim();
    }
    static _borderRadius(e = {}) {
        return null == e.borderRadius ? "" : `\n        border-radius: ${e.borderRadius};\n        overflow: hidden;\n        `.trim();
    }
}
class Cn extends Ne {
    static Style = Sn;
    static tagStyle(e) {
        super.tagStyle(e);
    }
    static classStyle(e, t) {
        super.classStyle(e, t);
    }
    addStyle(e) {
        super.addStyle(e);
    }
}
class _n extends ze {
    static default = {
        bgColor: "#ccc",
        activeColor: "blue"
    };
    static css(e = {}) {
        return e = {
            ...this.default,
            ...e
        }, `\n        position: relative;\n        width: 1em;\n        height: 1em;\n        user-select: none;\n        display: inline-block;\n\n        /* Hide the browser's default checkbox */\n        input {\n            opacity: 0;\n            cursor: pointer;\n            width: 1em;\n            height: 1em;\n            margin: 0;\n            position: absolute;\n            top: 1;\n            left: 0;\n            z-index: 1;\n        }\n\n        /* Create a custom checkbox */\n        span {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 1em;\n            height: 1em;\n            box-shadow: 0 1px 1px 0 grey;\n        }\n\n        /* Create the checkmark/indicator (hidden when not checked) */\n        span:after {\n            content: "";\n            position: absolute;\n            display: none;\n        }\n\n        /* Show the checkmark when checked */\n        input:checked ~ span:after {\n            display: block;\n        }\n        ${this.style(e)}\n        `.trim();
    }
    static style(e = {}) {
        return `\n        ${this._bgColor(e)}\n        ${this._activeColor(e)}\n        `.trim();
    }
    static _bgColor(e = {}) {
        return null == e.bgColor ? "" : `\n        span {\n            background-color: ${e.bgColor};\n        }\n        `.trim();
    }
    static _activeColor(e = {}) {
        if (null == e.activeColor) return "";
        let t = "black";
        return je(e.activeColor).isDark() && (t = "white"), `\n        /* Style the checkmark/indicator */\n        span:after {\n            border: solid ${t};\n            left: 0.25em;\n            width: 0.3em;\n            height: 0.6em;\n            border-width: 0 0.2em 0.2em 0;\n            transform: rotate(45deg);\n        }\n\n        /* When the checkbox is checked, add background color */\n        input:checked ~ span {\n            background-color: ${e.activeColor};\n        }\n\n        /* On mouse-over, add background color */\n        &:hover input ~ span {\n            background-color: ${je(e.activeColor).lighten(.2)}\n        }\n        `.trim();
    }
}
class An extends Ne {
    static Style = _n;
    el = {
        checkbox: null
    };
    static tagStyle(e) {
        super.tagStyle(e);
    }
    static classStyle(e, t) {
        super.classStyle(e, t);
    }
    addStyle(e) {
        super.addStyle(e);
    }
    constructor(){
        super(), this.el.checkbox = this.querySelector('input[type="checkbox"]') || pn`<input type="checkbox">`, this.render();
    }
    render() {
        dn(this, pn`
        ${this.el.checkbox}
        <span></span>
        `), this.el.checkbox = this.querySelector('input[type="checkbox"]');
    }
}
class Mn extends ze {
    static css(e = {}) {
        return "\n        font-size: 1em;\n        border: 1px solid grey;\n        border-radius: 0.2em;\n        padding: 0.4em;\n        ".trim();
    }
}
class Ln extends Ne {
    static Style = Mn;
}
Le`
input {
    ${Mn.css()}
}`;
class En extends ze {
    static css(e = {}) {
        return '\n        display: inline-flex;\n        flex-wrap: wrap;\n        align-items: center;\n        position: relative;\n\n        [el="icon"] {\n            line-height: 0.8;\n            font-size: 2em;\n        }\n\n        input[type="date"] {\n            position: absolute;\n            left: 0;\n            top: 0;\n            width: 100%;\n            height: 100%;\n            opacity: 0;\n            cursor: pointer;\n            box-sizing: border-box;\n            padding: 0;\n            z-index: 100;\n        }\n\n        input[type="date"]::-webkit-calendar-picker-indicator {\n            position: absolute;\n            left: 0;\n            top: 0;\n            width: 100%;\n            height: 100%;\n            margin: 0;\n            padding: 0;\n            cursor: pointer;\n        }\n\n        span[el="display"] {\n            display: inline-flex;\n            flex-wrap: wrap;\n            justify-content: center;\n            align-items: center;\n            padding: 0 0.5em;\n            margin-left: 0.5em;\n            border: 2px solid;\n            border-radius: 0.2em;\n            min-width: 7rem;\n            height: 2em;\n            line-height: 1;\n\n        }\n        '.trim();
    }
}
class zn extends Ne {
    static Style = En;
    icon = fn`
    <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16" style="width: 1em; height: 1em;">
        <g fill="currentColor">
            <path d="M2.969 1.01c-1.053 0-2 .846-2 1.938v10.115c0 1.092.947 1.937 2 1.937H13c1.052 0 2-.845 2-1.937V2.948c0-1.092-.948-1.937-2-1.937zm0 3.99H5v2H2.969zM6 5h3v2H6zm4 0h3v2h-3zM2.969 8H5v2H2.969zM6 8h3v2H6zm4 0h3v2h-3zm-7.031 3H5v2H2.969zM6 11h3v2H6zm4 0h3v2h-3z" overflow="visible" />
            <path d="M10 8h3v2h-3z" overflow="visible" opacity=".35" />
        </g>
    </svg>
    `;
    el = {
        input: null,
        display: null
    };
    constructor(){
        super(), this.el.input = this.querySelector('input[type="date"]') || pn`<input type="date">`, this.render();
    }
    onChange(e) {
        let t = e.target;
        this.el.display.innerText = t.value;
    }
    render() {
        dn(this, pn`
            <div el="icon">${this.icon}</div>
            ${this.el.input}
            <span el="display"></span>
        `), this.el.input = this.querySelector("input"), this.el.input.addEventListener("change", (e)=>{
            this.onChange(e);
        }), this.el.display = this.querySelector('span[el="display"]'), this.el.display.innerText = this.el.input.value;
    }
}
class Nn extends ze {
    static default = {
        color: "blue"
    };
    static css(e = {}) {
        e = {
            ...this.default,
            ...e
        };
        return `\n        display: inline-flex;\n        height: 2em;\n        min-width: 7em;\n        input[type="number"] {\n            ${Mn.css()}\n            &::-webkit-inner-spin-button {\n                -webkit-appearance: none;\n            }\n            -moz-appearance: textfield;\n            text-align: center;\n            width: 4em;\n            border-radius: 0.2em 0 0 0.2em;\n        }\n        button[el="down"] {\n            ${kn.css({
            color: e.color
        })}\n            border-radius: 0;\n            width: 2em;\n        }\n        button[el="up"] {\n            ${kn.css({
            color: e.color
        })}\n            border-radius: 0 4px 4px 0;\n            width: 2em;\n        }\n        ${this.style(e)}\n        `.trim();
    }
    static style(e = {}) {
        return `\n        ${this._color(e)}\n        `.trim();
    }
    static _color(e = {}) {
        return null == e.color ? "" : `\n        button[el="down"] {\n            ${kn.style({
            color: e.color
        })}\n        }\n        button[el="up"] {\n            ${kn.style({
            color: e.color
        })}\n        }\n        `.trim();
    }
}
class Tn extends Ne {
    static Style = Nn;
    static tagStyle(e) {
        super.tagStyle(e);
    }
    static classStyle(e, t) {
        super.classStyle(e, t);
    }
    addStyle(e) {
        super.addStyle(e);
    }
    stepIntervalThreshold = null;
    _stepIntervalThreshold = null;
    stepInterval = null;
    _stepInterval = null;
    stepChangeDelay = null;
    stepChangeTimeout = null;
    el = {
        input: null
    };
    constructor(){
        super(), this.stepIntervalThreshold = parseInt(this.getAttribute("stepIntervalThreshold") || "700"), this.stepInterval = parseInt(this.getAttribute("stepInterval") || "100"), this.stepChangeDelay = parseInt(this.getAttribute("stepChangeDelay") || "1000"), this.el.input = this.querySelector('input[type="number"]') || pn`<input type="number">`, this.render();
    }
    render() {
        dn(this, pn`
            ${this.el.input}
            <button el="down"
                @mousedown=${()=>this.stepDownStart()}
                @mouseup=${()=>this.pressStop()}
                @mouseout=${()=>this.pressStop()}
            >-</button>
            <button el="up"
                @mousedown=${()=>this.stepUpStart()}
                @mouseup=${()=>this.pressStop()}
                @mouseout=${()=>this.pressStop()}
            >+</button>
        `), this.el.input = this.querySelector('input[type="number"]'), this.el.input.addEventListener("change", ()=>{
            this.oldValue = this.el.input.value, this.dispatchEvent(new Event("change"));
        });
    }
    emitStepChangeEvent() {
        clearTimeout(this.stepChangeTimeout), this.oldValue != this.el.input.value && (this.stepChangeTimeout = setTimeout(()=>{
            this.oldValue = this.el.input.value, this.dispatchEvent(new Event("change"));
        }, this.stepChangeDelay));
    }
    stepUpStart() {
        this.el.input.stepUp(), this._stepIntervalThreshold = setTimeout(()=>{
            this._stepInterval = setInterval(()=>{
                this.el.input.stepUp();
            }, this.stepInterval);
        }, this.stepIntervalThreshold);
    }
    stepDownStart() {
        this.el.input.stepDown(), this._stepIntervalThreshold = setTimeout(()=>{
            this._stepInterval = setInterval(()=>{
                this.el.input.stepDown();
            }, this.stepInterval);
        }, this.stepIntervalThreshold);
    }
    pressStop() {
        this._stepIntervalThreshold && (clearTimeout(this._stepIntervalThreshold), clearInterval(this._stepInterval), this.emitStepChangeEvent());
    }
}
class Rn extends ze {
    static css(e = {}) {
        return `\n        ${Nn.css()}\n        input[type="number"] {\n            border-radius: 0;\n        }\n        button[el="up"] {\n            z-index: 1;\n        }\n        button[el="down"] {\n            border-radius: 0.2em 0 0 0.2em;\n            z-index: 1;\n        }\n        ${this.style(e)}\n        `.trim();
    }
    static style(e = {}) {
        return `\n        ${Nn.style(e)}\n        `.trim();
    }
    static _color(e = {}) {
        return `\n        ${Nn._color(e)}\n        `.trim();
    }
}
class jn extends Tn {
    static Style = Rn;
    static tagStyle(e) {
        super.tagStyle(e);
    }
    static classStyle(e, t) {
        super.classStyle(e, t);
    }
    addStyle(e) {
        super.addStyle(e);
    }
    render() {
        dn(this, pn`
            <button el="down"
                @mousedown=${()=>this.stepDownStart()}
                @mouseup=${()=>this.pressStop()}
                @mouseout=${()=>this.pressStop()}
            >-</button>
            ${this.el.input}
            <button el="up"
                @mousedown=${()=>this.stepUpStart()}
                @mouseup=${()=>this.pressStop()}
                @mouseout=${()=>this.pressStop()}
            >+</button>
        `), this.el.input = this.querySelector('input[type="number"]'), this.el.input.addEventListener("change", ()=>{
            this.oldValue = this.el.input.value, this.dispatchEvent(new Event("change"));
        });
    }
}
class On extends ze {
    static default = {
        color: "#ccc",
        boxShadowColor: "#777",
        activeColor: "blue"
    };
    static css(e = {}) {
        e = {
            ...this.default,
            ...e
        };
        let t = "black";
        je(e.activeColor).isDark() && (t = "white");
        return `\n        position: relative;\n        display: inline-block;\n        font-size: 1em;\n        user-select: none;\n        width: 1.1em;\n        height: 1.1em;\n        input {\n            position: absolute;\n            z-index: 1;\n            top: 0;\n            left: 0;\n            opacity: 0;\n            cursor: pointer;\n            width: 1.1em;\n            height: 1.1em;\n            vertical-align: middle;\n        }\n\n        /* Create a custom radio button */\n        span {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 1.1em;\n            height: 1.1em;\n            border-radius: 50%;\n        }\n\n        /* Create the indicator (the dot/circle - hidden when not checked) */\n        span:after {\n            content: "";\n            position: absolute;\n            display: none;\n        }\n\n        /* Show the indicator (dot/circle) when checked */\n        input:checked ~ span:after {\n            display: block;\n        }\n\n        /* Style the indicator (dot/circle) */\n        span:after {\n            top: 0.35em;\n            left: 0.35em;\n            width: 0.4em;\n            height: 0.4em;\n            border-radius: 50%;\n            background-color: ${t};\n        }\n        ${this.style(e)}\n        `.trim();
    }
    static style(e = {}) {
        return `\n        ${this._color(e)}\n        ${this._boxShadowColor(e)}\n        ${this._activeColor(e)}\n        `.trim();
    }
    static _color(e = {}) {
        return null == e.color ? "" : `\n        span {\n            background-color: ${e.color};\n        }\n        `.trim();
    }
    static _boxShadowColor(e = {}) {
        return null == e.boxShadowColor ? "" : `\n        span {\n            box-shadow: 0 1px 1px 0 ${e.boxShadowColor};\n        }`.trim();
    }
    static _activeColor(e = {}) {
        return null == e.activeColor ? "" : `\n        /* On mouse-over, add a background color */\n        &:hover input ~ span {\n            background-color: ${je(e.activeColor).lighten(.2).saturate(.2)};\n        }\n\n        /* When the radio button is checked, add background color */\n        input:checked ~ span {\n            background-color: ${e.activeColor};\n        }`.trim();
    }
}
class qn extends Ne {
    static Style = On;
    static tagStyle(e) {
        super.tagStyle(e);
    }
    static classStyle(e, t) {
        super.classStyle(e, t);
    }
    addStyle(e) {
        super.addStyle(e);
    }
    el = {
        input: null
    };
    constructor(){
        super(), this.el.input = this.querySelector('input[type="radio"]') || pn`<input type="radio">`, this.render();
    }
    render() {
        dn(this, pn`
        ${this.el.input}
        <span></span>
        `), this.el.input = this.querySelector('input[type="radio"]');
    }
}
class In extends ze {
    static default = {
        tagColor: "blue",
        tagBorderRadius: "4px"
    };
    static css(e) {
        return '\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        cursor: text;\n        border: 1px solid grey;\n        border-radius: 4px;\n        background: white;\n        min-height: 2em;\n        min-width: 150px;\n        padding: 0.2em;\n\n        div[contenteditable="true"] {\n            display: flex;\n            align-items: center;\n            outline: none;\n            height: auto;\n            border: 0;\n            margin-left: 0.2em;\n        }\n        '.trim();
    }
}
class Wn extends ze {
    static default = {
        color: "blue",
        borderRadius: "4px"
    };
    static css(e = {}) {
        return e = {
            ...this.default,
            ...e
        }, `\n        display: inline-flex;\n        align-items: center;\n        padding: 0.1em 0.4em;\n        font-size: 0.9em;\n        line-height: unset;\n        ${this.style(e)}\n        `.trim();
    }
    static style(e = {}) {
        return `\n        ${this._color(e)}\n        ${this._borderRadius(e)}\n        `.trim();
    }
    static _color(e = {}) {
        return null == e.color ? "" : `\n        ${dt(e.color)}\n        box-shadow: 0 0.17em 0 0 ${je(e.color).darken(.5)};\n        `.trim();
    }
    static _borderRadius(e = {}) {
        return null == e.borderRadius ? "" : `\n        border-radius: ${e.borderRadius};\n        `.trim();
    }
}
class Pn extends Ne {
    static Style = Wn;
    static tagStyle(e) {
        super.tagStyle(e);
    }
    static classStyle(e, t) {
        super.classStyle(e, t);
    }
    addStyle(e) {
        super.addStyle(e);
    }
}
class Hn extends Wn {
    static default = {
        color: "blue",
        borderRadius: "4px"
    };
    static css(e = {}) {
        return e = {
            ...this.default,
            ...e
        }, `\n        ${super.css(e)}\n        padding-right: 0;\n        [el="remove"] {\n            margin-left: 0.3em;\n            padding-left: 0.4em;\n            padding-right: 0.5em;\n            font-weight: bold;\n            border-left: 1px solid;\n            cursor: pointer;\n        }\n        ${this.style(e)}\n        `.trim();
    }
    static style(e = {}) {
        return `\n        ${this._color(e)}\n        ${this._borderRadius(e)}\n        `.trim();
    }
    static _color(e = {}) {
        return null == e.color ? "" : `\n        ${pt({
            color: e.color
        })}\n        box-shadow: 0 0.17em 0 0 ${je(e.color).darken(.5)};\n        `.trim();
    }
    static _borderRadius(e = {}) {
        return null == e.borderRadius ? "" : super._borderRadius(e);
    }
}
class Dn extends Pn {
    static Style = Hn;
    static tagStyle(e) {
        super.tagStyle(e);
    }
    static classStyle(e, t) {
        super.classStyle(e, t);
    }
    addStyle(e) {
        super.addStyle(e);
    }
    el = {
        text: null
    };
    get text() {
        return this._text;
    }
    set text(e) {
        this._text = e, this.el.text.innerText = e;
    }
    constructor(){
        super(), this._text = this.innerText, this.render();
    }
    render() {
        dn(this, pn`
            <span el="text">${this.text}</span>
            <span el="remove" @click=${()=>{
            this.remove();
        }}>x</span>
        `), this.el.text = this.querySelector('span[el="text"]');
    }
    remove() {
        this.dispatchEvent(new Event("remove")), super.remove();
    }
}
class Fn extends Dn {
}
class Bn extends Ne {
    static Style = In;
    static define(e) {
        Ee(`${e}-tagx`, Fn), Le`
        ${Fn.tagName} {
            margin: 0.3em 0.2em;
        }
        `, super.define(e);
    }
    static tagStyle(e) {
        super.tagStyle(e), Fn.tagStyle({
            color: e.tagColor,
            borderRadius: e.tagBorderRadius
        });
    }
    static classStyle(e, t) {
        super.classStyle(e, t), Fn.classStyle(e, {
            color: t.tagColor,
            borderRadius: t.tagBorderRadius
        });
    }
    addStyle(e) {
        super.addStyle(e);
        for (let t of this.querySelectorAll(Fn.tagName))t.addStyle({
            color: e.tagColor,
            borderRadius: e.tagBorderRadius
        });
    }
    el = {
        input: null
    };
    get tags() {
        let e, t = [];
        for (e of this.querySelectorAll(`${this.tagName}-tagx`))t.push(e.text.trim());
        return t;
    }
    set tags(e) {
        this.clearTags(), this.addTags(e);
    }
    constructor(){
        super(), this.el.input = document.createElement("div"), this.el.input.setAttribute("contenteditable", !0), this.appendChild(this.el.input), this.addEventListener("click", ()=>{
            this.el.input.focus();
        }), this.el.input.addEventListener("keydown", (e)=>{
            this.keydown(e);
        }), this.el.input.addEventListener("blur", (e)=>{
            this.blur();
        });
    }
    keydown(e) {
        "Enter" === e.key ? (this.addTag(this.el.input.innerText.trim()), this.el.input.innerText = "") : "Backspace" === e.key && "" === this.el.input.innerText.trim() && this.el.input.previousSibling.remove();
    }
    blur() {
        this.addTag(this.el.input.innerText.trim()), this.el.input.innerText = "";
    }
    addTag(e) {
        if ("" == e) return;
        let t;
        for (t of this.querySelectorAll(`${this.tagName}-tagx`))if (t.text.trim() == e) return;
        let n = new Fn;
        this.insertBefore(n, this.el.input), n.text = e, n.addEventListener("remove", (e)=>{
            this.dispatchEvent(new CustomEvent("remove", {
                detail: {
                    tagx: e.target
                }
            }));
        });
    }
    addTags(e) {
        for (let t of e)this.addTag(t);
    }
    clearTags() {
        for (let e of this.querySelectorAll(Fn.tagName))e.remove();
    }
}
class Gn extends ze {
    static default = {
        hoverColor: "blue",
        arrowColor: "blue"
    };
    static css(e = {}) {
        e = {
            ...this.default,
            ...e
        };
        return `\n        display: block;\n        padding: 0;\n        margin: 0;\n        border: 1px solid blue;\n        border-radius: 0.2em;\n\n        .arrow i {\n            font-size: 1.2em;\n            float: right;\n            border-left: 0.25em solid transparent;\n            border-right: 0.25em solid transparent;\n            will-change: transform;\n            transform: rotateZ(90deg);\n            transition: transform 0.2s;\n        }\n\n        ul {\n            margin: 0;\n            padding-left: 1em;\n            transition: height 0.2s;\n            will-change: transition;\n        }\n\n        > ul {\n            padding-left: 0;\n        }\n\n        li {\n            list-style: none;\n            display: block;\n            overflow-y: hidden;\n            overflow-x: hidden;\n        }\n\n        a {\n            display: flex;\n            align-items: center;\n            cursor: pointer;\n            padding: 0.5em 1em;\n            div.content {\n                width: 100%;\n            }\n            div.arrow {\n                min-width: 1em;\n            }\n        }\n\n        a ~ ul {\n            height: 0;\n        }\n\n        a.show {\n            .arrow i {\n                transform: rotateZ(180deg);\n            }\n        }\n        ${this.style(e)}\n        `.trim();
    }
    static style(e = {}) {
        return `\n        ${this._hoverColor(e)}\n        ${this._arrowColor(e)}\n        `.trim();
    }
    static _hoverColor(e = {}) {
        if (null == e.hoverColor) return "";
        let t = "black";
        return je(e.hoverColor).isDark() && (t = "white"), `\n        a {\n            -webkit-tap-highlight-color: ${je(e.hoverColor)};\n        }\n        a:hover {\n            ${dt(e.hoverColor)};\n            .arrow i {\n                border-bottom-color: ${t};\n            }\n        }\n        `.trim();
    }
    static _arrowColor(e = {}) {
        return null == e.arrowColor ? "" : `\n        .arrow i {\n            border-bottom: 0.25em solid ${e.arrowColor};\n        }\n        `.trim();
    }
}
class Un extends Ne {
    static Style = Gn;
    constructor(){
        super();
        let e = this.querySelectorAll("a");
        for (let t of e){
            let e1 = t.innerHTML, n = document.createElement("div"), r = document.createElement("div"), s = document.createElement("i");
            n.classList.add("content"), r.classList.add("arrow"), t.innerHTML = "", n.innerHTML = e1, t.append(n), t.append(r), t.closest("li").querySelector("ul") && r.append(s), t.addEventListener("click", (e)=>{
                this.toggleShow(e.currentTarget);
            }), t.classList.contains("show") && this._show(t.parentElement);
        }
    }
    toggleShow(e) {
        e.classList.contains("show") ? this._hide(e.parentElement) : this._show(e.parentElement);
    }
    _hide(e) {
        for (let t of e.querySelectorAll("a")){
            t.classList.remove("show");
            let e1 = t.parentElement.querySelector("ul");
            e1 && (e1.style.height = `${e1.scrollHeight}px`, setTimeout(function(e) {
                e.style.height = "0px";
            }, 0, e1));
        }
    }
    _show(e) {
        let t = e.querySelector("a");
        t.classList.add("show");
        let n = t.closest(`ul, ${this.tagName}`);
        n.style.height = "auto", n = e.querySelector("ul"), n && (n.style.height = `${n.scrollHeight}px`);
    }
}
var Zn = function() {
    function e(e) {
        var t = this;
        this._insertTag = function(e) {
            var n;
            n = 0 === t.tags.length ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling, t.container.insertBefore(e, n), t.tags.push(e);
        }, this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.insertionPoint = e.insertionPoint, this.before = null;
    }
    var t = e.prototype;
    return t.hydrate = function(e) {
        e.forEach(this._insertTag);
    }, t.insert = function(e) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(function(e) {
            var t = document.createElement("style");
            return t.setAttribute("data-emotion", e.key), void 0 !== e.nonce && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
        }(this));
        var t = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
            var n = function(e) {
                if (e.sheet) return e.sheet;
                for(var t = 0; t < document.styleSheets.length; t++)if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
            }(t);
            try {
                n.insertRule(e, n.cssRules.length);
            } catch (e1) {}
        } else t.appendChild(document.createTextNode(e));
        this.ctr++;
    }, t.flush = function() {
        this.tags.forEach(function(e) {
            return e.parentNode && e.parentNode.removeChild(e);
        }), this.tags = [], this.ctr = 0;
    }, e;
}(), Vn = "-ms-", Qn = "-moz-", Xn = "-webkit-", Jn = "comm", Yn = "rule", Kn = "decl", er = "@keyframes", tr = Math.abs, nr = String.fromCharCode, rr = Object.assign;
function sr(e, t) {
    return 45 ^ cr(e, 0) ? (((t << 2 ^ cr(e, 0)) << 2 ^ cr(e, 1)) << 2 ^ cr(e, 2)) << 2 ^ cr(e, 3) : 0;
}
function ir(e) {
    return e.trim();
}
function ar(e, t) {
    return (e = t.exec(e)) ? e[0] : e;
}
function or(e, t, n) {
    return e.replace(t, n);
}
function lr(e, t) {
    return e.indexOf(t);
}
function cr(e, t) {
    return 0 | e.charCodeAt(t);
}
function ur(e, t, n) {
    return e.slice(t, n);
}
function hr(e) {
    return e.length;
}
function dr(e) {
    return e.length;
}
function pr(e, t) {
    return t.push(e), e;
}
function fr(e, t) {
    return e.map(t).join("");
}
var gr = 1, mr = 1, br = 0, yr = 0, vr = 0, wr = "";
function xr(e, t, n, r, s, i, a) {
    return {
        value: e,
        root: t,
        parent: n,
        type: r,
        props: s,
        children: i,
        line: gr,
        column: mr,
        length: a,
        return: ""
    };
}
function kr(e, t) {
    return rr(xr("", null, null, "", null, null, 0), e, {
        length: -e.length
    }, t);
}
function $r() {
    return vr = yr < br ? cr(wr, yr++) : 0, mr++, 10 === vr && (mr = 1, gr++), vr;
}
function Sr() {
    return cr(wr, yr);
}
function Cr() {
    return yr;
}
function _r(e, t) {
    return ur(wr, e, t);
}
function Ar(e) {
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
function Mr(e) {
    return gr = mr = 1, br = hr(wr = e), yr = 0, [];
}
function Lr(e) {
    return wr = "", e;
}
function Er(e) {
    return ir(_r(yr - 1, Tr(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
}
function zr(e) {
    for(; (vr = Sr()) && vr < 33;)$r();
    return Ar(e) > 2 || Ar(vr) > 3 ? "" : " ";
}
function Nr(e, t) {
    for(; --t && $r() && !(vr < 48 || vr > 102 || vr > 57 && vr < 65 || vr > 70 && vr < 97););
    return _r(e, Cr() + (t < 6 && 32 == Sr() && 32 == $r()));
}
function Tr(e) {
    for(; $r();)switch(vr){
        case e:
            return yr;
        case 34:
        case 39:
            34 !== e && 39 !== e && Tr(vr);
            break;
        case 40:
            41 === e && Tr(e);
            break;
        case 92:
            $r();
    }
    return yr;
}
function Rr(e, t) {
    for(; $r() && e + vr !== 57 && (e + vr !== 84 || 47 !== Sr()););
    return "/*" + _r(t, yr - 1) + "*" + nr(47 === e ? e : $r());
}
function jr(e) {
    for(; !Ar(Sr());)$r();
    return _r(e, yr);
}
function Or(e) {
    return Lr(qr("", null, null, null, [
        ""
    ], e = Mr(e), 0, [
        0
    ], e));
}
function qr(e, t, n, r, s, i, a, o, l) {
    for(var c = 0, u = 0, h = a, d = 0, p = 0, f = 0, g = 1, m = 1, b = 1, y = 0, v = "", w = s, x = i, k = r, $ = v; m;)switch(f = y, y = $r()){
        case 40:
            if (108 != f && 58 == cr($, h - 1)) {
                -1 != lr($ += or(Er(y), "&", "&\f"), "&\f") && (b = -1);
                break;
            }
        case 34:
        case 39:
        case 91:
            $ += Er(y);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            $ += zr(f);
            break;
        case 92:
            $ += Nr(Cr() - 1, 7);
            continue;
        case 47:
            switch(Sr()){
                case 42:
                case 47:
                    pr(Wr(Rr($r(), Cr()), t, n), l);
                    break;
                default:
                    $ += "/";
            }
            break;
        case 123 * g:
            o[c++] = hr($) * b;
        case 125 * g:
        case 59:
        case 0:
            switch(y){
                case 0:
                case 125:
                    m = 0;
                case 59 + u:
                    p > 0 && hr($) - h && pr(p > 32 ? Pr($ + ";", r, n, h - 1) : Pr(or($, " ", "") + ";", r, n, h - 2), l);
                    break;
                case 59:
                    $ += ";";
                default:
                    if (pr(k = Ir($, t, n, c, u, s, o, v, w = [], x = [], h), i), 123 === y) {
                        if (0 === u) qr($, t, k, k, w, i, h, o, x);
                        else switch(99 === d && 110 === cr($, 3) ? 100 : d){
                            case 100:
                            case 109:
                            case 115:
                                qr(e, k, k, r && pr(Ir(e, k, k, 0, 0, s, o, v, s, w = [], h), x), s, x, h, o, r ? w : x);
                                break;
                            default:
                                qr($, k, k, k, [
                                    ""
                                ], x, 0, o, x);
                        }
                    }
            }
            c = u = p = 0, g = b = 1, v = $ = "", h = a;
            break;
        case 58:
            h = 1 + hr($), p = f;
        default:
            if (g < 1) {
                if (123 == y) --g;
                else if (125 == y && 0 == g++ && 125 == (vr = yr > 0 ? cr(wr, --yr) : 0, mr--, 10 === vr && (mr = 1, gr--), vr)) continue;
            }
            switch($ += nr(y), y * g){
                case 38:
                    b = u > 0 ? 1 : ($ += "\f", -1);
                    break;
                case 44:
                    o[c++] = (hr($) - 1) * b, b = 1;
                    break;
                case 64:
                    45 === Sr() && ($ += Er($r())), d = Sr(), u = h = hr(v = $ += jr(Cr())), y++;
                    break;
                case 45:
                    45 === f && 2 == hr($) && (g = 0);
            }
    }
    return i;
}
function Ir(e, t, n, r, s, i, a, o, l, c, u) {
    for(var h = s - 1, d = 0 === s ? i : [
        ""
    ], p = dr(d), f = 0, g = 0, m = 0; f < r; ++f)for(var b = 0, y = ur(e, h + 1, h = tr(g = a[f])), v = e; b < p; ++b)(v = ir(g > 0 ? d[b] + " " + y : or(y, /&\f/g, d[b]))) && (l[m++] = v);
    return xr(e, t, n, 0 === s ? Yn : o, l, c, u);
}
function Wr(e, t, n) {
    return xr(e, t, n, Jn, nr(vr), ur(e, 2, -2), 0);
}
function Pr(e, t, n, r) {
    return xr(e, t, n, Kn, ur(e, 0, r), ur(e, r + 1, -1), r);
}
function Hr(e, t) {
    for(var n = "", r = dr(e), s = 0; s < r; s++)n += t(e[s], s, e, t) || "";
    return n;
}
function Dr(e, t, n, r) {
    switch(e.type){
        case "@import":
        case Kn:
            return e.return = e.return || e.value;
        case Jn:
            return "";
        case er:
            return e.return = e.value + "{" + Hr(e.children, r) + "}";
        case Yn:
            e.value = e.props.join(",");
    }
    return hr(n = Hr(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Fr(e) {
    var t = dr(e);
    return function(n, r, s, i) {
        for(var a = "", o = 0; o < t; o++)a += e[o](n, r, s, i) || "";
        return a;
    };
}
var Br = function(e) {
    var t = Object.create(null);
    return function(n) {
        return void 0 === t[n] && (t[n] = e(n)), t[n];
    };
}, Gr = function(e, t, n) {
    for(var r = 0, s = 0; r = s, s = Sr(), 38 === r && 12 === s && (t[n] = 1), !Ar(s);)$r();
    return _r(e, yr);
}, Ur = function(e, t) {
    return Lr(function(e, t) {
        var n = -1, r = 44;
        do switch(Ar(r)){
            case 0:
                38 === r && 12 === Sr() && (t[n] = 1), e[n] += Gr(yr - 1, t, n);
                break;
            case 2:
                e[n] += Er(r);
                break;
            case 4:
                if (44 === r) {
                    e[++n] = 58 === Sr() ? "&\f" : "", t[n] = e[n].length;
                    break;
                }
            default:
                e[n] += nr(r);
        }
        while (r = $r());
        return e;
    }(Mr(e), t));
}, Zr = new WeakMap, Vr = function(e) {
    if ("rule" === e.type && e.parent && !(e.length < 1)) {
        for(var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line; "rule" !== n.type;)if (!(n = n.parent)) return;
        if ((1 !== e.props.length || 58 === t.charCodeAt(0) || Zr.get(n)) && !r) {
            Zr.set(e, !0);
            for(var s = [], i = Ur(t, s), a = n.props, o = 0, l = 0; o < i.length; o++)for(var c = 0; c < a.length; c++, l++)e.props[l] = s[o] ? i[o].replace(/&\f/g, a[c]) : a[c] + " " + i[o];
        }
    }
}, Qr = function(e) {
    if ("decl" === e.type) {
        var t = e.value;
        108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && (e.return = "", e.value = "");
    }
};
function Xr(e, t) {
    switch(sr(e, t)){
        case 5103:
            return Xn + "print-" + e + e;
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
            return Xn + e + e;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return Xn + e + Qn + e + Vn + e + e;
        case 6828:
        case 4268:
            return Xn + e + Vn + e + e;
        case 6165:
            return Xn + e + Vn + "flex-" + e + e;
        case 5187:
            return Xn + e + or(e, /(\w+).+(:[^]+)/, Xn + "box-$1$2" + Vn + "flex-$1$2") + e;
        case 5443:
            return Xn + e + Vn + "flex-item-" + or(e, /flex-|-self/, "") + e;
        case 4675:
            return Xn + e + Vn + "flex-line-pack" + or(e, /align-content|flex-|-self/, "") + e;
        case 5548:
            return Xn + e + Vn + or(e, "shrink", "negative") + e;
        case 5292:
            return Xn + e + Vn + or(e, "basis", "preferred-size") + e;
        case 6060:
            return Xn + "box-" + or(e, "-grow", "") + Xn + e + Vn + or(e, "grow", "positive") + e;
        case 4554:
            return Xn + or(e, /([^-])(transform)/g, "$1" + Xn + "$2") + e;
        case 6187:
            return or(or(or(e, /(zoom-|grab)/, Xn + "$1"), /(image-set)/, Xn + "$1"), e, "") + e;
        case 5495:
        case 3959:
            return or(e, /(image-set\([^]*)/, Xn + "$1$`$1");
        case 4968:
            return or(or(e, /(.+:)(flex-)?(.*)/, Xn + "box-pack:$3" + Vn + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Xn + e + e;
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return or(e, /(.+)-inline(.+)/, Xn + "$1$2") + e;
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
            if (hr(e) - 1 - t > 6) switch(cr(e, t + 1)){
                case 109:
                    if (45 !== cr(e, t + 4)) break;
                case 102:
                    return or(e, /(.+:)(.+)-([^]+)/, "$1" + Xn + "$2-$3$1" + Qn + (108 == cr(e, t + 3) ? "$3" : "$2-$3")) + e;
                case 115:
                    return ~lr(e, "stretch") ? Xr(or(e, "stretch", "fill-available"), t) + e : e;
            }
            break;
        case 4949:
            if (115 !== cr(e, t + 1)) break;
        case 6444:
            switch(cr(e, hr(e) - 3 - (~lr(e, "!important") && 10))){
                case 107:
                    return or(e, ":", ":" + Xn) + e;
                case 101:
                    return or(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Xn + (45 === cr(e, 14) ? "inline-" : "") + "box$3$1" + Xn + "$2$3$1" + Vn + "$2box$3") + e;
            }
            break;
        case 5936:
            switch(cr(e, t + 11)){
                case 114:
                    return Xn + e + Vn + or(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
                case 108:
                    return Xn + e + Vn + or(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
                case 45:
                    return Xn + e + Vn + or(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
            }
            return Xn + e + Vn + e + e;
    }
    return e;
}
var Jr = [
    function(e, t, n, r) {
        if (e.length > -1 && !e.return) switch(e.type){
            case Kn:
                e.return = Xr(e.value, e.length);
                break;
            case er:
                return Hr([
                    kr(e, {
                        value: or(e.value, "@", "@" + Xn)
                    })
                ], r);
            case Yn:
                if (e.length) return fr(e.props, function(t) {
                    switch(ar(t, /(::plac\w+|:read-\w+)/)){
                        case ":read-only":
                        case ":read-write":
                            return Hr([
                                kr(e, {
                                    props: [
                                        or(t, /:(read-\w+)/, ":-moz-$1")
                                    ]
                                })
                            ], r);
                        case "::placeholder":
                            return Hr([
                                kr(e, {
                                    props: [
                                        or(t, /:(plac\w+)/, ":" + Xn + "input-$1")
                                    ]
                                }),
                                kr(e, {
                                    props: [
                                        or(t, /:(plac\w+)/, ":-moz-$1")
                                    ]
                                }),
                                kr(e, {
                                    props: [
                                        or(t, /:(plac\w+)/, Vn + "input-$1")
                                    ]
                                })
                            ], r);
                    }
                    return "";
                });
        }
    }
], Yr = function(e) {
    var t = e.key;
    if ("css" === t) {
        var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
        Array.prototype.forEach.call(n, function(e) {
            -1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), e.setAttribute("data-s", ""));
        });
    }
    var r, s, i = e.stylisPlugins || Jr, a = {}, o = [];
    r = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), function(e) {
        for(var t = e.getAttribute("data-emotion").split(" "), n = 1; n < t.length; n++)a[t[n]] = !0;
        o.push(e);
    });
    var l, c, u = [
        Dr,
        (c = function(e) {
            l.insert(e);
        }, function(e) {
            e.root || (e = e.return) && c(e);
        })
    ], h = Fr([
        Vr,
        Qr
    ].concat(i, u));
    s = function(e, t, n, r) {
        l = n, Hr(Or(e ? e + "{" + t.styles + "}" : t.styles), h), r && (d.inserted[t.name] = !0);
    };
    var d = {
        key: t,
        sheet: new Zn({
            key: t,
            container: r,
            nonce: e.nonce,
            speedy: e.speedy,
            prepend: e.prepend,
            insertionPoint: e.insertionPoint
        }),
        nonce: e.nonce,
        inserted: a,
        registered: {},
        insert: s
    };
    return d.sheet.hydrate(o), d;
};
var Kr = function(e) {
    for(var t, n = 0, r = 0, s = e.length; s >= 4; ++r, s -= 4)t = 1540483477 * (65535 & (t = 255 & e.charCodeAt(r) | (255 & e.charCodeAt(++r)) << 8 | (255 & e.charCodeAt(++r)) << 16 | (255 & e.charCodeAt(++r)) << 24)) + (59797 * (t >>> 16) << 16), n = 1540483477 * (65535 & (t ^= t >>> 24)) + (59797 * (t >>> 16) << 16) ^ 1540483477 * (65535 & n) + (59797 * (n >>> 16) << 16);
    switch(s){
        case 3:
            n ^= (255 & e.charCodeAt(r + 2)) << 16;
        case 2:
            n ^= (255 & e.charCodeAt(r + 1)) << 8;
        case 1:
            n = 1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) + (59797 * (n >>> 16) << 16);
    }
    return (((n = 1540483477 * (65535 & (n ^= n >>> 13)) + (59797 * (n >>> 16) << 16)) ^ n >>> 15) >>> 0).toString(36);
}, es = {
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
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
}, ts = /[A-Z]|^ms/g, ns = /_EMO_([^_]+?)_([^]*?)_EMO_/g, rs = function(e) {
    return 45 === e.charCodeAt(1);
}, ss = function(e) {
    return null != e && "boolean" != typeof e;
}, is = Br(function(e) {
    return rs(e) ? e : e.replace(ts, "-$&").toLowerCase();
}), as = function(e, t) {
    switch(e){
        case "animation":
        case "animationName":
            if ("string" == typeof t) return t.replace(ns, function(e, t, n) {
                return ls = {
                    name: t,
                    styles: n,
                    next: ls
                }, t;
            });
    }
    return 1 === es[e] || rs(e) || "number" != typeof t || 0 === t ? t : t + "px";
};
function os(e, t, n) {
    if (null == n) return "";
    if (void 0 !== n.__emotion_styles) return n;
    switch(typeof n){
        case "boolean":
            return "";
        case "object":
            if (1 === n.anim) return ls = {
                name: n.name,
                styles: n.styles,
                next: ls
            }, n.name;
            if (void 0 !== n.styles) {
                var r = n.next;
                if (void 0 !== r) for(; void 0 !== r;)ls = {
                    name: r.name,
                    styles: r.styles,
                    next: ls
                }, r = r.next;
                return n.styles + ";";
            }
            return function(e, t, n) {
                var r = "";
                if (Array.isArray(n)) for(var s = 0; s < n.length; s++)r += os(e, t, n[s]) + ";";
                else for(var i in n){
                    var a = n[i];
                    if ("object" != typeof a) null != t && void 0 !== t[a] ? r += i + "{" + t[a] + "}" : ss(a) && (r += is(i) + ":" + as(i, a) + ";");
                    else if (!Array.isArray(a) || "string" != typeof a[0] || null != t && void 0 !== t[a[0]]) {
                        var o = os(e, t, a);
                        switch(i){
                            case "animation":
                            case "animationName":
                                r += is(i) + ":" + o + ";";
                                break;
                            default:
                                r += i + "{" + o + "}";
                        }
                    } else for(var l = 0; l < a.length; l++)ss(a[l]) && (r += is(i) + ":" + as(i, a[l]) + ";");
                }
                return r;
            }(e, t, n);
        case "function":
            if (void 0 !== e) {
                var s = ls, i = n(e);
                return ls = s, os(e, t, i);
            }
    }
    if (null == t) return n;
    var a = t[n];
    return void 0 !== a ? a : n;
}
var ls, cs = /label:\s*([^\s;\n{]+)\s*(;|$)/g, us = function(e, t, n) {
    if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
    var r = !0, s = "";
    ls = void 0;
    var i = e[0];
    null == i || void 0 === i.raw ? (r = !1, s += os(n, t, i)) : s += i[0];
    for(var a = 1; a < e.length; a++)s += os(n, t, e[a]), r && (s += i[a]);
    cs.lastIndex = 0;
    for(var o, l = ""; null !== (o = cs.exec(s));)l += "-" + o[1];
    return {
        name: Kr(s) + l,
        styles: s,
        next: ls
    };
};
function hs(e, t, n) {
    var r = "";
    return n.split(" ").forEach(function(n) {
        void 0 !== e[n] ? t.push(e[n] + ";") : r += n + " ";
    }), r;
}
var ds = function(e, t, n) {
    !function(e, t, n) {
        var r = e.key + "-" + t.name;
        !1 === n && void 0 === e.registered[r] && (e.registered[r] = t.styles);
    }(e, t, n);
    var r = e.key + "-" + t.name;
    if (void 0 === e.inserted[t.name]) {
        var s = t;
        do {
            e.insert(t === s ? "." + r : "", s, e.sheet, !0);
            s = s.next;
        }while (void 0 !== s);
    }
};
function ps(e, t) {
    if (void 0 === e.inserted[t.name]) return e.insert("", t, e.sheet, !0);
}
function fs(e, t, n) {
    var r = [], s = hs(e, r, n);
    return r.length < 2 ? n : s + t(r);
}
var gs = function e(t) {
    for(var n = "", r = 0; r < t.length; r++){
        var s = t[r];
        if (null != s) {
            var i = void 0;
            switch(typeof s){
                case "boolean":
                    break;
                case "object":
                    if (Array.isArray(s)) i = e(s);
                    else for(var a in i = "", s)s[a] && a && (i && (i += " "), i += a);
                    break;
                default:
                    i = s;
            }
            i && (n && (n += " "), n += i);
        }
    }
    return n;
}, ms = function(e) {
    var t = Yr(e);
    t.sheet.speedy = function(e) {
        this.isSpeedy = e;
    }, t.compat = !0;
    var n = function() {
        for(var e = arguments.length, n = new Array(e), r = 0; r < e; r++)n[r] = arguments[r];
        var s = us(n, t.registered, void 0);
        return ds(t, s, !1), t.key + "-" + s.name;
    };
    return {
        css: n,
        cx: function() {
            for(var e = arguments.length, r = new Array(e), s = 0; s < e; s++)r[s] = arguments[s];
            return fs(t.registered, n, gs(r));
        },
        injectGlobal: function() {
            for(var e = arguments.length, n = new Array(e), r = 0; r < e; r++)n[r] = arguments[r];
            var s = us(n, t.registered);
            ps(t, s);
        },
        keyframes: function() {
            for(var e = arguments.length, n = new Array(e), r = 0; r < e; r++)n[r] = arguments[r];
            var s = us(n, t.registered), i = "animation-" + s.name;
            return ps(t, {
                name: s.name,
                styles: "@keyframes " + i + "{" + s.styles + "}"
            }), i;
        },
        hydrate: function(e) {
            e.forEach(function(e) {
                t.inserted[e] = !0;
            });
        },
        flush: function() {
            t.registered = {}, t.inserted = {}, t.sheet.flush();
        },
        sheet: t.sheet,
        cache: t,
        getRegisteredStyles: hs.bind(null, t.registered),
        merge: fs.bind(null, t.registered, n)
    };
}({
    key: "css"
}), bs = (ms.flush, ms.hydrate, ms.cx, ms.merge, ms.getRegisteredStyles, ms.injectGlobal, ms.keyframes);
ms.css, ms.sheet, ms.cache;
class ys extends ze {
    static default = {
        progressColor: "blue",
        trackColor: "#ccc",
        thickness: "5px",
        borderRadius: "5px"
    };
    static css(e = {}) {
        e = {
            ...this.default,
            ...e
        };
        return `\n        width: 100%;\n        &.value {\n            display: flex;\n            justify-content: flex-start;\n            div[el="progress"] {\n                will-change: width opacity;\n                transition: width 0.25s ease 0s;\n                animation: none;\n            }\n        }\n\n        &.loop {\n            display: flex;\n            justify-content: center;\n            div[el="progress"] {\n                will-change: width, opacity;\n                transition: none;\n                animation: ${bs`
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
        `} 1.5s ease infinite;\n            }\n        }\n\n        ${this.style(e)}\n        `.trim();
    }
    static style(e = {}) {
        return `\n        ${this._progressColor(e)}\n        ${this._trackColor(e)}\n        ${this._thickness(e)}\n        ${this._borderRadius(e)}\n        `.trim();
    }
    static _progressColor(e = {}) {
        return null == e.progressColor ? "" : `\n        div[el="progress"] {\n            background-color: ${e.progressColor};\n        }\n        `.trim();
    }
    static _trackColor(e = {}) {
        return null == e.trackColor ? "" : `\n        background-color: ${e.trackColor};\n        `.trim();
    }
    static _thickness(e = {}) {
        return null == e.thickness ? "" : `\n        div[el="progress"] {\n            height: ${e.thickness};\n        }\n        `.trim();
    }
    static _borderRadius(e = {}) {
        return null == e.borderRadius ? "" : `\n        border-radius: ${e.borderRadius};\n        div[el="progress"] {\n            border-radius: ${e.borderRadius};\n        }\n        `.trim();
    }
}
class vs extends Ne {
    static Style = ys;
    static tagStyle(e) {
        super.tagStyle(e);
    }
    static classStyle(e, t) {
        super.classStyle(e, t);
    }
    addStyle(e) {
        super.addStyle(e);
    }
    max = 100;
    constructor(){
        super(), this.render();
    }
    render() {
        dn(this, pn`<div el="progress"></div>`), this.max = parseFloat(this.getAttribute("max")) || this.max, this.value = parseFloat(this.getAttribute("value"));
    }
    set value(e) {
        "number" != typeof e && (e = parseFloat(e)), this._value = e, isNaN(e) ? this.setLoop() : this.setProgress(e);
    }
    get value() {
        return this._value;
    }
    setLoop() {
        this.classList.remove("value"), this.classList.add("loop");
    }
    setProgress(e) {
        this.classList.remove("loop"), this.classList.add("value"), this.querySelector('[el="progress"]').style.width = e / this.max * 100 + "%";
    }
}
class ws extends ze {
    static default = {
        radius: 75,
        trackWidth: 25,
        progressColor: "blue",
        trackColor: "#ccc"
    };
    static css(e = {}) {
        e = {
            ...this.default,
            ...e
        };
        return `\n        display: flex;\n        overflow: hidden;\n        &.loop svg {\n            animation: 2s linear infinite ${bs`
            0% {
                transform: rotateZ(0deg);
            }
            100% {
                transform: rotateZ(360deg);
            }
        `};\n        }\n        ${this.style(e)}\n        `.trim();
    }
    static style(e = {}) {
        return `\n        ${this._radius(e)}\n        ${this._trackWidth(e)}\n        ${this._progressColor(e)}\n        ${this._trackColor(e)}\n        `.trim();
    }
    static _progressColor(e = {}) {
        return null == e.progressColor ? "" : `\n        &.loop circle[el="circle2"] {\n            stroke: ${e.progressColor};\n        }\n        &.value circle[el="circle2"] {\n            stroke: ${e.progressColor};\n        }\n        `.trim();
    }
    static _trackColor(e = {}) {
        return null == e.trackColor ? "" : `\n        circle[el="circle1"] {\n            stroke: ${e.trackColor};\n        }\n        `.trim();
    }
    static _trackWidth(e = {}) {
        return null == e.trackWidth ? "" : `\n        circle[el="circle1"] {\n            stroke-width: ${e.trackWidth};\n        }\n        &.loop circle[el="circle2"] {\n            stroke-width: ${e.trackWidth};\n        }\n        &.value circle[el="circle2"] {\n            stroke-width: ${e.trackWidth};\n        }\n        `.trim();
    }
    static _radius(e = {}) {
        if (null == e.radius) return "";
        const t = Math.floor(2 * Math.PI * e.radius);
        return `\n        &.loop circle[el="circle2"] {\n            stroke-dasharray: ${t};\n            stroke-linecap: round;\n            transition: unset;\n            transform: none;\n            transform-origin: 50% 50%;\n            animation: 1.5s ease-in-out infinite both ${bs`
            0%, 25% {
                stroke-dashoffset: ${Math.floor(.97 * t)};
                transform: rotate(0);
            }
            
            50%, 75% {
                stroke-dashoffset: ${Math.floor(.25 * t)};
                transform: rotate(45deg);
            }
            
            100% {
                stroke-dashoffset: ${Math.floor(.97 * t)};
                transform: rotate(360deg);
            }
        `};\n        }\n\n        &.value circle[el="circle2"] {\n            stroke-linecap: unset;\n            stroke-dasharray: ${t} ${t};\n            transition: stroke-dashoffset 0.25s ease-in-out;\n            // axis compensation\n            transform: rotate(-90deg);\n            transform-origin: 50% 50%;\n            animation: unset;\n        }`.trim();
    }
}
class xs extends Ne {
    static Style = ws;
    static tagStyle(e) {
        super.tagStyle(e);
    }
    static classStyle(e, t) {
        super.classStyle(e, t);
    }
    addStyle(e) {
        super.addStyle(e);
    }
    max = 100;
    get radius() {
        return this._radius;
    }
    set radius(e) {
        this._radius = e, this.addStyle({
            radius: e
        }), this.render();
    }
    get trackWidth() {
        return this._trackWidth;
    }
    set trackWidth(e) {
        this._trackWidth = e, this.addStyle({
            trackWidth: e
        }), this.render();
    }
    set value(e) {
        "number" != typeof e && (e = parseFloat(e)), this._value = e, isNaN(e) ? this.toLoop() : this.setProgress(e / this.max);
    }
    get value() {
        return this._value;
    }
    el = {
        circle1: null,
        circle2: null
    };
    constructor(){
        super(), this._radius = this._class.Style.default.radius, this._trackWidth = this._class.Style.default.trackWidth, this.render();
    }
    render() {
        let e = 2 * (this.radius + this.trackWidth), t = this.radius + this.trackWidth, n = t;
        dn(this, fn`
        <svg viewBox=${`0 0 ${e} ${e}`}>
            <g>
                <circle el="circle1"
                    fill="transparent"
                    r="${this.radius}"
                    cx=${t}
                    cy=${n} />
                <circle el="circle2"
                    fill="transparent"
                    r="${this.radius}"
                    cx=${t}
                    cy=${n} />
            </g>
        </svg>
        `), this.el.circle1 = this.querySelector('circle[el="circle1"]'), this.el.circle2 = this.querySelector('circle[el="circle2"]'), this.max = parseFloat(this.getAttribute("max")) || this.max, this.value = parseFloat(this.getAttribute("value"));
    }
    toLoop() {
        this.classList.remove("value"), this.classList.add("loop");
    }
    setProgress(e) {
        this.classList.remove("loop"), this.classList.add("value");
        const t = 2 * Math.PI * this.radius, n = t - e * t;
        this.el.circle2.style.strokeDashoffset = n.toString();
    }
}
class ks extends ze {
    static default = {
        bgColor: "#eee",
        overlayColor: "rgba(0,0,0,0.7)"
    };
    static css(e = {}) {
        return e = {
            ...this.default,
            ...e
        }, `\n        position: absolute;\n        top: 0;\n        left: 0;\n        [el="content"] {\n            position: fixed;\n            z-index: 101;\n            height: 100%;\n            min-width: 250px;\n            overflow-x: hidden;\n            overflow-y: auto;\n            transition: transform 0.3s;\n            transform: translate3d();\n            transform: translateX(-100%);;\n            will-change: transform;\n            &.show {\n                transform: translateX(0)\n            }\n        }\n        [el="overlay"] {\n            position: fixed;\n            top: 0;\n            left: 0;\n            z-index: 100;\n            display: none;\n            width: 100%;\n            height: 100%;\n            &.show {\n                display: block;\n            }\n        }\n        ${this.style(e)}\n        `.trim();
    }
    static style(e = {}) {
        return `\n        ${this._bgColor(e)}\n        ${this._overlayColor(e)}\n        `.trim();
    }
    static _bgColor(e = {}) {
        return null == e.bgColor ? "" : `\n        [el="content"] {\n            ${dt(e.bgColor)}\n        }\n        `.trim();
    }
    static _overlayColor(e = {}) {
        return null == e.overlayColor ? "" : `\n        [el="overlay"] {\n            background-color: ${e.overlayColor};\n        }\n        `.trim();
    }
}
class $s extends Ne {
    static Style = ks;
    static tagStyle(e) {
        super.tagStyle(e);
    }
    static classStyle(e, t) {
        super.classStyle(e, t);
    }
    addStyle(e) {
        super.addStyle(e);
    }
    el = {
        content: null,
        overlay: null
    };
    _showAt = "1000px";
    set showAt(e) {
        this._showAt = e, this.setAttribute("showAt", e), this.mediaQuery = window.matchMedia(`(min-width: ${this.showAt})`);
    }
    get showAt() {
        return this._showAt;
    }
    constructor(){
        super(), this.showAt = this.getAttribute("showAt") || this._showAt, this.el.content = this.querySelector('[el="content"]') || pn`<div el="content">`, this.el.overlay = this.querySelector('[el="overlay"]') || pn`<div el="overlay">`, this.render(), this.mediaChange(), this.mediaQuery.addEventListener("change", ()=>{
            this.mediaChange();
        });
    }
    render() {
        dn(this, pn`
            ${this.el.content}
            ${this.el.overlay}
        `), this.el.content = this.querySelector('[el="content"]'), this.el.overlay = this.querySelector('[el="overlay"]'), this.el.overlay.addEventListener("click", ()=>{
            this.hide();
        });
    }
    mediaChange() {
        this.mediaQuery.matches ? this.show({
            overlay: !1
        }) : this.hide();
    }
    show({ overlay: e = !0  } = {}) {
        this.el.content.classList.add("show"), e && this.el.overlay.classList.add("show");
    }
    hide() {
        this.el.content.classList.remove("show"), this.el.overlay.classList.remove("show");
    }
}
class Ss extends ze {
    static default = {
        pinColor: "#f6f5f4",
        pinRadius: "10em",
        bgColor: "#deddda",
        activeColor: "blue"
    };
    static css(e = {}) {
        e = {
            ...this.default,
            ...e
        };
        return `\n        display: inline-flex;\n        font-weight: bold;\n        line-height: initial;\n        width: 3.8em;\n        height: 2em;\n        align-items: center;\n        position: relative;\n\n        input[type="checkbox"] {\n            /* Hide default HTML checkbox */\n            position: absolute;\n            opacity: 0;\n            cursor: pointer;\n            z-index: 10;\n            width: 100%;\n            height: 100%;\n            margin: 0;\n        }\n\n        div[el="label"] {\n            display: flex;\n            width: 100%;\n            height: 100%;\n            ${gt({
            level: 1
        })}\n            overflow: hidden;\n            transition: .4s;\n            align-items: center;\n            text-align: center;\n            padding-left: 0.2em;\n            padding-right: 0.2em;\n        }\n\n        div[el="pin"] {\n            box-sizing: border-box;\n            position: absolute;\n            top: 50%;\n            left: 0.1em;\n            transform: translateY(-50%);\n            text-align: center;\n            width: 1.8em;\n            height: 1.8em;\n            border: 1px solid #9a9996;\n            transition: .2s;\n        }\n\n        div[el="label"] > span {\n            font-size: 0.8em;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            width: 50%;\n        }\n\n        input[type="checkbox"]:checked ~ div[el="pin"] {\n            transform: translate(1.8em, -50%);\n            will-change: transform;\n        }\n        ${this.style(e)}\n        `.trim();
    }
    static style(e = {}) {
        return `\n        ${this._pinColor(e)}\n        ${this._pinRadius(e)}\n        ${this._bgColor(e)}\n        ${this._activeColor(e)}\n        `.trim();
    }
    static _pinColor(e = {}) {
        return null == e.pinColor ? "" : `\n        div[el="pin"] {\n            ${dt(e.pinColor)}\n        }\n        `.trim();
    }
    static _pinRadius(e = {}) {
        return `\n        div[el="pin"] {\n            border-radius: ${e.pinRadius}\n        }\n        div[el="label"] {\n            border-radius: ${e.pinRadius}\n        }\n        `;
    }
    static _bgColor(e = {}) {
        return null == e.bgColor ? "" : `\n        div[el="label"] {\n            ${dt(e.bgColor)}\n        }\n        `.trim();
    }
    static _activeColor(e = {}) {
        return null == e.activeColor ? "" : `\n        input[type="checkbox"]:checked ~ div[el="label"] {\n            ${dt(e.activeColor)}\n        }\n        `.trim();
    }
}
class Cs extends Ne {
    static Style = Ss;
    static tagStyle(e) {
        super.tagStyle(e);
    }
    static classStyle(e, t) {
        super.classStyle(e, t);
    }
    addStyle(e) {
        super.addStyle(e);
    }
    constructor(){
        super(), this.render();
    }
    render() {
        let e = this.querySelector('input[type="checkbox"]') || pn`<input type="checkbox">`, t = this.querySelector('div[el="label"]') || pn`
                <div el="label">
                    <span></span>
                    <span></span>
                </div>
            `, n = this.querySelector('div[el="pin"]') || pn`<div el="pin"></div>`;
        dn(this, pn`
            ${e}
            ${t}
            ${n}
        `);
    }
}
class _s extends ze {
    static default = {
        tabColor: "#ccc",
        hoverColor: "#ddd",
        activeColor: "blue",
        separatorLineColor: "black",
        separatorLineWidth: "1px"
    };
    static css(e = {}) {
        e = {
            ...this.default,
            ...e
        };
        return `\n        display: inline-flex;\n        flex-wrap: wrap;\n        overflow: hidden;\n        border-radius: 4px;\n        > div {\n            display: flex;\n            flex-wrap: wrap;\n            justify-content: center;\n            align-items: center;\n            cursor: pointer;\n            padding: 0.25em 0.5em 0.25em 0.5em;\n            line-height: 1;\n            height: 1.8em;\n        }\n        > div:not(:last-of-type) {\n            border-right-style: solid;\n        }\n        > div.active {\n            ${gt({
            level: 2
        })}\n        }\n        ${this.style(e)}\n        `.trim();
    }
    static style(e = {}) {
        return `\n        ${this._tabColor(e)}\n        ${this._hoverColor(e)}\n        ${this._activeColor(e)}\n        ${this._separatorLineColor(e)}\n        ${this._separatorLineWidth(e)}\n        `.trim();
    }
    static _tabColor(e = {}) {
        return null == e.tabColor ? "" : `\n        ${dt(e.tabColor)}\n        `.trim();
    }
    static _hoverColor(e = {}) {
        return null == e.hoverColor ? "" : `\n        > div:hover {\n            ${dt(e.hoverColor)}\n        }`.trim();
    }
    static _activeColor(e = {}) {
        return null == e.activeColor ? "" : `\n        > div.active {\n            ${dt(e.activeColor)}\n        }`.trim();
    }
    static _separatorLineColor(e = {}) {
        return null == e.separatorLineColor ? "" : `\n        border-color: ${e.separatorLineColor};\n        > div:not(:last-of-type) {\n            border-right-color: ${e.separatorLineColor};\n        }`.trim();
    }
    static _separatorLineWidth(e = {}) {
        return null == e.separatorLineWidth ? "" : `\n        border-width: ${e.separatorLineWidth};\n        > div:not(:last-of-type) {\n            border-right-width: ${e.separatorLineWidth};\n        }`.trim();
    }
}
class As extends Ne {
    static Style = _s;
    static tagStyle(e) {
        super.tagStyle(e);
    }
    static classStyle(e, t) {
        super.classStyle(e, t);
    }
    constructor(){
        super(), this.setupTab();
    }
    setupTab() {
        for (let e of this.querySelectorAll("div")){
            if (e.parentNode != this) break;
            e.classList.contains("active") && (this.activedTab = e), e.addEventListener("click", (e)=>{
                this.activateTab(e.target);
            });
        }
    }
    activateTab(e) {
        try {
            this.activedTab.classList.remove("active");
        } catch (e1) {}
        e.classList.add("active"), this.activedTab = e;
    }
}
class Ms extends ze {
    static default = {
        theadBgColor: "#ccc",
        activeColor: "blue",
        horizontalLine: !0,
        verticalLine: !0
    };
    static css(e = {}) {
        e = {
            ...this.default,
            ...e
        };
        return `\n        display: block;\n        overflow: auto;\n        border: 1px solid;\n        border-collapse: separate;\n        border-spacing: 0;\n\n        thead {\n            font-weight: bold;\n        }\n        th, td {\n            padding: 0.5rem;\n        }\n        ${this.style(e)}\n        `.trim();
    }
    static style(e = {}) {
        return `\n        ${this._theadBgColor(e)}\n        ${this._activeColor(e)}\n        ${this._horizontalLine(e)}\n        ${this._verticalLine(e)}\n        `.trim();
    }
    static _theadBgColor(e = {}) {
        return null == e.theadBgColor ? "" : `\n        thead {\n            ${dt(e.theadBgColor)}\n        }`.trim();
    }
    static _activeColor(e = {}) {
        return null == e.activeColor ? "" : `\n        tbody td:hover {\n            ${dt(e.activeColor)}\n            &::selection {\n                ${dt(je(e.activeColor).rotate(180))}\n            }\n        }\n        `.trim();
    }
    static _horizontalLine(e = {}) {
        if (null == e.horizontalLine) return "";
        let t = null;
        return t = e.horizontalLine ? "\n            td, th {\n                border-bottom: 1px solid;\n            }\n            thead {\n                td, th {\n                    border-bottom: 3px double;\n                }\n            }".trim() : "\n            td, th {\n                border-bottom: 0;\n            }\n            thead {\n                td, th {\n                    border-bottom: 0;\n                }\n            }".trim(), t;
    }
    static _verticalLine(e = {}) {
        if (null == e.verticalLine) return;
        let t = null;
        return t = e.verticalLine ? "\n            td:not(:first-child), th:not(:first-child) {\n                border-left: 1px solid;\n            }".trim() : "\n            td:not(:first-child), th:not(:first-child) {\n                border-left: 0;\n            }".trim(), t;
    }
}
class Ls extends Ne {
    static Style = Ms;
    static tagName = "table";
    static define(e) {
        if ("table" === e.toLowerCase()) return this.tagName = e, void this.initStyle();
        super.define(e);
    }
    static tagStyle(e) {
        super.tagStyle(e);
    }
    static classStyle(e, t) {
        super.classStyle(e, t);
    }
    addStyle(e) {
        super.addStyle(e);
    }
}
e(r, s), e(module.exports, r);

},{}]},["iPn5k","4Nf4r"], "4Nf4r", "parcelRequirefd77")

//# sourceMappingURL=tag.js.map
