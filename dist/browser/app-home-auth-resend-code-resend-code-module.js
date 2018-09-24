(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-home-auth-resend-code-resend-code-module"],{

/***/ "./src/app/home/auth/resend-code/resend-code.component.html":
/*!******************************************************************!*\
  !*** ./src/app/home/auth/resend-code/resend-code.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\t<section class=\"linkpage-banner\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-5 col-md-5 col-sm-6 col-8\">\n\t\t\t\t\t<div class=\"linkepage-title full100\">\n\t\t\t\t\t\t<h4>Resend code</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<!-- US Market section -->\n\t<section class=\"linkpage-content relative pb-5 pt-5\">\n\t\t<div class=\"container-fluid\">\n\t\t\t<div class=\"row align-items-center justify-content-center\">\n\t\t\t\t<div class=\"loginsiginup-box\">\n\t\t\t\t\t<div class=\"login-area full100\">\n\t\t\t\t\t\t<div class=\"login-title full100\">\n\t\t\t\t\t\t\t<div class=\"login-title-inner full100\">\n\t\t\t\t\t\t\t\t<h3 class=\"text-center\">Resend code</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"full100\">\n\t\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t  \t<div class=\"form-group row mt-4\">\n\t\t\t\t\t\t\t    \t<label class=\"col-sm-3 col-form-label\">\n\t\t\t\t\t\t\t    \t\tYour Email\n\t\t\t\t\t\t\t    \t</label>\n\t\t\t\t\t\t\t\t    <div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t      <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\n\t\t\t\t\t\t\t\t    </div>\t\n\t\t\t\t\t\t\t  \t</div>\n\t\t\t\t\t\t\t  \t<div class=\"form-group row mt-4\">\n\t\t\t\t\t\t\t\t    <div class=\"col-sm-4 offset-sm-3\">\n\t\t\t\t\t\t\t\t      <a routerLink=\"/reset-password\" class=\"button signin-btn lbtn-lgradius\">Submit</a>\n\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t    <div class=\"col-sm-5 newaccount mt-3\">\n\t\t\t\t\t\t\t\t    \t<a routerLink=\"/register\">\n\t\t\t\t\t\t\t\t    \t\tBack \n\t\t\t\t\t\t\t\t    \t\t<i class=\"fa fa-long-arrow-alt-left\"></i>\n\t\t\t\t\t\t\t\t    \t</a>\n\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t  \t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n"

/***/ }),

/***/ "./src/app/home/auth/resend-code/resend-code.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/home/auth/resend-code/resend-code.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/auth/resend-code/resend-code.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/home/auth/resend-code/resend-code.component.ts ***!
  \****************************************************************/
/*! exports provided: ResendCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResendCodeComponent", function() { return ResendCodeComponent; });
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

var ResendCodeComponent = /** @class */ (function () {
    function ResendCodeComponent() {
    }
    ResendCodeComponent.prototype.ngOnInit = function () {
    };
    ResendCodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resend-code',
            template: __webpack_require__(/*! ./resend-code.component.html */ "./src/app/home/auth/resend-code/resend-code.component.html"),
            styles: [__webpack_require__(/*! ./resend-code.component.scss */ "./src/app/home/auth/resend-code/resend-code.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResendCodeComponent);
    return ResendCodeComponent;
}());



/***/ }),

/***/ "./src/app/home/auth/resend-code/resend-code.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/auth/resend-code/resend-code.module.ts ***!
  \*************************************************************/
/*! exports provided: ResendCodeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResendCodeModule", function() { return ResendCodeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _resend_code_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resend-code.component */ "./src/app/home/auth/resend-code/resend-code.component.ts");
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
        component: _resend_code_component__WEBPACK_IMPORTED_MODULE_2__["ResendCodeComponent"],
    }
];
var ResendCodeModule = /** @class */ (function () {
    function ResendCodeModule() {
    }
    ResendCodeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _header_header_module__WEBPACK_IMPORTED_MODULE_3__["HeaderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_resend_code_component__WEBPACK_IMPORTED_MODULE_2__["ResendCodeComponent"]]
        })
    ], ResendCodeModule);
    return ResendCodeModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-home-auth-resend-code-resend-code-module.js.map