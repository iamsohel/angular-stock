(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-home-page-profile-profile-module"],{

/***/ "./src/app/home/page/profile/profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/home/page/profile/profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"linkpage-banner\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-5 col-md-5 col-sm-6 col-8\">\n        <div class=\"linkepage-title full100\">\n          <h4>Profile</h4>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- US Market section -->\n<section class=\"linkpage-content relative pb-5 pt-5\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <!-- profile left side -->\n      <div class=\"col-lg-3 col-md-4\">\n        <div class=\"profile-box w-100 shadow\">\n          <div class=\"profile-pic mt-4\">\n            <img class=\"mx-auto d-block rounded-circle\" src=\"./assets/img/bg3.jpeg\" />\n          </div>\n          <div class=\"profile-ld\">\n            <h4 class=\"text-center mt-3 mb-3\">Leaping logic</h4>\n\n            <ul class=\"profile-l-menu\">\n              <li>\n                <a routerLink=\"/profile/news-feed\">\n                  <i class=\"fa fa-newspaper\"></i> News Feed</a>\n              </li>\n              <li>\n                <a routerLink=\"/profile/private-post\">\n                  <i class=\"fa fa-comments\"></i> Private Post</a>\n              </li>\n              <li>\n                <a href=\"simulation.html\">\n                  <i class=\"fa  fa-cog\"></i> Simulation</a>\n              </li>\n              <li>\n                <a href=\"settings.html\">\n                  <i class=\"fa fa-cogs\"></i> Settings</a>\n              </li>\n              <li>\n                <a href=\"alerts.html\">\n                  <i class=\"fa fa-bell\"></i> Alerts</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"profile-watchlist w-100 shadow text-center mt-4 mb-4\">\n          <h5 class=\"pb-2\">Watch list</h5>\n          <div class=\"sector-linebar full100 mb-3\"></div>\n          <img src=\"./assets/img/icon-watchlist.png\" alt=\"watch img\" />\n          <h4>Your Watchlist</h4>\n          <p>\n            Add to your watchlist for easy access to your favorite stocks\n          </p>\n        </div>\n      </div>\n\n      <div class=\"col-lg-8 col-md-12 mb-4\">\n        <router-outlet></router-outlet>\n      </div>\n      \n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/home/page/profile/profile.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/home/page/profile/profile.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/page/profile/profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/home/page/profile/profile.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
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

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/home/page/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/home/page/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/home/page/profile/profile.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/page/profile/profile.module.ts ***!
  \*****************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component */ "./src/app/home/page/profile/profile.component.ts");
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
        component: _profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"],
        children: [
            {
                path: '',
                loadChildren: '../../../../app/home/page/profile/news-feed/news-feed.module#NewsFeedModule'
            },
            // {
            //   path: 'private-post',
            //   loadChildren: '../../../../app/home/page/profile/private-post/private-post.module#PrivatePostModule'
            // },
            {
                path: 'news-feed',
                loadChildren: '../../../../app/home/page/profile/news-feed/news-feed.module#NewsFeedModule'
            },
        ]
    }
];
var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"]
            ],
            declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"]]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-home-page-profile-profile-module.js.map