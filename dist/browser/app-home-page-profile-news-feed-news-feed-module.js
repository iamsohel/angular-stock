(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-home-page-profile-news-feed-news-feed-module"],{

/***/ "./src/app/home/page/profile/news-feed/news-feed.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/home/page/profile/news-feed/news-feed.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!-- profile right side -->\n    <div class=\"row\">\n    <div class=\" col-md-8 mb-4\">\n      <div class=\"p-share-idea w-100 white\">\n        <form>\n          <textarea class=\"form-control\" placeholder=\"Share an idea (use ! before ticker: e.g !SYMBL)\"></textarea>\n          <div class=\"text-right\">\n            <a class=\"button lbtn-small mt-3 pull-right\"><i class=\"fa fa-share\"></i> Share</a>\n            <a class=\"button lbtn-small mt-3\"><i class=\"fa fa-paperclip\"></i>Attach</a>\n          </div>\n        </form>\n      </div>\n      <div class=\"p-communicatin-area w-100 white mt-4\">\n        <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n          <li class=\"nav-item\">\n              <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#p-chat\">Chat</a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\">Upload</a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" data-toggle=\"tab\" href=\"#contact\">Penny's Messages</a>\n          </li>\n        </ul>\n        <div class=\"tab-content\" id=\"myTabContent\">\n          <div class=\"tab-pane fade show active\" id=\"p-chat\">Chat</div>\n          <div class=\"tab-pane fade\" id=\"profile\">Upload</div>\n          <div class=\"tab-pane fade\" id=\"contact\">Penny's Messages</div>\n        </div>\n      </div>\n    </div>\n    <!-- profile right side -->\n    <div class=\" col-md-4\">\n      <div class=\"follower-following white shadow w-100\">\n        <ul class=\"nav nav-pills mb-3\" id=\"pills-tab\" role=\"tablist\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" data-toggle=\"pill\" href=\"#p-followers\">Followers</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" data-toggle=\"pill\" href=\"#p-following\">Following</a>\n            </li>\n        </ul>\n        <div class=\"tab-content\" id=\"pills-tabContent\">\n            <div class=\"tab-pane fade show active\" id=\"p-followers\">Followers</div>\n            <div class=\"tab-pane fade\" id=\"p-following\">Following</div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/home/page/profile/news-feed/news-feed.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/home/page/profile/news-feed/news-feed.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/page/profile/news-feed/news-feed.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/home/page/profile/news-feed/news-feed.component.ts ***!
  \********************************************************************/
/*! exports provided: NewsFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsFeedComponent", function() { return NewsFeedComponent; });
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

var NewsFeedComponent = /** @class */ (function () {
    function NewsFeedComponent() {
    }
    NewsFeedComponent.prototype.ngOnInit = function () {
    };
    NewsFeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-feed',
            template: __webpack_require__(/*! ./news-feed.component.html */ "./src/app/home/page/profile/news-feed/news-feed.component.html"),
            styles: [__webpack_require__(/*! ./news-feed.component.scss */ "./src/app/home/page/profile/news-feed/news-feed.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsFeedComponent);
    return NewsFeedComponent;
}());



/***/ }),

/***/ "./src/app/home/page/profile/news-feed/news-feed.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/page/profile/news-feed/news-feed.module.ts ***!
  \*****************************************************************/
/*! exports provided: NewsFeedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsFeedModule", function() { return NewsFeedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _news_feed_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news-feed.component */ "./src/app/home/page/profile/news-feed/news-feed.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _news_feed_component__WEBPACK_IMPORTED_MODULE_2__["NewsFeedComponent"],
    }
];
var NewsFeedModule = /** @class */ (function () {
    function NewsFeedModule() {
    }
    NewsFeedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            ],
            declarations: [_news_feed_component__WEBPACK_IMPORTED_MODULE_2__["NewsFeedComponent"]]
        })
    ], NewsFeedModule);
    return NewsFeedModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-home-page-profile-news-feed-news-feed-module.js.map