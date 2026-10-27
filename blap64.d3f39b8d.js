// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
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

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
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
        globalObject
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
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

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
    }
  }
})({"cjUtm":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 4321;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "fa78652bd3f39b8d";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
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
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"yKjs8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "p5Element", ()=>p5Element);
var _lit = require("lit");
var _sketchJs = require("../Home/sketch.js");
var _sketchJs1 = require("../Oops/sketch.js");
var _sketchJs2 = require("../CodeArt/sketch.js");
var _sketchJs3 = require("../WebExperiences/sketch.js");
var _sketchJs4 = require("../Links/sketch.js");
var _sketchJs5 = require("../Installations/sketch.js");
var _sketchJs6 = require("../Photo/sketch.js");
class p5Element extends (0, _lit.LitElement) {
    static styles = (0, _lit.css)`
        canvas {
            display: block;
            margin: 0;
            padding: 0;
            overflow: hidden;
            width: 100%;
            height: 100%;
        }
    `;
    static properties = {
        id: {
            type: String
        },
        sketch: {
            type: String
        },
        skipAnimations: {
            type: Boolean
        },
        options: {
            type: Object
        }
    };
    constructor(){
        super();
        this.id = "bg";
        this.sketch = "";
        this.skipAnimations = false;
        this.options = {};
        this.p5Instance = null;
        this.containerDiv = null;
        this.isInitialized = false;
    }
    connectedCallback() {
        super.connectedCallback();
        // Initialize the sketch when the element is added to the DOM
        this.updateComplete.then(()=>{
            if (!this.isInitialized) this.initializeSketch();
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        // Clean up the p5 instance when the element is removed from the DOM
        this.cleanupSketch();
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        // Only reinitialize if already initialized and properties actually changed
        if (this.isInitialized && (changedProperties.has('sketch') || changedProperties.has('skipAnimations') || changedProperties.has('options'))) {
            this.cleanupSketch();
            this.initializeSketch();
        } else if (!this.isInitialized) // Initialize for the first time
        this.initializeSketch();
    }
    cleanupSketch() {
        try {
            if (this.p5Instance) {
                console.log(`p5-element: Cleaning up p5 instance for ${this.sketch}`);
                // Call custom cleanup method if it exists
                if (typeof this.p5Instance.cleanupSketch === 'function') this.p5Instance.cleanupSketch();
                // Remove the p5 instance properly
                this.p5Instance.remove();
                this.p5Instance = null;
            }
            if (this.containerDiv) // Clear the container div
            this.containerDiv.innerHTML = '';
            this.isInitialized = false;
        } catch (error) {
            console.error('p5-element: Error during cleanup:', error);
            // Force cleanup even if there's an error
            this.p5Instance = null;
            if (this.containerDiv) this.containerDiv.innerHTML = '';
            this.isInitialized = false;
        }
    }
    initializeSketch() {
        try {
            if (!this.containerDiv) this.containerDiv = this.shadowRoot.querySelector('#sketch-container');
            if (!this.containerDiv) {
                console.warn('p5-element: Container not ready yet, retrying...');
                setTimeout(()=>this.initializeSketch(), 100);
                return;
            }
            // Clear any existing content
            this.containerDiv.innerHTML = '';
            console.log(`p5-element: Initializing sketch: ${this.sketch}, skipAnimations: ${this.skipAnimations}, options:`, this.options);
            // Create the appropriate sketch based on the sketch property
            if (this.sketch === "home") this.p5Instance = (0, _sketchJs.homeSketch)(this.containerDiv, {
                skipAnimations: this.skipAnimations
            });
            else if (this.sketch === "codeart") this.p5Instance = (0, _sketchJs2.codeartSketch)(this.containerDiv);
            else if (this.sketch === "webexperiences") this.p5Instance = (0, _sketchJs3.webexperiencesSketch)(this.containerDiv, this.options);
            else if (this.sketch === "links") this.p5Instance = (0, _sketchJs4.linksSketch)(this.containerDiv, this.options);
            else if (this.sketch === "installations") this.p5Instance = (0, _sketchJs5.installationsSketch)(this.containerDiv, this.options);
            else if (this.sketch === "photo") this.p5Instance = (0, _sketchJs6.photoSketch)(this.containerDiv, this.options);
            else this.p5Instance = (0, _sketchJs1.oopsSketch)(this.containerDiv);
            if (this.p5Instance) {
                console.log(`p5-element: Successfully created p5 instance for ${this.sketch}`);
                this.isInitialized = true;
            }
        } catch (error) {
            console.error('p5-element: Error initializing sketch:', error);
            this.isInitialized = false;
        }
    }
    render() {
        return (0, _lit.html)`<div id="sketch-container"></div>`;
    }
}
customElements.define("p5-element", p5Element);

},{"lit":"hh14x","../Home/sketch.js":"ftP3m","../Oops/sketch.js":"lvgwq","../CodeArt/sketch.js":"1fe1l","../WebExperiences/sketch.js":"7zZtV","../Links/sketch.js":"3qmjk","../Installations/sketch.js":"bPWCF","../Photo/sketch.js":"6IcAC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ftP3m":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sketch", ()=>sketch);
parcelHelpers.export(exports, "homeSketch", ()=>homeSketch);
var _utils = require("../../utils");
const sketch = function(p, options = {}) {
    let ui = [];
    let ui_opacity = 0;
    let smoothX, smoothY;
    let short;
    let intro_texts = [];
    let animation_states = [];
    let animation_manager;
    let font_sizes;
    let mobile = false;
    let skipAnimations = options.skipAnimations || false;
    p.setup = async function() {
        p.noCanvas();
        const s = (0, _utils.getViewportSize)();
        p.createCanvas(s.width, s.height);
        mobile = (0, _utils.widthCheck)(p.width);
        p.background(23);
        p.noFill();
        p.stroke(230);
        p.strokeWeight(4);
        p.strokeCap(p.PROJECT);
        // Font already loaded via CSS
        p.textAlign(p.CENTER, p.CENTER);
        short = p.min(p.width, p.height);
        const s_font = mobile ? 14 : Math.min(Math.max(0.022 * p.width, 32), 48);
        ui.push(new (0, _utils.UICornerBoxButton)(p, 0.25 * p.width, 0.7 * p.height, 0.26 * short, 0.26 * short, 0.01 * p.width, 0.01 * p.width, "INTERACTIVE\nMEDIA", s_font));
        ui.push(new (0, _utils.UIArcButton)(p, 0.5 * p.width, 0.7 * p.height, 0.3 * short, 0.3 * short, 0.01 * p.width, 0.01 * p.width, "PHOTO", s_font));
        ui.push(new (0, _utils.UITriangleButton)(p, 0.75 * p.width, 0.35 * p.height, 0.2 * short, 0.2 * short, 0.01 * p.width, 0.01 * p.width, -0.5 * p.PI, "ABOUT", s_font));
        ui.push(new (0, _utils.UIHexButton)(p, 0.75 * p.width, 0.7 * p.height, 0.3 * short, 0.3 * short, 0.01 * p.width, 0.01 * p.width, "LINKS", s_font));
        // BLOG button (disabled - newsletter hidden from homepage)
        // ui.push(new UILinesButton(p, 0.82*p.width, 0.78*p.height, 0.22*short, 0.16*short, 0.01*p.width, 0.01*p.width, "BLOG", s_font));
        // Apply quadratic curve layout to UI elements
        layoutUI();
        smoothX = p.width / 2;
        smoothY = p.height / 2;
        p.mouseX = smoothX;
        p.mouseY = smoothY;
        p.textFont('BPdotsSquareVF', {
            fontVariationSettings: `wght 900`
        });
        font_sizes = (0, _utils.getFontSizes)(p.width, p.height);
        let padding = [
            0.04,
            0.15
        ];
        if (mobile) padding = [
            0.025,
            0.05
        ];
        intro_texts.push(new (0, _utils.TextWriter)(p, padding[0] * p.width, padding[0] * p.width, p.width, p.height / 2, "HELLO, FRIEND.", font_sizes.large));
        intro_texts.push(new (0, _utils.TextWriter)(p, padding[1] * p.width, 0.18 * p.height, p.width / 2, p.height / 2, "I play many roles:", font_sizes.small));
        intro_texts.push(new (0, _utils.TextWriter)(p, padding[1] * p.width, 0.22 * p.height, p.width, p.height / 2, "CREATIVE TECHNOLOGIST\nARTIST\nEDUCATOR", font_sizes.medium));
        intro_texts.push(new (0, _utils.TextWriter)(p, padding[1] * p.width, 0.22 * p.height + (mobile ? 4.0 : 3.8) * font_sizes.medium, p.width, p.height / 2, "and more...", font_sizes.small));
        animation_states = !mobile ? [
            {
                "start_time": 500,
                "duration": 1000,
                "idx": 0,
                "fn": intro_texts[0].renderSequentialRandom.bind(intro_texts[0]),
                "args": [],
                "persist": true
            },
            {
                "start_time": 3000,
                "duration": 1000,
                "idx": 0,
                "fn": intro_texts[0].renderTransition.bind(intro_texts[0]),
                "args": [
                    "HELLO, FRIEND.",
                    "My name is Benjamin Lappalainen"
                ],
                "persist": true
            },
            {
                "start_time": 4000,
                "duration": 500,
                "idx": 1,
                "fn": intro_texts[1].renderSequentialRandom.bind(intro_texts[1]),
                "args": [],
                "persist": true
            },
            {
                "start_time": 4750,
                "duration": 2000,
                "idx": 2,
                "fn": intro_texts[2].renderSequentialRandom.bind(intro_texts[2]),
                "args": [],
                "persist": true
            },
            {
                "start_time": 7250,
                "duration": 1000,
                "idx": 4,
                "fn": intro_texts[3].renderSequentialRandom.bind(intro_texts[3]),
                "args": [],
                "persist": true
            },
            {
                "start_time": 5000,
                "duration": 1000,
                "idx": 0,
                "fn": intro_texts[0].renderTransition.bind(intro_texts[0]),
                "args": [
                    "My name is Benjamin Lappalainen",
                    "Benjamin Lappalainen"
                ],
                "persist": true
            },
            {
                "start_time": 7000,
                "duration": 250,
                "idx": 0,
                "fn": intro_texts[0].renderTransition.bind(intro_texts[0]),
                "args": [
                    "Benjamin Lappalainen",
                    "BLAP"
                ],
                "persist": true
            },
            {
                "start_time": 7500,
                "duration": 250,
                "idx": 0,
                "fn": intro_texts[0].renderTransition.bind(intro_texts[0]),
                "args": [
                    "BLAP",
                    "BLAP64"
                ],
                "persist": true
            },
            {
                "start_time": 4000,
                "duration": 1000,
                "idx": 3,
                "fn": setUIOpacity,
                "args": [],
                "persist": false
            }
        ] : [
            {
                "start_time": 500,
                "duration": 1000,
                "idx": 0,
                "fn": intro_texts[0].renderSequentialRandom.bind(intro_texts[0]),
                "args": [],
                "persist": true
            },
            {
                "start_time": 3000,
                "duration": 1000,
                "idx": 0,
                "fn": intro_texts[0].renderTransition.bind(intro_texts[0]),
                "args": [
                    "HELLO, FRIEND.",
                    "My name is Benjamin Lappalainen"
                ],
                "persist": true
            },
            {
                "start_time": 5500,
                "duration": 500,
                "idx": 1,
                "fn": intro_texts[1].renderSequentialRandom.bind(intro_texts[1]),
                "args": [],
                "persist": true
            },
            {
                "start_time": 6250,
                "duration": 2000,
                "idx": 2,
                "fn": intro_texts[2].renderSequentialRandom.bind(intro_texts[2]),
                "args": [],
                "persist": true
            },
            {
                "start_time": 8750,
                "duration": 1000,
                "idx": 4,
                "fn": intro_texts[3].renderSequentialRandom.bind(intro_texts[3]),
                "args": [],
                "persist": true
            },
            {
                "start_time": 4500,
                "duration": 1000,
                "idx": 0,
                "fn": intro_texts[0].renderTransition.bind(intro_texts[0]),
                "args": [
                    "My name is Benjamin Lappalainen",
                    "Benjamin Lappalainen"
                ],
                "persist": true
            },
            {
                "start_time": 7000,
                "duration": 250,
                "idx": 0,
                "fn": intro_texts[0].renderTransition.bind(intro_texts[0]),
                "args": [
                    "Benjamin Lappalainen",
                    "BLAP"
                ],
                "persist": true
            },
            {
                "start_time": 7500,
                "duration": 250,
                "idx": 0,
                "fn": intro_texts[0].renderTransition.bind(intro_texts[0]),
                "args": [
                    "BLAP",
                    "BLAP64"
                ],
                "persist": true
            },
            {
                "start_time": 4000,
                "duration": 1000,
                "idx": 3,
                "fn": setUIOpacity,
                "args": [],
                "persist": false
            }
        ];
        animation_manager = new (0, _utils.AnimationManager)(animation_states);
        // Skip animations if requested
        if (skipAnimations) {
            // Set final states immediately
            intro_texts[0].t = "BLAP64";
            intro_texts[1].t = "I play many roles:";
            intro_texts[2].t = "CREATIVE TECHNOLOGIST\nARTIST\nEDUCATOR";
            intro_texts[3].t = "and more...";
            ui_opacity = 255;
            animation_manager.t = 999999;
        }
        window.addEventListener("focus", (event)=>{
            if (p.millis() > 5000) setUIOpacity(1);
        });
    };
    p.draw = function() {
        // deltaTime allows us to be framerate agnostic for animation speed
        if (!mobile) {
            smoothX = p.constrain((0, _utils.smoothFollow)(p.mouseX, smoothX, 0.003 * p.deltaTime), 0, p.width);
            smoothY = p.constrain((0, _utils.smoothFollow)(p.mouseY, smoothY, 0.003 * p.deltaTime), 0, p.height);
        } else {
            smoothX = p.width * 0.5 + 0.31 * short * p.cos(0.0006 * p.millis());
            smoothY = p.height * 0.7 + 0.31 * short * p.sin(0.0006 * p.millis());
        }
        p.clear();
        p.background(23);
        p.textAlign(p.CENTER, p.CENTER);
        ui.forEach((ui_element)=>{
            const d = ui_element.dist(smoothX, smoothY);
            ui_element.cs.x = (0, _utils.easeInCubic)(p.map(d, 0, 0.5 * p.width, 1, 0));
            ui_element.cs.y = (0, _utils.easeInCubic)(p.map(d, 0, 0.5 * p.width, 1, 0));
            p.strokeWeight(1 + 0.015 * short * (0, _utils.easeInCubic)(p.map(d, 0, 0.5 * p.width, 1, 0, true)));
            p.noFill();
            if (ui_element.contains(p.mouseX, p.mouseY)) p.stroke(230, 20, 20, ui_opacity);
            else p.stroke(230, ui_opacity);
            ui_element.render();
            // Text rendering
            p.noStroke();
            p.textFont('BPdotsSquareVF', {
                fontVariationSettings: `wght ${p.map(d / p.width, 1, 0, 100, 900, true)}`
            });
            if (ui_element.contains(p.mouseX, p.mouseY)) p.fill(230, 20, 20, ui_opacity);
            else p.fill(230, ui_opacity);
            ui_element.textWriter.renderSequentialRandom(p.map(d, 100, mobile ? p.width : 0.5 * p.width, 1, 0, true));
        });
        p.noFill();
        p.stroke(230);
        p.strokeWeight(2);
        p.noStroke();
        p.fill(230);
        p.textAlign(p.LEFT, p.TOP);
        p.textFont('BPdotsSquareVF', {
            fontVariationSettings: `wght 900`
        });
        if (animation_manager.t > 10000) {
            intro_texts[0].renderTransition(p.map(intro_texts[0].dist(smoothX, smoothY), 100, 250, 0, 1, true), "Benjamin Lappalainen", "BLAP64");
            intro_texts[1].render();
            intro_texts[2].render();
            intro_texts[3].render();
        } else animation_manager.execute(p);
        // Update cursor based on hover state
        (0, _utils.updateCursor)(p, p.mouseX, p.mouseY, ui);
    };
    p.mousePressed = function(event) {
        if (event && event.button !== 0) return;
        // Block all interactions if help popup is open
        if (window.helpPopupOpen || window.contactPopupOpen) return;
        // Skip intro animations if they're still running
        if (ui_opacity < 128 && !skipAnimations) {
            skipAnimations = true;
            // Set final states immediately
            intro_texts[0].t = "BLAP64";
            intro_texts[1].t = "I play many roles:";
            intro_texts[2].t = "CREATIVE TECHNOLOGIST\nARTIST\nEDUCATOR";
            intro_texts[3].t = "and more...";
            ui_opacity = 255;
            animation_manager.t = 999999;
            return;
        }
        if (ui_opacity < 128) return;
        const ANIMATION_DELAY = 500;
        ui.forEach((ui_element, index)=>{
            if (ui_element.contains(p.mouseX, p.mouseY)) {
                // Navigate based on which UI element was clicked
                if (window.appRouter) switch(index){
                    case 0:
                        setTimeout(()=>{
                            window.appRouter.navigate('/interactive');
                        }, ANIMATION_DELAY);
                        break;
                    case 1:
                        setTimeout(()=>{
                            window.appRouter.navigate('/photo');
                        }, ANIMATION_DELAY);
                        break;
                    case 2:
                        setTimeout(()=>{
                            window.appRouter.navigate('/about');
                        }, ANIMATION_DELAY);
                        break;
                    case 3:
                        setTimeout(()=>{
                            window.appRouter.navigate('/links');
                        }, ANIMATION_DELAY);
                        break;
                }
                return;
            }
        });
    };
    p.touchStarted = function(event) {
        // Block all interactions if help popup is open
        if (window.helpPopupOpen) return false;
        // Skip intro animations if they're still running (touch support)
        if (ui_opacity < 128 && !skipAnimations) {
            skipAnimations = true;
            // Set final states immediately
            intro_texts[0].t = "BLAP64";
            intro_texts[1].t = "I play many roles:";
            intro_texts[2].t = "CREATIVE TECHNOLOGIST\nARTIST\nEDUCATOR";
            intro_texts[3].t = "and more...";
            ui_opacity = 255;
            animation_manager.t = 999999;
            return false;
        }
        return false;
    };
    // Enhanced windowResized function that automatically updates all UI elements
    // Maintains proportional positioning and sizing based on new canvas dimensions
    // Preserves animation states when not skipping animations
    p.windowResized = function windowResized() {
        const s = (0, _utils.getViewportSize)();
        p.resizeCanvas(s.width, s.height);
        short = p.min(s.width, s.height);
        mobile = (0, _utils.widthCheck)(p.width);
        // Update font sizes based on new dimensions
        font_sizes = (0, _utils.getFontSizes)(p.width, p.height);
        // Update padding based on new width
        let padding = [
            0.05,
            0.15
        ];
        if (mobile) padding = [
            0.025,
            0.05
        ];
        // Clear and recreate UI elements with new proportional positions
        // UI elements: corner box, arc, and triangle buttons at 25%, 50%, 75% width
        ui.length = 0;
        const s_font = mobile ? 14 : Math.min(Math.max(0.022 * p.width, 32), 48);
        ui.push(new (0, _utils.UICornerBoxButton)(p, 0.25 * p.width, 0.7 * p.height, 0.26 * short, 0.26 * short, 0.01 * p.width, 0.01 * p.width, "INTERACTIVE\nMEDIA", s_font));
        ui.push(new (0, _utils.UIArcButton)(p, 0.5 * p.width, 0.7 * p.height, 0.3 * short, 0.3 * short, 0.01 * p.width, 0.01 * p.width, "PHOTO", s_font));
        ui.push(new (0, _utils.UITriangleButton)(p, 0.75 * p.width, 0.35 * p.height, 0.2 * short, 0.2 * short, 0.01 * p.width, 0.01 * p.width, -0.5 * p.PI, "ABOUT", s_font));
        ui.push(new (0, _utils.UIHexButton)(p, 0.75 * p.width, 0.7 * p.height, 0.3 * short, 0.3 * short, 0.01 * p.width, 0.01 * p.width, "LINKS", s_font));
        // BLOG button (disabled - newsletter hidden from homepage)
        // ui.push(new UILinesButton(p, 0.82*p.width, 0.78*p.height, 0.22*short, 0.16*short, 0.01*p.width, 0.01*p.width, "BLOG", s_font));
        // Apply quadratic curve layout to UI elements
        layoutUI();
        // Update intro text elements positions and sizes
        if (skipAnimations) {
            // Preserve final states when skipping animations
            intro_texts.length = 0;
            intro_texts.push(new (0, _utils.TextWriter)(p, padding[0] * p.width, padding[0] * p.width, 0.8 * p.width, p.height / 2, "BLAP64", font_sizes.large));
            intro_texts.push(new (0, _utils.TextWriter)(p, padding[1] * p.width, 0.18 * p.height, p.width / 2, p.height / 2, "I play many roles:", font_sizes.small));
            intro_texts.push(new (0, _utils.TextWriter)(p, padding[1] * p.width, 0.22 * p.height, p.width, p.height / 2, "CREATIVE TECHNOLOGIST\nARTIST\nEDUCATOR", font_sizes.medium));
            intro_texts.push(new (0, _utils.TextWriter)(p, padding[1] * p.width, 0.22 * p.height + (mobile ? 4.0 : 3.8) * font_sizes.medium, p.width, p.height / 2, "and more...", font_sizes.small));
        } else {
            // Update positions but preserve current animation states and text content
            intro_texts[0].p.x = padding[0] * p.width;
            intro_texts[0].p.y = padding[0] * p.width;
            intro_texts[0].s.x = 0.8 * p.width;
            intro_texts[0].s.y = p.height / 2;
            intro_texts[0].size = font_sizes.large;
            intro_texts[1].p.x = padding[1] * p.width;
            intro_texts[1].p.y = 0.18 * p.height;
            intro_texts[1].s.x = p.width / 2;
            intro_texts[1].s.y = p.height / 2;
            intro_texts[1].size = font_sizes.small;
            intro_texts[2].p.x = padding[1] * p.width;
            intro_texts[2].p.y = 0.22 * p.height;
            intro_texts[2].s.x = p.width;
            intro_texts[2].s.y = p.height / 2;
            intro_texts[2].size = font_sizes.medium;
            intro_texts[3].p.x = padding[1] * p.width;
            intro_texts[3].p.y = 0.22 * p.height + (mobile ? 4.0 : 3.8) * font_sizes.medium;
            intro_texts[3].size = font_sizes.small;
        }
    };
    function setUIOpacity(v) {
        ui_opacity = 255 * v;
    }
    // Layout UI elements along a quadratic curve going up towards the right
    function layoutUI() {
        if (ui.length === 0) return;
        if (mobile) {
            // Mobile layout: arrange in 2x2 grid in lower third of screen
            const gridCenterX = 0.5 * p.width;
            const gridCenterY = 0.7 * p.height; // Lower third of screen
            const gridSpacing = 0.45 * p.width; // Spacing between grid positions
            // Grid positions: 2x2 layout
            const gridPositions = [
                {
                    x: gridCenterX - gridSpacing / 2,
                    y: gridCenterY - gridSpacing / 2
                },
                {
                    x: gridCenterX + gridSpacing / 2,
                    y: gridCenterY - gridSpacing / 2
                },
                {
                    x: gridCenterX - gridSpacing / 2,
                    y: gridCenterY + gridSpacing / 2
                },
                {
                    x: gridCenterX + gridSpacing / 2,
                    y: gridCenterY + gridSpacing / 2
                } // Bottom-right
            ];
            // Position UI elements in grid
            for(let i = 0; i < ui.length; i++){
                const pos = gridPositions[i % gridPositions.length]; // Handle more than 4 elements
                // Update UI element position
                ui[i].p.x = pos.x;
                ui[i].p.y = pos.y;
                // Update corresponding TextWriter position
                ui[i].textWriter.p.x = pos.x;
                ui[i].textWriter.p.y = pos.y;
            }
        // Blog layout (disabled - newsletter hidden from homepage)
        // Two parallel diagonals, bottom-left to upper-right
        // Left diagonal: Photo (lower), Links (upper)
        // Right diagonal: Blog (lower), Interactive Media (mid), About (upper)
        // const curveCount = ui.length - 1; // all but blog (last element)
        //
        // // Photo - lower left
        // ui[1].p.x = 0.18 * p.width;
        // ui[1].p.y = 0.77 * p.height;
        // ui[1].textWriter.p.x = ui[1].p.x;
        // ui[1].textWriter.p.y = ui[1].p.y;
        //
        // // Links - left diagonal
        // ui[3].p.x = 0.30 * p.width;
        // ui[3].p.y = 0.57 * p.height;
        // ui[3].textWriter.p.x = 0.30 * p.width;
        // ui[3].textWriter.p.y = ui[3].p.y;
        //
        // // Blog - lower right diagonal
        // ui[curveCount].p.x = 0.49 * p.width;
        // ui[curveCount].p.y = 0.90 * p.height;
        // ui[curveCount].textWriter.p.x = ui[curveCount].p.x;
        // ui[curveCount].textWriter.p.y = ui[curveCount].p.y + 2;
        //
        // // Interactive Media - mid right diagonal, equidistant between Blog and About
        // ui[0].p.x = 0.66 * p.width;
        // ui[0].p.y = 0.73 * p.height;
        // ui[0].textWriter.p.x = ui[0].p.x;
        // ui[0].textWriter.p.y = ui[0].p.y;
        //
        // // About - upper right diagonal
        // ui[2].p.x = 0.78 * p.width;
        // ui[2].p.y = 0.54 * p.height;
        // ui[2].textWriter.p.x = ui[2].p.x;
        // ui[2].textWriter.p.y = ui[2].p.y;
        } else {
            // Desktop layout: quadratic curve
            // Define curve parameters - curve goes from bottom-left to top-right
            const startX = 0.15 * p.width; // Start X position (15% from left)
            const startY = 0.75 * p.height; // Start Y position (75% from top, near bottom)
            const endX = 0.85 * p.width; // End X position (85% from left)
            const endY = 0.2 * p.height; // End Y position (20% from top, near top)
            // Quadratic curve control point to create convex upward arc
            const controlX = 0.6 * p.width; // Control point X
            const controlY = 0.65 * p.height; // Control point Y (creates convex curve)
            // Calculate positions for each UI element along the curve
            for(let i = 0; i < ui.length; i++){
                // Parameter t goes from 0 to 1 along the curve
                const t = ui.length > 1 ? i / (ui.length - 1) : 0;
                // Quadratic Bezier curve formula: P(t) = (1-t)²P₀ + 2(1-t)tP₁ + t²P₂
                const oneMinusT = 1 - t;
                const x = oneMinusT * oneMinusT * startX + 2 * oneMinusT * t * controlX + t * t * endX;
                const y = oneMinusT * oneMinusT * startY + 2 * oneMinusT * t * controlY + t * t * endY;
                // Update UI element position
                ui[i].p.x = x;
                ui[i].p.y = y;
                // Update corresponding TextWriter position
                ui[i].textWriter.p.x = x;
                ui[i].textWriter.p.y = y;
            }
        // Blog button fixed at bottom-right (disabled - newsletter hidden from homepage)
        // ui[curveCount].p.x = 0.82 * p.width;
        // ui[curveCount].p.y = 0.78 * p.height;
        // ui[curveCount].textWriter.p.x = 0.82 * p.width;
        // ui[curveCount].textWriter.p.y = 0.78 * p.height + 2;
        }
    }
};
const homeSketch = (node, options = {})=>{
    return new p5((p)=>sketch(p, options), node);
};

},{"../../utils":"khuqI","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lvgwq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sketch", ()=>sketch);
parcelHelpers.export(exports, "oopsSketch", ()=>oopsSketch);
var _utils = require("../../utils");
const sketch = function(p) {
    let fbo = undefined;
    let short = 128;
    p.setup = function setup() {
        p.noCanvas();
        p.pixelDensity(1);
        const s = (0, _utils.getViewportSize)();
        p.createCanvas(s.width, s.height, p.WEBGL);
        // Options for creating our framebuffer, width and height relative to the size of our canvas determine the pixelation appearance
        const options = {
            width: 128,
            height: 128,
            textureFiltering: p.NEAREST
        };
        // Disable p5's smoothing
        p.noSmooth();
        p.ellipseMode(p.CENTER);
        short = p.min(s.width, s.height);
        // Make the framebuffer
        fbo = p.createFramebuffer(options);
        // p5 in instance mode doesn't seem to work well with elements in a shadow root and doesn't remove the "p5_loading" div by itself
        let bg = document.getElementById("bg");
        let loading_div = bg.shadowRoot.getElementById("p5_loading");
        if (loading_div) loading_div.remove();
    };
    p.draw = function draw() {
        p.clear();
        fbo.begin(); // Begin drawing stuff in the framebuffer
        p.noFill();
        p.stroke(200, 20, 20);
        p.strokeWeight(p.abs(p.sin(p.frameCount / 42)));
        p.clear();
        p.rotateX(p.frameCount / 50);
        p.rotateY(p.frameCount / 200);
        p.circle(0, 0, 64);
        p.rotateY(p.PI / 2);
        p.circle(0, 0, 64);
        fbo.end(); // Finish drawing stuff in the framebuffer
        // Render an image of the framebuffer, centering and stretching it to the size of the canvas
        p.image(fbo, -short / 2, -short / 2, short, short);
    };
    p.windowResized = function windowResized() {
        const s = (0, _utils.getViewportSize)();
        p.resizeCanvas(s.width, s.height);
        short = p.min(s.width, s.height);
    };
};
const oopsSketch = (node)=>{
    return new p5(sketch, node);
};

},{"../../utils":"khuqI","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1fe1l":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sketch", ()=>sketch);
parcelHelpers.export(exports, "codeartSketch", ()=>codeartSketch);
var _utils = require("../../utils");
const sketch = function(p) {
    let ui = [];
    let short = 128;
    let smoothX = 0;
    let smoothY = 0;
    let mobile = false;
    let cx, cy, r;
    p.setup = function setup() {
        p.noCanvas();
        p.pixelDensity(1);
        const s = (0, _utils.getViewportSize)();
        mobile = (0, _utils.widthCheck)(s.width);
        p.createCanvas(s.width, s.height);
        short = p.min(s.width, s.height);
        cx = 0.5 * p.width;
        cy = mobile ? 0.5 * p.height : 0.6 * p.height;
        r = 0.2 * short;
        layoutUI();
        p.background(23);
        p.textAlign(p.CENTER, p.CENTER);
        p.strokeCap(p.PROJECT);
        // p5 in instance mode doesn't seem to work well with elements in a shadow root and doesn't remove the "p5_loading" div by itself
        let bg = document.getElementById("bg");
        let loading_div = bg.shadowRoot.getElementById("p5_loading");
        if (loading_div) loading_div.remove();
    };
    p.draw = function draw() {
        p.background(23);
        if (!mobile) {
            smoothX = (0, _utils.smoothFollow)(p.mouseX, smoothX, 0.003 * p.deltaTime);
            smoothY = (0, _utils.smoothFollow)(p.mouseY, smoothY, 0.003 * p.deltaTime);
        } else {
            smoothX = p.width * 0.5 + 0.2 * short * p.cos(-p.PI / 2 + 0.001 * p.millis());
            smoothY = p.height * 0.5 + 0.2 * short * p.sin(-p.PI / 2 + 0.001 * p.millis());
        }
        p.noFill();
        p.stroke(230);
        p.strokeWeight(1);
        ui.forEach((ui_element)=>{
            const d = ui_element.dist(smoothX, smoothY);
            ui_element.cs.x = (0, _utils.easeInCubic)(p.map(d, 0, 0.5 * p.width, 1, 0));
            ui_element.cs.y = (0, _utils.easeInCubic)(p.map(d, 0, 0.5 * p.width, 1, 0));
            //p.strokeWeight(1 + 0.015*short*easeInCubic(p.map(l, 0, 0.5*p.width, 1, 0, true)));
            p.noFill();
            const isHovered = ui_element.contains(p.mouseX, p.mouseY);
            const strokeColor = ui_element.getColor(isHovered);
            p.stroke(...strokeColor);
            ui_element.renderTriangle();
            // Text rendering
            p.noStroke();
            p.textFont('BPdotsSquareVF', {
                fontVariationSettings: `wght ${p.map(d / p.width, 1, 0, 100, 900, true)}`
            });
            const fillColor = ui_element.getColor(isHovered);
            p.fill(...fillColor);
            ui_element.textWriter.renderSequentialRandom(p.map(d, 100, 0.5 * p.width, 1, 0, true));
        });
        renderDecor();
        // Update cursor based on hover state
        (0, _utils.updateCursor)(p, p.mouseX, p.mouseY, ui);
    };
    p.windowResized = function windowResized() {
        const s = (0, _utils.getViewportSize)();
        mobile = (0, _utils.widthCheck)(s.width);
        p.resizeCanvas(s.width, s.height);
        short = p.min(s.width, s.height);
        cx = 0.5 * p.width;
        cy = 0.6 * p.height;
        r = 0.2 * short;
        layoutUI();
    };
    p.mousePressed = function(event) {
        if (event && event.button !== 0) return;
        // Block all interactions if help popup is open
        if (window.helpPopupOpen || window.contactPopupOpen) return;
        const ANIMATION_DELAY = 500;
        ui.forEach((ui_element, index)=>{
            if (ui_element.contains(p.mouseX, p.mouseY)) {
                // Navigate based on which UI element was clicked
                if (window.appRouter) switch(index){
                    case 0:
                        setTimeout(()=>{
                            window.appRouter.navigate('/interactive/live');
                        }, ANIMATION_DELAY);
                        break;
                    case 1:
                        // Add photo route when available
                        console.log('PHYSICAL ARTIFACTS COMING SOON');
                        break;
                    case 2:
                        setTimeout(()=>{
                            window.appRouter.navigate('/interactive/web');
                        }, ANIMATION_DELAY);
                        break;
                }
                return;
            }
        });
    };
    function layoutUI() {
        ui.length = 0;
        const s_font = mobile ? 18 : Math.max(0.022 * p.width, 32);
        // LIVE EXPERIENCES - default colors
        ui.push(new (0, _utils.UITriangleButton)(p, cx, cy - r, 0.1 * short, 0.1 * short, 0.01 * p.width, 0.01 * p.width, -0.5 * p.PI, "LIVE\nEXPERIENCES", s_font));
        ui[0].setTextOffset(0, -0.9 * r);
        // PHYSICAL ARTIFACTS - amber colors (old terminal style)
        ui.push(new (0, _utils.UITriangleButton)(p, cx - r * p.cos(p.PI / 6), cy + r * p.sin(p.PI / 6), 0.1 * short, 0.1 * short, 0.01 * p.width, 0.01 * p.width, -0.5 * p.PI, "PHYSICAL\nARTIFACTS\n(COMING SOON)", s_font, [
            230
        ], [
            220,
            160,
            0
        ]));
        ui[1].setTextOffset(-0.95 * r * p.cos(p.PI / 6), 1.15 * r * p.sin(p.PI / 6));
        // WEB EXPERIENCES - default colors
        ui.push(new (0, _utils.UITriangleButton)(p, cx + r * p.cos(p.PI / 6), cy + r * p.sin(p.PI / 6), 0.1 * short, 0.1 * short, 0.01 * p.width, 0.01 * p.width, -0.5 * p.PI, "WEB\nEXPERIENCES", s_font));
        ui[2].setTextOffset(0.95 * r * p.cos(p.PI / 6), 1.15 * r * p.sin(p.PI / 6));
    }
    function renderDecor() {
        const t = 0.0003 * p.millis();
        p.noFill();
        p.stroke(230);
        p.strokeWeight(1);
        let m = p.createVector(smoothX, smoothY);
        let c = p.createVector(cx, cy);
        let new_v = p5.Vector.sub(m, c);
        const h = new_v.heading();
        let new_cx = cx + 0.1 * p.min(new_v.mag(), 3 * r) * p.cos(h);
        let new_cy = cy + 0.1 * p.min(new_v.mag(), 3 * r) * p.sin(h);
        p.circle(new_cx, new_cy, 0.5 * r);
        let a_mod = -h;
        let a0 = a_mod + zcn(t);
        let a1 = 2 * p.PI / 3 + a_mod + zcn(t);
        let a2 = 4 * p.PI / 3 + a_mod + zcn(t);
        let c00 = radialToCartesian(0.2 * r, a0);
        let c01 = radialToCartesian(0.3 * r, a0);
        let c10 = radialToCartesian(0.2 * r, a1);
        let c11 = radialToCartesian(0.3 * r, a1);
        let c20 = radialToCartesian(0.2 * r, a2);
        let c21 = radialToCartesian(0.3 * r, a2);
        p.line(new_cx + c00.x, new_cy + c00.y, new_cx + c01.x, new_cy + c01.y);
        p.line(new_cx + c10.x, new_cy + c10.y, new_cx + c11.x, new_cy + c11.y);
        p.line(new_cx + c20.x, new_cy + c20.y, new_cx + c21.x, new_cy + c21.y);
        a_mod = p.abs(a_mod);
        for(let i = 0; i < 3; i++){
            let ad = p.PI * zcn(0.1 * a_mod + 0.0003 * p.millis());
            a0 = i * p.TWO_PI / 3 + 0.6 * p.PI / 6 + a_mod + ad;
            a1 = i * p.TWO_PI / 3 + 1.4 * p.PI / 6 + a_mod + ad;
            c00 = radialToCartesian(0.5 * r, a0);
            c01 = radialToCartesian(0.5 * r, a1);
            p.line(new_cx + c00.x, new_cy + c00.y, new_cx + c01.x, new_cy + c01.y);
            let lm = 0.02 * a_mod / p.PI + 0.02;
            let rmi = (0.5 - lm) * r;
            let rmo = (0.5 + lm) * r;
            c00 = radialToCartesian(rmi, a0);
            c01 = radialToCartesian(rmo, a0);
            p.line(new_cx + c00.x, new_cy + c00.y, new_cx + c01.x, new_cy + c01.y);
            c00 = radialToCartesian(rmi, a1);
            c01 = radialToCartesian(rmo, a1);
            p.line(new_cx + c00.x, new_cy + c00.y, new_cx + c01.x, new_cy + c01.y);
        }
    }
    function radialToCartesian(r, a) {
        return {
            x: r * p.cos(a),
            y: -r * p.sin(a)
        };
    }
    function zcn(x = 0, y = 0, z = 0) {
        return 2 * (p.noise(x, y, z) - 0.5);
    }
};
const codeartSketch = (node)=>{
    return new p5(sketch, node);
};

},{"../../utils":"khuqI","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7zZtV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sketch", ()=>sketch);
parcelHelpers.export(exports, "webexperiencesSketch", ()=>webexperiencesSketch);
var _utils = require("../../utils");
var _projectDetailsJs = require("./project-details.js");
var _webexperiencesJs = require("./webexperiences.js");
const sketch = function(p, options = {}) {
    let webButtons = [];
    const numNeighbors = 3;
    let mobile = false;
    let sols = 0;
    let activeInfoCard = null;
    let currentInfoCardProject = null;
    let infoCardAlpha = 0;
    let infoCardAnimationStart = 0;
    let infoCardAnimating = false;
    let targetAlpha = 0;
    let t = 0;
    const PHYSICS_FRAMES = 480;
    p.setup = async function() {
        const s = (0, _utils.getViewportSize)();
        p.createCanvas(s.width, s.height);
        mobile = (0, _utils.widthCheck)(s.width);
        p.ellipseMode(p.CENTER);
        p.rectMode(p.CENTER);
        p.background(23);
        p.strokeCap(p.PROJECT);
        // Set initial framerate for optimal performance
        p.frameRate(60);
        // Disable default scroll behavior on this page
        document.body.style.overscrollBehavior = 'none';
        document.body.style.overflow = 'hidden';
        document.body.style.touchAction = 'none';
        // Store reference to cleanup later
        p.preventAllTouch = null;
        // Add a one-time interaction handler to ensure maximum performance on mobile
        const enableHighPerformance = ()=>{
            // Force p5.js to use maximum framerate
            p.frameRate(60);
            // Try to resume audio context if it exists (common cause of throttling)
            if (window.AudioContext || window.webkitAudioContext) {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                if (p.getAudioContext && p.getAudioContext().state === 'suspended') p.getAudioContext().resume();
            }
        };
        // Listen for both touch and mouse events
        document.addEventListener('touchstart', enableHighPerformance, {
            once: true,
            passive: true
        });
        document.addEventListener('click', enableHighPerformance, {
            once: true
        });
        document.addEventListener('keydown', enableHighPerformance, {
            once: true
        });
        // Font already loaded via CSS
        p.textFont('BPdotsSquareVF', {
            fontVariationSettings: `wght 900`
        });
        let minRadius = p.min(p.width, p.height) * 0.2;
        let maxRadius = p.min(p.width, p.height) * 0.3;
        let minScale = p.min(p.width, p.height) * 0.1;
        let maxScale = p.min(p.width, p.height) * 0.15;
        // Create web buttons from project data
        for(let i = 0; i < (0, _projectDetailsJs.projects).length; i++){
            const project = (0, _projectDetailsJs.projects)[i];
            const button = new (0, _utils.UIWebButton)(p, p.random(p.width * 0.2, p.width * 0.8), p.random(p.height * 0.2, p.height * 0.8), p.random(minRadius, maxRadius), p.random(minScale, maxScale), project);
            // Add physics properties for movement
            button.vel = p.createVector();
            button.acc = p.createVector();
            button.neighbors = [];
            webButtons.push(button);
        }
        // Calculate days since project start (different from installations)
        sols = (0, _utils.daysSince)('2019-09-05');
    };
    p.draw = function() {
        p.background(22);
        t++;
        // Calculate nearest neighbors for each button
        for(let i = 0; i < webButtons.length; i++)findNearestNeighbors(webButtons[i], webButtons, numNeighbors);
        // Draw connections first (so they appear behind the buttons)
        for(let i = 0; i < webButtons.length; i++)drawConnections(webButtons[i]);
        // Update and display buttons
        for(let i = 0; i < webButtons.length; i++){
            let b1 = webButtons[i];
            if (t < PHYSICS_FRAMES) {
                // Center attraction
                let toCenter = p.createVector(p.width / 2, p.height / 2).sub(b1.p);
                toCenter.setMag(0.01 * (PHYSICS_FRAMES - t) / PHYSICS_FRAMES);
                applyForce(b1, toCenter);
                // Inter-button forces
                for(let j = 0; j < webButtons.length; j++){
                    if (i === j) continue;
                    let b2 = webButtons[j];
                    let dir = p5.Vector.sub(b2.p, b1.p);
                    let distance = dir.mag();
                    let minDist = b1.radius + b2.radius;
                    if (distance < 0.1) continue;
                    if (distance < minDist) {
                        let overlap = minDist - distance;
                        let force = dir.copy().normalize().mult(-0.01 * overlap * (PHYSICS_FRAMES - t) / PHYSICS_FRAMES);
                        applyForce(b1, force);
                    } else {
                        let attract = dir.copy().normalize().mult(0.01 * (PHYSICS_FRAMES - t) / PHYSICS_FRAMES);
                        applyForce(b1, attract);
                    }
                }
                updateButton(b1);
            }
            // Check hover state
            const isHovered = b1.contains(p.mouseX, p.mouseY);
            b1.targetHoverAlpha = isHovered ? 1 : 0;
            b1.render();
        }
        // Update info card animation
        if (infoCardAnimating) {
            const elapsed = p.millis() - infoCardAnimationStart;
            const progress = p.constrain(elapsed / 300, 0, 1);
            infoCardAlpha = p.lerp(infoCardAlpha, targetAlpha, progress);
            if (progress >= 1) {
                infoCardAnimating = false;
                infoCardAlpha = targetAlpha;
                if (targetAlpha === 0) {
                    activeInfoCard = null;
                    currentInfoCardProject = null;
                    // Clean up sketch instances and containers
                    cleanupCurrentSketch();
                }
            }
        }
        // Update cursor
        (0, _utils.updateCursor)(p, p.mouseX, p.mouseY, ...webButtons, getCloseButtonHoverCheck());
        // Render HUD decorations and title (before info card so they get dimmed)
        renderHUDDecorations();
        // Render active info card (on top of everything)
        if (activeInfoCard !== null || infoCardAlpha > 0) {
            // Use stored project reference during animations to avoid undefined issues
            const projectToRender = currentInfoCardProject || (0, _projectDetailsJs.projects)[activeInfoCard];
            renderInfoCard(projectToRender);
        }
    };
    // Resize throttling
    let resizeTimeout = null;
    p.windowResized = function() {
        // Throttle resize events to prevent performance issues during orientation changes
        if (resizeTimeout) clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(()=>{
            const s = (0, _utils.getViewportSize)();
            p.resizeCanvas(s.width, s.height);
            mobile = (0, _utils.widthCheck)(s.width);
            t = 0;
            // Reposition buttons that might be off-screen
            for (let button of webButtons){
                button.p.x = p.constrain(button.p.x, button.radius, p.width - button.radius);
                button.p.y = p.constrain(button.p.y, button.radius, p.height - button.radius);
            }
            resizeTimeout = null;
        }, 150); // Wait 150ms after resize stops
    };
    p.mousePressed = function(event) {
        if (event && event.button !== 0) return;
        // Block all interactions if help popup is open
        if (window.helpPopupOpen || window.contactPopupOpen) return;
        // Check if clicking on close button when info card is open
        if (activeInfoCard !== null) {
            const isMobile = (0, _utils.widthCheck)(p.width);
            const cardWidth = isMobile ? p.width * 0.95 : p.width * 0.9;
            const cardHeight = isMobile ? p.height * 0.82 : p.height * 0.85; // Match new mobile height
            const cardX = (p.width - cardWidth) / 2;
            const cardY = (p.height - cardHeight) / 2;
            const closeButtonSize = isMobile ? 44 : 30;
            const closeButtonX = isMobile ? (p.width - closeButtonSize) / 2 : cardX + cardWidth - closeButtonSize + 5; // Center on mobile
            const closeButtonY = isMobile ? cardY + cardHeight + 15 : cardY - closeButtonSize - 5; // Below iframe on mobile
            if (p.mouseX >= closeButtonX && p.mouseX <= closeButtonX + closeButtonSize && p.mouseY >= closeButtonY && p.mouseY <= closeButtonY + closeButtonSize) {
                closeInfoCard();
                return;
            }
            // Check if clicking outside the card (account for mobile close button position)
            const clickOutside = isMobile ? p.mouseX < cardX || p.mouseX > cardX + cardWidth || p.mouseY < cardY || p.mouseY > cardY + cardHeight + 60 : p.mouseX < cardX || p.mouseX > cardX + cardWidth || p.mouseY < cardY || p.mouseY > cardY + cardHeight;
            if (clickOutside) {
                closeInfoCard();
                return;
            }
            return;
        }
        // Only check web button clicks if no info card is active or animating
        if (activeInfoCard === null && !infoCardAnimating) webButtons.forEach((button, index)=>{
            if (button.contains(p.mouseX, p.mouseY)) {
                openInfoCard(index);
                return;
            }
        });
    };
    // Helper functions for web button physics and interactions
    function applyForce(button, force) {
        button.acc.add(force);
    }
    function updateButton(button) {
        button.vel.add(button.acc);
        button.vel.mult(0.94);
        button.p.add(button.vel);
        button.acc.mult(0);
        // Constrain to canvas
        button.p.x = p.constrain(button.p.x, button.radius, p.width - button.radius);
        button.p.y = p.constrain(button.p.y, button.radius, p.height - button.radius);
    }
    function findNearestNeighbors(button, allButtons, numNeighbors) {
        let distances = [];
        for(let i = 0; i < allButtons.length; i++){
            if (allButtons[i] === button) continue;
            let dist = p5.Vector.dist(button.p, allButtons[i].p);
            distances.push({
                button: allButtons[i],
                distance: dist
            });
        }
        distances.sort((a, b)=>a.distance - b.distance);
        button.neighbors = distances.slice(0, numNeighbors).map((item)=>item.button);
    }
    function drawConnections(button) {
        for (let neighbor of button.neighbors){
            const distance = p5.Vector.dist(button.p, neighbor.p);
            const midX = (button.p.x + neighbor.p.x) / 2;
            const midY = (button.p.y + neighbor.p.y) / 2;
            // Main connection line with distance-based opacity
            const connectionAlpha = p.map(distance, 0, p.width * 0.5, 150, 30);
            p.stroke(74, 144, 230, connectionAlpha);
            p.strokeWeight(1);
            p.line(button.p.x, button.p.y, neighbor.p.x, neighbor.p.y);
            // Data flow pulse effect
            const pulseTime = p.millis() * 0.00075; // 25% of original speed (0.003 * 0.25)
            const pulsePosition = (pulseTime + button.p.x * 0.01) % 1;
            const pulseX = p.lerp(button.p.x, neighbor.p.x, pulsePosition);
            const pulseY = p.lerp(button.p.y, neighbor.p.y, pulsePosition);
            // Animated pulse dot
            p.fill(74, 144, 230, 200);
            p.noStroke();
            p.circle(pulseX, pulseY, 4);
            // Connection node at midpoint (sci-fi junction style)
            if (distance > 100) {
                p.stroke(74, 144, 230, connectionAlpha * 0.8);
                p.strokeWeight(1);
                p.noFill();
                const nodeSize = 6;
                // Diamond-shaped junction node
                p.push();
                p.translate(midX, midY);
                p.rotate(p.PI / 4);
                p.square(0, 0, nodeSize);
                p.pop();
                // Small cross inside the diamond
                p.line(midX - 2, midY, midX + 2, midY);
                p.line(midX, midY - 2, midX, midY + 2);
            }
        }
    }
    function openInfoCard(index) {
        activeInfoCard = index;
        currentInfoCardProject = (0, _projectDetailsJs.projects)[index];
        targetAlpha = 255;
        infoCardAnimationStart = p.millis();
        infoCardAnimating = true;
        // Update theme color for iOS status bar to match dimmed overlay
        const themeColorMeta = document.querySelector('meta[name="theme-color"]');
        if (themeColorMeta) themeColorMeta.content = '#000000'; // Dark color to match overlay
        // Nuclear option: completely lock the viewport
        const html = document.documentElement;
        const body = document.body;
        // Store current scroll position to restore later
        p.savedScrollTop = window.pageYOffset || html.scrollTop || body.scrollTop || 0;
        p.savedScrollLeft = window.pageXOffset || html.scrollLeft || body.scrollLeft || 0;
        // Lock everything
        html.style.overflow = 'hidden';
        html.style.position = 'fixed';
        html.style.width = '100%';
        html.style.height = '100%';
        html.style.touchAction = 'none';
        html.style.overscrollBehavior = 'none';
        body.style.overflow = 'hidden';
        body.style.position = 'fixed';
        body.style.width = '100%';
        body.style.height = '100%';
        body.style.touchAction = 'none';
        body.style.overscrollBehavior = 'none';
        body.style.top = `-${p.savedScrollTop}px`;
        body.style.left = `-${p.savedScrollLeft}px`;
        // Prevent ALL touch events except on iframe
        const preventEverything = (e)=>{
            // Only allow if target is iframe or inside iframe
            if (e.target.tagName === 'IFRAME') return true;
            // Completely block everything else
            e.preventDefault();
            e.stopImmediatePropagation();
            return false;
        };
        // Add to window and document with highest priority
        window.addEventListener('touchmove', preventEverything, {
            passive: false,
            capture: true
        });
        window.addEventListener('touchstart', preventEverything, {
            passive: false,
            capture: true
        });
        window.addEventListener('scroll', preventEverything, {
            passive: false,
            capture: true
        });
        document.addEventListener('touchmove', preventEverything, {
            passive: false,
            capture: true
        });
        document.addEventListener('touchstart', preventEverything, {
            passive: false,
            capture: true
        });
        document.addEventListener('scroll', preventEverything, {
            passive: false,
            capture: true
        });
        // Store reference for cleanup
        p.preventEverything = preventEverything;
        // Lock orientation on mobile to prevent performance issues
        if (screen.orientation && screen.orientation.lock) try {
            screen.orientation.lock('portrait-primary').catch(()=>{
            // Silently fail if orientation lock isn't supported
            });
        } catch (e) {
        // Silently fail if orientation lock isn't supported
        }
        // Hide breadcrumb navigation on mobile when infoCard opens
        if ((0, _utils.widthCheck)(p.width)) {
            const breadcrumbContainer = document.getElementById("breadcrumb-container");
            if (breadcrumbContainer) breadcrumbContainer.style.display = 'none';
        }
        // Hide help and contact buttons on both mobile and desktop when infoCard opens
        const helpContainer = document.getElementById("help-container");
        const contactContainer = document.getElementById("contact-container");
        if (helpContainer) helpContainer.style.display = 'none';
        if (contactContainer) contactContainer.style.display = 'none';
        // Update breadcrumb to show current project
        const project = (0, _projectDetailsJs.projects)[index];
        if (project && project.slug) require("368e69cd7e27f31a").then(({ updateBreadcrumb })=>{
            updateBreadcrumb(`/interactive/web/${project.slug}`);
        });
    }
    function closeInfoCard() {
        targetAlpha = 0;
        infoCardAnimationStart = p.millis();
        infoCardAnimating = true;
        // Restore original theme color for iOS status bar
        const themeColorMeta = document.querySelector('meta[name="theme-color"]');
        if (themeColorMeta) themeColorMeta.content = '#171717'; // Back to original dark theme
        // Unload and hide iframe when closing
        if (currentExternalIframe) {
            currentExternalIframe.src = 'about:blank'; // Unload the iframe content
            currentExternalIframe.style.display = 'none';
        }
        // Remove all event prevention
        if (p.preventEverything) {
            window.removeEventListener('touchmove', p.preventEverything, {
                capture: true
            });
            window.removeEventListener('touchstart', p.preventEverything, {
                capture: true
            });
            window.removeEventListener('scroll', p.preventEverything, {
                capture: true
            });
            document.removeEventListener('touchmove', p.preventEverything, {
                capture: true
            });
            document.removeEventListener('touchstart', p.preventEverything, {
                capture: true
            });
            document.removeEventListener('scroll', p.preventEverything, {
                capture: true
            });
            p.preventEverything = null;
        }
        // Unlock everything and restore scroll position
        const html = document.documentElement;
        const body = document.body;
        html.style.overflow = '';
        html.style.position = '';
        html.style.width = '';
        html.style.height = '';
        html.style.touchAction = '';
        html.style.overscrollBehavior = '';
        body.style.overflow = '';
        body.style.position = '';
        body.style.width = '';
        body.style.height = '';
        body.style.touchAction = '';
        body.style.overscrollBehavior = '';
        body.style.top = '';
        body.style.left = '';
        // Restore scroll position
        if (typeof p.savedScrollTop !== 'undefined') window.scrollTo(p.savedScrollLeft || 0, p.savedScrollTop || 0);
        // Unlock orientation when closing info card
        if (screen.orientation && screen.orientation.unlock) try {
            screen.orientation.unlock();
        } catch (e) {
        // Silently fail if orientation unlock isn't supported
        }
        // Show breadcrumb navigation on mobile when infoCard closes
        if ((0, _utils.widthCheck)(p.width)) {
            const breadcrumbContainer = document.getElementById("breadcrumb-container");
            if (breadcrumbContainer) breadcrumbContainer.style.display = 'block';
        }
        // Show help and contact buttons on both mobile and desktop when infoCard closes
        const helpContainer = document.getElementById("help-container");
        const contactContainer = document.getElementById("contact-container");
        if (helpContainer) helpContainer.style.display = 'block';
        if (contactContainer) contactContainer.style.display = 'block';
        // Update URL back to main web experiences page
        if (window.location.hash.includes('/interactive/web/') && window.location.hash !== '#/interactive/web') window.history.pushState(null, '', '#/interactive/web');
        // Update breadcrumb back to web experiences page
        require("368e69cd7e27f31a").then(({ updateBreadcrumb })=>{
            updateBreadcrumb('/interactive/web');
        });
    }
    function getCloseButtonHoverCheck() {
        return (mouseX, mouseY)=>{
            if (activeInfoCard !== null) {
                const isMobile = (0, _utils.widthCheck)(p.width);
                const cardWidth = isMobile ? p.width * 0.95 : p.width * 0.9;
                const cardHeight = isMobile ? p.height * 0.82 : p.height * 0.85; // Match new mobile height
                const cardX = (p.width - cardWidth) / 2;
                const cardY = (p.height - cardHeight) / 2;
                const closeButtonSize = isMobile ? 44 : 30;
                const closeButtonX = isMobile ? (p.width - closeButtonSize) / 2 : cardX + cardWidth - closeButtonSize + 5; // Center on mobile
                const closeButtonY = isMobile ? cardY + cardHeight + 15 : cardY - closeButtonSize - 5; // Below iframe on mobile
                return mouseX >= closeButtonX && mouseX <= closeButtonX + closeButtonSize && mouseY >= closeButtonY && mouseY <= closeButtonY + closeButtonSize;
            }
            return false;
        };
    }
    function renderInfoCard(project) {
        if (!project) return;
        // Switch to CORNER mode for UI elements
        p.push();
        p.rectMode(p.CORNER);
        const isMobile = (0, _utils.widthCheck)(p.width);
        const cardWidth = isMobile ? p.width * 0.95 : p.width * 0.9;
        const cardHeight = isMobile ? p.height * 0.82 : p.height * 0.85; // Reduced mobile height
        const cardX = (p.width - cardWidth) / 2;
        const cardY = (p.height - cardHeight) / 2;
        // Semi-transparent background overlay
        p.fill(0, 0, 0, 200 * (infoCardAlpha / 255));
        p.noStroke();
        p.rect(0, 0, p.width, p.height);
        // Close button positioning
        const closeButtonSize = isMobile ? 44 : 30;
        const closeButtonX = isMobile ? (p.width - closeButtonSize) / 2 : cardX + cardWidth - closeButtonSize + 5; // Center on mobile
        const closeButtonY = isMobile ? cardY + cardHeight + 15 : cardY - closeButtonSize - 5; // Below iframe on mobile
        renderCloseButton(closeButtonX, closeButtonY, closeButtonSize, infoCardAlpha);
        // Create sketch container - adjust height on mobile to leave space for close button
        const padding = 0;
        const sketchHeight = isMobile ? cardHeight - 10 : cardHeight - 2 * padding; // Slightly less height on mobile
        createOrUpdateSketch(project, cardX + padding, cardY + padding, cardWidth - 2 * padding, sketchHeight);
        p.pop(); // Restore previous rectMode
    }
    let currentSketchInstance = null;
    let currentSketchContainer = null;
    function createOrUpdateSketch(project, x, y, width, height) {
        // Handle external projects with iframe (keep existing functionality)
        if (project.type === 'external') {
            createOrUpdateExternalIframe(project, x, y, width, height);
            return;
        }
        // Handle local projects with direct p5 instances
        const sketchFunction = (0, _webexperiencesJs.localSketches)[project.slug];
        if (!sketchFunction) {
            console.warn(`No local sketch found for slug: ${project.slug}`);
            return;
        }
        // Create container if it doesn't exist
        if (!currentSketchContainer) {
            currentSketchContainer = document.createElement('div');
            currentSketchContainer.style.position = 'fixed';
            currentSketchContainer.style.border = '2px solid #4A90E6';
            currentSketchContainer.style.borderRadius = '0px';
            currentSketchContainer.style.backgroundColor = '#000';
            currentSketchContainer.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.5)';
            currentSketchContainer.style.zIndex = '1000';
            currentSketchContainer.style.overflow = 'hidden';
            document.body.appendChild(currentSketchContainer);
            // Create p5 instance targeting the container
            currentSketchInstance = new p5(sketchFunction, currentSketchContainer);
        }
        // Update container position and size
        const canvas = p.canvas;
        const canvasRect = canvas.getBoundingClientRect();
        const currentAlpha = infoCardAlpha;
        currentSketchContainer.style.left = canvasRect.left + x + 'px';
        currentSketchContainer.style.top = canvasRect.top + y + 'px';
        currentSketchContainer.style.width = width + 'px';
        currentSketchContainer.style.height = height + 'px';
        currentSketchContainer.style.opacity = currentAlpha / 255;
        currentSketchContainer.style.display = currentAlpha > 0 ? 'block' : 'none';
    }
    function cleanupCurrentSketch() {
        // Clean up p5 instance
        if (currentSketchInstance) {
            // Call custom cleanup method if it exists
            if (typeof currentSketchInstance.cleanupSketch === 'function') currentSketchInstance.cleanupSketch();
            currentSketchInstance.remove();
            currentSketchInstance = null;
        }
        // Clean up container
        if (currentSketchContainer) {
            currentSketchContainer.remove();
            currentSketchContainer = null;
        }
        // Clean up external iframe
        if (currentExternalIframe) {
            currentExternalIframe.src = 'about:blank';
            currentExternalIframe.remove();
            currentExternalIframe = null;
        }
    }
    // Keep iframe functionality for external projects
    let currentExternalIframe = null;
    function createOrUpdateExternalIframe(project, x, y, width, height) {
        const url = project.url;
        // Remove existing iframe if URL has changed
        if (currentExternalIframe && currentExternalIframe.src !== url) {
            currentExternalIframe.remove();
            currentExternalIframe = null;
        }
        // Create new iframe if needed
        if (!currentExternalIframe) {
            currentExternalIframe = document.createElement('iframe');
            currentExternalIframe.src = url;
            currentExternalIframe.style.border = '2px solid #4A90E6';
            currentExternalIframe.style.borderRadius = '0px';
            currentExternalIframe.style.backgroundColor = '#000';
            currentExternalIframe.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.5)';
            currentExternalIframe.allow = 'microphone; camera; autoplay; encrypted-media; fullscreen; geolocation; gyroscope; accelerometer; magnetometer; midi';
            document.body.appendChild(currentExternalIframe);
        }
        // Update iframe position and size
        const canvas = p.canvas;
        const canvasRect = canvas.getBoundingClientRect();
        const currentAlpha = infoCardAlpha;
        currentExternalIframe.style.position = 'fixed';
        currentExternalIframe.style.left = canvasRect.left + x + 'px';
        currentExternalIframe.style.top = canvasRect.top + y + 'px';
        currentExternalIframe.style.width = width + 'px';
        currentExternalIframe.style.height = height + 'px';
        currentExternalIframe.style.zIndex = '1000';
        currentExternalIframe.style.opacity = currentAlpha / 255;
        currentExternalIframe.style.display = currentAlpha > 0 ? 'block' : 'none';
    }
    function renderCloseButton(x, y, size, alpha) {
        const padding = size * 0.25;
        // Ensure we're in CORNER mode for close button
        p.push();
        p.rectMode(p.CORNER);
        // Close button background
        p.fill(50, 50, 50, 200 * (alpha / 255));
        p.stroke(74, 144, 230, alpha);
        p.strokeWeight(1);
        p.rect(x, y, size, size);
        // X symbol
        p.stroke(74, 144, 230, alpha);
        p.strokeWeight(2);
        p.line(x + padding, y + padding, x + size - padding, y + size - padding);
        p.line(x + size - padding, y + padding, x + padding, y + size - padding);
        p.pop();
    }
    // Cleanup function to remove sketches when main sketch is destroyed
    p.cleanupSketch = function() {
        cleanupCurrentSketch();
        // Restore original theme color in case cleanup happens while infoCard is open
        const themeColorMeta = document.querySelector('meta[name="theme-color"]');
        if (themeColorMeta) themeColorMeta.content = '#171717';
        // Re-enable browser scroll behavior and swipe navigation
        document.body.style.overscrollBehavior = '';
        document.body.style.overflow = '';
        document.body.style.touchAction = '';
        // Remove all event prevention if active
        if (p.preventEverything) {
            window.removeEventListener('touchmove', p.preventEverything, {
                capture: true
            });
            window.removeEventListener('touchstart', p.preventEverything, {
                capture: true
            });
            window.removeEventListener('scroll', p.preventEverything, {
                capture: true
            });
            document.removeEventListener('touchmove', p.preventEverything, {
                capture: true
            });
            document.removeEventListener('touchstart', p.preventEverything, {
                capture: true
            });
            document.removeEventListener('scroll', p.preventEverything, {
                capture: true
            });
            p.preventEverything = null;
        }
        // Reset all positioning
        const html = document.documentElement;
        const body = document.body;
        html.style.overflow = '';
        html.style.position = '';
        html.style.width = '';
        html.style.height = '';
        html.style.touchAction = '';
        html.style.overscrollBehavior = '';
        body.style.overflow = '';
        body.style.position = '';
        body.style.width = '';
        body.style.height = '';
        body.style.touchAction = '';
        body.style.overscrollBehavior = '';
        body.style.top = '';
        body.style.left = '';
        // Reset state
        activeInfoCard = null;
        currentInfoCardProject = null;
        infoCardAlpha = 0;
        // Show breadcrumb navigation if it was hidden on mobile
        if ((0, _utils.widthCheck)(p.width)) {
            const breadcrumbContainer = document.getElementById("breadcrumb-container");
            if (breadcrumbContainer) breadcrumbContainer.style.display = 'block';
        }
    };
    function renderHUDDecorations() {
        p.push();
        // Title
        renderTitle();
        // Perimeter decorations
        renderPerimeterHUD();
        p.pop();
    }
    function renderTitle() {
        const titleY = mobile ? 5 : 20;
        const titleSize = mobile ? 18 : 28;
        p.fill(255, 200);
        p.noStroke();
        p.textAlign(p.CENTER, p.TOP);
        p.textFont('BPdotsSquareVF', {
            fontVariationSettings: `wght 900`
        });
        p.textSize(titleSize);
        p.text("WEB EXPERIENCES", p.width / 2, titleY);
        // Underline decoration
        const textWidth = p.textWidth("WEB EXPERIENCES");
        p.stroke(74, 144, 230, 120); // Blue accent color for differentiation
        p.strokeWeight(1);
        p.line(p.width / 2 - textWidth / 2 - 20, titleY + titleSize + 8, p.width / 2 + textWidth / 2 + 20, titleY + titleSize + 8);
    }
    function renderPerimeterHUD() {
        const margin = mobile ? 10 : 40;
        const cornerSize = mobile ? 20 : 30;
        const alpha = 80; // Slightly more subtle than installations
        p.stroke(74, 144, 230, alpha); // Blue theme for web experiences
        p.strokeWeight(1);
        p.strokeCap(p.SQUARE);
        p.noFill();
        // Corner brackets - diamond pattern instead of L-brackets for variation
        const corners = [
            [
                margin,
                margin
            ],
            [
                p.width - margin,
                margin
            ],
            [
                p.width - margin,
                p.height - margin
            ],
            [
                margin,
                p.height - margin
            ] // bottom-left
        ];
        corners.forEach(([x, y], index)=>{
            const xDir = index === 0 || index === 3 ? 1 : -1;
            const yDir = index === 0 || index === 1 ? 1 : -1;
            // L-shaped brackets but with slightly different styling
            p.line(x, y, x + xDir * cornerSize, y);
            p.line(x, y, x, y + yDir * cornerSize);
            // Add small diagonal accent lines for variation
            const accentSize = cornerSize * 0.3;
            p.line(x + xDir * accentSize, y + yDir * accentSize, x + xDir * (accentSize + 5), y + yDir * (accentSize + 5));
        });
        // Grid pattern markers (different from installations' simple lines)
        const markerCount = mobile ? 4 : 6;
        const markerSize = mobile ? 4 : 6;
        // Top and bottom grid markers
        for(let i = 1; i < markerCount; i++){
            const x = p.lerp(margin + cornerSize, p.width - margin - cornerSize, i / markerCount);
            // Cross pattern markers
            p.line(x - markerSize / 2, margin, x + markerSize / 2, margin);
            p.line(x, margin - markerSize / 2, x, margin + markerSize / 2);
            p.line(x - markerSize / 2, p.height - margin, x + markerSize / 2, p.height - margin);
            p.line(x, p.height - margin - markerSize / 2, x, p.height - margin + markerSize / 2);
        }
        // Left and right grid markers
        for(let i = 1; i < markerCount; i++){
            const y = p.lerp(margin + cornerSize, p.height - margin - cornerSize, i / markerCount);
            // Cross pattern markers
            p.line(margin - markerSize / 2, y, margin + markerSize / 2, y);
            p.line(margin, y - markerSize / 2, margin, y + markerSize / 2);
            p.line(p.width - margin - markerSize / 2, y, p.width - margin + markerSize / 2, y);
            p.line(p.width - margin, y - markerSize / 2, p.width - margin, y + markerSize / 2);
        }
        // Status indicators with web-specific information
        p.fill(74, 144, 230, alpha * 0.8); // Blue theme
        p.noStroke();
        p.textAlign(p.LEFT, p.TOP);
        p.textSize(mobile ? 8 : 11);
        const step = mobile ? 10 : 13;
        // Web-specific status indicators
        p.text("NET: ONLINE", margin + 0.5 * cornerSize, margin + 1 * step);
        p.text("SOL: " + sols.toString(), margin + 0.5 * cornerSize, margin + 2 * step);
        p.text("PKT: " + (0, _projectDetailsJs.projects).length, margin + 0.5 * cornerSize, margin + 3 * step);
        p.text("SYN: ACTIVE", margin + 0.5 * cornerSize, margin + 4 * step);
    }
};
const webexperiencesSketch = (node, options = {})=>{
    return new p5(sketch, node);
};

},{"../../utils":"khuqI","./project-details.js":"6cZhw","./webexperiences.js":"4i6Cg","368e69cd7e27f31a":"bRtiW","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bRtiW":[function(require,module,exports,__globalThis) {
module.exports = Promise.resolve(module.bundle.root("lsjm2"));

},{"lsjm2":"lsjm2"}],"3qmjk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sketch", ()=>sketch);
parcelHelpers.export(exports, "linksSketch", ()=>linksSketch);
var _utils = require("../../utils");
var _linkDataJs = require("./link-data.js");
const sketch = function(p, options = {}) {
    const groupPath = options.group && (0, _linkDataJs.findLinkGroupPath)(options.group) || [];
    const group = groupPath.length ? groupPath[groupPath.length - 1] : null;
    const groupRoute = groupPath.map((g)=>g.id).join("/");
    const links = group ? group.links : (0, _linkDataJs.links);
    const title = group ? group.title : "MY LINKS";
    const isEmpty = links.length === 0;
    let mobile = false;
    let linkButtons = [];
    let scrollOffset = 0;
    let targetScrollOffset = 0;
    // Drag detection
    let mouseDownPos = {
        x: 0,
        y: 0
    };
    let isDragging = false;
    let dragThreshold = 5; // pixels
    let dragStartOffset = 0;
    // Layout constants
    const MARGIN = 40;
    let ROW_HEIGHT = 80; // Will be adjusted for mobile
    const ICON_SIZE = 50;
    const CORNER_SIZE = 20;
    // Mobile layout adjustments - will be calculated dynamically
    let TITLE_BUFFER, BREADCRUMB_BUFFER, SPACING_BETWEEN_ROWS;
    let emptyCard = null;
    let newsletterElement = null;
    let newsletterWidth = 400;
    let newsletterHeight = 128;
    let newsletterY = 0;
    p.setup = async function() {
        const s = (0, _utils.getViewportSize)();
        p.createCanvas(s.width, s.height);
        mobile = (0, _utils.widthCheck)(s.width);
        p.background(23);
        p.strokeCap(p.PROJECT);
        p.canvas.style.touchAction = "none";
        // Font already loaded via CSS
        p.textFont('BPdotsSquareVF', {
            fontVariationSettings: `wght 600`
        });
        setupLinkButtons();
    };
    p.draw = function() {
        p.background(23);
        // Update scroll animation
        scrollOffset = p.lerp(scrollOffset, targetScrollOffset, 0.1);
        // Render HUD decorations
        renderHUDDecorations();
        // Render link buttons
        renderLinkButtons();
        updateNewsletterPosition();
        // Update cursor
        (0, _utils.updateCursor)(p, p.mouseX, p.mouseY, ...linkButtons.map((btn)=>({
                contains: (x, y)=>btn.contains(x, y)
            })));
    };
    p.windowResized = function() {
        const s = (0, _utils.getViewportSize)();
        p.resizeCanvas(s.width, s.height);
        mobile = (0, _utils.widthCheck)(s.width);
        setupLinkButtons();
    };
    p.mousePressed = function(event) {
        if (event && event.button !== 0) return;
        // Record mouse down position for drag detection
        mouseDownPos.x = p.mouseX;
        mouseDownPos.y = p.mouseY;
        dragStartOffset = targetScrollOffset;
        isDragging = false;
    };
    p.mouseDragged = function() {
        // Check if mouse has moved beyond drag threshold
        const distance = p.dist(p.mouseX, p.mouseY, mouseDownPos.x, mouseDownPos.y);
        if (distance > dragThreshold) isDragging = true;
        if (window.helpPopupOpen || window.contactPopupOpen) return;
        const maxScroll = getMaxScroll();
        if (isDragging && maxScroll > 0) targetScrollOffset = p.constrain(dragStartOffset + (p.mouseY - mouseDownPos.y), -maxScroll, 0);
        return false;
    };
    p.mouseReleased = function(event) {
        if (event && event.button !== 0) return;
        // Only handle link click if not dragging
        if (!isDragging) handleLinkClick(p.mouseX, p.mouseY);
        // Reset drag state
        isDragging = false;
    };
    function handleLinkClick(x, y) {
        // Don't handle clicks if popups are open
        if (window.helpPopupOpen || window.contactPopupOpen) return;
        console.log('Click detected at:', x, y, 'scrollOffset:', scrollOffset);
        linkButtons.forEach((button, index)=>{
            // Account for scroll offset when checking button position
            const adjustedY = y - scrollOffset;
            const contains = button.contains(x, adjustedY);
            console.log(`Button ${index} (${button.link.title}):`, {
                buttonBounds: {
                    x: button.x,
                    y: button.y,
                    width: button.width,
                    height: button.height
                },
                clickPoint: {
                    x,
                    y: adjustedY
                },
                contains: contains
            });
            if (contains) {
                console.log('Opening link:', button.link.url);
                if (button.link.url === 'contact-popup') {
                    // Open contact popup instead of navigating
                    const contactButton = document.querySelector('.contact-button');
                    if (contactButton) contactButton.click();
                } else if (button.link.links) document.dispatchEvent(new CustomEvent('navigate-to', {
                    detail: {
                        path: `/links/${groupRoute ? groupRoute + "/" : ""}${button.link.id}`
                    }
                }));
                else // Simple direct navigation - works reliably on mobile
                window.location.href = button.link.url;
            }
        });
    }
    p.mouseWheel = function(event) {
        // Allow normal scrolling when popups are open
        if (window.helpPopupOpen || window.contactPopupOpen) return true; // Allow default browser scrolling
        // Handle scrolling for long lists (mainly for desktop)
        const maxScroll = getMaxScroll();
        // Only allow scrolling if content doesn't fit
        if (maxScroll > 0) targetScrollOffset = p.constrain(targetScrollOffset + event.delta * 0.5, -maxScroll, 0);
        return false; // Prevent default browser scrolling
    };
    function getMaxScroll() {
        const totalContentHeight = newsletterY + newsletterHeight + BREADCRUMB_BUFFER;
        return Math.max(0, totalContentHeight - p.height);
    }
    function getContentHeight() {
        if (isEmpty) return emptyCard.height;
        return links.length * ROW_HEIGHT + (links.length - 1) * SPACING_BETWEEN_ROWS;
    }
    function setupLinkButtons() {
        linkButtons = [];
        // Calculate layout values based on current mobile state
        TITLE_BUFFER = mobile ? 90 : 120;
        BREADCRUMB_BUFFER = mobile ? 80 : 60;
        SPACING_BETWEEN_ROWS = mobile ? 8 : 20;
        const buttonWidth = mobile ? p.width - MARGIN * 2 : Math.min(400, p.width - MARGIN * 2);
        const startX = (p.width - buttonWidth) / 2;
        newsletterWidth = buttonWidth;
        if (isEmpty) emptyCard = layoutEmptyCard(buttonWidth);
        // Calculate available space and adjust row height for mobile
        const itemCount = Math.max(links.length, 1);
        const availableHeight = p.height - TITLE_BUFFER - BREADCRUMB_BUFFER - SPACING_BETWEEN_ROWS - newsletterHeight;
        const totalSpacingNeeded = (itemCount - 1) * SPACING_BETWEEN_ROWS;
        const availableForRows = availableHeight - totalSpacingNeeded;
        // On mobile, adjust row height to fit all links
        if (mobile) {
            const calculatedRowHeight = Math.floor(availableForRows / itemCount);
            ROW_HEIGHT = Math.max(60, Math.min(calculatedRowHeight, 80)); // Min 60px, max 80px
        } else ROW_HEIGHT = 80; // Desktop keeps standard height
        newsletterY = TITLE_BUFFER + getContentHeight() + SPACING_BETWEEN_ROWS;
        // Sci-fi color palette
        const colors = [
            [
                255,
                100,
                130
            ],
            [
                255,
                180,
                50
            ],
            [
                255,
                255,
                100
            ],
            [
                100,
                255,
                150
            ],
            [
                50,
                255,
                255
            ],
            [
                74,
                144,
                230
            ],
            [
                180,
                100,
                255
            ],
            [
                255,
                255,
                255
            ]
        ];
        links.forEach((link, index)=>{
            const y = TITLE_BUFFER + index * (ROW_HEIGHT + SPACING_BETWEEN_ROWS);
            const color = !group && index === links.length - 1 ? [
                255,
                255,
                255
            ] : colors[index % colors.length];
            linkButtons.push(new LinkButton(p, startX, y, buttonWidth, ROW_HEIGHT, link, color));
        });
        const maxScroll = getMaxScroll();
        targetScrollOffset = p.constrain(targetScrollOffset, -maxScroll, 0);
        scrollOffset = p.constrain(scrollOffset, -maxScroll, 0);
    }
    function renderLinkButtons() {
        p.push();
        p.translate(0, scrollOffset);
        if (isEmpty) renderEmptyState();
        else linkButtons.forEach((button)=>{
            // Only render if button is visible on screen
            if (button.y + scrollOffset > -ROW_HEIGHT && button.y + scrollOffset < p.height + ROW_HEIGHT) button.render();
        });
        p.pop();
    }
    function updateNewsletterPosition() {
        if (!newsletterElement) newsletterElement = document.querySelector("newsletter-form");
        if (!newsletterElement) return;
        const width = `${newsletterWidth}px`;
        if (newsletterElement.style.width !== width) newsletterElement.style.width = width;
        const measuredHeight = newsletterElement.offsetHeight;
        if (measuredHeight && measuredHeight !== newsletterHeight) {
            newsletterHeight = measuredHeight;
            setupLinkButtons();
        }
        const x = (p.width - newsletterWidth) / 2;
        const y = newsletterY + scrollOffset;
        newsletterElement.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        newsletterElement.style.visibility = y + newsletterHeight > 0 && y < p.height ? "visible" : "hidden";
    }
    function layoutEmptyCard(width) {
        const padding = 15;
        const height = 80;
        const iconSize = Math.min(50, height - 20);
        const titleX = padding + iconSize + 15;
        const titleMaxWidth = width - titleX - padding;
        p.push();
        p.textFont('BPdotsSquareVF', {
            fontVariationSettings: 'wght 900'
        });
        let titleSize = 18;
        p.textSize(titleSize);
        while(titleSize > 13 && p.textWidth("NO UPCOMING WORKSHOPS") > titleMaxWidth){
            titleSize -= 1;
            p.textSize(titleSize);
        }
        p.pop();
        return {
            padding,
            iconSize,
            titleX,
            titleSize,
            height
        };
    }
    function renderEmptyState() {
        const { padding, iconSize, titleX, titleSize, height } = emptyCard;
        const width = newsletterWidth;
        const x = (p.width - width) / 2;
        const y = TITLE_BUFFER;
        p.push();
        p.drawingContext.setLineDash([
            6,
            6
        ]);
        p.stroke(74, 144, 230, 75);
        p.strokeWeight(1);
        p.fill(23, 23, 23, 40);
        p.rect(x, y, width, height);
        p.drawingContext.setLineDash([]);
        const iconX = x + padding;
        const iconY = y + (height - iconSize) / 2;
        const bracketSize = 8;
        p.stroke(74, 144, 230, 80);
        p.strokeWeight(1);
        p.fill(23, 23, 23, 30);
        p.rect(iconX, iconY, iconSize, iconSize);
        p.stroke(74, 144, 230, 96);
        p.strokeWeight(2);
        p.noFill();
        p.line(iconX, iconY, iconX + bracketSize, iconY);
        p.line(iconX, iconY, iconX, iconY + bracketSize);
        p.line(iconX + iconSize, iconY, iconX + iconSize - bracketSize, iconY);
        p.line(iconX + iconSize, iconY, iconX + iconSize, iconY + bracketSize);
        p.line(iconX, iconY + iconSize, iconX + bracketSize, iconY + iconSize);
        p.line(iconX, iconY + iconSize, iconX, iconY + iconSize - bracketSize);
        p.line(iconX + iconSize, iconY + iconSize, iconX + iconSize - bracketSize, iconY + iconSize);
        p.line(iconX + iconSize, iconY + iconSize, iconX + iconSize, iconY + iconSize - bracketSize);
        p.fill(74, 144, 230, 120);
        p.noStroke();
        p.textAlign(p.CENTER, p.CENTER);
        p.textFont('BPdotsSquareVF', {
            fontVariationSettings: 'wght 600'
        });
        p.textSize(Math.min(12, iconSize * 0.25));
        p.text("WKSP", iconX + iconSize / 2 + 1, iconY + iconSize / 2);
        const titleY = y + height / 2 - 8;
        p.textAlign(p.LEFT, p.CENTER);
        p.textFont('BPdotsSquareVF', {
            fontVariationSettings: 'wght 900'
        });
        p.fill(255, 225);
        p.textSize(titleSize);
        p.text("NO UPCOMING WORKSHOPS", x + titleX, titleY);
        const blink = Math.floor(p.millis() / 500) % 2 === 0;
        p.fill(74, 144, 230, 200);
        p.textSize(13);
        p.text("BETWEEN EXPERIMENTS" + (blink ? " _" : ""), x + titleX, titleY + 18);
        p.pop();
    }
    function renderHUDDecorations() {
        p.push();
        // Title
        renderTitle();
        // Perimeter HUD
        renderPerimeterHUD();
        p.pop();
    }
    function renderTitle() {
        const titleY = mobile ? 20 : 40;
        const titleSize = mobile ? 24 : 36;
        p.fill(255, 200);
        p.noStroke();
        p.textAlign(p.CENTER, p.TOP);
        p.textFont('BPdotsSquareVF', {
            fontVariationSettings: `wght 900`
        });
        p.textSize(titleSize);
        p.text(title, p.width / 2, titleY);
        // Underline decoration
        const textWidth = p.textWidth(title);
        p.stroke(74, 144, 230, 120);
        p.strokeWeight(1);
        p.line(p.width / 2 - textWidth / 2 - 20, titleY + titleSize + 8, p.width / 2 + textWidth / 2 + 20, titleY + titleSize + 8);
    }
    function renderPerimeterHUD() {
        const margin = mobile ? 15 : 30;
        const cornerSize = mobile ? 15 : 25;
        const alpha = 60;
        p.stroke(74, 144, 230, alpha);
        p.strokeWeight(1);
        p.strokeCap(p.SQUARE);
        p.noFill();
        // Corner brackets
        const corners = [
            [
                margin,
                margin
            ],
            [
                p.width - margin,
                margin
            ],
            [
                p.width - margin,
                p.height - margin
            ],
            [
                margin,
                p.height - margin
            ] // bottom-left
        ];
        corners.forEach(([x, y], index)=>{
            const xDir = index === 0 || index === 3 ? 1 : -1;
            const yDir = index === 0 || index === 1 ? 1 : -1;
            // L-shaped brackets
            p.line(x, y, x + xDir * cornerSize, y);
            p.line(x, y, x, y + yDir * cornerSize);
        });
        // Status indicators
        p.fill(74, 144, 230, alpha * 0.8);
        p.noStroke();
        p.textAlign(p.LEFT, p.TOP);
        p.textSize(mobile ? 8 : 10);
        const step = mobile ? 12 : 15;
        p.text("SYS: ONLINE", margin + cornerSize * 0.5, margin + step);
        p.text("CONN: " + (isEmpty ? "STANDBY" : links.length), margin + cornerSize * 0.5, margin + step * 2);
        p.text("PROTO: HTTPS", margin + cornerSize * 0.5, margin + step * 3);
        if (group) p.text("DIR: /" + groupRoute.toUpperCase(), margin + cornerSize * 0.5, margin + step * 4);
    }
};
class LinkButton {
    constructor(p, x, y, width, height, link, color = [
        74,
        144,
        230
    ]){
        this.p5 = p;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.link = link;
        this.color = color;
        this.hoverAlpha = 0;
        this.targetHoverAlpha = 0;
    }
    contains(mouseX, mouseY) {
        return mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height;
    }
    scrollingText(txt, x, y, maxWidth) {
        const w = this.p5.textWidth(txt);
        if (w <= maxWidth) {
            this.p5.text(txt, x, y);
            return;
        }
        const overflow = w - maxWidth;
        const travel = overflow / 28 * 1000;
        const pause = 1200;
        const cycle = travel * 2 + pause * 2;
        const t = this.p5.millis() % cycle;
        let offset;
        if (t < pause) offset = 0;
        else if (t < pause + travel) offset = -overflow * ((t - pause) / travel);
        else if (t < pause * 2 + travel) offset = -overflow;
        else offset = -overflow * (1 - (t - pause * 2 - travel) / travel);
        const ctx = this.p5.drawingContext;
        const half = (this.p5.textAscent() + this.p5.textDescent()) / 2 + 2;
        ctx.save();
        ctx.beginPath();
        ctx.rect(x, y - half, maxWidth, half * 2);
        ctx.clip();
        this.p5.text(txt, x + offset, y);
        ctx.restore();
    }
    render() {
        const isHovered = this.contains(this.p5.mouseX, this.p5.mouseY);
        this.targetHoverAlpha = isHovered ? 1 : 0;
        this.hoverAlpha = this.p5.lerp(this.hoverAlpha, this.targetHoverAlpha, 0.1);
        const alpha = 80 + this.hoverAlpha * 100;
        const glowAlpha = this.hoverAlpha * 40;
        this.p5.push();
        // Main container
        this.p5.stroke(this.color[0], this.color[1], this.color[2], alpha);
        this.p5.strokeWeight(1);
        this.p5.fill(23, 23, 23, 50 + glowAlpha);
        this.p5.rect(this.x, this.y, this.width, this.height);
        // Icon container (left side) - adjust size based on row height
        const iconSize = Math.min(50, this.height - 20); // Responsive icon size
        const iconX = this.x + 15;
        const iconY = this.y + (this.height - iconSize) / 2;
        // Icon border
        this.p5.stroke(this.color[0], this.color[1], this.color[2], alpha);
        this.p5.fill(23, 23, 23, 30 + glowAlpha);
        this.p5.rect(iconX, iconY, iconSize, iconSize);
        // Corner brackets on icon
        const bracketSize = 8;
        this.p5.stroke(this.color[0], this.color[1], this.color[2], alpha * 1.2);
        this.p5.strokeWeight(2);
        this.p5.noFill();
        // Top-left bracket
        this.p5.line(iconX, iconY, iconX + bracketSize, iconY);
        this.p5.line(iconX, iconY, iconX, iconY + bracketSize);
        // Top-right bracket
        this.p5.line(iconX + iconSize, iconY, iconX + iconSize - bracketSize, iconY);
        this.p5.line(iconX + iconSize, iconY, iconX + iconSize, iconY + bracketSize);
        // Bottom-left bracket
        this.p5.line(iconX, iconY + iconSize, iconX + bracketSize, iconY + iconSize);
        this.p5.line(iconX, iconY + iconSize, iconX, iconY + iconSize - bracketSize);
        // Bottom-right bracket
        this.p5.line(iconX + iconSize, iconY + iconSize, iconX + iconSize - bracketSize, iconY + iconSize);
        this.p5.line(iconX + iconSize, iconY + iconSize, iconX + iconSize, iconY + iconSize - bracketSize);
        // Icon text (placeholder) - adjust size for smaller icons
        this.p5.fill(this.color[0], this.color[1], this.color[2], alpha * 1.5);
        this.p5.noStroke();
        this.p5.textAlign(this.p5.CENTER, this.p5.CENTER);
        this.p5.textSize(Math.min(12, iconSize * 0.25));
        this.p5.text(this.link.icon, iconX + iconSize / 2 + 1, iconY + iconSize / 2);
        // Title text - adjust for smaller row heights
        const textX = iconX + iconSize + 15;
        const isGroup = !!this.link.links;
        const textMaxWidth = this.x + this.width - textX - (isGroup ? 45 : 15);
        const isMobileCompact = this.height < 50;
        if (isMobileCompact) {
            // Single line layout for very compact rows
            const titleY = this.y + this.height / 2;
            this.p5.fill(255, alpha * 2);
            this.p5.textAlign(this.p5.LEFT, this.p5.CENTER);
            this.p5.textFont('BPdotsSquareVF', {
                fontVariationSettings: 'wght 900'
            });
            this.p5.textSize(16);
            this.scrollingText(this.link.title, textX, titleY, textMaxWidth);
        } else {
            // Two line layout for normal rows
            const titleY = this.y + this.height / 2 - 8;
            this.p5.fill(255, alpha * 2);
            this.p5.textAlign(this.p5.LEFT, this.p5.CENTER);
            this.p5.textFont('BPdotsSquareVF', {
                fontVariationSettings: 'wght 900'
            });
            this.p5.textSize(18);
            this.scrollingText(this.link.title, textX, titleY, textMaxWidth);
            // Description text
            this.p5.fill(150, alpha * 1.5);
            this.p5.textFont('BPdotsSquareVF', {
                fontVariationSettings: 'wght 900'
            });
            this.p5.textSize(13);
            this.scrollingText(this.link.description, textX, titleY + 18, textMaxWidth);
        }
        if (isGroup) {
            const chevronSize = 6;
            const nudge = this.hoverAlpha * 4;
            const chevronX = this.x + this.width - 25 + nudge;
            const chevronY = this.y + this.height / 2;
            this.p5.stroke(this.color[0], this.color[1], this.color[2], alpha * 1.5);
            this.p5.strokeWeight(2);
            this.p5.noFill();
            this.p5.line(chevronX - chevronSize, chevronY - chevronSize, chevronX, chevronY);
            this.p5.line(chevronX, chevronY, chevronX - chevronSize, chevronY + chevronSize);
        }
        // Hover scan line effect
        if (this.hoverAlpha > 0.1) {
            this.p5.stroke(74, 144, 230, this.hoverAlpha * 60);
            this.p5.strokeWeight(1);
            const scanY = this.y + this.p5.millis() * 0.1 % this.height;
            this.p5.line(this.x, scanY, this.x + this.width, scanY);
        }
        // Status dots when hovered
        if (this.hoverAlpha > 0.2) {
            this.p5.fill(74, 144, 230, this.hoverAlpha * 150);
            this.p5.noStroke();
            const dotSize = 3;
            const dotX = this.x + this.width - 30;
            const dotY = this.y + 15;
            for(let i = 0; i < 3; i++)this.p5.circle(dotX + i * 8, dotY, dotSize);
        }
        this.p5.pop();
    }
}
const linksSketch = (node, options = {})=>{
    return new p5((p)=>sketch(p, options), node);
};

},{"../../utils":"khuqI","./link-data.js":"kRkpX","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bPWCF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sketch", ()=>sketch);
parcelHelpers.export(exports, "installationsSketch", ()=>installationsSketch);
var _utils = require("../../utils");
var _projectDetails = require("./project-details");
const sketch = function(p, options = {}) {
    let short = 128;
    let smoothX = 0;
    let smoothY = 0;
    let smoothV = p.createVector(smoothX, smoothY);
    let mobile = false;
    let planetButtons = [];
    let activeInfoCard = null;
    let infoCardAlpha = 0;
    let infoCardAnimationStart = 0;
    let infoCardAnimating = false;
    let targetAlpha = 0;
    let galleryScrollX = 0;
    let targetGalleryScrollX = 0;
    let galleryDragging = false;
    let galleryDragStartX = 0;
    let galleryStartScrollX = 0;
    let currentGalleryY = 0;
    let currentGalleryHeight = 0;
    let loadedMedia = new Map();
    let expandedMediaIndex = null;
    let expandedMediaAlpha = 0;
    let expandedMediaAnimating = false;
    let expandedMediaAnimationStart = 0;
    let targetExpandedAlpha = 0;
    let nativeVideoElement = null;
    let pendingProjectSlug = null;
    let layoutInitialized = false;
    let frameCount = 0;
    let currentPath = null;
    // Interface data
    let sols = 0;
    // Mobile sequential preview variables
    let currentPreviewIndex = 0;
    let previewStartTime = 0;
    let previewDuration = 2000; // 2 seconds per preview
    // Text calculation cache for performance
    let textCache = new Map();
    // Media loading tracking to prevent duplicates
    let mediaBeingLoaded = new Set();
    // Resize throttling
    let resizeTimeout = null;
    let hashChangeHandler = null;
    // Add cleanup method to be called when sketch is destroyed
    p.cleanupSketch = function() {
        // Clean up native video element
        if (nativeVideoElement) {
            nativeVideoElement.pause();
            nativeVideoElement.removeAttribute('src');
            nativeVideoElement.blur();
            nativeVideoElement.remove();
            nativeVideoElement = null;
        }
        // Exit fullscreen if active
        if (document.fullscreenElement) document.exitFullscreen().catch(()=>{});
        // Clean up any loaded video elements
        loadedMedia.forEach((mediaData, path)=>{
            if (mediaData.type === 'video' && mediaData.element) {
                if (mediaData.element.pause) mediaData.element.pause();
                if (mediaData.element.remove) mediaData.element.remove();
            }
        });
        loadedMedia.clear();
        // Reset state
        activeInfoCard = null;
        expandedMediaIndex = null;
        infoCardAlpha = 0;
        expandedMediaAlpha = 0;
        // Restore original theme color in case cleanup happens while infoCard is open
        const themeColorMeta = document.querySelector('meta[name="theme-color"]');
        if (themeColorMeta) themeColorMeta.content = '#171717';
        // Re-enable browser swipe navigation
        document.body.style.overscrollBehavior = '';
        document.body.style.touchAction = '';
        // Remove hash change listener
        if (hashChangeHandler) {
            window.removeEventListener('hashchange', hashChangeHandler);
            hashChangeHandler = null;
        }
    // Don't clear session storage here - let setup function handle it for back navigation detection
    };
    // Helper functions for layout calculations
    function getCardDimensions() {
        const isMobile = (0, _utils.widthCheck)(p.width);
        const cardWidth = isMobile ? p.width * 0.95 : p.width * 0.82;
        const cardHeight = isMobile ? p.height * 0.88 : p.height * 0.82; // Increased mobile height to 0.88 (was 0.75)
        const cardX = (p.width - cardWidth) / 2;
        // Move mobile card much higher up since breadcrumb is now hidden, keep desktop unchanged
        const cardY = isMobile ? (p.height - cardHeight) / 2 - 40 : (p.height - cardHeight) / 2 - 20;
        return {
            width: cardWidth,
            height: cardHeight,
            x: cardX,
            y: cardY,
            isMobile
        };
    }
    function getGalleryLayout(cardWidth, cardHeight, cardX, cardY, isMobile) {
        const padding = isMobile ? 20 : 24;
        const lineHeight = isMobile ? 28 : 32;
        const galleryY = cardY + padding + lineHeight * 5.3;
        const galleryHeight = cardHeight * 0.35; // Slightly smaller to leave more room for text
        return {
            galleryY,
            galleryHeight,
            padding,
            lineHeight
        };
    }
    function getGalleryItemDimensions(galleryHeight, isMobile) {
        const galleryPadding = isMobile ? 8 : 10;
        const itemHeight = galleryHeight - 2 * galleryPadding;
        const itemWidth = itemHeight * 1.5; // 3:2 aspect ratio
        return {
            itemWidth,
            itemHeight,
            galleryPadding
        };
    }
    function renderCloseButton(x, y, size, alpha) {
        const padding = size * 0.25;
        // Close button background
        p.fill(50, 50, 50, 200 * (alpha / 255));
        p.stroke(200, alpha);
        p.strokeWeight(1);
        p.rect(x, y, size, size);
        // X symbol
        p.stroke(200, alpha);
        p.strokeWeight(2);
        p.line(x + padding, y + padding, x + size - padding, y + size - padding);
        p.line(x + size - padding, y + padding, x + padding, y + size - padding);
    }
    function renderPlayIcon(x, y, size, alpha) {
        // Semi-transparent play button background
        p.fill(0, 0, 0, 120 * (alpha / 255));
        p.noStroke();
        p.circle(x + size / 2, y + size / 2, size);
        // Play triangle
        p.fill(255, 255, 255, 180 * (alpha / 255));
        const triangleSize = size * 0.35;
        const triangleCenterX = x + size / 2 + triangleSize * 0.1;
        const triangleCenterY = y + size / 2;
        p.triangle(triangleCenterX - triangleSize / 2, triangleCenterY - triangleSize / 2, triangleCenterX - triangleSize / 2, triangleCenterY + triangleSize / 2, triangleCenterX + triangleSize / 2, triangleCenterY);
    }
    function initializeLayout() {
        const s = (0, _utils.getViewportSize)();
        short = p.min(s.width, s.height);
        mobile = (0, _utils.widthCheck)(s.width);
        setupRadialLayout();
        layoutInitialized = true;
        // Reset mobile preview timing when layout changes
        if (mobile) {
            previewStartTime = 0;
            currentPreviewIndex = 0;
        }
    }
    p.setup = async function setup() {
        p.noCanvas();
        p.pixelDensity(1);
        const s = (0, _utils.getViewportSize)();
        p.createCanvas(s.width, s.height);
        initializeLayout();
        p.background(23);
        p.textAlign(p.CENTER, p.CENTER);
        p.strokeCap(p.PROJECT);
        // Fonts already loaded via CSS
        p.textFont('BPdotsSquareVF', {
            fontVariationSettings: `wght 900`
        });
        // p5 in instance mode doesn't seem to work well with elements in a shadow root and doesn't remove the "p5_loading" div by itself
        let bg = document.getElementById("bg");
        let loading_div = bg.shadowRoot.getElementById("p5_loading");
        if (loading_div) loading_div.remove();
        // Handle direct project navigation via URL parameter
        if (options && options.project) {
            pendingProjectSlug = options.project;
            currentPath = `/interactive/live/${options.project}`;
            // Store that we have an active project
            sessionStorage.setItem('installationsActiveProject', options.project);
        } else {
            currentPath = '/interactive/live';
            // Check if we had an active project before and now we don't
            const wasActiveProject = sessionStorage.getItem('installationsActiveProject');
            if (wasActiveProject) {
                // We navigated back from a project to main page - clear the storage
                sessionStorage.removeItem('installationsActiveProject');
                // Ensure no project opens automatically on back navigation
                pendingProjectSlug = null;
                // Initialize with info card closed
                activeInfoCard = null;
                infoCardAlpha = 0;
                targetAlpha = 0;
                infoCardAnimating = false;
            }
        }
        // Add hash change listener to detect back navigation within the same route
        hashChangeHandler = function(event) {
            const newHash = window.location.hash.substr(1);
            const cleanPath = newHash && newHash !== '' ? newHash.startsWith('/') ? newHash : '/' + newHash : '/';
            // If we're on the installations page and URL changed to just /interactive/live
            // and we have an active info card, close it
            if (cleanPath === '/interactive/live' && activeInfoCard !== null) closeInfoCard();
        };
        // Calculate days since project start
        sols = (0, _utils.daysSince)('2024-08-14');
        window.addEventListener('hashchange', hashChangeHandler);
        smoothX = p.width / 2;
        smoothY = p.height * 0.94;
        p.mouseX = smoothX;
        p.mouseY = smoothY;
    };
    p.draw = function draw() {
        p.background(23);
        // Handle smooth cursor movement - mobile vs desktop
        if (mobile && planetButtons && planetButtons.length > 0) {
            // Mobile: Sequential preview of each planet button
            // Initialize preview start time on first frame
            if (previewStartTime === 0) previewStartTime = p.millis();
            // Calculate which planet should be previewed based on elapsed time
            const elapsedTime = p.millis() - previewStartTime;
            const cyclePosition = elapsedTime / previewDuration % planetButtons.length;
            const targetIndex = Math.floor(cyclePosition);
            if (targetIndex !== currentPreviewIndex && targetIndex < planetButtons.length) currentPreviewIndex = targetIndex;
            // Smoothly move to the current preview planet position
            const targetPlanet = planetButtons[currentPreviewIndex];
            if (targetPlanet) {
                smoothX = p.constrain((0, _utils.smoothFollow)(targetPlanet.p.x, smoothX, 0.005 * p.deltaTime), 0, p.width);
                smoothY = p.constrain((0, _utils.smoothFollow)(targetPlanet.p.y, smoothY, 0.005 * p.deltaTime), 0, p.height);
            }
        } else {
            // Desktop: Follow mouse cursor
            smoothX = (0, _utils.smoothFollow)(p.mouseX, smoothX, 0.003 * p.deltaTime);
            smoothY = (0, _utils.smoothFollow)(p.mouseY, smoothY, 0.003 * p.deltaTime);
        }
        smoothV.x = smoothX;
        smoothV.y = smoothY;
        p.noFill();
        p.stroke(230);
        p.strokeWeight(1);
        renderRadialLayout();
        renderHUDDecorations();
        // Handle pending project opening after layout is initialized
        if (pendingProjectSlug && layoutInitialized && planetButtons && planetButtons.length > 0) {
            const projectIndex = (0, _projectDetails.getProjectIndexBySlug)(pendingProjectSlug);
            if (projectIndex !== -1 && projectIndex < planetButtons.length) {
                openInfoCard(projectIndex);
                pendingProjectSlug = null; // Clear the pending slug
            } else // If project not found, clear the pending slug to avoid infinite attempts
            pendingProjectSlug = null;
        }
        p.noFill();
        p.stroke(230, 50);
        const s = short * 0.03;
        p.push();
        p.translate(smoothX, smoothY);
        p.rotate(p.TWO_PI * p.noise(smoothX / short, smoothY / short, 0.0001 * p.millis()));
        p.circle(0, 0, 0.33 * s);
        p.triangle(s, 0, s * p.cos(p.TWO_PI / 3), s * p.sin(p.TWO_PI / 3), s * p.cos(2 * p.TWO_PI / 3), s * p.sin(2 * p.TWO_PI / 3));
        p.pop();
        // Update info card animation
        if (infoCardAnimating) {
            const elapsed = p.millis() - infoCardAnimationStart;
            const progress = p.constrain(elapsed / 300, 0, 1);
            infoCardAlpha = p.lerp(infoCardAlpha, targetAlpha, progress);
            if (progress >= 1) {
                infoCardAnimating = false;
                infoCardAlpha = targetAlpha;
                if (targetAlpha === 0) activeInfoCard = null;
            }
        }
        // Update gallery scrolling
        if (!galleryDragging) galleryScrollX = p.lerp(galleryScrollX, targetGalleryScrollX, 0.1);
        // Update expanded media animation
        if (expandedMediaAnimating) {
            const elapsed = p.millis() - expandedMediaAnimationStart;
            const progress = p.constrain(elapsed / 300, 0, 1);
            expandedMediaAlpha = p.lerp(expandedMediaAlpha, targetExpandedAlpha, progress);
            if (progress >= 1) {
                expandedMediaAnimating = false;
                expandedMediaAlpha = targetExpandedAlpha;
                if (targetExpandedAlpha === 0) {
                    expandedMediaIndex = null;
                    // Clean up any orphaned video element
                    if (nativeVideoElement) {
                        nativeVideoElement.pause();
                        nativeVideoElement.removeAttribute('src');
                        nativeVideoElement.remove();
                        nativeVideoElement = null;
                    }
                }
            }
        }
        // Update cursor based on hover state
        // Don't include planet buttons when info card is active
        const hoverTargets = activeInfoCard !== null ? [
            getCloseButtonHoverCheck(),
            getNavigationButtonHoverCheck()
        ] : [
            ...planetButtons,
            getTextAreasHoverCheck(),
            getCloseButtonHoverCheck()
        ];
        (0, _utils.updateCursor)(p, p.mouseX, p.mouseY, ...hoverTargets);
        // Render active info card
        if (activeInfoCard !== null || infoCardAlpha > 0) renderInfoCard((0, _projectDetails.projects)[activeInfoCard]);
        // Render expanded media overlay
        if (expandedMediaIndex !== null || expandedMediaAlpha > 0) renderExpandedMedia();
    };
    p.windowResized = function windowResized() {
        // Throttle resize events to prevent performance issues during orientation changes
        if (resizeTimeout) clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(()=>{
            const s = (0, _utils.getViewportSize)();
            p.resizeCanvas(s.width, s.height);
            initializeLayout();
            resizeTimeout = null;
        }, 150); // Wait 150ms after resize stops
    };
    p.mousePressed = function(event) {
        if (event && event.button !== 0) return;
        // Block all interactions if help popup is open
        if (window.helpPopupOpen || window.contactPopupOpen) return;
        const ANIMATION_DELAY = 500;
        // Check if clicking on expanded media overlay
        if (expandedMediaIndex !== null) {
            const project = (0, _projectDetails.projects)[activeInfoCard];
            const mediaItem = project.images[expandedMediaIndex];
            let pathString;
            if (typeof mediaItem === 'string') pathString = mediaItem;
            else if (mediaItem && typeof mediaItem === 'object') pathString = mediaItem.default || mediaItem.src || mediaItem.href || mediaItem.toString();
            else pathString = String(mediaItem);
            const isVideo = pathString.toLowerCase().match(/\.(mp4|mov|webm|avi)(\?.*)?$/i);
            const isMobile = (0, _utils.widthCheck)(p.width);
            const maxWidth = isMobile ? p.width : p.width * 0.8;
            const maxHeight = isMobile ? p.height * 0.8 : p.height * 0.8;
            let mediaWidth, mediaHeight;
            if (isVideo) {
                // For native videos, use standard dimensions
                const aspectRatio = nativeVideoElement && nativeVideoElement.videoWidth && nativeVideoElement.videoHeight ? nativeVideoElement.videoWidth / nativeVideoElement.videoHeight : 16 / 9;
                if (aspectRatio > maxWidth / maxHeight) {
                    mediaWidth = maxWidth;
                    mediaHeight = maxWidth / aspectRatio;
                } else {
                    mediaHeight = maxHeight;
                    mediaWidth = maxHeight * aspectRatio;
                }
            } else {
                // For images, get from loaded media
                const mediaData = loadedMedia.get(pathString);
                if (mediaData && mediaData.loaded) {
                    const img = mediaData.element;
                    const aspectRatio = img.width / img.height;
                    if (aspectRatio > maxWidth / maxHeight) {
                        mediaWidth = maxWidth;
                        mediaHeight = maxWidth / aspectRatio;
                    } else {
                        mediaHeight = maxHeight;
                        mediaWidth = maxHeight * aspectRatio;
                    }
                } else return; // Image not ready
            }
            const mediaX = (p.width - mediaWidth) / 2;
            const mediaY = (p.height - mediaHeight) / 2;
            // Check close button (now centered below media)
            const closeSize = isMobile ? 50 : 40;
            const closePadding = isMobile ? 20 : 15;
            const closeX = (p.width - closeSize) / 2; // Center horizontally
            const closeY = mediaY + mediaHeight + closePadding;
            if (p.mouseX >= closeX && p.mouseX <= closeX + closeSize && p.mouseY >= closeY && p.mouseY <= closeY + closeSize) {
                closeExpandedMedia();
                return;
            }
            // Native video players handle their own controls
            // Click outside media and close button area closes it
            const totalHeight = mediaHeight + closePadding + closeSize;
            if (p.mouseX < mediaX || p.mouseX > mediaX + mediaWidth || p.mouseY < mediaY || p.mouseY > mediaY + totalHeight) {
                closeExpandedMedia();
                return;
            }
            return;
        }
        // Check if clicking on info card or close button
        if (activeInfoCard !== null) {
            const { width: cardWidth, height: cardHeight, x: cardX, y: cardY, isMobile } = getCardDimensions();
            const closeButtonSize = isMobile ? 44 : 30;
            const closeButtonX = cardX + cardWidth - closeButtonSize - 10;
            const closeButtonY = cardY + 10;
            // Check if clicking close button
            if (p.mouseX >= closeButtonX && p.mouseX <= closeButtonX + closeButtonSize && p.mouseY >= closeButtonY && p.mouseY <= closeButtonY + closeButtonSize) {
                closeInfoCard();
                return;
            }
            // Check if clicking navigation arrows
            if ((0, _projectDetails.projects).length > 1) {
                const arrowSize = 35; // Match updated arrow size
                const arrowSpacing = 80; // Match updated arrow spacing
                const arrowY = cardY + cardHeight + (isMobile ? 20 : 15);
                // Use new arrow positioning logic (same as in renderNavigationArrows)
                const centerX = cardX + cardWidth / 2;
                const leftArrowX = centerX - arrowSpacing - arrowSize / 2;
                const rightArrowX = centerX + arrowSpacing - arrowSize / 2;
                // Check left arrow (previous with wraparound)
                if (p.mouseX >= leftArrowX && p.mouseX <= leftArrowX + arrowSize && p.mouseY >= arrowY && p.mouseY <= arrowY + arrowSize) {
                    const prevIndex = activeInfoCard === 0 ? (0, _projectDetails.projects).length - 1 : activeInfoCard - 1;
                    navigateToProject(prevIndex);
                    return;
                }
                // Check right arrow (next with wraparound)
                if (p.mouseX >= rightArrowX && p.mouseX <= rightArrowX + arrowSize && p.mouseY >= arrowY && p.mouseY <= arrowY + arrowSize) {
                    const nextIndex = activeInfoCard === (0, _projectDetails.projects).length - 1 ? 0 : activeInfoCard + 1;
                    navigateToProject(nextIndex);
                    return;
                }
            }
            // Check if clicking in gallery area
            const project = (0, _projectDetails.projects)[activeInfoCard];
            if (project.images && project.images.length > 0) {
                const padding = isMobile ? 20 : 24;
                if (p.mouseX >= cardX + padding && p.mouseX <= cardX + cardWidth - padding && p.mouseY >= currentGalleryY && p.mouseY <= currentGalleryY + currentGalleryHeight) {
                    // Start gallery dragging
                    galleryDragging = true;
                    galleryDragStartX = p.mouseX;
                    galleryStartScrollX = galleryScrollX;
                    return;
                }
            }
            // Check if clicking outside the card
            if (p.mouseX < cardX || p.mouseX > cardX + cardWidth || p.mouseY < cardY || p.mouseY > cardY + cardHeight) {
                closeInfoCard();
                return;
            }
            // If clicking inside the card (but not close button), do nothing
            return;
        }
        // Check planet buttons and their text areas
        planetButtons.forEach((planetButton, index)=>{
            const project = (0, _projectDetails.projects)[index];
            const planetClicked = planetButton.contains(p.mouseX, p.mouseY);
            const textClicked = isHoveringText(planetButton, p.mouseX, p.mouseY, project.name);
            if (planetClicked || textClicked) {
                openInfoCard(index);
                // Update URL to include project slug
                if (project && project.slug && window.appRouter) {
                    const newPath = `/interactive/live/${project.slug}`;
                    // Only update if the current path is different
                    if (window.location.hash !== `#${newPath}`) {
                        window.history.pushState(null, '', `#${newPath}`);
                        currentPath = newPath;
                    }
                }
                return;
            }
        });
    };
    p.mouseDragged = function() {
        if (galleryDragging && activeInfoCard !== null) {
            const dragDistance = p.mouseX - galleryDragStartX;
            galleryScrollX = galleryStartScrollX + dragDistance;
            targetGalleryScrollX = galleryScrollX;
        }
    };
    p.mouseReleased = function() {
        // Block all interactions if help popup is open
        if (window.helpPopupOpen || window.contactPopupOpen) return;
        if (galleryDragging) {
            const dragDistance = Math.abs(p.mouseX - galleryDragStartX);
            galleryDragging = false;
            // If minimal drag (< 5 pixels), treat as a click for media expansion
            if (dragDistance < 5 && activeInfoCard !== null) {
                const project = (0, _projectDetails.projects)[activeInfoCard];
                if (project && project.images && project.images.length > 0) {
                    const { width: cardWidth, x: cardX, isMobile } = getCardDimensions();
                    const padding = isMobile ? 20 : 24;
                    // Use stored gallery position from rendering
                    const galleryAreaPadding = isMobile ? 8 : 10;
                    const itemHeight = currentGalleryHeight - 2 * galleryAreaPadding;
                    const itemWidth = itemHeight * 1.5; // 3:2 aspect ratio
                    const galleryX = cardX + padding;
                    const startX = galleryX + galleryAreaPadding;
                    const startY = currentGalleryY + galleryAreaPadding;
                    // Check if clicking on a specific media item
                    for(let i = 0; i < project.images.length; i++){
                        const itemX = startX + i * (itemWidth + galleryAreaPadding) + galleryScrollX;
                        if (p.mouseX >= itemX && p.mouseX <= itemX + itemWidth && p.mouseY >= startY && p.mouseY <= startY + itemHeight) {
                            openExpandedMedia(i);
                            return;
                        }
                    }
                }
            }
            // Apply momentum/easing to final scroll position
            const project = (0, _projectDetails.projects)[activeInfoCard];
            if (project && project.images && project.images.length > 0) {
                const { width: cardWidth, height: cardHeight } = getCardDimensions();
                const isMobile = (0, _utils.widthCheck)(p.width);
                const padding = isMobile ? 20 : 24;
                const galleryWidth = cardWidth - 2 * padding;
                // Use EXACT same galleryHeight as main rendering
                const galleryHeight = isMobile ? cardHeight * 0.3 : cardHeight * 0.4;
                // Use same calculations as rendering and click detection
                const galleryAreaPadding = isMobile ? 8 : 10;
                const itemHeight = galleryHeight - 2 * galleryAreaPadding;
                const itemWidth = itemHeight * 1.5; // 3:2 aspect ratio
                const totalWidth = project.images.length * (itemWidth + galleryAreaPadding) - galleryAreaPadding;
                const maxScroll = p.max(0, totalWidth);
                targetGalleryScrollX = p.constrain(targetGalleryScrollX, -maxScroll, 0);
            }
        }
    };
    p.mouseWheel = function(event) {
        // Allow normal scrolling when popups are open
        if (window.helpPopupOpen || window.contactPopupOpen) return true; // Allow default browser scrolling
        if (activeInfoCard !== null) {
            const project = (0, _projectDetails.projects)[activeInfoCard];
            if (project && project.images && project.images.length > 0) {
                // Check if mouse is over gallery area
                const { width: cardWidth, height: cardHeight, x: cardX, y: cardY, isMobile } = getCardDimensions();
                const { galleryY, padding, lineHeight } = getGalleryLayout(cardWidth, cardHeight, cardX, cardY, isMobile);
                // Use EXACT same galleryHeight as main rendering
                const galleryHeight = isMobile ? cardHeight * 0.3 : cardHeight * 0.4;
                if (p.mouseX >= cardX + padding && p.mouseX <= cardX + cardWidth - padding && p.mouseY >= galleryY && p.mouseY <= galleryY + galleryHeight) {
                    const scrollAmount = event.delta * 2;
                    targetGalleryScrollX -= scrollAmount;
                    // Constrain scroll bounds using same calculations as rendering
                    const galleryAreaPadding = isMobile ? 8 : 10;
                    const itemHeight = galleryHeight - 2 * galleryAreaPadding;
                    const itemWidth = itemHeight * 1.5; // 3:2 aspect ratio
                    const totalWidth = project.images.length * (itemWidth + galleryAreaPadding) - galleryAreaPadding;
                    const maxScroll = p.max(0, totalWidth);
                    targetGalleryScrollX = p.constrain(targetGalleryScrollX, -maxScroll, 0);
                    return false; // Prevent page scroll
                }
            }
        }
    };
    function openInfoCard(index) {
        activeInfoCard = index;
        targetAlpha = 255;
        infoCardAnimationStart = p.millis();
        infoCardAnimating = true;
        galleryScrollX = 0;
        targetGalleryScrollX = 0;
        galleryDragging = false;
        loadMediaForProject((0, _projectDetails.projects)[index]);
        // Disable browser swipe navigation while info card is open
        document.body.style.overscrollBehavior = 'none';
        document.body.style.touchAction = 'none';
        // Lock orientation on mobile to prevent performance issues
        if (screen.orientation && screen.orientation.lock) try {
            screen.orientation.lock('portrait-primary').catch(()=>{
            // Silently fail if orientation lock isn't supported
            });
        } catch (e) {
        // Silently fail if orientation lock isn't supported
        }
        // Hide breadcrumb navigation on mobile when infoCard opens
        if ((0, _utils.widthCheck)(p.width)) {
            const breadcrumbContainer = document.getElementById("breadcrumb-container");
            if (breadcrumbContainer) breadcrumbContainer.style.display = 'none';
        }
        // Hide help and contact buttons on both mobile and desktop when infoCard opens
        const helpContainer = document.getElementById("help-container");
        const contactContainer = document.getElementById("contact-container");
        if (helpContainer) helpContainer.style.display = 'none';
        if (contactContainer) contactContainer.style.display = 'none';
        // Update theme color for iOS status bar to match dimmed overlay
        const themeColorMeta = document.querySelector('meta[name="theme-color"]');
        if (themeColorMeta) themeColorMeta.content = '#000000'; // Dark color to match overlay
        // Update breadcrumb to show current project
        const project = (0, _projectDetails.projects)[index];
        if (project && project.slug) require("244dec99fc46bf99").then(({ updateBreadcrumb })=>{
            updateBreadcrumb(`/interactive/live/${project.slug}`);
        });
    }
    function navigateToProject(newIndex) {
        activeInfoCard = newIndex;
        galleryScrollX = 0;
        targetGalleryScrollX = 0;
        galleryDragging = false;
        loadMediaForProject((0, _projectDetails.projects)[newIndex]);
        // Update URL and breadcrumb
        const project = (0, _projectDetails.projects)[newIndex];
        if (project && project.slug) {
            const newPath = `/interactive/live/${project.slug}`;
            if (window.location.hash !== `#${newPath}`) {
                window.history.pushState(null, '', `#${newPath}`);
                currentPath = newPath;
                // Update breadcrumb
                require("244dec99fc46bf99").then(({ updateBreadcrumb })=>{
                    updateBreadcrumb(newPath);
                });
            }
        }
    }
    function closeInfoCard() {
        targetAlpha = 0;
        infoCardAnimationStart = p.millis();
        infoCardAnimating = true;
        galleryScrollX = 0;
        targetGalleryScrollX = 0;
        galleryDragging = false;
        // Clean up any expanded media
        if (expandedMediaIndex !== null) closeExpandedMedia();
        // Re-enable browser swipe navigation when info card is closed
        document.body.style.overscrollBehavior = '';
        document.body.style.touchAction = '';
        // Unlock orientation when closing info card
        if (screen.orientation && screen.orientation.unlock) try {
            screen.orientation.unlock();
        } catch (e) {
        // Silently fail if orientation unlock isn't supported
        }
        // Show breadcrumb navigation on mobile when infoCard closes
        if ((0, _utils.widthCheck)(p.width)) {
            const breadcrumbContainer = document.getElementById("breadcrumb-container");
            if (breadcrumbContainer) breadcrumbContainer.style.display = 'block';
        }
        // Show help and contact buttons on both mobile and desktop when infoCard closes
        const helpContainer = document.getElementById("help-container");
        const contactContainer = document.getElementById("contact-container");
        if (helpContainer) helpContainer.style.display = 'block';
        if (contactContainer) contactContainer.style.display = 'block';
        // Restore original theme color for iOS status bar
        const themeColorMeta = document.querySelector('meta[name="theme-color"]');
        if (themeColorMeta) themeColorMeta.content = '#171717'; // Back to original dark theme
        // Update URL back to main installations page
        if (window.location.hash.includes('/interactive/live/') && window.location.hash !== '#/interactive/live') {
            window.history.pushState(null, '', '#/interactive/live');
            currentPath = '/interactive/live';
        }
        // Update breadcrumb back to installations page
        require("244dec99fc46bf99").then(({ updateBreadcrumb })=>{
            updateBreadcrumb('/interactive/live');
        });
        // Clear session storage
        sessionStorage.removeItem('installationsActiveProject');
    }
    function getCloseButtonHoverCheck() {
        return (mouseX, mouseY)=>{
            // Check expanded media close button first (higher priority)
            if (expandedMediaIndex !== null) {
                const isMobileCheck = (0, _utils.widthCheck)(p.width);
                const closeSize = isMobileCheck ? 50 : 40;
                const closePadding = isMobileCheck ? 20 : 15;
                const closeX = (p.width - closeSize) / 2;
                // Calculate media position to get close button Y position
                const project = (0, _projectDetails.projects)[activeInfoCard];
                if (project && project.images && expandedMediaIndex < project.images.length) {
                    const mediaItem = project.images[expandedMediaIndex];
                    let pathString = typeof mediaItem === 'string' ? mediaItem : mediaItem && typeof mediaItem === 'object' ? mediaItem.default || mediaItem.src || mediaItem.href || mediaItem.toString() : String(mediaItem);
                    const isVideo = pathString.toLowerCase().match(/\.(mp4|mov|webm|avi)(\?.*)?$/i);
                    const maxWidth = isMobileCheck ? p.width : p.width * 0.8;
                    const maxHeight = isMobileCheck ? p.height * 0.8 : p.height * 0.8;
                    let mediaHeight;
                    if (isVideo) {
                        const aspectRatio = nativeVideoElement && nativeVideoElement.videoWidth && nativeVideoElement.videoHeight ? nativeVideoElement.videoWidth / nativeVideoElement.videoHeight : 16 / 9;
                        if (aspectRatio > maxWidth / maxHeight) mediaHeight = maxWidth / aspectRatio;
                        else mediaHeight = maxHeight;
                    } else {
                        const mediaData = loadedMedia.get(pathString);
                        if (mediaData && mediaData.loaded && mediaData.element) {
                            const aspectRatio = mediaData.element.width / mediaData.element.height;
                            if (aspectRatio > maxWidth / maxHeight) mediaHeight = maxWidth / aspectRatio;
                            else mediaHeight = maxHeight;
                        } else mediaHeight = maxHeight; // fallback
                    }
                    const mediaY = (p.height - mediaHeight) / 2;
                    const closeY = mediaY + mediaHeight + closePadding;
                    return mouseX >= closeX && mouseX <= closeX + closeSize && mouseY >= closeY && mouseY <= closeY + closeSize;
                }
            }
            // Check info card close button
            if (activeInfoCard !== null) {
                const { width: cardWidth, height: cardHeight, x: cardX, y: cardY, isMobile } = getCardDimensions();
                const closeButtonSize = isMobile ? 44 : 30;
                const closeButtonX = cardX + cardWidth - closeButtonSize - 10;
                const closeButtonY = cardY + 10;
                return mouseX >= closeButtonX && mouseX <= closeButtonX + closeButtonSize && mouseY >= closeButtonY && mouseY <= closeButtonY + closeButtonSize;
            }
            return false;
        };
    }
    function preCalculateTextData() {
        textCache.clear();
        const textOffsetX = mobile ? 25 : 40;
        const textSize = mobile ? 14 : 18;
        // Set text size for accurate width calculations
        p.textSize(textSize);
        (0, _projectDetails.projects).forEach((project, index)=>{
            // Calculate text wrapping
            const maxChars = 16;
            const words = project.name.split(' ');
            let lines = [];
            let currentLine = '';
            for (const word of words)if ((currentLine + word).length > maxChars && currentLine.length > 0) {
                lines.push(currentLine.trim());
                currentLine = word + ' ';
            } else currentLine += word + ' ';
            if (currentLine.length > 0) lines.push(currentLine.trim());
            // Calculate dimensions
            const lineHeight = textSize * 1.2;
            const totalHeight = lines.length * lineHeight;
            // Get maximum line width
            let maxWidth = 0;
            lines.forEach((line)=>{
                const lineWidth = p.textWidth(line);
                if (lineWidth > maxWidth) maxWidth = lineWidth;
            });
            // Store in cache
            textCache.set(project.name, {
                lines,
                totalHeight,
                maxWidth,
                textOffsetX,
                textSize,
                lineHeight
            });
        });
        // Expose cache globally for UIPlanetButton access
        window.textCache = textCache;
    }
    function isHoveringText(planetButton, mouseX, mouseY, projectName) {
        // Get cached text data
        const cached = textCache.get(projectName);
        if (!cached) // Fallback - should not happen if cache is properly initialized
        return false;
        const textX = planetButton.p.x + cached.textOffsetX;
        const textY = planetButton.p.y;
        // Define text bounding rectangle using cached values
        const textBounds = {
            x: textX,
            y: textY - cached.totalHeight / 2,
            width: cached.maxWidth,
            height: cached.totalHeight
        };
        // Check if mouse is within text bounds
        return mouseX >= textBounds.x && mouseX <= textBounds.x + textBounds.width && mouseY >= textBounds.y && mouseY <= textBounds.y + textBounds.height;
    }
    function setupRadialLayout() {
        planetButtons = [];
        // Pre-calculate all text data for performance
        preCalculateTextData();
        const nodeCount = (0, _projectDetails.projects).length;
        const baseRadius = mobile ? 20 : 25;
        const textSize = mobile ? 14 : 18;
        // Based on proto.js design - create concentric circles with radial positioning
        const step = p.height / 5;
        const centerX = p.width / 2;
        for(let i = 0; i < nodeCount; i++){
            // Calculate position based on proto.js pattern
            const y = p.height - 0.25 * (i + 1) * step - 0.05 * step;
            const r = 0.25 * (i + 1) * step;
            // Calculate radial position
            const angle = -0.75 * p.PI + i * 0.09;
            const radialPos = (0, _utils.radialToCartesian)(r, angle, p);
            const pos = p.createVector(radialPos.x + centerX, -radialPos.y + y);
            // Position node along the radial line (upward from center)
            const nodeX = pos.x; //centerX;
            const nodeY = pos.y; //y - r; // Position at the top of the circle
            // Position text to the right of the node with offset
            const textOffsetX = mobile ? 25 : 40;
            const textOffsetY = 0;
            const planetButton = new (0, _utils.UIPlanetButton)(p, nodeX, nodeY, baseRadius, 0, p.random(p.TWO_PI), 0, [
                222,
                200
            ], (0, _projectDetails.projects)[i].name, textSize, textOffsetX, textOffsetY);
            // Add hover state tracking
            planetButton.hoverAlpha = 0;
            planetButton.targetHoverAlpha = 0;
            planetButtons.push(planetButton);
        }
    }
    function renderRadialLayout() {
        // Based on proto.js - render concentric circles first
        const step = p.height / 5;
        const centerX = p.width / 2;
        p.push();
        p.stroke(222, 64);
        p.strokeWeight(1);
        p.noFill();
        // Draw concentric circles (background)
        for(let i = 1; i <= planetButtons.length; i++){
            const y = p.height - 0.25 * i * step - 0.05 * step;
            const r = 0.25 * i * step;
            p.circle(centerX, y, 2 * r);
        }
        p.pop();
        // Render planet buttons with integrated text rendering
        planetButtons.forEach((planetButton, index)=>{
            const project = (0, _projectDetails.projects)[index];
            if (!project) return;
            planetButton.angle -= 0.01 * p.noise(index);
            // Handle media preview on hover (to the left of the node)
            // On mobile, use virtual cursor position; on desktop, use actual mouse
            const hoverX = mobile ? smoothX : p.mouseX;
            const hoverY = mobile ? smoothY : p.mouseY;
            // Check if hovering over planet button OR text area
            const planetHovered = planetButton.contains(hoverX, hoverY);
            const textHovered = isHoveringText(planetButton, hoverX, hoverY, project.name);
            const isHovered = planetHovered || textHovered;
            // Update hover state smoothly
            planetButton.targetHoverAlpha = isHovered ? 1 : 0;
            planetButton.hoverAlpha = p.lerp(planetButton.hoverAlpha, planetButton.targetHoverAlpha, isHovered ? 0.1 : 0.01);
            // Create a virtual smooth vector that reflects the hover state
            // This gives consistent distance-based effects regardless of actual cursor position
            const hoverDistance = p.lerp(200, 0, planetButton.hoverAlpha); // 200 = far (no effect), 20 = close (full effect)
            const virtualSmoothV = p.createVector(planetButton.p.x + hoverDistance, planetButton.p.y);
            // Render planet button with hover state-based feedback
            planetButton.render(virtualSmoothV, short);
            if (isHovered && project.images && project.images.length > 0) {
                // Load preview media if not already loaded
                if (!planetButton.previewMedia) loadPreviewMedia(planetButton, project);
                // Render media preview to the left of the node
                if (planetButton.previewMedia && planetButton.previewAlpha > 0.01) {
                    const previewSize = mobile ? 70 : 160;
                    const previewX = planetButton.p.x - previewSize - 30; // Position to the left
                    const previewY = planetButton.p.y - previewSize / 2;
                    p.push();
                    // Render media image with tint
                    p.tint(255, planetButton.previewAlpha * 178.5); // Low opacity as requested
                    // Crop from center of media to fit square
                    const mediaWidth = planetButton.previewMedia.width;
                    const mediaHeight = planetButton.previewMedia.height;
                    const cropSize = Math.min(mediaWidth, mediaHeight);
                    const cropX = (mediaWidth - cropSize) / 2;
                    const cropY = (mediaHeight - cropSize) / 2;
                    p.image(planetButton.previewMedia, previewX, previewY, previewSize, previewSize, cropX, cropY, cropSize, cropSize);
                    // Remove tint for corner brackets
                    p.noTint();
                    // Render HUD-style corner brackets
                    const cornerSize = mobile ? 8 : 12;
                    const alpha = planetButton.previewAlpha * 150; // Match preview opacity
                    p.stroke(255, alpha);
                    p.strokeWeight(1);
                    p.noFill();
                    // Corner brackets (like targeting system)
                    const corners = [
                        [
                            previewX,
                            previewY
                        ],
                        [
                            previewX + previewSize,
                            previewY
                        ],
                        [
                            previewX + previewSize,
                            previewY + previewSize
                        ],
                        [
                            previewX,
                            previewY + previewSize
                        ] // bottom-left
                    ];
                    corners.forEach(([x, y], index)=>{
                        const xDir = index === 0 || index === 3 ? 1 : -1;
                        const yDir = index === 0 || index === 1 ? 1 : -1;
                        // Horizontal line
                        p.line(x, y, x + xDir * cornerSize, y);
                        // Vertical line
                        p.line(x, y, x, y + yDir * cornerSize);
                    });
                    p.pop();
                }
            }
            // Update preview alpha
            if (isHovered) planetButton.previewAlpha = p.lerp(planetButton.previewAlpha || 0, 1, 0.1);
            else planetButton.previewAlpha = p.lerp(planetButton.previewAlpha || 0, 0, 0.15);
        });
    }
    function renderHUDDecorations() {
        p.push();
        // Title
        renderTitle();
        // Perimeter decorations
        renderPerimeterHUD();
        p.pop();
    }
    function renderTitle() {
        const titleY = mobile ? 5 : 20;
        const titleSize = mobile ? 18 : 28;
        p.fill(255, 200);
        p.noStroke();
        p.textAlign(p.CENTER, p.TOP);
        p.textFont('BPdotsSquareVF', {
            fontVariationSettings: `wght 900`
        });
        p.textSize(titleSize);
        p.text("LIVE EXPERIENCES", p.width / 2, titleY);
        // Underline decoration
        const textWidth = p.textWidth("LIVE EXPERIENCES");
        p.stroke(255, 120);
        p.strokeWeight(1);
        p.line(p.width / 2 - textWidth / 2 - 20, titleY + titleSize + 8, p.width / 2 + textWidth / 2 + 20, titleY + titleSize + 8);
    }
    function renderPerimeterHUD() {
        const margin = mobile ? 10 : 40;
        const cornerSize = mobile ? 20 : 30;
        const alpha = 100;
        p.stroke(255, alpha);
        p.strokeWeight(1);
        p.strokeCap(p.SQUARE);
        p.noFill();
        // Corner brackets (like targeting system)
        const corners = [
            [
                margin,
                margin
            ],
            [
                p.width - margin,
                margin
            ],
            [
                p.width - margin,
                p.height - margin
            ],
            [
                margin,
                p.height - margin
            ] // bottom-left
        ];
        corners.forEach(([x, y], index)=>{
            const xDir = index === 0 || index === 3 ? 1 : -1;
            const yDir = index === 0 || index === 1 ? 1 : -1;
            // Horizontal line
            p.line(x, y, x + xDir * cornerSize, y);
            // Vertical line
            p.line(x, y, x, y + yDir * cornerSize);
        });
        // Side markers (like coordinate system)
        const markerCount = mobile ? 3 : 5;
        const markerSize = 6;
        // Top and bottom markers
        for(let i = 1; i < markerCount; i++){
            const x = p.lerp(margin + cornerSize, p.width - margin - cornerSize, i / markerCount);
            // Top markers
            p.line(x, margin, x, margin + markerSize);
            // Bottom markers
            p.line(x, p.height - margin, x, p.height - margin - markerSize);
        }
        // Left and right markers
        for(let i = 1; i < markerCount; i++){
            const y = p.lerp(margin + cornerSize, p.height - margin - cornerSize, i / markerCount);
            // Left markers
            p.line(margin, y, margin + markerSize, y);
            // Right markers
            p.line(p.width - margin, y, p.width - margin - markerSize, y);
        }
        // Status indicators in corners
        p.fill(255, alpha * 0.6);
        p.noStroke();
        p.textAlign(p.LEFT, p.TOP);
        p.textSize(mobile ? 8 : 11);
        const step = mobile ? 10 : 13;
        // System status text
        p.text("SYS: CAUTION", margin + 0.5 * cornerSize, margin + 1 * step);
        p.text("SOL: " + sols.toString(), margin + 0.5 * cornerSize, margin + 2 * step);
        p.text("SIG: -27dBm", margin + 0.5 * cornerSize, margin + 3 * step);
        p.text("RCS: ON", margin + 0.5 * cornerSize, margin + 4 * step);
    /*
        p.textAlign(p.RIGHT, p.TOP);
        p.text("SOL:" + sols.toString(), p.width - margin - cornerSize, margin + 5);
        p.textAlign(p.LEFT, p.BOTTOM);
        p.text("SIG:-32dBm", margin + cornerSize, p.height - margin - 5);
        p.textAlign(p.RIGHT, p.BOTTOM);
        p.text("BATT:64%", p.width - margin - cornerSize, p.height - margin - 5);
        */ }
    function loadPreviewMedia(planetButton, project) {
        if (project && project.previewThumbnail) // Use optimized 256x256 preview thumbnail for fast loading
        p.loadImage(project.previewThumbnail, (img)=>{
            planetButton.previewMedia = img;
        }, (err)=>{
            console.warn('Failed to load preview thumbnail:', err);
            // Fallback to original logic if preview thumbnail fails
            loadPreviewMediaFallback(planetButton, project);
        });
        else // Fallback for projects without preview thumbnails
        loadPreviewMediaFallback(planetButton, project);
    }
    function loadPreviewMediaFallback(planetButton, project) {
        if (project && project.images && project.images.length > 0) {
            const firstMedia = project.images[0];
            const pathString = (0, _utils.getMediaPath)(firstMedia);
            const isVideo = (0, _utils.isVideoFile)(pathString);
            if (isVideo) // For videos, try to load thumbnail first, fall back to placeholder
            {
                if (project.thumbnails && project.thumbnails[firstMedia]) p.loadImage(project.thumbnails[firstMedia], (img)=>{
                    planetButton.previewMedia = img;
                }, (err)=>{
                    console.warn('Failed to load thumbnail for preview:', err);
                });
            } else // For images, load directly
            p.loadImage(pathString, (img)=>{
                planetButton.previewMedia = img;
            }, (err)=>{
                console.warn('Failed to load image for preview:', err);
            });
        }
    }
    function renderInfoCard(project) {
        // Calculate card size based on screen size
        const { width: cardWidth, height: cardHeight, x: cardX, y: cardY, isMobile } = getCardDimensions();
        // Card background with semi-transparent overlay
        p.fill(0, 0, 0, 120 * (infoCardAlpha / 255));
        p.noStroke();
        p.rect(0, 0, p.width, p.height);
        // Main card background
        p.fill(23, 23, 23, 240 * (infoCardAlpha / 255));
        p.stroke(230, infoCardAlpha);
        p.strokeWeight(2);
        p.rect(cardX, cardY, cardWidth, cardHeight);
        // Close button
        const closeButtonSize = isMobile ? 44 : 30;
        const closeButtonX = cardX + cardWidth - closeButtonSize - 10;
        const closeButtonY = cardY + 10;
        renderCloseButton(closeButtonX, closeButtonY, closeButtonSize, infoCardAlpha);
        // Text styling
        p.fill(230, infoCardAlpha);
        p.noStroke();
        p.textAlign(p.LEFT, p.TOP);
        // Fixed text sizes for desktop and mobile with tighter mobile spacing
        const padding = isMobile ? 20 : 24;
        const baseLineHeight = isMobile ? 20 : 32; // Much tighter line height for mobile
        let textY = cardY + padding;
        // Project Name (larger) - with multiline support
        p.textFont('BPdotsSquareVF', {
            fontVariationSettings: `wght 900`
        });
        const nameSize = isMobile ? 22 : 32;
        p.textSize(nameSize);
        // Calculate approximate number of lines for project name
        const nameWidth = cardWidth - 2 * padding - closeButtonSize;
        const nameTextWidth = p.textWidth(project.name);
        const estimatedLines = Math.ceil(nameTextWidth / nameWidth);
        p.text(project.name, cardX + padding, textY, nameWidth);
        textY += estimatedLines * nameSize * 1.2 + (isMobile ? 8 : 16); // Use actual text size for height
        // Type, then Year - Location on same line
        p.textSize(isMobile ? 12 : 18);
        // Type
        p.text(project.type, cardX + padding, textY, cardWidth - 2 * padding);
        textY += isMobile ? 14 : baseLineHeight; // Reduced spacing on mobile
        // Year - Location (combined on one line)
        const yearLocationText = `${project.year} - ${project.location}`;
        p.text(yearLocationText, cardX + padding, textY, cardWidth - 2 * padding);
        textY += isMobile ? 18 : baseLineHeight * 1.5; // Slightly more space before gallery
        // Gallery section (if images exist)
        if (project.images && project.images.length > 0) {
            const galleryHeight = isMobile ? cardHeight * 0.3 : cardHeight * 0.4;
            const galleryY = textY;
            // Store for click detection
            currentGalleryY = galleryY;
            currentGalleryHeight = galleryHeight;
            renderGallery(project.images, cardX + padding, galleryY, cardWidth - 2 * padding, galleryHeight, isMobile);
            textY += galleryHeight + (isMobile ? 12 : baseLineHeight); // Much tighter spacing on mobile
        }
        // Description (if available)
        if (project.description && project.description.length > 0) {
            p.textFont('ZxGamut', {
                fontVariationSettings: `wght 400`
            });
            p.textSize(isMobile ? 10 : 16);
            p.fill(230, infoCardAlpha);
            p.noStroke();
            const descriptionHeight = cardHeight - (textY - cardY) - (isMobile ? 10 : padding);
            p.text(project.description, cardX + padding, textY, cardWidth - 2 * padding, descriptionHeight);
            // Reset font back to default
            p.textFont('BPdotsSquareVF', {
                fontVariationSettings: `wght 900`
            });
        }
        // Navigation arrows (only show if there are multiple projects)
        if ((0, _projectDetails.projects).length > 1) renderNavigationArrows(cardX, cardY, cardWidth, cardHeight, isMobile);
    }
    function renderNavigationArrows(cardX, cardY, cardWidth, cardHeight, isMobile) {
        // Arrow button dimensions - match lightbox styling
        const arrowSize = 35; // Match lightbox size
        const arrowSpacing = 80; // Match lightbox spacing
        const arrowY = cardY + cardHeight + (isMobile ? 20 : 15);
        // Position arrows with counter centered between them (match lightbox layout)
        const centerX = cardX + cardWidth / 2;
        const leftArrowX = centerX - arrowSpacing - arrowSize / 2;
        const rightArrowX = centerX + arrowSpacing - arrowSize / 2;
        const counterX = centerX;
        // Arrows are always active with wraparound navigation
        const arrowAlpha = infoCardAlpha;
        // Left arrow (previous with wraparound)
        renderArrowButton(leftArrowX, arrowY, arrowSize, 'left', arrowAlpha, isMobile);
        // Right arrow (next with wraparound)
        renderArrowButton(rightArrowX, arrowY, arrowSize, 'right', arrowAlpha, isMobile);
        // Project counter text centered between arrows (match lightbox styling)
        p.fill(230, infoCardAlpha);
        p.noStroke();
        p.textAlign(p.CENTER, p.CENTER);
        p.textFont('BPdotsSquareVF', {
            fontVariationSettings: `wght 600`
        });
        p.textSize(16); // Match lightbox text size
        p.text(`${activeInfoCard + 1} / ${(0, _projectDetails.projects).length}`, counterX, arrowY + arrowSize / 2);
    }
    function renderArrowButton(x, y, size, direction, alpha, isMobile) {
        // Button background (match lightbox styling)
        p.fill(23, 23, 23, 200 * (alpha / 255)); // Match lightbox background
        p.stroke(230, alpha); // Match lightbox stroke
        p.strokeWeight(2); // Match lightbox stroke weight
        p.rect(x, y, size, size);
        // Arrow symbol
        p.fill(230, alpha);
        p.noStroke();
        const arrowCenterX = x + size / 2;
        const arrowCenterY = y + size / 2;
        const arrowWidth = size * 0.3; // Match lightbox proportions
        const arrowHeight = size * 0.4;
        if (direction === 'left') // Left-pointing triangle (match lightbox arrow shape)
        p.triangle(arrowCenterX - arrowWidth / 2, arrowCenterY, arrowCenterX + arrowWidth / 2, arrowCenterY - arrowHeight / 2, arrowCenterX + arrowWidth / 2, arrowCenterY + arrowHeight / 2);
        else // Right-pointing triangle (match lightbox arrow shape)
        p.triangle(arrowCenterX + arrowWidth / 2, arrowCenterY, arrowCenterX - arrowWidth / 2, arrowCenterY - arrowHeight / 2, arrowCenterX - arrowWidth / 2, arrowCenterY + arrowHeight / 2);
    }
    function navigateToProject(newIndex, fromHashChange = false) {
        if (newIndex >= 0 && newIndex < (0, _projectDetails.projects).length && newIndex !== activeInfoCard) {
            // Update active info card
            activeInfoCard = newIndex;
            // Reset gallery scroll
            galleryScrollX = 0;
            targetGalleryScrollX = 0;
            // Close any expanded media
            if (expandedMediaIndex !== null) closeExpandedMedia();
            // Load media for new project
            loadMediaForProject((0, _projectDetails.projects)[newIndex]);
            // Update URL and breadcrumb
            const newProject = (0, _projectDetails.projects)[newIndex];
            if (newProject && newProject.slug) {
                const newPath = `/interactive/live/${newProject.slug}`;
                // Only update URL if this wasn't triggered by a hash change
                if (!fromHashChange) window.history.replaceState(null, '', `#${newPath}`);
                currentPath = newPath;
                // Update breadcrumb
                require("244dec99fc46bf99").then(({ updateBreadcrumb })=>{
                    updateBreadcrumb(newPath);
                });
                // Update session storage
                sessionStorage.setItem('installationsActiveProject', newProject.slug);
            }
        }
    }
    function getNavigationButtonHoverCheck() {
        return (mouseX, mouseY)=>{
            if (activeInfoCard !== null && (0, _projectDetails.projects).length > 1) {
                const { width: cardWidth, height: cardHeight, x: cardX, y: cardY, isMobile } = getCardDimensions();
                const arrowSize = isMobile ? 50 : 40;
                const arrowPadding = isMobile ? 20 : 15;
                const arrowY = cardY + cardHeight + arrowPadding;
                // Use new arrow positioning logic (same as in renderNavigationArrows)
                const counterWidth = 80;
                const totalWidth = arrowSize * 2 + counterWidth + arrowPadding * 2;
                const startX = cardX + (cardWidth - totalWidth) / 2;
                const leftArrowX = startX;
                const rightArrowX = startX + arrowSize + counterWidth + arrowPadding * 2;
                // Check left arrow (always active with wraparound)
                if (mouseX >= leftArrowX && mouseX <= leftArrowX + arrowSize && mouseY >= arrowY && mouseY <= arrowY + arrowSize) return true;
                // Check right arrow (always active with wraparound)
                if (mouseX >= rightArrowX && mouseX <= rightArrowX + arrowSize && mouseY >= arrowY && mouseY <= arrowY + arrowSize) return true;
            }
            return false;
        };
    }
    function getTextAreasHoverCheck() {
        return (mouseX, mouseY)=>{
            // Check if hovering over any text area
            for(let i = 0; i < planetButtons.length; i++){
                const planetButton = planetButtons[i];
                const project = (0, _projectDetails.projects)[i];
                if (project && isHoveringText(planetButton, mouseX, mouseY, project.name)) return true;
            }
            return false;
        };
    }
    // Track loaded media for cleanup
    const loadedMediaForProject = new Map();
    function loadMediaForProject(project) {
        if (!project.images || project.images.length === 0) return;
        // Clean up previous project media first
        cleanupUnusedMedia(project);
        project.images.forEach((mediaItem, index)=>{
            const pathString = (0, _utils.getMediaPath)(mediaItem);
            if (!loadedMedia.has(pathString)) {
                const isVideo = (0, _utils.isVideoFile)(pathString);
                // Desktop-only video handling - NEVER load video elements on mobile or tablets
                const isDesktop = (0, _utils.isDesktopOnly)();
                if (!isDesktop && isVideo) {
                    if (project.thumbnails && project.thumbnails[mediaItem]) // Lazy load thumbnail only when needed
                    loadedMedia.set(pathString, {
                        element: null,
                        type: 'video-thumbnail-lazy',
                        videoSrc: pathString,
                        thumbnailPath: project.thumbnails[mediaItem],
                        loaded: false
                    });
                    else // No thumbnail available - use black placeholder
                    loadedMedia.set(pathString, {
                        element: null,
                        type: 'video-placeholder',
                        videoSrc: pathString,
                        loaded: true
                    });
                    return;
                }
                // Desktop video loading
                if (isVideo) loadVideoElement(pathString);
                else // Lazy load images as well
                loadedMedia.set(pathString, {
                    element: null,
                    type: 'image-lazy',
                    imagePath: pathString,
                    loaded: false
                });
            }
            // Track media for this project
            if (!loadedMediaForProject.has(project.slug)) loadedMediaForProject.set(project.slug, new Set());
            loadedMediaForProject.get(project.slug).add(pathString);
        });
    }
    function loadVideoElement(pathString) {
        // Only create video elements on desktop (not tablets or mobile)
        const isDesktop = (0, _utils.isDesktopOnly)();
        if (!isDesktop) {
            console.warn('Attempted to load video on mobile/tablet - this should not happen');
            return;
        }
        // Check if video is already loaded or being loaded
        if (loadedMedia.has(pathString) || mediaBeingLoaded.has(pathString)) return;
        // Mark as being loaded and set initial unloaded state
        mediaBeingLoaded.add(pathString);
        loadedMedia.set(pathString, {
            element: null,
            type: 'video',
            loaded: false
        });
        const video = p.createVideo(pathString, ()=>{
            // Only set loaded once when video is ready
            const currentData = loadedMedia.get(pathString);
            if (currentData && !currentData.loaded) {
                loadedMedia.set(pathString, {
                    element: video,
                    type: 'video',
                    loaded: true
                });
                mediaBeingLoaded.delete(pathString);
            }
        });
        video.hide();
        video.volume(0);
        // Set attributes for iOS compatibility
        video.elt.setAttribute('playsinline', true);
        video.elt.setAttribute('muted', true);
        video.elt.setAttribute('preload', 'metadata');
        // Desktop: autoplay looping for moving preview
        video.loop();
        // Single consolidated event listener to avoid multiple updates
        video.elt.addEventListener('canplay', ()=>{
            const currentData = loadedMedia.get(pathString);
            if (currentData && !currentData.loaded) {
                loadedMedia.set(pathString, {
                    element: video,
                    type: 'video',
                    loaded: true
                });
                mediaBeingLoaded.delete(pathString);
            }
        });
        // Fallback timeout in case events don't fire
        setTimeout(()=>{
            const currentData = loadedMedia.get(pathString);
            if (currentData && !currentData.loaded) {
                loadedMedia.set(pathString, {
                    element: video,
                    type: 'video',
                    loaded: true
                });
                mediaBeingLoaded.delete(pathString);
            }
        }, 3000);
    }
    function cleanupUnusedMedia(currentProject) {
        // Clean up media from other projects to free memory
        loadedMediaForProject.forEach((mediaSet, projectSlug)=>{
            if (projectSlug !== currentProject.slug) {
                mediaSet.forEach((pathString)=>{
                    const mediaData = loadedMedia.get(pathString);
                    if (mediaData && mediaData.element) // Remove video elements from DOM
                    {
                        if (mediaData.type === 'video' && mediaData.element.elt) mediaData.element.remove();
                    }
                    loadedMedia.delete(pathString);
                });
                loadedMediaForProject.delete(projectSlug);
            }
        });
    }
    function lazyLoadMedia(pathString) {
        const mediaData = loadedMedia.get(pathString);
        if (!mediaData || mediaData.loaded || mediaBeingLoaded.has(pathString)) return;
        // Mark as being loaded to prevent duplicates
        mediaBeingLoaded.add(pathString);
        if (mediaData.type === 'video-thumbnail-lazy') // Load thumbnail image
        p.loadImage(mediaData.thumbnailPath, (img)=>{
            loadedMedia.set(pathString, {
                element: img,
                type: 'video-thumbnail',
                videoSrc: pathString,
                loaded: true
            });
            mediaBeingLoaded.delete(pathString);
        }, (err)=>{
            console.error('Failed to load video thumbnail:', mediaData.thumbnailPath, err);
            loadedMedia.set(pathString, {
                element: null,
                type: 'video-placeholder',
                videoSrc: pathString,
                loaded: true
            });
            mediaBeingLoaded.delete(pathString);
        });
        else if (mediaData.type === 'image-lazy') // Load image
        p.loadImage(mediaData.imagePath, (img)=>{
            loadedMedia.set(pathString, {
                element: img,
                type: 'image',
                loaded: true
            });
            mediaBeingLoaded.delete(pathString);
        }, (err)=>{
            console.error('Failed to load image:', mediaData.imagePath, err);
            mediaBeingLoaded.delete(pathString);
        });
    }
    function renderGallery(images, x, y, width, height, isMobile) {
        if (!images || images.length === 0) return;
        // Gallery container background
        p.fill(0, 0, 0, 100 * (infoCardAlpha / 255));
        p.stroke(230, infoCardAlpha * 0.3);
        p.strokeWeight(1);
        p.rect(x, y, width, height);
        // Set up clipping mask for gallery
        p.push();
        // Create clipping rectangle
        p.drawingContext.save();
        p.drawingContext.beginPath();
        p.drawingContext.rect(x, y, width, height);
        p.drawingContext.clip();
        // Use 3:2 aspect ratio for gallery items with equal padding
        const padding = isMobile ? 8 : 10; // Equal padding for all sides and between items
        const itemHeight = height - 2 * padding; // Account for top and bottom padding
        const itemWidth = itemHeight * 1.5; // 3:2 aspect ratio
        const totalWidth = images.length * (itemWidth + padding) - padding; // Last item doesn't need trailing padding
        const startX = x + padding; // Left padding
        const startY = y + padding; // Top padding
        // Constrain scroll bounds
        const maxScroll = p.max(0, totalWidth - width + 2 * padding);
        targetGalleryScrollX = p.constrain(targetGalleryScrollX, -maxScroll, 0);
        // Render media items
        images.forEach((mediaItem, index)=>{
            const pathString = (0, _utils.getMediaPath)(mediaItem);
            const itemX = startX + index * (itemWidth + padding) + galleryScrollX;
            // Only render if visible
            if (itemX + itemWidth >= x && itemX <= x + width) {
                const mediaData = loadedMedia.get(pathString);
                // Lazy load media when it becomes visible
                if (mediaData && !mediaData.loaded) lazyLoadMedia(pathString);
                if (mediaData && mediaData.loaded) {
                    p.push();
                    p.tint(255, infoCardAlpha);
                    try {
                        if (mediaData.type === 'image') {
                            // Fill the entire box, cropping as needed
                            const img = mediaData.element;
                            const { sourceX, sourceY, sourceWidth, sourceHeight } = (0, _utils.calculateCropDimensions)(img.width, img.height, itemWidth, itemHeight);
                            p.image(img, itemX, startY, itemWidth, itemHeight, sourceX, sourceY, sourceWidth, sourceHeight);
                        } else if (mediaData.type === 'video-thumbnail') {
                            // Mobile: Show thumbnail image (no play icon to avoid blocking taps)
                            const img = mediaData.element;
                            const { sourceX, sourceY, sourceWidth, sourceHeight } = (0, _utils.calculateCropDimensions)(img.width, img.height, itemWidth, itemHeight);
                            p.image(img, itemX, startY, itemWidth, itemHeight, sourceX, sourceY, sourceWidth, sourceHeight);
                        } else if (mediaData.type === 'video') {
                            // Show first frame of video as preview (no play icon)
                            const video = mediaData.element;
                            if (video.elt && (video.elt.readyState >= 1 || video.elt.videoWidth > 0)) {
                                const videoWidth = video.elt.videoWidth || video.width || 1920;
                                const videoHeight = video.elt.videoHeight || video.height || 1080;
                                const { sourceX, sourceY, sourceWidth, sourceHeight } = (0, _utils.calculateCropDimensions)(videoWidth, videoHeight, itemWidth, itemHeight);
                                p.image(video, itemX, startY, itemWidth, itemHeight, sourceX, sourceY, sourceWidth, sourceHeight);
                            } else {
                                // Fallback to dark background if video not ready
                                p.fill(40, 40, 40, 200 * (infoCardAlpha / 255));
                                p.noStroke();
                                p.rect(itemX, startY, itemWidth, itemHeight);
                            }
                        } else if (mediaData.type === 'video-placeholder') {
                            // Mobile: Show black placeholder with play icon
                            p.fill(23, 23, 23, 240 * (infoCardAlpha / 255));
                            p.noStroke();
                            p.rect(itemX, startY, itemWidth, itemHeight);
                            // Small play icon overlay
                            const playSize = itemWidth * 0.15;
                            const playX = itemX + (itemWidth - playSize) / 2;
                            const playY = startY + (itemHeight - playSize) / 2;
                            renderPlayIcon(playX, playY, playSize, infoCardAlpha);
                        }
                    } catch (error) {
                        console.warn('Error rendering media:', error);
                        // Fall back to placeholder
                        p.fill(80, 80, 80, 150 * (infoCardAlpha / 255));
                        p.stroke(120, infoCardAlpha * 0.5);
                        p.strokeWeight(1);
                        p.rect(itemX, startY, itemWidth, itemHeight);
                        // Show error text
                        p.fill(200, infoCardAlpha * 0.7);
                        p.noStroke();
                        p.textAlign(p.CENTER, p.CENTER);
                        p.textSize(isMobile ? 6 : 12);
                        p.text(mediaData.type === 'video' ? 'Video Error' : 'Image Error', itemX + itemWidth / 2, startY + itemHeight / 2);
                    }
                    p.pop();
                } else if (mediaData) {
                    // Show appropriate placeholder based on type
                    if (mediaData.type === 'video-thumbnail-lazy' || mediaData.type === 'image-lazy') {
                        // Light placeholder for lazy loading items
                        p.fill(60, 60, 60, 120 * (infoCardAlpha / 255));
                        p.stroke(110, infoCardAlpha * 0.4);
                        p.strokeWeight(1);
                        p.rect(itemX, startY, itemWidth, itemHeight);
                        // Subtle loading indicator
                        p.fill(180, infoCardAlpha * 0.6);
                        p.noStroke();
                        p.textAlign(p.CENTER, p.CENTER);
                        p.textSize(isMobile ? 6 : 12);
                        p.text("\u2022\u2022\u2022", itemX + itemWidth / 2, startY + itemHeight / 2);
                    } else {
                        // Standard loading placeholder
                        p.fill(50, 50, 50, 150 * (infoCardAlpha / 255));
                        p.stroke(100, infoCardAlpha * 0.5);
                        p.strokeWeight(1);
                        p.rect(itemX, startY, itemWidth, itemHeight);
                        // Loading text
                        p.fill(150, infoCardAlpha * 0.7);
                        p.noStroke();
                        p.textAlign(p.CENTER, p.CENTER);
                        p.textSize(isMobile ? 8 : 14);
                        p.text('Loading...', itemX + itemWidth / 2, startY + itemHeight / 2);
                    }
                } else {
                    // No media data available
                    p.fill(40, 40, 40, 100 * (infoCardAlpha / 255));
                    p.stroke(80, infoCardAlpha * 0.3);
                    p.strokeWeight(1);
                    p.rect(itemX, startY, itemWidth, itemHeight);
                }
                // Media border
                p.noFill();
                p.stroke(230, infoCardAlpha * 0.6);
                p.strokeWeight(1);
                p.rect(itemX, startY, itemWidth, itemHeight);
            }
        });
        // Scroll indicators (if needed)
        if (totalWidth > width) {
            const indicatorAlpha = infoCardAlpha * 0.8;
            // Left scroll indicator
            if (galleryScrollX < 0) {
                p.fill(230, indicatorAlpha);
                p.noStroke();
                p.triangle(x + 5, y + height / 2, x + 15, y + height / 2 - 5, x + 15, y + height / 2 + 5);
            }
            // Right scroll indicator
            if (galleryScrollX > -maxScroll) {
                p.fill(230, indicatorAlpha);
                p.noStroke();
                p.triangle(x + width - 5, y + height / 2, x + width - 15, y + height / 2 - 5, x + width - 15, y + height / 2 + 5);
            }
        }
        // Restore clipping context
        p.drawingContext.restore();
        p.pop();
    }
    function openExpandedMedia(index) {
        expandedMediaIndex = index;
        targetExpandedAlpha = 255;
        expandedMediaAnimationStart = p.millis();
        expandedMediaAnimating = true;
    }
    function closeExpandedMedia() {
        targetExpandedAlpha = 0;
        expandedMediaAnimationStart = p.millis();
        expandedMediaAnimating = true;
        // Clean up native video element
        if (nativeVideoElement) {
            nativeVideoElement.pause();
            nativeVideoElement.removeAttribute('src');
            nativeVideoElement.blur();
            nativeVideoElement.remove();
            nativeVideoElement = null;
        }
        // Exit fullscreen if active
        if (document.fullscreenElement) document.exitFullscreen().catch(()=>{});
    }
    function renderExpandedNativeVideo(videoPath) {
        // Dark overlay
        p.fill(0, 0, 0, 200 * (expandedMediaAlpha / 255));
        p.noStroke();
        p.rect(0, 0, p.width, p.height);
        // Don't create video if we're closing (prevents orphaned elements)
        if (targetExpandedAlpha === 0) return;
        // Create or update native video element
        if (!nativeVideoElement || nativeVideoElement.src !== videoPath) {
            // Clean up existing video if it exists
            if (nativeVideoElement) {
                nativeVideoElement.pause();
                nativeVideoElement.removeAttribute('src');
                nativeVideoElement.blur();
                nativeVideoElement.remove();
            }
            nativeVideoElement = document.createElement('video');
            nativeVideoElement.src = videoPath;
            nativeVideoElement.controls = true;
            nativeVideoElement.preload = 'metadata';
            nativeVideoElement.setAttribute('playsinline', true);
            nativeVideoElement.muted = true;
            nativeVideoElement.disableRemotePlayback = true;
            // Prevent double-click from triggering fullscreen
            nativeVideoElement.addEventListener('dblclick', (e)=>{
                e.preventDefault();
                e.stopPropagation();
            });
            // Style the video element
            nativeVideoElement.style.position = 'fixed';
            nativeVideoElement.style.zIndex = '1000';
            nativeVideoElement.style.backgroundColor = '#000';
            nativeVideoElement.style.borderRadius = '8px';
            // Add to DOM
            document.body.appendChild(nativeVideoElement);
        }
        // Calculate video size and position (full width on mobile, 80% on desktop)
        const isMobile = (0, _utils.widthCheck)(p.width);
        const maxWidth = isMobile ? p.width : p.width * 0.8;
        const maxHeight = isMobile ? p.height * 0.8 : p.height * 0.8;
        // Use 16:9 aspect ratio as default, or actual video ratio if available
        let aspectRatio = 16 / 9;
        if (nativeVideoElement.videoWidth && nativeVideoElement.videoHeight) aspectRatio = nativeVideoElement.videoWidth / nativeVideoElement.videoHeight;
        let videoWidth, videoHeight;
        if (aspectRatio > maxWidth / maxHeight) {
            videoWidth = maxWidth;
            videoHeight = maxWidth / aspectRatio;
        } else {
            videoHeight = maxHeight;
            videoWidth = maxHeight * aspectRatio;
        }
        // Position the video element
        const videoX = (p.width - videoWidth) / 2;
        const videoY = (p.height - videoHeight) / 2;
        // Apply positioning and sizing
        nativeVideoElement.style.left = videoX + 'px';
        nativeVideoElement.style.top = videoY + 'px';
        nativeVideoElement.style.width = videoWidth + 'px';
        nativeVideoElement.style.height = videoHeight + 'px';
        nativeVideoElement.style.opacity = expandedMediaAlpha / 255;
        // Close button (centered below the video, similar to arrow buttons)
        const closeSize = isMobile ? 50 : 40;
        const closePadding = isMobile ? 20 : 15;
        const closeY = videoY + videoHeight + closePadding;
        const closeX = (p.width - closeSize) / 2; // Center horizontally
        p.fill(0, 0, 0, 150 * (expandedMediaAlpha / 255));
        p.stroke(255, expandedMediaAlpha);
        p.strokeWeight(2);
        p.rect(closeX, closeY, closeSize, closeSize);
        // X symbol
        p.stroke(255, expandedMediaAlpha);
        p.strokeWeight(3);
        const padding = closeSize * 0.3; // Proportional padding
        p.line(closeX + padding, closeY + padding, closeX + closeSize - padding, closeY + closeSize - padding);
        p.line(closeX + closeSize - padding, closeY + padding, closeX + padding, closeY + closeSize - padding);
    }
    function renderExpandedMedia() {
        if (activeInfoCard === null || expandedMediaIndex === null) return;
        const project = (0, _projectDetails.projects)[activeInfoCard];
        if (!project.images || expandedMediaIndex >= project.images.length) return;
        const mediaItem = project.images[expandedMediaIndex];
        let pathString;
        if (typeof mediaItem === 'string') pathString = mediaItem;
        else if (mediaItem && typeof mediaItem === 'object') pathString = mediaItem.default || mediaItem.src || mediaItem.href || mediaItem.toString();
        else pathString = String(mediaItem);
        const mediaData = loadedMedia.get(pathString);
        const isVideo = pathString.toLowerCase().match(/\.(mp4|mov|webm|avi)(\?.*)?$/i);
        // For videos or video placeholders, use native video player
        if (isVideo || mediaData && (mediaData.type === 'video-placeholder' || mediaData.type === 'video-thumbnail')) {
            // Use the original video source for native player
            const videoSrc = mediaData && mediaData.videoSrc ? mediaData.videoSrc : pathString;
            renderExpandedNativeVideo(videoSrc);
            return;
        }
        // For images, continue with p5.js rendering
        if (!mediaData || !mediaData.loaded) return;
        // Dark overlay
        p.fill(0, 0, 0, 200 * (expandedMediaAlpha / 255));
        p.noStroke();
        p.rect(0, 0, p.width, p.height);
        // Calculate media size (full width on mobile, 80% on desktop)
        const isMobile = (0, _utils.widthCheck)(p.width);
        const maxWidth = isMobile ? p.width : p.width * 0.8;
        const maxHeight = isMobile ? p.height * 0.8 : p.height * 0.8;
        let mediaWidth, mediaHeight;
        if (mediaData.type === 'image') {
            const img = mediaData.element;
            const aspectRatio = img.width / img.height;
            if (aspectRatio > maxWidth / maxHeight) {
                mediaWidth = maxWidth;
                mediaHeight = maxWidth / aspectRatio;
            } else {
                mediaHeight = maxHeight;
                mediaWidth = maxHeight * aspectRatio;
            }
        } else if (mediaData.type === 'video') {
            const video = mediaData.element;
            // Get video dimensions with fallbacks
            let videoWidth = video.elt.videoWidth || video.width || 1920;
            let videoHeight = video.elt.videoHeight || video.height || 1080;
            // Ensure we have valid dimensions
            if (videoWidth <= 0 || videoHeight <= 0) {
                videoWidth = 1920;
                videoHeight = 1080;
            }
            const aspectRatio = videoWidth / videoHeight;
            if (aspectRatio > maxWidth / maxHeight) {
                mediaWidth = maxWidth;
                mediaHeight = maxWidth / aspectRatio;
            } else {
                mediaHeight = maxHeight;
                mediaWidth = maxHeight * aspectRatio;
            }
        }
        const mediaX = (p.width - mediaWidth) / 2;
        const mediaY = (p.height - mediaHeight) / 2;
        // Render expanded media
        p.push();
        p.tint(255, expandedMediaAlpha);
        p.image(mediaData.element, mediaX, mediaY, mediaWidth, mediaHeight);
        p.pop();
        // Close button (centered below the image, similar to arrow buttons)
        const closeSize = isMobile ? 50 : 40;
        const closePadding = isMobile ? 20 : 15;
        const closeY = mediaY + mediaHeight + closePadding;
        const closeX = (p.width - closeSize) / 2; // Center horizontally
        p.fill(0, 0, 0, 150 * (expandedMediaAlpha / 255));
        p.stroke(255, expandedMediaAlpha);
        p.strokeWeight(2);
        p.rect(closeX, closeY, closeSize, closeSize);
        // X symbol
        p.stroke(255, expandedMediaAlpha);
        p.strokeWeight(3);
        const padding = closeSize * 0.3; // Proportional padding
        p.line(closeX + padding, closeY + padding, closeX + closeSize - padding, closeY + closeSize - padding);
        p.line(closeX + closeSize - padding, closeY + padding, closeX + padding, closeY + closeSize - padding);
    // No custom controls needed - native video handles everything
    }
};
const installationsSketch = (node, options = {})=>{
    return new p5((p)=>sketch(p, options), node);
};

},{"../../utils":"khuqI","./project-details":"8OjNG","244dec99fc46bf99":"bRtiW","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6IcAC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sketch", ()=>sketch);
parcelHelpers.export(exports, "photoSketch", ()=>photoSketch);
var _utils = require("../../utils");
var _photoCollections = require("./photo-collections");
const sketch = function(p, options = {}) {
    let mode = 'collections'; // 'collections' or 'gallery'
    let currentCollection = null;
    let currentImageIndex = 0;
    let mobile = false;
    let short = 128;
    let smoothX = 0;
    let smoothY = 0;
    let layoutInitialized = false;
    let frameCount = 0;
    // Collection cards for landing page
    let collectionCards = [];
    // Loop optimization
    let needsRedraw = true;
    let animating = false;
    let lastMouseX = 0;
    let lastMouseY = 0;
    // Lightbox state
    let lightboxOpen = false;
    let lightboxImageIndex = 0;
    let lightboxAlpha = 0;
    let targetLightboxAlpha = 0;
    let lightboxAnimating = false;
    let lightboxAnimationStart = 0;
    let lightboxImageLoadStart = 0;
    // Loaded media tracking
    let loadedImages = new Map();
    // Hash change handler
    let hashChangeHandler = null;
    // Gallery event handlers
    let touchStartHandler = null;
    let touchMoveHandler = null;
    let handleGalleryInteraction = null;
    // HUD data
    let sols = 0;
    function updateFadeAnimations() {
        const fadeDuration = 400; // milliseconds
        let hasActiveAnimation = false;
        // Update collection card hero fade animations
        if (mode === 'collections') collectionCards.forEach((card)=>{
            if (card.heroFadeTarget > card.heroFadeAlpha) {
                const elapsed = p.millis() - card.heroFadeStart;
                const progress = p.constrain(elapsed / fadeDuration, 0, 1);
                card.heroFadeAlpha = p.lerp(0, card.heroFadeTarget, progress);
                hasActiveAnimation = true;
                needsRedraw = true;
            }
        });
        return hasActiveAnimation;
    }
    // Cleanup method
    p.cleanupSketch = function() {
        loadedImages.clear();
        if (hashChangeHandler) {
            window.removeEventListener('hashchange', hashChangeHandler);
            hashChangeHandler = null;
        }
        // Clean up gallery event listeners
        if (handleGalleryInteraction) {
            document.removeEventListener('click', handleGalleryInteraction);
            document.removeEventListener('touchend', handleGalleryInteraction);
            document.removeEventListener('touchstart', touchStartHandler);
            document.removeEventListener('touchmove', touchMoveHandler);
        }
        // Clean up global reference
        if (window.photoSketchInstance === p) window.photoSketchInstance = null;
    };
    function initializeLayout() {
        const s = (0, _utils.getViewportSize)();
        short = p.min(s.width, s.height);
        mobile = (0, _utils.widthCheck)(s.width);
        if (mode === 'collections') setupCollectionCards();
        layoutInitialized = true;
        needsRedraw = true;
    }
    p.setup = async function setup() {
        p.noCanvas();
        p.pixelDensity(1);
        const s = (0, _utils.getViewportSize)();
        p.createCanvas(s.width, s.height);
        // Fonts already loaded via CSS
        p.textFont('BPdotsSquareVF', {
            fontVariationSettings: `wght 900`
        });
        // Remove p5 loading div
        let bg = document.getElementById("bg");
        let loading_div = bg.shadowRoot.getElementById("p5_loading");
        if (loading_div) loading_div.remove();
        // Determine mode based on options
        if (options && options.collection) {
            mode = 'gallery';
            currentCollection = (0, _photoCollections.findCollectionBySlug)(options.collection);
            if (!currentCollection) mode = 'collections';
        } else mode = 'collections';
        initializeLayout();
        sols = (0, _utils.daysSince)('2011-07-22');
        // Set up global reference for HTML gallery integration
        window.photoSketchInstance = p;
        // Add methods for HTML gallery integration
        p.openLightbox = openLightbox;
        // Track touch movement to distinguish taps from scrolls
        let touchStartY = null;
        let touchStartTime = null;
        let wasTouchMoved = false;
        touchStartHandler = (event)=>{
            if (event.target.classList.contains('photo-gallery-image')) {
                touchStartY = event.touches[0].clientY;
                touchStartTime = Date.now();
                wasTouchMoved = false;
            }
        };
        touchMoveHandler = (event)=>{
            if (event.target.classList.contains('photo-gallery-image') && touchStartY !== null) {
                const currentY = event.touches[0].clientY;
                const deltaY = Math.abs(currentY - touchStartY);
                // If touch moved more than 10px, consider it a scroll
                if (deltaY > 10) wasTouchMoved = true;
            }
        };
        document.addEventListener('touchstart', touchStartHandler);
        document.addEventListener('touchmove', touchMoveHandler);
        // Add event delegation for gallery image clicks and touches
        handleGalleryInteraction = (event)=>{
            if (event.target.classList.contains('photo-gallery-image')) {
                // Prevent gallery interactions when lightbox is open
                if (lightboxOpen) {
                    event.preventDefault();
                    event.stopPropagation();
                    event.stopImmediatePropagation();
                    return;
                }
                // For touch events, ignore if it was a scroll gesture
                if (event.type === 'touchend') {
                    const touchDuration = Date.now() - touchStartTime;
                    // Ignore if touch moved too much (scroll) or took too long
                    if (wasTouchMoved || touchDuration > 500) {
                        touchStartY = null;
                        touchStartTime = null;
                        wasTouchMoved = false;
                        return;
                    }
                }
                const index = parseInt(event.target.getAttribute('data-lightbox-index'));
                if (!isNaN(index) && mode === 'gallery') {
                    console.log('Opening lightbox for image', index);
                    openLightbox(index);
                }
                // Reset touch tracking
                touchStartY = null;
                touchStartTime = null;
                wasTouchMoved = false;
            }
        };
        document.addEventListener('click', handleGalleryInteraction);
        document.addEventListener('touchend', handleGalleryInteraction);
        // Add hash change listener
        hashChangeHandler = function(event) {
            const newHash = window.location.hash.substr(1);
            const cleanPath = newHash && newHash !== '' ? newHash.startsWith('/') ? newHash : '/' + newHash : '/';
            // Handle navigation back to collections from gallery
            if (cleanPath === '/photo' && mode === 'gallery') {
                mode = 'collections';
                currentCollection = null;
                initializeLayout();
            } else if (cleanPath.startsWith('/photo/') && mode === 'collections') {
                const collectionSlug = cleanPath.replace('/photo/', '');
                const collection = (0, _photoCollections.photoCollections).find((c)=>c.slug === collectionSlug);
                if (collection) {
                    mode = 'gallery';
                    currentCollection = collection;
                    initializeLayout();
                }
            }
        };
        window.addEventListener('hashchange', hashChangeHandler);
        // Force initial draw
        needsRedraw = true;
        p.loop();
    };
    p.draw = function draw() {
        // Always draw background and decorations - we need to see them!
        p.background(23);
        frameCount++;
        // Update smooth cursor
        smoothX = (0, _utils.smoothFollow)(p.mouseX, smoothX, 0.003 * p.deltaTime);
        smoothY = (0, _utils.smoothFollow)(p.mouseY, smoothY, 0.003 * p.deltaTime);
        // Render based on current mode
        if (mode === 'collections') renderCollectionsPage();
        // Always render HUD decorations
        renderHUDDecorations();
        // Update lightbox animation
        if (lightboxAnimating) {
            const elapsed = p.millis() - lightboxAnimationStart;
            const progress = p.constrain(elapsed / 300, 0, 1);
            lightboxAlpha = p.lerp(lightboxAlpha, targetLightboxAlpha, progress);
            if (progress >= 1) {
                lightboxAnimating = false;
                lightboxAlpha = targetLightboxAlpha;
                if (targetLightboxAlpha === 0) lightboxOpen = false;
            }
        }
        // Always render title
        const titleText = mode === 'collections' ? 'PHOTO' : currentCollection ? currentCollection.name : 'GALLERY';
        renderTitle(titleText);
        // Render lightbox if open (on top of everything including title)
        if (lightboxOpen || lightboxAlpha > 0) renderLightbox();
        // Update cursor
        (0, _utils.updateCursor)(p, p.mouseX, p.mouseY, ...getHoverTargets());
        // Check if we need to keep looping
        const mouseMoving = p.mouseX !== lastMouseX || p.mouseY !== lastMouseY;
        const hasActiveAnimations = updateFadeAnimations();
        // Check if we're waiting for a lightbox image to load
        const waitingForLightboxImage = lightboxOpen && currentCollection && lightboxImageIndex < currentCollection.images.length && (!loadedImages.get(currentCollection.images[lightboxImageIndex]) || !loadedImages.get(currentCollection.images[lightboxImageIndex]).loaded);
        animating = lightboxAnimating || hasActiveAnimations || waitingForLightboxImage;
        // Update tracking variables
        lastMouseX = p.mouseX;
        lastMouseY = p.mouseY;
        needsRedraw = false;
        // Only pause loop after a few frames and if nothing is happening
        // Don't pause on mobile if we're in collections mode (for background images)
        // Don't pause if we're waiting for a lightbox image to load
        if (!animating && !mouseMoving && frameCount > 10 && !(mobile && mode === 'collections')) p.noLoop();
    };
    p.windowResized = function windowResized() {
        const s = (0, _utils.getViewportSize)();
        p.resizeCanvas(s.width, s.height);
        initializeLayout();
        p.loop(); // Ensure we redraw after resize
    };
    p.mousePressed = function mousePressed(event) {
        if (event && event.button !== 0) return;
        // Block all interactions if help popup is open
        if (window.helpPopupOpen || window.contactPopupOpen) return;
        needsRedraw = true;
        p.loop();
    };
    p.mouseDragged = function mouseDragged(event) {
        needsRedraw = true;
        p.loop();
    };
    p.mouseReleased = function mouseReleased(event) {
        // Block all interactions if help popup is open
        if (window.helpPopupOpen || window.contactPopupOpen) return;
        // Handle lightbox clicks
        if (lightboxOpen) {
            handleLightboxClick();
            return;
        }
        if (mode === 'collections') handleCollectionsClick();
        needsRedraw = true;
        p.loop();
    };
    p.mouseMoved = function mouseMoved(event) {
        if (p._loop === false) p.loop();
    };
    p.touchStarted = function touchStarted(event) {
        // Block all interactions if help popup is open
        if (window.helpPopupOpen) return false;
        needsRedraw = true;
        p.loop();
        return false;
    };
    p.touchEnded = function touchEnded(event) {
        // Block all interactions if help popup is open
        if (window.helpPopupOpen) return false;
        // Handle lightbox clicks
        if (lightboxOpen) {
            handleLightboxClick();
            return false;
        }
        if (mode === 'collections') handleCollectionsClick();
        needsRedraw = true;
        p.loop();
        return false;
    };
    function setupCollectionCards() {
        collectionCards = [];
        const cardSize = mobile ? p.min(p.width * 0.45, p.height * 0.35) : p.min(p.width * 0.4, p.height * 0.35);
        const spacing = mobile ? 15 : 40;
        const totalWidth = cardSize * 2 + spacing;
        const totalHeight = cardSize * 2 + spacing;
        const startX = (p.width - totalWidth) / 2;
        const startY = (p.height - totalHeight) / 2;
        (0, _photoCollections.photoCollections).forEach((collection, index)=>{
            const row = Math.floor(index / 2);
            const col = index % 2;
            const x = startX + col * (cardSize + spacing);
            const y = startY + row * (cardSize + spacing);
            // Check if hero image is already loaded (use optimized thumbnail for cards)
            const heroImageSrc = collection.heroImageThumb || collection.heroImage;
            const heroLoaded = loadedImages.has(heroImageSrc) && loadedImages.get(heroImageSrc).loaded;
            collectionCards.push({
                collection,
                x,
                y,
                width: cardSize,
                height: cardSize,
                hoverAlpha: mobile ? 1 : 0,
                targetHoverAlpha: mobile ? 1 : 0,
                heroFadeAlpha: heroLoaded ? 255 : 0,
                heroFadeTarget: heroLoaded ? 255 : 0,
                heroFadeStart: heroLoaded ? 0 : p.millis(),
                heroImageSrc: heroImageSrc
            });
            // Load optimized hero thumbnail for this collection
            loadImage(heroImageSrc);
        });
    }
    function renderCollectionsPage() {
        // Collection cards
        collectionCards.forEach((card)=>{
            // Only update hover state on desktop (not mobile)
            if (!mobile) {
                const isHovered = isPointInRect(p.mouseX, p.mouseY, card.x, card.y, card.width, card.height);
                card.targetHoverAlpha = isHovered ? 1 : 0;
                // Smoother fade animation - faster fade in, slower fade out
                card.hoverAlpha = p.lerp(card.hoverAlpha, card.targetHoverAlpha, isHovered ? 0.15 : 0.08);
            } else {
                // On mobile, keep hover state at 1 for better text readability
                card.targetHoverAlpha = 1;
                card.hoverAlpha = 1;
            }
            // Hero image background (use optimized thumbnail for cards)
            const loadedHeroImg = loadedImages.get(card.heroImageSrc);
            if (loadedHeroImg && loadedHeroImg.loaded) {
                p.push();
                p.tint(255, (180 + card.hoverAlpha * 75) * (card.heroFadeAlpha / 255)); // Fade + transparency
                // Crop to square and fit card
                const imgSize = Math.min(loadedHeroImg.element.width, loadedHeroImg.element.height);
                const cropX = (loadedHeroImg.element.width - imgSize) / 2;
                const cropY = (loadedHeroImg.element.height - imgSize) / 2;
                p.image(loadedHeroImg.element, card.x, card.y, card.width, card.height, cropX, cropY, imgSize, imgSize);
                p.pop();
            }
            // Card overlay
            p.fill(30, 30, 35, 150 + card.hoverAlpha * 55);
            // Use lower stroke opacity on mobile, normal hover behavior on desktop
            const strokeAlpha = mobile ? 100 : 100 + card.hoverAlpha * 155;
            p.stroke(230, strokeAlpha);
            p.strokeWeight(2);
            p.rect(card.x, card.y, card.width, card.height);
            // HUD-style corner brackets
            const cornerSize = 20;
            const alpha = strokeAlpha; // Use same stroke alpha for consistency
            renderCornerBrackets(card.x, card.y, card.width, card.height, cornerSize, alpha);
            // Collection title
            p.fill(230, 200 + card.hoverAlpha * 55);
            p.noStroke();
            p.textAlign(p.CENTER, p.CENTER);
            p.textFont('BPdotsSquareVF', {
                fontVariationSettings: `wght 900`
            });
            p.textSize(mobile ? 16 : 24);
            p.text(card.collection.name, card.x + card.width / 2, card.y + card.height / 2 - 15);
            // Description
            p.textFont('ZxGamut', {
                fontVariationSettings: `wght 400`
            });
            p.textSize(mobile ? 11 : 14);
            p.fill(180, 120 + card.hoverAlpha * 135);
            // Split description into lines and center each line manually
            const descWords = card.collection.description.split(' ');
            const maxCharsPerLine = mobile ? 25 : 35;
            let lines = [];
            let currentLine = '';
            for (const word of descWords)if ((currentLine + word).length > maxCharsPerLine && currentLine.length > 0) {
                lines.push(currentLine.trim());
                currentLine = word + ' ';
            } else currentLine += word + ' ';
            if (currentLine.length > 0) lines.push(currentLine.trim());
            // Render each line centered
            p.textAlign(p.CENTER, p.CENTER);
            const lineHeight = mobile ? 12 : 18;
            const startY = card.y + card.height / 2 + 20 - (lines.length - 1) * lineHeight / 2;
            lines.forEach((line, index)=>{
                p.text(line, card.x + card.width / 2, startY + index * lineHeight);
            });
        });
    }
    function renderLightbox() {
        if (!currentCollection || lightboxImageIndex >= currentCollection.images.length) return;
        // Dark overlay
        p.fill(0, 0, 0, 200 * (lightboxAlpha / 255));
        p.noStroke();
        p.rect(0, 0, p.width, p.height);
        const imagePath = currentCollection.images[lightboxImageIndex];
        const loadedImg = loadedImages.get(imagePath);
        // Render image if loaded
        if (loadedImg && loadedImg.loaded) {
            // Calculate image size to fit screen
            const maxWidth = p.width * 0.9;
            const maxHeight = p.height * 0.8;
            const aspectRatio = loadedImg.element.width / loadedImg.element.height;
            let imgWidth, imgHeight;
            if (aspectRatio > maxWidth / maxHeight) {
                imgWidth = maxWidth;
                imgHeight = maxWidth / aspectRatio;
            } else {
                imgHeight = maxHeight;
                imgWidth = maxHeight * aspectRatio;
            }
            const imgX = (p.width - imgWidth) / 2;
            const imgY = (p.height - imgHeight) / 2;
            // Render image
            p.push();
            p.tint(255, lightboxAlpha);
            p.image(loadedImg.element, imgX, imgY, imgWidth, imgHeight);
            p.pop();
        } else {
            // Load image if not already loaded
            loadImage(imagePath);
            // Start timing if not already started for this image
            if (lightboxImageLoadStart === 0) lightboxImageLoadStart = p.millis();
            // Only show loading indicator after 1 second
            const loadingTime = p.millis() - lightboxImageLoadStart;
            if (loadingTime > 1000) {
                // Show elegant loading indicator
                const centerX = p.width / 2;
                const centerY = p.height / 2;
                // Animated loading dots
                const dotCount = 3;
                const dotSpacing = 20;
                const dotRadius = 4;
                const animSpeed = 0.003;
                const totalWidth = (dotCount - 1) * dotSpacing;
                const startX = centerX - totalWidth / 2;
                p.noStroke();
                for(let i = 0; i < dotCount; i++){
                    const phase = (p.millis() * animSpeed + i * 0.5) % (Math.PI * 2);
                    const alpha = (Math.sin(phase) + 1) * 0.5; // Oscillate between 0 and 1
                    const dotAlpha = (100 + alpha * 155) * (lightboxAlpha / 255);
                    p.fill(230, dotAlpha);
                    p.circle(startX + i * dotSpacing, centerY, dotRadius * 2);
                }
                // Loading text
                p.fill(230, 120 * (lightboxAlpha / 255));
                p.textAlign(p.CENTER, p.CENTER);
                p.textFont('BPdotsSquareVF', {
                    fontVariationSettings: `wght 600`
                });
                p.textSize(14);
                p.text('LOADING', centerX, centerY + 30);
            }
        }
        // Always render UI elements (counter and arrows) - this prevents flickering
        const staticY = p.height - 70;
        // Image counter (centered)
        p.fill(230, lightboxAlpha);
        p.noStroke();
        p.textAlign(p.CENTER, p.CENTER);
        p.textFont('BPdotsSquareVF', {
            fontVariationSettings: `wght 600`
        });
        p.textSize(16);
        p.text(`${lightboxImageIndex + 1} / ${currentCollection.images.length}`, p.width / 2, staticY);
        // Navigation arrows with static position and wrapping
        if (currentCollection.images.length > 1) {
            const arrowSize = 35;
            const arrowSpacing = 80;
            // Left arrow
            const leftX = p.width / 2 - arrowSpacing - arrowSize / 2;
            p.fill(23, 23, 23, 200 * (lightboxAlpha / 255));
            p.stroke(230, lightboxAlpha);
            p.strokeWeight(2);
            p.rect(leftX, staticY - arrowSize / 2, arrowSize, arrowSize);
            p.fill(230, lightboxAlpha);
            p.noStroke();
            p.triangle(leftX + arrowSize * 0.3, staticY, leftX + arrowSize * 0.7, staticY - arrowSize * 0.2, leftX + arrowSize * 0.7, staticY + arrowSize * 0.2);
            // Right arrow
            const rightX = p.width / 2 + arrowSpacing - arrowSize / 2;
            p.fill(23, 23, 23, 200 * (lightboxAlpha / 255));
            p.stroke(230, lightboxAlpha);
            p.strokeWeight(2);
            p.rect(rightX, staticY - arrowSize / 2, arrowSize, arrowSize);
            p.fill(230, lightboxAlpha);
            p.noStroke();
            p.triangle(rightX + arrowSize * 0.7, staticY, rightX + arrowSize * 0.3, staticY - arrowSize * 0.2, rightX + arrowSize * 0.3, staticY + arrowSize * 0.2);
        }
    }
    function renderTitle(title) {
        const titleY = mobile ? 20 : 30;
        const titleSize = mobile ? 20 : 32;
        p.fill(255, 200);
        p.noStroke();
        p.textAlign(p.CENTER, p.TOP);
        p.textFont('BPdotsSquareVF', {
            fontVariationSettings: `wght 900`
        });
        p.textSize(titleSize);
        p.text(title, p.width / 2, titleY);
        // Underline decoration
        const textWidth = p.textWidth(title);
        p.stroke(255, 120);
        p.strokeWeight(1);
        p.line(p.width / 2 - textWidth / 2 - 8, titleY + titleSize + 8, p.width / 2 + textWidth / 2 + 8, titleY + titleSize + 8);
    }
    function renderCornerBrackets(x, y, w, h, cornerSize, alpha) {
        p.stroke(255, alpha);
        p.strokeWeight(2);
        p.noFill();
        const corners = [
            [
                x,
                y
            ],
            [
                x + w,
                y
            ],
            [
                x + w,
                y + h
            ],
            [
                x,
                y + h
            ] // bottom-left
        ];
        corners.forEach(([cx, cy], index)=>{
            const xDir = index === 0 || index === 3 ? 1 : -1;
            const yDir = index === 0 || index === 1 ? 1 : -1;
            // Horizontal line
            p.line(cx, cy, cx + xDir * cornerSize, cy);
            // Vertical line
            p.line(cx, cy, cx, cy + yDir * cornerSize);
        });
    }
    function renderHUDDecorations() {
        const margin = mobile ? 10 : 40;
        const cornerSize = mobile ? 20 : 30;
        const alpha = 100;
        p.stroke(255, alpha);
        p.strokeWeight(1);
        p.strokeCap(p.SQUARE);
        p.noFill();
        // Screen corners
        const corners = [
            [
                margin,
                margin
            ],
            [
                p.width - margin,
                margin
            ],
            [
                p.width - margin,
                p.height - margin
            ],
            [
                margin,
                p.height - margin
            ] // bottom-left
        ];
        corners.forEach(([x, y], index)=>{
            const xDir = index === 0 || index === 3 ? 1 : -1;
            const yDir = index === 0 || index === 1 ? 1 : -1;
            p.line(x, y, x + xDir * cornerSize, y);
            p.line(x, y, x, y + yDir * cornerSize);
        });
        // Status text
        p.fill(255, alpha * 0.6);
        p.noStroke();
        p.textAlign(p.LEFT, p.TOP);
        p.textFont('BPdotsSquareVF', {
            fontVariationSettings: `wght 900`
        });
        p.textSize(mobile ? 8 : 11);
        const step = mobile ? 10 : 13;
        p.text("SYS: ACTIVE", margin + 0.5 * cornerSize, margin + 1 * step);
        p.text("SOL: " + sols.toString(), margin + 0.5 * cornerSize, margin + 2 * step);
        p.text("MODE: PHOTO", margin + 0.5 * cornerSize, margin + 3 * step);
    }
    function handleCollectionsClick() {
        collectionCards.forEach((card)=>{
            if (isPointInRect(p.mouseX, p.mouseY, card.x, card.y, card.width, card.height)) {
                // Navigate to collection gallery
                const newPath = `/photo/${card.collection.slug}`;
                if (window.appRouter) window.appRouter.navigate(newPath);
                else {
                    window.history.pushState(null, '', `#${newPath}`);
                    mode = 'gallery';
                    currentCollection = card.collection;
                    initializeLayout();
                    // Update breadcrumb
                    require("185e140badf11452").then(({ updateBreadcrumb })=>{
                        updateBreadcrumb(newPath);
                    });
                }
            }
        });
    }
    function handleLightboxClick() {
        if (!currentCollection) return;
        const imagePath = currentCollection.images[lightboxImageIndex];
        const loadedImg = loadedImages.get(imagePath);
        if (loadedImg && loadedImg.loaded) {
            const maxWidth = p.width * 0.9;
            const maxHeight = p.height * 0.8;
            const aspectRatio = loadedImg.element.width / loadedImg.element.height;
            let imgWidth, imgHeight;
            if (aspectRatio > maxWidth / maxHeight) {
                imgWidth = maxWidth;
                imgHeight = maxWidth / aspectRatio;
            } else {
                imgHeight = maxHeight;
                imgWidth = maxHeight * aspectRatio;
            }
            const imgX = (p.width - imgWidth) / 2;
            const imgY = (p.height - imgHeight) / 2;
            // Navigation arrows with static position and wrapping
            if (currentCollection.images.length > 1) {
                const arrowSize = 35;
                const staticY = p.height - 70;
                const arrowSpacing = 80;
                // Left arrow
                const leftX = p.width / 2 - arrowSpacing - arrowSize / 2;
                if (isPointInRect(p.mouseX, p.mouseY, leftX, staticY - arrowSize / 2, arrowSize, arrowSize)) {
                    lightboxImageIndex = lightboxImageIndex === 0 ? currentCollection.images.length - 1 : lightboxImageIndex - 1;
                    lightboxImageLoadStart = 0; // Reset loading timer for new image
                    needsRedraw = true;
                    lightboxAnimating = true; // Force animation state
                    lightboxAnimationStart = p.millis(); // Reset animation timer
                    p.loop(); // Force redraw immediately
                    return;
                }
                // Right arrow
                const rightX = p.width / 2 + arrowSpacing - arrowSize / 2;
                if (isPointInRect(p.mouseX, p.mouseY, rightX, staticY - arrowSize / 2, arrowSize, arrowSize)) {
                    lightboxImageIndex = lightboxImageIndex === currentCollection.images.length - 1 ? 0 : lightboxImageIndex + 1;
                    lightboxImageLoadStart = 0; // Reset loading timer for new image
                    needsRedraw = true;
                    lightboxAnimating = true; // Force animation state
                    lightboxAnimationStart = p.millis(); // Reset animation timer
                    p.loop(); // Force redraw immediately
                    return;
                }
            }
            // Click outside image closes lightbox
            if (!isPointInRect(p.mouseX, p.mouseY, imgX, imgY, imgWidth, imgHeight)) closeLightbox();
        }
    }
    function openLightbox(imageIndex) {
        lightboxOpen = true;
        lightboxImageIndex = imageIndex;
        lightboxImageLoadStart = 0; // Reset loading timer for initial image
        targetLightboxAlpha = 255;
        lightboxAnimationStart = p.millis();
        lightboxAnimating = true;
        needsRedraw = true;
        p.loop();
        // Hide HTML gallery when lightbox opens
        const galleryContainer = document.querySelector('.photo-gallery-container');
        if (galleryContainer) galleryContainer.classList.add('lightbox-hidden');
        // Add class to body for CSS targeting
        document.body.classList.add('lightbox-active');
        // Hide help and contact buttons when lightbox opens
        const helpContainer = document.getElementById("help-container");
        const contactContainer = document.getElementById("contact-container");
        if (helpContainer) helpContainer.style.display = 'none';
        if (contactContainer) contactContainer.style.display = 'none';
        // Update theme color for iOS status bar to match dimmed overlay
        const themeColorMeta = document.querySelector('meta[name="theme-color"]');
        if (themeColorMeta) themeColorMeta.content = '#000000'; // Dark color to match overlay
    }
    function closeLightbox() {
        targetLightboxAlpha = 0;
        lightboxAnimationStart = p.millis();
        lightboxAnimating = true;
        needsRedraw = true;
        p.loop();
        // Show HTML gallery with smooth transition (no delay needed with opacity)
        const galleryContainer = document.querySelector('.photo-gallery-container');
        if (galleryContainer) galleryContainer.classList.remove('lightbox-hidden');
        // Remove class from body
        document.body.classList.remove('lightbox-active');
        // Show help and contact buttons when lightbox closes
        const helpContainer = document.getElementById("help-container");
        const contactContainer = document.getElementById("contact-container");
        if (helpContainer) helpContainer.style.display = 'block';
        if (contactContainer) contactContainer.style.display = 'block';
        // Restore original theme color for iOS status bar
        const themeColorMeta = document.querySelector('meta[name="theme-color"]');
        if (themeColorMeta) themeColorMeta.content = '#171717'; // Back to original dark theme
    }
    function loadImage(imagePath) {
        if (loadedImages.has(imagePath)) return;
        loadedImages.set(imagePath, {
            element: null,
            loaded: false
        });
        p.loadImage(imagePath, (img)=>{
            loadedImages.set(imagePath, {
                element: img,
                loaded: true
            });
            // Trigger hero fade animation for collection cards
            if (mode === 'collections') collectionCards.forEach((card)=>{
                if (card.heroImageSrc === imagePath) {
                    card.heroFadeTarget = 255;
                    card.heroFadeStart = p.millis();
                }
            });
            // Force redraw when image loads (important for lightbox images)
            needsRedraw = true;
            if (p._loop === false) p.loop();
        }, (err)=>{
            console.warn('Failed to load image:', imagePath, err);
            // Even on error, force a redraw to update the loading state
            needsRedraw = true;
            if (p._loop === false) p.loop();
        });
    }
    function getHoverTargets() {
        // Return hover check functions for cursor management
        const targets = [];
        if (mode === 'collections') // Add collection card hover checks
        collectionCards.forEach((card)=>{
            targets.push(()=>isPointInRect(p.mouseX, p.mouseY, card.x, card.y, card.width, card.height));
        });
        else if (lightboxOpen && currentCollection && currentCollection.images.length > 1) {
            // Add lightbox navigation arrow hover checks
            const arrowSize = 35;
            const staticY = p.height - 70;
            const arrowSpacing = 80;
            // Left arrow
            const leftX = p.width / 2 - arrowSpacing - arrowSize / 2;
            targets.push(()=>isPointInRect(p.mouseX, p.mouseY, leftX, staticY - arrowSize / 2, arrowSize, arrowSize));
            // Right arrow
            const rightX = p.width / 2 + arrowSpacing - arrowSize / 2;
            targets.push(()=>isPointInRect(p.mouseX, p.mouseY, rightX, staticY - arrowSize / 2, arrowSize, arrowSize));
        }
        return targets;
    }
    function isPointInRect(px, py, x, y, w, h) {
        return px >= x && px <= x + w && py >= y && py <= y + h;
    }
};
const photoSketch = (node, options = {})=>{
    return new p5((p)=>sketch(p, options), node);
};

},{"../../utils":"khuqI","./photo-collections":"8dWWn","185e140badf11452":"bRtiW","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["cjUtm","yKjs8"], "yKjs8", "parcelRequire905d", {})

//# sourceMappingURL=blap64.d3f39b8d.js.map
