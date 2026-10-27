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
})({"iHisz":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 4321;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "9440bf780f77c784";
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

},{}],"2R06K":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _indexJs = require("./router/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _routeJs = require("./router/Route.js");
var _routeJsDefault = parcelHelpers.interopDefault(_routeJs);
var _utilsJs = require("./utils.js");
var _lit = require("lit");
var _breadcrumbNavJs = require("./views/elements/breadcrumb-nav.js");
var _helpButtonJs = require("./views/elements/help-button.js");
var _contactButtonJs = require("./views/elements/contact-button.js");
var _homeJs = require("./views/Home/home.js");
var _homeJsDefault = parcelHelpers.interopDefault(_homeJs);
var _codeartJs = require("./views/CodeArt/codeart.js");
var _codeartJsDefault = parcelHelpers.interopDefault(_codeartJs);
var _webexperiencesJs = require("./views/WebExperiences/webexperiences.js");
var _webexperiencesJsDefault = parcelHelpers.interopDefault(_webexperiencesJs);
var _linksJs = require("./views/Links/links.js");
var _linksJsDefault = parcelHelpers.interopDefault(_linksJs);
var _aboutJs = require("./views/About/about.js");
var _aboutJsDefault = parcelHelpers.interopDefault(_aboutJs);
var _installationsJs = require("./views/Installations/installations.js");
var _installationsJsDefault = parcelHelpers.interopDefault(_installationsJs);
var _photoJs = require("./views/Photo/photo.js");
var _photoJsDefault = parcelHelpers.interopDefault(_photoJs);
var _oopsJs = require("./views/Oops/oops.js");
var _oopsJsDefault = parcelHelpers.interopDefault(_oopsJs);
// Intercept #/contact before router initializes so it doesn't hit the 404 page
const _preInitHash = window.location.hash.substr(1);
const _preInitPath = _preInitHash.startsWith('/') ? _preInitHash : '/' + _preInitHash;
const _openContactOnLoad = _preInitPath === '/contact';
if (_openContactOnLoad) window.history.replaceState(null, '', window.location.pathname + '#/');
const routes = [
    new (0, _routeJsDefault.default)("project", "/interactive/live/:project", (0, _installationsJsDefault.default)),
    new (0, _routeJsDefault.default)("installations", "/interactive/live", (0, _installationsJsDefault.default)),
    new (0, _routeJsDefault.default)("codeart", "/interactive", (0, _codeartJsDefault.default)),
    new (0, _routeJsDefault.default)("webexperiences", "/interactive/web", (0, _webexperiencesJsDefault.default)),
    new (0, _routeJsDefault.default)("links-subgroup", "/links/:parent/:group", (0, _linksJsDefault.default)),
    new (0, _routeJsDefault.default)("links-group", "/links/:group", (0, _linksJsDefault.default)),
    new (0, _routeJsDefault.default)("links", "/links", (0, _linksJsDefault.default)),
    new (0, _routeJsDefault.default)("photo-collection", "/photo/:collection", (0, _photoJsDefault.default)),
    new (0, _routeJsDefault.default)("photo", "/photo", (0, _photoJsDefault.default)),
    new (0, _routeJsDefault.default)("about-resume", "/about/resume", (props)=>(0, _aboutJsDefault.default)({
            ...props,
            resume: true
        })),
    new (0, _routeJsDefault.default)("about", "/about", (0, _aboutJsDefault.default)),
    new (0, _routeJsDefault.default)("oops", "/oops", (0, _oopsJsDefault.default)),
    new (0, _routeJsDefault.default)("home", "/", (0, _homeJsDefault.default))
];
// Create router instance and make it globally available
const router = (0, _indexJsDefault.default)(routes);
window.appRouter = router;
// Initialize breadcrumb navigation
const breadcrumbContainer = document.getElementById("breadcrumb-container");
if (breadcrumbContainer) {
    // Clean the initial path to remove hashbang
    const rawPath = window.location.hash.substr(1);
    const initialPath = rawPath && rawPath !== '' ? rawPath.startsWith('/') ? rawPath : '/' + rawPath : '/';
    (0, _lit.render)((0, _breadcrumbNavJs.createBreadcrumbNav)(initialPath), breadcrumbContainer);
}
// Initialize contact button
const contactContainer = document.getElementById("contact-container");
if (contactContainer) (0, _lit.render)((0, _contactButtonJs.createContactButton)(), contactContainer);
// Initialize help button
const helpContainer = document.getElementById("help-container");
if (helpContainer) (0, _lit.render)((0, _helpButtonJs.createHelpButton)(), helpContainer);
// Listen for custom navigation events from p5 sketches
document.addEventListener('navigate-to', (event)=>{
    if (router && event.detail && event.detail.path) router.navigate(event.detail.path);
});
// Handle /contact path - opens the contact popup without routing
document.addEventListener('open-contact-popup', ()=>{
    (0, _contactButtonJs.openContactPopup)();
});
if (_openContactOnLoad) setTimeout(()=>(0, _contactButtonJs.openContactPopup)(), 400);
if ((0, _utilsJs.mobileCheck)()) {
    document.getElementById("mainNav").className = "nav-mobile";
    document.querySelectorAll("[route]").forEach((route)=>route.classList.add("route-mobile"));
}

},{"./router/index.js":"jP3Ou","./router/Route.js":"8hGpR","./utils.js":"khuqI","lit":"hh14x","./views/elements/breadcrumb-nav.js":"lsjm2","./views/elements/help-button.js":"9NOlx","./views/elements/contact-button.js":"5NdpF","./views/Home/home.js":"cGnZp","./views/CodeArt/codeart.js":"eJ16n","./views/WebExperiences/webexperiences.js":"4i6Cg","./views/Links/links.js":"6g8Hp","./views/About/about.js":"jM3S0","./views/Installations/installations.js":"kssrj","./views/Photo/photo.js":"2OQe5","./views/Oops/oops.js":"jN8Xd","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jP3Ou":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("./Router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
exports.default = (routes)=>{
    // Attach the router to the app element
    const router = new (0, _routerJsDefault.default)(routes, document.getElementById("app"));
    document.addEventListener("DOMContentLoaded", (e)=>{
        // Get all elements in the DOM with the route property
        document.querySelectorAll("[route]").forEach((route)=>// Add a click event listener to each of them to handle navigation
            route.addEventListener("click", (e)=>{
                e.preventDefault();
                router.navigate(e.target.getAttribute("route"));
            }, false));
    });
    window.addEventListener("hashchange", (e)=>{
        // Detect if this is a back/forward navigation by checking if user initiated it
        const isBackForward = !router.is_navigating;
        const rawPath = e.target.location.hash.substr(1);
        const cleanPath = rawPath && rawPath !== '' ? rawPath.startsWith('/') ? rawPath : '/' + rawPath : '/';
        if (cleanPath === '/contact') {
            window.history.replaceState(null, '', window.location.pathname + (router.path ? '#' + router.path : ''));
            document.dispatchEvent(new CustomEvent('open-contact-popup'));
            return;
        }
        if (isBackForward) router.navigate(cleanPath, {
            skipAnimations: true
        });
    });
    // Return the router instance for programmatic access
    return router;
};

},{"./Router.js":"io5lr","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"io5lr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _lit = require("lit");
var _breadcrumbNavJs = require("../views/elements/breadcrumb-nav.js");
function updateMetaTags(path) {
    const routes = {
        '/': {
            title: 'Benjamin Lappalainen - BLAP64',
            description: 'Portfolio site of Creative Technologist, Educator, and Artist Benjamin Lappalainen. Interactive media installations, photography collections, and creative coding projects.',
            canonical: 'https://blap64.com/'
        },
        '/about': {
            title: 'About - Benjamin Lappalainen',
            description: 'Biography and CV of Benjamin Lappalainen, Creative Technologist and Interactive Media Artist based in Toronto.',
            canonical: 'https://blap64.com/about'
        },
        '/about/resume': {
            title: 'Technical Resume - Benjamin Lappalainen',
            description: 'Technical resume of Benjamin Lappalainen, Creative Technologist and Software Developer specializing in networked systems, interactive media, and computer vision.',
            canonical: 'https://blap64.com/about/resume'
        },
        '/interactive': {
            title: 'Interactive Projects - Benjamin Lappalainen',
            description: 'Interactive media installations and web experiences by Benjamin Lappalainen. Creative coding, digital art, and live performance technology.',
            canonical: 'https://blap64.com/interactive'
        },
        '/interactive/live': {
            title: 'Live Installations - Benjamin Lappalainen',
            description: 'Live interactive media installations and performance projects by Benjamin Lappalainen. Real-time visuals, sensor-driven art, and audience participation.',
            canonical: 'https://blap64.com/interactive/live'
        },
        '/interactive/web': {
            title: 'Web Experiences - Benjamin Lappalainen',
            description: 'Interactive web experiences and creative coding projects by Benjamin Lappalainen. Browser-based generative art, simulations, and visual experiments.',
            canonical: 'https://blap64.com/interactive/web'
        },
        '/photo': {
            title: 'Photography - Benjamin Lappalainen',
            description: 'Photography collections by Benjamin Lappalainen including portrait, performance, experimental, and astrophotography.',
            canonical: 'https://blap64.com/photo'
        },
        '/links': {
            title: 'Links - Benjamin Lappalainen',
            description: 'Contact information, social links, and newsletter signup for Benjamin Lappalainen.',
            canonical: 'https://blap64.com/links'
        },
        '/links/learn': {
            title: 'Learn - Benjamin Lappalainen',
            description: 'Workshops, TouchDesigner tutorials, and project files from Benjamin Lappalainen.',
            canonical: 'https://blap64.com/links/learn'
        },
        '/links/learn/workshops': {
            title: 'Workshops - Benjamin Lappalainen',
            description: 'Creative technology and TouchDesigner workshops led by Benjamin Lappalainen.',
            canonical: 'https://blap64.com/links/learn/workshops'
        },
        '/links/workshops': {
            title: 'Workshops - Benjamin Lappalainen',
            description: 'Creative technology and TouchDesigner workshops led by Benjamin Lappalainen.',
            canonical: 'https://blap64.com/links/learn/workshops'
        },
        '/oops': {
            title: 'Page Not Found - Benjamin Lappalainen',
            description: 'The page you were looking for could not be found.',
            canonical: 'https://blap64.com/'
        }
    };
    const routeInfo = routes[path] || routes['/'];
    document.title = routeInfo.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.content = routeInfo.description;
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = routeInfo.title;
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.content = routeInfo.description;
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.content = routeInfo.canonical;
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.content = routeInfo.title;
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.content = routeInfo.description;
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = routeInfo.canonical;
}
class Router {
    constructor(routes = [], render_node){
        this.routes = routes;
        this.render_node = render_node;
        this.path = "";
        this.is_navigating = false;
        // Clean the initial path to avoid hashbang issues
        const rawInitialPath = location.hash.substr(1);
        const initialPath = rawInitialPath && rawInitialPath !== '' ? rawInitialPath.startsWith('/') ? rawInitialPath : '/' + rawInitialPath : '/';
        this.navigate(initialPath);
    }
    match(route, request_path) {
        let param_names = [];
        // regex for the route
        let regex_path = "^" + route.path.replace(/([:*])(\w+)/g, (full, colon, name)=>{
            param_names.push(name);
            return "([^\/]+)";
        }) + "$";
        let params = {};
        // match the route using the regex above
        let route_match = request_path.match(new RegExp(regex_path));
        if (route_match !== null) // get query parameters if available
        params = route_match.slice(1).reduce((params, value, index)=>{
            if (params === null) params = {};
            params[param_names[index]] = value;
            return params;
        }, null);
        // set query parameters
        route.setProps(params);
        return route_match;
    }
    navigate(path, options = {}) {
        if (path === '/contact') {
            window.location.hash = '#' + (this.path || '/');
            document.dispatchEvent(new CustomEvent('open-contact-popup'));
            return;
        }
        if (path == this.path || this.is_navigating) return;
        // Check for skipAnimations URL parameter
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('skipAnimations') === 'true' && !options.hasOwnProperty('skipAnimations')) options.skipAnimations = true;
        this.path = path;
        // Look for a matching route, display 404 page otherwise
        const route = this.routes.filter((route)=>this.match(route, path))[0];
        // Reset CSS classes on all routes in the view
        document.querySelectorAll("[route]").forEach((route)=>route.classList.remove("route-active"));
        //.forEach((route) => (route.className = "pointer route"));
        if (!route) {
            // Find the 404 route and render it directly
            const notFoundRoute = this.routes.find((r)=>r.path === "/oops");
            if (notFoundRoute) {
                this.is_navigating = true;
                document.getElementById("app").style.opacity = 0;
                setTimeout(()=>{
                    (0, _lit.render)(notFoundRoute.renderView(), this.render_node);
                    document.getElementById("app").style.opacity = 1;
                    this.is_navigating = false;
                    (0, _breadcrumbNavJs.updateBreadcrumb)("/oops");
                    updateMetaTags("/oops");
                }, 250);
            }
            return;
        } else {
            this.is_navigating = true;
            // Fade out the main view
            if (!options.instant) document.getElementById("app").style.opacity = 0;
            let route_element = document.querySelector(`[route=${CSS.escape(route.path)}]`);
            // Update the CSS class on the active route
            if (route_element !== null) route_element.classList.add("route-active");
            // Render new page and fade in the main view after 200ms
            const renderRoute = (function() {
                // Update URL to match clean path
                const cleanPath = path.startsWith('/') ? path : '/' + path;
                if (window.location.hash !== '#' + cleanPath) window.location.hash = '#' + cleanPath;
                // Add navigation options to route props
                const routeProps = route.props || {};
                if (options.skipAnimations) routeProps.skipAnimations = true;
                route.setProps(routeProps);
                // Lit template rendering of HTML for the view
                (0, _lit.render)(route.renderView(), this.render_node);
                // Sick fade bro
                document.getElementById("app").style.opacity = 1;
                this.is_navigating = false;
                // Update breadcrumb navigation with clean path
                (0, _breadcrumbNavJs.updateBreadcrumb)(cleanPath);
                // Update meta tags for SEO
                updateMetaTags(cleanPath);
            }).bind(this);
            if (options.instant) renderRoute();
            else setTimeout(renderRoute, 250);
        }
    }
    addRoutes(routes) {
        this.routes = [
            ...this.routes,
            ...routes
        ];
    }
    navigateBack(path) {
        this.navigate(path, {
            skipAnimations: true
        });
    }
}
exports.default = Router;

},{"lit":"hh14x","../views/elements/breadcrumb-nav.js":"lsjm2","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lsjm2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createBreadcrumbNav", ()=>createBreadcrumbNav);
parcelHelpers.export(exports, "updateBreadcrumb", ()=>updateBreadcrumb);
var _litHtml = require("lit-html");
var _projectDetailsJs = require("../Installations/project-details.js");
var _photoCollectionsJs = require("../Photo/photo-collections.js");
var _projectDetailsJs1 = require("../WebExperiences/project-details.js");
var _linkDataJs = require("../Links/link-data.js");
// Map routes to human-readable directory names and their actual paths
const pathMap = {
    'home': '/',
    'about': '/about',
    'interactive': '/interactive',
    'live': '/interactive/live',
    '404': '/oops'
};
// Function to get breadcrumb segments with navigation paths
function getBreadcrumbSegments(currentPath) {
    // Remove hashbang if present (handles /#/, #/, ##/, etc.)
    const cleanPath = currentPath.replace(/^\/?#+\/?/, '') || '/';
    // Handle root path
    if (cleanPath === '/' || cleanPath === '') return [
        {
            name: '~',
            path: null
        },
        {
            name: 'home',
            path: '/'
        }
    ];
    // Handle project-specific paths
    const projectMatch = cleanPath.match(/^\/interactive\/live\/(.+)$/);
    if (projectMatch) {
        const projectSlug = projectMatch[1];
        const project = (0, _projectDetailsJs.findProjectBySlug)(projectSlug);
        return [
            {
                name: '~',
                path: null
            },
            {
                name: 'home',
                path: '/'
            },
            {
                name: 'interactive',
                path: '/interactive'
            },
            {
                name: 'live',
                path: '/interactive/live'
            },
            {
                name: project ? project.name : projectSlug,
                path: cleanPath
            }
        ];
    }
    // Handle web project-specific paths
    const webProjectMatch = cleanPath.match(/^\/interactive\/web\/(.+)$/);
    if (webProjectMatch) {
        const projectSlug = webProjectMatch[1];
        const project = (0, _projectDetailsJs1.findProjectBySlug)(projectSlug);
        return [
            {
                name: '~',
                path: null
            },
            {
                name: 'home',
                path: '/'
            },
            {
                name: 'interactive',
                path: '/interactive'
            },
            {
                name: 'web',
                path: '/interactive/web'
            },
            {
                name: project ? project.name : projectSlug,
                path: cleanPath
            }
        ];
    }
    // Handle photo collection-specific paths
    const collectionMatch = cleanPath.match(/^\/photo\/(.+)$/);
    if (collectionMatch) {
        const collectionSlug = collectionMatch[1];
        const collection = (0, _photoCollectionsJs.findCollectionBySlug)(collectionSlug);
        return [
            {
                name: '~',
                path: null
            },
            {
                name: 'home',
                path: '/'
            },
            {
                name: 'photo',
                path: '/photo'
            },
            {
                name: collection ? collection.name : collectionSlug,
                path: cleanPath
            }
        ];
    }
    // Handle link group paths
    const linkGroupMatch = cleanPath.match(/^\/links\/(.+)$/);
    if (linkGroupMatch) {
        const slugs = linkGroupMatch[1].split('/');
        const groupPath = (0, _linkDataJs.findLinkGroupPath)(slugs[slugs.length - 1]);
        const crumbs = [
            {
                name: '~',
                path: null
            },
            {
                name: 'home',
                path: '/'
            },
            {
                name: 'links',
                path: '/links'
            }
        ];
        if (groupPath) groupPath.forEach((linkGroup, index)=>{
            crumbs.push({
                name: linkGroup.id,
                path: '/links/' + groupPath.slice(0, index + 1).map((g)=>g.id).join('/')
            });
        });
        else crumbs.push({
            name: slugs[slugs.length - 1],
            path: cleanPath
        });
        return crumbs;
    }
    // Handle nested paths
    if (cleanPath === '/interactive/live') return [
        {
            name: '~',
            path: null
        },
        {
            name: 'home',
            path: '/'
        },
        {
            name: 'interactive',
            path: '/interactive'
        },
        {
            name: 'live',
            path: '/interactive/live'
        }
    ];
    if (cleanPath === '/interactive/web') return [
        {
            name: '~',
            path: null
        },
        {
            name: 'home',
            path: '/'
        },
        {
            name: 'interactive',
            path: '/interactive'
        },
        {
            name: 'web',
            path: '/interactive/web'
        }
    ];
    // Handle single level paths
    if (cleanPath === '/about') return [
        {
            name: '~',
            path: null
        },
        {
            name: 'home',
            path: '/'
        },
        {
            name: 'about',
            path: '/about'
        }
    ];
    if (cleanPath === '/about/resume') return [
        {
            name: '~',
            path: null
        },
        {
            name: 'home',
            path: '/'
        },
        {
            name: 'about',
            path: '/about'
        },
        {
            name: 'resume',
            path: '/about/resume'
        }
    ];
    if (cleanPath === '/interactive') return [
        {
            name: '~',
            path: null
        },
        {
            name: 'home',
            path: '/'
        },
        {
            name: 'interactive',
            path: '/interactive'
        }
    ];
    if (cleanPath === '/photo') return [
        {
            name: '~',
            path: null
        },
        {
            name: 'home',
            path: '/'
        },
        {
            name: 'photo',
            path: '/photo'
        }
    ];
    if (cleanPath === '/links') return [
        {
            name: '~',
            path: null
        },
        {
            name: 'home',
            path: '/'
        },
        {
            name: 'links',
            path: '/links'
        }
    ];
    if (cleanPath === '/oops') return [
        {
            name: '~',
            path: null
        },
        {
            name: 'home',
            path: '/'
        },
        {
            name: '404',
            path: '/oops'
        }
    ];
    // Fallback for unmapped paths
    return [
        {
            name: '~',
            path: null
        },
        {
            name: 'home',
            path: '/'
        },
        {
            name: cleanPath.replace('/', ''),
            path: cleanPath
        }
    ];
}
// Handle navigation clicks
function handleBreadcrumbClick(event, path) {
    event.preventDefault();
    if (path && window.appRouter) {
        // Skip animations when navigating to home from breadcrumb
        const options = path === '/' ? {
            skipAnimations: true
        } : {};
        window.appRouter.navigate(path, options);
    }
}
const createBreadcrumbNav = (currentPath)=>{
    const segments = getBreadcrumbSegments(currentPath);
    return (0, _litHtml.html)`
        <div class="breadcrumb-nav">
            <span class="breadcrumb-text">
                <span class="breadcrumb-segment" @click=${(e)=>handleBreadcrumbClick(e, '/')}>~/home</span>${segments.length > 2 ? segments.slice(2).map((segment)=>(0, _litHtml.html)`<span class="breadcrumb-separator">/</span><span class="breadcrumb-segment" @click=${(e)=>handleBreadcrumbClick(e, segment.path)}>${segment.name}</span>`) : ''}
            </span>
        </div>
    `;
};
const updateBreadcrumb = (currentPath)=>{
    const breadcrumbContainer = document.getElementById("breadcrumb-container");
    if (breadcrumbContainer) {
        // Ensure we clean the path here too in case router passes it with hashbang
        const cleanPath = currentPath.replace(/^\/?#+\/?/, '') || '/';
        require("54487190028a92fe").then(({ render })=>{
            render(createBreadcrumbNav(cleanPath), breadcrumbContainer);
        });
    }
};

},{"lit-html":"l15as","../Installations/project-details.js":"8OjNG","../Photo/photo-collections.js":"8dWWn","../WebExperiences/project-details.js":"6cZhw","../Links/link-data.js":"kRkpX","54487190028a92fe":"cNg9d","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8OjNG":[function(require,module,exports,__globalThis) {
// Bird Conductor media imports
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "projects", ()=>projects);
parcelHelpers.export(exports, "findProjectBySlug", ()=>findProjectBySlug);
parcelHelpers.export(exports, "getProjectIndexBySlug", ()=>getProjectIndexBySlug);
var _img1681OptimizedMp4 = require("url:../../assets/interactive/live/bird-conductor/IMG_1681_optimized.mp4");
var _img1681OptimizedMp4Default = parcelHelpers.interopDefault(_img1681OptimizedMp4);
var _birdConductor07837Webp = require("url:../../assets/interactive/live/bird-conductor/bird_conductor-07837.webp");
var _birdConductor07837WebpDefault = parcelHelpers.interopDefault(_birdConductor07837Webp);
var _birdConductor07847Webp = require("url:../../assets/interactive/live/bird-conductor/bird_conductor-07847.webp");
var _birdConductor07847WebpDefault = parcelHelpers.interopDefault(_birdConductor07847Webp);
var _birdConductor07871Webp = require("url:../../assets/interactive/live/bird-conductor/bird_conductor-07871.webp");
var _birdConductor07871WebpDefault = parcelHelpers.interopDefault(_birdConductor07871Webp);
// Sketching Flock media imports
var _img6871OptimizedMp4 = require("url:../../assets/interactive/live/sketching-flock/IMG_6871_optimized.mp4");
var _img6871OptimizedMp4Default = parcelHelpers.interopDefault(_img6871OptimizedMp4);
var _sketchingFlock3OptimizedMp4 = require("url:../../assets/interactive/live/sketching-flock/sketching-flock-3_optimized.mp4");
var _sketchingFlock3OptimizedMp4Default = parcelHelpers.interopDefault(_sketchingFlock3OptimizedMp4);
var _img7189Webp = require("url:../../assets/interactive/live/sketching-flock/IMG_7189.webp");
var _img7189WebpDefault = parcelHelpers.interopDefault(_img7189Webp);
var _sketchingFlockWebp = require("url:../../assets/interactive/live/sketching-flock/Sketching Flock.webp");
var _sketchingFlockWebpDefault = parcelHelpers.interopDefault(_sketchingFlockWebp);
var _sketchingFlock1Webp = require("url:../../assets/interactive/live/sketching-flock/sketching-flock-1.webp");
var _sketchingFlock1WebpDefault = parcelHelpers.interopDefault(_sketchingFlock1Webp);
// Blind Spots media imports
var _img6319OptimizedMp4 = require("url:../../assets/interactive/live/blind-spots/IMG_6319_optimized.mp4");
var _img6319OptimizedMp4Default = parcelHelpers.interopDefault(_img6319OptimizedMp4);
var _img6321OptimizedMp4 = require("url:../../assets/interactive/live/blind-spots/IMG_6321_optimized.mp4");
var _img6321OptimizedMp4Default = parcelHelpers.interopDefault(_img6321OptimizedMp4);
var _bs6313Webp = require("url:../../assets/interactive/live/blind-spots/bs-6313.webp");
var _bs6313WebpDefault = parcelHelpers.interopDefault(_bs6313Webp);
// Game Set Match media imports
var _ben08878Webp = require("url:../../assets/interactive/live/game-set-match/BEN08878.webp");
var _ben08878WebpDefault = parcelHelpers.interopDefault(_ben08878Webp);
var _img2907OptimizedMp4 = require("url:../../assets/interactive/live/game-set-match/IMG_2907_optimized.mp4");
var _img2907OptimizedMp4Default = parcelHelpers.interopDefault(_img2907OptimizedMp4);
var _img2908OptimizedMp4 = require("url:../../assets/interactive/live/game-set-match/IMG_2908_optimized.mp4");
var _img2908OptimizedMp4Default = parcelHelpers.interopDefault(_img2908OptimizedMp4);
var _img2918OptimizedMp4 = require("url:../../assets/interactive/live/game-set-match/IMG_2918_optimized.mp4");
var _img2918OptimizedMp4Default = parcelHelpers.interopDefault(_img2918OptimizedMp4);
var _img2943Webp = require("url:../../assets/interactive/live/game-set-match/IMG_2943.webp");
var _img2943WebpDefault = parcelHelpers.interopDefault(_img2943Webp);
// Live Coding media imports
var _a00103021904C157OptimizedMp4 = require("url:../../assets/interactive/live/live-coding/A001_03021904_C157_optimized.mp4");
var _a00103021904C157OptimizedMp4Default = parcelHelpers.interopDefault(_a00103021904C157OptimizedMp4);
var _img2870OptimizedMp4 = require("url:../../assets/interactive/live/live-coding/IMG_2870_optimized.mp4");
var _img2870OptimizedMp4Default = parcelHelpers.interopDefault(_img2870OptimizedMp4);
var _img2871OptimizedMp4 = require("url:../../assets/interactive/live/live-coding/IMG_2871_optimized.mp4");
var _img2871OptimizedMp4Default = parcelHelpers.interopDefault(_img2871OptimizedMp4);
var _img3967OptimizedMp4 = require("url:../../assets/interactive/live/live-coding/IMG_3967_optimized.mp4");
var _img3967OptimizedMp4Default = parcelHelpers.interopDefault(_img3967OptimizedMp4);
var _img4146Webp = require("url:../../assets/interactive/live/live-coding/IMG_4146.webp");
var _img4146WebpDefault = parcelHelpers.interopDefault(_img4146Webp);
var _img4177OptimizedMp4 = require("url:../../assets/interactive/live/live-coding/IMG_4177_optimized.mp4");
var _img4177OptimizedMp4Default = parcelHelpers.interopDefault(_img4177OptimizedMp4);
var _img5085Webp = require("url:../../assets/interactive/live/live-coding/IMG_5085.webp");
var _img5085WebpDefault = parcelHelpers.interopDefault(_img5085Webp);
// Surveil Yourself media imports
var _img0288OptimizedMp4 = require("url:../../assets/interactive/live/surveil-yourself/IMG_0288_optimized.mp4");
var _img0288OptimizedMp4Default = parcelHelpers.interopDefault(_img0288OptimizedMp4);
var _img2945OptimizedMp4 = require("url:../../assets/interactive/live/surveil-yourself/IMG_2945_optimized.mp4");
var _img2945OptimizedMp4Default = parcelHelpers.interopDefault(_img2945OptimizedMp4);
var _img5186OptimizedMp4 = require("url:../../assets/interactive/live/surveil-yourself/IMG_5186_optimized.mp4");
var _img5186OptimizedMp4Default = parcelHelpers.interopDefault(_img5186OptimizedMp4);
var _img8834Webp = require("url:../../assets/interactive/live/surveil-yourself/IMG_8834.webp");
var _img8834WebpDefault = parcelHelpers.interopDefault(_img8834Webp);
var _img8851Webp = require("url:../../assets/interactive/live/surveil-yourself/IMG_8851.webp");
var _img8851WebpDefault = parcelHelpers.interopDefault(_img8851Webp);
var _pxl20231217012002019Webp = require("url:../../assets/interactive/live/surveil-yourself/PXL_20231217_012002019.webp");
var _pxl20231217012002019WebpDefault = parcelHelpers.interopDefault(_pxl20231217012002019Webp);
var _pxl20231217013230389Webp = require("url:../../assets/interactive/live/surveil-yourself/PXL_20231217_013230389.webp");
var _pxl20231217013230389WebpDefault = parcelHelpers.interopDefault(_pxl20231217013230389Webp);
// The Reader media imports
var _reader6293Webp = require("url:../../assets/interactive/live/the-reader/reader-6293.webp");
var _reader6293WebpDefault = parcelHelpers.interopDefault(_reader6293Webp);
var _reader6302Webp = require("url:../../assets/interactive/live/the-reader/reader-6302.webp");
var _reader6302WebpDefault = parcelHelpers.interopDefault(_reader6302Webp);
var _theReaderVideoOptimizedMp4 = require("url:../../assets/interactive/live/the-reader/the-reader-video_optimized.mp4");
var _theReaderVideoOptimizedMp4Default = parcelHelpers.interopDefault(_theReaderVideoOptimizedMp4);
// We Play media imports
var _img7201Webp = require("url:../../assets/interactive/live/we-play/IMG_7201.webp");
var _img7201WebpDefault = parcelHelpers.interopDefault(_img7201Webp);
var _img7205Webp = require("url:../../assets/interactive/live/we-play/IMG_7205.webp");
var _img7205WebpDefault = parcelHelpers.interopDefault(_img7205Webp);
var _img7210OptimizedMp4 = require("url:../../assets/interactive/live/we-play/IMG_7210_optimized.mp4");
var _img7210OptimizedMp4Default = parcelHelpers.interopDefault(_img7210OptimizedMp4);
var _img7218Webp = require("url:../../assets/interactive/live/we-play/IMG_7218.webp");
var _img7218WebpDefault = parcelHelpers.interopDefault(_img7218Webp);
var _img7219Webp = require("url:../../assets/interactive/live/we-play/IMG_7219.webp");
var _img7219WebpDefault = parcelHelpers.interopDefault(_img7219Webp);
// LW 13.1 media imports
var _lw131CompOptimizedMp4 = require("url:../../assets/interactive/live/lw-13-1/LW13-1_comp_optimized.mp4");
var _lw131CompOptimizedMp4Default = parcelHelpers.interopDefault(_lw131CompOptimizedMp4);
var _lw1311Webp = require("url:../../assets/interactive/live/lw-13-1/lw13_1-1.webp");
var _lw1311WebpDefault = parcelHelpers.interopDefault(_lw1311Webp);
var _lw13114Webp = require("url:../../assets/interactive/live/lw-13-1/lw13_1-14.webp");
var _lw13114WebpDefault = parcelHelpers.interopDefault(_lw13114Webp);
var _lw13115Webp = require("url:../../assets/interactive/live/lw-13-1/lw13_1-15.webp");
var _lw13115WebpDefault = parcelHelpers.interopDefault(_lw13115Webp);
var _lw13116Webp = require("url:../../assets/interactive/live/lw-13-1/lw13_1-16.webp");
var _lw13116WebpDefault = parcelHelpers.interopDefault(_lw13116Webp);
var _lw13119Webp = require("url:../../assets/interactive/live/lw-13-1/lw13_1-19.webp");
var _lw13119WebpDefault = parcelHelpers.interopDefault(_lw13119Webp);
var _lw1315320Webp = require("url:../../assets/interactive/live/lw-13-1/lw13_1-5320.webp");
var _lw1315320WebpDefault = parcelHelpers.interopDefault(_lw1315320Webp);
// Video thumbnail imports
var _img1681OptimizedThumbJpg = require("url:../../assets/interactive/live/bird-conductor/thumbnails/IMG_1681_optimized_thumb.jpg");
var _img1681OptimizedThumbJpgDefault = parcelHelpers.interopDefault(_img1681OptimizedThumbJpg);
var _img6871OptimizedThumbJpg = require("url:../../assets/interactive/live/sketching-flock/thumbnails/IMG_6871_optimized_thumb.jpg");
var _img6871OptimizedThumbJpgDefault = parcelHelpers.interopDefault(_img6871OptimizedThumbJpg);
var _sketchingFlock3OptimizedThumbJpg = require("url:../../assets/interactive/live/sketching-flock/thumbnails/sketching-flock-3_optimized_thumb.jpg");
var _sketchingFlock3OptimizedThumbJpgDefault = parcelHelpers.interopDefault(_sketchingFlock3OptimizedThumbJpg);
var _img6319OptimizedThumbJpg = require("url:../../assets/interactive/live/blind-spots/thumbnails/IMG_6319_optimized_thumb.jpg");
var _img6319OptimizedThumbJpgDefault = parcelHelpers.interopDefault(_img6319OptimizedThumbJpg);
var _img6321OptimizedThumbJpg = require("url:../../assets/interactive/live/blind-spots/thumbnails/IMG_6321_optimized_thumb.jpg");
var _img6321OptimizedThumbJpgDefault = parcelHelpers.interopDefault(_img6321OptimizedThumbJpg);
var _img2907OptimizedThumbJpg = require("url:../../assets/interactive/live/game-set-match/thumbnails/IMG_2907_optimized_thumb.jpg");
var _img2907OptimizedThumbJpgDefault = parcelHelpers.interopDefault(_img2907OptimizedThumbJpg);
var _img2908OptimizedThumbJpg = require("url:../../assets/interactive/live/game-set-match/thumbnails/IMG_2908_optimized_thumb.jpg");
var _img2908OptimizedThumbJpgDefault = parcelHelpers.interopDefault(_img2908OptimizedThumbJpg);
var _img2918OptimizedThumbJpg = require("url:../../assets/interactive/live/game-set-match/thumbnails/IMG_2918_optimized_thumb.jpg");
var _img2918OptimizedThumbJpgDefault = parcelHelpers.interopDefault(_img2918OptimizedThumbJpg);
var _a00103021904C157OptimizedThumbJpg = require("url:../../assets/interactive/live/live-coding/thumbnails/A001_03021904_C157_optimized_thumb.jpg");
var _a00103021904C157OptimizedThumbJpgDefault = parcelHelpers.interopDefault(_a00103021904C157OptimizedThumbJpg);
var _img2870OptimizedThumbJpg = require("url:../../assets/interactive/live/live-coding/thumbnails/IMG_2870_optimized_thumb.jpg");
var _img2870OptimizedThumbJpgDefault = parcelHelpers.interopDefault(_img2870OptimizedThumbJpg);
var _img2871OptimizedThumbJpg = require("url:../../assets/interactive/live/live-coding/thumbnails/IMG_2871_optimized_thumb.jpg");
var _img2871OptimizedThumbJpgDefault = parcelHelpers.interopDefault(_img2871OptimizedThumbJpg);
var _img3967OptimizedThumbJpg = require("url:../../assets/interactive/live/live-coding/thumbnails/IMG_3967_optimized_thumb.jpg");
var _img3967OptimizedThumbJpgDefault = parcelHelpers.interopDefault(_img3967OptimizedThumbJpg);
var _img4177OptimizedThumbJpg = require("url:../../assets/interactive/live/live-coding/thumbnails/IMG_4177_optimized_thumb.jpg");
var _img4177OptimizedThumbJpgDefault = parcelHelpers.interopDefault(_img4177OptimizedThumbJpg);
var _img0288OptimizedThumbJpg = require("url:../../assets/interactive/live/surveil-yourself/thumbnails/IMG_0288_optimized_thumb.jpg");
var _img0288OptimizedThumbJpgDefault = parcelHelpers.interopDefault(_img0288OptimizedThumbJpg);
var _img2945OptimizedThumbJpg = require("url:../../assets/interactive/live/surveil-yourself/thumbnails/IMG_2945_optimized_thumb.jpg");
var _img2945OptimizedThumbJpgDefault = parcelHelpers.interopDefault(_img2945OptimizedThumbJpg);
var _img5186OptimizedThumbJpg = require("url:../../assets/interactive/live/surveil-yourself/thumbnails/IMG_5186_optimized_thumb.jpg");
var _img5186OptimizedThumbJpgDefault = parcelHelpers.interopDefault(_img5186OptimizedThumbJpg);
var _theReaderVideoOptimizedThumbJpg = require("url:../../assets/interactive/live/the-reader/thumbnails/the-reader-video_optimized_thumb.jpg");
var _theReaderVideoOptimizedThumbJpgDefault = parcelHelpers.interopDefault(_theReaderVideoOptimizedThumbJpg);
var _img7210OptimizedThumbJpg = require("url:../../assets/interactive/live/we-play/thumbnails/IMG_7210_optimized_thumb.jpg");
var _img7210OptimizedThumbJpgDefault = parcelHelpers.interopDefault(_img7210OptimizedThumbJpg);
var _lw131CompOptimizedThumbJpg = require("url:../../assets/interactive/live/lw-13-1/thumbnails/LW13-1_comp_optimized_thumb.jpg");
var _lw131CompOptimizedThumbJpgDefault = parcelHelpers.interopDefault(_lw131CompOptimizedThumbJpg);
// Preview thumbnails (256x256 optimized for fast hover loading)
var _sketchingFlockWebp1 = require("url:../../assets/interactive/live/preview-thumbs/sketching-flock.webp");
var _sketchingFlockWebpDefault1 = parcelHelpers.interopDefault(_sketchingFlockWebp1);
var _wePlayWebp = require("url:../../assets/interactive/live/preview-thumbs/we-play.webp");
var _wePlayWebpDefault = parcelHelpers.interopDefault(_wePlayWebp);
var _blindSpotsWebp = require("url:../../assets/interactive/live/preview-thumbs/blind-spots.webp");
var _blindSpotsWebpDefault = parcelHelpers.interopDefault(_blindSpotsWebp);
var _theReaderWebp = require("url:../../assets/interactive/live/preview-thumbs/the-reader.webp");
var _theReaderWebpDefault = parcelHelpers.interopDefault(_theReaderWebp);
var _longWinter131Webp = require("url:../../assets/interactive/live/preview-thumbs/long-winter-13-1.webp");
var _longWinter131WebpDefault = parcelHelpers.interopDefault(_longWinter131Webp);
var _gameSetMatchWebp = require("url:../../assets/interactive/live/preview-thumbs/game-set-match.webp");
var _gameSetMatchWebpDefault = parcelHelpers.interopDefault(_gameSetMatchWebp);
var _liveCodingWebp = require("url:../../assets/interactive/live/preview-thumbs/live-coding.webp");
var _liveCodingWebpDefault = parcelHelpers.interopDefault(_liveCodingWebp);
var _birdConductorWebp = require("url:../../assets/interactive/live/preview-thumbs/bird-conductor.webp");
var _birdConductorWebpDefault = parcelHelpers.interopDefault(_birdConductorWebp);
var _surveilYourselfWebp = require("url:../../assets/interactive/live/preview-thumbs/surveil-yourself.webp");
var _surveilYourselfWebpDefault = parcelHelpers.interopDefault(_surveilYourselfWebp);
const projects = [
    {
        name: "Sketching Flock",
        slug: "sketching-flock",
        type: "Interactive Installation",
        location: "Toronto, Canada",
        year: "2025",
        description: "Sketching Flock is an interactive projection installation that uses hand-tracking technology to enable participants to direct the flight paths of digital \"birds\", causing them to paint abstractly on an ever-changing virtual canvas. The work explores the collaboration between natural movement and algorithmic motion design, while examining participants' willingness to be perceived by computer vision systems in pursuit of playful creative expression.\n\nFirst exhibited on March 1st, 2025 at InterAccess's \"Goodbye Dupont\" Open HDMI show on the IA360 projection system (Toronto, Canada). Also exhibited on March 29th, 2025 at the UKAI Projects \"Farewell to the Bridge\" 24 hour art festival (Toronto, Canada).\n\nThis installation was built using the original Leap Motion hand-tracking controller for enabling interactivity, JavaScript with the p5.js creative coding library for realtime visuals, and Chataigne for the convenient mapping and routing of hand-tracking information between the two.",
        images: [
            (0, _img6871OptimizedMp4Default.default),
            (0, _sketchingFlockWebpDefault.default),
            (0, _sketchingFlock3OptimizedMp4Default.default),
            (0, _img7189WebpDefault.default),
            (0, _sketchingFlock1WebpDefault.default)
        ],
        thumbnails: {
            [(0, _img6871OptimizedMp4Default.default)]: (0, _img6871OptimizedThumbJpgDefault.default),
            [(0, _sketchingFlock3OptimizedMp4Default.default)]: (0, _sketchingFlock3OptimizedThumbJpgDefault.default)
        },
        previewThumbnail: (0, _sketchingFlockWebpDefault1.default)
    },
    {
        name: "We Play In The World They Make",
        slug: "we-play",
        type: "Role-Playing Game",
        location: "Toronto, Canada",
        year: "2025",
        description: 'We Play In The World They Make is an interactive role-playing game installation where five participants compete for resources while consulting AI companions that embody different ideological positions. Each player is paired with a distinct AI shrine representing power structures\u2014DOGMA, ATTENTION, ACCUMULATION, PRIVILEGE, and POWER\u2014that offer strategic advice aligned with their respective worldviews. An AI judge evaluates player pitches based on algorithmic criteria including movement stability, vocal clarity, and conformity. The work examines how algorithmic systems embed particular visions of the future while positioning participants as both collaborators with and subjects of machine intelligence.\n\nMultiple runs of the game prototype were played on March 29th, 2025 at the UKAI Projects "Farewell to the Bridge" 24 hour art festival (Toronto, Canada).\n\nThis installation incorporates multiple AI systems: the JUDGE uses computer vision and speech recognition to evaluate player performances, while AI companions like ACCUMULATION employ OCR to interpret handwritten communications, creating a complex ecosystem of human-AI interaction within structured competitive play.',
        images: [
            (0, _img7210OptimizedMp4Default.default),
            (0, _img7201WebpDefault.default),
            (0, _img7205WebpDefault.default),
            (0, _img7218WebpDefault.default),
            (0, _img7219WebpDefault.default)
        ],
        thumbnails: {
            [(0, _img7210OptimizedMp4Default.default)]: (0, _img7210OptimizedThumbJpgDefault.default)
        },
        previewThumbnail: (0, _wePlayWebpDefault.default)
    },
    {
        name: "Blind Spots",
        slug: "blind-spots",
        type: "Interactive Installation",
        location: "Toronto, Canada",
        year: "2025",
        description: "Blind Spots is an interactive projection installation that vanishes when directly observed, revealing itself only in peripheral vision. Using gaze-tracking technology, the piece presents an amalgam of recordings from previous audience interactions, becoming visible only when viewers look away. Drawing on Derrida's concept of \"hauntology,\" the work critiques pervasive surveillance systems by making visible our complicity within technological infrastructures that shape reality while remaining largely invisible.\n\nCreated as part of the Aberrant AI residency hosted by UKAI Projects. First prototype exhibited at The Bridge Open Studio event (Toronto, Canada) on January 17th, 2025.\n\nCollaboration with software artist Ryan Kelln under the ArtRemains Collective. This installation was built using computer vision and AI technologies for gaze detection, with custom software for real-time video processing and interactive response.",
        images: [
            (0, _bs6313WebpDefault.default),
            (0, _img6321OptimizedMp4Default.default),
            (0, _img6319OptimizedMp4Default.default)
        ],
        thumbnails: {
            [(0, _img6319OptimizedMp4Default.default)]: (0, _img6319OptimizedThumbJpgDefault.default),
            [(0, _img6321OptimizedMp4Default.default)]: (0, _img6321OptimizedThumbJpgDefault.default)
        },
        previewThumbnail: (0, _blindSpotsWebpDefault.default)
    },
    {
        name: "The Reader",
        slug: "the-reader",
        type: "Perceptive Installation",
        location: "Toronto, Canada",
        year: "2025",
        description: "The Reader is an AI-driven installation that continuously observes its environment and generates evolving narratives from collected data. Using computer vision, audio recognition, and Bluetooth scanning, the system gathers environmental information and feeds it to a locally-run large language model that creates an ongoing story displayed alongside reactive visuals and audio. By mimicking surveillance systems while maintaining complete privacy through local processing, the work makes visible the normally opaque operations of data collection and algorithmic interpretation.\n\nWork-in-progress version exhibited at The Bridge Open Studio showcase (Toronto, Canada) on January 17th, 2025 as part of the Aberrant AI residency.\n\nThis installation was built using computer vision, speech recognition, Bluetooth scanning, a local LLM for narrative generation, and custom audio-visual systems that respond to environmental data streams.",
        images: [
            (0, _theReaderVideoOptimizedMp4Default.default),
            (0, _reader6293WebpDefault.default),
            (0, _reader6302WebpDefault.default)
        ],
        thumbnails: {
            [(0, _theReaderVideoOptimizedMp4Default.default)]: (0, _theReaderVideoOptimizedThumbJpgDefault.default)
        },
        previewThumbnail: (0, _theReaderWebpDefault.default)
    },
    {
        name: "Long Winter 13.1",
        slug: "long-winter-13-1",
        type: "Live Visual Performance",
        location: "Toronto, Canada",
        year: "2024",
        description: "A live audio-visual performance that translates musical input into reactive projected visuals in real-time. Using direct audio feeds from performers, the system generates abstract animations that respond dynamically to frequency, amplitude, and rhythmic patterns. The performance explores the intersection of live musical improvisation and computational visualization, creating an immersive ceiling-projected environment.\n\nPerformed at Long Winter season 13 opener event (Toronto, Canada) on November 8th, 2024.\n\nThis performance utilized VDMX for video mixing and audio analysis, custom GLSL/ISF shaders, p5.js browser-based sketches, and TouchOSC for real-time parameter control via iPad Pro.",
        images: [
            (0, _lw131CompOptimizedMp4Default.default),
            (0, _lw1311WebpDefault.default),
            (0, _lw13114WebpDefault.default),
            (0, _lw13115WebpDefault.default),
            (0, _lw13116WebpDefault.default),
            (0, _lw13119WebpDefault.default),
            (0, _lw1315320WebpDefault.default)
        ],
        thumbnails: {
            [(0, _lw131CompOptimizedMp4Default.default)]: (0, _lw131CompOptimizedThumbJpgDefault.default)
        },
        previewThumbnail: (0, _longWinter131WebpDefault.default)
    },
    {
        name: "Game, Set, Match",
        slug: "game-set-match",
        type: "Interactive Installation",
        location: "Toronto, Canada",
        year: "2024",
        description: "Game, Set, Match is an interactive projection installation that transforms viewers into players within a surreal tennis match. A procedurally generated crowd of cartoon spectators tracks audience movement while tennis balls bounce across the space in response to occupancy levels. Hand gestures trigger cheers and waves from the digital crowd. The work playfully examines human-computer interaction and the gamification of social spaces through embodied participation.\n\nExhibited on the IA360\xb0 projection system at InterAccess Gallery (Toronto, Canada) on May 24th, 2024 as part of the inaugural IA Gateway program.\n\nThis installation was built using computer vision for movement and gesture tracking, JavaScript with p5.js for procedural crowd generation and physics simulation, and custom projection mapping for the 360\xb0 environment.",
        images: [
            (0, _img2943WebpDefault.default),
            (0, _img2918OptimizedMp4Default.default),
            (0, _img2908OptimizedMp4Default.default),
            (0, _img2907OptimizedMp4Default.default),
            (0, _ben08878WebpDefault.default)
        ],
        thumbnails: {
            [(0, _img2907OptimizedMp4Default.default)]: (0, _img2907OptimizedThumbJpgDefault.default),
            [(0, _img2908OptimizedMp4Default.default)]: (0, _img2908OptimizedThumbJpgDefault.default),
            [(0, _img2918OptimizedMp4Default.default)]: (0, _img2918OptimizedThumbJpgDefault.default)
        },
        previewThumbnail: (0, _gameSetMatchWebpDefault.default)
    },
    {
        name: "Live Coding",
        slug: "live-coding",
        type: "Live Visual Performance",
        location: "Toronto, Canada",
        year: "2024",
        description: "Live Coding is a real-time performance where code creation becomes the primary medium, generating evolving visuals through progressive algorithmic iteration. Using JavaScript and p5.js within the P5LIVE environment, the performance created abstract animations that responded to live DJ sets through repetition, trigonometric compositions, and framebuffer manipulations. The work positions programming as performative practice, exploring the intersection of computational improvisation and musical collaboration.\n\nPerformed on May 18th, 2024 and March 2nd, 2024 at Open HDMI events at InterAccess (Toronto, Canada).\n\nThis performance utilized the P5LIVE live coding environment by Ted Davis, JavaScript with p5.js creative coding library, and real-time audio input for responsive visual generation.",
        images: [
            (0, _img2870OptimizedMp4Default.default),
            (0, _img2871OptimizedMp4Default.default),
            (0, _img3967OptimizedMp4Default.default),
            (0, _a00103021904C157OptimizedMp4Default.default),
            (0, _img4177OptimizedMp4Default.default),
            (0, _img4146WebpDefault.default),
            (0, _img5085WebpDefault.default)
        ],
        thumbnails: {
            [(0, _a00103021904C157OptimizedMp4Default.default)]: (0, _a00103021904C157OptimizedThumbJpgDefault.default),
            [(0, _img2870OptimizedMp4Default.default)]: (0, _img2870OptimizedThumbJpgDefault.default),
            [(0, _img2871OptimizedMp4Default.default)]: (0, _img2871OptimizedThumbJpgDefault.default),
            [(0, _img3967OptimizedMp4Default.default)]: (0, _img3967OptimizedThumbJpgDefault.default),
            [(0, _img4177OptimizedMp4Default.default)]: (0, _img4177OptimizedThumbJpgDefault.default)
        },
        previewThumbnail: (0, _liveCodingWebpDefault.default)
    },
    {
        name: "Bird Conductor",
        slug: "bird-conductor",
        type: "Interactive Installation",
        location: "Toronto, Canada",
        year: "2024",
        description: "Bird Conductor is an interactive projection installation that enables participants to conduct flocks of digital birds through natural hand gestures captured via computer vision. The work examines how machine learning can facilitate intuitive human-computer interaction in playful contexts, exploring the translation of physical movement into algorithmic behavior.\n\nExhibited at The Bridge (Toronto, Canada) on March 29th, 2024 at Long Winter 12.3.\n\nThis installation was built using a standard webcam and the Mediapipe machine learning library for gesture recognition, JavaScript with the p5.js creative coding library for realtime visuals.",
        images: [
            (0, _img1681OptimizedMp4Default.default),
            (0, _birdConductor07871WebpDefault.default),
            (0, _birdConductor07847WebpDefault.default),
            (0, _birdConductor07837WebpDefault.default)
        ],
        thumbnails: {
            [(0, _img1681OptimizedMp4Default.default)]: (0, _img1681OptimizedThumbJpgDefault.default)
        },
        previewThumbnail: (0, _birdConductorWebpDefault.default)
    },
    {
        name: "Surveil Yourself",
        slug: "surveil-yourself",
        type: "Interactive Installation",
        location: "Toronto, Canada",
        year: "2023",
        description: "Surveil Yourself is a real-time interactive system that invites audience members to contribute their phone camera feeds to a collective projected display. Participants scan a QR code to stream their device cameras, which are integrated into a grid of feeds surrounding the space. The work questions voluntary surveillance and collective spectatorship, examining how willingly we contribute to systems of observation in exchange for participation.\n\nPremiered at P2P 2023 Open HDMI event at InterAccess (Toronto, Canada) using the IA 360 projection system.\n\nCollaboration with Asucena Di Giovanni. This installation was built using a custom web interface for video streaming, Python scripting with Syphon and OSC for data routing, VDMX for projection mapping, custom shaders for audio-reactive visuals, and TouchOSC for real-time control.",
        images: [
            (0, _img0288OptimizedMp4Default.default),
            (0, _img2945OptimizedMp4Default.default),
            (0, _img5186OptimizedMp4Default.default),
            (0, _img8834WebpDefault.default),
            (0, _img8851WebpDefault.default),
            (0, _pxl20231217012002019WebpDefault.default),
            (0, _pxl20231217013230389WebpDefault.default)
        ],
        thumbnails: {
            [(0, _img0288OptimizedMp4Default.default)]: (0, _img0288OptimizedThumbJpgDefault.default),
            [(0, _img2945OptimizedMp4Default.default)]: (0, _img2945OptimizedThumbJpgDefault.default),
            [(0, _img5186OptimizedMp4Default.default)]: (0, _img5186OptimizedThumbJpgDefault.default)
        },
        previewThumbnail: (0, _surveilYourselfWebpDefault.default)
    }
];
const findProjectBySlug = (slug)=>{
    return projects.find((project)=>project.slug === slug);
};
const getProjectIndexBySlug = (slug)=>{
    return projects.findIndex((project)=>project.slug === slug);
};

},{"url:../../assets/interactive/live/bird-conductor/IMG_1681_optimized.mp4":"2Dy22","url:../../assets/interactive/live/bird-conductor/bird_conductor-07837.webp":"ccIop","url:../../assets/interactive/live/bird-conductor/bird_conductor-07847.webp":"fTeMq","url:../../assets/interactive/live/bird-conductor/bird_conductor-07871.webp":"5m3oR","url:../../assets/interactive/live/sketching-flock/IMG_6871_optimized.mp4":"6hAT0","url:../../assets/interactive/live/sketching-flock/sketching-flock-3_optimized.mp4":"aUTCK","url:../../assets/interactive/live/sketching-flock/IMG_7189.webp":"76i10","url:../../assets/interactive/live/sketching-flock/Sketching Flock.webp":"klQ92","url:../../assets/interactive/live/sketching-flock/sketching-flock-1.webp":"cJfB0","url:../../assets/interactive/live/blind-spots/IMG_6319_optimized.mp4":"dow83","url:../../assets/interactive/live/blind-spots/IMG_6321_optimized.mp4":"iDKMu","url:../../assets/interactive/live/blind-spots/bs-6313.webp":"hfCSc","url:../../assets/interactive/live/game-set-match/BEN08878.webp":"1pWQq","url:../../assets/interactive/live/game-set-match/IMG_2907_optimized.mp4":"3ditl","url:../../assets/interactive/live/game-set-match/IMG_2908_optimized.mp4":"aiDAi","url:../../assets/interactive/live/game-set-match/IMG_2918_optimized.mp4":"5ptI9","url:../../assets/interactive/live/game-set-match/IMG_2943.webp":"741Dk","url:../../assets/interactive/live/live-coding/A001_03021904_C157_optimized.mp4":"2Q9xg","url:../../assets/interactive/live/live-coding/IMG_2870_optimized.mp4":"lexIz","url:../../assets/interactive/live/live-coding/IMG_2871_optimized.mp4":"igqxf","url:../../assets/interactive/live/live-coding/IMG_3967_optimized.mp4":"aRWEa","url:../../assets/interactive/live/live-coding/IMG_4146.webp":"bss1v","url:../../assets/interactive/live/live-coding/IMG_4177_optimized.mp4":"9CMfm","url:../../assets/interactive/live/live-coding/IMG_5085.webp":"1CNxZ","url:../../assets/interactive/live/surveil-yourself/IMG_0288_optimized.mp4":"dbucW","url:../../assets/interactive/live/surveil-yourself/IMG_2945_optimized.mp4":"5E6qd","url:../../assets/interactive/live/surveil-yourself/IMG_5186_optimized.mp4":"974Vk","url:../../assets/interactive/live/surveil-yourself/IMG_8834.webp":"hT37e","url:../../assets/interactive/live/surveil-yourself/IMG_8851.webp":"7wvfP","url:../../assets/interactive/live/surveil-yourself/PXL_20231217_012002019.webp":"gFw1y","url:../../assets/interactive/live/surveil-yourself/PXL_20231217_013230389.webp":"Y9gvZ","url:../../assets/interactive/live/the-reader/reader-6293.webp":"d2cH3","url:../../assets/interactive/live/the-reader/reader-6302.webp":"aWTvG","url:../../assets/interactive/live/the-reader/the-reader-video_optimized.mp4":"NAbjZ","url:../../assets/interactive/live/we-play/IMG_7201.webp":"9aTom","url:../../assets/interactive/live/we-play/IMG_7205.webp":"pVZiP","url:../../assets/interactive/live/we-play/IMG_7210_optimized.mp4":"Yr6ZQ","url:../../assets/interactive/live/we-play/IMG_7218.webp":"6rHcQ","url:../../assets/interactive/live/we-play/IMG_7219.webp":"kAfvb","url:../../assets/interactive/live/lw-13-1/LW13-1_comp_optimized.mp4":"9dxfN","url:../../assets/interactive/live/lw-13-1/lw13_1-1.webp":"atYG7","url:../../assets/interactive/live/lw-13-1/lw13_1-14.webp":"5eRJS","url:../../assets/interactive/live/lw-13-1/lw13_1-15.webp":"cdxuM","url:../../assets/interactive/live/lw-13-1/lw13_1-16.webp":"fZfUM","url:../../assets/interactive/live/lw-13-1/lw13_1-19.webp":"2yP1t","url:../../assets/interactive/live/lw-13-1/lw13_1-5320.webp":"iAlGO","url:../../assets/interactive/live/bird-conductor/thumbnails/IMG_1681_optimized_thumb.jpg":"c9s2u","url:../../assets/interactive/live/sketching-flock/thumbnails/IMG_6871_optimized_thumb.jpg":"51Yyt","url:../../assets/interactive/live/sketching-flock/thumbnails/sketching-flock-3_optimized_thumb.jpg":"6ZjbR","url:../../assets/interactive/live/blind-spots/thumbnails/IMG_6319_optimized_thumb.jpg":"tnBHo","url:../../assets/interactive/live/blind-spots/thumbnails/IMG_6321_optimized_thumb.jpg":"8t8bF","url:../../assets/interactive/live/game-set-match/thumbnails/IMG_2907_optimized_thumb.jpg":"b0JRU","url:../../assets/interactive/live/game-set-match/thumbnails/IMG_2908_optimized_thumb.jpg":"75iJv","url:../../assets/interactive/live/game-set-match/thumbnails/IMG_2918_optimized_thumb.jpg":"bqy1B","url:../../assets/interactive/live/live-coding/thumbnails/A001_03021904_C157_optimized_thumb.jpg":"ckcot","url:../../assets/interactive/live/live-coding/thumbnails/IMG_2870_optimized_thumb.jpg":"31oaQ","url:../../assets/interactive/live/live-coding/thumbnails/IMG_2871_optimized_thumb.jpg":"eCOJD","url:../../assets/interactive/live/live-coding/thumbnails/IMG_3967_optimized_thumb.jpg":"bfJ9u","url:../../assets/interactive/live/live-coding/thumbnails/IMG_4177_optimized_thumb.jpg":"kkBMc","url:../../assets/interactive/live/surveil-yourself/thumbnails/IMG_0288_optimized_thumb.jpg":"dL5dP","url:../../assets/interactive/live/surveil-yourself/thumbnails/IMG_2945_optimized_thumb.jpg":"4KEEe","url:../../assets/interactive/live/surveil-yourself/thumbnails/IMG_5186_optimized_thumb.jpg":"efVk0","url:../../assets/interactive/live/the-reader/thumbnails/the-reader-video_optimized_thumb.jpg":"h0uS3","url:../../assets/interactive/live/we-play/thumbnails/IMG_7210_optimized_thumb.jpg":"ivVC3","url:../../assets/interactive/live/lw-13-1/thumbnails/LW13-1_comp_optimized_thumb.jpg":"i21rQ","url:../../assets/interactive/live/preview-thumbs/sketching-flock.webp":"enKjR","url:../../assets/interactive/live/preview-thumbs/we-play.webp":"26iap","url:../../assets/interactive/live/preview-thumbs/blind-spots.webp":"9DWz8","url:../../assets/interactive/live/preview-thumbs/the-reader.webp":"53K1D","url:../../assets/interactive/live/preview-thumbs/long-winter-13-1.webp":"nb05N","url:../../assets/interactive/live/preview-thumbs/game-set-match.webp":"dbGjC","url:../../assets/interactive/live/preview-thumbs/live-coding.webp":"kS1gf","url:../../assets/interactive/live/preview-thumbs/bird-conductor.webp":"3TXkp","url:../../assets/interactive/live/preview-thumbs/surveil-yourself.webp":"4cqGF","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2Dy22":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_1681_optimized.ac3b8fba.mp4") + "?" + Date.now();

},{}],"ccIop":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("bird_conductor-07837.97eca05e.webp") + "?" + Date.now();

},{}],"fTeMq":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("bird_conductor-07847.0b45858d.webp") + "?" + Date.now();

},{}],"5m3oR":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("bird_conductor-07871.dd1d87ce.webp") + "?" + Date.now();

},{}],"6hAT0":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_6871_optimized.331ca63c.mp4") + "?" + Date.now();

},{}],"aUTCK":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("sketching-flock-3_optimized.e9471859.mp4") + "?" + Date.now();

},{}],"76i10":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_7189.c31edb50.webp") + "?" + Date.now();

},{}],"klQ92":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Sketching Flock.96f6e21e.webp") + "?" + Date.now();

},{}],"cJfB0":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("sketching-flock-1.08c727ac.webp") + "?" + Date.now();

},{}],"dow83":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_6319_optimized.958ef23d.mp4") + "?" + Date.now();

},{}],"iDKMu":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_6321_optimized.d9396c5f.mp4") + "?" + Date.now();

},{}],"hfCSc":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("bs-6313.7f313529.webp") + "?" + Date.now();

},{}],"1pWQq":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("BEN08878.49e4136e.webp") + "?" + Date.now();

},{}],"3ditl":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_2907_optimized.194b11f8.mp4") + "?" + Date.now();

},{}],"aiDAi":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_2908_optimized.22c9dc8a.mp4") + "?" + Date.now();

},{}],"5ptI9":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_2918_optimized.bc95bf94.mp4") + "?" + Date.now();

},{}],"741Dk":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_2943.a0326dda.webp") + "?" + Date.now();

},{}],"2Q9xg":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("A001_03021904_C157_optimized.482318a9.mp4") + "?" + Date.now();

},{}],"lexIz":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_2870_optimized.ec6e39c9.mp4") + "?" + Date.now();

},{}],"igqxf":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_2871_optimized.28755170.mp4") + "?" + Date.now();

},{}],"aRWEa":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_3967_optimized.12375ba0.mp4") + "?" + Date.now();

},{}],"bss1v":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_4146.721fed4a.webp") + "?" + Date.now();

},{}],"9CMfm":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_4177_optimized.7162ab16.mp4") + "?" + Date.now();

},{}],"1CNxZ":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_5085.fe41dad2.webp") + "?" + Date.now();

},{}],"dbucW":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_0288_optimized.1ddd57ba.mp4") + "?" + Date.now();

},{}],"5E6qd":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_2945_optimized.c0846e4b.mp4") + "?" + Date.now();

},{}],"974Vk":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_5186_optimized.259b02b6.mp4") + "?" + Date.now();

},{}],"hT37e":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_8834.5227979b.webp") + "?" + Date.now();

},{}],"7wvfP":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_8851.81cd2218.webp") + "?" + Date.now();

},{}],"gFw1y":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("PXL_20231217_012002019.dc462ec9.webp") + "?" + Date.now();

},{}],"Y9gvZ":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("PXL_20231217_013230389.9f1acd22.webp") + "?" + Date.now();

},{}],"d2cH3":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("reader-6293.0543d742.webp") + "?" + Date.now();

},{}],"aWTvG":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("reader-6302.67008d54.webp") + "?" + Date.now();

},{}],"NAbjZ":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("the-reader-video_optimized.59548367.mp4") + "?" + Date.now();

},{}],"9aTom":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_7201.58d39d2d.webp") + "?" + Date.now();

},{}],"pVZiP":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_7205.3a9c12e8.webp") + "?" + Date.now();

},{}],"Yr6ZQ":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_7210_optimized.77d92eaf.mp4") + "?" + Date.now();

},{}],"6rHcQ":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_7218.9d01f87c.webp") + "?" + Date.now();

},{}],"kAfvb":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_7219.3c4d6397.webp") + "?" + Date.now();

},{}],"9dxfN":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("LW13-1_comp_optimized.a2daba72.mp4") + "?" + Date.now();

},{}],"atYG7":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("lw13_1-1.cb514977.webp") + "?" + Date.now();

},{}],"5eRJS":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("lw13_1-14.ca1dc065.webp") + "?" + Date.now();

},{}],"cdxuM":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("lw13_1-15.5322cd27.webp") + "?" + Date.now();

},{}],"fZfUM":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("lw13_1-16.a6fdbc59.webp") + "?" + Date.now();

},{}],"2yP1t":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("lw13_1-19.09bd2fe7.webp") + "?" + Date.now();

},{}],"iAlGO":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("lw13_1-5320.3df1b7aa.webp") + "?" + Date.now();

},{}],"c9s2u":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_1681_optimized_thumb.8d7dfc50.jpg") + "?" + Date.now();

},{}],"51Yyt":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_6871_optimized_thumb.b6b2be4a.jpg") + "?" + Date.now();

},{}],"6ZjbR":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("sketching-flock-3_optimized_thumb.50520ee8.jpg") + "?" + Date.now();

},{}],"tnBHo":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_6319_optimized_thumb.c9e3c277.jpg") + "?" + Date.now();

},{}],"8t8bF":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_6321_optimized_thumb.0fb9429b.jpg") + "?" + Date.now();

},{}],"b0JRU":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_2907_optimized_thumb.9d7e6fef.jpg") + "?" + Date.now();

},{}],"75iJv":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_2908_optimized_thumb.349a8db2.jpg") + "?" + Date.now();

},{}],"bqy1B":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_2918_optimized_thumb.35dbd653.jpg") + "?" + Date.now();

},{}],"ckcot":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("A001_03021904_C157_optimized_thumb.506ac55c.jpg") + "?" + Date.now();

},{}],"31oaQ":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_2870_optimized_thumb.af836fa8.jpg") + "?" + Date.now();

},{}],"eCOJD":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_2871_optimized_thumb.5fa82dd2.jpg") + "?" + Date.now();

},{}],"bfJ9u":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_3967_optimized_thumb.1eee08f2.jpg") + "?" + Date.now();

},{}],"kkBMc":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_4177_optimized_thumb.589a2a8b.jpg") + "?" + Date.now();

},{}],"dL5dP":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_0288_optimized_thumb.d78a3d3b.jpg") + "?" + Date.now();

},{}],"4KEEe":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_2945_optimized_thumb.0e7582aa.jpg") + "?" + Date.now();

},{}],"efVk0":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_5186_optimized_thumb.276b39d6.jpg") + "?" + Date.now();

},{}],"h0uS3":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("the-reader-video_optimized_thumb.a4b73531.jpg") + "?" + Date.now();

},{}],"ivVC3":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_7210_optimized_thumb.d1a65482.jpg") + "?" + Date.now();

},{}],"i21rQ":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("LW13-1_comp_optimized_thumb.b0c4265a.jpg") + "?" + Date.now();

},{}],"enKjR":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("sketching-flock.8ec43084.webp") + "?" + Date.now();

},{}],"26iap":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("we-play.afd01ecb.webp") + "?" + Date.now();

},{}],"9DWz8":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("blind-spots.83c8a8a8.webp") + "?" + Date.now();

},{}],"53K1D":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("the-reader.823ef7cd.webp") + "?" + Date.now();

},{}],"nb05N":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("long-winter-13-1.9e848743.webp") + "?" + Date.now();

},{}],"dbGjC":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("game-set-match.c7b7bad6.webp") + "?" + Date.now();

},{}],"kS1gf":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("live-coding.c6978622.webp") + "?" + Date.now();

},{}],"3TXkp":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("bird-conductor.b27de08c.webp") + "?" + Date.now();

},{}],"4cqGF":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("surveil-yourself.098f8967.webp") + "?" + Date.now();

},{}],"8dWWn":[function(require,module,exports,__globalThis) {
// Portrait collection media imports
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "photoCollections", ()=>photoCollections);
parcelHelpers.export(exports, "findCollectionBySlug", ()=>findCollectionBySlug);
parcelHelpers.export(exports, "getCollectionIndexBySlug", ()=>getCollectionIndexBySlug);
parcelHelpers.export(exports, "getNextCollection", ()=>getNextCollection);
parcelHelpers.export(exports, "getPreviousCollection", ()=>getPreviousCollection);
var _heroWebp = require("url:../../assets/photos/portrait/hero.webp");
var _heroWebpDefault = parcelHelpers.interopDefault(_heroWebp);
// Optimized hero thumbnails (768x768 for fast loading)
var _portraitHeroWebp = require("url:../../assets/photos/hero-thumbs/portrait-hero.webp");
var _portraitHeroWebpDefault = parcelHelpers.interopDefault(_portraitHeroWebp);
var _performanceHeroWebp = require("url:../../assets/photos/hero-thumbs/performance-hero.webp");
var _performanceHeroWebpDefault = parcelHelpers.interopDefault(_performanceHeroWebp);
var _aberrantHeroWebp = require("url:../../assets/photos/hero-thumbs/aberrant-hero.webp");
var _aberrantHeroWebpDefault = parcelHelpers.interopDefault(_aberrantHeroWebp);
var _astroHeroWebp = require("url:../../assets/photos/hero-thumbs/astro-hero.webp");
var _astroHeroWebpDefault = parcelHelpers.interopDefault(_astroHeroWebp);
var _portrait01Webp = require("url:../../assets/photos/portrait/portrait-01.webp");
var _portrait01WebpDefault = parcelHelpers.interopDefault(_portrait01Webp);
var _portrait02Webp = require("url:../../assets/photos/portrait/portrait-02.webp");
var _portrait02WebpDefault = parcelHelpers.interopDefault(_portrait02Webp);
var _portrait03Webp = require("url:../../assets/photos/portrait/portrait-03.webp");
var _portrait03WebpDefault = parcelHelpers.interopDefault(_portrait03Webp);
var _portrait04Webp = require("url:../../assets/photos/portrait/portrait-04.webp");
var _portrait04WebpDefault = parcelHelpers.interopDefault(_portrait04Webp);
var _portrait05Webp = require("url:../../assets/photos/portrait/portrait-05.webp");
var _portrait05WebpDefault = parcelHelpers.interopDefault(_portrait05Webp);
var _portrait06Webp = require("url:../../assets/photos/portrait/portrait-06.webp");
var _portrait06WebpDefault = parcelHelpers.interopDefault(_portrait06Webp);
var _portrait07Webp = require("url:../../assets/photos/portrait/portrait-07.webp");
var _portrait07WebpDefault = parcelHelpers.interopDefault(_portrait07Webp);
var _portrait08Webp = require("url:../../assets/photos/portrait/portrait-08.webp");
var _portrait08WebpDefault = parcelHelpers.interopDefault(_portrait08Webp);
var _portrait09Webp = require("url:../../assets/photos/portrait/portrait-09.webp");
var _portrait09WebpDefault = parcelHelpers.interopDefault(_portrait09Webp);
var _portrait10Webp = require("url:../../assets/photos/portrait/portrait-10.webp");
var _portrait10WebpDefault = parcelHelpers.interopDefault(_portrait10Webp);
var _portrait11Webp = require("url:../../assets/photos/portrait/portrait-11.webp");
var _portrait11WebpDefault = parcelHelpers.interopDefault(_portrait11Webp);
var _portrait12Webp = require("url:../../assets/photos/portrait/portrait-12.webp");
var _portrait12WebpDefault = parcelHelpers.interopDefault(_portrait12Webp);
var _portrait13Webp = require("url:../../assets/photos/portrait/portrait-13.webp");
var _portrait13WebpDefault = parcelHelpers.interopDefault(_portrait13Webp);
var _portrait14Webp = require("url:../../assets/photos/portrait/portrait-14.webp");
var _portrait14WebpDefault = parcelHelpers.interopDefault(_portrait14Webp);
var _portrait15Webp = require("url:../../assets/photos/portrait/portrait-15.webp");
var _portrait15WebpDefault = parcelHelpers.interopDefault(_portrait15Webp);
var _portrait16Webp = require("url:../../assets/photos/portrait/portrait-16.webp");
var _portrait16WebpDefault = parcelHelpers.interopDefault(_portrait16Webp);
var _portrait17Webp = require("url:../../assets/photos/portrait/portrait-17.webp");
var _portrait17WebpDefault = parcelHelpers.interopDefault(_portrait17Webp);
var _portrait18Webp = require("url:../../assets/photos/portrait/portrait-18.webp");
var _portrait18WebpDefault = parcelHelpers.interopDefault(_portrait18Webp);
var _portrait19Webp = require("url:../../assets/photos/portrait/portrait-19.webp");
var _portrait19WebpDefault = parcelHelpers.interopDefault(_portrait19Webp);
var _portrait21Webp = require("url:../../assets/photos/portrait/portrait-21.webp");
var _portrait21WebpDefault = parcelHelpers.interopDefault(_portrait21Webp);
var _portrait22Webp = require("url:../../assets/photos/portrait/portrait-22.webp");
var _portrait22WebpDefault = parcelHelpers.interopDefault(_portrait22Webp);
var _portrait23Webp = require("url:../../assets/photos/portrait/portrait-23.webp");
var _portrait23WebpDefault = parcelHelpers.interopDefault(_portrait23Webp);
var _portrait24Webp = require("url:../../assets/photos/portrait/portrait-24.webp");
var _portrait24WebpDefault = parcelHelpers.interopDefault(_portrait24Webp);
var _portrait25Webp = require("url:../../assets/photos/portrait/portrait-25.webp");
var _portrait25WebpDefault = parcelHelpers.interopDefault(_portrait25Webp);
var _portrait26Webp = require("url:../../assets/photos/portrait/portrait-26.webp");
var _portrait26WebpDefault = parcelHelpers.interopDefault(_portrait26Webp);
var _portrait27Webp = require("url:../../assets/photos/portrait/portrait-27.webp");
var _portrait27WebpDefault = parcelHelpers.interopDefault(_portrait27Webp);
var _portrait28Webp = require("url:../../assets/photos/portrait/portrait-28.webp");
var _portrait28WebpDefault = parcelHelpers.interopDefault(_portrait28Webp);
// Performance collection media imports
var _heroWebp1 = require("url:../../assets/photos/performance/hero.webp");
var _heroWebpDefault1 = parcelHelpers.interopDefault(_heroWebp1);
var _performance01Webp = require("url:../../assets/photos/performance/performance-01.webp");
var _performance01WebpDefault = parcelHelpers.interopDefault(_performance01Webp);
var _performance02Webp = require("url:../../assets/photos/performance/performance-02.webp");
var _performance02WebpDefault = parcelHelpers.interopDefault(_performance02Webp);
var _performance03Webp = require("url:../../assets/photos/performance/performance-03.webp");
var _performance03WebpDefault = parcelHelpers.interopDefault(_performance03Webp);
var _performance05Webp = require("url:../../assets/photos/performance/performance-05.webp");
var _performance05WebpDefault = parcelHelpers.interopDefault(_performance05Webp);
var _performance06Webp = require("url:../../assets/photos/performance/performance-06.webp");
var _performance06WebpDefault = parcelHelpers.interopDefault(_performance06Webp);
var _performance07Webp = require("url:../../assets/photos/performance/performance-07.webp");
var _performance07WebpDefault = parcelHelpers.interopDefault(_performance07Webp);
var _performance08Webp = require("url:../../assets/photos/performance/performance-08.webp");
var _performance08WebpDefault = parcelHelpers.interopDefault(_performance08Webp);
var _performance09Webp = require("url:../../assets/photos/performance/performance-09.webp");
var _performance09WebpDefault = parcelHelpers.interopDefault(_performance09Webp);
var _performance10Webp = require("url:../../assets/photos/performance/performance-10.webp");
var _performance10WebpDefault = parcelHelpers.interopDefault(_performance10Webp);
var _performance11Webp = require("url:../../assets/photos/performance/performance-11.webp");
var _performance11WebpDefault = parcelHelpers.interopDefault(_performance11Webp);
var _performance12Webp = require("url:../../assets/photos/performance/performance-12.webp");
var _performance12WebpDefault = parcelHelpers.interopDefault(_performance12Webp);
var _performance13Webp = require("url:../../assets/photos/performance/performance-13.webp");
var _performance13WebpDefault = parcelHelpers.interopDefault(_performance13Webp);
var _performance14Webp = require("url:../../assets/photos/performance/performance-14.webp");
var _performance14WebpDefault = parcelHelpers.interopDefault(_performance14Webp);
var _performance15Webp = require("url:../../assets/photos/performance/performance-15.webp");
var _performance15WebpDefault = parcelHelpers.interopDefault(_performance15Webp);
var _performance16Webp = require("url:../../assets/photos/performance/performance-16.webp");
var _performance16WebpDefault = parcelHelpers.interopDefault(_performance16Webp);
var _performance17Webp = require("url:../../assets/photos/performance/performance-17.webp");
var _performance17WebpDefault = parcelHelpers.interopDefault(_performance17Webp);
var _performance18Webp = require("url:../../assets/photos/performance/performance-18.webp");
var _performance18WebpDefault = parcelHelpers.interopDefault(_performance18Webp);
var _performance19Webp = require("url:../../assets/photos/performance/performance-19.webp");
var _performance19WebpDefault = parcelHelpers.interopDefault(_performance19Webp);
var _performance20Webp = require("url:../../assets/photos/performance/performance-20.webp");
var _performance20WebpDefault = parcelHelpers.interopDefault(_performance20Webp);
var _performance21Webp = require("url:../../assets/photos/performance/performance-21.webp");
var _performance21WebpDefault = parcelHelpers.interopDefault(_performance21Webp);
// Aberrant collection media imports
var _heroWebp2 = require("url:../../assets/photos/aberrant/hero.webp");
var _heroWebpDefault2 = parcelHelpers.interopDefault(_heroWebp2);
var _aberrant01Webp = require("url:../../assets/photos/aberrant/aberrant-01.webp");
var _aberrant01WebpDefault = parcelHelpers.interopDefault(_aberrant01Webp);
var _aberrant02Webp = require("url:../../assets/photos/aberrant/aberrant-02.webp");
var _aberrant02WebpDefault = parcelHelpers.interopDefault(_aberrant02Webp);
var _aberrant03Webp = require("url:../../assets/photos/aberrant/aberrant-03.webp");
var _aberrant03WebpDefault = parcelHelpers.interopDefault(_aberrant03Webp);
var _aberrant04Webp = require("url:../../assets/photos/aberrant/aberrant-04.webp");
var _aberrant04WebpDefault = parcelHelpers.interopDefault(_aberrant04Webp);
var _aberrant05Webp = require("url:../../assets/photos/aberrant/aberrant-05.webp");
var _aberrant05WebpDefault = parcelHelpers.interopDefault(_aberrant05Webp);
var _aberrant06Webp = require("url:../../assets/photos/aberrant/aberrant-06.webp");
var _aberrant06WebpDefault = parcelHelpers.interopDefault(_aberrant06Webp);
var _aberrant07Webp = require("url:../../assets/photos/aberrant/aberrant-07.webp");
var _aberrant07WebpDefault = parcelHelpers.interopDefault(_aberrant07Webp);
var _aberrant08Webp = require("url:../../assets/photos/aberrant/aberrant-08.webp");
var _aberrant08WebpDefault = parcelHelpers.interopDefault(_aberrant08Webp);
var _aberrant09Webp = require("url:../../assets/photos/aberrant/aberrant-09.webp");
var _aberrant09WebpDefault = parcelHelpers.interopDefault(_aberrant09Webp);
var _aberrant10Webp = require("url:../../assets/photos/aberrant/aberrant-10.webp");
var _aberrant10WebpDefault = parcelHelpers.interopDefault(_aberrant10Webp);
var _aberrant11Webp = require("url:../../assets/photos/aberrant/aberrant-11.webp");
var _aberrant11WebpDefault = parcelHelpers.interopDefault(_aberrant11Webp);
var _aberrant12Webp = require("url:../../assets/photos/aberrant/aberrant-12.webp");
var _aberrant12WebpDefault = parcelHelpers.interopDefault(_aberrant12Webp);
var _aberrant13Webp = require("url:../../assets/photos/aberrant/aberrant-13.webp");
var _aberrant13WebpDefault = parcelHelpers.interopDefault(_aberrant13Webp);
var _aberrant14Webp = require("url:../../assets/photos/aberrant/aberrant-14.webp");
var _aberrant14WebpDefault = parcelHelpers.interopDefault(_aberrant14Webp);
var _aberrant15Webp = require("url:../../assets/photos/aberrant/aberrant-15.webp");
var _aberrant15WebpDefault = parcelHelpers.interopDefault(_aberrant15Webp);
// Astro collection media imports
var _heroWebp3 = require("url:../../assets/photos/astro/hero.webp");
var _heroWebpDefault3 = parcelHelpers.interopDefault(_heroWebp3);
var _astro01Webp = require("url:../../assets/photos/astro/astro-01.webp");
var _astro01WebpDefault = parcelHelpers.interopDefault(_astro01Webp);
var _astro02Webp = require("url:../../assets/photos/astro/astro-02.webp");
var _astro02WebpDefault = parcelHelpers.interopDefault(_astro02Webp);
var _astro03Webp = require("url:../../assets/photos/astro/astro-03.webp");
var _astro03WebpDefault = parcelHelpers.interopDefault(_astro03Webp);
var _astro04Webp = require("url:../../assets/photos/astro/astro-04.webp");
var _astro04WebpDefault = parcelHelpers.interopDefault(_astro04Webp);
var _astro05Webp = require("url:../../assets/photos/astro/astro-05.webp");
var _astro05WebpDefault = parcelHelpers.interopDefault(_astro05Webp);
var _astro06Webp = require("url:../../assets/photos/astro/astro-06.webp");
var _astro06WebpDefault = parcelHelpers.interopDefault(_astro06Webp);
var _astro07Webp = require("url:../../assets/photos/astro/astro-07.webp");
var _astro07WebpDefault = parcelHelpers.interopDefault(_astro07Webp);
var _astro08Webp = require("url:../../assets/photos/astro/astro-08.webp");
var _astro08WebpDefault = parcelHelpers.interopDefault(_astro08Webp);
var _astro09Webp = require("url:../../assets/photos/astro/astro-09.webp");
var _astro09WebpDefault = parcelHelpers.interopDefault(_astro09Webp);
var _astro10Webp = require("url:../../assets/photos/astro/astro-10.webp");
var _astro10WebpDefault = parcelHelpers.interopDefault(_astro10Webp);
var _astro11Webp = require("url:../../assets/photos/astro/astro-11.webp");
var _astro11WebpDefault = parcelHelpers.interopDefault(_astro11Webp);
const photoCollections = [
    {
        id: 'portrait',
        name: 'PORTRAIT',
        slug: 'portrait',
        description: 'Subjects in controlled and natural environments',
        heroImage: (0, _heroWebpDefault.default),
        heroImageThumb: (0, _portraitHeroWebpDefault.default),
        images: [
            (0, _heroWebpDefault.default),
            (0, _portrait27WebpDefault.default),
            (0, _portrait26WebpDefault.default),
            (0, _portrait01WebpDefault.default),
            (0, _portrait17WebpDefault.default),
            (0, _portrait18WebpDefault.default),
            (0, _portrait15WebpDefault.default),
            (0, _portrait21WebpDefault.default),
            (0, _portrait28WebpDefault.default),
            (0, _portrait19WebpDefault.default),
            (0, _portrait10WebpDefault.default),
            (0, _portrait06WebpDefault.default),
            (0, _portrait24WebpDefault.default),
            (0, _portrait25WebpDefault.default),
            (0, _portrait11WebpDefault.default),
            (0, _portrait16WebpDefault.default),
            (0, _portrait04WebpDefault.default),
            (0, _portrait05WebpDefault.default),
            (0, _portrait07WebpDefault.default),
            (0, _portrait22WebpDefault.default),
            (0, _portrait08WebpDefault.default),
            (0, _portrait23WebpDefault.default),
            (0, _portrait09WebpDefault.default),
            (0, _portrait12WebpDefault.default),
            (0, _portrait13WebpDefault.default),
            (0, _portrait14WebpDefault.default),
            (0, _portrait02WebpDefault.default),
            (0, _portrait03WebpDefault.default)
        ]
    },
    {
        id: 'aberrant',
        name: 'ABERRANT',
        slug: 'aberrant',
        description: 'Experimental and conceptual photographic explorations',
        heroImage: (0, _heroWebpDefault2.default),
        heroImageThumb: (0, _aberrantHeroWebpDefault.default),
        images: [
            (0, _heroWebpDefault2.default),
            (0, _aberrant15WebpDefault.default),
            (0, _aberrant13WebpDefault.default),
            (0, _aberrant01WebpDefault.default),
            (0, _aberrant02WebpDefault.default),
            (0, _aberrant07WebpDefault.default),
            (0, _aberrant08WebpDefault.default),
            (0, _aberrant03WebpDefault.default),
            (0, _aberrant04WebpDefault.default),
            (0, _aberrant05WebpDefault.default),
            (0, _aberrant06WebpDefault.default),
            (0, _aberrant09WebpDefault.default),
            (0, _aberrant10WebpDefault.default),
            (0, _aberrant11WebpDefault.default),
            (0, _aberrant12WebpDefault.default),
            (0, _aberrant14WebpDefault.default)
        ]
    },
    {
        id: 'performance',
        name: 'PERFORMANCE',
        slug: 'performance',
        description: 'Concerts, live events, and artistic performances',
        heroImage: (0, _heroWebpDefault1.default),
        heroImageThumb: (0, _performanceHeroWebpDefault.default),
        images: [
            (0, _heroWebpDefault1.default),
            (0, _performance20WebpDefault.default),
            (0, _performance18WebpDefault.default),
            (0, _performance08WebpDefault.default),
            (0, _performance09WebpDefault.default),
            (0, _performance17WebpDefault.default),
            (0, _performance01WebpDefault.default),
            (0, _performance12WebpDefault.default),
            (0, _performance14WebpDefault.default),
            (0, _performance15WebpDefault.default),
            (0, _performance11WebpDefault.default),
            (0, _performance03WebpDefault.default),
            (0, _performance10WebpDefault.default),
            (0, _performance02WebpDefault.default),
            (0, _performance19WebpDefault.default),
            (0, _performance06WebpDefault.default),
            (0, _performance07WebpDefault.default),
            (0, _performance05WebpDefault.default),
            (0, _performance21WebpDefault.default)
        ]
    },
    {
        id: 'astro',
        name: 'ASTRO',
        slug: 'astro',
        description: 'Celestial objects and astronomical phenomena',
        heroImage: (0, _heroWebpDefault3.default),
        heroImageThumb: (0, _astroHeroWebpDefault.default),
        images: [
            (0, _heroWebpDefault3.default),
            (0, _astro01WebpDefault.default),
            (0, _astro02WebpDefault.default),
            (0, _astro09WebpDefault.default),
            (0, _astro03WebpDefault.default),
            (0, _astro04WebpDefault.default),
            (0, _astro05WebpDefault.default),
            (0, _astro06WebpDefault.default),
            (0, _astro07WebpDefault.default),
            (0, _astro10WebpDefault.default),
            (0, _astro11WebpDefault.default)
        ]
    }
];
const findCollectionBySlug = (slug)=>{
    return photoCollections.find((collection)=>collection.slug === slug);
};
const getCollectionIndexBySlug = (slug)=>{
    return photoCollections.findIndex((collection)=>collection.slug === slug);
};
const getNextCollection = (currentSlug)=>{
    const currentIndex = getCollectionIndexBySlug(currentSlug);
    const nextIndex = (currentIndex + 1) % photoCollections.length;
    return photoCollections[nextIndex];
};
const getPreviousCollection = (currentSlug)=>{
    const currentIndex = getCollectionIndexBySlug(currentSlug);
    const prevIndex = currentIndex === 0 ? photoCollections.length - 1 : currentIndex - 1;
    return photoCollections[prevIndex];
};

},{"url:../../assets/photos/portrait/hero.webp":"5Y4RL","url:../../assets/photos/hero-thumbs/portrait-hero.webp":"5T0B4","url:../../assets/photos/hero-thumbs/performance-hero.webp":"avsGK","url:../../assets/photos/hero-thumbs/aberrant-hero.webp":"ds5vm","url:../../assets/photos/hero-thumbs/astro-hero.webp":"d7bN7","url:../../assets/photos/portrait/portrait-01.webp":"9uJ4M","url:../../assets/photos/portrait/portrait-02.webp":"8lVMj","url:../../assets/photos/portrait/portrait-03.webp":"5XFsU","url:../../assets/photos/portrait/portrait-04.webp":"825w2","url:../../assets/photos/portrait/portrait-05.webp":"k5544","url:../../assets/photos/portrait/portrait-06.webp":"aWgVQ","url:../../assets/photos/portrait/portrait-07.webp":"jodWf","url:../../assets/photos/portrait/portrait-08.webp":"6LHrp","url:../../assets/photos/portrait/portrait-09.webp":"9sWD4","url:../../assets/photos/portrait/portrait-10.webp":"cDPh4","url:../../assets/photos/portrait/portrait-11.webp":"cYqj3","url:../../assets/photos/portrait/portrait-12.webp":"4TIOK","url:../../assets/photos/portrait/portrait-13.webp":"dNZFi","url:../../assets/photos/portrait/portrait-14.webp":"6tXB6","url:../../assets/photos/portrait/portrait-15.webp":"1lfE5","url:../../assets/photos/portrait/portrait-16.webp":"fSa3R","url:../../assets/photos/portrait/portrait-17.webp":"MMQww","url:../../assets/photos/portrait/portrait-18.webp":"honPq","url:../../assets/photos/portrait/portrait-19.webp":"juq5u","url:../../assets/photos/portrait/portrait-21.webp":"al0Yk","url:../../assets/photos/portrait/portrait-22.webp":"7IRlN","url:../../assets/photos/portrait/portrait-23.webp":"c3QCs","url:../../assets/photos/portrait/portrait-24.webp":"8yjcI","url:../../assets/photos/portrait/portrait-25.webp":"bHjyg","url:../../assets/photos/portrait/portrait-26.webp":"7nIJ7","url:../../assets/photos/portrait/portrait-27.webp":"1G4KH","url:../../assets/photos/portrait/portrait-28.webp":"jdA0B","url:../../assets/photos/performance/hero.webp":"3kKb0","url:../../assets/photos/performance/performance-01.webp":"hLazH","url:../../assets/photos/performance/performance-02.webp":"6b7U6","url:../../assets/photos/performance/performance-03.webp":"86Pe5","url:../../assets/photos/performance/performance-05.webp":"fm4Lx","url:../../assets/photos/performance/performance-06.webp":"gjlls","url:../../assets/photos/performance/performance-07.webp":"dpaVF","url:../../assets/photos/performance/performance-08.webp":"4M1R5","url:../../assets/photos/performance/performance-09.webp":"fM27w","url:../../assets/photos/performance/performance-10.webp":"lI5qq","url:../../assets/photos/performance/performance-11.webp":"hQ0FU","url:../../assets/photos/performance/performance-12.webp":"b8OuO","url:../../assets/photos/performance/performance-13.webp":"hmp4C","url:../../assets/photos/performance/performance-14.webp":"eAu5A","url:../../assets/photos/performance/performance-15.webp":"7TBBb","url:../../assets/photos/performance/performance-16.webp":"6Gqd6","url:../../assets/photos/performance/performance-17.webp":"7ZI6s","url:../../assets/photos/performance/performance-18.webp":"3A9Wv","url:../../assets/photos/performance/performance-19.webp":"e7OHy","url:../../assets/photos/performance/performance-20.webp":"45OGf","url:../../assets/photos/performance/performance-21.webp":"YHkF4","url:../../assets/photos/aberrant/hero.webp":"anVdt","url:../../assets/photos/aberrant/aberrant-01.webp":"7c97M","url:../../assets/photos/aberrant/aberrant-02.webp":"1RAwl","url:../../assets/photos/aberrant/aberrant-03.webp":"4e94a","url:../../assets/photos/aberrant/aberrant-04.webp":"eqa2m","url:../../assets/photos/aberrant/aberrant-05.webp":"kGlfI","url:../../assets/photos/aberrant/aberrant-06.webp":"aGkVm","url:../../assets/photos/aberrant/aberrant-07.webp":"fS1me","url:../../assets/photos/aberrant/aberrant-08.webp":"foypn","url:../../assets/photos/aberrant/aberrant-09.webp":"gF8Qn","url:../../assets/photos/aberrant/aberrant-10.webp":"bc9gJ","url:../../assets/photos/aberrant/aberrant-11.webp":"3J4pj","url:../../assets/photos/aberrant/aberrant-12.webp":"4AGSl","url:../../assets/photos/aberrant/aberrant-13.webp":"8Tel7","url:../../assets/photos/aberrant/aberrant-14.webp":"47Vdh","url:../../assets/photos/aberrant/aberrant-15.webp":"gB8LX","url:../../assets/photos/astro/hero.webp":"40REn","url:../../assets/photos/astro/astro-01.webp":"aBZY4","url:../../assets/photos/astro/astro-02.webp":"8r1Fu","url:../../assets/photos/astro/astro-03.webp":"75PBu","url:../../assets/photos/astro/astro-04.webp":"9eIhz","url:../../assets/photos/astro/astro-05.webp":"aYp8O","url:../../assets/photos/astro/astro-06.webp":"8ee6V","url:../../assets/photos/astro/astro-07.webp":"hV0kY","url:../../assets/photos/astro/astro-08.webp":"ciFXf","url:../../assets/photos/astro/astro-09.webp":"i1D7K","url:../../assets/photos/astro/astro-10.webp":"5utgl","url:../../assets/photos/astro/astro-11.webp":"hOns4","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5Y4RL":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("hero.3bd38bd0.webp") + "?" + Date.now();

},{}],"5T0B4":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("portrait-hero.56b53104.webp") + "?" + Date.now();

},{}],"avsGK":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("performance-hero.eb2878d9.webp") + "?" + Date.now();

},{}],"ds5vm":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("aberrant-hero.3be629c1.webp") + "?" + Date.now();

},{}],"d7bN7":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("astro-hero.cefe844a.webp") + "?" + Date.now();

},{}],"9uJ4M":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("portrait-01.3b094ba4.webp") + "?" + Date.now();

},{}],"8lVMj":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("portrait-02.a02c9e7e.webp") + "?" + Date.now();

},{}],"5XFsU":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("portrait-03.87fe48d0.webp") + "?" + Date.now();

},{}],"825w2":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("portrait-04.34a83abd.webp") + "?" + Date.now();

},{}],"k5544":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("portrait-05.c099f6f3.webp") + "?" + Date.now();

},{}],"aWgVQ":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("portrait-06.1fe232de.webp") + "?" + Date.now();

},{}],"jodWf":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("portrait-07.7b57d122.webp") + "?" + Date.now();

},{}],"6LHrp":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("portrait-08.6991c9db.webp") + "?" + Date.now();

},{}],"9sWD4":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("portrait-09.c84e4a64.webp") + "?" + Date.now();

},{}],"cDPh4":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("portrait-10.1568a04f.webp") + "?" + Date.now();

},{}],"cYqj3":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("portrait-11.7388b718.webp") + "?" + Date.now();

},{}],"4TIOK":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("portrait-12.89e8fb2f.webp") + "?" + Date.now();

},{}],"dNZFi":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("portrait-13.74fd8500.webp") + "?" + Date.now();

},{}],"6tXB6":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("portrait-14.075f3286.webp") + "?" + Date.now();

},{}],"1lfE5":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("portrait-15.6561336d.webp") + "?" + Date.now();

},{}],"fSa3R":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("portrait-16.b3fe50f8.webp") + "?" + Date.now();

},{}],"MMQww":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("portrait-17.babcea94.webp") + "?" + Date.now();

},{}],"honPq":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("portrait-18.3cfb0f46.webp") + "?" + Date.now();

},{}],"juq5u":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("portrait-19.57f5c45a.webp") + "?" + Date.now();

},{}],"al0Yk":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("portrait-21.6ae187e0.webp") + "?" + Date.now();

},{}],"7IRlN":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("portrait-22.16706795.webp") + "?" + Date.now();

},{}],"c3QCs":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("portrait-23.afec24f9.webp") + "?" + Date.now();

},{}],"8yjcI":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("portrait-24.13f1a830.webp") + "?" + Date.now();

},{}],"bHjyg":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("portrait-25.06b2912d.webp") + "?" + Date.now();

},{}],"7nIJ7":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("portrait-26.d9a005da.webp") + "?" + Date.now();

},{}],"1G4KH":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("portrait-27.5ac8fcfd.webp") + "?" + Date.now();

},{}],"jdA0B":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("portrait-28.676d9bcd.webp") + "?" + Date.now();

},{}],"3kKb0":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("hero.f4e63af1.webp") + "?" + Date.now();

},{}],"hLazH":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("performance-01.3ba3e7d0.webp") + "?" + Date.now();

},{}],"6b7U6":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("performance-02.d8764144.webp") + "?" + Date.now();

},{}],"86Pe5":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("performance-03.a9851141.webp") + "?" + Date.now();

},{}],"fm4Lx":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("performance-05.9e75197c.webp") + "?" + Date.now();

},{}],"gjlls":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("performance-06.0a2f19b1.webp") + "?" + Date.now();

},{}],"dpaVF":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("performance-07.caaa7180.webp") + "?" + Date.now();

},{}],"4M1R5":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("performance-08.3afccc12.webp") + "?" + Date.now();

},{}],"fM27w":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("performance-09.0c5f504f.webp") + "?" + Date.now();

},{}],"lI5qq":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("performance-10.775496b7.webp") + "?" + Date.now();

},{}],"hQ0FU":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("performance-11.fc136712.webp") + "?" + Date.now();

},{}],"b8OuO":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("performance-12.525bfce2.webp") + "?" + Date.now();

},{}],"hmp4C":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("performance-13.695d4991.webp") + "?" + Date.now();

},{}],"eAu5A":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("performance-14.54e17133.webp") + "?" + Date.now();

},{}],"7TBBb":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("performance-15.6f842e30.webp") + "?" + Date.now();

},{}],"6Gqd6":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("performance-16.e4c1ce62.webp") + "?" + Date.now();

},{}],"7ZI6s":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("performance-17.ae1ebe2b.webp") + "?" + Date.now();

},{}],"3A9Wv":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("performance-18.1205f92e.webp") + "?" + Date.now();

},{}],"e7OHy":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("performance-19.21503b77.webp") + "?" + Date.now();

},{}],"45OGf":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("performance-20.fe4b8245.webp") + "?" + Date.now();

},{}],"YHkF4":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("performance-21.847df421.webp") + "?" + Date.now();

},{}],"anVdt":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("hero.e5a58acb.webp") + "?" + Date.now();

},{}],"7c97M":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("aberrant-01.157ddf27.webp") + "?" + Date.now();

},{}],"1RAwl":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("aberrant-02.17a6c62e.webp") + "?" + Date.now();

},{}],"4e94a":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("aberrant-03.301766ff.webp") + "?" + Date.now();

},{}],"eqa2m":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("aberrant-04.f762180b.webp") + "?" + Date.now();

},{}],"kGlfI":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("aberrant-05.333c5c01.webp") + "?" + Date.now();

},{}],"aGkVm":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("aberrant-06.053b658a.webp") + "?" + Date.now();

},{}],"fS1me":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("aberrant-07.6d6ec2a3.webp") + "?" + Date.now();

},{}],"foypn":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("aberrant-08.8af757e9.webp") + "?" + Date.now();

},{}],"gF8Qn":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("aberrant-09.0d3b55df.webp") + "?" + Date.now();

},{}],"bc9gJ":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("aberrant-10.6f2d3ff5.webp") + "?" + Date.now();

},{}],"3J4pj":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("aberrant-11.d4b9ab35.webp") + "?" + Date.now();

},{}],"4AGSl":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("aberrant-12.0e45ab57.webp") + "?" + Date.now();

},{}],"8Tel7":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("aberrant-13.1d0db943.webp") + "?" + Date.now();

},{}],"47Vdh":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("aberrant-14.b848ccf9.webp") + "?" + Date.now();

},{}],"gB8LX":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("aberrant-15.54333180.webp") + "?" + Date.now();

},{}],"40REn":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("hero.f6ce11d7.webp") + "?" + Date.now();

},{}],"aBZY4":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("astro-01.23eb99ee.webp") + "?" + Date.now();

},{}],"8r1Fu":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("astro-02.347be90c.webp") + "?" + Date.now();

},{}],"75PBu":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("astro-03.bf21acfa.webp") + "?" + Date.now();

},{}],"9eIhz":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("astro-04.72cdd341.webp") + "?" + Date.now();

},{}],"aYp8O":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("astro-05.943df3bb.webp") + "?" + Date.now();

},{}],"8ee6V":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("astro-06.7ef875a2.webp") + "?" + Date.now();

},{}],"hV0kY":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("astro-07.36ce54a0.webp") + "?" + Date.now();

},{}],"ciFXf":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("astro-08.b115e982.webp") + "?" + Date.now();

},{}],"i1D7K":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("astro-09.29889e87.webp") + "?" + Date.now();

},{}],"5utgl":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("astro-10.11103786.webp") + "?" + Date.now();

},{}],"hOns4":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("astro-11.bd5f9cd1.webp") + "?" + Date.now();

},{}],"6cZhw":[function(require,module,exports,__globalThis) {
// Web thumbnail imports
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "projects", ()=>projects);
// Helper function to find project by slug (similar to installations)
parcelHelpers.export(exports, "findProjectBySlug", ()=>findProjectBySlug);
// Helper function to get project index by slug
parcelHelpers.export(exports, "getProjectIndexBySlug", ()=>getProjectIndexBySlug);
var _asteroidsWebp = require("url:../../assets/interactive/web/thumbnails/asteroids.webp");
var _asteroidsWebpDefault = parcelHelpers.interopDefault(_asteroidsWebp);
var _dimensionDoorWebp = require("url:../../assets/interactive/web/thumbnails/dimension-door.webp");
var _dimensionDoorWebpDefault = parcelHelpers.interopDefault(_dimensionDoorWebp);
var _flowFieldsWebp = require("url:../../assets/interactive/web/thumbnails/flow-fields.webp");
var _flowFieldsWebpDefault = parcelHelpers.interopDefault(_flowFieldsWebp);
var _galaxyCollisionWebp = require("url:../../assets/interactive/web/thumbnails/galaxy-collision.webp");
var _galaxyCollisionWebpDefault = parcelHelpers.interopDefault(_galaxyCollisionWebp);
var _infiniteBauhausWebp = require("url:../../assets/interactive/web/thumbnails/infinite-bauhaus.webp");
var _infiniteBauhausWebpDefault = parcelHelpers.interopDefault(_infiniteBauhausWebp);
var _koiPondWebp = require("url:../../assets/interactive/web/thumbnails/koi-pond.webp");
var _koiPondWebpDefault = parcelHelpers.interopDefault(_koiPondWebp);
var _lavaLampWebp = require("url:../../assets/interactive/web/thumbnails/lava-lamp.webp");
var _lavaLampWebpDefault = parcelHelpers.interopDefault(_lavaLampWebp);
var _nissan300ZxZ31Webp = require("url:../../assets/interactive/web/thumbnails/nissan-300zx-z31.webp");
var _nissan300ZxZ31WebpDefault = parcelHelpers.interopDefault(_nissan300ZxZ31Webp);
var _strangeInkWebp = require("url:../../assets/interactive/web/thumbnails/strange-ink.webp");
var _strangeInkWebpDefault = parcelHelpers.interopDefault(_strangeInkWebp);
const projects = [
    {
        name: "Dimension Door",
        slug: "dimension-door",
        year: "2024",
        description: "A swirling psychedelic vortex of multicoloured squares twists aggressively back and forth, seemingly descending into the black background.",
        subtitle: "SKETCH",
        image: (0, _dimensionDoorWebpDefault.default),
        type: "local",
        url: null // Local sketches use slug for lookup, no URL needed
    },
    {
        name: "Strange Ink",
        slug: "strange-ink",
        year: "2025",
        description: "An extremely simple program that produces a fascinating, liquid-like output using no physics or simulation algorithms.",
        subtitle: "INTERACTIVE",
        image: (0, _strangeInkWebpDefault.default),
        type: "local",
        url: null // Local sketches use slug for lookup, no URL needed
    },
    {
        name: "Koi Pond",
        slug: "koi-pond",
        year: "2024",
        description: "Fishy :)",
        subtitle: "SKETCH",
        image: (0, _koiPondWebpDefault.default),
        type: "local",
        url: null // Local sketches use slug for lookup, no URL needed
    },
    {
        name: "Lava Lamp",
        slug: "lava-lamp",
        year: "2023",
        description: "Groovy.",
        subtitle: "SKETCH",
        image: (0, _lavaLampWebpDefault.default),
        type: "local",
        url: null // Local sketches use slug for lookup, no URL needed
    },
    {
        name: "Infinite Bauhaus",
        slug: "infinite-bauhaus",
        year: "2023",
        description: "Bauhaus, infinitely.",
        subtitle: "SKETCH",
        image: (0, _infiniteBauhausWebpDefault.default),
        type: "local",
        url: null // Local sketches use slug for lookup, no URL needed
    },
    {
        name: "Galaxy Collision",
        slug: "galaxy-collision",
        year: "2024",
        description: "Oop.",
        subtitle: "SKETCH",
        image: (0, _galaxyCollisionWebpDefault.default),
        type: "local",
        url: null // Local sketches use slug for lookup, no URL needed
    },
    {
        name: "Flow Fields",
        slug: "flow-fields",
        year: "2023",
        description: "Configurable perlin noise field driving particle velocity.",
        subtitle: "INTERACTIVE",
        image: (0, _flowFieldsWebpDefault.default),
        type: "local",
        url: null // Local sketches use slug for lookup, no URL needed
    },
    {
        name: "Asteroids",
        slug: "asteroids",
        year: "2024",
        description: "Asteroids!",
        subtitle: "GAME",
        image: (0, _asteroidsWebpDefault.default),
        type: "local",
        url: null // Local sketches use slug for lookup, no URL needed
    },
    {
        name: "Nissan 300ZX",
        slug: "nissan-300zx",
        year: "2023",
        description: "A close digital clone of the speedometer and tachometer from the 1987 Nizzan 300ZX Z31",
        subtitle: "INTERACTIVE",
        image: (0, _nissan300ZxZ31WebpDefault.default),
        type: "local",
        url: null // Local sketches use slug for lookup, no URL needed
    }
];
function findProjectBySlug(slug) {
    return projects.find((project)=>project.slug === slug);
}
function getProjectIndexBySlug(slug) {
    return projects.findIndex((project)=>project.slug === slug);
}

},{"url:../../assets/interactive/web/thumbnails/asteroids.webp":"cAwiJ","url:../../assets/interactive/web/thumbnails/dimension-door.webp":"6VNS2","url:../../assets/interactive/web/thumbnails/flow-fields.webp":"geGZS","url:../../assets/interactive/web/thumbnails/galaxy-collision.webp":"jmOnB","url:../../assets/interactive/web/thumbnails/infinite-bauhaus.webp":"3aQ4h","url:../../assets/interactive/web/thumbnails/koi-pond.webp":"25i4W","url:../../assets/interactive/web/thumbnails/lava-lamp.webp":"hrStk","url:../../assets/interactive/web/thumbnails/nissan-300zx-z31.webp":"gKx8B","url:../../assets/interactive/web/thumbnails/strange-ink.webp":"2HaXw","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cAwiJ":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("asteroids.5658c91f.webp") + "?" + Date.now();

},{}],"6VNS2":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("dimension-door.ecb787ea.webp") + "?" + Date.now();

},{}],"geGZS":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("flow-fields.a8946d44.webp") + "?" + Date.now();

},{}],"jmOnB":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("galaxy-collision.088b4dcc.webp") + "?" + Date.now();

},{}],"3aQ4h":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("infinite-bauhaus.3996ce4f.webp") + "?" + Date.now();

},{}],"25i4W":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("koi-pond.c3aaa355.webp") + "?" + Date.now();

},{}],"hrStk":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("lava-lamp.2453a876.webp") + "?" + Date.now();

},{}],"gKx8B":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("nissan-300zx-z31.a2c83706.webp") + "?" + Date.now();

},{}],"2HaXw":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("strange-ink.286e9257.webp") + "?" + Date.now();

},{}],"kRkpX":[function(require,module,exports,__globalThis) {
// Links data for the sci-fi styled links page
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "links", ()=>links);
parcelHelpers.export(exports, "findLinkGroupPath", ()=>findLinkGroupPath);
const links = [
    {
        id: "zcal",
        title: "BOOK ME",
        url: "https://zcal.co/blap64",
        icon: "CALL",
        description: "Tell me your project"
    },
    {
        id: "learn",
        title: "LEARN",
        icon: "LERN",
        description: "Workshops and resources",
        links: [
            {
                id: "workshops",
                title: "WORKSHOPS",
                icon: "WKSP",
                description: "Live sessions",
                links: []
            },
            {
                id: "tube",
                title: "YOUTUBE",
                url: "https://www.youtube.com/@blapcode",
                icon: "YTBE",
                description: "TouchDesigner tutorials"
            },
            {
                id: "patreon",
                title: "PATREON",
                url: "https://www.patreon.com/blapcode",
                icon: "PTRN",
                description: "TouchDesigner files"
            }
        ]
    },
    {
        id: "instagram",
        title: "INSTAGRAM",
        url: "https://instagram.com/blapcode",
        icon: "INST",
        description: "Upcoming projects"
    },
    {
        id: "ukai",
        title: "UKAI PROJECTS",
        url: "https://ukaiprojects.com",
        icon: "UKAI",
        description: "Live events"
    },
    {
        id: "discord",
        title: "DISCORD",
        url: "https://discord.gg/pYPvzCMwFY",
        icon: "DSCD",
        description: "Join the community"
    },
    {
        id: "home",
        title: "PORTFOLIO",
        url: "https://blap64.com",
        icon: "SITE",
        description: "Works / contact"
    }
];
const findLinkGroupPath = (slug, items = links)=>{
    for (const link of items){
        if (!link.links) continue;
        if (link.id === slug) return [
            link
        ];
        const childPath = findLinkGroupPath(slug, link.links);
        if (childPath) return [
            link,
            ...childPath
        ];
    }
    return null;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cNg9d":[function(require,module,exports,__globalThis) {
module.exports = Promise.resolve(module.bundle.root("hh14x"));

},{"hh14x":"hh14x"}],"8hGpR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Route {
    constructor(name, path, view){
        this.name = name;
        this.path = path;
        this.view = view;
    }
    setProps(new_props) {
        this.props = new_props;
    }
    renderView() {
        return this.view(this.props);
    }
}
exports.default = Route;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"khuqI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mobileCheck", ()=>mobileCheck);
parcelHelpers.export(exports, "smoothFollow", ()=>smoothFollow);
parcelHelpers.export(exports, "easeInCubic", ()=>easeInCubic);
parcelHelpers.export(exports, "getFontSizes", ()=>getFontSizes);
parcelHelpers.export(exports, "widthCheck", ()=>widthCheck);
parcelHelpers.export(exports, "isDesktopOnly", ()=>isDesktopOnly);
parcelHelpers.export(exports, "getMediaPath", ()=>getMediaPath);
parcelHelpers.export(exports, "isVideoFile", ()=>isVideoFile);
parcelHelpers.export(exports, "calculateMediaDimensions", ()=>calculateMediaDimensions);
parcelHelpers.export(exports, "calculateCropDimensions", ()=>calculateCropDimensions);
parcelHelpers.export(exports, "getViewportSize", ()=>getViewportSize);
parcelHelpers.export(exports, "injectFontLink", ()=>injectFontLink);
parcelHelpers.export(exports, "loadGoogleFontSet", ()=>loadGoogleFontSet);
parcelHelpers.export(exports, "updateCursor", ()=>updateCursor);
// UI Classes
parcelHelpers.export(exports, "AnimationManager", ()=>AnimationManager);
parcelHelpers.export(exports, "UIObj", ()=>UIObj);
parcelHelpers.export(exports, "UICornerBoxButton", ()=>UICornerBoxButton);
parcelHelpers.export(exports, "UIPlanetButton", ()=>UIPlanetButton);
parcelHelpers.export(exports, "UIArcButton", ()=>UIArcButton);
parcelHelpers.export(exports, "UITriangleButton", ()=>UITriangleButton);
parcelHelpers.export(exports, "UIHexButton", ()=>UIHexButton);
parcelHelpers.export(exports, "UILinesButton", ()=>UILinesButton);
parcelHelpers.export(exports, "daysSince", ()=>daysSince);
parcelHelpers.export(exports, "radialToCartesian", ()=>radialToCartesian);
parcelHelpers.export(exports, "TextWriter", ()=>TextWriter);
parcelHelpers.export(exports, "UIWebButton", ()=>UIWebButton);
const mobileCheck = ()=>{
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
    const isTablet = /iPad/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent) && !/Chrome/i.test(navigator.userAgent);
    const isDesktop = !(isMobile || isTablet);
    return !isDesktop;
};
const smoothFollow = (raw, follow, smoothing, max_step = 100)=>{
    return follow + Math.min(smoothing * (raw - follow), max_step);
};
const easeInCubic = (x)=>{
    return x * x * x;
};
const getFontSizes = (w, h)=>{
    if (widthCheck(w) && mobileCheck()) return {
        "small": 13,
        "medium": 20,
        "large": 48
    };
    else return {
        "small": 24,
        "medium": 32,
        "large": 64
    };
};
const widthCheck = (w)=>{
    if (w < 768) return true;
    return false;
};
const isDesktopOnly = ()=>{
    // Returns true only for desktop devices (excludes tablets and phones)
    const userAgent = navigator.userAgent;
    // Modern iPad detection - iOS 13+ iPads may report as desktop Safari
    const isIpadOS = /Macintosh/i.test(userAgent) && navigator.maxTouchPoints > 1;
    const isTraditionalMobile = /iPhone|iPad|Android/i.test(userAgent);
    const isTablet = /iPad/i.test(userAgent) || isIpadOS || /Android/i.test(userAgent) && !/Chrome/i.test(userAgent);
    return !(isTraditionalMobile || isTablet);
};
const getMediaPath = (mediaItem)=>{
    if (typeof mediaItem === 'string') return mediaItem;
    else if (mediaItem && typeof mediaItem === 'object') return mediaItem.default || mediaItem.src || mediaItem.href || mediaItem.toString();
    else return String(mediaItem);
};
const isVideoFile = (path)=>{
    return path.toLowerCase().match(/\.(mp4|mov|webm|avi)(\?.*)?$/i);
};
const calculateMediaDimensions = (aspectRatio, maxWidth, maxHeight)=>{
    let mediaWidth, mediaHeight;
    if (aspectRatio > maxWidth / maxHeight) {
        mediaWidth = maxWidth;
        mediaHeight = maxWidth / aspectRatio;
    } else {
        mediaHeight = maxHeight;
        mediaWidth = maxHeight * aspectRatio;
    }
    return {
        width: mediaWidth,
        height: mediaHeight
    };
};
const calculateCropDimensions = (mediaWidth, mediaHeight, boxWidth, boxHeight)=>{
    const aspectRatio = mediaWidth / mediaHeight;
    const boxAspectRatio = boxWidth / boxHeight;
    let sourceX = 0;
    let sourceY = 0;
    let sourceWidth = mediaWidth;
    let sourceHeight = mediaHeight;
    if (aspectRatio > boxAspectRatio) {
        // Media is wider - crop sides
        sourceWidth = mediaHeight * boxAspectRatio;
        sourceX = (mediaWidth - sourceWidth) / 2;
    } else {
        // Media is taller - crop top/bottom
        sourceHeight = mediaWidth / boxAspectRatio;
        sourceY = (mediaHeight - sourceHeight) / 2;
    }
    return {
        sourceX,
        sourceY,
        sourceWidth,
        sourceHeight
    };
};
const getViewportSize = ()=>{
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    return {
        width: vw,
        height: vh
    };
};
const injectFontLink = (href)=>{
    const link = document.createElement('link');
    link.id = 'font';
    link.href = href;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
};
const loadGoogleFontSet = async (url, p = window)=>{
    injectFontLink(url);
    await document.fonts.ready; // ??
    let pfonts = Array.from(document.fonts).map((f)=>{
        let pf = new p5.Font(p, f);
        pf.path = pf.path || url;
    });
    return pfonts;
};
const updateCursor = (p, mouseX, mouseY, ...hoverCheckTargets)=>{
    let isHovering = false;
    // Check all provided targets for hover state
    for (const target of hoverCheckTargets){
        if (Array.isArray(target)) {
            // Handle arrays of objects with contains() method
            for (const element of target)if (element && element.contains && element.contains(mouseX, mouseY)) {
                isHovering = true;
                break;
            }
        } else if (typeof target === 'function') // Handle custom hover check functions
        {
            if (target(mouseX, mouseY)) isHovering = true;
        } else if (target && target.contains) // Handle single objects with contains() method
        {
            if (target.contains(mouseX, mouseY)) isHovering = true;
        }
        if (isHovering) break;
    }
    // Set cursor style
    if (isHovering) p.cursor('pointer');
    else p.cursor('default');
};
class AnimationManager {
    constructor(states){
        this.states = states;
        this.to_render = {};
        this.t = 0;
    }
    execute(p) {
        this.t += p.deltaTime;
        const t = this.t;
        this.to_render = {};
        this.states.every((state, i)=>{
            if (t >= state.start_time && t < state.start_time + state.duration) this.to_render[state.idx] = i;
            else if (t >= state.start_time + state.duration && state.persist) this.to_render[state.idx] = i;
            return true;
        });
        Object.values(this.to_render).forEach((idx)=>{
            const progress = Math.min((t - this.states[idx].start_time) / this.states[idx].duration, 1);
            this.states[idx].fn(progress, ...this.states[idx].args);
        });
    }
}
class UIObj {
    constructor(p, x, y, w, h){
        this.p5 = p;
        this.p = p.createVector(x, y);
        this.s = p.createVector(w, h);
    }
    dist(x, y) {
        const v = this.p5.createVector(x, y);
        return p5.Vector.dist(this.p, v);
    }
}
class UICornerBoxButton extends UIObj {
    constructor(p, x, y, w, h, sx, sy, text, textSize){
        super(p, x, y, w, h);
        this.cs = p.createVector(sx, sy);
        this.textWriter = new TextWriter(p, x, y, undefined, undefined, text, textSize);
    }
    contains(x, y) {
        return this.insideBox(x, y, this.p.x, this.p.y, this.s.x, this.s.y);
    }
    insideBox(pointX, pointY, boxCenterX, boxCenterY, boxWidth, boxHeight) {
        // Calculate the box boundaries from center and dimensions
        const left = boxCenterX - boxWidth / 2;
        const right = boxCenterX + boxWidth / 2;
        const top = boxCenterY - boxHeight / 2;
        const bottom = boxCenterY + boxHeight / 2;
        // Check if point is within all boundaries
        return pointX >= left && pointX <= right && pointY >= top && pointY <= bottom;
    }
    render() {
        let sx = this.p5.constrain(this.s.x * (this.cs.x - 0.5), -0.1 * this.s.x, this.s.x);
        let sy = this.p5.constrain(this.s.y * (this.cs.y - 0.5), -0.1 * this.s.y, this.s.y);
        this.corners(this.p.x, this.p.y, this.s.x, this.s.y, sx, sy);
    }
    corners(x, y, w, h, sx, sy) {
        const top_left = {
            x: x - 0.5 * w,
            y: y - 0.5 * h
        };
        const top_right = {
            x: x + 0.5 * w,
            y: y - 0.5 * h
        };
        const bottom_left = {
            x: x - 0.5 * w,
            y: y + 0.5 * h
        };
        const bottom_right = {
            x: x + 0.5 * w,
            y: y + 0.5 * h
        };
        this.corner(top_left.x, top_left.y, sx, sy);
        this.corner(top_right.x, top_right.y, -sx, sy);
        this.corner(bottom_left.x, bottom_left.y, sx, -sy);
        this.corner(bottom_right.x, bottom_right.y, -sx, -sy);
    }
    corner(x, y, sx, sy) {
        this.p5.line(x, y, x + sx, y);
        this.p5.line(x, y, x, y + sy);
    }
}
class UIPlanetButton extends UIObj {
    constructor(p, x, y, radius, orbitRadius, angle, speed, color, text = "", textSize = 12, textOffsetX = 0, textOffsetY = 0){
        super(p, x, y, radius * 2, radius * 2);
        this.radius = radius;
        this.orbitRadius = orbitRadius;
        this.angle = angle;
        this.speed = speed;
        this.color = color;
        this.originalAngle = angle;
        this.textOffsetX = textOffsetX;
        this.textOffsetY = textOffsetY;
        this.textWriter = new TextWriter(p, x + textOffsetX, y + textOffsetY, undefined, undefined, text, textSize);
        this.active = false;
    }
    contains(x, y) {
        const distance = this.p5.dist(x, y, this.p.x, this.p.y);
        return distance <= this.radius * 1.5; // Include some padding for the UI triangles
    }
    updatePosition(centerX, centerY, deltaTime) {
        this.angle += -this.speed * deltaTime;
        const pos = radialToCartesian(this.orbitRadius, this.angle, this.p5);
        this.p.x = centerX + pos.x;
        this.p.y = centerY + pos.y;
        // Update text writer position with offset
        this.textWriter.p.x = this.p.x + this.textOffsetX;
        this.textWriter.p.y = this.p.y + this.textOffsetY;
    }
    render(smoothVector, short) {
        const d = this.p5.map(smoothVector.dist(this.p5.createVector(this.p.x, this.p.y)), 0, 0.1 * short, 1, 0, true);
        const adjustedRadius = this.radius;
        // Draw planet arcs
        this.p5.stroke(this.color, 128 + d * 127);
        this.p5.strokeWeight(2);
        this.p5.noFill();
        const o = -this.angle + this.p5.PI / 2;
        this.p5.arc(this.p.x, this.p.y, adjustedRadius, adjustedRadius, o + 0.1 - d, o + this.p5.PI - 0.1 + d);
        this.p5.strokeWeight(1);
        this.p5.arc(this.p.x, this.p.y, 0.8 * adjustedRadius, 0.8 * adjustedRadius, o + this.p5.PI + 0.1 - d, o - 0.1 + d);
        // Draw sci-fi UI triangles
        this.renderUITriangles(adjustedRadius, d);
        // Render text
        this.renderText(d);
    }
    renderUITriangles(r, d) {
        const squareSize = r * (1.5 + 0.2 * this.p5.sin(0.05 * this.p.x + 0.05 * this.p.y + 0.001 * this.p5.millis()));
        const triangleSize = r * 0.2;
        this.p5.fill(128 + d * 127, 20, 20, 128 + d * 127);
        this.p5.noStroke();
        // Four corners of the square around the planet
        const corners = [
            {
                x: this.p.x - squareSize / 2,
                y: this.p.y - squareSize / 2,
                angle: 5 * this.p5.PI / 4
            },
            {
                x: this.p.x + squareSize / 2,
                y: this.p.y - squareSize / 2,
                angle: 7 * this.p5.PI / 4
            },
            {
                x: this.p.x + squareSize / 2,
                y: this.p.y + squareSize / 2,
                angle: this.p5.PI / 4
            },
            {
                x: this.p.x - squareSize / 2,
                y: this.p.y + squareSize / 2,
                angle: 3 * this.p5.PI / 4
            } // bottom-left
        ];
        corners.forEach((corner)=>{
            this.p5.push();
            this.p5.translate(corner.x, corner.y);
            this.p5.rotate(corner.angle + this.p5.PI / 2);
            this.p5.triangle(0, -triangleSize * (0.5 - 2 * d), -triangleSize * 0.8, triangleSize * 0.5, triangleSize * 0.8, triangleSize * 0.5);
            this.p5.pop();
        });
    }
    renderText(d) {
        if (this.textWriter && this.textWriter.t && this.textWriter.t.length > 0) {
            this.p5.push();
            this.p5.fill(74, 144 + 80 * d, 230);
            this.p5.noStroke();
            this.p5.textAlign(this.p5.LEFT, this.p5.CENTER);
            this.p5.textFont('BPdotsSquareVF', {
                fontVariationSettings: `wght 900`
            });
            this.p5.textSize(this.textWriter.size);
            // Try to get cached text data, fall back to calculation if not available
            let lines;
            let lineHeight;
            // Check if we have access to the global textCache (from sketch.js)
            if (typeof window !== 'undefined' && window.textCache && window.textCache.has(this.textWriter.t)) {
                const cached = window.textCache.get(this.textWriter.t);
                lines = cached.lines;
                lineHeight = cached.lineHeight;
            } else {
                // Fallback to original calculation (for compatibility)
                const maxChars = 16;
                const words = this.textWriter.t.split(' ');
                lines = [];
                let currentLine = '';
                for (const word of words)if ((currentLine + word).length > maxChars && currentLine.length > 0) {
                    lines.push(currentLine.trim());
                    currentLine = word + ' ';
                } else currentLine += word + ' ';
                if (currentLine.length > 0) lines.push(currentLine.trim());
                lineHeight = this.textWriter.size * 1.2;
            }
            // Render each line
            lines.forEach((line, lineIndex)=>{
                const lineY = this.textWriter.p.y + (lineIndex - (lines.length - 1) / 2) * lineHeight;
                this.p5.text(line, this.textWriter.p.x, lineY);
            });
            this.p5.pop();
        }
    }
    setTextOffset(offsetX, offsetY) {
        this.textOffsetX = offsetX;
        this.textOffsetY = offsetY;
        this.textWriter.p.x = this.p.x + this.textOffsetX;
        this.textWriter.p.y = this.p.y + this.textOffsetY;
    }
    toggle() {
        this.active = !this.active;
    }
    setActive(active) {
        this.active = active;
    }
    isActive() {
        return this.active;
    }
}
class UIArcButton extends UIObj {
    constructor(p, x, y, w, h, sx, sy, text, textSize){
        super(p, x, y, w, h);
        this.cs = p.createVector(sx, sy);
        this.textWriter = new TextWriter(p, x, y, undefined, undefined, text, textSize);
    }
    contains(x, y) {
        return this.dist(x, y) <= this.s.x / 2;
    }
    insideBox(pointX, pointY, boxCenterX, boxCenterY, boxWidth, boxHeight) {
        // Calculate the box boundaries from center and dimensions
        const left = boxCenterX - boxWidth / 2;
        const right = boxCenterX + boxWidth / 2;
        const top = boxCenterY - boxHeight / 2;
        const bottom = boxCenterY + boxHeight / 2;
        // Check if point is within all boundaries
        return pointX >= left && pointX <= right && pointY >= top && pointY <= bottom;
    }
    render() {
        this.p5.arc(this.p.x, this.p.y, this.s.x, this.s.y, this.p5.TWO_PI * this.cs.x, this.p5.TWO_PI * this.cs.x - this.p5.min(1.5 * this.p5.PI * (1 - this.cs.x), 1.5 * this.p5.PI));
    }
}
class UITriangleButton extends UIObj {
    constructor(p, x, y, w, h, sx, sy, z, text, textSize, unhoveredColor = [
        230
    ], hoveredColor = [
        230,
        20,
        20
    ]){
        super(p, x, y, w, h);
        this.cs = p.createVector(sx, sy, z);
        this.top = p.createVector(this.p.x + this.s.x * p.cos(this.cs.z), this.p.y + this.s.y * p.sin(this.cs.z));
        this.left = p.createVector(this.p.x + this.s.x * p.cos(this.cs.z + 2 * p.PI / 3), this.p.y + this.s.y * p.sin(this.cs.z + 2 * p.PI / 3));
        this.right = p.createVector(this.p.x + this.s.x * p.cos(this.cs.z + 4 * p.PI / 3), this.p.y + this.s.y * p.sin(this.cs.z + 4 * p.PI / 3));
        this.textWriter = new TextWriter(p, x, y, undefined, undefined, text, textSize);
        this.unhoveredColor = unhoveredColor;
        this.hoveredColor = hoveredColor;
    }
    render() {
        this.top = this.p5.createVector(this.p.x + this.s.x * this.p5.cos(this.cs.z), this.p.y + this.s.y * this.p5.sin(this.cs.z));
        this.left = this.p5.createVector(this.p.x + this.s.x * this.p5.cos(this.cs.z + 2 * this.p5.PI / 3), this.p.y + this.s.y * this.p5.sin(this.cs.z + 2 * this.p5.PI / 3));
        this.right = this.p5.createVector(this.p.x + this.s.x * this.p5.cos(this.cs.z + 4 * this.p5.PI / 3), this.p.y + this.s.y * this.p5.sin(this.cs.z + 4 * this.p5.PI / 3));
        this.cs.x = this.p5.map(this.cs.x, 0, 1, 0.25, 0.08, true);
        const inter_top = p5.Vector.lerp(this.top, this.right, this.cs.x);
        const inter_left = p5.Vector.lerp(this.left, this.top, this.cs.x);
        const inter_right = p5.Vector.lerp(this.right, this.left, this.cs.x);
        const inter_top1 = p5.Vector.lerp(this.top, this.right, 1 - this.cs.x);
        const inter_left1 = p5.Vector.lerp(this.left, this.top, 1 - this.cs.x);
        const inter_right1 = p5.Vector.lerp(this.right, this.left, 1 - this.cs.x);
        this.p5.line(inter_top1.x, inter_top1.y, inter_top.x, inter_top.y);
        this.p5.line(inter_left1.x, inter_left1.y, inter_left.x, inter_left.y);
        this.p5.line(inter_right1.x, inter_right1.y, inter_right.x, inter_right.y);
    }
    renderTriangle() {
        this.top = this.p5.createVector(this.p.x + this.s.x * this.p5.cos(this.cs.z), this.p.y + this.s.y * this.p5.sin(this.cs.z));
        this.left = this.p5.createVector(this.p.x + this.s.x * this.p5.cos(this.cs.z + 2 * this.p5.PI / 3), this.p.y + this.s.y * this.p5.sin(this.cs.z + 2 * this.p5.PI / 3));
        this.right = this.p5.createVector(this.p.x + this.s.x * this.p5.cos(this.cs.z + 4 * this.p5.PI / 3), this.p.y + this.s.y * this.p5.sin(this.cs.z + 4 * this.p5.PI / 3));
        // Draw outer triangle
        this.p5.triangle(this.top.x, this.top.y, this.left.x, this.left.y, this.right.x, this.right.y);
        // Draw nested triangles based on cs.x progress
        for(let i = 1; i <= 3; i++){
            const progress = this.p5.map(this.cs.x, (i - 1) / 3, i / 3, 0, 1, true);
            if (progress > 0) {
                const scale = 1 - i * 0.25 * progress;
                const nestedTop = this.p5.createVector(this.p.x + this.s.x * scale * this.p5.cos(this.cs.z), this.p.y + this.s.y * scale * this.p5.sin(this.cs.z));
                const nestedLeft = this.p5.createVector(this.p.x + this.s.x * scale * this.p5.cos(this.cs.z + 2 * this.p5.PI / 3), this.p.y + this.s.y * scale * this.p5.sin(this.cs.z + 2 * this.p5.PI / 3));
                const nestedRight = this.p5.createVector(this.p.x + this.s.x * scale * this.p5.cos(this.cs.z + 4 * this.p5.PI / 3), this.p.y + this.s.y * scale * this.p5.sin(this.cs.z + 4 * this.p5.PI / 3));
                this.p5.triangle(nestedTop.x, nestedTop.y, nestedLeft.x, nestedLeft.y, nestedRight.x, nestedRight.y);
            }
        }
    }
    contains(x, y) {
        return this.isPointInTriangleFast(x, y, this.top.x, this.top.y, this.left.x, this.left.y, this.right.x, this.right.y);
    }
    isPointInTriangleFast(px, py, ax, ay, bx, by, cx, cy) {
        const d1 = this.sign(px, py, ax, ay, bx, by);
        const d2 = this.sign(px, py, bx, by, cx, cy);
        const d3 = this.sign(px, py, cx, cy, ax, ay);
        const hasNeg = d1 < 0 || d2 < 0 || d3 < 0;
        const hasPos = d1 > 0 || d2 > 0 || d3 > 0;
        return !(hasNeg && hasPos);
    }
    sign(px, py, ax, ay, bx, by) {
        return (px - bx) * (ay - by) - (ax - bx) * (py - by);
    }
    setTextOffset(offsetX, offsetY) {
        this.textWriter.p.x = this.p.x + offsetX;
        this.textWriter.p.y = this.p.y + offsetY;
    }
    getColor(isHovered) {
        return isHovered ? this.hoveredColor : this.unhoveredColor;
    }
}
class UIHexButton extends UIObj {
    constructor(p, x, y, w, h, sx, sy, text, textSize){
        super(p, x, y, w, h);
        this.cs = p.createVector(sx, sy);
        this.vertices = this.calculateHexVertices();
        this.textWriter = new TextWriter(p, x, y, undefined, undefined, text, textSize);
    }
    calculateHexVertices() {
        const vertices = [];
        for(let i = 0; i < 6; i++){
            const angle = i * this.p5.PI / 3;
            const x = this.p.x + this.radius * this.p5.cos(angle);
            const y = this.p.y + this.radius * this.p5.sin(angle);
            vertices.push({
                x,
                y
            });
        }
        return vertices;
    }
    contains(x, y) {
        return this.isPointInHexagon(x, y);
    }
    isPointInHexagon(px, py) {
        // Simple distance-based check for hexagon containment
        return this.p5.dist(px, py, this.p.x, this.p.y) <= this.radius;
    }
    render() {
        // Update vertices based on current position and size
        this.radius = Math.min(this.s.x, this.s.y) / 2;
        this.vertices = this.calculateHexVertices();
        // Draw hexagon with animation based on cs.x
        for(let i = 0; i < 6; i++){
            const currentVertex = this.vertices[i];
            const nextVertex = this.vertices[(i + 1) % 6];
            const prevVertex = this.vertices[(i - 1 + 6) % 6];
            // Calculate the line segment to draw based on cs.x
            // cs.x = 0: draw from corner towards center (small segments)
            // cs.x = 1: draw complete lines between vertices
            const progress = this.p5.map(this.cs.x, 0, 1, 0.2, 0.9, true);
            // Offset from vertices - lines don't start exactly at the vertex
            const offset = 0.1; // 10% offset from vertex
            // Draw line towards next vertex
            const startToNextX = this.p5.lerp(currentVertex.x, nextVertex.x, offset);
            const startToNextY = this.p5.lerp(currentVertex.y, nextVertex.y, offset);
            const endX = this.p5.lerp(currentVertex.x, nextVertex.x, offset + progress * (1 - offset));
            const endY = this.p5.lerp(currentVertex.y, nextVertex.y, offset + progress * (1 - offset));
            this.p5.line(startToNextX, startToNextY, endX, endY);
            // Draw line towards previous vertex
            const startToPrevX = this.p5.lerp(currentVertex.x, prevVertex.x, offset);
            const startToPrevY = this.p5.lerp(currentVertex.y, prevVertex.y, offset);
            const startX = this.p5.lerp(currentVertex.x, prevVertex.x, offset + progress * (1 - offset));
            const startY = this.p5.lerp(currentVertex.y, prevVertex.y, offset + progress * (1 - offset));
            this.p5.line(startToPrevX, startToPrevY, startX, startY);
        }
    }
}
class UILinesButton extends UIObj {
    constructor(p, x, y, w, h, sx, sy, text, textSize){
        super(p, x, y, w, h);
        this.cs = p.createVector(sx, sy);
        this.textWriter = new TextWriter(p, x, y, undefined, undefined, text, textSize);
    }
    contains(x, y) {
        return x >= this.p.x - this.s.x / 2 && x <= this.p.x + this.s.x / 2 && y >= this.p.y - this.s.y / 2 && y <= this.p.y + this.s.y / 2;
    }
    render() {
        const cx = this.p.x;
        const cy = this.p.y;
        const w = this.s.x;
        const h = this.s.y;
        const minLen = 0.08 * w;
        const lineLen = this.p5.lerp(minLen, w, this.p5.constrain(this.cs.x, 0, 1));
        const innerSpacing = 0.12 * h;
        const textGap = 0.36 * h;
        const lineYs = [
            cy - textGap - innerSpacing,
            cy - textGap,
            cy + textGap,
            cy + textGap + innerSpacing
        ];
        for(let i = 0; i < 4; i++)if (i < 2) this.p5.line(cx - w / 2, lineYs[i], cx - w / 2 + lineLen, lineYs[i]);
        else this.p5.line(cx + w / 2, lineYs[i], cx + w / 2 - lineLen, lineYs[i]);
    }
}
const daysSince = (startDate)=>{
    const start = new Date(startDate);
    const now = new Date();
    return Math.floor((now - start) / 86400000);
};
const radialToCartesian = (r, a, p5Instance)=>{
    return {
        x: r * p5Instance.cos(a),
        y: -r * p5Instance.sin(a)
    };
};
class TextWriter extends UIObj {
    constructor(p, x, y, w, h, t, size = 32, weight){
        super(p, x, y, w, h);
        this.t = t;
        this.size = size;
        this.weight = weight;
        this.alphabet = "~!@#$%&*_+=/<>?";
        this.progress = 0;
    }
    render() {
        this.p5.textSize(this.size);
        this.p5.text(this.t, this.p.x, this.p.y, this.s.x);
    }
    renderRandom(progress) {
        if (progress == undefined) progress = this.progress;
        const n = this.t.length;
        let t_render = "";
        for(let i = 0; i < n; i++)if (this.p5.random() > progress) t_render += this.alphabet[this.p5.floor(this.p5.random(0, this.alphabet.length))];
        else t_render += this.t[i];
        this.p5.textSize(this.size);
        this.p5.text(t_render, this.p.x, this.p.y);
    }
    renderSequential(progress) {
        if (progress == undefined) progress = this.progress;
        const n = this.t.length;
        const n_letters = this.p5.round(progress * n);
        let t_render = this.t.slice(0, n_letters);
        this.p5.textSize(this.size);
        this.p5.text(t_render, this.p.x, this.p.y);
    }
    renderSequentialRandom(progress) {
        if (progress == undefined) progress = this.progress;
        progress = this.p5.constrain(progress, 0, 1);
        const n = this.t.length;
        const n_letters = this.p5.round(progress * n);
        let t_render = this.t.slice(0, n_letters);
        // Create consistent randomness per character position
        this.p5.randomSeed(progress * 12345 * n + this.p5.millis());
        if (n_letters != n) t_render += this.alphabet[this.p5.floor(this.p5.random(0, this.alphabet.length))];
        this.p5.randomSeed();
        this.p5.textSize(this.size);
        if (this.s.x) this.p5.text(t_render, this.p.x, this.p.y, this.s.x);
        else this.p5.text(t_render, this.p.x, this.p.y);
    }
    renderTransition(progress, start_string, end_string, glitch_width = 0.15) {
        if (progress == undefined) progress = this.progress;
        this.p5.textSize(this.size);
        if (progress == 0) {
            if (this.s.x) this.p5.text(start_string, this.p.x, this.p.y, this.s.x);
            else this.p5.text(start_string, this.p.x, this.p.y);
            return;
        } else if (progress == 1) {
            if (this.s.x) this.p5.text(end_string, this.p.x, this.p.y, this.s.x);
            else this.p5.text(end_string, this.p.x, this.p.y);
        }
        progress = this.p5.map(progress, 0, 1, 0, 1 + glitch_width, true);
        const max_length = Math.max(start_string.length, end_string.length);
        let t_render = "";
        for(let i = 0; i < max_length; i++){
            const start_char = i < start_string.length ? start_string[i] : "";
            const end_char = i < end_string.length ? end_string[i] : "";
            // Create consistent randomness per character position
            this.p5.randomSeed(i * 12345 + Math.floor(this.p5.millis() / 30));
            const char_random = this.p5.random();
            // Determine what to show based on progress and random chance
            if (char_random < progress - glitch_width || start_char == '\n') // Character has fully transitioned
            t_render += end_char;
            else if (char_random < progress + glitch_width) // Character is in glitch zone
            {
                if (start_char !== "" || end_char !== "") // Only show glitch if there's actually a character to transition
                t_render += this.alphabet[this.p5.floor(this.p5.random(0, this.alphabet.length))];
            } else // Character hasn't started transitioning
            t_render += start_char;
        }
        // Reset random seed to not affect other random calls
        this.p5.randomSeed();
        this.t = t_render;
        if (this.s.x) this.p5.text(t_render, this.p.x, this.p.y, this.s.x);
        else this.p5.text(t_render, this.p.x, this.p.y);
    }
}
class UIWebButton extends UIObj {
    constructor(p, x, y, radius, scale, project){
        super(p, x, y, radius * 2, radius * 2);
        this.radius = radius; // Used for physics calculations
        this.scale = scale; // Used for visual size
        this.project = project;
        this.hoverAlpha = 0;
        this.targetHoverAlpha = 0;
        this.image = null;
        this.imageLoaded = false;
        this.imageAlpha = 0;
        this.targetImageAlpha = 0;
        // Load project image
        if (project.image) try {
            // Use getMediaPath to handle imported assets properly
            const imagePath = getMediaPath(project.image);
            // Don't store the initial return value, wait for callback
            p.loadImage(imagePath, (img)=>{
                // Ensure we have a valid image with dimensions
                if (img && img.width > 0 && img.height > 0) {
                    this.image = img; // Store the callback-provided image object
                    this.imageLoaded = true;
                    this.targetImageAlpha = 255; // Trigger fade-in animation
                } else {
                    console.error('Invalid image loaded for', project.name, '- no dimensions');
                    this.imageLoaded = false;
                }
            }, (err)=>{
                console.error('Image load failed for', project.name, ':', err);
                this.imageLoaded = false;
            });
        } catch (err) {
            console.error('Error calling loadImage for', project.name, ':', err);
            this.imageLoaded = false;
        }
    }
    renderFallback(overrideAlpha = null) {
        // Fallback: color based on position while image loads
        const colorR = this.p5.map(this.p.x, 0, this.p5.width, 0, 255);
        const colorG = this.p5.map(this.p.y, 0, this.p5.height, 0, 255);
        const colorB = 255;
        const baseAlpha = 255 - this.hoverAlpha * 50;
        const alpha = overrideAlpha !== null ? overrideAlpha : baseAlpha;
        this.p5.fill(colorR, colorG, colorB, alpha);
        this.p5.strokeWeight(1);
        this.p5.stroke(240, alpha);
        this.p5.square(this.p.x, this.p.y, this.scale);
    }
    contains(x, y) {
        // Check if point is inside the square using visual scale
        const halfSize = this.scale * 0.5;
        return x >= this.p.x - halfSize && x <= this.p.x + halfSize && y >= this.p.y - halfSize && y <= this.p.y + halfSize;
    }
    render() {
        this.p5.push();
        const halfSize = this.scale / 2;
        const cornerSize = this.scale * 0.15; // Corner bracket size
        const hudAlpha = 120 + this.hoverAlpha * 135; // HUD elements alpha
        // Show fallback while image is loading or still fading in
        if (!this.imageLoaded || !this.image || this.imageAlpha < 255) {
            // Fade out fallback as image fades in
            const fallbackAlpha = this.imageLoaded && this.image ? 255 - this.imageAlpha : 255;
            this.renderFallback(fallbackAlpha);
        }
        // Show image with fade-in animation if loaded
        if (this.imageLoaded && this.image && this.imageAlpha > 0) {
            const imageOpacity = this.imageAlpha * (255 - this.hoverAlpha * 30) / 255;
            this.p5.tint(255, imageOpacity);
            try {
                this.p5.image(this.image, this.p.x - halfSize, this.p.y - halfSize, this.scale, this.scale);
            } catch (err) {
                console.error('Error rendering image for project', this.project.name, ':', err);
            }
            this.p5.noTint();
        }
        // HUD Corner brackets (targeting system style)
        this.p5.stroke(74, 144, 230, hudAlpha); // Blue theme for web experiences
        this.p5.strokeWeight(2);
        this.p5.strokeCap(this.p5.SQUARE);
        this.p5.noFill();
        const corners = [
            [
                -halfSize,
                -halfSize
            ],
            [
                halfSize,
                -halfSize
            ],
            [
                halfSize,
                halfSize
            ],
            [
                -halfSize,
                halfSize
            ] // bottom-left
        ];
        corners.forEach(([offsetX, offsetY], index)=>{
            const x = this.p.x + offsetX;
            const y = this.p.y + offsetY;
            const xDir = index === 0 || index === 3 ? 1 : -1; // Left corners: right, Right corners: left
            const yDir = index === 0 || index === 1 ? 1 : -1; // Top corners: down, Bottom corners: up
            // L-shaped brackets
            this.p5.line(x, y, x + xDir * cornerSize, y);
            this.p5.line(x, y, x, y + yDir * cornerSize);
        });
        // Status indicator dots (sci-fi style)
        if (this.hoverAlpha > 0.1) {
            this.p5.fill(74, 144, 230, hudAlpha * 0.8);
            this.p5.noStroke();
            const dotSize = 3;
            const dotSpacing = 8;
            // Status dots in top-right area
            for(let i = 0; i < 3; i++){
                const dotX = this.p.x + halfSize - 15 - i * dotSpacing;
                const dotY = this.p.y - halfSize + 6;
                this.p5.circle(dotX, dotY, dotSize);
            }
        }
        // Subtle scan line effect when hovered
        if (this.hoverAlpha > 0.2) {
            this.p5.stroke(74, 144, 230, hudAlpha * 0.3);
            this.p5.strokeWeight(1);
            const scanY = this.p.y - halfSize + this.p5.millis() * 0.05 % this.scale;
            this.p5.line(this.p.x - halfSize, scanY, this.p.x + halfSize, scanY);
        }
        // Main border with enhanced styling
        this.p5.stroke(74, 144, 230, hudAlpha * 0.6);
        this.p5.strokeWeight(1);
        this.p5.noFill();
        this.p5.square(this.p.x, this.p.y, this.scale);
        this.p5.pop();
        // Project name with HUD styling
        this.p5.push();
        const textOpacity = 120 + this.hoverAlpha * 135;
        this.p5.fill(255, textOpacity);
        this.p5.noStroke();
        this.p5.textAlign(this.p5.CENTER, this.p5.CENTER);
        const fontSize = this.p5.width < 768 ? 16 : 20;
        this.p5.textSize(fontSize);
        this.p5.text(this.project.name, this.p.x, this.p.y + halfSize + 25);
        // Status text when hovered
        if (this.hoverAlpha > 0.3 && this.project.subtitle) {
            this.p5.fill(74, 144, 230, hudAlpha * 0.7);
            this.p5.textAlign(this.p5.CENTER, this.p5.CENTER);
            this.p5.textSize(fontSize * 0.75); // Increased from 0.6 to 0.75
            this.p5.text(this.project.subtitle, this.p.x, this.p.y + halfSize + 45);
        }
        this.p5.pop();
        // Update hover animation
        this.hoverAlpha = this.p5.lerp(this.hoverAlpha, this.targetHoverAlpha, 0.1);
        // Update image fade-in animation (slower fade for better visibility)
        this.imageAlpha = this.p5.lerp(this.imageAlpha, this.targetImageAlpha, 0.03);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9NOlx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createHelpButton", ()=>createHelpButton);
parcelHelpers.export(exports, "refreshHelpButton", ()=>refreshHelpButton);
var _litHtml = require("lit-html");
var _unsafeHtmlJs = require("lit-html/directives/unsafe-html.js");
var _faqConfigJs = require("../../config/faq-config.js");
let isPopupOpen = false;
// Handle help button click
function toggleHelpPopup(event) {
    event.preventDefault();
    event.stopPropagation();
    const popup = document.getElementById('help-popup');
    const overlay = document.getElementById('help-overlay');
    if (!popup || !overlay) return;
    if (isPopupOpen) {
        // Close popup
        popup.classList.remove('help-popup-open');
        overlay.classList.remove('help-overlay-open');
        document.body.classList.remove('help-active');
        // Clear global flag to re-enable p5.js interactions
        window.helpPopupOpen = false;
        isPopupOpen = false;
        // Restore original theme color for iOS status bar
        const themeColorMeta = document.querySelector('meta[name="theme-color"]');
        if (themeColorMeta) themeColorMeta.content = '#171717'; // Back to original dark theme
    } else {
        // Open popup
        popup.classList.add('help-popup-open');
        overlay.classList.add('help-overlay-open');
        document.body.classList.add('help-active');
        // Set global flag to disable p5.js interactions
        window.helpPopupOpen = true;
        isPopupOpen = true;
        // Update theme color for iOS status bar to match dimmed overlay
        const themeColorMeta = document.querySelector('meta[name="theme-color"]');
        if (themeColorMeta) themeColorMeta.content = '#000000'; // Dark color to match overlay
    }
}
// Handle overlay click to close popup
function handleOverlayClick(event) {
    if (event.target.id === 'help-overlay') toggleHelpPopup(event);
}
// Handle escape key to close popup
function handleKeyPress(event) {
    if (event.key === 'Escape' && isPopupOpen) toggleHelpPopup(event);
}
const createHelpButton = ()=>{
    // Add global event listeners
    if (!window.helpButtonInitialized) {
        document.addEventListener('keydown', handleKeyPress);
        window.helpButtonInitialized = true;
    }
    return (0, _litHtml.html)`
        <div class="help-button" @click=${toggleHelpPopup}>
            <span class="help-button-icon">?</span>
        </div>

        <!-- Popup overlay -->
        <div id="help-overlay" class="help-overlay" @click=${handleOverlayClick}>
            <div id="help-popup" class="help-popup">
                <div class="help-popup-header">
                    <h2>SITE GUIDE</h2>
                    <button class="help-popup-close" @click=${toggleHelpPopup}>×</button>
                </div>
                <div class="help-popup-content">
                    ${(0, _faqConfigJs.faqConfig).map((faq)=>(0, _litHtml.html)`
                        <div class="faq-item">
                            <div class="faq-question">${faq.question}</div>
                            <div class="faq-answer">${(0, _unsafeHtmlJs.unsafeHTML)(faq.answer)}</div>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `;
};
const refreshHelpButton = ()=>{
    const helpContainer = document.getElementById("help-container");
    if (helpContainer) require("87f6d8a558599094").then(({ render })=>{
        render(createHelpButton(), helpContainer);
    });
};

},{"lit-html":"l15as","lit-html/directives/unsafe-html.js":"gHvh1","../../config/faq-config.js":"3JakO","87f6d8a558599094":"cNg9d","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gHvh1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UnsafeHTMLDirective", ()=>e);
parcelHelpers.export(exports, "unsafeHTML", ()=>o);
var _litHtmlJs = require("../lit-html.js");
var _directiveJs = require("../directive.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class e extends (0, _directiveJs.Directive) {
    constructor(i){
        if (super(i), this.it = (0, _litHtmlJs.nothing), i.type !== (0, _directiveJs.PartType).CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
    }
    render(r) {
        if (r === (0, _litHtmlJs.nothing) || null == r) return this._t = void 0, this.it = r;
        if (r === (0, _litHtmlJs.noChange)) return r;
        if ("string" != typeof r) throw Error(this.constructor.directiveName + "() called with a non-string value");
        if (r === this.it) return this._t;
        this.it = r;
        const s = [
            r
        ];
        return s.raw = s, this._t = {
            _$litType$: this.constructor.resultType,
            strings: s,
            values: []
        };
    }
}
e.directiveName = "unsafeHTML", e.resultType = 1;
const o = (0, _directiveJs.directive)(e);

},{"../lit-html.js":"l15as","../directive.js":"hDxMd","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hDxMd":[function(require,module,exports,__globalThis) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Directive", ()=>i);
parcelHelpers.export(exports, "PartType", ()=>t);
parcelHelpers.export(exports, "directive", ()=>e);
const t = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, e = (t)=>(...e)=>({
            _$litDirective$: t,
            values: e
        });
class i {
    constructor(t){}
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t, e, i) {
        this._$Ct = t, this._$AM = e, this._$Ci = i;
    }
    _$AS(t, e) {
        return this.update(t, e);
    }
    update(t, e) {
        return this.render(...e);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3JakO":[function(require,module,exports,__globalThis) {
// FAQ Configuration
// Edit this file to customize the help popup content
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "faqConfig", ()=>faqConfig);
parcelHelpers.export(exports, "addFAQItem", ()=>addFAQItem);
parcelHelpers.export(exports, "updateFAQItem", ()=>updateFAQItem);
parcelHelpers.export(exports, "removeFAQItem", ()=>removeFAQItem);
const faqConfig = [
    {
        question: "Navigation",
        answer: "Click on the desired 'path' in the bottom left corner to navigate back to a previous view.<br><br>Orange exclamation mark button (left of the one you just clicked) for contact info & services."
    },
    {
        question: "About",
        answer: "Benjamin Lappalainen -> B. Lappalainen -> BLAP. Years ago when I first made an Instagram account for my photography, I decided on @blapphoto as a username. 'blap' stuck ever since, and some of my friends have adopted it as a nickname for me.<br><br>As for '64':<br>We are in the era of 64-bit computers (generally, computers with size 2^64 integer and addressing registers).<br><br>64 is 8^2. 8 in Cantonese (and other Chinese-speaking cultures) is considered a lucky number because it bears homophonic similarity to the word for 'wealth' or 'prosperity'.<br><br>64 is 2^6. I was 26 when I made the decision to choose a different path through life, which has since led me to some extraordinary people, places, ideas, and opportunities."
    },
    {
        question: "Technology (for the nerds)",
        answer: "The dynamic pages on this site are constructed using a creative coding library called <a href=\"https://p5js.org\" target=\"_blank\">p5.js</a>. I'm a big advocate for this library and teach people how to make art with it, as well as teach programming using it as a starting point. Otherwise, the site was built in HTML, CSS, and vanilla JavaScript. <a href=\"https://parceljs.org/\">Parcel</a> is the bundler, and the site is deployed to <a href=\"https://pages.github.com/\">GitHub Pages</a> so that my only expense is the domain."
    }
];
const addFAQItem = (question, answer)=>{
    faqConfig.push({
        question,
        answer
    });
};
const updateFAQItem = (index, question, answer)=>{
    if (index >= 0 && index < faqConfig.length) faqConfig[index] = {
        question,
        answer
    };
};
const removeFAQItem = (index)=>{
    if (index >= 0 && index < faqConfig.length) faqConfig.splice(index, 1);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5NdpF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createContactButton", ()=>createContactButton);
parcelHelpers.export(exports, "openContactPopup", ()=>openContactPopup);
parcelHelpers.export(exports, "refreshContactButton", ()=>refreshContactButton);
var _litHtml = require("lit-html");
var _unsafeHtmlJs = require("lit-html/directives/unsafe-html.js");
var _contactConfigJs = require("../../config/contact-config.js");
let isPopupOpen = false;
// Handle contact button click
function toggleContactPopup(event) {
    event.preventDefault();
    event.stopPropagation();
    const popup = document.getElementById('contact-popup');
    const overlay = document.getElementById('contact-overlay');
    if (!popup || !overlay) return;
    if (isPopupOpen) {
        // Close popup
        popup.classList.remove('contact-popup-open');
        overlay.classList.remove('contact-overlay-open');
        document.body.classList.remove('contact-active');
        // Clear global flag to re-enable p5.js interactions
        window.contactPopupOpen = false;
        isPopupOpen = false;
        // Restore original theme color for iOS status bar
        const themeColorMeta = document.querySelector('meta[name="theme-color"]');
        if (themeColorMeta) themeColorMeta.content = '#171717'; // Back to original dark theme
    } else {
        // Open popup
        popup.classList.add('contact-popup-open');
        overlay.classList.add('contact-overlay-open');
        document.body.classList.add('contact-active');
        // Set global flag to disable p5.js interactions
        window.contactPopupOpen = true;
        isPopupOpen = true;
        // Update theme color for iOS status bar to match dimmed overlay
        const themeColorMeta = document.querySelector('meta[name="theme-color"]');
        if (themeColorMeta) themeColorMeta.content = '#000000'; // Dark color to match overlay
    }
}
// Handle overlay click to close popup
function handleOverlayClick(event) {
    if (event.target.id === 'contact-overlay') toggleContactPopup(event);
}
// Handle escape key to close popup
function handleKeyPress(event) {
    if (event.key === 'Escape' && isPopupOpen) toggleContactPopup(event);
}
const createContactButton = ()=>{
    // Add global event listeners
    if (!window.contactButtonInitialized) {
        document.addEventListener('keydown', handleKeyPress);
        window.contactButtonInitialized = true;
    }
    return (0, _litHtml.html)`
        <div class="contact-button" @click=${toggleContactPopup}>
            <span class="contact-button-icon">!</span>
        </div>

        <!-- Popup overlay -->
        <div id="contact-overlay" class="contact-overlay" @click=${handleOverlayClick}>
            <div id="contact-popup" class="contact-popup">
                <div class="contact-popup-header">
                    <h2>CONTACT & SERVICES</h2>
                    <button class="contact-popup-close" @click=${toggleContactPopup}>×</button>
                </div>
                <div class="contact-popup-content">
                    ${(0, _contactConfigJs.contactConfig).map((section)=>(0, _litHtml.html)`
                        <div class="contact-section">
                            <div class="contact-section-title">${section.title}</div>
                            <div class="contact-section-content">${(0, _unsafeHtmlJs.unsafeHTML)(section.content)}</div>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `;
};
function openContactPopup() {
    const popup = document.getElementById('contact-popup');
    const overlay = document.getElementById('contact-overlay');
    if (!popup || !overlay || isPopupOpen) return;
    popup.classList.add('contact-popup-open');
    overlay.classList.add('contact-overlay-open');
    document.body.classList.add('contact-active');
    window.contactPopupOpen = true;
    isPopupOpen = true;
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) themeColorMeta.content = '#000000';
}
const refreshContactButton = ()=>{
    const contactContainer = document.getElementById("contact-container");
    if (contactContainer) require("ae0814bb402b7ad9").then(({ render })=>{
        render(createContactButton(), contactContainer);
    });
};

},{"lit-html":"l15as","lit-html/directives/unsafe-html.js":"gHvh1","../../config/contact-config.js":"3Vr6D","ae0814bb402b7ad9":"cNg9d","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3Vr6D":[function(require,module,exports,__globalThis) {
// Contact Configuration
// Edit this file to customize the contact popup content
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "contactConfig", ()=>contactConfig);
parcelHelpers.export(exports, "addContactItem", ()=>addContactItem);
parcelHelpers.export(exports, "updateContactItem", ()=>updateContactItem);
parcelHelpers.export(exports, "removeContactItem", ()=>removeContactItem);
const contactConfig = [
    {
        title: "Contact",
        content: `
            <p>What can I do for you?</p>
            <p><strong>Email:</strong> <a href="mailto:null@blap64.com">null@blap64.com</a></p>
            <p><strong>Location:</strong> Toronto, Canada is home. Work is global. Will travel and collaborate across all timezones.</p>
            <p><strong>Response Time:</strong> Within 48 hours</p>
        `
    },
    {
        title: "Services",
        content: `
            <h3>Interactive Media & Installations</h3>
            <p>Custom interactive experiences for events, exhibitions, and permanent installations. Specializing in real-time visuals, TouchDesigner development, sensor integration, and audience participation.</p>

            <h3>Creative Technology Consulting</h3>
            <p>Technical guidance for artists, galleries, and cultural institutions. From concept development to implementation strategy.</p>

            <h3>Web Development</h3>
            <p>Custom websites and web applications with a focus on creative expression and unique user experiences.</p>

            <h3>Education & Workshops</h3>
            <p>Teaching creative coding, AI, and interactive media development for individuals and organizations.</p>

            <h3>Photography</h3>
            <p>Creative portrait photography and live performance documentation. Specializing in capturing authentic moments and dynamic energy in controlled and natural environments.</p>
        `
    },
    {
        title: "Process",
        content: `
            <h3>1. Initial Consultation</h3>
            <p>Free 30-minute discovery call to discuss your project goals, timeline, and budget.</p>

            <h3>2. Proposal & Planning</h3>
            <p>Detailed project proposal with timeline, deliverables, and technical specifications.</p>

            <h3>3. Development & Iteration</h3>
            <p>Collaborative development process with regular check-ins and feedback sessions.</p>

            <h3>4. Launch & Support</h3>
            <p>Deployment assistance and ongoing technical support as needed.</p>
        `
    }
];
const addContactItem = (title, content)=>{
    contactConfig.push({
        title,
        content
    });
};
const updateContactItem = (index, title, content)=>{
    if (index >= 0 && index < contactConfig.length) contactConfig[index] = {
        title,
        content
    };
};
const removeContactItem = (index)=>{
    if (index >= 0 && index < contactConfig.length) contactConfig.splice(index, 1);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cGnZp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _lit = require("lit");
exports.default = (props)=>(0, _lit.html)`
    <div class="vertical-center">
        <!-- <p class="main-paragraph unselectable">
            blap64<br />under construction <3
        </p> -->
    </div>
    <!-- p5-element is a custom element that allows us to easily put a p5 sketch as the background of this page -->
    <!-- The custom element itself handles choosing the sketch based on the page property provided below -->
    <p5-element id="bg" sketch="home" .skipAnimations=${props?.skipAnimations}></p5-element>
`;

},{"lit":"hh14x","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eJ16n":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _lit = require("lit");
exports.default = (props)=>(0, _lit.html)`
    <!-- p5-element is a custom element that allows us to easily put a p5 sketch as the background of this page -->
    <!-- The custom element itself handles choosing the sketch based on the page property provided below -->
    <p5-element id="bg" sketch="codeart"></p5-element>
`;

},{"lit":"hh14x","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6g8Hp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _lit = require("lit");
var _newsletterFormJs = require("../elements/newsletter-form.js");
exports.default = (props)=>{
    const options = {};
    if (props && props.group) options.group = props.group;
    return (0, _lit.html)`
        <p5-element id="bg" sketch="links" .options=${options}></p5-element>
        <newsletter-form></newsletter-form>
    `;
};

},{"lit":"hh14x","../elements/newsletter-form.js":"h2cRt","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"h2cRt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NewsletterForm", ()=>NewsletterForm);
var _lit = require("lit");
const SUBSCRIBE_ENDPOINT = "https://newsletter-subscribe.b-m-lappalainen.workers.dev";
const TURNSTILE_SITE_KEY = "0x4AAAAAACeFh_PLBS7wUUKA";
let turnstilePromise = null;
const loadTurnstile = ()=>{
    if (window.turnstile) return Promise.resolve(window.turnstile);
    if (!turnstilePromise) turnstilePromise = new Promise((resolve, reject)=>{
        const existing = document.querySelector("script[data-turnstile-api]");
        if (existing) {
            existing.addEventListener("load", ()=>resolve(window.turnstile), {
                once: true
            });
            existing.addEventListener("error", reject, {
                once: true
            });
            return;
        }
        const script = document.createElement("script");
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
        script.async = true;
        script.defer = true;
        script.dataset.turnstileApi = "true";
        script.addEventListener("load", ()=>resolve(window.turnstile), {
            once: true
        });
        script.addEventListener("error", reject, {
            once: true
        });
        document.head.appendChild(script);
    });
    return turnstilePromise;
};
class NewsletterForm extends (0, _lit.LitElement) {
    static properties = {
        status: {
            state: true
        },
        statusType: {
            state: true
        },
        loading: {
            state: true
        },
        hovered: {
            state: true
        },
        focused: {
            state: true
        }
    };
    static styles = (0, _lit.css)`
        :host {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 20;
            display: block;
            width: 400px;
            visibility: hidden;
            transform: translate3d(0, 0, 0);
            font-family: "BPdotsSquareVF", monospace;
            font-weight: 900;
            box-sizing: border-box;
            --blue: 74, 144, 230;
            --icon-size: 50px;
        }

        .card {
            position: relative;
            box-sizing: border-box;
            padding: 15px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            background: rgba(23, 23, 23, 0.196);
            border: 1px solid rgba(var(--blue), 0.31);
            transition: border-color 0.4s ease, background 0.4s ease;
        }

        .card::after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            height: 1px;
            background: rgba(var(--blue), 0.235);
            opacity: 0;
            pointer-events: none;
            animation: scan var(--scan-duration, 1300ms) linear infinite;
            transition: opacity 0.4s ease;
        }

        @keyframes scan {
            from { transform: translateY(0); }
            to { transform: translateY(calc(var(--card-height, 130px) - 3px)); }
        }

        .dots {
            position: absolute;
            top: 12.5px;
            right: 9px;
            width: 24px;
            height: 3px;
            background: radial-gradient(circle, rgba(var(--blue), 0.59) 1.5px, transparent 1.6px) 0 0 / 8px 3px repeat-x;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.4s ease;
        }

        .header {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .icon {
            position: relative;
            flex: none;
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            width: var(--icon-size);
            height: var(--icon-size);
            padding-left: 1px;
            border: 1px solid rgba(var(--blue), 0.31);
            background: rgba(23, 23, 23, 0.118);
            color: rgba(var(--blue), 0.47);
            font-size: 12px;
            font-weight: 600;
            font-variation-settings: "wght" 600;
            line-height: 1;
            transition: border-color 0.4s ease, background 0.4s ease, color 0.4s ease;
        }

        .icon::before,
        .icon::after {
            content: "";
            position: absolute;
            inset: -1px;
            background:
                linear-gradient(var(--bracket), var(--bracket)) top left / 10px 2px no-repeat,
                linear-gradient(var(--bracket), var(--bracket)) top left / 2px 10px no-repeat,
                linear-gradient(var(--bracket), var(--bracket)) top right / 10px 2px no-repeat,
                linear-gradient(var(--bracket), var(--bracket)) top right / 2px 10px no-repeat,
                linear-gradient(var(--bracket), var(--bracket)) bottom left / 10px 2px no-repeat,
                linear-gradient(var(--bracket), var(--bracket)) bottom left / 2px 10px no-repeat,
                linear-gradient(var(--bracket), var(--bracket)) bottom right / 10px 2px no-repeat,
                linear-gradient(var(--bracket), var(--bracket)) bottom right / 2px 10px no-repeat;
            pointer-events: none;
        }

        .icon::before {
            --bracket: rgba(var(--blue), 0.376);
        }

        .icon::after {
            --bracket: rgba(var(--blue), 0.847);
            opacity: 0;
            transition: opacity 0.4s ease;
        }

        .heading {
            display: flex;
            flex-direction: column;
            gap: 2.5px;
            min-width: 0;
        }

        .label {
            color: rgba(255, 255, 255, 0.63);
            font-size: 18px;
            line-height: 1;
            transition: color 0.4s ease;
        }

        .meta {
            color: rgba(150, 150, 150, 0.47);
            font-size: 13px;
            line-height: 1;
            transition: color 0.4s ease;
        }

        .card.active {
            border-color: rgba(var(--blue), 0.706);
            background: rgba(23, 23, 23, 0.353);
        }

        .card.active::after,
        .card.active .dots {
            opacity: 1;
        }

        .card.active .icon {
            border-color: rgba(var(--blue), 0.706);
            background: rgba(23, 23, 23, 0.275);
            color: rgb(var(--blue));
        }

        .card.active .icon::after {
            opacity: 1;
        }

        .card.active .label {
            color: #fff;
        }

        .card.active .meta {
            color: rgb(150, 150, 150);
        }

        .card.active,
        .card.active::after,
        .card.active .dots,
        .card.active .icon,
        .card.active .icon::after,
        .card.active .label,
        .card.active .meta {
            transition-duration: 0.2s;
        }

        form {
            display: flex;
            gap: 8px;
        }

        input {
            flex: 1;
            min-width: 0;
            height: 44px;
            padding: 0 12px;
            box-sizing: border-box;
            background: rgba(13, 13, 13, 0.8);
            border: 1px solid #404040;
            border-radius: 0;
            color: #fafafa;
            font-family: "ZxGamut", -apple-system, BlinkMacSystemFont, sans-serif;
            font-size: 16px;
            outline: none;
            transition: border-color 0.4s ease;
        }

        input::placeholder {
            color: #606060;
        }

        input:focus {
            border-color: rgb(var(--blue));
            transition-duration: 0.15s;
        }

        button {
            height: 44px;
            padding: 0 16px;
            background: rgba(23, 23, 23, 0.78);
            border: 2px solid rgb(var(--blue));
            border-radius: 0;
            color: rgb(230, 230, 230);
            font-family: "BPdotsSquareVF", monospace;
            font-weight: 900;
            font-size: 13px;
            letter-spacing: 0.05em;
            cursor: pointer;
            white-space: nowrap;
            transition: background 0.4s ease, color 0.4s ease, opacity 0.2s ease;
        }

        button:disabled {
            opacity: 0.5;
            cursor: wait;
        }

        .status {
            min-height: 15px;
            font-size: 12px;
            line-height: 1.25;
            color: #808080;
        }

        .status:empty {
            display: none;
        }

        .status.success {
            color: rgb(var(--blue));
        }

        .status.error {
            color: #e25c4a;
        }

        .turnstile {
            position: absolute;
            right: 0;
            bottom: calc(100% + 6px);
            z-index: 2;
            display: flex;
            justify-content: flex-end;
        }

        .turnstile:empty {
            display: none;
        }

        @media (hover: hover) {
            button:hover:not(:disabled) {
                background: rgb(var(--blue));
                color: #fff;
                transition-duration: 0.15s;
            }
        }

        @media (max-width: 767px) {
            :host {
                --icon-size: 40px;
            }

            .icon {
                font-size: 10px;
            }

            button {
                padding: 0 12px;
            }
        }
    `;
    constructor(){
        super();
        this.status = "";
        this.statusType = "";
        this.loading = false;
        this.hovered = false;
        this.focused = false;
        this.token = "";
        this.widgetId = null;
        this.turnstileContainer = null;
    }
    firstUpdated() {
        this.turnstileContainer = this.renderRoot.querySelector(".turnstile");
        this.mountTurnstile();
        const card = this.renderRoot.querySelector(".card");
        this.resizeObserver = new ResizeObserver(()=>{
            card.style.setProperty("--card-height", `${card.offsetHeight}px`);
            card.style.setProperty("--scan-duration", `${card.offsetHeight * 10}ms`);
        });
        this.resizeObserver.observe(card);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.resizeObserver?.disconnect();
        if (this.widgetId !== null && window.turnstile) try {
            window.turnstile.remove(this.widgetId);
        } catch  {
            this.widgetId = null;
        }
        this.widgetId = null;
    }
    async mountTurnstile() {
        if (!this.turnstileContainer || !TURNSTILE_SITE_KEY) return;
        try {
            const turnstile = await loadTurnstile();
            if (!this.isConnected || !this.turnstileContainer) return;
            this.widgetId = turnstile.render(this.turnstileContainer, {
                sitekey: TURNSTILE_SITE_KEY,
                theme: "dark",
                size: "compact",
                appearance: "interaction-only",
                callback: (token)=>{
                    this.token = token;
                },
                "expired-callback": ()=>{
                    this.token = "";
                },
                "error-callback": ()=>{
                    this.token = "";
                }
            });
        } catch  {
            this.setStatus("Scanner offline. Refresh to reboot.", "error");
        }
    }
    setStatus(message, type = "") {
        this.status = message;
        this.statusType = type;
    }
    resetTurnstile() {
        this.token = "";
        if (this.widgetId !== null && window.turnstile) try {
            window.turnstile.reset(this.widgetId);
        } catch  {
            this.token = "";
        }
    }
    async handleSubmit(event) {
        event.preventDefault();
        if (this.loading) return;
        const input = this.renderRoot.querySelector('input[type="email"]');
        const email = input.value.trim();
        if (!email) {
            this.setStatus("No address, no uplink.", "error");
            input.focus();
            return;
        }
        if (!this.token) {
            this.setStatus("Scanning: cyber or meat...");
            return;
        }
        this.loading = true;
        this.setStatus("");
        try {
            const response = await fetch(SUBSCRIBE_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    token: this.token
                })
            });
            const data = await response.json().catch(()=>({}));
            if (response.ok) {
                const message = (data.message || "").toLowerCase();
                this.setStatus(message.includes("already") ? "Already jacked in." : "Uplink established.", "success");
                input.value = "";
                this.resetTurnstile();
            } else {
                this.setStatus(data.error || "Uplink rejected. Try again.", "error");
                this.resetTurnstile();
            }
        } catch  {
            this.setStatus("Signal lost. Try again in a bit.", "error");
        } finally{
            this.loading = false;
        }
    }
    render() {
        return (0, _lit.html)`
            <div
                class="card ${this.hovered || this.focused ? "active" : ""}"
                @pointerenter=${(e)=>{
            if (e.pointerType === "mouse") this.hovered = true;
        }}
                @pointerleave=${()=>{
            this.hovered = false;
        }}
                @focusin=${()=>{
            this.focused = true;
        }}
                @focusout=${(e)=>{
            if (!e.currentTarget.contains(e.relatedTarget)) this.focused = false;
        }}
            >
                <div class="dots"></div>
                <div class="header">
                    <div class="icon" aria-hidden="true">MAIL</div>
                    <div class="heading">
                        <span class="label">UPLINK</span>
                        <span class="meta">boot up, jack in</span>
                    </div>
                </div>
                <form @submit=${this.handleSubmit} aria-label="Newsletter signup">
                    <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        autocomplete="email"
                        aria-label="Email address"
                        ?disabled=${this.loading}
                        required
                    >
                    <button type="submit" ?disabled=${this.loading}>
                        ${this.loading ? "SENDING..." : "SUBSCRIBE"}
                    </button>
                </form>
                <div
                    class="status ${this.statusType}"
                    role="status"
                    aria-live="polite"
                >${this.status}</div>
                <div class="turnstile"></div>
            </div>
        `;
    }
}
customElements.define("newsletter-form", NewsletterForm);

},{"lit":"hh14x","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jM3S0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _litHtml = require("lit-html");
var _20250727BlWebp = require("url:../../assets/about/2025-07-27_BL.webp");
var _20250727BlWebpDefault = parcelHelpers.interopDefault(_20250727BlWebp);
var _ecaade2020393Pdf = require("url:../../../public/publications/ecaade2020_393.pdf");
var _ecaade2020393PdfDefault = parcelHelpers.interopDefault(_ecaade2020393Pdf);
var _benjaminLappalainenArtistCV202610Pdf = require("url:../../../public/cv/Benjamin Lappalainen Artist CV - 2026-10.pdf");
var _benjaminLappalainenArtistCV202610PdfDefault = parcelHelpers.interopDefault(_benjaminLappalainenArtistCV202610Pdf);
var _benjaminLappalainenTechnicalResume202610Pdf = require("url:../../../public/cv/Benjamin Lappalainen Technical Resume - 2026-10.pdf");
var _benjaminLappalainenTechnicalResume202610PdfDefault = parcelHelpers.interopDefault(_benjaminLappalainenTechnicalResume202610Pdf);
const dotIcon = (rows)=>(0, _litHtml.html)`<svg class="cv-icon" viewBox="0 0 5 5" aria-hidden="true">${rows.flatMap((row, y)=>[
            ...row
        ].map((cell, x)=>cell === '#' ? (0, _litHtml.svg)`<rect x="${x + 0.1}" y="${y + 0.1}" width="0.8" height="0.8" />` : null))}</svg>`;
const downArrow = dotIcon([
    "..#..",
    "..#..",
    "#.#.#",
    ".###.",
    "..#.."
]);
const externalArrow = dotIcon([
    "..###",
    "...##",
    "..#.#",
    ".#...",
    "#...."
]);
const ext = (href, text)=>(0, _litHtml.html)`<a href="${href}" target="_blank" rel="noopener">${text}</a>`;
const cvToggle = (showResume)=>(0, _litHtml.html)`
    <div class="cv-toggle">
        <button class="cv-toggle-button ${showResume ? '' : 'active'}" @click=${()=>window.appRouter.navigate('/about', {
            instant: true
        })}>ARTIST CV</button>
        <button class="cv-toggle-button ${showResume ? 'active' : ''}" @click=${()=>window.appRouter.navigate('/about/resume', {
            instant: true
        })}>TECHNICAL RESUME</button>
    </div>
`;
const artistCv = ()=>(0, _litHtml.html)`
            <a class="cv-download" href="${0, _benjaminLappalainenArtistCV202610PdfDefault.default}" download="Benjamin Lappalainen Artist CV - 2026-10.pdf">${downArrow}DOWNLOAD PDF</a>

            <div class="cv-section">
                <h2>Selected New Media Exhibitions & Performances</h2>
                <p class="main-paragraph">
                    <strong>2026</strong> - <em>SWANS</em>, MULTIfest 2026, Noxte.app x Sky Fine Foods, STACKT (Toronto, Canada)<br>
                    <strong>2026</strong> - <em>RGBoids</em>, ${ext("https://www.interaccess.org/exhibitions/flashdrive-fundraiser-2026", "flashDRIVE Digital Arts Fundraiser Exhibition")}, InterAccess (Toronto, Canada)<br>
                        &nbsp;&nbsp;- Curated by Miriam Arbus<br>
                    <strong>2026</strong> - <em>ATTN_0</em>, Open HDMI x Long Winter x Geary Art Crawl, Geary Factory Lofts (Toronto, Canada)<br>
                    <strong>2026</strong> - ${ext("https://youtu.be/0ivtij7zndM", (0, _litHtml.html)`<em>OSCMOTO</em>`)}, Cool New Instruments Night #7, Tranzac Club (Toronto, Canada)<br>
                    <strong>2025</strong> - <em>IA Flow Fields</em>, ${ext("https://www.interaccess.org/exhibitions/flashdrive-digital-arts-fundraiser-exhibition", "flashDRIVE Digital Arts Fundraiser Exhibition")}, InterAccess (Toronto, Canada)<br>
                        &nbsp;&nbsp;- Curated by Miriam Arbus<br>
                    <strong>2025</strong> - <a href="#/interactive/live/sketching-flock"><em>Sketching Flock</em></a>, Farewell to The Bridge, UKAI Projects, The Bridge (Toronto, Canada)<br>
                    <strong>2025</strong> - <em>Zen Flock</em>, LW13.5 x Open HDMI, Long Winter x InterAccess, St. Anne's Parish Hall (Toronto, Canada)<br>
                    <strong>2025</strong> - <a href="#/interactive/live/sketching-flock"><em>Sketching Flock</em></a>, "Goodbye Dupont" Open HDMI, InterAccess (Toronto, Canada)<br>
                    <strong>2025</strong> - <a href="#/interactive/live/blind-spots"><em>Blind Spots</em></a>, Aberrant AI Open Studio, UKAI Projects, The Bridge (Toronto, Canada)<br>
                        &nbsp;&nbsp;- Collaboration with ${ext("https://www.ryankelln.com/", "Ryan Kelln")}<br>
                    <strong>2025</strong> - <a href="#/interactive/live/the-reader"><em>The Reader</em></a>, Aberrant AI Open Studio, UKAI Projects, The Bridge (Toronto, Canada)<br>
                    <strong>2024</strong> - <a href="#/interactive/live/long-winter-13-1">Live VJ Set</a>, LW13.1, Long Winter, Allan Gardens Children's Conservatory (Toronto, Canada)<br>
                    <strong>2024</strong> - <a href="#/interactive/live/game-set-match"><em>Game, Set, Match</em></a>, ${ext("https://www.interaccess.org/news/ia-gateway-2024-selected-artists", "IA Gateway 2024")}, InterAccess (Toronto, Canada)<br>
                    <strong>2024</strong> - <a href="#/interactive/live/bird-conductor"><em>Bird Conductor</em></a>, LW12.3, Long Winter, The Bridge (Toronto, Canada)<br>
                    <strong>2024</strong> - <a href="#/interactive/live/live-coding">Open HDMI: Spring 2024</a>, InterAccess (Toronto, Canada)<br>
                    <strong>2023</strong> - <a href="#/interactive/live/surveil-yourself"><em>Surveil Yourself</em></a>, P2P 2023 InterAccess Member Showcase, InterAccess (Toronto, Canada)<br>
                        &nbsp;&nbsp;- Collaboration with ${ext("https://circle-4.net/", "Asucena Di Giovanni")}
                </p>
            </div>

            <div class="cv-section">
                <h2>Teaching & Lectures</h2>
                <p class="main-paragraph">
                    <strong>2026</strong> - "Sensor to Screen" TouchDesigner and OSC workshop, independent, Andrew Sun's Discord server (online)<br>
                    <strong>2026</strong> - "TouchDesigner 101", "Reactive Space", "Internet Canvas", and "Synthetic Worlds" workshops, ${ext("https://softlaunch.net/", "soft_launch")} (Program Lead), New Stadium and InterAccess (Toronto, Canada)<br>
                    <strong>2026</strong> - "Cultural Fermentation & Other Messy Practices of Illegibility" workshop, OCAD University, Onsite Gallery (Toronto, Canada)<br>
                    <strong>2026</strong> - CTRL+SHIFT Vol. 11 Canvas & Code speaker, CTRL+SHIFT, FITC, Canvas & Code Gallery (Toronto, Canada)<br>
                    <strong>2026</strong> - "Views from the Machine" computer perception workshop, UKAI Projects, Remote Gallery (Toronto, Canada)<br>
                    <strong>2026</strong> - "Wayfinding: Art" panelist with ${ext("https://sundogg.substack.com/", "Michelle Jia")}, moderated by ${ext("https://www.sholis.com/", "Brian Sholis")}, 1RG (Toronto, Canada)<br>
                    <strong>2026</strong> - "The Art of Building Tiny Infrastructures" presentation and facilitated conversation, UKAI Projects (online)<br>
                    <strong>2025</strong> - ${ext("https://www.interaccess.org/workshop/digital-bridges-networking-tools-for-collaborative-creation", '"Digital Bridges" new media workshop')}, UKAI Projects, InterAccess (Toronto, Canada)<br>
                    <strong>2025</strong> - ${ext("https://www.interaccess.org/workshop/we-have-ai-at-home-building-our-creative-ai-ecosystem", '"We Have AI At Home" workshop')}, UKAI Projects, Cultural Technologies Lab, InterAccess (Toronto, Canada)<br>
                    <strong>2025</strong> - "Digital Bridges" new media workshop, UKAI Projects, Cultural Technologies Lab, Accton Arts Foundation, Art Site of Railway Warehouse (Hsinchu, Taiwan)<br>
                    <strong>2025</strong> - ${ext("https://lu.ma/voey52i4", "PROGRAM09: MEDIAPIPE workshop")}, ${ext("https://www.youtube.com/@programislive", "PROGRAM")}, New Stadium (Toronto, Canada)<br>
                    <strong>2025</strong> - 1:1 Code Art Mentorship program (online)<br>
                    <strong>2025</strong> - "We Have AI At Home" workshop, UKAI Projects, The Bridge (Toronto, Canada)<br>
                    <strong>2017</strong> - ${ext("https://outreach.engineering.utoronto.ca/files/2016/12/DEEP-Leadership-Camp-2017-Instructor-Job-Description.pdf", "Da Vinci Engineering Enrichment Program Camp Instructor")}, University of Toronto (Minden, Canada)<br>
                    <strong>2014-2016</strong> - Astrophotography workshops and lectures, Royal Astronomical Society of Canada (${ext("https://rascto.ca/content/recreational-astronomy-night-16", "Toronto")}, ${ext("https://rascto.ca/news/astrophoto-editing-lightroom-and-photoshop", "Richmond Hill")}, ${ext("https://www.youtube.com/watch?v=hzHWC9LJT8U", "The Blue Mountains")}, Canada)
                </p>
            </div>

            <div class="cv-section">
                <h2>Organizing & Facilitation</h2>
                <p class="main-paragraph">
                    <strong>2026</strong> - "Parallel Playground" artist research residency, UKAI Projects, World Creation Studio (Montreal, Canada)<br>
                    <strong>2026</strong> - soft_launch Spring Intensives Student Showcase, Doors Open Toronto, InterAccess (Toronto, Canada)<br>
                    <strong>2026</strong> - "Digital Bridges" artist research residency, UKAI Projects, New Stadium (Toronto, Canada)<br>
                    <strong>2026</strong> - "Goblin Market", UKAI Projects, Centre For Art Tapes (Halifax, Canada)<br>
                    <strong>2026</strong> - "The Funeral", UKAI Projects, Unit 2 Community Space (Toronto, Canada)<br>
                    <strong>2025</strong> - "Goblin Market", UKAI Projects, Art Site of Railway Warehouse in Hsinchu, General Village (Hsinchu, Taiwan)
                </p>
            </div>

            <div class="cv-section">
                <h2>Grants & Funding</h2>
                <p class="main-paragraph">
                    <strong>2025</strong> - Multi and Inter Arts Projects, Ontario Arts Council - "Distributed Shapeshifters"
                </p>
            </div>

            <div class="cv-section">
                <h2>Work Experience</h2>
                <p class="main-paragraph">
                    <strong>2025-Present</strong> - Program Lead, ${ext("https://softlaunch.net/", "soft_launch")}<br>
                        &nbsp;&nbsp;- Teaching creative technology skills through hands-on educational intensives<br>
                    <strong>2025-Present</strong> - XR Development Lead, ${ext("https://www.ukaiprojects.com/", "UKAI Projects")}<br>
                        &nbsp;&nbsp;- Cultural research, exhibitions, immersive installations, publishing, and workshops<br>
                    <strong>2024-2025</strong> - ${ext("https://www.artcast4d.eu/", "AAASeed Software and Installation Development, Artcast4D")}<br>
                        &nbsp;&nbsp;- Building installations for showcase in Europe and contributing to software development for ${ext("https://aaaseed.org/", "AAASeed")}, a realtime engine for 2D/3D graphics and interactive installations. Contributing to foundational architecture, core feature development, and UX design, progressing towards taking the software open source for use by artists, developers, and businesses.<br>
                    <strong>2020-2024</strong> - Product Manager, ${ext("https://us-shop.nanoleaf.me/", "Nanoleaf")}<br>
                        &nbsp;&nbsp;- Creator and lead developer of Nanoleaf Screen Mirror technology
                </p>
            </div>

            <div class="cv-section">
                <h2>Residencies</h2>
                <p class="main-paragraph">
                    <strong>2025</strong> - ${ext("https://aafoundation.tw/", "Art Site of Railway Warehouse in Hsinchu")}, Accton Arts Foundation (Hsinchu, Taiwan)<br>
                    <strong>2024</strong> - Aberrant AI - AI through the lens of Horror, UKAI Projects (Toronto, Canada)
                </p>
            </div>

            <div class="cv-section">
                <h2>Independent Projects</h2>
                <p class="main-paragraph">
                    <strong>2026</strong> - "Peripherous" - open source machine perception toolkit<br>
                    <strong>2025</strong> - ${ext("/newsletter/", "Code Art Corner educational newsletter")}<br>
                    <strong>2023-Present</strong> - ${ext("https://openprocessing.org/user/424615/?o=40&view=sketches", "Open Source Code Art Sketches")}
                </p>
            </div>

            <div class="cv-section">
                <h2>Education & Training</h2>
                <p class="main-paragraph">
                    <strong>2024</strong> - Mentored by digital artist, designer, and technologist Priam Givord<br>
                    <strong>2024</strong> - ${ext("https://www.aimetaphorsworkshop.com/", '"AI Metaphors" Workshop')}, University of Toronto, UKAI Projects, InterAccess<br>
                    <strong>2024</strong> - ${ext("https://ukaiprojects.com/pages/festival", '"Carnival of Shipwreck"')} Cultural Philosophy and New Media workshop series, UKAI Projects<br>
                    <strong>2024</strong> - ${ext("https://labs.hxouse.com/", '"Habitats"')} Unreal Engine 5 & Cultural Philosophy Workshop, HXOUSE LABS<br>
                    <strong>2015-2020</strong> - BASc., Engineering Science, University of Toronto
                </p>
            </div>

            <div class="cv-section">
                <h2>Publications</h2>
                <p class="main-paragraph">
                    <strong>2025</strong> - ${ext("https://museum.eecs.yorku.ca/anielewicz", "Interview with Will Anielewicz")}, Zbigniew Stachniak and Mark Hayward, York University Computer Museum website<br>
                    <strong>2020</strong> - ${ext((0, _ecaade2020393PdfDefault.default), "eCAADe Conference Proceedings Volume 1")}, Education and research in Computer Aided Architectural Design in Europe
                </p>
            </div>
`;
const technicalResume = ()=>(0, _litHtml.html)`
            <div class="cv-actions">
                <a class="cv-download" href="${0, _benjaminLappalainenTechnicalResume202610PdfDefault.default}" download="Benjamin Lappalainen Technical Resume - 2026-10.pdf">${downArrow}DOWNLOAD PDF</a>
                <a class="cv-download" href="https://www.linkedin.com/in/benjamin-lappalainen/" target="_blank" rel="noopener">${externalArrow}LINKEDIN</a>
            </div>
            <p class="main-paragraph">Creative Technologist & Software Developer: Networked Systems, Interactive Media & Computer Vision</p>

            <div class="cv-section">
                <h2>Technical Skills</h2>
                <p class="main-paragraph">
                    <strong>Networking & Infrastructure</strong> - Tailscale, TCP/UDP, IPv4/IPv6, LAN configuration & administration, Cloudflare (Tunnels, DNS, Turnstile), AWS, Thread, Matter protocol, self-hosted Git, NAS/homelab administration<br>
                    <strong>Languages</strong> - Python, JavaScript, C++, Lua, GLSL, C, Bash<br>
                    <strong>Real-Time & Creative Coding</strong> - TouchDesigner, OSC, MIDI, WebGL, p5.js, shader/GLSL pipelines, Godot<br>
                    <strong>Computer Vision & ML</strong> - OpenCV, MediaPipe, ONNX, MoveNet pose estimation, PyTorch, TFLearn<br>
                    <strong>Sensors & Hardware</strong> - ArtNet & DMX (lighting/show control), depth & CV cameras (Microsoft Kinect, Orbbec Femto Bolt, Luxonis OAK-D), LIDAR and ultrasonic distance sensors<br>
                    <strong>AI-Assisted Coding</strong> - Claude Code, LM Studio, agentic coding workflows, technical review of AI-generated code<br>
                    <strong>Tools & Platforms</strong> - Git, Jira, Confluence, Bitbucket, Adobe Creative Suite, Obsidian
                </p>
            </div>

            <div class="cv-section">
                <h2>Experience</h2>
                <p class="main-paragraph">
                    <strong>2024-Present</strong> - Creative Technologist & Software Developer, Independent<br>
                        &nbsp;&nbsp;- Provided technical support for a client installation at Toronto Metropolitan University, reverse-engineering an undocumented lighting controller to deliver a working DMX and ArtNet integration<br>
                        &nbsp;&nbsp;- Contract software development on ${ext("https://aaaseed.org/", "AAASeed")}, a real-time 2D/3D engine for interactive installations, in C++, Lua, and GLSL — architected HTTP networking (via the open-source cpr library) for web API communication, plus other foundational architecture and feature work en route to open-source release<br>
                        &nbsp;&nbsp;- Co-creator and technical lead of Peripherous, an open-source machine perception toolkit — directed architecture and AI-assisted implementation (via Claude Code) of its runtime, local message bus, lifecycle supervisor, and OSC output, using MoveNet Multipose (ONNX) for real-time pose estimation<br>
                        &nbsp;&nbsp;- Built and distributed TouchDesigner components including a SPAN super-resolution upscaler and macOS-optimized real-time diffusion image generator<br>
                        &nbsp;&nbsp;- Research in real-time 3D scene reconstruction pipelines (depth estimation, shared-memory integration) for TouchDesigner, and diffusion-based real-time image pipelines across macOS and Windows<br>
                    <br>
                    <strong>2025-Present</strong> - XR Development Lead, ${ext("https://www.ukaiprojects.com/", "UKAI Projects")}<br>
                        &nbsp;&nbsp;- Develop and lead Digital Bridges, a peer-to-peer networking program teaching researchers and artists to build collaborative systems using Tailscale and OSC<br>
                        &nbsp;&nbsp;- Software development and AI system behaviour direction for AI-driven interactive game systems<br>
                        &nbsp;&nbsp;- Designed and delivered technical workshops on machine perception and computer vision (MediaPipe) for artist and technologist audiences, including an international iteration in Hsinchu, Taiwan<br>
                    <br>
                    <strong>2025-Present</strong> - Program Lead, ${ext("https://softlaunch.net/", "soft_launch")}<br>
                        &nbsp;&nbsp;- Co-design and lead a creative technology education program in partnership with InterAccess; design and teach intensives on TouchDesigner ('Reactive Space') and creative coding ('Internet Canvas')<br>
                    <br>
                    <strong>2020-2024</strong> - Product Manager, Nanoleaf (plus 2018-2019 internship)<br>
                        &nbsp;&nbsp;- Managed technical partnerships and software integrations with Apple (Thread & Matter), Google (Matter), Amazon (Matter), Samsung (Matter), Razer (Razer Chroma), and Corsair (iCUE)<br>
                        &nbsp;&nbsp;- Led certification and technical integration for the Matter smart-home protocol, successfully certifying the first Matter-compliant smart lights; developed working expertise in Thread mesh networking<br>
                        &nbsp;&nbsp;- Creator and lead developer of Nanoleaf Screen Mirror, a real-time screen-to-light rendering feature shipped across the product line and central to the flagship Nanoleaf 4D hardware product<br>
                        &nbsp;&nbsp;- Built the Nanoleaf Orchestrator music visualizer; developed cross-functional technical documentation for engineering, marketing, and support teams
                </p>
            </div>

            <div class="cv-section">
                <h2>Education</h2>
                <p class="main-paragraph">
                    <strong>2015-2020</strong> - BASc, Engineering Science (Aerospace Specialization), University of Toronto
                </p>
            </div>
`;
exports.default = (props)=>(0, _litHtml.html)`
    <div class="about-container">
        <div class="about-bio">
            <h1 class="about-header">Benjamin Lappalainen</h1>
            <h3 class="about-header">(he/him)</h3>
            <div class="profile-image-container">
                <img src="${0, _20250727BlWebpDefault.default}" alt="Benjamin Lappalainen" class="profile-image" onload="this.classList.add('loaded')">
            </div>
            <p class="main-paragraph">
                <br>
                Benjamin Lappalainen is a Toronto-based creative technologist, artist, and educator whose practice spans interactive installations, kinetic sculpture, and creative code. He interrogates and misuses technologies like computer vision and machine learning to expose their limits, breaking points, and creative potential. Through exhibitions, workshops, and mentorship programs at institutions including InterAccess, OCAD University, and the Centre for Art Tapes, his educational practice bridges technical skill-building with experimental arts practices.
                <br><br>
                As XR Development Lead with UKAI Projects, Benjamin collaborates with artists and organizations to execute research, exhibitions, immersive and interactive installations, publishing, and workshops. UKAI Projects imagines and produces “culture for what’s coming”. Most recently, the organization worked with the Accton Arts Foundation in Hsinchu, Taiwan for research into arts policy, delivering workshops and immersive experiences, and activating a city block with the first international iteration of Goblin Market, a collectively imagined alternative arts marketplace.
                <br><br>
                Benjamin holds a Bachelor of Applied Science in Engineering Science from the University of Toronto. His current research focuses on developing software and hardware for interactive media, working across tools like p5.js, TouchDesigner, and custom electronics to create accessible resources that support artist communities in realizing technically ambitious projects.
                <br><br>
            </p>

            <h2>Artist Statement</h2>
            <p class="main-paragraph">
            	As an artist and creative technologist, I feel a deep-rooted sense of responsibility to share my knowledge of complex systems and concepts in an accessible and practical manner that empowers my audience to make informed decisions about the technology they choose to use and the systems they choose to participate in. I see my work as both art and education, demonstrating the capabilities and inner workings of technologies that are often dressed up in minimal, clean interfaces, or only running behind the scenes.
                <br><br>
                This approach has deep roots in art history. Conceptual and instruction-based art from the 1900s has had a large influence on my artistic process. Artists such as Vera Molnár (1924–2023) and Sol LeWitt (1928–2007) created paintings and wall drawings based on rules and sets of instructions, even before digital computers were available. Creating art with code is hardly any different: the work of the "code artist" is to come up with an algorithm (a set of instructions) for the creative vision which another entity (the computer) then executes.
                <br><br>
                Science fiction media and video games play a large role in the themes, aesthetic direction, and interaction mechanisms that I implement throughout my work. While I'm a big fan of dystopian sci-fi and cyberpunk aesthetics, I also hope to demonstrate the flip side: visions of brighter futures, healthier relationships between humans and computers, and the subversive and unintended use cases of emerging technologies that provide genuine benefit to people and communities rather than a corporation's bottom line.
                <br><br>
                The choice of how people physically engage with my work is just as intentional. I believe that learning through play is a fun and effective yet underutilized avenue for teaching. Using the movement of the physical body to understand how a system behaves creates a sense of tangible investigation regardless of participant background, bringing an innate degree of understanding which transcends language and technical jargon.
                <br><br>
            </p>
        </div>
        <div class="about-cv">
            ${cvToggle(props && props.resume)}
            ${props && props.resume ? technicalResume() : artistCv()}
        </div>
    </div>
`;

},{"lit-html":"l15as","url:../../assets/about/2025-07-27_BL.webp":"4HYVh","url:../../../public/publications/ecaade2020_393.pdf":"14pVN","url:../../../public/cv/Benjamin Lappalainen Artist CV - 2026-10.pdf":"boK3J","url:../../../public/cv/Benjamin Lappalainen Technical Resume - 2026-10.pdf":"5Qegk","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4HYVh":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("2025-07-27_BL.3bd63126.webp") + "?" + Date.now();

},{}],"14pVN":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("ecaade2020_393.2e54ac99.pdf") + "?" + Date.now();

},{}],"boK3J":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Benjamin Lappalainen Artist CV - 2026-10.015b6c4d.pdf") + "?" + Date.now();

},{}],"5Qegk":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Benjamin Lappalainen Technical Resume - 2026-10.5f000447.pdf") + "?" + Date.now();

},{}],"kssrj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _lit = require("lit");
exports.default = (props)=>(0, _lit.html)`
    <!-- p5-element is a custom element that allows us to easily put a p5 sketch as the background of this page -->
    <!-- The custom element itself handles choosing the sketch based on the page property provided below -->
    <p5-element id="bg" sketch="installations" .options=${props || {}}></p5-element>
`;

},{"lit":"hh14x","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2OQe5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _litHtml = require("lit-html");
var _photoCollections = require("./photo-collections");
exports.default = (props)=>{
    const options = {};
    if (props && props.collection) options.collection = props.collection;
    if (props && props.skipAnimations) options.skipAnimations = props.skipAnimations;
    // Determine if we're in gallery mode
    const isGalleryMode = props?.collection;
    const collection = isGalleryMode ? (0, _photoCollections.findCollectionBySlug)(props.collection) : null;
    return (0, _litHtml.html)`
        <!-- p5-element handles decorations, title, and lightbox -->
        <p5-element id="bg" sketch="photo" .options=${options} .skipAnimations=${props?.skipAnimations}></p5-element>
        
        ${isGalleryMode && collection ? (0, _litHtml.html)`
            <!-- HTML-native gallery grid -->
            <div class="photo-gallery-container">
                <div class="photo-gallery-grid">
                    ${collection.images.map((imagePath, index)=>(0, _litHtml.html)`
                        <div class="photo-gallery-item" data-index="${index}">
                            <img 
                                src="${imagePath}" 
                                alt="${collection.name} ${index + 1}"
                                class="photo-gallery-image"
                                data-lightbox-index="${index}"
                                loading="lazy"
                                onload="this.classList.add('loaded');"
                            />
                        </div>
                    `)}
                </div>
            </div>
        ` : ''}
    `;
};

},{"lit-html":"l15as","./photo-collections":"8dWWn","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jN8Xd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _litHtml = require("lit-html");
exports.default = (props)=>(0, _litHtml.html)`
    <div class="horizontal-center vertical-center">
        <h1 class="text-center">oops<br />How did you get here?</h1>
    </div>
    <!-- p5-element is a custom element that allows us to easily put a p5 sketch as the background of this page -->
    <!-- The custom element itself handles choosing the sketch based on the page property provided below -->
    <p5-element id="bg" sketch="oops"></p5-element>
`;

},{"lit-html":"l15as","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["iHisz","2R06K"], "2R06K", "parcelRequire905d", {}, "./", "/")

//# sourceMappingURL=blap64.0f77c784.js.map
