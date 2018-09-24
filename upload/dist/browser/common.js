(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/home/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header relative\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <!--logo area -->\n      <div class=\"col-md-3 linkpagelogo-area\">\n        <a (click)=\"navigate('')\">\n          <img src=\"./assets/img/logo.svg\" alt=\"logo img\" />\n        </a>\n      </div>\n      <div class=\"col-md-3 logo-fixed\">\n        <a (click)=\"navigate('')\">\n          <img src=\"./assets/img/logo-white.png\" alt=\"logo img\" />\n        </a>\n      </div>\n      <!-- menu area -->\n      <div class=\"col-md-9 col-sm-12\">\n        <div class=\"menu-area linkpage-manu-area\">\n          <a class=\"header-search m-search\">\n            <i class=\"fa fa-search\"></i>\n          </a>\n          <a class=\"mobile-toggle\">\n            <i class=\"fa fa-bars\"></i>\n          </a>\n          <nav class=\"menu page-menu pull-right full100\">\n            <ul>\n              <li><a (click)=\"navigate('forex')\" >Forex</a>|</li>\n              <li><a (click)=\"navigate('bonds')\" >Bonds</a>|</li>\n              <li><a (click)=\"navigate('forex')\" >US Market</a>|</li>\n              <li><a (click)=\"navigate('jamaica-market')\" >Jam Market</a>|</li>\n              <li>\n                <a href=\"#\">Explore <span class=\"arrow-down\"></span>\n                </a>|\n                <ul>\n                  <li><a (click)=\"navigate('login')\">Initial Public Offering</a></li>\n                  <li><a  (click)=\"navigate('login')\">Research</a></li>\n                </ul>\n              </li>\n              <li class=\"h-search\">\n                <a class=\"header-search\">\n                  <i class=\"fa fa-search\"></i>\n                </a>\n              </li>\n            </ul>\n          </nav>\n          <!-- header search bar -->\n            <div class=\"search-togglebody pg-search\">\n              <div class=\"traingle-user\"></div>\n              <div class=\"hs-body\">\n                <form class=\"search\" method=\"post\" action=\"index.html\" >\n                   <input type=\"search\" name=\"q\" placeholder=\"Search here....\" />\n                   <ul class=\"results\">\n                     <li>\n                       <a href=\"#\">\n                         <div class=\"search-left\">\n                           <span>alto</span>\n                         </div>\n                         <div class=\"search-content\">\n                           <h4> Ames National Corporation </h4>\n                           <span> Nasdaq </span>\n                         </div>\n                       </a>\n                     </li>\n                     <li>\n                       <a href=\"#\">\n                         <div class=\"search-left\">\n                           <span>alto</span>\n                         </div>\n                         <div class=\"search-content\">\n                           <h4> Ames National Corporation </h4>\n                           <span> Nasdaq </span>\n                         </div>\n                       </a>\n                     </li>\n                   </ul>\n                   <button class=\"search-btn\" type=\"button\"><i class=\"fa fa-search\"></i></button>\n                 </form>\n              </div>\n            </div>\n          <!-- menu bottom linebar -->\t\n          <div class=\"menulinebar full100\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>"

/***/ }),

/***/ "./src/app/home/header/header.component.scss":
/*!***************************************************!*\
  !*** ./src/app/home/header/header.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/home/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.navigate = function (e) {
        this.router.navigate([e]);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/home/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/home/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/header/header.module.ts":
/*!**********************************************!*\
  !*** ./src/app/home/header/header.module.ts ***!
  \**********************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component */ "./src/app/home/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
            exports: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map