require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var queue = [];

var Dialog = function Dialog(options) {
  return new Promise(function (resolve, reject) {
    var pages = getCurrentPages();
    var ctx = pages[pages.length - 1];
    var dialog = ctx.selectComponent(options.selector);
    delete options.selector;

    if (dialog) {
      dialog.setData(_extends({
        onCancel: reject,
        onConfirm: resolve
      }, options));
      queue.push(dialog);
    }
  });
};

Dialog.defaultOptions = {
  show: true,
  title: '',
  message: '',
  zIndex: 100,
  overlay: true,
  asyncClose: false,
  selector: '#van-dialog',
  confirmButtonText: '确认',
  cancelButtonText: '取消',
  showConfirmButton: true,
  showCancelButton: false,
  closeOnClickOverlay: false,
  confirmButtonOpenType: ''
};

Dialog.alert = function (options) {
  return Dialog(_extends({}, Dialog.currentOptions, options));
};

Dialog.confirm = function (options) {
  return Dialog(_extends({}, Dialog.currentOptions, {
    showCancelButton: true
  }, options));
};

Dialog.close = function () {
  queue.forEach(function (dialog) {
    dialog.close();
  });
  queue = [];
};

Dialog.setDefaultOptions = function (options) {
  Object.assign(Dialog.currentOptions, options);
};

Dialog.resetDefaultOptions = function () {
  Dialog.currentOptions = _extends({}, Dialog.defaultOptions);
};

Dialog.resetDefaultOptions();
/* unused harmony default export */ var _unused_webpack_default_export = (Dialog);

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(91);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8f1724d8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(97);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(92)
}
var normalizeComponent = __webpack_require__(5)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8f1724d8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8f1724d8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8f1724d8", Component.options)
  } else {
    hotAPI.reload("data-v-8f1724d8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 92:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_vant_notify_notify__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_vant_dialog_dialog__ = __webpack_require__(121);


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
      value: "",
      historyList: [],
      permit: {},
      show: false
    };
  },


  methods: {
    cleckEnable: function cleckEnable() {
      this.show = false;
      if (this.paw == '5210') {
        wx.setStorageSync("pwd_enabled", 1);
        var url = "../add/main";
        wx.navigateTo({ url: url });
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_2__static_vant_notify_notify__["a" /* default */])("密码错误");
      }
    },
    onAdd: function onAdd() {
      var pwd_enabled = wx.getStorageSync("pwd_enabled");
      if (!pwd_enabled) {
        this.show = true;
        return;
      }
      var url = "../add/main";
      wx.navigateTo({ url: url });
    },
    itmeClick: function itmeClick(item) {
      var url = "../list/main?value=" + item;
      wx.navigateTo({ url: url });
    },
    clearStorage: function clearStorage() {
      this.historyList = [];
      wx.clearStorageSync();
    },

    serach: function serach() {
      if (!this.value) return Object(__WEBPACK_IMPORTED_MODULE_2__static_vant_notify_notify__["a" /* default */])("请输入小区名称");
      var url = "../list/main?value=" + this.value;
      var history = wx.getStorageSync("history");
      if (history) {
        var a = history.split(",").indexOf("" + this.value) == -1;
        if (a) wx.setStorageSync("history", history + "," + this.value);
      } else {
        wx.setStorageSync("history", this.value);
      }
      wx.navigateTo({ url: url });
      this.value = "";
    }
  },
  onShow: function onShow() {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var db, _ref, data, his;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              db = wx.cloud.database();
              _context.next = 3;
              return db.collection("permit").get();

            case 3:
              _ref = _context.sent;
              data = _ref.data;

              _this.permit = data[0];
              his = wx.getStorageSync("history").split(",");

              _this.historyList = his;

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "container"
  }, [(_vm.permit.notice_bar) ? _c('van-notice-bar', {
    attrs: {
      "mode": "closeable",
      "background": "#22b37c",
      "color": "#22b37c",
      "text": "这个小程序只是第一个雏形，欢迎向我提更多的需求，致力于帮你们做好这件事。",
      "mpcomid": '0'
    }
  }) : _vm._e(), _vm._v(" "), _c('img', {
    staticClass: "shi",
    attrs: {
      "src": "https://7465-test-ad5164-1257858866.tcb.qcloud.la/img/shi.png?sign=73ef7ae9524d21008d684c3fdbc5c7b3&t=1540791397",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.value),
      expression: "value"
    }],
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder": "请输入小区名称",
      "placeholder-style": "color: #22b37c;",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.value)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.value = $event.target.value
      }
    }
  }), _vm._v(" "), _c('view', {
    staticClass: "button",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.serach
    }
  }, [_vm._v("搜一搜")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "history"
  }, [_c('p', [_c('span', [_vm._v("历史搜索")]), _vm._v(" "), _c('span', {
    staticStyle: {
      "color": "#22b37c"
    },
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.clearStorage
    }
  }, [_vm._v("清除搜索")])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-top": "10px"
    }
  }, _vm._l((_vm.historyList), function(item, index) {
    return _c('span', {
      key: index,
      staticClass: "his_item",
      attrs: {
        "eventid": '3-' + index
      },
      on: {
        "click": function($event) {
          _vm.itmeClick(item)
        }
      }
    }, [_vm._v("\n        " + _vm._s(item) + " \n      ")])
  }))], 1), _vm._v(" "), (_vm.permit.add_enabled) ? _c('img', {
    staticClass: "jia",
    attrs: {
      "src": "https://7465-test-ad5164-1257858866.tcb.qcloud.la/img/jia.png?sign=fb30e796a732e90aa83f935b9133a330&t=1540791495",
      "alt": "",
      "eventid": '4'
    },
    on: {
      "click": _vm.onAdd
    }
  }) : _vm._e(), _vm._v(" "), (_vm.show) ? _c('div', {
    staticClass: "show"
  }, [_c('div', {
    staticClass: "item"
  }, [_vm._m(0), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.paw),
      expression: "paw"
    }],
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder": "请输入密码",
      "eventid": '5'
    },
    domProps: {
      "value": (_vm.paw)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.paw = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "button2",
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": _vm.cleckEnable
    }
  }, [_vm._v("保存")])], 1) : _vm._e(), _vm._v(" "), _c('van-notify', {
    attrs: {
      "id": "van-notify",
      "mpcomid": '1'
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
  }, [_vm._v("*")]), _vm._v(" 输入密码：")])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8f1724d8", esExports)
  }
}

/***/ })

},[90]);
//# sourceMappingURL=main.js.map