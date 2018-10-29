require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],{

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(47);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6a4f6463_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(89);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(48)
}
var normalizeComponent = __webpack_require__(5)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6a4f6463"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6a4f6463_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\add\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6a4f6463", Component.options)
  } else {
    hotAPI.reload("data-v-6a4f6463", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 48:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_vant_notify_notify__ = __webpack_require__(120);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      name: "",
      min_price: "",
      max_price: "",
      address: "",
      time: ""
    };
  },


  components: {},

  methods: {
    onAdd: function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var db, _ref2, data, len, obj;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!this.name || !this.min_price || !this.max_price || !this.time || !this.address)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", Object(__WEBPACK_IMPORTED_MODULE_2__static_vant_notify_notify__["a" /* default */])("请输入必选项"));

              case 2:
                db = wx.cloud.database();
                _context.next = 5;
                return db.collection("hourse").where({ name: this.name }).get();

              case 5:
                _ref2 = _context.sent;
                data = _ref2.data;
                len = data.length ? data[0]._id : "";
                obj = {
                  name: this.name,
                  min_price: this.min_price,
                  max_price: this.max_price,
                  time: this.time,
                  address: this.address
                };

                if (len) {
                  db.collection("hourse").doc(len).set({
                    data: obj,
                    success: function success(res) {
                      Object(__WEBPACK_IMPORTED_MODULE_2__static_vant_notify_notify__["a" /* default */])({
                        text: '更新成功！',
                        duration: 1000,
                        selector: '#van-notify',
                        backgroundColor: '#38f'
                      });
                    }
                  });
                } else {
                  db.collection("hourse").add({
                    data: obj,
                    success: function success(res) {
                      Object(__WEBPACK_IMPORTED_MODULE_2__static_vant_notify_notify__["a" /* default */])({
                        text: '更新成功！',
                        duration: 1000,
                        selector: '#van-notify',
                        backgroundColor: '#38f'
                      });
                    }
                  });
                }
                this.name = "";
                this.min_price = "";
                this.max_price = "";
                this.time = "";
                this.address = "";

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onAdd() {
        return _ref.apply(this, arguments);
      }

      return onAdd;
    }()
  },

  created: function created() {
    // this.getUserInfo()
    wx.setNavigationBarTitle({
      title: '录入房源'
    });
  }
});

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "item"
  }, [_vm._m(0), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.name),
      expression: "name"
    }],
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder": "请输入小区名",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.name = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_vm._m(1), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.min_price),
      expression: "min_price"
    }],
    staticClass: "input",
    attrs: {
      "type": "digit",
      "placeholder": "下限/元",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.min_price)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.min_price = $event.target.value
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.max_price),
      expression: "max_price"
    }],
    staticClass: "input",
    attrs: {
      "type": "digit",
      "placeholder": "上限/元",
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.max_price)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.max_price = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_vm._m(2), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.time),
      expression: "time"
    }],
    staticClass: "input",
    attrs: {
      "type": "number",
      "placeholder": "请输入年代",
      "eventid": '3'
    },
    domProps: {
      "value": (_vm.time)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.time = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_vm._m(3), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.address),
      expression: "address"
    }],
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder": "请输入地址",
      "eventid": '4'
    },
    domProps: {
      "value": (_vm.address)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.address = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('button', {
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.onAdd
    }
  }, [_vm._v("保存")])], 1), _vm._v(" "), _c('van-notify', {
    attrs: {
      "id": "van-notify",
      "mpcomid": '0'
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "label"
  }, [_c('span', {
    staticStyle: {
      "color": "#f00"
    }
  }, [_vm._v("*")]), _vm._v(" 输入小区名：")])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "label"
  }, [_c('span', {
    staticStyle: {
      "color": "#f00"
    }
  }, [_vm._v("*")]), _vm._v(" 输入价格：")])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "label"
  }, [_c('span', {
    staticStyle: {
      "color": "#f00"
    }
  }, [_vm._v("*")]), _vm._v(" 输入年代：")])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "label"
  }, [_c('span', {
    staticStyle: {
      "color": "#f00"
    }
  }, [_vm._v("*")]), _vm._v(" 输入地址：")])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6a4f6463", esExports)
  }
}

/***/ })

},[46]);
//# sourceMappingURL=main.js.map