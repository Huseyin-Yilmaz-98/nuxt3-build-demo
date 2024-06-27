import { $ as $fetch, l as createMatcherFromExport, m as createRouter, t as toRouteMatcher, n as defu, h as createError, o as sanitizeStatusCode, p as hasProtocol, q as isScriptProtocol, r as joinURL, v as parseQuery, w as withQuery, x as withTrailingSlash, y as withoutTrailingSlash, z as createHooks } from '../runtime.mjs';
import * as __WEBPACK_EXTERNAL_MODULE_unhead__ from 'unhead';
import * as require$$7 from 'url';
import * as __WEBPACK_EXTERNAL_MODULE_vue__ from 'vue';
import * as __WEBPACK_EXTERNAL_MODULE_vue_server_renderer_f488d186__ from 'vue/server-renderer';
import * as __WEBPACK_EXTERNAL_MODULE__unhead_shared_b0013bec__ from '@unhead/shared';
import { b as baseURL, a as buildAssetsURL } from '../routes/renderer.mjs';
import * as __WEBPACK_EXTERNAL_MODULE_vue_router_6389ad97__ from 'vue-router';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

function createContext$1(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers$1.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers$1.delete(onLeave);
      }
    }
  };
}
function createNamespace$1(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext$1({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey$1 = "__unctx__";
const defaultNamespace = _globalThis$1[globalKey$1] || (_globalThis$1[globalKey$1] = createNamespace$1());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey$1 = "__unctx_async_handlers__";
const asyncHandlers$1 = _globalThis$1[asyncHandlersKey$1] || (_globalThis$1[asyncHandlersKey$1] = /* @__PURE__ */ new Set());

/******/ var __webpack_modules__ = ({

/***/ 690:
/***/ ((__unused_webpack_module, exports) => {
// runtime helper for setting properties on components
// in a tree-shakable way
exports.A = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 447:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
}; 
module.exports = x({ ["createError"]: () => (createError), ["sanitizeStatusCode"]: () => (sanitizeStatusCode) });

/***/ }),

/***/ 954:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
}; 
module.exports = x({ ["hasProtocol"]: () => (hasProtocol), ["isScriptProtocol"]: () => (isScriptProtocol), ["joinURL"]: () => (joinURL), ["parseQuery"]: () => (parseQuery), ["withQuery"]: () => (withQuery), ["withTrailingSlash"]: () => (withTrailingSlash), ["withoutTrailingSlash"]: () => (withoutTrailingSlash) });

/***/ }),

/***/ 687:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
}; 
module.exports = x({ ["CapoPlugin"]: () => (__WEBPACK_EXTERNAL_MODULE_unhead__.CapoPlugin), ["getActiveHead"]: () => (__WEBPACK_EXTERNAL_MODULE_unhead__.getActiveHead) });

/***/ }),

/***/ 887:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
}; 
module.exports = x({ ["URL"]: () => (require$$7.URL) });

/***/ }),

/***/ 286:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
}; 
module.exports = x({ ["Fragment"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.Fragment), ["Suspense"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.Suspense), ["Transition"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.Transition), ["computed"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.computed), ["createApp"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.createApp), ["createTextVNode"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.createTextVNode), ["createVNode"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.createVNode), ["defineAsyncComponent"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.defineAsyncComponent), ["defineComponent"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.defineComponent), ["effectScope"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.effectScope), ["getCurrentInstance"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.getCurrentInstance), ["getCurrentScope"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.getCurrentScope), ["h"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.h), ["hasInjectionContext"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.hasInjectionContext), ["inject"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.inject), ["isReactive"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.isReactive), ["isReadonly"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.isReadonly), ["isRef"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.isRef), ["isShallow"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.isShallow), ["mergeProps"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.mergeProps), ["nextTick"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.nextTick), ["onErrorCaptured"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.onErrorCaptured), ["onServerPrefetch"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.onServerPrefetch), ["provide"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.provide), ["reactive"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.reactive), ["ref"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.ref), ["resolveComponent"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.resolveComponent), ["resolveDynamicComponent"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.resolveDynamicComponent), ["shallowReactive"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.shallowReactive), ["shallowRef"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.shallowRef), ["toDisplayString"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.toDisplayString), ["toRaw"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.toRaw), ["toRef"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.toRef), ["unref"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.unref), ["version"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.version), ["watch"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.watch), ["watchEffect"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.watchEffect), ["withCtx"]: () => (__WEBPACK_EXTERNAL_MODULE_vue__.withCtx) });

/***/ }),

/***/ 16:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
}; 
module.exports = x({ ["ssrInterpolate"]: () => (__WEBPACK_EXTERNAL_MODULE_vue_server_renderer_f488d186__.ssrInterpolate), ["ssrRenderAttrs"]: () => (__WEBPACK_EXTERNAL_MODULE_vue_server_renderer_f488d186__.ssrRenderAttrs), ["ssrRenderComponent"]: () => (__WEBPACK_EXTERNAL_MODULE_vue_server_renderer_f488d186__.ssrRenderComponent), ["ssrRenderSuspense"]: () => (__WEBPACK_EXTERNAL_MODULE_vue_server_renderer_f488d186__.ssrRenderSuspense), ["ssrRenderVNode"]: () => (__WEBPACK_EXTERNAL_MODULE_vue_server_renderer_f488d186__.ssrRenderVNode) });

/***/ }),

/***/ 459:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QU: () => (/* binding */ componentIslands),
/* harmony export */   R0: () => (/* binding */ appId),
/* harmony export */   Xh: () => (/* binding */ appManifest),
/* harmony export */   gE: () => (/* binding */ appKeepalive),
/* harmony export */   qj: () => (/* binding */ nuxtLinkDefaults),
/* harmony export */   y4: () => (/* binding */ appPageTransition)
/* harmony export */ });
const appPageTransition = false;
const appKeepalive = false;
const componentIslands = false;
const appManifest = false;
const nuxtLinkDefaults = { "prefetchedClass": "prefetched-link", "componentName": "NuxtLink" };
const appId = "nuxt-app";


/***/ }),

/***/ 216:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  i: () => (/* binding */ injectHead),
  r: () => (/* binding */ resolveUnrefHeadInput),
  s: () => (/* binding */ setHeadInjectionHandler)
});

// UNUSED EXPORTS: V, a, c, h

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(286);
// EXTERNAL MODULE: external "unhead"
var external_unhead_ = __webpack_require__(687);
var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
}; 
const shared_namespaceObject = x({ ["defineHeadPlugin"]: () => (__WEBPACK_EXTERNAL_MODULE__unhead_shared_b0013bec__.defineHeadPlugin) });



external_vue_.version.startsWith("3");
function resolveUnref(r) {
  return typeof r === "function" ? r() : (0, external_vue_.unref)(r);
}
function resolveUnrefHeadInput(ref, lastKey = "") {
  if (ref instanceof Promise)
    return ref;
  const root = resolveUnref(ref);
  if (!ref || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, (0, external_vue_.unref)(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}
(0, shared_namespaceObject.defineHeadPlugin)({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry of ctx.entries)
        entry.resolvedInput = resolveUnrefHeadInput(entry.input);
    }
  }
});
const headSymbol = "usehead";
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global[globalKey] = handler;
}
function injectHead() {
  if (globalKey in _global) {
    return _global[globalKey]();
  }
  const head = (0, external_vue_.inject)(headSymbol);
  return head || (0, external_unhead_.getActiveHead)();
}



/***/ }),

/***/ 900:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ PageRouteSymbol),
/* harmony export */   M: () => (/* binding */ LayoutMetaSymbol)
/* harmony export */ });
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");


/***/ }),

/***/ 728:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $5: () => (/* binding */ createError),
/* harmony export */   Qg: () => (/* binding */ showError),
/* harmony export */   YS: () => (/* binding */ isNuxtError),
/* harmony export */   qz: () => (/* binding */ useError)
/* harmony export */ });
/* unused harmony exports NUXT_ERROR_SIGNATURE, clearError */
/* harmony import */ var h3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(447);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(286);
/* harmony import */ var _nuxt_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(712);
/* harmony import */ __webpack_require__(193);
/* harmony import */ __webpack_require__(459);





const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => (0, vue__WEBPACK_IMPORTED_MODULE_1__.toRef)((0, _nuxt_js__WEBPACK_IMPORTED_MODULE_2__/* .useNuxtApp */ .g5)().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = (0,_nuxt_js__WEBPACK_IMPORTED_MODULE_2__/* .useNuxtApp */ .g5)();
    const error2 = useError();
    if (false) ;
    error2.value = error2.value || nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = (0, h3__WEBPACK_IMPORTED_MODULE_0__.createError)(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};


/***/ }),

/***/ 193:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KA: () => (/* binding */ useRouter),
/* harmony export */   VJ: () => (/* binding */ navigateTo),
/* harmony export */   _y: () => (/* binding */ defineNuxtRouteMiddleware),
/* harmony export */   lq: () => (/* binding */ useRoute)
/* harmony export */ });
/* unused harmony exports onBeforeRouteLeave, onBeforeRouteUpdate, addRouteMiddleware, abortNavigation, setPageLayout */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(286);
/* harmony import */ var h3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(447);
/* harmony import */ var ufo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(954);
/* harmony import */ var _nuxt_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(712);
/* harmony import */ var _components_injections_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(900);
/* harmony import */ __webpack_require__(728);
/* provided dependency */ var URL = __webpack_require__(887)["URL"];






const useRouter = () => {
  return (0, _nuxt_js__WEBPACK_IMPORTED_MODULE_3__/* .useNuxtApp */ .g5)()?.$router;
};
const useRoute = () => {
  if ((0, vue__WEBPACK_IMPORTED_MODULE_0__.hasInjectionContext)()) {
    return (0, vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_components_injections_js__WEBPACK_IMPORTED_MODULE_4__/* .PageRouteSymbol */ .D, (0, _nuxt_js__WEBPACK_IMPORTED_MODULE_3__/* .useNuxtApp */ .g5)()._route);
  }
  return (0, _nuxt_js__WEBPACK_IMPORTED_MODULE_3__/* .useNuxtApp */ .g5)()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if ((0,_nuxt_js__WEBPACK_IMPORTED_MODULE_3__/* .useNuxtApp */ .g5)()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : (0, ufo__WEBPACK_IMPORTED_MODULE_2__.withQuery)(to.path || "/", to.query || {}) + (to.hash || "");
  const isExternal = options?.external || (0, ufo__WEBPACK_IMPORTED_MODULE_2__.hasProtocol)(toPath, { acceptRelative: true });
  if (isExternal) {
    if (!options?.external) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath,  "http://localhost");
    if (protocol && (0, ufo__WEBPACK_IMPORTED_MODULE_2__.isScriptProtocol)(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = (0, _nuxt_js__WEBPACK_IMPORTED_MODULE_3__/* .useNuxtApp */ .g5)();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : (0, ufo__WEBPACK_IMPORTED_MODULE_2__.joinURL)((0, _nuxt_js__WEBPACK_IMPORTED_MODULE_3__/* .useRuntimeConfig */ .yp)().app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        nuxtApp.ssrContext._renderResponse = {
          statusCode: (0, h3__WEBPACK_IMPORTED_MODULE_1__.sanitizeStatusCode)(options?.redirectCode || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodeURI(location2) }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options?.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return options?.replace ? router.replace(to) : router.push(to);
};


/***/ }),

/***/ 712:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  HF: () => (/* binding */ applyPlugins),
  fs: () => (/* binding */ createNuxtApp),
  GQ: () => (/* binding */ defineNuxtPlugin),
  g5: () => (/* binding */ useNuxtApp),
  yp: () => (/* binding */ useRuntimeConfig)
});

// UNUSED EXPORTS: NuxtPluginIndicator, applyPlugin, callWithNuxt, defineAppConfig, definePayloadPlugin, isNuxtPlugin, registerPluginHooks, tryUseNuxtApp

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(286);
var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
}; 
const external_hookable_namespaceObject = x({ ["createHooks"]: () => (createHooks) });
var external_unctx_x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
}; 
const external_unctx_namespaceObject = external_unctx_x({ ["getContext"]: () => (getContext) });
// EXTERNAL MODULE: ./.nuxt/nuxt.config.mjs
var nuxt_config = __webpack_require__(459);




function getNuxtAppCtx(appName = nuxt_config/* appId */.R0 || "nuxt-app") {
  return (0, external_unctx_namespaceObject.getContext)(appName, {
    asyncContext:  false 
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _name: nuxt_config/* appId */.R0 || "nuxt-app",
    _scope: (0, external_vue_.effectScope)(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.12.2";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: (0, external_vue_.shallowReactive)({
      data: (0, external_vue_.shallowReactive)({}),
      state: (0, external_vue_.reactive)({}),
      once: /* @__PURE__ */ new Set(),
      _errors: (0, external_vue_.shallowReactive)({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !(0, external_vue_.getCurrentScope)()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: (0, external_vue_.shallowReactive)({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  nuxtApp.hooks = (0, external_hookable_namespaceObject.createHooks)();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
      nuxtApp.ssrContext._payloadReducers = {};
      nuxtApp.payload.path = nuxtApp.ssrContext.url;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig =  options.ssrContext.runtimeConfig ;
  nuxtApp.provide("config",  runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin) {
  if (plugin.hooks) {
    nuxtApp.hooks.addHooks(plugin.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin === "function") {
    const { provide } = await nuxtApp.runWithContext(() => plugin(nuxtApp)) || {};
    if (provide && typeof provide === "object") {
      for (const key in provide) {
        nuxtApp.provide(key, provide[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins) {
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin) {
    const unresolvedPluginsForThisPlugin = plugin.dependsOn?.filter((name) => plugins.some((p) => p._name === name) && !resolvedPlugins.includes(name)) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin).then(async () => {
        if (plugin._name) {
          resolvedPlugins.push(plugin._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin._name)) {
              dependsOn.delete(plugin._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin of plugins) {
    if ( nuxtApp.ssrContext?.islandContext && plugin.env?.islands === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin);
  }
  for (const plugin of plugins) {
    if ( nuxtApp.ssrContext?.islandContext && plugin.env?.islands === false) {
      continue;
    }
    await executePlugin(plugin);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin) {
  if (typeof plugin === "function") {
    return plugin;
  }
  const _name = plugin._name || plugin.name;
  delete plugin.name;
  return Object.assign(plugin.setup || (() => {
  }), plugin, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._name);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(appName) {
  let nuxtAppInstance;
  if ((0, external_vue_.hasInjectionContext)()) {
    nuxtAppInstance = (0, external_vue_.getCurrentInstance)()?.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || getNuxtAppCtx(appName).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(appName) {
  const nuxtAppInstance = tryUseNuxtApp(appName);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		id: moduleId,
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/******/ // expose the modules object (__webpack_modules__)
/******/ __webpack_require__.m = __webpack_modules__;
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/ensure chunk */
/******/ (() => {
/******/ 	__webpack_require__.f = {};
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = (chunkId) => {
/******/ 		return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 			__webpack_require__.f[key](chunkId, promises);
/******/ 			return promises;
/******/ 		}, []));
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/get javascript chunk filename */
/******/ (() => {
/******/ 	// This function allow to reference async chunks
/******/ 	__webpack_require__.u = (chunkId) => {
/******/ 		// return url for filenames based on template
/******/ 		return "" + chunkId + ".mjs";
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/get mini-css chunk filename */
/******/ (() => {
/******/ 	// This function allow to reference async chunks
/******/ 	__webpack_require__.miniCssF = (chunkId) => {
/******/ 		// return url for filenames based on template
/******/ 		return undefined;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/publicPath */
/******/ (() => {
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/ })();
/******/ 
/******/ /* webpack/runtime/import chunk loading */
/******/ (() => {
/******/ 	// no baseURI
/******/ 	
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// [resolve, Promise] = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		524: 0
/******/ 	};
/******/ 	
/******/ 	var installChunk = (data) => {
/******/ 		var {ids, modules, runtime} = data;
/******/ 		// add "modules" to the modules object,
/******/ 		// then flag all "ids" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0;
/******/ 		for(moduleId in modules) {
/******/ 			if(__webpack_require__.o(modules, moduleId)) {
/******/ 				__webpack_require__.m[moduleId] = modules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(runtime) runtime(__webpack_require__);
/******/ 		for(;i < ids.length; i++) {
/******/ 			chunkId = ids[i];
/******/ 			if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				installedChunks[chunkId][0]();
/******/ 			}
/******/ 			installedChunks[ids[i]] = 0;
/******/ 		}
/******/ 	
/******/ 	};
/******/ 	
/******/ 	__webpack_require__.f.j = (chunkId, promises) => {
/******/ 			// import() chunk loading for javascript
/******/ 			var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 			if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 	
/******/ 				// a Promise means "currently loading".
/******/ 				if(installedChunkData) {
/******/ 					promises.push(installedChunkData[1]);
/******/ 				} else {
/******/ 					{ // all chunks have JS
/******/ 						// setup Promise in chunk cache
/******/ 						var promise = import('../virtual/_dynamic-require.mjs').then(r => r.default || r).then(dynamicRequire => dynamicRequire( __webpack_require__.u(chunkId))).then(installChunk, (e) => {
/******/ 							if(installedChunks[chunkId] !== 0) installedChunks[chunkId] = undefined;
/******/ 							throw e;
/******/ 						});
/******/ 						var promise = Promise.race([promise, new Promise((resolve) => (installedChunkData = installedChunks[chunkId] = [resolve]))]);
/******/ 						promises.push(installedChunkData[1] = promise);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 	};
/******/ 	
/******/ 	// no prefetching
/******/ 	
/******/ 	// no preloaded
/******/ 	
/******/ 	// no external install chunk
/******/ 	
/******/ 	// no on chunks loaded
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ app_entry)
});
var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
}; 
const paths_namespaceObject = x({ ["baseURL"]: () => (baseURL), ["buildAssetsURL"]: () => (buildAssetsURL) });
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(286);
var external_ofetch_x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
}; 
const external_ofetch_namespaceObject = external_ofetch_x({ ["$fetch"]: () => ($fetch) });


if (!globalThis.$fetch) {
  globalThis.$fetch = external_ofetch_namespaceObject.$fetch.create({
    baseURL: (0, paths_namespaceObject.baseURL)()
  });
}

// EXTERNAL MODULE: ./node_modules/nuxt/dist/app/nuxt.js + 2 modules
var app_nuxt = __webpack_require__(712);
// EXTERNAL MODULE: ./node_modules/nuxt/dist/app/composables/error.js
var composables_error = __webpack_require__(728);
// EXTERNAL MODULE: ./node_modules/@unhead/vue/dist/shared/vue.cf295fb1.mjs + 1 modules
var vue_cf295fb1 = __webpack_require__(216);
var dom_x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
}; 
dom_x({  });
// EXTERNAL MODULE: external "unhead"
var external_unhead_ = __webpack_require__(687);

/* harmony default export */ ( [(0, external_unhead_.CapoPlugin)({ track: true })] );




/* harmony default export */ const unhead = ((0, app_nuxt/* defineNuxtPlugin */.GQ)({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head =  nuxtApp.ssrContext.head ;
    (0, vue_cf295fb1.s)(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => (0, app_nuxt/* useNuxtApp */.g5)().vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
}));
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
_globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}
var external_vue_router_x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
}; 
const external_vue_router_namespaceObject = external_vue_router_x({ ["RouterView"]: () => (__WEBPACK_EXTERNAL_MODULE_vue_router_6389ad97__.RouterView), ["START_LOCATION"]: () => (__WEBPACK_EXTERNAL_MODULE_vue_router_6389ad97__.START_LOCATION), ["createMemoryHistory"]: () => (__WEBPACK_EXTERNAL_MODULE_vue_router_6389ad97__.createMemoryHistory), ["createRouter"]: () => (__WEBPACK_EXTERNAL_MODULE_vue_router_6389ad97__.createRouter) });


// EXTERNAL MODULE: external "h3"
var external_h3_ = __webpack_require__(447);
// EXTERNAL MODULE: external "ufo"
__webpack_require__(954);

const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => route.params[r.slice(1)]?.toString() || "");
};
const utils_generateRouteKey = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => m.components?.default === routeProps.Component.type);
  const source = override ?? matchedRoute?.meta.key ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () =>  children };
};
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
var external_radix3_x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
}; 
const external_radix3_namespaceObject = external_radix3_x({ ["createMatcherFromExport"]: () => (createMatcherFromExport), ["createRouter"]: () => (createRouter), ["toRouteMatcher"]: () => (toRouteMatcher) });
var external_defu_x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
}; 
const external_defu_namespaceObject = external_defu_x({ ["defu"]: () => (defu) });
// EXTERNAL MODULE: ./.nuxt/nuxt.config.mjs
var nuxt_config = __webpack_require__(459);
async function manifest_getRouteRules(url) {
  {
    const _routeRulesMatcher = (0, external_radix3_namespaceObject.toRouteMatcher)(
      (0, external_radix3_namespaceObject.createRouter)({ routes: (0, app_nuxt/* useRuntimeConfig */.yp)().nitro.routeRules })
    );
    return (0, external_defu_namespaceObject.defu)({}, ..._routeRulesMatcher.matchAll(url).reverse());
  }
}

// EXTERNAL MODULE: ./node_modules/nuxt/dist/app/composables/router.js
var composables_router = __webpack_require__(193);
/* harmony default export */ const _nuxt_routes = ([
  {
    name: "a",
    path: "/a",
    component: () => __webpack_require__.e(/* import() */ 366).then(__webpack_require__.bind(__webpack_require__, 366)).then((m) => m.default || m)
  },
  {
    name: "b",
    path: "/b",
    component: () => __webpack_require__.e(/* import() */ 186).then(__webpack_require__.bind(__webpack_require__, 186)).then((m) => m.default || m)
  }
]);
var shared_x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
}; 
shared_x({  });



const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => props ? (0, external_vue_.h)(component, props, slots) : slots.default?.() };
};
function components_utils_generateRouteKey(route) {
  const source = route?.meta.key ?? route.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => route.params[r.slice(1)]?.toString() || "");
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === external_vue_router_namespaceObject.START_LOCATION) {
    return false;
  }
  if (components_utils_generateRouteKey(to) !== components_utils_generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => comp.components && comp.components.default === from.matched[index]?.components?.default
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}




/* harmony default export */ const router_options = ({
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = (0, app_nuxt/* useNuxtApp */.g5)();
    const behavior = (0, composables_router/* useRouter */.KA)().options?.scrollBehaviorType ?? "auto";
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
      return false;
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? nuxt_config/* appPageTransition */.y4);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await new Promise((resolve2) => setTimeout(resolve2, 0));
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
        }
        resolve(position);
      });
    });
  }
});
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = document.querySelector(selector);
    if (elem) {
      return Number.parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}

const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
/* harmony default export */ const _nuxt_router_options = ({
  ...configRouterOptions,
  ...router_options
});
/* _processed_nuxt_unctx_transform */



/* harmony default export */ const validate = ((0, composables_router/* defineNuxtRouteMiddleware */._y)(async (to) => {let __temp, __restore;
  if (!to.meta?.validate) {
    return;
  }
  (0, app_nuxt/* useNuxtApp */.g5)();
  (0, composables_router/* useRouter */.KA)();
  const result = (([__temp,__restore]=executeAsync(()=>Promise.resolve(to.meta.validate(to)))),__temp=await __temp,__restore(),__temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
},1));

const globalMiddleware = [
  validate
];
const namedMiddleware = {};
const router_plugin = (0, app_nuxt/* defineNuxtPlugin */.GQ)({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {let __temp, __restore;
    let routerBase = (0, app_nuxt/* useRuntimeConfig */.yp)().app.baseURL;
    if (_nuxt_router_options.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = _nuxt_router_options.history?.(routerBase) ?? ( (0, external_vue_router_namespaceObject.createMemoryHistory)(routerBase));
    const routes = _nuxt_router_options.routes?.(_nuxt_routes) ?? _nuxt_routes;
    let startPosition;
    const router = (0, external_vue_router_namespaceObject.createRouter)({
      ..._nuxt_router_options,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === external_vue_router_namespaceObject.START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (_nuxt_router_options.scrollBehavior) {
          router.options.scrollBehavior = _nuxt_router_options.scrollBehavior;
          if ("scrollRestoration" in window.history) {
            const unsub = router.beforeEach(() => {
              unsub();
              window.history.scrollRestoration = "manual";
            });
          }
          return _nuxt_router_options.scrollBehavior(to, external_vue_router_namespaceObject.START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = (0, external_vue_.shallowRef)(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL =  nuxtApp.ssrContext.url ;
    const _route = (0, external_vue_.shallowRef)(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      if (to.matched[0]?.components?.default === from.matched[0]?.components?.default) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key]
      });
    }
    nuxtApp._route = (0, external_vue_.shallowReactive)(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    (0, composables_error/* useError */.qz)();
    if ( !nuxtApp.ssrContext?.islandContext) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if ( failure?.type === 4) {
          return;
        }
        if (to.matched.length === 0) {
          await nuxtApp.runWithContext(() => (0, composables_error/* showError */.Qg)((0, external_h3_.createError)({
            statusCode: 404,
            fatal: false,
            statusMessage: `Page not found: ${to.fullPath}`,
            data: {
              path: to.fullPath
            }
          })));
        } else if ( to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => (0, composables_router/* navigateTo */.VJ)(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;(([__temp,__restore]=executeAsync(()=>router.push(initialURL))),await __temp,__restore());;
      }
      ;(([__temp,__restore]=executeAsync(()=>router.isReady())),await __temp,__restore());;
    } catch (error2) {
(([__temp,__restore]=executeAsync(()=>nuxtApp.runWithContext(() => (0, composables_error/* showError */.Qg)(error2)))),await __temp,__restore());    }
    const resolvedInitialRoute =  router.currentRoute.value;
    syncCurrentRoute();
    if ( nuxtApp.ssrContext?.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      await nuxtApp.callHook("page:loading:start");
      to.meta = (0, external_vue_.reactive)(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !(0, external_vue_.isReadonly)(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if ( !nuxtApp.ssrContext?.islandContext) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry of toArray(componentMiddleware)) {
            middlewareEntries.add(entry);
          }
        }
        if (nuxt_config/* appManifest */.Xh) {
          const routeRules = await nuxtApp.runWithContext(() => manifest_getRouteRules(to.path));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry of middlewareEntries) {
          const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || (0, external_h3_.createError)({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => (0, composables_error/* showError */.Qg)(error2));
              return false;
            }
          }
          if (result === true) {
            continue;
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = _nuxt_router_options.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => (0, composables_error/* showError */.Qg)(error2));
      }
    });
    return { provide: { router } };
  }
},1);
/* harmony default export */ const router = (router_plugin);
var external_devalue_x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
}; 
external_devalue_x({  });
/* provided dependency */ __webpack_require__(887)["URL"];
function definePayloadReducer(name, reduce) {
  {
    (0, app_nuxt/* useNuxtApp */.g5)().ssrContext._payloadReducers[name] = reduce;
  }
}





const reducers = {
  NuxtError: (data) => (0, composables_error/* isNuxtError */.YS)(data) && data.toJSON(),
  EmptyShallowRef: (data) => (0, external_vue_.isRef)(data) && (0, external_vue_.isShallow)(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  EmptyRef: (data) => (0, external_vue_.isRef)(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  ShallowRef: (data) => (0, external_vue_.isRef)(data) && (0, external_vue_.isShallow)(data) && data.value,
  ShallowReactive: (data) => (0, external_vue_.isReactive)(data) && (0, external_vue_.isShallow)(data) && (0, external_vue_.toRaw)(data),
  Ref: (data) => (0, external_vue_.isRef)(data) && data.value,
  Reactive: (data) => (0, external_vue_.isReactive)(data) && (0, external_vue_.toRaw)(data)
};
if (nuxt_config/* componentIslands */.QU) {
  reducers.Island = (data) => data && data?.__nuxt_island;
}
/* harmony default export */ const revive_payload_server = ((0, app_nuxt/* defineNuxtPlugin */.GQ)({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const reducer in reducers) {
      definePayloadReducer(reducer, reducers[reducer]);
    }
  }
}));

/* harmony default export */ const components_plugin = ((0, app_nuxt/* defineNuxtPlugin */.GQ)({
  name: "nuxt:global-components"
}));

/* harmony default export */ const preload_server = ((0, app_nuxt/* defineNuxtPlugin */.GQ)({
  name: "nuxt:webpack-preload",
  setup(nuxtApp) {
    nuxtApp.vueApp.mixin({
      beforeCreate() {
        const { _registeredComponents } = this.$nuxt.ssrContext;
        const { __moduleIdentifier } = this.$options;
        _registeredComponents.add(__moduleIdentifier);
      }
    });
  }
}));





/* harmony default export */ const server = ([
  unhead,
  router,
  revive_payload_server,
  components_plugin,
  preload_server
]);

// EXTERNAL MODULE: external "vue/server-renderer"
var server_renderer_ = __webpack_require__(16);
// EXTERNAL MODULE: ./node_modules/nuxt/dist/app/components/injections.js
var injections = __webpack_require__(900);


const RouteProvider = (0, external_vue_.defineComponent)({
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key]
      });
    }
    (0, external_vue_.provide)(injections/* PageRouteSymbol */.D, (0, external_vue_.shallowReactive)(route));
    return () => {
      return (0, external_vue_.h)(props.vnode, { ref: props.vnodeRef });
    };
  }
});










/* harmony default export */ const page = ((0, external_vue_.defineComponent)({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = (0, app_nuxt/* useNuxtApp */.g5)();
    const pageRef = (0, external_vue_.ref)();
    const forkRoute = (0, external_vue_.inject)(injections/* PageRouteSymbol */.D, null);
    let previousPageKey;
    expose({ pageRef });
    (0, external_vue_.inject)(injections/* LayoutMetaSymbol */.M, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    if (props.pageKey) {
      (0, external_vue_.watch)(() => props.pageKey, (next, prev) => {
        if (next !== prev) {
          nuxtApp.callHook("page:loading:start");
        }
      });
    }
    return () => {
      return (0, external_vue_.h)(external_vue_router_namespaceObject.RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            done();
            return;
          }
          const key = utils_generateRouteKey(routeProps, props.pageKey);
          if (!nuxtApp.isHydrating && !hasChildrenRoutes(forkRoute, routeProps.route, routeProps.Component) && previousPageKey === key) {
            nuxtApp.callHook("page:loading:end");
          }
          previousPageKey = key;
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? nuxt_config/* appPageTransition */.y4);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            nuxt_config/* appPageTransition */.y4,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          const keepaliveConfig = props.keepalive ?? routeProps.route.meta.keepalive ?? nuxt_config/* appKeepalive */.gE;
          vnode = _wrapIf(
            external_vue_.Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              keepaliveConfig,
              (0, external_vue_.h)(external_vue_.Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  (0, external_vue_.nextTick)(() => nuxtApp.callHook("page:finish", routeProps.Component).then(() => nuxtApp.callHook("page:loading:end")).finally(done));
                }
              }, {
                default: () => {
                  const providerVNode = (0, external_vue_.h)(RouteProvider, {
                    key: key || void 0,
                    vnode: slots.default ? (0, external_vue_.h)(external_vue_.Fragment, void 0, slots.default(routeProps)) : routeProps.Component,
                    route: routeProps.route,
                    renderKey: key || void 0,
                    trackRootNodes: hasTransition,
                    vnodeRef: pageRef
                  });
                  return providerVNode;
                }
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
}));
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: prop.onAfterLeave ? toArray(prop.onAfterLeave) : void 0
  }));
  return (0, external_defu_namespaceObject.defu)(..._props);
}
function hasChildrenRoutes(fork, newRoute, Component) {
  if (!fork) {
    return false;
  }
  const index = newRoute.matched.findIndex((m) => m.components?.default === Component?.type);
  return index < newRoute.matched.length - 1;
}



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtPage = page;
  _push(`<div${(0, server_renderer_.ssrRenderAttrs)(_attrs)}>`);
  _push((0, server_renderer_.ssrRenderComponent)(_component_NuxtPage, null, null, _parent));
  _push(`</div>`);
}

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(690);

const script = {}

;
const __exports__ = /*#__PURE__*/(0, exportHelper/* default */.A)(script, [['ssrRender',ssrRender]]);

/* harmony default export */ const app = (__exports__);



/* harmony default export */ const nuxt_error_pagevue_type_script_setup_true_lang_js = ({
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    _error.stack ? _error.stack.split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n") : "";
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack =  void 0;
    const _Error404 = (0, external_vue_.defineAsyncComponent)(() => __webpack_require__.e(/* import() */ 276).then(__webpack_require__.bind(__webpack_require__, 276)).then((r) => r.default || r));
    const _Error =  (0, external_vue_.defineAsyncComponent)(() => __webpack_require__.e(/* import() */ 674).then(__webpack_require__.bind(__webpack_require__, 674)).then((r) => r.default || r));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push((0, server_renderer_.ssrRenderComponent)((0, external_vue_.unref)(ErrorTemplate), (0, external_vue_.mergeProps)({ statusCode: (0, external_vue_.unref)(statusCode), statusMessage: (0, external_vue_.unref)(statusMessage), description: (0, external_vue_.unref)(description), stack: (0, external_vue_.unref)(stack) }, _attrs), null, _parent));
    };
  }
});



const nuxt_error_page_exports_ = nuxt_error_pagevue_type_script_setup_true_lang_js;

/* harmony default export */ const nuxt_error_page = (nuxt_error_page_exports_);










/* harmony default export */ const nuxt_rootvue_type_script_setup_true_lang_js = ({
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer =  nuxt_config/* componentIslands */.QU ? (0, external_vue_.defineAsyncComponent)(() => __webpack_require__.e(/* import() */ 898).then(__webpack_require__.bind(__webpack_require__, 898)).then((r) => r.default || r)) : () => null;
    const nuxtApp = (0, app_nuxt/* useNuxtApp */.g5)();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url ;
    const SingleRenderer =  false ;
    (0, external_vue_.provide)(injections/* PageRouteSymbol */.D, (0, composables_router/* useRoute */.lq)());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = (0, composables_error/* useError */.qz)();
    const abortRender =  error.value && !nuxtApp.ssrContext.error;
    (0, external_vue_.onErrorCaptured)((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => (0, composables_error/* showError */.Qg)(err));
        (0, external_vue_.onServerPrefetch)(() => p);
        return false;
      }
    });
    const islandContext =  nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      (0, server_renderer_.ssrRenderSuspense)(_push, {
        default: () => {
          if ((0, external_vue_.unref)(abortRender)) {
            _push(`<div></div>`);
          } else if ((0, external_vue_.unref)(error)) {
            _push((0, server_renderer_.ssrRenderComponent)((0, external_vue_.unref)(nuxt_error_page), { error: (0, external_vue_.unref)(error) }, null, _parent));
          } else if ((0, external_vue_.unref)(islandContext)) {
            _push((0, server_renderer_.ssrRenderComponent)((0, external_vue_.unref)(IslandRenderer), { context: (0, external_vue_.unref)(islandContext) }, null, _parent));
          } else if ((0, external_vue_.unref)(SingleRenderer)) {
            (0, server_renderer_.ssrRenderVNode)(_push, (0, external_vue_.createVNode)((0, external_vue_.resolveDynamicComponent)((0, external_vue_.unref)(SingleRenderer)), null, null), _parent);
          } else {
            _push((0, server_renderer_.ssrRenderComponent)((0, external_vue_.unref)(app), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
});



const nuxt_root_exports_ = nuxt_rootvue_type_script_setup_true_lang_js;

/* harmony default export */ const nuxt_root = (nuxt_root_exports_);

__webpack_require__.p = (0, paths_namespaceObject.buildAssetsURL)();








let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = (0, external_vue_.createApp)(nuxt_root);
    const nuxt = (0, app_nuxt/* createNuxtApp */.fs)({ vueApp, ssrContext });
    try {
      await (0,app_nuxt/* applyPlugins */.HF)(nuxt, server);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error = nuxt.payload.error || (0, composables_error/* createError */.$5)(error);
    }
    if (ssrContext?._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
/* harmony default export */ const app_entry = ((ssrContext) => entry(ssrContext));

var __webpack_exports__default = __webpack_exports__.A;

export { __webpack_exports__default as default };
