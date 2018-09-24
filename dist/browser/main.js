(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../../../../app/home/page/profile/news-feed/news-feed.module": [
		"./src/app/home/page/profile/news-feed/news-feed.module.ts",
		"app-home-page-profile-news-feed-news-feed-module"
	],
	"../../app/home/auth/activate-account/activate-account.module": [
		"./src/app/home/auth/activate-account/activate-account.module.ts",
		"common",
		"app-home-auth-activate-account-activate-account-module"
	],
	"../../app/home/auth/forget-password/forget-password.module": [
		"./src/app/home/auth/forget-password/forget-password.module.ts",
		"common",
		"app-home-auth-forget-password-forget-password-module"
	],
	"../../app/home/auth/login/login.module": [
		"./src/app/home/auth/login/login.module.ts",
		"common",
		"app-home-auth-login-login-module"
	],
	"../../app/home/auth/registration/registration.module": [
		"./src/app/home/auth/registration/registration.module.ts",
		"common",
		"app-home-auth-registration-registration-module"
	],
	"../../app/home/auth/resend-code/resend-code.module": [
		"./src/app/home/auth/resend-code/resend-code.module.ts",
		"common",
		"app-home-auth-resend-code-resend-code-module"
	],
	"../../app/home/auth/reset-password/reset-password.module": [
		"./src/app/home/auth/reset-password/reset-password.module.ts",
		"common",
		"app-home-auth-reset-password-reset-password-module"
	],
	"../../app/home/home-page/home-page.module": [
		"./src/app/home/home-page/home-page.module.ts",
		"app-home-home-page-home-page-module"
	],
	"../../app/home/page/bonds/bonds.module": [
		"./src/app/home/page/bonds/bonds.module.ts",
		"common",
		"app-home-page-bonds-bonds-module"
	],
	"../../app/home/page/forex/forex.module": [
		"./src/app/home/page/forex/forex.module.ts",
		"common",
		"app-home-page-forex-forex-module"
	],
	"../../app/home/page/jamaica-market/jamaica-market.module": [
		"./src/app/home/page/jamaica-market/jamaica-market.module.ts",
		"common",
		"app-home-page-jamaica-market-jamaica-market-module"
	],
	"../../app/home/page/profile/profile.module": [
		"./src/app/home/page/profile/profile.module.ts",
		"common",
		"app-home-page-profile-profile-module"
	],
	"../app/home/home.module": [
		"./src/app/home/home.module.ts",
		"app-home-home-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: '',
        loadChildren: '../app/home/home.module#HomeModule',
    },
    { path: '**', redirectTo: '/' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_http_with_injector_http_with_injector_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/http-with-injector/http-with-injector.module */ "./src/app/modules/http-with-injector/http-with-injector.module.ts");
/* harmony import */ var _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/auth/auth.module */ "./src/app/modules/auth/auth.module.ts");
/* harmony import */ var _globals_script_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./globals/script-loader.service */ "./src/app/globals/script-loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _modules_http_with_injector_http_with_injector_module__WEBPACK_IMPORTED_MODULE_4__["HttpWithInjectorModule"].forRoot(),
                _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_5__["AuthModule"].forRoot(),
            ],
            providers: [_globals_script_loader_service__WEBPACK_IMPORTED_MODULE_6__["ScriptLoaderService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/globals/script-loader.service.ts":
/*!**************************************************!*\
  !*** ./src/app/globals/script-loader.service.ts ***!
  \**************************************************/
/*! exports provided: ScriptLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptLoaderService", function() { return ScriptLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ScriptLoaderService = /** @class */ (function () {
    function ScriptLoaderService() {
        this._scripts = [];
    }
    /**
     * @deprecated
     * @param tag
     * @param {string} scripts
     * @returns {Promise<any[]>}
     */
    ScriptLoaderService.prototype.load = function (tag) {
        var _this = this;
        var scripts = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            scripts[_i - 1] = arguments[_i];
        }
        scripts.forEach(function (src) {
            if (!_this._scripts[src]) {
                _this._scripts[src] = { src: src, loaded: false };
            }
        });
        var promises = [];
        scripts.forEach(function (src) { return promises.push(_this.loadScript(tag, src)); });
        return Promise.all(promises);
    };
    /**
     * Lazy load list of scripts
     * @param tag
     * @param scripts
     * @param loadOnce
     * @returns {Promise<any[]>}
     */
    ScriptLoaderService.prototype.loadScripts = function (tag, scripts, loadOnce) {
        var _this = this;
        loadOnce = loadOnce || false;
        scripts.forEach(function (script) {
            if (!_this._scripts[script]) {
                _this._scripts[script] = { src: script, loaded: false };
            }
        });
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(tag, script, loadOnce)); });
        return Promise.all(promises);
    };
    /**
     * Lazy load a single script
     * @param tag
     * @param {string} src
     * @param loadOnce
     * @returns {Promise<any>}
     */
    ScriptLoaderService.prototype.loadScript = function (tag, src, loadOnce) {
        var _this = this;
        loadOnce = loadOnce || false;
        if (!this._scripts[src]) {
            this._scripts[src] = { src: src, loaded: false };
        }
        return new Promise(function (resolve, reject) {
            // resolve if already loaded
            if (_this._scripts[src].loaded && loadOnce) {
                resolve({ src: src, loaded: true });
            }
            else {
                // load script tag
                var scriptTag = jquery__WEBPACK_IMPORTED_MODULE_1__('<script/>').
                    attr('type', 'text/javascript').
                    attr('id', 'home').
                    attr('src', _this._scripts[src].src);
                jquery__WEBPACK_IMPORTED_MODULE_1__(tag).append(scriptTag);
                _this._scripts[src] = { src: src, loaded: true };
                resolve({ src: src, loaded: true });
            }
        });
    };
    ScriptLoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ScriptLoaderService);
    return ScriptLoaderService;
}());



/***/ }),

/***/ "./src/app/modules/auth/_gaurds/admin.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/auth/_gaurds/admin.guard.ts ***!
  \*****************************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/modules/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = /** @class */ (function () {
    function AdminGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        if (!this.auth.is_admin) {
            this.router.navigate(['/dashboard']).catch(function (err) {
                console.log(err);
            });
        }
        return true;
    };
    AdminGuard.prototype.canLoad = function (route) {
        console.log(route);
        if (!this.auth.is_admin) {
            this.router.navigate(['/dashboard']).catch(function (err) {
                console.log(err);
            });
        }
        return true;
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/modules/auth/_gaurds/employee.guard.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/auth/_gaurds/employee.guard.ts ***!
  \********************************************************/
/*! exports provided: EmployeeGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeGuard", function() { return EmployeeGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/modules/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeGuard = /** @class */ (function () {
    function EmployeeGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    EmployeeGuard.prototype.canActivate = function (next, state) {
        if (!this.auth.is_employee) {
            this.router.navigate(['/dashboard']).catch(function (err) {
                console.log(err);
            });
        }
        return true;
    };
    EmployeeGuard.prototype.canLoad = function (route) {
        if (!this.auth.is_employee) {
            this.router.navigate(['/dashboard']).catch(function (err) {
                console.log(err);
            });
        }
        return true;
    };
    EmployeeGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EmployeeGuard);
    return EmployeeGuard;
}());



/***/ }),

/***/ "./src/app/modules/auth/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/modules/auth/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/modules/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return true;
    };
    AuthGuard.prototype.canLoad = function (route) {
        var path = route.path;
        if (path === 'auth' && this.auth.authenticated) {
            this.router.navigate(['dashboard']).catch(function (err) {
                console.log(err);
            });
            return false;
        }
        else if (path === 'dashboard' && !this.auth.authenticated) {
            this.router.navigate(['auth']).catch(function (err) {
            });
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/modules/auth/auth.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/modules/auth/auth.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.guard */ "./src/app/modules/auth/auth.guard.ts");
/* harmony import */ var _gaurds_admin_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_gaurds/admin.guard */ "./src/app/modules/auth/_gaurds/admin.guard.ts");
/* harmony import */ var _gaurds_employee_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_gaurds/employee.guard */ "./src/app/modules/auth/_gaurds/employee.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AuthModule = /** @class */ (function () {
    function AuthModule(parentModule) {
        if (parentModule) {
            throw new Error('AlertModule is already loaded. Import it in the AppModule only');
        }
    }
    AuthModule_1 = AuthModule;
    AuthModule.forRoot = function (config) {
        return {
            ngModule: AuthModule_1,
            providers: [
                { provide: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthConfig"], useValue: config }
            ]
        };
    };
    __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthConfig"]]),
        __metadata("design:returntype", Object)
    ], AuthModule, "forRoot", null);
    AuthModule = AuthModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _gaurds_admin_guard__WEBPACK_IMPORTED_MODULE_4__["AdminGuard"], _gaurds_employee_guard__WEBPACK_IMPORTED_MODULE_5__["EmployeeGuard"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [AuthModule])
    ], AuthModule);
    return AuthModule;
    var AuthModule_1;
}());



/***/ }),

/***/ "./src/app/modules/auth/auth.service.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/auth/auth.service.ts ***!
  \**********************************************/
/*! exports provided: AuthConfig, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthConfig", function() { return AuthConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _http_with_injector_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-with-injector/http.service */ "./src/app/modules/http-with-injector/http.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AuthConfig = /** @class */ (function () {
    function AuthConfig() {
    }
    return AuthConfig;
}());

var AuthService = /** @class */ (function () {
    function AuthService(_cookies, router, platform_id, http, location) {
        this._cookies = _cookies;
        this.router = router;
        this.platform_id = platform_id;
        this.http = http;
        this.location = location;
        this.cookieOptions = {};
    }
    AuthService.prototype.canActivate = function (route, state) {
        if (route.data.auth) {
            var token = this.getToken();
            if (token) {
                return true;
            }
            else {
                this.navigateTo('login').then();
                return false;
            }
        }
        return true;
    };
    AuthService.prototype.checkLogin = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (observer) {
            setInterval(function () {
                if (_this.authenticated) {
                    observer.next(_this.authenticated);
                }
                else {
                    observer.next(false);
                }
            }, 1000);
        });
    };
    AuthService.prototype.getCookie = function (name) {
        var cookie;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platform_id)) {
            cookie = this._cookies.getObject(name.trim());
        }
        if (cookie) {
            return cookie;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.setCookies = function (name, value) {
        this._cookies.putObject(name.trim(), value, this.cookieOptions);
    };
    AuthService.prototype.removeCookie = function (name) {
        this._cookies.remove(name, this.cookieOptions);
    };
    AuthService.prototype.getToken = function () {
        var current_user = this.getCookie('currentUser');
        if (current_user) {
            return current_user.token;
        }
        return false;
    };
    AuthService.prototype.navigateTo = function (name) {
        var promise = this.router.navigate([name]);
        return promise;
    };
    AuthService.prototype.roles = function () {
        var cookie = this.getCookie('currentUser');
        var roles = cookie.user_role ? cookie.user_role.split(',') : [];
        return roles;
    };
    AuthService.prototype.matchRole = function (name) {
        var roles = this.roles();
        console.log(roles);
        var role = roles.indexOf(name);
        return role >= 0;
    };
    AuthService.prototype.logout = function () {
        return this.http.get('users/logout')
            .toPromise();
    };
    AuthService.prototype.eliminateUser = function () {
        var _this = this;
        var path = this.location.path();
        this.logout().then(function () {
            _this.removeCookie('currentUser');
            _this.router.navigate(['auth', 'login'], { queryParams: { redirectTo: path } }).catch(function (err) {
            });
        }).catch(function () {
            _this.removeCookie('currentUser');
            _this.router.navigate(['auth', 'login'], { queryParams: { redirectTo: path } }).catch(function (err) {
            });
        });
    };
    AuthService.prototype.updateRemember = function (data) {
        var date = new Date(data.remember_time);
        date.setSeconds(date.getSeconds() + 1);
        data.remember_time = date;
        this.setCookies('currentUser', data);
    };
    Object.defineProperty(AuthService.prototype, "userData", {
        get: function () {
            return this.getCookie('currentUser');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            var user_data = this.getCookie('currentUser');
            if (user_data && !user_data.remember_me) {
                var remember_time = new Date(user_data.remember_time);
                var now = new Date();
                var diff = remember_time.getTime() - now.getTime();
                if (diff > 0) {
                    this.updateRemember(user_data);
                    return true;
                }
                else {
                    this.eliminateUser();
                }
            }
            else {
                return user_data && user_data.remember_me;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "is_admin", {
        get: function () {
            return this.matchRole('admin');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "is_employee", {
        get: function () {
            return this.matchRole('employee');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "is_hr", {
        get: function () {
            return this.matchRole('hr');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "is_pm", {
        get: function () {
            return this.matchRole('pm');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "user_roles", {
        get: function () {
            return this.roles();
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [ngx_cookie__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object, _http_with_injector_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/modules/http-with-injector/http-inspector.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/http-with-injector/http-inspector.service.ts ***!
  \**********************************************************************/
/*! exports provided: HttpInspectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInspectorService", function() { return HttpInspectorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var HttpInspectorService = /** @class */ (function () {
    function HttpInspectorService(_cookie, platformId) {
        this._cookie = _cookie;
        this.platformId = platformId;
    }
    HttpInspectorService.prototype.intercept = function (req, next) {
        var current_user;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            current_user = this._cookie.getObject('currentUser');
        }
        // Clone the request to add the new header.
        if (current_user) {
            var authReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + current_user.token),
            });
            // send the newly created request
            return next.handle(authReq);
        }
        else {
            // send the newly created request
            return next.handle(req);
        }
    };
    HttpInspectorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [ngx_cookie__WEBPACK_IMPORTED_MODULE_1__["CookieService"], Object])
    ], HttpInspectorService);
    return HttpInspectorService;
}());



/***/ }),

/***/ "./src/app/modules/http-with-injector/http-with-injector.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/http-with-injector/http-with-injector.module.ts ***!
  \*************************************************************************/
/*! exports provided: HttpWithInjectorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpWithInjectorModule", function() { return HttpWithInjectorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/modules/http-with-injector/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_inspector_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http-inspector.service */ "./src/app/modules/http-with-injector/http-inspector.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var HttpWithInjectorModule = /** @class */ (function () {
    function HttpWithInjectorModule(parentModule) {
        if (parentModule) {
            throw new Error('AlertModule is already loaded. Import it in the AppModule only');
        }
    }
    HttpWithInjectorModule_1 = HttpWithInjectorModule;
    HttpWithInjectorModule.forRoot = function (config) {
        return {
            ngModule: HttpWithInjectorModule_1,
            providers: [
                { provide: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpConfig"], useValue: config }
            ]
        };
    };
    __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpConfig"]]),
        __metadata("design:returntype", Object)
    ], HttpWithInjectorModule, "forRoot", null);
    HttpWithInjectorModule = HttpWithInjectorModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [],
            providers: [
                _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _http_inspector_service__WEBPACK_IMPORTED_MODULE_4__["HttpInspectorService"],
                    multi: true
                }
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [HttpWithInjectorModule])
    ], HttpWithInjectorModule);
    return HttpWithInjectorModule;
    var HttpWithInjectorModule_1;
}());



/***/ }),

/***/ "./src/app/modules/http-with-injector/http.service.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/http-with-injector/http.service.ts ***!
  \************************************************************/
/*! exports provided: HttpService, HttpConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpConfig", function() { return HttpConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.config = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
    }
    HttpService.prototype.get = function (url, option) {
        // console.log(this.config);
        return this.http.get(this.config.endPoint + url, option);
    };
    HttpService.prototype.post = function (url, body, options) {
        return this.http.post(this.config.endPoint + url, body, options);
    };
    HttpService.prototype.put = function (url, body, options) {
        return this.http.put(this.config.endPoint + url, body, options);
    };
    HttpService.prototype.patch = function (url, body, options) {
        return this.http.patch(this.config.endPoint + url, body, options);
    };
    HttpService.prototype.delete = function (url, options) {
        return this.http.delete(this.config.endPoint + url, options);
    };
    HttpService.prototype.getErrorMessage = function (err) {
        var message = '';
        console.log(err);
        if (err.error) {
            if (err.error.result) {
                message = err.error.result.error ? err.error.result.error : err.error.result.message;
            }
            else {
                message = err.message ? err.message : err.statusText;
            }
        }
        return message;
    };
    HttpService.prototype.getBlob = function (url) {
        return this.http.get(this.config.endPoint + url, { responseType: 'blob' })
            .toPromise();
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());

var HttpConfig = /** @class */ (function () {
    function HttpConfig() {
    }
    return HttpConfig;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    endPoint: '',
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/tonmoy/Work/LeapingLogic/stockgitter_angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map