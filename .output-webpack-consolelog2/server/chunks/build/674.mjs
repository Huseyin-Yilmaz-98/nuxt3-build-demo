const id = 674;
const ids = [674];
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

/***/ 674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ error_500)
});

// EXTERNAL MODULE: ./node_modules/@unhead/vue/dist/shared/vue.f36acd1f.mjs
var vue_f36acd1f = __webpack_require__(253);
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(286);
// EXTERNAL MODULE: external "vue/server-renderer"
var server_renderer_ = __webpack_require__(16);



/* harmony default export */ const error_500vue_type_script_setup_true_lang_js = ({
  __name: "error-500",
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
      default: 500
    },
    statusMessage: {
      type: String,
      default: "Server error"
    },
    description: {
      type: String,
      default: "This page is temporarily unavailable."
    }
  },
  setup(__props) {
    const props = __props;
    (0, vue_f36acd1f.u)({
      title: `${props.statusCode} - ${props.statusMessage} | ${props.appName}`,
      script: [],
      style: [
        {
          children: `*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1{font-size:inherit;font-weight:inherit}h1,p{margin:0}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${(0, server_renderer_.ssrRenderAttrs)((0, external_vue_.mergeProps)({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))} data-v-40d71e89><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-40d71e89></div><div class="max-w-520px text-center" data-v-40d71e89><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-40d71e89>${(0, server_renderer_.ssrInterpolate)(__props.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-40d71e89>${(0, server_renderer_.ssrInterpolate)(__props.description)}</p></div></div>`);
    };
  }
});
 
// EXTERNAL MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Adynamic-base-path!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Atree-shake-template!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Acomponents%3Aimports!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aremove-plugin-metadata!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-38.use[0]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-38.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./node_modules/nuxt/dist/app/components/error-500.vue?vue&type=style&index=0&id=40d71e89&scoped=true&lang=css
__webpack_require__(334);

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(690);


const __exports__ = /*#__PURE__*/(0, exportHelper/* default */.A)(error_500vue_type_script_setup_true_lang_js, [['__scopeId',"data-v-40d71e89"]]);

/* harmony default export */ const error_500 = (__exports__);

/***/ }),

/***/ 334:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(117);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(985);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.spotlight[data-v-40d71e89]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);filter:blur(20vh)}.fixed[data-v-40d71e89]{position:fixed}.-bottom-1\\/2[data-v-40d71e89]{bottom:-50%}.left-0[data-v-40d71e89]{left:0}.right-0[data-v-40d71e89]{right:0}.grid[data-v-40d71e89]{display:grid}.mb-16[data-v-40d71e89]{margin-bottom:4rem}.mb-8[data-v-40d71e89]{margin-bottom:2rem}.h-1\\/2[data-v-40d71e89]{height:50%}.max-w-520px[data-v-40d71e89]{max-width:520px}.min-h-screen[data-v-40d71e89]{min-height:100vh}.place-content-center[data-v-40d71e89]{place-content:center}.overflow-hidden[data-v-40d71e89]{overflow:hidden}.bg-white[data-v-40d71e89]{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-8[data-v-40d71e89]{padding-left:2rem;padding-right:2rem}.text-center[data-v-40d71e89]{text-align:center}.text-8xl[data-v-40d71e89]{font-size:6rem;line-height:1}.text-xl[data-v-40d71e89]{font-size:1.25rem;line-height:1.75rem}.text-black[data-v-40d71e89]{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light[data-v-40d71e89]{font-weight:300}.font-medium[data-v-40d71e89]{font-weight:500}.leading-tight[data-v-40d71e89]{line-height:1.25}.font-sans[data-v-40d71e89]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased[data-v-40d71e89]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-40d71e89]{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:text-white[data-v-40d71e89]{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:px-0[data-v-40d71e89]{padding-left:0;padding-right:0}.sm\\:text-4xl[data-v-40d71e89]{font-size:2.25rem;line-height:2.5rem}}`, ""]);
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
