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
  function $parcel$resolve(url) {  url = importMap[url] || url;  return import.meta.resolve(distDir + url);}newRequire.resolve = $parcel$resolve;

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
})({"kr6hb":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 4321;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "336a66e003526cbe";
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

},{}],"hh14x":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _reactiveElement = require("@lit/reactive-element");
var _litHtml = require("lit-html");
var _litElementJs = require("lit-element/lit-element.js");
parcelHelpers.exportAll(_litElementJs, exports);
var _isServerJs = require("lit-html/is-server.js");
parcelHelpers.exportAll(_isServerJs, exports);

},{"@lit/reactive-element":"c9cs8","lit-html":"l15as","lit-element/lit-element.js":"aJ236","lit-html/is-server.js":"4BoSu","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"c9cs8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSResult", ()=>(0, _cssTagJs.CSSResult));
parcelHelpers.export(exports, "css", ()=>(0, _cssTagJs.css));
parcelHelpers.export(exports, "supportsAdoptingStyleSheets", ()=>(0, _cssTagJs.supportsAdoptingStyleSheets));
parcelHelpers.export(exports, "unsafeCSS", ()=>(0, _cssTagJs.unsafeCSS));
parcelHelpers.export(exports, "ReactiveElement", ()=>y);
parcelHelpers.export(exports, "adoptStyles", ()=>(0, _cssTagJs.adoptStyles));
parcelHelpers.export(exports, "defaultConverter", ()=>u);
parcelHelpers.export(exports, "getCompatibleStyle", ()=>(0, _cssTagJs.getCompatibleStyle));
parcelHelpers.export(exports, "notEqual", ()=>f);
var _cssTagJs = require("./css-tag.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: i, defineProperty: e, getOwnPropertyDescriptor: h, getOwnPropertyNames: r, getOwnPropertySymbols: o, getPrototypeOf: n } = Object, a = globalThis, c = a.trustedTypes, l = c ? c.emptyScript : "", p = a.reactiveElementPolyfillSupport, d = (t, s)=>t, u = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? l : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, s) {
        let i = t;
        switch(s){
            case Boolean:
                i = null !== t;
                break;
            case Number:
                i = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    i = JSON.parse(t);
                } catch (t) {
                    i = null;
                }
        }
        return i;
    }
}, f = (t, s)=>!i(t, s), b = {
    attribute: !0,
    type: String,
    converter: u,
    reflect: !1,
    useDefault: !1,
    hasChanged: f
};
Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= new WeakMap;
class y extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = b) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((s = Object.create(s)).wrapped = !0), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), h = this.getPropertyDescriptor(t, i, s);
            void 0 !== h && e(this.prototype, t, h);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        const { get: e, set: r } = h(this.prototype, t) ?? {
            get () {
                return this[s];
            },
            set (t) {
                this[s] = t;
            }
        };
        return {
            get: e,
            set (s) {
                const h = e?.call(this);
                r?.call(this, s), this.requestUpdate(t, h, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? b;
    }
    static _$Ei() {
        if (this.hasOwnProperty(d("elementProperties"))) return;
        const t = n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty(d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(d("properties"))) {
            const t = this.properties, s = [
                ...r(t),
                ...o(t)
            ];
            for (const i of s)this.createProperty(i, t[i]);
        }
        const t = this[Symbol.metadata];
        if (null !== t) {
            const s = litPropertyMetadata.get(t);
            if (void 0 !== s) for (const [t, i] of s)this.elementProperties.set(t, i);
        }
        this._$Eh = new Map;
        for (const [t, s] of this.elementProperties){
            const i = this._$Eu(t, s);
            void 0 !== i && this._$Eh.set(i, t);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
        const i = [];
        if (Array.isArray(s)) {
            const e = new Set(s.flat(1 / 0).reverse());
            for (const s of e)i.unshift((0, _cssTagJs.getCompatibleStyle)(s));
        } else void 0 !== s && i.push((0, _cssTagJs.getCompatibleStyle)(s));
        return i;
    }
    static _$Eu(t, s) {
        const i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    constructor(){
        super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
    _$Ev() {
        this._$ES = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t)=>t(this));
    }
    addController(t) {
        (this._$EO ??= new Set).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
    }
    removeController(t) {
        this._$EO?.delete(t);
    }
    _$E_() {
        const t = new Map, s = this.constructor.elementProperties;
        for (const i of s.keys())this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
        t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
        const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return (0, _cssTagJs.adoptStyles)(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t)=>t.hostConnected?.());
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this._$EO?.forEach((t)=>t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
    }
    _$ET(t, s) {
        const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
        if (void 0 !== e && !0 === i.reflect) {
            const h = (void 0 !== i.converter?.toAttribute ? i.converter : u).toAttribute(s, i.type);
            this._$Em = t, null == h ? this.removeAttribute(e) : this.setAttribute(e, h), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            const t = i.getPropertyOptions(e), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== t.converter?.fromAttribute ? t.converter : u;
            this._$Em = e, this[e] = h.fromAttribute(s, t.type) ?? this._$Ej?.get(e) ?? null, this._$Em = null;
        }
    }
    requestUpdate(t, s, i) {
        if (void 0 !== t) {
            const e = this.constructor, h = this[t];
            if (i ??= e.getPropertyOptions(t), !((i.hasChanged ?? f)(h, s) || i.useDefault && i.reflect && h === this._$Ej?.get(t) && !this.hasAttribute(e._$Eu(t, i)))) return;
            this.C(t, s, i);
        }
        !1 === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t, s, { useDefault: i, reflect: e, wrapped: h }, r) {
        i && !(this._$Ej ??= new Map).has(t) && (this._$Ej.set(t, r ?? s ?? this[t]), !0 !== h || void 0 !== r) || (this._$AL.has(t) || (this.hasUpdated || i || (s = void 0), this._$AL.set(t, s)), !0 === e && this._$Em !== t && (this._$Eq ??= new Set).add(t));
    }
    async _$EP() {
        this.isUpdatePending = !0;
        try {
            await this._$ES;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
                for (const [t, s] of this._$Ep)this[t] = s;
                this._$Ep = void 0;
            }
            const t = this.constructor.elementProperties;
            if (t.size > 0) for (const [s, i] of t){
                const { wrapped: t } = i, e = this[s];
                !0 !== t || this._$AL.has(s) || void 0 === e || this.C(s, void 0, i, e);
            }
        }
        let t = !1;
        const s = this._$AL;
        try {
            t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach((t)=>t.hostUpdate?.()), this.update(s)) : this._$EM();
        } catch (s) {
            throw t = !1, this._$EM(), s;
        }
        t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        this._$EO?.forEach((t)=>t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$EM() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$ES;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this._$Eq &&= this._$Eq.forEach((t)=>this._$ET(t, this[t])), this._$EM();
    }
    updated(t) {}
    firstUpdated(t) {}
}
y.elementStyles = [], y.shadowRootOptions = {
    mode: "open"
}, y[d("elementProperties")] = new Map, y[d("finalized")] = new Map, p?.({
    ReactiveElement: y
}), (a.reactiveElementVersions ??= []).push("2.1.0");

},{"./css-tag.js":"8ZIf7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8ZIf7":[function(require,module,exports,__globalThis) {
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSResult", ()=>n);
parcelHelpers.export(exports, "adoptStyles", ()=>S);
parcelHelpers.export(exports, "css", ()=>i);
parcelHelpers.export(exports, "getCompatibleStyle", ()=>c);
parcelHelpers.export(exports, "supportsAdoptingStyleSheets", ()=>e);
parcelHelpers.export(exports, "unsafeCSS", ()=>r);
const t = globalThis, e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s = Symbol(), o = new WeakMap;
class n {
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if (e && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const r = (t)=>new n("string" == typeof t ? t : t + "", void 0, s), i = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new n(o, t, s);
}, S = (s, o)=>{
    if (e) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, c = e ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return r(e);
    })(t) : t;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
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
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"l15as":[function(require,module,exports,__globalThis) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_$LH", ()=>Z);
parcelHelpers.export(exports, "html", ()=>x);
parcelHelpers.export(exports, "mathml", ()=>w);
parcelHelpers.export(exports, "noChange", ()=>T);
parcelHelpers.export(exports, "nothing", ()=>E);
parcelHelpers.export(exports, "render", ()=>B);
parcelHelpers.export(exports, "svg", ()=>b);
const t = globalThis, i = t.trustedTypes, s = i ? i.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, e = "$lit$", h = `lit$${Math.random().toFixed(9).slice(2)}$`, o = "?" + h, n = `<${o}>`, r = document, l = ()=>r.createComment(""), c = (t)=>null === t || "object" != typeof t && "function" != typeof t, a = Array.isArray, u = (t)=>a(t) || "function" == typeof t?.[Symbol.iterator], d = "[ \t\n\f\r]", f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, _ = />/g, m = RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), p = /'/g, g = /"/g, $ = /^(?:script|style|textarea|title)$/i, y = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), x = y(1), b = y(2), w = y(3), T = Symbol.for("lit-noChange"), E = Symbol.for("lit-nothing"), A = new WeakMap, C = r.createTreeWalker(r, 129);
function P(t, i) {
    if (!a(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== s ? s.createHTML(i) : i;
}
const V = (t, i)=>{
    const s = t.length - 1, o = [];
    let r, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, y = 0;
        for(; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);)y = c.lastIndex, c === f ? "!--" === u[1] ? c = v : void 0 !== u[1] ? c = _ : void 0 !== u[2] ? ($.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = m) : void 0 !== u[3] && (c = m) : c === m ? ">" === u[0] ? (c = r ?? f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? m : '"' === u[3] ? g : p) : c === g || c === p ? c = m : c === v || c === _ ? c = f : (c = m, r = void 0);
        const x = c === m && t[i + 1].startsWith("/>") ? " " : "";
        l += c === f ? s + n : d >= 0 ? (o.push(a), s.slice(0, d) + e + s.slice(d) + h + x) : s + h + (-2 === d ? i : x);
    }
    return [
        P(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")),
        o
    ];
};
class N {
    constructor({ strings: t, _$litType$: s }, n){
        let r;
        this.parts = [];
        let c = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = V(t, s);
        if (this.el = N.createElement(f, n), C.currentNode = this.el.content, 2 === s || 3 === s) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = C.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith(e)) {
                    const i = v[a++], s = r.getAttribute(t).split(h), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: c,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? H : "?" === e[1] ? I : "@" === e[1] ? L : k
                    }), r.removeAttribute(t);
                } else t.startsWith(h) && (d.push({
                    type: 6,
                    index: c
                }), r.removeAttribute(t));
                if ($.test(r.tagName)) {
                    const t = r.textContent.split(h), s = t.length - 1;
                    if (s > 0) {
                        r.textContent = i ? i.emptyScript : "";
                        for(let i = 0; i < s; i++)r.append(t[i], l()), C.nextNode(), d.push({
                            type: 2,
                            index: ++c
                        });
                        r.append(t[s], l());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === o) d.push({
                    type: 2,
                    index: c
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf(h, t + 1));)d.push({
                        type: 7,
                        index: c
                    }), t += h.length - 1;
                }
            }
            c++;
        }
    }
    static createElement(t, i) {
        const s = r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function S(t, i, s = t, e) {
    if (i === T) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = c(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = S(t, h._$AS(t, i.values), h, e)), i;
}
class M {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? r).importNode(i, !0);
        C.currentNode = e;
        let h = C.nextNode(), o = 0, n = 0, l = s[0];
        for(; void 0 !== l;){
            if (o === l.index) {
                let i;
                2 === l.type ? i = new R(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new z(h, this, t)), this._$AV.push(i), l = s[++n];
            }
            o !== l?.index && (h = C.nextNode(), o++);
        }
        return C.currentNode = r, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class R {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = S(this, t, i), c(t) ? t === E || null == t || "" === t ? (this._$AH !== E && this._$AR(), this._$AH = E) : t !== this._$AH && t !== T && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : u(t) ? this.k(t) : this._(t);
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
        this._$AH !== E && c(this._$AH) ? this._$AA.nextSibling.data = t : this.T(r.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = N.createElement(P(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new M(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = A.get(t.strings);
        return void 0 === i && A.set(t.strings, i = new N(t)), i;
    }
    k(t) {
        a(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new R(this.O(l()), this.O(l()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        for(this._$AP?.(!1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
}
class k {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = E;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = S(this, t, i, 0), o = !c(t) || t !== this._$AH && t !== T, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = S(this, e[s + n], i, n), r === T && (r = this._$AH[n]), o ||= !c(r) || r !== this._$AH[n], r === E ? t = E : t !== E && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class H extends k {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === E ? void 0 : t;
    }
}
class I extends k {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== E);
    }
}
class L extends k {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = S(this, t, i, 0) ?? E) === T) return;
        const s = this._$AH, e = t === E && s !== E || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== E && (s === E || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        S(this, t);
    }
}
const Z = {
    M: e,
    P: h,
    A: o,
    C: 1,
    L: V,
    R: M,
    D: u,
    V: S,
    I: R,
    H: k,
    N: I,
    U: L,
    B: H,
    F: z
}, j = t.litHtmlPolyfillSupport;
j?.(N, R), (t.litHtmlVersions ??= []).push("3.3.0");
const B = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new R(i.insertBefore(l(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aJ236":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LitElement", ()=>i);
parcelHelpers.export(exports, "_$LE", ()=>n);
var _reactiveElement = require("@lit/reactive-element");
parcelHelpers.exportAll(_reactiveElement, exports);
var _litHtml = require("lit-html");
parcelHelpers.exportAll(_litHtml, exports);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const s = globalThis;
class i extends (0, _reactiveElement.ReactiveElement) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        const t = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t.firstChild, t;
    }
    update(t) {
        const r = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, _litHtml.render)(r, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(!0);
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(!1);
    }
    render() {
        return 0, _litHtml.noChange;
    }
}
i._$litElement$ = !0, i["finalized"] = !0, s.litElementHydrateSupport?.({
    LitElement: i
});
const o = s.litElementPolyfillSupport;
o?.({
    LitElement: i
});
const n = {
    _$AK: (t, e, r)=>{
        t._$AK(e, r);
    },
    _$AL: (t)=>t._$AL
};
(s.litElementVersions ??= []).push("4.2.0");

},{"@lit/reactive-element":"c9cs8","lit-html":"l15as","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4BoSu":[function(require,module,exports,__globalThis) {
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isServer", ()=>o);
const o = !1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4i6Cg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "localSketches", ()=>localSketches);
var _lit = require("lit");
// Import local sketch functions
var _dimensionDoorJs = require("./sketches/dimension-door.js");
var _strangeInkJs = require("./sketches/strange-ink.js");
var _koiPondJs = require("./sketches/koi-pond.js");
var _lavaLampJs = require("./sketches/lava-lamp/lava-lamp.js");
var _infiniteBauhausJs = require("./sketches/infinite-bauhaus.js");
var _galaxyCollisionJs = require("./sketches/galaxy-collision.js");
var _flowFieldsJs = require("./sketches/flow-fields.js");
var _asteroidsJs = require("./sketches/asteroids.js");
var _nissan300ZxJs = require("./sketches/nissan-300zx.js");
const localSketches = {
    'dimension-door': (0, _dimensionDoorJs.sketch),
    'strange-ink': (0, _strangeInkJs.sketch),
    'koi-pond': (0, _koiPondJs.sketch),
    'lava-lamp': (0, _lavaLampJs.sketch),
    'infinite-bauhaus': (0, _infiniteBauhausJs.sketch),
    'galaxy-collision': (0, _galaxyCollisionJs.sketch),
    'flow-fields': (0, _flowFieldsJs.sketch),
    'asteroids': (0, _asteroidsJs.sketch),
    'nissan-300zx': (0, _nissan300ZxJs.sketch)
};
exports.default = (props)=>(0, _lit.html)`
    <p5-element id="bg" sketch="webexperiences"></p5-element>
`;

},{"lit":"hh14x","./sketches/dimension-door.js":"g2DxV","./sketches/strange-ink.js":"6DhJG","./sketches/koi-pond.js":"hT0os","./sketches/lava-lamp/lava-lamp.js":"bzWAL","./sketches/infinite-bauhaus.js":"hsWJe","./sketches/galaxy-collision.js":"4uwSY","./sketches/flow-fields.js":"aRRF0","./sketches/asteroids.js":"bWMKx","./sketches/nissan-300zx.js":"icg6d","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"g2DxV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sketch", ()=>sketch);
const sketch = function(p, options = {}) {
    let buff0, buff1;
    let palette;
    let start_y, end_y, start_x, end_x;
    let n_x, n_y;
    let x_increment, y_increment;
    p.setup = function() {
        p.frameRate(60);
        const containerWidth = p._userNode ? p._userNode.clientWidth : 800;
        const containerHeight = p._userNode ? p._userNode.clientHeight : 600;
        p.createCanvas(containerWidth, containerHeight, p.WEBGL);
        buff0 = p.createFramebuffer(p.width, p.height);
        buff1 = p.createFramebuffer(p.width, p.height);
        p.imageMode(p.CENTER);
        p.colorMode(p.HSB);
        p.rectMode(p.CENTER);
        p.noStroke();
        start_y = p.height * 0.1;
        end_y = p.height * 0.9;
        start_x = p.width / 4.0;
        end_x = 3.0 * start_x;
        n_x = 36;
        n_y = n_x * p.height / p.width;
        x_increment = (end_x - start_x) / n_x;
        y_increment = (end_y - start_y) / n_y;
        palette = [
            p.color('#D81159'),
            p.color('#8F2D56'),
            p.color('#218380'),
            p.color('#FBB13C'),
            p.color('#73D2DE')
        ];
    };
    p.draw = function() {
        [buff0, buff1] = [
            buff1,
            buff0
        ];
        let t = p.frameCount / 14;
        buff1.begin();
        p.clear();
        p.push();
        p.rotate(0.25 * wobbly(2.3 * t, p.createVector(0, 0)));
        p.scale(0.85 + 0.1 * wobbly(1.7 * t, p.createVector(0, 0)));
        p.image(buff0, 0, 0);
        p.pop();
        for(let j = 0; j < n_y; j++)for(let i = 0; i < n_x; i++){
            let pt = p.createVector(i * x_increment, j * y_increment);
            let c = palette[j % palette.length];
            c.setAlpha(255 * j / n_y);
            p.fill(c);
            p.square(1.45 * start_x * wobbly(t, pt), start_y * 4.2 * wobbly(t + 9999, pt), 2 + p.width / 100 * (1 + i * j % 3));
        }
        buff1.end();
        p.background(5);
        p.image(buff1, 0, 0);
    };
    function wobbly(t, pt) {
        return p.sin(t / 11.0 + pt.x * 2.3 - p.sin(t / 4.2 - pt.y * 32.4) + p.sin(t / 23.14 + 13.2 * p.sin(t / 51.2)));
    }
    p.windowResized = function() {
        p.setup();
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6DhJG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sketch", ()=>sketch);
const sketch = function(p, options = {}) {
    let fboA, fboB;
    let fill_color;
    let short_side, long_side;
    let n_circles;
    let leftPressed, rightPressed;
    p.setup = function() {
        p.frameRate(60);
        const containerWidth = p._userNode ? p._userNode.clientWidth : 800;
        const containerHeight = p._userNode ? p._userNode.clientHeight : 600;
        p.createCanvas(containerWidth, containerHeight, p.WEBGL);
        short_side = p.min(p.width, p.height);
        long_side = p.max(p.width, p.height);
        p.noStroke();
        fill_color = 0;
        p.fill(fill_color);
        n_circles = 42;
        fboA = p.createFramebuffer({
            format: p.FLOAT
        });
        fboB = p.createFramebuffer({
            format: p.FLOAT
        });
        fboA.begin();
        p.background(255);
        p.circle(p.width / 4, 0, p.width / 8);
        p.circle(-p.width / 4, 0, p.width / 8);
        fboA.end();
        leftPressed = false;
        rightPressed = false;
    };
    p.draw = function() {
        p.background(255);
        [fboA, fboB] = [
            fboB,
            fboA
        ];
        fboA.begin();
        p.image(fboB, -p.width / 2, -p.height / 2, p.width, p.height);
        if (p.mouseIsPressed) p.circle(p.mouseX - p.width / 2, p.mouseY - p.height / 2, 0.03 * long_side);
        // This is the magic :)
        // Blur the image heavily to create gradients wherever the circles are
        p.filter(p.BLUR, 5 + p.map(p.width, 1024, 1920, -1, 2));
        // Threshold to create defined blobs from those gradient regions
        p.filter(p.THRESHOLD, 0.51);
        fboA.end();
        p.image(fboA, -p.width / 2, -p.height / 2, p.width, p.height);
        // Blur again a little bit to smooth things out
        p.filter(p.BLUR, 4);
    };
    p.doubleClicked = function() {
        if (fill_color == 0) fill_color = 255;
        else fill_color = 0;
        p.fill(fill_color);
    };
    p.windowResized = function() {
        p.setup();
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hT0os":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sketch", ()=>sketch);
const sketch = function(p, options = {}) {
    let chain;
    let n_fish = 88;
    let fish = [];
    let scale_factor;
    let weight = 5;
    let bg_colours = [
        '#3673AC'
    ];
    let n_lilypads = 44;
    let lilypads = [];
    const default_lilypad_size = 100;
    let n_blobs = 3;
    p.setup = function() {
        p.frameRate(60);
        fish = [];
        lilypads = [];
        const containerWidth = p._userNode ? p._userNode.clientWidth : 800;
        const containerHeight = p._userNode ? p._userNode.clientHeight : 600;
        p.createCanvas(containerWidth, containerHeight);
        p.colorMode(p.HSB);
        p.strokeJoin(p.ROUND);
        scale_factor = p.min(p.width, p.height) / 1440;
        weight *= scale_factor;
        p.strokeWeight(weight);
        let sizes = [
            16,
            50,
            50,
            36,
            18,
            5
        ];
        let spaces = [
            50,
            42,
            50,
            50,
            50,
            50
        ];
        for(let i = 0; i < n_fish; i++){
            let new_sizes = sizes.map(function(x) {
                return x * p.max(scale_factor - 0.5 * p.noise(i), 0.3);
            });
            let new_spaces = spaces.map(function(x) {
                return x * p.max(scale_factor - 0.5 * p.noise(0, i), 0.3);
            });
            let colors = getFishStrokeAndFillColor();
            let new_fish = new Chain(new_sizes, new_spaces, p.createVector(p.random(p.width), p.random(p.height)), colors[0], colors[1]);
            fish.push(new_fish);
        }
        for(let i = 0; i < n_lilypads; i++){
            let colors = getLilyPadStrokeAndFillColor();
            let pt = p.createVector(p.random(p.width), p.random(p.height));
            pt = ensureLilypadSpacing(pt);
            let new_lilypad = new LilyPad(pt, default_lilypad_size * scale_factor * (0.5 * p.noise(i) + 0.8), p.random(p.TWO_PI), colors[0], colors[1]);
            lilypads.push(new_lilypad);
        }
    };
    p.draw = function() {
        p.background(bg_colours[0]);
        const t0 = performance.now();
        for(let i = 0; i < n_fish; i++){
            fish[i].randomTrack(i);
            fish[i].render();
        }
        p.fill('#45A6FF30');
        p.noStroke();
        p.rect(0, 0, p.width, p.height);
        p.strokeWeight(1.5 * weight);
        for(let i = 0; i < n_lilypads; i++){
            lilypads[i].animate(i);
            lilypads[i].render();
        }
        // Corners
        noiseCurve(0.2 * p.width, p.createVector(0, 0), 0);
        noiseCurve(0.2 * p.width, p.createVector(0, p.height), 1);
        noiseCurve(0.2 * p.width, p.createVector(p.width, 0), 2);
        noiseCurve(0.2 * p.width, p.createVector(p.width, p.height), 3);
        // Sides
        noiseCurve(0.2 * p.width, p.createVector(p.width / 3, 0), 4);
        noiseCurve(0.2 * p.width, p.createVector(p.width / 3, p.height), 5);
        noiseCurve(0.2 * p.width, p.createVector(2 * p.width / 3, 0), 6);
        noiseCurve(0.2 * p.width, p.createVector(2 * p.width / 3, p.height), 7);
        noiseCurve(0.2 * p.height, p.createVector(0, p.height / 2), 8);
        noiseCurve(0.2 * p.height, p.createVector(p.width, p.height / 2), 9);
    };
    function noiseCurve(r, center, z) {
        p.noStroke();
        p.fill(230, 60, 50 * (1 + zcn(z, p.frameCount / 420)), 0.3 * (0.5 + p.noise(p.frameCount / 300)));
        p.beginShape();
        const n = 6;
        const step = p.TWO_PI / n;
        const noise_mag = 0.3 * r;
        for(let i = 0; i < n; i++){
            const x = center.x + (r * p.cos(step * i) + scale_factor * noise_mag * zcn(p.frameCount / 420, i, z));
            const y = center.y + (r * p.sin(step * i) + scale_factor * noise_mag * zcn(i, p.frameCount / 420, z));
            p.splineVertex(x, y);
        }
        for(let i = 0; i < 3; i++){
            const x = center.x + (r * p.cos(step * i) + scale_factor * noise_mag * zcn(p.frameCount / 420, i, z));
            const y = center.y + (r * p.sin(step * i) + scale_factor * noise_mag * zcn(i, p.frameCount / 420, z));
            p.splineVertex(x, y);
        }
        p.endShape();
    }
    function zcn(x = 0, y = 0, z = 0) {
        return 2 * (p.noise(x, y, z) - 0.5);
    }
    function getFishStrokeAndFillColor() {
        let stroke_color, fill_color;
        if (p.random() < 0.92) fill_color = p.color(p.random(25), p.random(80, 95), p.random(80, 90));
        else fill_color = p.color(p.random(30), p.random(20), p.random(92, 96));
        stroke_color = p.color(p.hue(fill_color), p.saturation(fill_color) * 0.95, p.brightness(fill_color) * 1.2);
        return [
            stroke_color,
            fill_color
        ];
    }
    function getLilyPadStrokeAndFillColor() {
        const fill_color = p.color(p.random(80, 120), p.random(50, 70), p.random(40, 66));
        const stroke_color = p.color(p.hue(fill_color), p.saturation(fill_color) * 0.95, p.brightness(fill_color) * 1.2);
        return [
            stroke_color,
            fill_color
        ];
    }
    function ensureLilypadSpacing(pt) {
        if (lilypads.length == 0) return pt;
        let min_dist = 99999;
        lilypads.forEach((pad)=>{
            let dist = p5.Vector.dist(pt, pad.pos);
            if (dist < min_dist) min_dist = dist;
        });
        let attempts = 0;
        const max_attempts = 100;
        while(min_dist < 2 * (default_lilypad_size * scale_factor)){
            min_dist = 99999;
            pt = p.createVector(p.random(p.width), p.random(p.height));
            lilypads.forEach((pad)=>{
                const dist = p5.Vector.dist(pt, pad.pos);
                if (dist < min_dist) min_dist = dist;
            });
            if (attempts++ > max_attempts) break;
        }
        return pt;
    }
    class Chain {
        constructor(sizes, spaces, head, c_stroke, c_fill){
            this.sizes = sizes;
            this.spaces = spaces;
            this.constructLinks(head, sizes, spaces);
            this.c_stroke = c_stroke;
            this.c_fill = c_fill;
        }
        constructLinks(head, sizes, spaces) {
            this.n_links = sizes.length;
            this.links = [];
            this.links[0] = {
                size: sizes[0],
                space: 0,
                pos: head
            };
            for(let i = 1; i < this.n_links; i++){
                const p0 = this.links[i - 1].pos;
                const p1 = p.createVector(0, spaces[i]);
                const p2 = p5.Vector.add(p0, p1);
                this.links.push({
                    size: sizes[i],
                    space: spaces[i],
                    pos: p2
                });
            }
        }
        randomTrack(i) {
            const d = p5.Vector.sub(this.links[0].pos, this.links[1].pos);
            const pt = p5.Vector.add(d.setMag(10 * d.mag() * (0.03 + p.noise(p.frameCount / 100, i))).rotate(p.noise(p.frameCount / 150, i) - 0.5), this.links[0].pos);
            this.track(pt, 0.04);
        }
        track(pos, f) {
            const DIST_THRESHOLD = 30 * scale_factor;
            const ANGLE_THRESHOLD = p.PI / 7;
            const d = p5.Vector.sub(pos, this.links[0].pos);
            d.setMag(p.max(d.mag() - DIST_THRESHOLD, 0) * f);
            // This assumes there's at least two links in the chain
            const a = p5.Vector.sub(this.links[0].pos, this.links[1].pos);
            if (d.angleBetween(a) > ANGLE_THRESHOLD) d.setHeading(a.heading() - ANGLE_THRESHOLD);
            else if (d.angleBetween(a) < -ANGLE_THRESHOLD) d.setHeading(a.heading() + ANGLE_THRESHOLD);
            this.links[0].pos.add(d);
            this.constrain();
        }
        render() {
            p.stroke(this.c_stroke);
            p.fill(this.c_fill);
            p.strokeWeight(weight);
            const n = this.n_links * 2;
            let body_points = Array(n);
            const PECTORAL_INDICES = [
                1,
                2
            ];
            const DORSAL_INDICES = [
                1,
                2
            ];
            const VENTRAL_INDICES = [
                3,
                4
            ];
            const CAUDAL_INDEX = 5;
            let pectoral_points = [];
            let dorsal_points = [];
            let ventral_points = [];
            let caudal_points = [];
            for(let i = 0; i < this.n_links; i++){
                let d = 0;
                if (i == this.n_links - 1) d = p5.Vector.sub(this.links[i - 1].pos, this.links[i].pos);
                else d = p5.Vector.sub(this.links[i].pos, this.links[i + 1].pos);
                const a = d.heading();
                const p0 = p5.Vector.fromAngle(a + 0.5 * p.PI).setMag(this.links[i].size / 2);
                const p1 = p5.Vector.fromAngle(a - 0.5 * p.PI).setMag(this.links[i].size / 2);
                const pl = p5.Vector.add(this.links[i].pos, p0);
                const pr = p5.Vector.add(this.links[i].pos, p1);
                if (PECTORAL_INDICES.includes(i)) {
                    pectoral_points.push(pl);
                    pectoral_points.push(pr);
                }
                if (DORSAL_INDICES.includes(i)) {
                    dorsal_points.push(pl);
                    dorsal_points.push(pr);
                }
                if (VENTRAL_INDICES.includes(i)) {
                    ventral_points.push(pl);
                    ventral_points.push(pr);
                }
                if (CAUDAL_INDEX == i) {
                    caudal_points.push(pl);
                    caudal_points.push(pr);
                }
                body_points[i] = pr;
                body_points[n - i - 1] = pl;
                this.n_links;
            }
            const a = p5.Vector.sub(this.links[0].pos, this.links[1].pos).angleBetween(p5.Vector.sub(this.links[4].pos, this.links[5].pos));
            this.fins(pectoral_points, dorsal_points, ventral_points, caudal_points, a);
            p.beginShape();
            for(let i = 0; i < n + 3; i++)p.splineVertex(body_points[i % n].x, body_points[i % n].y);
            p.endShape();
            this.dorsalFin(dorsal_points, a);
            p.stroke(0, 0, 20);
            p.strokeWeight(2 * weight);
            const eye_right = p5.Vector.lerp(this.links[0].pos, dorsal_points[0], 0.6);
            const eye_left = p5.Vector.lerp(this.links[0].pos, dorsal_points[1], 0.6);
        }
        fins(pectoral, dorsal, ventral, caudal, angle) {
            // Angle of the second segment
            const a = p5.Vector.sub(this.links[1].pos, this.links[2].pos).heading();
            this.pectoralFins(pectoral);
            this.caudalFin(caudal, angle);
        }
        pectoralFins(points) {
            // Right
            p.beginShape();
            p.splineVertex(points[0].x, points[0].y);
            const tip_inter = p5.Vector.sub(points[0], points[2]);
            let tip = p5.Vector.add(tip_inter.rotate(p.PI / 2).setMag(tip_inter.mag() * 0.9), points[2]);
            p.splineVertex(tip.x, tip.y);
            p.splineVertex(points[2].x, points[2].y);
            p.splineVertex(points[0].x, points[0].y);
            p.splineVertex(tip.x, tip.y);
            p.splineVertex(points[2].x, points[2].y);
            p.endShape();
            // Left
            p.beginShape();
            p.splineVertex(points[1].x, points[1].y);
            tip = p5.Vector.add(tip_inter.rotate(p.PI), points[3]);
            p.splineVertex(tip.x, tip.y);
            p.splineVertex(points[3].x, points[3].y);
            p.splineVertex(points[1].x, points[1].y);
            p.splineVertex(tip.x, tip.y);
            p.splineVertex(points[3].x, points[3].y);
            p.endShape();
        }
        caudalFin(points, angle) {
            p.beginShape();
            p.splineVertex(points[0].x, points[0].y);
            const inter = p5.Vector.sub(points[0], points[1]);
            const center = this.links[this.n_links - 1].pos;
            const tip0 = p5.Vector.add(p5.Vector.rotate(inter, 0.5 * p.PI + 0.3 * angle).setMag(inter.mag() * 15), center);
            const tip1 = p5.Vector.add(p5.Vector.rotate(inter, 0.5 * p.PI - 0.3 * angle).setMag(inter.mag() * 15), center);
            p.splineVertex(tip0.x, tip0.y);
            p.splineVertex(tip1.x, tip1.y);
            p.splineVertex(points[1].x, points[1].y);
            p.splineVertex(points[0].x, points[0].y);
            p.splineVertex(tip0.x, tip0.y);
            p.splineVertex(tip1.x, tip1.y);
            p.splineVertex(points[1].x, points[1].y);
            p.endShape();
        }
        dorsalFin(points, angle) {
            const front = this.links[2].pos;
            const back = this.links[3].pos;
            p.beginShape();
            p.splineVertex(front.x, front.y);
            let tip = p5.Vector.sub(front, back);
            tip.setMag(tip.mag() * 0.6).rotate(-0.7 * angle).add(front);
            p.splineVertex(tip.x, tip.y);
            p.splineVertex(back.x, back.y);
            p.splineVertex(front.x, front.y);
            p.splineVertex(tip.x, tip.y);
            p.splineVertex(back.x, back.y);
            p.endShape();
        }
        constrain() {
            this.wrap();
            for(let i = 1; i < this.n_links; i++){
                const d = p5.Vector.sub(this.links[i].pos, this.links[i - 1].pos);
                d.setMag(this.links[i].space);
                this.links[i].pos = p5.Vector.add(this.links[i - 1].pos, d);
            }
        }
        wrap() {
            if (this.links[0].pos.x > p.width * 1.3) this.links.forEach((link)=>{
                link.pos.x -= p.width * 1.3;
            });
            else if (this.links[0].pos.x < -p.width * 0.3) this.links.forEach((link)=>{
                link.pos.x += p.width * 1.3;
            });
            if (this.links[0].pos.y > p.height * 1.3) this.links.forEach((link)=>{
                link.pos.y -= p.height * 1.3;
            });
            else if (this.links[0].pos.y < -p.height * 0.3) this.links.forEach((link)=>{
                link.pos.y += p.height * 1.3;
            });
        }
    }
    class LilyPad {
        constructor(pos, radius, angle, c_stroke, c_fill){
            this.pos = pos;
            this.anim_pos = pos;
            this.radius = radius;
            this.angle = angle;
            this.angle_open = p.random(1.7, 1.95) * p.PI;
            this.c_stroke = c_stroke;
            this.c_fill = c_fill;
        }
        animate(i) {
            this.anim_pos = p5.Vector.add(this.pos, p.createVector(this.radius * (p.noise(p.frameCount / 300, i) - 0.5), this.radius * (p.noise(i, p.frameCount / 300) - 0.5)));
            this.anim_angle = this.angle + (p.PI * p.noise(i, i, p.frameCount / 300) - 0.5);
        }
        render() {
            p.stroke(this.c_stroke);
            p.fill(this.c_fill);
            p.arc(this.anim_pos.x, this.anim_pos.y, this.radius, this.radius, this.anim_angle, this.anim_angle + this.angle_open, p.PIE);
        }
    }
    p.windowResized = function() {
        p.setup();
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bzWAL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sketch", ()=>sketch);
var _vertGlsl = require("./vert.glsl");
var _vertGlslDefault = parcelHelpers.interopDefault(_vertGlsl);
var _fragGlsl = require("./frag.glsl");
var _fragGlslDefault = parcelHelpers.interopDefault(_fragGlsl);
const sketch = function(p, options = {}) {
    let shady, shadyTex, start;
    p.setup = function() {
        const containerWidth = p._userNode ? p._userNode.clientWidth : 800;
        const containerHeight = p._userNode ? p._userNode.clientHeight : 600;
        p.createCanvas(containerWidth, containerHeight, p.WEBGL);
        try {
            shady = p.createShader((0, _vertGlslDefault.default), (0, _fragGlslDefault.default));
            shadyTex = p.createGraphics(p.width, p.height, p.WEBGL);
            shadyTex.noStroke();
        } catch (e) {
            console.error('Failed to create shader:', e);
            shady = null;
        }
        p.noStroke();
        start = p.random() * 9999.0;
    };
    p.draw = function() {
        p.background(0);
        if (shady) try {
            shady.setUniform("u_resolution", [
                p.width,
                p.height
            ]);
            shady.setUniform("u_time", start + p.millis() / 2000.0);
            shady.setUniform("u_scale", 1.0);
            p.shader(shady);
            p.rect(-p.width / 2, -p.height / 2, p.width, p.height);
        } catch (e) {
            console.error('Shader rendering error:', e);
            p.fill(255, 0, 0);
            p.text('Shader Error', 0, 0);
        }
        else {
            // Fallback: show debug info
            p.fill(255);
            p.text('WebGL/Shader not available', -p.width / 4, 0);
            if (!shady) p.text('Shader not loaded', -p.width / 4, 20);
            if (!p._renderer) p.text('No renderer', -p.width / 4, 40);
            if (!p._renderer.GL) p.text('No GL context', -p.width / 4, 60);
        }
    };
    p.windowResized = function() {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
};

},{"./vert.glsl":"4QwsG","./frag.glsl":"hWnKC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4QwsG":[function(require,module,exports,__globalThis) {
module.exports = "#define GLSLIFY 1\n// vert file and comments from adam ferriss\n// https://github.com/aferriss/p5jsShaderExamples\n\n// our vertex data\nattribute vec3 aPosition;\n\n// our texcoordinates\nattribute vec2 aTexCoord;\n\n// this is a variable that will be shared with the fragment shader\n// we will assign the attribute texcoords to the varying texcoords to move them from the vert shader to the frag shader\n// it can be called whatever you want but often people prefiv it with 'v' to indicate that it is a varying\nvarying vec2 vTexCoord;\n\nvoid main() {\n\n  // copy the texture coordinates\n  vTexCoord = aTexCoord;\n\n  // copy the position data into a vec4, using 1.0 as the w component\n  vec4 positionVec4 = vec4(aPosition, 1.0);\n  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;\n\n  // send the vertex information on to the fragment shader\n  gl_Position = positionVec4;\n}\n";

},{}],"hWnKC":[function(require,module,exports,__globalThis) {
module.exports = "#ifdef GL_ES\nprecision highp float;\n#define GLSLIFY 1\n#endif\n\n#define PI 3.14159265358979323846\n#define TWO_PI 2.0*3.14159265358979323846\n\nuniform vec2 u_resolution;\nuniform float u_time;\nuniform float u_scale;\n\n// this is the same variable we declared in the vertex shader\n// we need to declare it here too!\nvarying vec2 vTexCoord;\n\nvec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }\nvec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }\nvec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }\n\nfloat snoise(vec2 v) {\n    const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                        0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                        -0.577350269189626,  // -1.0 + 2.0 * C.x\n                        0.024390243902439); // 1.0 / 41.0\n    vec2 i  = floor(v + dot(v, C.yy) );\n    vec2 x0 = v -   i + dot(i, C.xx);\n    vec2 i1;\n    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n    vec4 x12 = x0.xyxy + C.xxzz;\n    x12.xy -= i1;\n    i = mod289(i); // Avoid truncation effects in permutation\n    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n        + i.x + vec3(0.0, i1.x, 1.0 ));\n\n    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n    m = m*m ;\n    m = m*m ;\n    vec3 x = 2.0 * fract(p * C.www) - 1.0;\n    vec3 h = abs(x) - 0.5;\n    vec3 ox = floor(x + 0.5);\n    vec3 a0 = x - ox;\n    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n    vec3 g;\n    g.x  = a0.x  * x0.x  + h.x  * x0.y;\n    g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n    return 130.0 * dot(m, g);\n}\n\nfloat circle (in vec2 _st, in float _radius){\n  vec2 dist = _st-vec2(0.5);\n  return 1.0-smoothstep(_radius-(_radius*0.3), _radius+(_radius*0.3), dot(dist,dist)*4.0);\n}\n\nvec3 shape(in vec2 pos, float N, float s, float m, float i, float j, float fade){\n  vec2 sPos = pos*2.-1.;\n  float a = atan(sPos.x+i, sPos.y+j)+PI;\n  float r = TWO_PI/float(N);\n  float d = cos(floor(m+a/r)*r-a)*length(sPos);\n  return vec3(1.000-smoothstep(s-fade,s,d),1.000-smoothstep(s-fade,s,d),1.000-smoothstep(s-fade,s,d));\n}\n\nvoid main() {\n\n  vec2 coord = vTexCoord;\n\n  vec3 edge0 = vec3(0.0, 0.0, 0.0);\n  vec3 edge1 = vec3(1.0, 1.0, 1.0);\n\n  float field0 = snoise(u_scale*coord+vec2(u_time/30.0, u_time/6.0));\n  float field1 = snoise(u_scale*coord-vec2(u_time/40.0, u_time/5.0));\n\n  float smooth_field01add = smoothstep(0.1, 1.0, field0+field1);\n  float smooth_field01div = smoothstep(0.0, 1.0, 0.1+field0-field1);\n  float smooth_field0 = smoothstep(0.0, 1.0, field0);\n  float smooth_field1 = smoothstep(0.0, 1.0, field1);\n\n  vec3 circleColor = vec3(0.075 + circle(coord, 3.*smooth_field01add), 0., 0.);\n  //vec3 circleColor2 = vec3(circle(coord, (smooth_field01)), circle(coord, (smooth_field0)-0.1), circle(coord, (smooth_field1)-0.3));\n  vec3 circleColor2 = vec3(0., circle(coord, smooth_field01div), abs(smooth_field1-smooth_field0) + 0.05);\n\n  //vec3 border = vec3(shape(coord, 4.0, 0.5, 0.5, 0.0, 0.0, -0.5));\n  vec3 finalColor = circleColor+circleColor2;//smoothstep(0.0, 0.1, circleColor*circleColor2);\n\n  gl_FragColor = vec4(finalColor, 1.0);\n}\n";

},{}],"hsWJe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sketch", ()=>sketch);
const sketch = function(p, options = {}) {
    let x = 0;
    let y = 0;
    let idx = 0;
    let palette;
    let variants;
    let n_cols, n_rows;
    let x_step, y_step;
    let bg_c;
    p.setup = function() {
        p.frameRate(60);
        palette = [
            p.color('#F2E2C4'),
            p.color('#0477BF'),
            p.color('#F2B705'),
            p.color('#261D11'),
            p.color('#A6290D')
        ];
        const containerWidth = p._userNode ? p._userNode.clientWidth : 800;
        const containerHeight = p._userNode ? p._userNode.clientHeight : 600;
        p.createCanvas(containerWidth, containerHeight);
        variants = [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7
        ];
        n_cols = 5;
        n_rows = p.floor(n_cols * p.height / p.width);
        x_step = p.floor(p.width / n_cols);
        y_step = p.floor(p.height / n_rows);
        x_step = p.max(x_step, y_step);
        y_step = x_step;
        p.noStroke();
        idx = p.floor(p.random(palette.length));
        bg_c = palette[idx];
        p.background(bg_c);
        p.noStroke();
        for(let j = 0; j < n_rows; j++)for(let i = 0; i < n_cols; i++)quadrant(i * x_step, j * y_step, x_step, y_step);
    };
    p.draw = function() {
        if (y++ == n_rows - 1) {
            y = 0;
            if (x++ == n_cols - 1) {
                x = 0;
                bg_c = palette[++idx % palette.length];
                n_cols++;
                n_rows++;
                x_step = p.floor(p.width / n_cols + 1);
                y_step = p.floor(p.height / n_rows + 1);
            }
        }
        p.fill(bg_c);
        p.rect(x * x_step, y * y_step, x_step, y_step);
        quadrant(x * x_step, y * y_step, x_step, y_step);
    };
    function quadrant(x, y, w, h) {
        const c = p.random(palette);
        p.fill(c);
        switch(p.floor(p.random(9))){
            case 0:
                p.arc(x, y, w * 2, h * 2, 0, p.PI / 2);
                break;
            case 1:
                p.arc(x + x_step, y, w * 2, h * 2, p.PI / 2, p.PI);
                break;
            case 2:
                p.arc(x + x_step, y + y_step, w * 2, h * 2, p.PI, 3 * p.PI / 2);
                break;
            case 3:
                p.arc(x, y + y_step, w * 2, h * 2, 3 * p.PI / 2, 2 * p.PI);
                break;
            case 4:
                p.arc(x + x_step / 2, y, w, h, 0, p.PI);
                p.arc(x + x_step / 2, y + y_step, w, h, p.PI, 2 * p.PI);
                break;
            case 5:
                p.triangle(x, y, x + x_step, y, x, y + y_step);
                break;
            case 6:
                p.triangle(x, y, x, y + y_step, x + x_step, y + y_step);
                break;
            case 7:
                p.triangle(x, y, x + x_step, y, x + x_step, y + y_step);
                break;
            case 8:
                p.triangle(x + x_step, y, x + x_step, y + y_step, x, y + y_step);
                break;
        }
    }
    p.windowResized = function() {
        p.setup();
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4uwSY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sketch", ()=>sketch);
const sketch = function(p, options = {}) {
    let cellList = [];
    let attractorList = [];
    let nC = 1000;
    let nA = 10;
    let trails = 20;
    let aMassSlider, gSizeSlider, nCSlider, sACheckbox;
    let palette;
    let paletteIdx;
    let bg;
    let xSpacing, ySpacing;
    let dynamic_attractors = true;
    let cellColour, attractorColour;
    p.setup = function() {
        p.frameRate(60);
        bg = p.color(0, trails);
        palette = [
            p.color('#BF4E30'),
            p.color('#337AC5'),
            p.color('#dda77b'),
            p.color('#945d5e')
        ];
        paletteIdx = 0;
        const containerWidth = p._userNode ? p._userNode.clientWidth : 800;
        const containerHeight = p._userNode ? p._userNode.clientHeight : 600;
        p.createCanvas(containerWidth, containerHeight);
        cellColour = p.color(255, 50, 10);
        attractorColour = p.color(0);
        p.ellipseMode(p.CENTER);
        p.strokeWeight(5);
        p.background(10);
        collidingGalaxySetup();
    };
    p.draw = function() {
        p.background(bg);
        for (let attractor of attractorList){
            attractor.attract(cellList);
            if (dynamic_attractors) {
                attractor.attract(attractorList);
                attractor.move();
            }
            attractor.render();
        }
        p.strokeWeight(3);
        for (let cell of cellList){
            cell.move();
            cell.render();
        }
    };
    function randomSetup() {
        let cellColour = p.color(255);
        for(let i = 0; i < nC; i++){
            let newCell = new Cell(p.width * p.random(), p.height * p.random(), cellColour, 3 * (p.random() - 0.5), 3 * (p.random() - 0.5));
            cellList.push(newCell);
        }
        for(let i = 0; i < nA; i++){
            let attractorColour = p.color(0);
            let newAttractor = new Attractor(p.width / 4 + p.random() * p.width / 2, p.height / 4 + p.random() * p.height / 2, attractorColour, 200);
            attractorList.push(newAttractor);
        }
    }
    function galaxySetup() {
        cellList = [];
        attractorList = [];
        let attractorDist = p.width / 10;
        for(let j = 0; j < nA; j++){
            let newAttractor;
            let colour = palette[paletteIdx++ % palette.length];
            if (nA == 1) galaxy(p.width / 2, p.height / 2);
            else galaxy(p.random() * p.width, p.random() * p.height);
        }
    }
    function collidingGalaxySetup() {
        galaxy(p.width / 4, p.height / 2);
        galaxy(3 * p.width / 4, p.height / 2);
    }
    function galaxy(x, y) {
        let newAttractor;
        let colour = palette[paletteIdx++ % palette.length];
        let mass = 42;
        newAttractor = new Attractor(x, y, colour, mass);
        attractorList.push(newAttractor);
        let attractorDist = p.width / 5;
        for(let i = 0; i < 2500; i++){
            let rad = attractorDist * p.random(0.1, 1);
            let angle = p.TWO_PI * p.random();
            let newCell = new Cell(newAttractor.p.x + rad * p.cos(angle), newAttractor.p.y + rad * p.sin(angle), colour);
            newCell.v.x = p.cos(angle + p.HALF_PI);
            newCell.v.y = p.sin(angle + p.HALF_PI);
            newCell.v.setMag(p.sqrt(mass / p5.Vector.dist(newAttractor.p, newCell.p)));
            cellList.push(newCell);
        }
    }
    function clearCanvas() {
        p.background(0);
        cellList = [];
        attractorList = [];
    }
    function generateColorPalette(n_colours) {
        const offset = p.random(360);
        let palette = [];
        p.colorMode(p.HSB);
        let h = 0;
        for(let i = 0; i < n_colours; i++){
            if (p.random() < 0.5) h += 137.5;
            else h += 68.75;
            const hue = (offset + h) % 360;
            palette.push(p.color(hue, p.random(42, 100), p.random(60, 90), 0.33));
        }
        return palette;
    }
    class Cell {
        constructor(x, y, c = p.color(255, 0, 0), vx = 0, vy = 0){
            this.p = p.createVector(x, y);
            this.v = p.createVector(vx, vy);
            this.c = c;
        }
        move() {
            this.p.add(this.v);
        }
        accelerate(dv) {
            this.v.add(dv);
        }
        render() {
            p.stroke(this.c);
            p.fill(this.c);
            p.point(this.p);
        }
    }
    class Attractor extends Cell {
        constructor(x, y, c, mass){
            super(x, y, c);
            this.mass = mass;
            this.r = 5 * p.pow(3 / 4 * this.mass / p.PI, 1 / 3);
        }
        attract(cellList) {
            let r, dv;
            for (let cell of cellList){
                r = p.max(p5.Vector.dist(this.p, cell.p), 15);
                dv = p5.Vector.sub(this.p, cell.p);
                dv.normalize();
                dv.setMag(this.mass / p.sq(r));
                cell.accelerate(dv);
            }
        }
        render() {
            p.stroke(this.c);
            p.fill(this.c);
            p.circle(this.p.x, this.p.y, this.r);
        }
        setMass(mass) {
            this.mass = mass;
        }
    }
    p.windowResized = function() {
        clearCanvas();
        p.setup();
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aRRF0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sketch", ()=>sketch);
const sketch = function(p, options = {}) {
    let cells = [];
    let shortest_side, n_cells;
    let noise_scale = 100;
    let x_stretch = 5;
    let y_stretch = 5;
    let blur = true;
    let TITLE = "Flow Fields";
    let STOP_FRAME = 180;
    p.setup = function() {
        p.frameRate(60);
        cells = [];
        const containerWidth = p._userNode ? p._userNode.clientWidth : 800;
        const containerHeight = p._userNode ? p._userNode.clientHeight : 600;
        p.createCanvas(containerWidth, containerHeight);
        shortest_side = p.min(p.width, p.height);
        n_cells = shortest_side * 8;
        p.colorMode(p.HSB);
        p.noStroke();
        let x_space = p.width / (n_cells + 1);
        for(let i = 0; i < n_cells; i++){
            let new_cell = new Cell(p.random(p.width), p.random(p.height), p.color(200), 0, 0);
            cells.push(new_cell);
        }
        p.background(0);
    };
    p.draw = function() {
        cells.forEach((cell)=>{
            let dv = p.createVector(x_stretch * (0.5 - p.noise(cell.p.x / noise_scale, p.height + cell.p.y / noise_scale)), y_stretch * (0.5 - p.noise(p.width + cell.p.x / noise_scale, cell.p.y / noise_scale)));
            cell.v = dv;
            cell.move();
            cell.render();
        });
        if (blur) p.filter(p.BLUR, 0.1);
        if (p.frameCount == STOP_FRAME) p.noLoop();
    };
    p.keyPressed = function() {
        if (p.key == 'r') restart();
    };
    function restart() {
        p.noiseSeed();
        p.frameCount = 1;
        p.setup();
        p.loop();
    }
    function makeFilename() {
        return TITLE + "_" + n_cells + "-" + noise_scale + "-" + x_stretch + "-" + y_stretch + ".png";
    }
    class Cell {
        constructor(x, y, c = p.color(255, 0, 0), vx = 0, vy = 0){
            this.p = p.createVector(x, y);
            this.v = p.createVector(vx, vy);
            this.c = c;
        }
        move() {
            this.p.add(this.v);
        }
        accelerate(dv) {
            this.v.add(dv);
        }
        render() {
            p.stroke(this.c);
            p.fill(this.c);
            p.point(this.p);
        }
    }
    p.windowResized = function() {
        p.setup();
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bWMKx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sketch", ()=>sketch);
const sketch = function(p, options = {}) {
    let pewpew;
    let projectiles, asteroids, explosions;
    let spawnTimer, dead, score;
    let lastS, t;
    let gScale;
    let running = false;
    // Add event listener for keyboard controls
    if (typeof window !== 'undefined') window.addEventListener("keydown", function(e) {
        if ([
            "Space",
            "ArrowUp",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight"
        ].indexOf(e.code) > -1) e.preventDefault();
    }, false);
    p.setup = function() {
        p.frameRate(60);
        // Use container dimensions instead of window dimensions
        const containerWidth = p._userNode ? p._userNode.clientWidth : 800;
        const containerHeight = p._userNode ? p._userNode.clientHeight : 600;
        p.createCanvas(containerWidth, containerHeight);
        p.angleMode(p.DEGREES);
        gScale = p.width / 60;
        pewpew = new Ship(p.width / 2, p.height / 2, gScale);
        projectiles = [];
        asteroids = [];
        explosions = [];
        spawnTimer = 0;
        dead = false;
        score = 0;
        lastS = p.second();
        t = 0;
        spawnAsteroids(2, 1.5, 2);
    };
    p.draw = function() {
        p.background(0);
        renderScore();
        renderTime();
        if (!running) {
            if (p.mouseIsPressed) running = true;
            else {
                renderInstructions();
                t = 0;
                return;
            }
        }
        if (dead) {
            p.textSize(p.width / 8);
            p.textFont('Times New Roman');
            p.fill(255, 0, 0);
            p.noStroke();
            p.textAlign(p.CENTER, p.CENTER);
            p.text("YOU DIED", p.width / 2, p.height / 2);
            p.textSize(p.width / 50);
            p.textFont('Courier New');
            p.noStroke();
            p.fill(255);
            p.textAlign(p.CENTER, p.CENTER);
            p.text("Click to restart", p.width / 2, p.height * 0.35 + p.height / 2);
            if (p.mouseIsPressed) {
                projectiles = [];
                asteroids = [];
                explosions = [];
                spawnTimer = 0;
                dead = false;
                t = 0;
                lastS = p.second();
                score = 0;
                p.frameCount = 0;
                pewpew = new Ship(p.width / 2, p.height / 2, gScale);
                spawnAsteroids(2, 1.5, 2);
            }
        } else {
            pewpew.getInput();
            pewpew.move();
            pewpew.render();
        }
        renderProjectiles();
        renderAsteroids();
        renderExplosions();
        clean();
        spawnTimer += 1 / p.frameRate();
        if (spawnTimer >= 10 / p.pow(p.frameCount + 1, 0.25)) {
            spawnAsteroids(2, 1.5 + p.frameCount / 1200, 2);
            spawnTimer = 0;
        }
        if (!dead) checkAsteroidCollisions();
    };
    function renderProjectiles() {
        projectiles.forEach(function(projectile, index, array) {
            projectile.move();
            projectile.render();
        });
    }
    function renderAsteroids() {
        asteroids.forEach(function(asteroid, index, array) {
            asteroid.move();
            asteroid.render();
        });
    }
    function renderExplosions() {
        explosions.forEach(function(explosion, index, array) {
            explosion.render();
            if (explosion.end) array.splice(index, 1);
        });
    }
    function spawnAsteroids(num, speed, type) {
        for(let i = 0; i < num; i++){
            let aVel = p.createVector(p.random(-5, 5), p.random(-5, 5));
            aVel.setMag(speed + p.random());
            let h = aVel.heading();
            let aPos = p.createVector(p.width / 2 - p.random(1.2, 3) * p.cos(h) * p.width / 2, p.height / 2 - p.random(1.2, 3) * p.sin(h) * p.height / 2);
            let newA = new Asteroid(aPos, aVel, 60, type);
            asteroids.push(newA);
        }
    }
    function clean() {
        projectiles.forEach(function(projectile, index, array) {
            if (projectile.isOutOfBounds()) array.splice(index, 1);
        });
        asteroids.forEach(function(asteroid, index, array) {
            if (asteroid.isOutOfBounds()) array.splice(index, 1);
        });
        let ship = pewpew.isOutOfBounds();
        if (ship.x) {
            if (pewpew.pos.x < 0) pewpew.pos.x += p.width + 3 * pewpew.scale;
            else pewpew.pos.x -= p.width + 3 * pewpew.scale;
        }
        if (ship.y) {
            if (pewpew.pos.y < 0) pewpew.pos.y += p.height + 3 * pewpew.scale;
            else pewpew.pos.y -= p.height + 3 * pewpew.scale;
        }
    }
    function renderScore() {
        p.textSize(p.width / 50);
        p.textFont('Courier New');
        p.noStroke();
        p.fill(255);
        p.textAlign(p.CENTER, p.CENTER);
        p.text("SCORE: " + score, p.width * 0.40, p.height / 20);
    }
    function renderTime() {
        p.textSize(p.width / 50);
        p.textFont('Courier New');
        p.noStroke();
        p.fill(255);
        p.textAlign(p.CENTER, p.CENTER);
        if (lastS != p.second() && !dead) {
            lastS = p.second();
            t += 1;
        }
        p.text("TIME: " + t, p.width * 0.60, p.height / 20);
    }
    function renderInstructions() {
        p.textSize(p.width / 50);
        p.textFont('Courier New');
        p.noStroke();
        p.fill(255);
        p.textAlign(p.CENTER, p.CENTER);
        p.text("Arrow keys to move", p.width / 2, p.height * 0.25 + p.height / 2);
        p.text("Space to shoot", p.width / 2, p.height * 0.3 + p.height / 2);
        p.text("Click here to begin", p.width / 2, p.height * 0.35 + p.height / 2);
    }
    function checkAsteroidCollisions() {
        asteroids.forEach(function(asteroid, a_index, a_array) {
            projectiles.forEach(function(projectile, p_index, p_array) {
                if (asteroid.pos.dist(projectile.pos) < asteroid.scale * 0.8) {
                    if (asteroid.type > 1) {
                        let aPos1 = asteroid.pos.copy();
                        let aPos2 = asteroid.pos.copy();
                        let aVel1 = p5.Vector.random2D();
                        let aVel2 = p5.Vector.random2D();
                        aVel1.setMag(asteroid.v.mag() / 1.5);
                        aVel2.setMag(asteroid.v.mag() / 1.5);
                        let aSub1 = new Asteroid(aPos1.add(p5.Vector.random2D().mult(gScale)), aVel1, asteroid.scale / 2, asteroid.type - 1);
                        let aSub2 = new Asteroid(aPos2.add(p5.Vector.random2D().mult(gScale)), aVel2, asteroid.scale / 2, asteroid.type - 1);
                        asteroids.push(aSub1);
                        asteroids.push(aSub2);
                    }
                    score += asteroid.type * 50;
                    a_array.splice(a_index, 1);
                    p_array.splice(p_index, 1);
                    let exp = new Explosion(projectile.pos, gScale, 1);
                    explosions.push(exp);
                }
            });
            if (asteroid.pos.dist(pewpew.pos) < asteroid.scale * 0.8) {
                dead = true;
                let exp = new Explosion(pewpew.pos, pewpew.scale, 0);
                explosions.push(exp);
            }
        });
    }
    class Asteroid {
        constructor(pos, v, scale, type){
            this.pos = pos;
            this.v = v;
            this.scale = scale;
            this.o = 0;
            this.rotationRate = p.random(1, 5);
            this.s = p.createGraphics(2 * scale, 2 * scale);
            this.s.background(0, 0);
            this.s.stroke(255);
            this.s.noFill();
            this.s.strokeWeight(3);
            this.s.beginShape();
            for(let i = 0; i < 360; i += 30)this.s.vertex(p.random(0.8, 1.2) * this.scale / 2 * p.cos(i) + scale, p.random(0.8, 1.2) * this.scale / 2 * p.sin(i) + scale);
            this.s.endShape(p.CLOSE);
            this.hasEntered = false;
            this.t = 0;
            this.type = type;
        }
        render() {
            p.push();
            p.translate(this.pos.x, this.pos.y);
            p.rotate(this.o);
            p.image(this.s, -this.scale, -this.scale);
            p.pop();
        }
        move() {
            this.o += this.rotationRate;
            this.pos.add(this.v);
            if (this.pos.x > 0 && this.pos.x < p.width && this.pos.y > 0 && this.pos.y < p.height) this.hasEntered = true;
        }
        isOutOfBounds() {
            this.t += 1;
            if (this.hasEntered) {
                if (this.pos.x < -this.scale || this.pos.x > p.width + this.scale || this.pos.y < -this.scale || this.pos.y > p.height + this.scale) return true;
            }
            if (!this.hasEntered && this.t > 600) return true;
            return false;
        }
    }
    class Explosion {
        constructor(pos, scale, type){
            this.pos = pos;
            this.scale = scale;
            this.type = type;
            this.t = 0;
            this.end = false;
        }
        render() {
            if (this.type == 0) {
                p.noStroke();
                p.fill(255, 0, 0, 255 * ((120 - this.t) / 120));
                p.push();
                p.translate(this.pos.x, this.pos.y);
                p.beginShape();
                for(let i = 0; i < 360; i += 15)p.vertex(p.noise(i + this.t / 50) * this.scale * 2.5 * p.cos(i), p.noise(i + this.t / 50) * this.scale * 2.5 * p.sin(i));
                p.endShape();
                p.pop();
                this.t += 1;
                if (this.t > 120) this.end = true;
            } else if (this.type == 1) {
                p.noStroke();
                p.fill(255, 255 * ((30 - this.t) / 30));
                p.push();
                p.translate(this.pos.x, this.pos.y);
                p.beginShape();
                for(let i = 0; i < 360; i += 15)p.vertex(p.noise(i + this.t / 20) * this.scale / 2 * p.cos(i), p.noise(i + this.t / 20) * this.scale / 2 * p.sin(i));
                p.endShape();
                p.pop();
                this.t += 1;
                if (this.t > 30) this.end = true;
            }
        }
    }
    class Projectile {
        constructor(pos, v, len = 10){
            this.pos = pos;
            this.v = v;
            this.len = len;
        }
        render() {
            p.stroke(255);
            p.fill(255);
            let deg = p.degrees(this.v.heading());
            p.line(this.pos.x, this.pos.y, this.pos.x + this.len * p.cos(deg), this.pos.y + this.len * p.sin(deg));
        }
        move() {
            this.pos.add(this.v);
        }
        isOutOfBounds() {
            if (this.pos.x < -this.len || this.pos.x > p.width + this.len || this.pos.y < -this.len || this.pos.y > p.height + this.len) return true;
            return false;
        }
    }
    class Ship {
        constructor(x, y, scale = 20){
            this.pos = p.createVector(x, y);
            this.v = p.createVector(0, 0);
            this.o = 0;
            this.scale = scale;
            this.fire_timer = 0;
            this.isThrusting = false;
        }
        render() {
            if (this.isThrusting) {
                this.renderThrust();
                this.isThrusting = false;
            }
            p.stroke(255);
            p.fill(255);
            p.strokeWeight(2);
            p.beginShape();
            p.vertex(this.pos.x + this.scale * p.cos(this.o), this.pos.y + this.scale * p.sin(this.o));
            p.vertex(this.pos.x + this.scale / 2 * p.cos(this.o + 120), this.pos.y + this.scale / 2 * p.sin(this.o + 120));
            p.vertex(this.pos.x + this.scale / 2 * p.cos(this.o + 180), this.pos.y + this.scale / 2 * p.sin(this.o + 180));
            p.vertex(this.pos.x + this.scale / 2 * p.cos(this.o - 120), this.pos.y + this.scale / 2 * p.sin(this.o - 120));
            p.endShape(p.CLOSE);
        }
        renderThrust() {
            p.stroke(255, 0, 0);
            p.fill(255, 0, 0);
            p.strokeWeight(2);
            p.beginShape();
            p.vertex(this.pos.x + this.scale / 2 * p.cos(this.o + 125), this.pos.y + this.scale / 2 * p.sin(this.o + 125));
            p.vertex(this.pos.x + 1.1 * this.scale * p.random(1, 1.3) * p.cos(this.o + 170), this.pos.y + 1.1 * this.scale * p.random(1, 1.3) * p.sin(this.o + 170));
            p.vertex(this.pos.x + this.scale / 2 * p.cos(this.o + 175), this.pos.y + this.scale / 2 * p.sin(this.o + 175));
            p.endShape();
            p.beginShape();
            p.vertex(this.pos.x + this.scale / 2 * p.cos(this.o - 125), this.pos.y + this.scale / 2 * p.sin(this.o - 125));
            p.vertex(this.pos.x + 1.1 * this.scale * p.random(1, 1.3) * p.cos(this.o - 170), this.pos.y + 1.1 * this.scale * p.random(1, 1.3) * p.sin(this.o - 170));
            p.vertex(this.pos.x + this.scale / 2 * p.cos(this.o - 175), this.pos.y + this.scale / 2 * p.sin(this.o - 175));
            p.endShape();
        }
        rotate(deg) {
            this.o = (this.o + deg) % 360;
        }
        thrust(pow) {
            this.v.add(pow * p.cos(this.o), pow * p.sin(this.o));
            this.v.limit(6);
            this.isThrusting = true;
        }
        move() {
            this.pos.add(this.v);
        }
        getInput() {
            if (this.fire_timer > 0) this.fire_timer -= 1 / p.frameRate();
            if (p.keyIsDown(p.LEFT_ARROW)) this.rotate(-2);
            if (p.keyIsDown(p.RIGHT_ARROW)) this.rotate(2);
            if (p.keyIsDown(p.UP_ARROW)) this.thrust(0.1);
            if (p.keyIsDown(32) || p.keyIsDown(' ')) {
                if (this.fire_timer <= 0) {
                    this.fire_timer = 0.2;
                    let pPos = p.createVector(this.pos.x + this.scale * p.cos(this.o), this.pos.y + this.scale * p.sin(this.o));
                    let pVel = p5.Vector.fromAngle(p.radians(this.o));
                    pVel.setMag(12);
                    let newProj = new Projectile(pPos, pVel, this.scale / 3);
                    projectiles.push(newProj);
                    let curV = pVel.copy();
                    this.v.add(curV.mult(-0.005));
                    this.v.limit(6);
                }
            }
        }
        isOutOfBounds() {
            let out = {
                "x": false,
                "y": false
            };
            if (this.pos.x < -this.scale || this.pos.x > p.width + this.scale) out.x = true;
            if (this.pos.y < -this.scale || this.pos.y > p.height + this.scale) out.y = true;
            return out;
        }
    }
    p.windowResized = function() {
        p.setup();
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"icg6d":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sketch", ()=>sketch);
var _creatoDisplayExtraBoldOtf = require("url:../../../assets/fonts/CreatoDisplay-ExtraBold.otf");
var _creatoDisplayExtraBoldOtfDefault = parcelHelpers.interopDefault(_creatoDisplayExtraBoldOtf);
var _dsDigiiTtf = require("url:../../../assets/fonts/DS-DIGII.TTF");
var _dsDigiiTtfDefault = parcelHelpers.interopDefault(_dsDigiiTtf);
var _bpdotsSquareVFTtf = require("url:../../../assets/fonts/BPdotsSquareVF.ttf");
var _bpdotsSquareVFTtfDefault = parcelHelpers.interopDefault(_bpdotsSquareVFTtf);
const sketch = function(p, options = {}) {
    let speed, tach;
    let short = 0;
    let font, seg_font;
    let gas = 0.0;
    let playing = false;
    let mobile = false;
    let osc0, osc1, osc2, lowpass, reverb;
    let SCROLL_MODE = false;
    let audioStarted = false;
    function isMobileDevice() {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.matchMedia('(pointer: coarse)').matches;
    }
    p.setup = async function() {
        p.frameRate(60);
        mobile = isMobileDevice();
        const containerWidth = p._userNode ? p._userNode.clientWidth : 800;
        const containerHeight = p._userNode ? p._userNode.clientHeight : 600;
        short = p.min(containerWidth, containerHeight);
        p.createCanvas(containerWidth, containerHeight, p.WEBGL);
        p.colorMode(p.HSB);
        p.imageMode(p.CENTER);
        p.background(5);
        // Load fonts for WebGL mode using Parcel URLs
        try {
            console.log('Loading main font from:', (0, _creatoDisplayExtraBoldOtfDefault.default));
            font = await p.loadFont((0, _creatoDisplayExtraBoldOtfDefault.default));
            console.log('Main font loaded for WebGL text rendering');
        } catch (e) {
            console.error('Failed to load main font:', e);
            // Try a fallback font
            try {
                console.log('Loading fallback font from:', (0, _bpdotsSquareVFTtfDefault.default));
                font = await p.loadFont((0, _bpdotsSquareVFTtfDefault.default));
                console.log('Fallback font loaded');
            } catch (fallbackError) {
                console.error('Fallback font also failed:', fallbackError);
                font = null;
            }
        }
        // Load digital font
        try {
            console.log('Loading digital font from:', (0, _dsDigiiTtfDefault.default));
            seg_font = await p.loadFont((0, _dsDigiiTtfDefault.default));
            console.log('Digital font loaded successfully');
        } catch (e) {
            console.error('Failed to load digital font:', e);
            seg_font = null; // Will use main font as fallback
        }
        speed = new Speed(-0.345 * short, -short * 0.32, 0.42 * short, 0.15 * short);
        tach = new Tach(0.02 * short, short * 0.01, 0.7 * short, 0.2 * short);
        // Setup audio system with Tone.js
        try {
            if (typeof Tone !== 'undefined') {
                // Create oscillators
                osc0 = new Tone.Oscillator(100, "sawtooth");
                osc1 = new Tone.Oscillator(100, "sawtooth");
                osc2 = new Tone.Oscillator(100, "sine");
                // Create effects
                lowpass = new Tone.Filter(800, "lowpass");
                reverb = new Tone.Reverb(2.0);
                // Set initial reverb wetness (0 = dry, 1 = fully wet)
                reverb.wet.value = 0.1;
                // Chain: oscillators -> lowpass -> reverb -> destination
                osc0.connect(lowpass);
                osc1.connect(lowpass);
                osc2.connect(lowpass);
                lowpass.connect(reverb);
                reverb.toDestination();
                // Store reverb for dynamic control
                window.nissan_reverb = reverb;
                // Set volumes (prevent clipping with dynamic reverb)
                osc0.volume.value = -12;
                osc1.volume.value = -12;
                osc2.volume.value = -14;
                console.log('Tone.js audio system initialized successfully');
            }
        } catch (e) {
            console.warn('Audio setup failed:', e);
            osc0 = osc1 = osc2 = lowpass = reverb = null;
        }
    };
    p.draw = function() {
        p.background(8);
        if (playing) {
            if (p.mouseIsPressed) {
                SCROLL_MODE = false;
                gas = p.min(1.0, gas + 0.05);
            } else if (!SCROLL_MODE) gas = p.max(0.15, gas - 0.05);
        }
        tach.rpm = smoothFollow(tach.rpm, gas, 0.98, 0.01);
        speed.kmh = p.max(0.99 * speed.kmh, smoothFollow(speed.kmh, 262 * (tach.rpm - 0.15), 0.99, 2.0, 0.0, 222.0));
        // good vibrations
        p.push();
        const shake = 4 * tach.rpm;
        p.translate(p.random(-shake, shake), p.random(-shake, shake));
        p.translate(0.02 * short, 0.06 * short, -50);
        tach.render();
        speed.render();
        p.pop();
        p.camera(0, 200 * tach.rpm, 800, 8 * p.sin(p.HALF_PI + p.frameCount / 100), 8 * p.sin(p.frameCount / 80) - 20 * tach.rpm, 0);
        // Audio feedback with Tone.js
        if (osc0 && playing && audioStarted) try {
            osc0.frequency.value = 88 * tach.rpm;
            osc1.frequency.value = 176 * tach.rpm;
            osc2.frequency.value = 166 * tach.rpm;
            if (lowpass) lowpass.frequency.value = 400 + 400.0 * tach.rpm;
            // Dynamic reverb control - more reverb at higher RPM
            if (window.nissan_reverb) {
                window.nissan_reverb.wet.value = 0.4 + 0.4 * tach.rpm;
                window.nissan_reverb.gain = 0.5 + 0.4 * tach.rpm;
            }
        } catch (e) {
            console.warn('Audio update failed:', e);
        }
    };
    p.mousePressed = async function() {
        if (!audioStarted && osc0) try {
            // Start Tone.js context
            await Tone.start();
            osc0.start();
            osc1.start();
            osc2.start();
            audioStarted = true;
            playing = true;
            console.log('Audio started');
        } catch (e) {
            console.warn('Failed to start audio:', e);
        }
        else if (!playing && audioStarted) playing = true;
    };
    // Add mouse wheel control for RPM
    p.mouseWheel = async function(event) {
        SCROLL_MODE = true;
        gas = p.constrain(gas - 0.0002 * event.delta, 0.15, 1.0);
        if (!audioStarted && osc0) try {
            await Tone.start();
            osc0.start();
            osc1.start();
            osc2.start();
            audioStarted = true;
            playing = true;
            console.log('Audio started via scroll');
        } catch (e) {
            console.warn('Failed to start audio:', e);
        }
        else if (!playing && audioStarted) playing = true;
    };
    function smoothFollow(v0, v1, smooth, max_step, lo = 0.0, hi = 1.0) {
        const safe_smooth = p.constrain(1.0 - smooth, 0.001, 0.999);
        return p.constrain(v0 + p.min(max_step, safe_smooth * (v1 - v0)), lo, hi);
    }
    class Speed {
        constructor(x, y, w, h){
            this.p = p.createVector(x, y);
            this.s = p.createVector(w, h);
            this.kmh = 0;
        }
        render() {
            p.textAlign(p.RIGHT, p.CENTER);
            p.push();
            p.translate(0, 0, 1);
            this.renderStatic();
            this.renderDynamic();
            p.pop();
        }
        renderStatic() {
            p.stroke('#D0D0D0');
            p.strokeWeight(3 * short / 1024);
            p.noFill();
            p.rect(this.p.x, this.p.y, this.s.x, this.s.y);
            p.fill('#D0D0D0');
            if (font) p.textFont(font);
            p.textSize(0.1 * this.s.x);
            p.text("SPEED", this.p.x - 0.02 * this.s.x, this.p.y + 0.88 * this.s.y);
            p.noFill();
            p.circle(this.p.x + 1.2 * this.s.x, this.p.y, this.s.x * 0.08);
            p.line(this.p.x + 1.2 * this.s.x, this.p.y + 0.2 * this.s.y, this.p.x + 1.2 * this.s.x, this.p.y + this.s.y);
            p.line(this.p.x + 1.2 * this.s.x, this.p.y + this.s.y, this.p.x + 1.65 * this.s.x, this.p.y + this.s.y);
            // Quarter circle sections
            p.arc(this.p.x + 1.22 * this.s.x, this.p.y + 0.15 * this.s.y, this.s.x * 0.1, this.s.x * 0.1, 0, p.HALF_PI);
            p.arc(this.p.x + 1.18 * this.s.x, this.p.y + 0.15 * this.s.y, this.s.x * 0.1, this.s.x * 0.1, p.HALF_PI, p.PI);
            p.fill('#D0D0D0');
            p.textAlign(p.RIGHT);
            p.textSize(0.13 * this.s.y);
            p.text("CHECK", this.p.x + 1.65 * this.s.x, this.p.y + 0.9 * this.s.y);
            p.text("km/h", this.p.x + 1.14 * this.s.x, this.p.y + 0.3 * this.s.y);
            p.text("MPH", this.p.x + 1.38 * this.s.x, this.p.y + 0.3 * this.s.y);
        }
        renderDynamic() {
            p.textSize(1.2 * this.s.y);
            p.fill('#AAFCE2');
            if (seg_font) p.textFont(seg_font);
            else if (font) p.textFont(font);
            const kmh_str = p.round(this.kmh).toString();
            const n = kmh_str.length;
            p.text(kmh_str[n - 1], this.p.x + this.s.x * 0.7, this.p.y + this.s.y * 0.38);
            if (n > 1) p.text(kmh_str[n - 2], this.p.x + this.s.x * 0.47, this.p.y + this.s.y * 0.38);
            if (n > 2) p.text(kmh_str[n - 3], this.p.x + this.s.x * 0.25, this.p.y + this.s.y * 0.38);
            if (font) p.textFont(font);
            p.textSize(0.1 * this.s.x);
            p.text("km/h", this.p.x + 0.98 * this.s.x, this.p.y + 0.2 * this.s.y);
        }
    }
    class Tach {
        constructor(x, y, w, h){
            this.p = p.createVector(x, y);
            this.s = p.createVector(w, h);
            this.rpm = 0;
            this.rects = [];
            this.setupRects();
            this.frameCurve = this.getFrameCurve();
        }
        setupRects() {
            const NUM_RECTS = 38;
            const x_step = this.s.x / NUM_RECTS;
            for(let i = 0; i < NUM_RECTS; i++){
                const new_rect = new SegmentedRect(i * x_step, 0, x_step, this.getRectHeight(i), 8, 1, 0.6, 0.97);
                this.rects.push(new_rect);
            }
        }
        render() {
            p.textAlign(p.LEFT);
            this.renderDynamic();
            this.renderStatic();
        }
        renderStatic() {
            this.renderFrame();
            p.fill('#D0D0D0');
            if (font) p.textFont(font);
            p.textSize(0.05 * this.s.x);
            p.text("TACH", this.p.x - 0.67 * this.s.x, this.p.y + 0.61 * this.s.y);
            p.textSize(0.04 * this.s.x);
            p.text("0.5", this.p.x - 0.466 * this.s.x, this.p.y + 0.74 * this.s.y);
            p.text("1", this.p.x - 0.32 * this.s.x, this.p.y + 0.74 * this.s.y);
            p.text("2", this.p.x - 0.19 * this.s.x, this.p.y + 0.74 * this.s.y);
            p.text("3", this.p.x - 0.058 * this.s.x, this.p.y + 0.74 * this.s.y);
            p.text("4", this.p.x + 0.072 * this.s.x, this.p.y + 0.74 * this.s.y);
            p.text("5", this.p.x + 0.205 * this.s.x, this.p.y + 0.74 * this.s.y);
            p.text("6", this.p.x + 0.337 * this.s.x, this.p.y + 0.74 * this.s.y);
            p.text("7", this.p.x + 0.47 * this.s.x, this.p.y + 0.74 * this.s.y);
            p.textSize(0.025 * this.s.x);
            p.text("x 1000r/min", this.p.x + 0.497 * this.s.x, this.p.y + 0.723 * this.s.y);
        }
        renderDynamic() {
            p.push();
            p.translate(this.p.x - 0.51 * this.s.x, this.p.y - 0.1 * this.s.y);
            p.textSize(0.1 * this.s.x);
            p.fill('#AAFCE2');
            if (seg_font) p.textFont(seg_font);
            else if (font) p.textFont(font);
            p.textAlign(p.RIGHT);
            const rpm_str = p.round(70 * this.rpm).toString();
            const n = rpm_str.length;
            p.text(rpm_str[n - 1], 0.1 * this.s.x, 0);
            if (n > 1) p.text(rpm_str[n - 2], 0.05 * this.s.x, 0);
            // Static text next to RPM
            p.translate(0.23 * this.s.x, 0);
            p.fill('#D0D0D0');
            p.textSize(0.025 * this.s.x);
            if (font) p.textFont(font);
            p.text("x 100r/min", 0, -0.03 * this.s.y);
            // Easter egg
            if (p.round(70 * this.rpm) == 69) {
                p.fill('#AAFCE2');
                p.textAlign(p.LEFT);
                p.textSize(0.05 * this.s.x);
                if (seg_font) p.textFont(seg_font);
                else if (font) p.textFont(font);
                p.text("NICE", -0.1 * this.s.x, -0.12 * this.s.y);
            }
            p.pop();
            this.renderSegmentedRects();
        }
        renderSegmentedRects() {
            p.noStroke();
            p.push();
            p.translate(this.p.x - 0.5 * this.s.x, this.p.y + 0.5 * this.s.y);
            this.rects.forEach((sr, idx)=>{
                sr.raw_value = gas;
                if (idx >= 32) {
                    if (p.ceil(37 * this.rpm) == idx) p.fill('#FD8181');
                    else p.fill('#DD1111');
                } else if (p.ceil(37 * this.rpm) == idx) p.fill('#AAFCE2');
                else p.fill('#48C9A0');
                sr.render();
                if ((idx - 2) % 5 == 0) p.rect(sr.p.x, sr.p.y, sr.x_ratio * sr.s.x, 0.013 * this.s.x);
            });
            p.pop();
        }
        renderFrame() {
            p.stroke('#D0D0D0');
            p.strokeWeight(3 * short / 1024);
            const top_left = p.createVector(this.p.x - 0.52 * this.s.x, this.p.y + 0.145 * this.s.y);
            const bottom_left = p.createVector(this.p.x - 0.52 * this.s.x, this.p.y + 0.6 * this.s.y);
            const bottom_right = p.createVector(this.p.x + 0.512 * this.s.x, this.p.y + 0.6 * this.s.y);
            const top_right = p.createVector(this.p.x + 0.512 * this.s.x, this.p.y - 0.29 * this.s.y);
            p.line(top_left.x, top_left.y, bottom_left.x, bottom_left.y);
            p.line(bottom_left.x, bottom_left.y, bottom_right.x, bottom_right.y);
            p.line(bottom_right.x, bottom_right.y, top_right.x, top_right.y);
            // Add curved top section
            p.push();
            p.translate(this.p.x - 0.505 * this.s.x, this.p.y + 0.47 * this.s.y);
            p.noFill();
            p.stroke('#A01010');
            p.beginShape();
            this.frameCurve.forEach((pt, idx)=>{
                if (idx == 0 || idx == 37) p.splineVertex(pt.x, pt.y);
                p.splineVertex(pt.x, pt.y);
            });
            p.endShape();
            p.pop();
        }
        getFrameCurve() {
            let curve_points = [];
            const x_step = this.s.x / 37;
            for(let i = 0; i < 38; i++)curve_points.push({
                x: i * x_step,
                y: -this.getRectHeight(i)
            });
            return curve_points;
        }
        getRectHeight(i) {
            return 0.33 * this.s.y * p.max(2 + p.sin(i * p.PI / 27 - p.PI / 2), 1);
        }
    }
    class SegmentedRect {
        constructor(x, y, w, h, num_segments, min_segments = 1, x_ratio = 0.8, y_ratio = 0.8){
            this.p = p.createVector(x, y);
            this.s = p.createVector(w, h);
            this.num_segments = num_segments;
            this.min_segments = min_segments;
            this.x_ratio = x_ratio;
            this.y_ratio = y_ratio;
            this.raw_value = 0.0;
        }
        getActiveSegments() {
            return p.max(this.min_segments, p.round(this.num_segments * this.raw_value));
        }
        render() {
            const n = this.getActiveSegments();
            const y_step = this.s.y / this.num_segments;
            for(let i = 0; i < n; i++)p.rect(this.p.x, this.p.y - i * y_step, this.x_ratio * this.s.x, -this.y_ratio * y_step);
        }
    }
    p.windowResized = function() {
        p.setup();
    };
    p.remove = function() {
        if (audioStarted && osc0) try {
            osc0.stop();
            osc1.stop();
            osc2.stop();
            osc0.dispose();
            osc1.dispose();
            osc2.dispose();
            lowpass.dispose();
            reverb.dispose();
            if (window.nissan_reverb) delete window.nissan_reverb;
            console.log('Nissan sketch audio resources cleaned up');
        } catch (e) {
            console.warn('Error cleaning up audio:', e);
        }
        audioStarted = false;
        playing = false;
    };
};

},{"url:../../../assets/fonts/CreatoDisplay-ExtraBold.otf":"8VfI2","url:../../../assets/fonts/DS-DIGII.TTF":"b5OxU","url:../../../assets/fonts/BPdotsSquareVF.ttf":"2ZHBR","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8VfI2":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("CreatoDisplay-ExtraBold.54f2d395.otf") + "?" + Date.now();

},{}],"b5OxU":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("DS-DIGII.7d307dfe.TTF") + "?" + Date.now();

},{}],"2ZHBR":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("BPdotsSquareVF.780d5ab9.ttf") + "?" + Date.now();

},{}]},["kr6hb"], null, "parcelRequire905d", {}, "./", "/")

//# sourceMappingURL=blap64.03526cbe.js.map
