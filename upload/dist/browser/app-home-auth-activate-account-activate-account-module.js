(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-home-auth-activate-account-activate-account-module"],{

/***/ "./src/app/home/auth/activate-account/activate-account.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/home/auth/activate-account/activate-account.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"linkpage-banner\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-5 col-md-5 col-sm-6 col-8\">\n        <div class=\"linkepage-title full100\">\n          <h4>Activate Account</h4>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"linkpage-content relative pb-5 pt-5\">\n  <div class=\"container-fluid\">\n    <div class=\"row align-items-center justify-content-center\">\n      <div class=\"loginsiginup-box\">\n        <div class=\"login-area full100\">\n          <div class=\"login-title full100\">\n            <div class=\"login-title-inner full100\">\n              <h3 class=\"text-center\">Activate Account</h3>\n            </div>\n          </div>\n          <div class=\"full100\">\n            <form>\n                <div class=\"form-group row mt-4\">\n                  <label class=\"col-sm-3 col-form-label\">\n                    Activation\n                  </label>\n                  <div class=\"col-sm-9\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Activation Code\">\n                  </div>\t\n                </div>\n                <div class=\"form-group row mt-4\">\n                  <div class=\"col-sm-4 offset-sm-3\">\n                    <a routerLink=\"/reset-password\" class=\"button signin-btn lbtn-lgradius\">Submit</a>\n                  </div>\n                  <div class=\"col-sm-5 newaccount mt-3\">\n                    <a routerLink=\"/resend-code\">\n                      Resend Code\n                    </a>\n                  </div>\n                </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/home/auth/activate-account/activate-account.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/home/auth/activate-account/activate-account.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/auth/activate-account/activate-account.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/home/auth/activate-account/activate-account.component.ts ***!
  \**************************************************************************/
/*! exports provided: ActivateAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateAccountComponent", function() { return ActivateAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActivateAccountComponent = /** @class */ (function () {
    function ActivateAccountComponent() {
    }
    ActivateAccountComponent.prototype.ngOnInit = function () {
    };
    ActivateAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activate-account',
            template: __webpack_require__(/*! ./activate-account.component.html */ "./src/app/home/auth/activate-account/activate-account.component.html"),
            styles: [__webpack_require__(/*! ./activate-account.component.scss */ "./src/app/home/auth/activate-account/activate-account.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ActivateAccountComponent);
    return ActivateAccountComponent;
}());



/***/ }),

/***/ "./src/app/home/auth/activate-account/activate-account.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/home/auth/activate-account/activate-account.module.ts ***!
  \***********************************************************************/
/*! exports provided: ActivateAccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateAccountModule", function() { return ActivateAccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _activate_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activate-account.component */ "./src/app/home/auth/activate-account/activate-account.component.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../header/header.module */ "./src/app/home/header/header.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _activate_account_component__WEBPACK_IMPORTED_MODULE_2__["ActivateAccountComponent"],
    }
];
var ActivateAccountModule = /** @class */ (function () {
    function ActivateAccountModule() {
    }
    ActivateAccountModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _header_header_module__WEBPACK_IMPORTED_MODULE_3__["HeaderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_activate_account_component__WEBPACK_IMPORTED_MODULE_2__["ActivateAccountComponent"]]
        })
    ], ActivateAccountModule);
    return ActivateAccountModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-home-auth-activate-account-activate-account-module.js.map