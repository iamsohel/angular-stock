(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-home-auth-login-login-module"],{

/***/ "./src/app/home/auth/login/login.component.html":
/*!******************************************************!*\
  !*** ./src/app/home/auth/login/login.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"linkpage-banner\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-lg-5 col-md-5 col-sm-6 col-8\">\n              <div class=\"linkepage-title full100\">\n                  <h4>Log in</h4>\n              </div>\n          </div>\n      </div>\n  </div>\n</section>\n\n<!-- US Market section -->\n<section class=\"linkpage-content relative pb-5 pt-5\">\n  <div class=\"container-fluid\">\n      <div class=\"row align-items-center justify-content-center\">\n          <div class=\"loginsiginup-box\">\n              <div class=\"login-area full100\">\n                  <div class=\"login-title full100\">\n                      <div class=\"login-title-inner full100\">\n                          <h3 class=\"text-center\">Log in</h3>\n                      </div>\n                  </div>\n                  <div class=\"full100\">\n                      <form>\n                            <div class=\"form-group row mt-4\">\n                              <label class=\"col-sm-3 col-form-label\">\n                                  User Name\n                              </label>\n                              <div class=\"col-sm-9\">\n                                <input type=\"email\" class=\"form-control\" placeholder=\"Username or Email\">\n                              </div>\t\n                            </div>\n                            <div class=\"form-group row mt-4\">\n                              <label class=\"col-sm-3 col-form-label\">\n                                  Password\n                              </label>\n                              <div class=\"col-sm-9\">\n                                <input type=\"Password\" class=\"form-control\" placeholder=\"Password\">\n                              </div>\t\n                            </div>\n                            <div class=\"form-group row\">\n                              <div class=\"col-sm-5 offset-sm-3\">\n                                <div class=\"form-check\">\n                                  <input class=\"form-check-input\" type=\"checkbox\" id=\"gridCheck1\">\n                                  <label class=\"form-check-label\" for=\"gridCheck1\">\n                                    Keep me logged in\n                                  </label>\n                                </div>\n                              </div>\n                              <div class=\"col-sm-4 forgat\">\n                                  <a routerLink=\"/forget-password\">Forgot Password?</a>  \n                              </div>\n                           </div>\n                            <div class=\"form-group row mt-4\">\n                              <div class=\"col-sm-4 offset-sm-3\">\n                                <button type=\"submit\" class=\"button signin-btn lbtn-lgradius\">Sign in</button>\n                              </div>\n                              <div class=\"col-sm-5\">\n                                  <ul class=\"social-login\">\n                                      <li>\n                                          <span>Log in</span>\n                                      </li>\n                                      <li>\n                                          <a class=\"facebook\" href=\"#\">\n                                              <i class=\"fab fa-facebook-f\"></i>\n                                          </a>\n                                      </li>\n                                      <li>\n                                          <a class=\"google\" href=\"#\">\n                                              <i class=\"fab fa-google-plus-g\"></i>\n                                          </a>\n                                      </li>\n                                  </ul>\n                              </div>\n                            </div>\n                            <div class=\"form-group row mt-4\">\n                              <div class=\"col-sm-9 offset-sm-3 newaccount\">\n                                  <a routerLink=\"/register\">\n                                      Create a New Account \n                                      <i class=\"fa fa-long-arrow-alt-right\"></i>\n                                     \n                                  </a>\n                              </div>\n                            </div>\n                      </form>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/home/auth/login/login.component.scss":
/*!******************************************************!*\
  !*** ./src/app/home/auth/login/login.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/auth/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/home/auth/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
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

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/home/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/home/auth/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/home/auth/login/login.module.ts":
/*!*************************************************!*\
  !*** ./src/app/home/auth/login/login.module.ts ***!
  \*************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/home/auth/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../header/header.module */ "./src/app/home/header/header.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
    }
];
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"]
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-home-auth-login-login-module.js.map