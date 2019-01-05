// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"css/game.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"C:\\Users\\Damian C-D\\code\\streetfighter\\images\\dragon place.gif":[["dragon place.17ad18a5.gif","images/dragon place.gif"],"images/dragon place.gif"],"./..\\images\\akuma\\Akuma_the_demon.png":[["Akuma_the_demon.a1c3f62a.png","images/akuma/Akuma_the_demon.png"],"images/akuma/Akuma_the_demon.png"],"./..\\images\\balrog\\balrog_1270552.png":[["balrog_1270552.aea8ad62.png","images/balrog/balrog_1270552.png"],"images/balrog/balrog_1270552.png"],"./..\\images\\bison\\fighting-games-png-2.png":[["fighting-games-png-2.45ba4ac0.png","images/bison/fighting-games-png-2.png"],"images/bison/fighting-games-png-2.png"],"./..\\images\\blanka\\Blanka.png":[["Blanka.8bac4acb.png","images/blanka/Blanka.png"],"images/blanka/Blanka.png"],"./..\\images\\cammy\\kisspng-street-fighter-x-tekken-street-fighter-ii-the-wor-cammy-png-street-fighter-x-tekken-fighting-gam-5b8d68e7709d44.7156933815359940874613.png":[["kisspng-street-fighter-x-tekken-street-fighter-ii-the-wor-cammy-png-street-fighter-x-tekken-fighting-gam-5b8d68e7709d44.7156933815359940874613.1e40936a.png","images/cammy/kisspng-street-fighter-x-tekken-street-fighter-ii-the-wor-cammy-png-street-fighter-x-tekken-fighting-gam-5b8d68e7709d44.7156933815359940874613.png"],"images/cammy/kisspng-street-fighter-x-tekken-street-fighter-ii-the-wor-cammy-png-street-fighter-x-tekken-fighting-gam-5b8d68e7709d44.7156933815359940874613.png"],"./..\\images\\chun li\\Street_fighter_5_chun_li_by_hes6789-d9s80v8.png":[["Street_fighter_5_chun_li_by_hes6789-d9s80v8.979fa2f5.png","images/chun li/Street_fighter_5_chun_li_by_hes6789-d9s80v8.png"],"images/chun li/Street_fighter_5_chun_li_by_hes6789-d9s80v8.png"],"./..\\images\\dhalism\\Street-fighter-5-characters-dhalsim-section-one-two-column-02-ps4-eu-09feb16.png":[["Street-fighter-5-characters-dhalsim-section-one-two-column-02-ps4-eu-09feb16.b8f2d89a.png","images/dhalism/Street-fighter-5-characters-dhalsim-section-one-two-column-02-ps4-eu-09feb16.png"],"images/dhalism/Street-fighter-5-characters-dhalsim-section-one-two-column-02-ps4-eu-09feb16.png"],"./..\\images\\fei long\\kisspng-street-fighter-iv-fei-long-ryu-street-fighter-ii-fei-long-5b2780867c7413.7567698315293154625098.png":[["kisspng-street-fighter-iv-fei-long-ryu-street-fighter-ii-fei-long-5b2780867c7413.7567698315293154625098.f5cb5fac.png","images/fei long/kisspng-street-fighter-iv-fei-long-ryu-street-fighter-ii-fei-long-5b2780867c7413.7567698315293154625098.png"],"images/fei long/kisspng-street-fighter-iv-fei-long-ryu-street-fighter-ii-fei-long-5b2780867c7413.7567698315293154625098.png"],"./..\\images\\guile\\Guile.png":[["Guile.8d837fe7.png","images/guile/Guile.png"],"images/guile/Guile.png"],"./..\\images\\honda\\kisspng-street-fighter-ii-the-world-warrior-super-street-sumo-5ab95bac702fa6.6091136015220970684595.png":[["kisspng-street-fighter-ii-the-world-warrior-super-street-sumo-5ab95bac702fa6.6091136015220970684595.6db958e7.png","images/honda/kisspng-street-fighter-ii-the-world-warrior-super-street-sumo-5ab95bac702fa6.6091136015220970684595.png"],"images/honda/kisspng-street-fighter-ii-the-world-warrior-super-street-sumo-5ab95bac702fa6.6091136015220970684595.png"],"./..\\images\\ibuki\\ibuki-street-fighter-5-png-2.png":[["ibuki-street-fighter-5-png-2.1b71c14c.png","images/ibuki/ibuki-street-fighter-5-png-2.png"],"images/ibuki/ibuki-street-fighter-5-png-2.png"],"./..\\images\\ken\\Street_Fighter_-_Ken_Masters_as_he_appears_in_Street_Fighter_III_Third_Strike_Online_Edition.png":[["Street_Fighter_-_Ken_Masters_as_he_appears_in_Street_Fighter_III_Third_Strike_Online_Edition.d8b93827.png","images/ken/Street_Fighter_-_Ken_Masters_as_he_appears_in_Street_Fighter_III_Third_Strike_Online_Edition.png"],"images/ken/Street_Fighter_-_Ken_Masters_as_he_appears_in_Street_Fighter_III_Third_Strike_Online_Edition.png"],"./..\\images\\makoto\\kisspng-street-fighter-iii-3rd-strike-super-street-fighte-cartoon-karate-kid-5a70ca9b754a75.9482296715173413394804.png":[["kisspng-street-fighter-iii-3rd-strike-super-street-fighte-cartoon-karate-kid-5a70ca9b754a75.9482296715173413394804.3361c9f6.png","images/makoto/kisspng-street-fighter-iii-3rd-strike-super-street-fighte-cartoon-karate-kid-5a70ca9b754a75.9482296715173413394804.png"],"images/makoto/kisspng-street-fighter-iii-3rd-strike-super-street-fighte-cartoon-karate-kid-5a70ca9b754a75.9482296715173413394804.png"],"./..\\images\\ryu\\ryu-png-7.png":[["ryu-png-7.2bd16ea2.png","images/ryu/ryu-png-7.png"],"images/ryu/ryu-png-7.png"],"./..\\images\\sagat\\sagat_by_androsm-db1jq8x.png":[["sagat_by_androsm-db1jq8x.ca8564e4.png","images/sagat/sagat_by_androsm-db1jq8x.png"],"images/sagat/sagat_by_androsm-db1jq8x.png"],"./..\\images\\t. hawk\\T._Hawk.png":[["T._Hawk.e2147dd8.png","images/t. hawk/T._Hawk.png"],"images/t. hawk/T._Hawk.png"],"./..\\images\\zangief\\526672a2d442b85e1d222f0194ad75e5.png":[["526672a2d442b85e1d222f0194ad75e5.4c268a78.png","images/zangief/526672a2d442b85e1d222f0194ad75e5.png"],"images/zangief/526672a2d442b85e1d222f0194ad75e5.png"],"./..\\images\\ex\\Skullomania-Fighting-EX-Layer-Render.png":[["Skullomania-Fighting-EX-Layer-Render.e31388e5.png","images/ex/Skullomania-Fighting-EX-Layer-Render.png"],"images/ex/Skullomania-Fighting-EX-Layer-Render.png"],"./..\\images\\alex\\622d8003aaf55cf2da0f69c59aaa4e5f.png":[["622d8003aaf55cf2da0f69c59aaa4e5f.ad2bc21a.png","images/alex/622d8003aaf55cf2da0f69c59aaa4e5f.png"],"images/alex/622d8003aaf55cf2da0f69c59aaa4e5f.png"],"./..\\images\\vega\\Vega_SFV.png":[["Vega_SFV.7405fbb8.png","images/vega/Vega_SFV.png"],"images/vega/Vega_SFV.png"],"./..\\images\\deejay\\street_fighter_30th_anniversary_tribute___deejay_by_diegogomezart-db3duvn.png":[["street_fighter_30th_anniversary_tribute___deejay_by_diegogomezart-db3duvn.4f53c500.png","images/deejay/street_fighter_30th_anniversary_tribute___deejay_by_diegogomezart-db3duvn.png"],"images/deejay/street_fighter_30th_anniversary_tribute___deejay_by_diegogomezart-db3duvn.png"],"./..\\images\\Dudley\\marvel_vs__capcom_3__dudley_by_kingoffiction-db8eby9.png":[["marvel_vs__capcom_3__dudley_by_kingoffiction-db8eby9.067ca8d3.png","images/Dudley/marvel_vs__capcom_3__dudley_by_kingoffiction-db8eby9.png"],"images/Dudley/marvel_vs__capcom_3__dudley_by_kingoffiction-db8eby9.png"],"./..\\images\\yang\\street_fighter_iii_3rd_strike_yang_by_hes6789-d8zgjhj.png":[["street_fighter_iii_3rd_strike_yang_by_hes6789-d8zgjhj.58d11ebd.png","images/yang/street_fighter_iii_3rd_strike_yang_by_hes6789-d8zgjhj.png"],"images/yang/street_fighter_iii_3rd_strike_yang_by_hes6789-d8zgjhj.png"],"./..\\images\\yun\\e4292abf4cb15e9060b5647e31561a53.png":[["e4292abf4cb15e9060b5647e31561a53.31e6a613.png","images/yun/e4292abf4cb15e9060b5647e31561a53.png"],"images/yun/e4292abf4cb15e9060b5647e31561a53.png"],"./..\\images\\guy\\27_guy11.png":[["27_guy11.cdeb3435.png","images/guy/27_guy11.png"],"images/guy/27_guy11.png"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62969" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
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

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

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

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)