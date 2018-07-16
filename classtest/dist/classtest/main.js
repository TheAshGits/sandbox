(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _shared_guards_is_logged_in_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/guards/is-logged-in.guard */ "./src/app/shared/guards/is-logged-in.guard.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        children: [],
        component: _todo_todo_component__WEBPACK_IMPORTED_MODULE_4__["TodoComponent"],
        canActivate: [_shared_guards_is_logged_in_guard__WEBPACK_IMPORTED_MODULE_5__["IsLoggedInGuard"]]
    },
    { path: 'login', children: [], component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"] },
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

module.exports = "<app-header></app-header>\n<div class=\"jumbotron\">\n    <div class=\"container\">\n        <h1>{{title}}</h1>\n    </div>\n</div>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>"

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
        this.title = 'Our Awesome Todo App';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _shared_services_todo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/services/todo.service */ "./src/app/shared/services/todo.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _shared_guards_is_logged_in_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/guards/is-logged-in.guard */ "./src/app/shared/guards/is-logged-in.guard.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_13__["library"].add(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faTrashAlt"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faCheckSquare"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faSquare"]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
                _todo_todo_component__WEBPACK_IMPORTED_MODULE_9__["TodoComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_16__["NotFoundComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ngx_cookie__WEBPACK_IMPORTED_MODULE_19__["CookieModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"].forRoot(),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"],
            ],
            providers: [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _shared_services_todo_service__WEBPACK_IMPORTED_MODULE_10__["TodoService"], _shared_guards_is_logged_in_guard__WEBPACK_IMPORTED_MODULE_15__["IsLoggedInGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Login</h1>\n<hr>\n<div>\n    <form autocomplete=\"off\" novalidate #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm.value)\">\n        <div class=\"form-group\">\n            <label for=\"email\">Email:</label>\n            <input name=\"email\" id=\"email\" type=\"text\" class=\"form-control\" placeholder=\"Email...\" (ngModel)=\"email\" required #email=\"ngModel\" email />\n            <div *ngIf=\"email.errors && (email.dirty || email.touched)\" class=\"alert alert-danger\">\n                <div [hidden]=\"!email.errors.required\">\n                    Email is required\n                </div>\n                <div [hidden]=\"email.errors.required || !email.errors.email\">\n                    Must be an email address\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"password\">Password:</label>\n            <input name=\"password\" id=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Password...\" (ngModel)=\"password\" required #password=\"ngModel\" />\n            <div *ngIf=\"password.errors && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n                <div [hidden]=\"!password.errors.required\">\n                    Password is required\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"loginForm.invalid\">Login</button>\n            <button type=\"button\" class=\"btn btn-default\">Cancel</button>\n            <a routerLink=\"/signup\" class=\"btn btn-link\">create account</a>\n        </div>\n\n        <div *ngIf=\"invalidLogin\" class=\"alert alert-danger\">\n            Invalid Login\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.invalidLogin = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (formValues) {
        var _this = this;
        this.invalidLogin = false;
        this.authService.login(formValues.email, formValues.password)
            .subscribe(function (result) {
            if (!result) {
                console.log('login.component user not found');
                _this.invalidLogin = true;
            }
            else {
                console.log('login.component logged in. redirecting to home page');
                _this.invalidLogin = false;
                _this.router.navigate(['/']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.scss":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
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

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/classes/field-sorter.ts":
/*!************************************************!*\
  !*** ./src/app/shared/classes/field-sorter.ts ***!
  \************************************************/
/*! exports provided: FieldSorter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldSorter", function() { return FieldSorter; });
var FieldSorter = /** @class */ (function () {
    function FieldSorter() {
    }
    // made static in order to not have to new up the class to use
    FieldSorter.sort = function (fieldNames, ignoreCase) {
        return function (item1, item2) { return fieldNames.map(function (field) {
            // A-Z sorting
            var direction = 1;
            // if field starts with - then Z-A sorting
            // strip off the - sign from field name
            if (field.substring(0, 1) === '-') {
                direction = -1;
                field = field.substring(1);
            }
            // capture values so as not to change the original array field value
            // important when doing case insensitive searches else items would display in lowercase
            var item1Value = item1[field], item2Value = item2[field];
            // if ignoring case and field value is a type of string then call toLocaleLowerCase on both fields.
            // Used toLocaleLowerCase to accord for culture based sorting
            if (ignoreCase === true) {
                if (typeof item1Value === 'string')
                    item1Value = item1Value.toLocaleLowerCase();
                if (typeof item2Value === 'string')
                    item2Value = item2Value.toLocaleLowerCase();
            }
            // item1 is higher = 1, lower = -1, equal = 0
            return item1Value > item2Value ? direction : item1Value < item2Value ? -(direction) : 0;
        }).reduce(function (item1SortValue, item2SortValue) {
            // values will be 1 or 0 based on the map function output.
            // if item1SortValue is 1 and item2SortValue is 0 then item1 goes 1st
            // if item1SortValue is 0 and item2SortValue is 1 then item2 goes 1st
            // if both are equal then item2 will go 1st
            return item1SortValue ? item1SortValue : item2SortValue;
        }, 0); };
    };
    return FieldSorter;
}());



/***/ }),

/***/ "./src/app/shared/classes/todo.ts":
/*!****************************************!*\
  !*** ./src/app/shared/classes/todo.ts ***!
  \****************************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
var Todo = /** @class */ (function () {
    function Todo(item, id, completed, createdAt, updatedAt) {
        this.id = id;
        this.item = item;
        this.completed = completed ? completed : false;
        this.createdAt = createdAt ? createdAt.getTime() : new Date().getTime();
        this.updatedAt = updatedAt ? updatedAt.getTime() : new Date().getTime();
    }
    return Todo;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"float-left\">\n        &copy;Angular WS\n    </div>\n    <div class=\"float-right\">\n        env: {{ env }}\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  position: fixed;\n  height: 50px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 10px 5px;\n  border-top: 1px solid #636c72;\n  background-color: #eceeef;\n  font-size: 0.8em;\n  color: #003C71; }\n  footer div {\n    margin-left: 25px;\n    margin-right: 25px; }\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].environmentName;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/guards/is-logged-in.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/guards/is-logged-in.guard.ts ***!
  \*****************************************************/
/*! exports provided: IsLoggedInGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsLoggedInGuard", function() { return IsLoggedInGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IsLoggedInGuard = /** @class */ (function () {
    function IsLoggedInGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    IsLoggedInGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        var isLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.authService.isAuthenticated().subscribe(function (res) {
                if (res) {
                    observer.next(true);
                    observer.complete();
                }
                else {
                    _this.router.navigate(['/login']);
                    observer.next(false);
                    observer.complete();
                }
            }, function (error) {
                _this.router.navigate(['/login']);
                observer.next(false);
                observer.complete();
            });
        });
        return isLoggedIn;
    };
    IsLoggedInGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], IsLoggedInGuard);
    return IsLoggedInGuard;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <nav class=\"navbar navbar-expand-md navbar-light\">\n        <a class=\"navbar-brand\" routerLink=\"/\">\n            <img class=\"navbar-logo\" src=\"./assets/todo_logo.png\" alt=\"Logo\">\n        </a>\n\n        <button (click)=\"toggleMenu()\" class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n        <div [ngbCollapse]=\"isCollapsed\" class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item active\">\n                    <a (click)=\"toggleMenu()\" class=\"nav-link\" routerLink=\"/\">All Items</a>\n                </li>\n                <li (click)=\"toggleMenu()\" class=\"nav-item active\">\n                    <a class=\"nav-link\" routerLink=\"/unknown\">Unknown</a>\n                </li>\n                <li (click)=\"toggleMenu()\" class=\"nav-item active\">\n                    <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n                </li>\n\n                <li (click)=\"toggleMenu()\" class=\"nav-item active\">\n                    <a class=\"nav-link\" routerLink=\"/signup\">Signup</a>\n                </li>\n            </ul>\n            <ul class=\"navbar-nav navbar-light navbar-expand-md\">\n                <li class=\"nav-item nav-link\">Welcome {{ loggedInUser?.email }}</li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [hidden]=\"!loggedInUser\" (click)=\"logout()\">logout</a>\n                </li>\n            </ul>\n        </div>\n    </nav>\n</header>"

/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function HeaderComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isCollapsed = true;
        this.loggedInUser = this.authService.getUser();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.authService.logout().subscribe(function () {
            _this.router.navigate(['/login']);
        });
    };
    HeaderComponent.prototype.toggleMenu = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var requestOptions = {
    withCredentials: true,
};
var AuthService = /** @class */ (function () {
    function AuthService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + "/user";
        this.cookieKey = 'currentUser';
    }
    AuthService.prototype.getUser = function () {
        return this.cookieService.getObject(this.cookieKey);
    };
    AuthService.prototype.setUser = function (value) {
        this.cookieService.putObject(this.cookieKey, value);
    };
    AuthService.prototype.clearUser = function () {
        this.cookieService.remove(this.cookieKey);
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        console.log('auth.service login');
        var loginInfo = { email: email, password: password };
        return this.http.put(this.url + "/login", loginInfo, requestOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) {
            if (user) {
                console.log('logged in');
                _this.setUser(user);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
            }
            console.log('not logged in');
            _this.clearUser();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.log('login error', error);
            _this.clearUser();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }));
    };
    AuthService.prototype.signup = function (email, password) {
        var _this = this;
        var loginInfo = { email: email, password: password };
        return this.http.post(this.url, loginInfo, requestOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) {
            if (user) {
                _this.setUser(user);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
            }
            _this.clearUser();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.log('signup error', error);
            _this.clearUser();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }));
    };
    AuthService.prototype.isAuthenticated = function () {
        var _this = this;
        return this.http.get(this.url + "/identity", requestOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) {
            if (user) {
                console.log('logged in');
                _this.setUser(user);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
            }
            console.log('not logged in');
            _this.clearUser();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error.status !== 403) {
                console.log('isAuthenticated error', error);
            }
            console.log('not logged in', error);
            _this.clearUser();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }));
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.http.get(this.url + "/logout", requestOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            _this.clearUser();
            if (res.ok) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            _this.clearUser();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }));
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/todo.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/todo.service.ts ***!
  \*************************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _classes_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/todo */ "./src/app/shared/classes/todo.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var requestOptions = { withCredentials: true };
var TodoService = /** @class */ (function () {
    function TodoService(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "/todo";
    }
    TodoService.prototype.save = function (item) {
        return this.http.post(this.url, new _classes_todo__WEBPACK_IMPORTED_MODULE_2__["Todo"](item), requestOptions);
    };
    TodoService.prototype.getAll = function () {
        return this.http.get(this.url, requestOptions);
    };
    TodoService.prototype.updateTodo = function (todo) {
        var url = this.url + "/" + todo.id;
        return this.http.patch(url, todo, {
            withCredentials: true,
            responseType: 'text',
        });
    };
    TodoService.prototype.deleteTodo = function (todo) {
        var url = this.url + "/" + todo.id;
        return this.http.delete(url, {
            withCredentials: true,
            responseType: 'text',
        });
    };
    TodoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Sign Up</h1>\n<hr>\n<div>\n  <form #signupForm=\"ngForm\" (ngSubmit)=\"signup(signupForm.value)\" autocomplete=\"off\" novalidate>\n    <div class=\"form-group\">\n      <label for=\"userName\">Email:</label>\n      <input #email=\"ngModel\" (ngModel)=\"email\" name=\"email\" id=\"email\" required email id=\"email\" type=\"text\" class=\"form-control\"\n        placeholder=\"Email...\" />\n      <div *ngIf=\"email.errors && (email.dirty || email.touched)\" class=\"alert alert-danger\">\n        <div [hidden]=\"!email.errors.required\">\n          Email is required\n        </div>\n        <div [hidden]=\"!email.errors.email\">\n          Must be an email address\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password:</label>\n      <input #password=\"ngModel\" (ngModel)=\"password\" name=\"password\" id=\"password\" required minlength=\"6\" id=\"password\" type=\"password\"\n        class=\"form-control\" placeholder=\"Password...\" />\n      <div *ngIf=\"password.errors && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n        <div [hidden]=\"!password.errors.required\">\n          Password is required\n        </div>\n        <div [hidden]=\"!password.errors.minlength\">\n          Password must be at least 6 characters long.\n        </div>\n      </div>\n    </div>\n\n    <button type=\"submit\" [disabled]=\"signupForm.invalid\" class=\"btn btn-primary\">Sign Up</button>\n    <button type=\"button\" class=\"btn btn-default\">Cancel</button>\n    <a routerLink=\"/login\" class=\"btn btn-link\">login to existing account</a>\n\n  </form>\n  <br />\n  <div *ngIf=\"loginInvalid\" class=\"alert alert-danger\">Invalid Login Info</div>\n</div>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.loginInvalid = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signup = function (formValues) {
        var _this = this;
        this.authService.signup(formValues.email, formValues.password)
            .subscribe(function (result) {
            if (!result) {
                _this.loginInvalid = true;
            }
            else {
                _this.loginInvalid = false;
                _this.router.navigate(['/']);
            }
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo.component.html":
/*!******************************************!*\
  !*** ./src/app/todo/todo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"page-header\">\n    <h1 align=\"center\">Todo List</h1>\n     <p class=\"lead\">You've got <em>{{openItemCount}}</em> things to do</p>\n  </div>\n  <form (ngSubmit)=\"save()\" role=\"form\" [formGroup]=\"addForm\" class=\"text-center\">\n    <div class=\"form-group row\">\n      <div class=\"col-sm-10\">\n        <input type=\"text\" [ngClass]=\"{'is-invalid': formErrors.item}\" class=\"form-control form-control-lg\" formControlName=\"item\"\n          placeholder=\"Todo!\">\n      </div>\n      <div class=\"col-sm-2\">\n        <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" [disabled]=\"addForm.invalid\">Add</button>\n      </div>\n    </div>\n  </form>\n  <div *ngIf=\"formErrors.item\" class=\"alert alert-danger\">\n    {{ formErrors.item }}\n  </div>\n  <div *ngIf=\"errorMessage\" class=\"alert alert-danger\" role=\"alert\">\n    <h3>Error Saving</h3>\n    {{ errorMessage }}\n  </div>\n  <div class=\"row todo\" *ngFor=\"let todoItem of todoList\">\n    <div class=\"col-1\" (click)=\"completeTodo(todoItem)\">\n      <fa-icon [icon]=\"['far', todoItem.completed  ? 'check-square' : 'square']\"></fa-icon>\n    </div>\n    <div class=\"col-10 done-{{todoItem.completed}}\">\n      {{todoItem.item}}\n      <br />\n      <small>created: {{ todoItem.createdAt | date:'short'}}</small>\n    </div>\n    <div class=\"col-1\" (click)=\"deleteTodo(todoItem)\">\n      <fa-icon [icon]=\"['far', 'trash-alt']\"></fa-icon>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/todo/todo.component.scss":
/*!******************************************!*\
  !*** ./src/app/todo/todo.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.todo {\n  width: 100%;\n  padding-bottom: .2em;\n  padding-top: .2em;\n  border-bottom: 1px solid #636c72;\n  font-size: 1.4em; }\n  div.todo small {\n    font-size: .7em;\n    color: #636c72; }\n  div.todo fa-icon {\n    width: 40px;\n    padding-right: 10px;\n    vertical-align: middle; }\n  div.todo .done-true {\n    text-decoration: line-through;\n    color: #636c72; }\n"

/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/todo.service */ "./src/app/shared/services/todo.service.ts");
/* harmony import */ var _shared_classes_field_sorter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/classes/field-sorter */ "./src/app/shared/classes/field-sorter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoComponent = /** @class */ (function () {
    function TodoComponent(formBuilder, todoService) {
        this.formBuilder = formBuilder;
        this.todoService = todoService;
        this.openItemCount = 0;
        this.todoList = [];
        this.formErrors = {
            item: '',
        };
        this.validationMessages = {
            item: {
                required: 'Item is required.',
                minlength: 'Item must be at least 3 characters',
            },
        };
    }
    TodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addForm = this.formBuilder.group({
            item: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
        });
        this.addForm.statusChanges.subscribe(function (data) { return _this.onStatusChange(data); });
        this.onStatusChange();
        this.getTodoListAll();
    };
    TodoComponent.prototype.onStatusChange = function (data) {
        if (!this.addForm) {
            return;
        }
        var form = this.addForm;
        for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    for (var key in messages) {
                        if (messages.hasOwnProperty(key) && control.hasError(key)) {
                            this.formErrors[field] += messages[key] + " ";
                        }
                    }
                }
            }
        }
    };
    TodoComponent.prototype.sortItems = function () {
        this.todoList.sort(_shared_classes_field_sorter__WEBPACK_IMPORTED_MODULE_3__["FieldSorter"].sort(['completed', 'item'], true));
    };
    TodoComponent.prototype.save = function () {
        var _this = this;
        this.todoService.save(this.addForm.value.item).subscribe(function (result) {
            console.log('save result', result);
            _this.todoList.push(result);
            _this.openItemCount++;
            _this.sortItems();
            _this.addForm.reset();
        }, function (error) {
            _this.errorMessage = error.status + " " + error.statusText + ". " + error.message;
        });
    };
    TodoComponent.prototype.getTodoListAll = function () {
        var _this = this;
        this.todoService.getAll().subscribe(function (data) {
            _this.todoList = data;
            _this.calculateOpenItems();
            _this.sortItems();
        }, function (error) {
            _this.errorMessage = error.status + " " + error.statusText + ". " + error.message;
        });
    };
    TodoComponent.prototype.completeTodo = function (todo) {
        var _this = this;
        todo.completed = !todo.completed;
        this.todoService.updateTodo(todo).subscribe(function (data) {
            // do nothing
            console.log('updated todo', data, todo);
            todo.completed ? _this.openItemCount-- : _this.openItemCount++;
            _this.sortItems();
        }, function (error) {
            console.log('error', error);
            todo.completed = !todo.completed;
            _this.errorMessage = error.status + " " + error.statusText + ". " + error.message;
        });
    };
    TodoComponent.prototype.deleteTodo = function (todo) {
        var _this = this;
        if (confirm('Are you sure you want to delete?')) {
            // delete call goes here
            this.todoService.deleteTodo(todo).subscribe(function (data) {
                console.log('deleteTodo response', data, todo);
                var index = _this.todoList.indexOf(todo);
                _this.todoList.splice(index, 1);
                if (todo.completed === false) {
                    _this.openItemCount--;
                }
            }, function (error) {
                todo.completed = !todo.completed;
                _this.errorMessage = error.status + " " + error.statusText + ". " + error.message;
            });
        }
    };
    TodoComponent.prototype.calculateOpenItems = function () {
        this.openItemCount = this.todoList.filter(function (item) { return item.completed === false; }).length;
    };
    TodoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/todo/todo.component.html"),
            styles: [__webpack_require__(/*! ./todo.component.scss */ "./src/app/todo/todo.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _shared_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], TodoComponent);
    return TodoComponent;
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
    environmentName: 'Development',
    apiBaseUrl: 'https://sails-ws.herokuapp.com'
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

module.exports = __webpack_require__(/*! /Users/ashleighkeplinger/gitSites/sandbox/classtest/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map