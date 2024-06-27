const id = 898;
const ids = [898];
const modules = {

/***/ 898:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ island_renderer)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(286);
// EXTERNAL MODULE: ./node_modules/nuxt/dist/app/composables/error.js
var error = __webpack_require__(728);
const islandComponents =  {};



/* harmony default export */ const island_renderer = ((0, external_vue_.defineComponent)({
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const component = islandComponents[props.context.name];
    if (!component) {
      throw (0, error/* createError */.$5)({
        statusCode: 404,
        statusMessage: `Island component not found: ${props.context.name}`
      });
    }
    (0, external_vue_.onErrorCaptured)((e) => {
      console.log(e);
    });
    return () => (0, external_vue_.createVNode)(component || "span", { ...props.context.props, "data-island-uid": "" });
  }
}));


/***/ })

};

export { id, ids, modules };
