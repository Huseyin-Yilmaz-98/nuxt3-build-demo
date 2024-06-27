const id = 276;
const ids = [276];
const modules = {

/***/ 985:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 117:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ error_404)
});

// EXTERNAL MODULE: ./node_modules/@unhead/vue/dist/shared/vue.f36acd1f.mjs
var vue_f36acd1f = __webpack_require__(253);
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(286);
// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(954);
// EXTERNAL MODULE: ./node_modules/nuxt/dist/app/nuxt.js + 2 modules
var nuxt = __webpack_require__(712);
// EXTERNAL MODULE: ./node_modules/nuxt/dist/app/composables/router.js
var composables_router = __webpack_require__(193);

// EXTERNAL MODULE: ./.nuxt/nuxt.config.mjs
var nuxt_config = __webpack_require__(459);
/* provided dependency */ var URL = __webpack_require__(887)["URL"];








const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  function resolveTrailingSlashBehavior(to, resolve) {
    if (!to || options.trailingSlash !== "append" && options.trailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, options.trailingSlash);
    }
    const path = "path" in to && to.path !== void 0 ? to.path : resolve(to).path;
    const resolvedPath = {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, options.trailingSlash)
    };
    return resolvedPath;
  }
  function useNuxtLink(props) {
    const router = (0, composables_router/* useRouter */.KA)();
    const config = (0, nuxt/* useRuntimeConfig */.yp)();
    const hasTarget = (0, external_vue_.computed)(() => !!props.target && props.target !== "_self");
    const isAbsoluteUrl = (0, external_vue_.computed)(() => {
      const path = props.to || props.href || "";
      return typeof path === "string" && (0, external_ufo_.hasProtocol)(path, { acceptRelative: true });
    });
    const builtinRouterLink = (0, external_vue_.resolveComponent)("RouterLink");
    const useBuiltinLink = builtinRouterLink && typeof builtinRouterLink !== "string" ? builtinRouterLink.useLink : void 0;
    const isExternal = (0, external_vue_.computed)(() => {
      if (props.external) {
        return true;
      }
      const path = props.to || props.href || "";
      if (typeof path === "object") {
        return false;
      }
      return path === "" || isAbsoluteUrl.value;
    });
    const to = (0, external_vue_.computed)(() => {
      const path = props.to || props.href || "";
      if (isExternal.value) {
        return path;
      }
      return resolveTrailingSlashBehavior(path, router.resolve);
    });
    const link = isExternal.value ? void 0 : useBuiltinLink?.({ ...props, to });
    const href = (0, external_vue_.computed)(() => {
      if (!to.value || isAbsoluteUrl.value) {
        return to.value;
      }
      if (isExternal.value) {
        const path = typeof to.value === "object" ? resolveRouteObject(to.value) : to.value;
        return resolveTrailingSlashBehavior(
          path,
          router.resolve
          /* will not be called */
        );
      }
      if (typeof to.value === "object") {
        return router.resolve(to.value)?.href ?? null;
      }
      return resolveTrailingSlashBehavior(
        (0, external_ufo_.joinURL)(config.app.baseURL, to.value),
        router.resolve
        /* will not be called */
      );
    });
    return {
      to,
      hasTarget,
      isAbsoluteUrl,
      isExternal,
      //
      href,
      isActive: link?.isActive ?? (0, external_vue_.computed)(() => to.value === router.currentRoute.value.path),
      isExactActive: link?.isExactActive ?? (0, external_vue_.computed)(() => to.value === router.currentRoute.value.path),
      route: link?.route ?? (0, external_vue_.computed)(() => router.resolve(to.value)),
      async navigate() {
        await (0, composables_router/* navigateTo */.VJ)(href.value, { replace: props.replace, external: isExternal.value || hasTarget.value });
      }
    };
  }
  return (0, external_vue_.defineComponent)({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    useLink: useNuxtLink,
    setup(props, { slots }) {
      (0, composables_router/* useRouter */.KA)();
      const { to, href, navigate, isExternal, hasTarget, isAbsoluteUrl } = useNuxtLink(props);
      const prefetched = (0, external_vue_.ref)(false);
      const el =  void 0 ;
      const elRef =  void 0 ;
      return () => {
        if (!isExternal.value && !hasTarget.value) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            if (prefetched.value) {
              routerLinkProps.class = props.prefetchedClass || options.prefetchedClass;
            }
            routerLinkProps.rel = props.rel || void 0;
          }
          return (0, external_vue_.h)(
            (0, external_vue_.resolveComponent)("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const target = props.target || null;
        const rel = firstNonUndefined(
          // converts `""` to `null` to prevent the attribute from being added as empty (`rel=""`)
          props.noRel ? "" : props.rel,
          options.externalRelAttribute,
          /*
          * A fallback rel of `noopener noreferrer` is applied for external links or links that open in a new tab.
          * This solves a reverse tabnapping security flaw in browsers pre-2021 as well as improving privacy.
          */
          isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : ""
        ) || null;
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href: href.value,
            navigate,
            get route() {
              if (!href.value) {
                return void 0;
              }
              const url = new URL(href.value,  "http://localhost");
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return (0, external_ufo_.parseQuery)(url.search);
                },
                hash: url.hash,
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href: href.value
              };
            },
            rel,
            target,
            isExternal: isExternal.value || hasTarget.value,
            isActive: false,
            isExactActive: false
          });
        }
        return (0, external_vue_.h)("a", { ref: el, href: href.value || null, rel, target }, slots.default?.());
      };
    }
  });
}
/* harmony default export */ const nuxt_link = (/* @__PURE__ */defineNuxtLink(nuxt_config/* nuxtLinkDefaults */.qj));
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? external_ufo_.withTrailingSlash : external_ufo_.withoutTrailingSlash;
  const hasProtocolDifferentFromHttp = (0, external_ufo_.hasProtocol)(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}
function resolveRouteObject(to) {
  return (0, external_ufo_.withQuery)(to.path || "", to.query || {}) + (to.hash ? "#" + to.hash : "");
}

// EXTERNAL MODULE: external "vue/server-renderer"
var server_renderer_ = __webpack_require__(16);




/* harmony default export */ const error_404vue_type_script_setup_true_lang_js = ({
  __name: "error-404",
  __ssrInlineRender: true,
  props: {
    appName: {
      type: String,
      default: "Nuxt"
    },
    version: {
      type: String,
      default: ""
    },
    statusCode: {
      type: Number,
      default: 404
    },
    statusMessage: {
      type: String,
      default: "Not Found"
    },
    description: {
      type: String,
      default: "Sorry, the page you are looking for could not be found."
    },
    backHome: {
      type: String,
      default: "Go back home"
    }
  },
  setup(__props) {
    const props = __props;
    (0, vue_f36acd1f.u)({
      title: `${props.statusCode} - ${props.statusMessage} | ${props.appName}`,
      script: [],
      style: [
        {
          children: `*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}h1,p{margin:0}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = nuxt_link;
      _push(`<div${(0, server_renderer_.ssrRenderAttrs)((0, external_vue_.mergeProps)({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))} data-v-a17531ba><div class="fixed left-0 right-0 spotlight z-10" data-v-a17531ba></div><div class="max-w-520px text-center z-20" data-v-a17531ba><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-a17531ba>${(0, server_renderer_.ssrInterpolate)(__props.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-a17531ba>${(0, server_renderer_.ssrInterpolate)(__props.description)}</p><div class="w-full flex items-center justify-center" data-v-a17531ba>`);
      _push((0, server_renderer_.ssrRenderComponent)(_component_NuxtLink, {
        to: "/",
        class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
      }, {
        default: (0, external_vue_.withCtx)((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${(0, server_renderer_.ssrInterpolate)(__props.backHome)}`);
          } else {
            return [
              (0, external_vue_.createTextVNode)((0, external_vue_.toDisplayString)(__props.backHome), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
 
// EXTERNAL MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Adynamic-base-path!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Atree-shake-template!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Acomponents%3Aimports!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aremove-plugin-metadata!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-38.use[0]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-38.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./node_modules/nuxt/dist/app/components/error-404.vue?vue&type=style&index=0&id=a17531ba&scoped=true&lang=css
__webpack_require__(960);

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(690);


const __exports__ = /*#__PURE__*/(0, exportHelper/* default */.A)(error_404vue_type_script_setup_true_lang_js, [['__scopeId',"data-v-a17531ba"]]);

/* harmony default export */ const error_404 = (__exports__);

/***/ }),

/***/ 960:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(117);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(985);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.spotlight[data-v-a17531ba]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-30vh;filter:blur(20vh);height:40vh}.gradient-border[data-v-a17531ba]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:.5rem;position:relative}@media (prefers-color-scheme:light){.gradient-border[data-v-a17531ba]{background-color:hsla(0,0%,100%,.3)}.gradient-border[data-v-a17531ba]:before{background:linear-gradient(90deg,#e2e2e2,#e2e2e2 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}@media (prefers-color-scheme:dark){.gradient-border[data-v-a17531ba]{background-color:hsla(0,0%,8%,.3)}.gradient-border[data-v-a17531ba]:before{background:linear-gradient(90deg,#303030,#303030 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}.gradient-border[data-v-a17531ba]:before{background-size:400% auto;border-radius:.5rem;bottom:0;content:"";left:0;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:.5;padding:2px;position:absolute;right:0;top:0;transition:background-position .3s ease-in-out,opacity .2s ease-in-out;width:100%}.gradient-border[data-v-a17531ba]:hover:before{background-position:-50% 0;opacity:1}.fixed[data-v-a17531ba]{position:fixed}.left-0[data-v-a17531ba]{left:0}.right-0[data-v-a17531ba]{right:0}.z-10[data-v-a17531ba]{z-index:10}.z-20[data-v-a17531ba]{z-index:20}.grid[data-v-a17531ba]{display:grid}.mb-16[data-v-a17531ba]{margin-bottom:4rem}.mb-8[data-v-a17531ba]{margin-bottom:2rem}.max-w-520px[data-v-a17531ba]{max-width:520px}.min-h-screen[data-v-a17531ba]{min-height:100vh}.w-full[data-v-a17531ba]{width:100%}.flex[data-v-a17531ba]{display:flex}.cursor-pointer[data-v-a17531ba]{cursor:pointer}.place-content-center[data-v-a17531ba]{place-content:center}.items-center[data-v-a17531ba]{align-items:center}.justify-center[data-v-a17531ba]{justify-content:center}.overflow-hidden[data-v-a17531ba]{overflow:hidden}.bg-white[data-v-a17531ba]{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-4[data-v-a17531ba]{padding-left:1rem;padding-right:1rem}.px-8[data-v-a17531ba]{padding-left:2rem;padding-right:2rem}.py-2[data-v-a17531ba]{padding-bottom:.5rem;padding-top:.5rem}.text-center[data-v-a17531ba]{text-align:center}.text-8xl[data-v-a17531ba]{font-size:6rem;line-height:1}.text-xl[data-v-a17531ba]{font-size:1.25rem;line-height:1.75rem}.text-black[data-v-a17531ba]{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light[data-v-a17531ba]{font-weight:300}.font-medium[data-v-a17531ba]{font-weight:500}.leading-tight[data-v-a17531ba]{line-height:1.25}.font-sans[data-v-a17531ba]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased[data-v-a17531ba]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-a17531ba]{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:text-white[data-v-a17531ba]{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:px-0[data-v-a17531ba]{padding-left:0;padding-right:0}.sm\\:px-6[data-v-a17531ba]{padding-left:1.5rem;padding-right:1.5rem}.sm\\:py-3[data-v-a17531ba]{padding-bottom:.75rem;padding-top:.75rem}.sm\\:text-4xl[data-v-a17531ba]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-xl[data-v-a17531ba]{font-size:1.25rem;line-height:1.75rem}}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 253:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ useHead)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(286);
/* harmony import */ var _vue_cf295fb1_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(216);


function useHead(input, options = {}) {
  const head = options.head || (0, _vue_cf295fb1_mjs__WEBPACK_IMPORTED_MODULE_1__.i)();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = (0, vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
  const resolvedInput = (0, vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
  (0, vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(() => {
    resolvedInput.value = deactivated.value ? {} : (0, _vue_cf295fb1_mjs__WEBPACK_IMPORTED_MODULE_1__.r)(input);
  });
  const entry = head.push(resolvedInput.value, options);
  (0, vue__WEBPACK_IMPORTED_MODULE_0__.watch)(resolvedInput, (e) => {
    entry.patch(e);
  });
  (0, vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
  return entry;
}



/***/ })

};

export { id, ids, modules };
