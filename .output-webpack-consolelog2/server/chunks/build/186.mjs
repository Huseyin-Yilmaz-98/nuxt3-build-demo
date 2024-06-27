const id = 186;
const ids = [186];
const modules = {

/***/ 186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ b)
});

// EXTERNAL MODULE: external "vue/server-renderer"
var server_renderer_ = __webpack_require__(16);

/* harmony default export */ const Bvue_type_script_setup_true_lang_js = ({
  __name: "B",
  __ssrInlineRender: true,
  setup(__props) {
    console.log("2");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${(0, server_renderer_.ssrRenderAttrs)(_attrs)}> This is component B </p>`);
    };
  }
});



const __exports__ = Bvue_type_script_setup_true_lang_js;

/* harmony default export */ const B = (__exports__);
// EXTERNAL MODULE: external "vue"
__webpack_require__(286);



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_B = B;
  _push((0, server_renderer_.ssrRenderComponent)(_component_B, _attrs, null, _parent));
}

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(690);

const script = {}

;
const b_exports_ = /*#__PURE__*/(0, exportHelper/* default */.A)(script, [['ssrRender',ssrRender]]);

/* harmony default export */ const b = (b_exports_);

/***/ })

};

export { id, ids, modules };
