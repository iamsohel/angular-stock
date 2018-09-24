(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-home-page-bonds-bonds-module"],{

/***/ "./src/app/home/page/bonds/bonds.component.html":
/*!******************************************************!*\
  !*** ./src/app/home/page/bonds/bonds.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"linkpage-banner\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-5 col-md-5 col-sm-6 col-8\">\n        <div class=\"linkepage-title full100\">\n          <h4>Bonds</h4>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- US Market section -->\n<section class=\"linkpage-content relative pb-5\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <!-- market table area -->\n      <div class=\"col-xl-12 col-lg-12\">\n        <h3 class=\"content-title mb-5 mt-5 text-center\">\n          Bonds\n        </h3>\n        <div class=\"linkpage-table\">\n          <table class=\"table table-responsive \n          table-striped\">\n            <thead class=\"greenbg\">\n              <tr>\n                <th>Issuer Name 1</th>\n                <th>ISIN Code</th>\n                <th>Bond Yield</th>\n                <th>Currency</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>AB Inbev</td>\n                <td>BE6276040431</td>\n                <td>5345</td>\n                <td>EUR</td>\n              </tr>\n              <tr>\n                <td>AB Inbev</td>\n                <td>BE6276040431</td>\n                <td>5345</td>\n                <td>EUR</td>\n              </tr>\n              <tr>\n                <td>AB Inbev</td>\n                <td>BE6276040431</td>\n                <td>5345</td>\n                <td>EUR</td>\n              </tr>\n              <tr>\n                <td>AB Inbev</td>\n                <td>BE6276040431</td>\n                <td>5345</td>\n                <td>EUR</td>\n              </tr>\n              <tr>\n                <td>AB Inbev</td>\n                <td>BE6276040431</td>\n                <td>5345</td>\n                <td>EUR</td>\n              </tr>\n              <tr>\n                <td>AB Inbev</td>\n                <td>BE6276040431</td>\n                <td>5345</td>\n                <td>EUR</td>\n              </tr>\n              <tr>\n                <td>AB Inbev</td>\n                <td>BE6276040431</td>\n                <td>5345</td>\n                <td>EUR</td>\n              </tr>\n              <tr>\n                <td>AB Inbev</td>\n                <td>BE6276040431</td>\n                <td>5345</td>\n                <td>EUR</td>\n              </tr>\n              <tr>\n                <td>AB Inbev</td>\n                <td>BE6276040431</td>\n                <td>5345</td>\n                <td>EUR</td>\n              </tr>\n              <tr>\n                <td>AB Inbev</td>\n                <td>BE6276040431</td>\n                <td>5345</td>\n                <td>EUR</td>\n              </tr>\n              <tr>\n                <td>AB Inbev</td>\n                <td>BE6276040431</td>\n                <td>5345</td>\n                <td>EUR</td>\n              </tr>\n              <tr>\n                <td>AB Inbev</td>\n                <td>BE6276040431</td>\n                <td>5345</td>\n                <td>EUR</td>\n              </tr>\n              <tr>\n                <td>AB Inbev</td>\n                <td>BE6276040431</td>\n                <td>5345</td>\n                <td>EUR</td>\n              </tr>\n              <tr>\n                <td>AB Inbev</td>\n                <td>BE6276040431</td>\n                <td>5345</td>\n                <td>EUR</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/home/page/bonds/bonds.component.scss":
/*!******************************************************!*\
  !*** ./src/app/home/page/bonds/bonds.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/page/bonds/bonds.component.ts":
/*!****************************************************!*\
  !*** ./src/app/home/page/bonds/bonds.component.ts ***!
  \****************************************************/
/*! exports provided: BondsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BondsComponent", function() { return BondsComponent; });
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

var BondsComponent = /** @class */ (function () {
    function BondsComponent() {
    }
    BondsComponent.prototype.ngOnInit = function () {
    };
    BondsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bonds',
            template: __webpack_require__(/*! ./bonds.component.html */ "./src/app/home/page/bonds/bonds.component.html"),
            styles: [__webpack_require__(/*! ./bonds.component.scss */ "./src/app/home/page/bonds/bonds.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BondsComponent);
    return BondsComponent;
}());



/***/ }),

/***/ "./src/app/home/page/bonds/bonds.module.ts":
/*!*************************************************!*\
  !*** ./src/app/home/page/bonds/bonds.module.ts ***!
  \*************************************************/
/*! exports provided: BondsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BondsModule", function() { return BondsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _bonds_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bonds.component */ "./src/app/home/page/bonds/bonds.component.ts");
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
        component: _bonds_component__WEBPACK_IMPORTED_MODULE_2__["BondsComponent"],
    }
];
var BondsModule = /** @class */ (function () {
    function BondsModule() {
    }
    BondsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _header_header_module__WEBPACK_IMPORTED_MODULE_3__["HeaderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_bonds_component__WEBPACK_IMPORTED_MODULE_2__["BondsComponent"]]
        })
    ], BondsModule);
    return BondsModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-home-page-bonds-bonds-module.js.map