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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app_headline {\r\n    width: 100%;\r\n    height: 5%;\r\n    /*Rice blue: #0B51B0*/\r\n    background-color: #0B51B0;\r\n    overflow: hidden;\r\n    position: fixed;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Add auth to the main page-->\n\n<router-outlet></router-outlet>"

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
        this.title = 'ricebook';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: route, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "route", function() { return route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_password_confirm_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user_password_confirm.directive */ "./src/app/user_password_confirm.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/registration/registration.component */ "./src/app/auth/registration/registration.component.ts");
/* harmony import */ var _main_following_following_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/following/following.component */ "./src/app/main/following/following.component.ts");
/* harmony import */ var _main_headline_headline_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/headline/headline.component */ "./src/app/main/headline/headline.component.ts");
/* harmony import */ var _main_posts_posts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/posts/posts.component */ "./src/app/main/posts/posts.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _main_following_following_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main/following/following.service */ "./src/app/main/following/following.service.ts");
/* harmony import */ var _main_headline_headline_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main/headline/headline.service */ "./src/app/main/headline/headline.service.ts");
/* harmony import */ var _main_posts_posts_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main/posts/posts.service */ "./src/app/main/posts/posts.service.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/login/login.service */ "./src/app/auth/login/login.service.ts");
/* harmony import */ var _profile_profile_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./profile/profile.service */ "./src/app/profile/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Add formsmodule









// Register for FollowingService

// Service providers







/*Create route*/
var route = [
    { path: '', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_6__["AuthComponent"] },
    { path: 'auth', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_6__["AuthComponent"] },
    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_6__["AuthComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_8__["RegistrationComponent"],
                _user_password_confirm_directive__WEBPACK_IMPORTED_MODULE_2__["userPasswordConfirm"],
                _main_following_following_component__WEBPACK_IMPORTED_MODULE_9__["FollowingComponent"],
                _main_headline_headline_component__WEBPACK_IMPORTED_MODULE_10__["HeadlineComponent"],
                _main_posts_posts_component__WEBPACK_IMPORTED_MODULE_11__["PostsComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                // Imports formsmodule
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                // Import HttpClientModule
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                // Router
                _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"].forRoot(route)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"],
            ],
            // import service into app.module
            providers: [_main_following_following_service__WEBPACK_IMPORTED_MODULE_13__["FollowingService"], _main_headline_headline_service__WEBPACK_IMPORTED_MODULE_14__["HeadlineService"], _main_posts_posts_service__WEBPACK_IMPORTED_MODULE_15__["PostsService"], _auth_login_login_service__WEBPACK_IMPORTED_MODULE_18__["LoginService"], _profile_profile_service__WEBPACK_IMPORTED_MODULE_19__["ProfileService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.css":
/*!*****************************************!*\
  !*** ./src/app/auth/auth.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".MAINFRAME {\r\n    width: 80%;\r\n    height: auto;\r\n    margin: auto;\r\n    overflow: hidden;\r\n    background-color: #F7F7F7;\r\n    font-family: monospace;\r\n}\r\n\r\n/*==================*/\r\n\r\n.CONTENTFRAME {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #F7F7F7;\r\n    margin: auto;\r\n    margin-top: 6em;\r\n}\r\n\r\n/*CSS for registration logic*/\r\n\r\n.CONTENT_REGISTRATION {\r\n    width: 50%;\r\n    height: 100%;\r\n    float: left;\r\n    border-right: 1px dashed #D7D7D7;\r\n}\r\n\r\n/*CSS for log-in logic*/\r\n\r\n.CONTENT_LOGIN {\r\n    width: 50%;\r\n    height: 100%;\r\n    float: left;\r\n}"

/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"MAINFRAME\"> \n    <!--Div for Registration and Login-->\n    <div class=\"CONTENTFRAME\">\n        <div class=\"CONTENT_REGISTRATION\">\n            <!--Add registration logic-->\n            <app-registration></app-registration>\n        </div>\n        \n        <div class=\"CONTENT_LOGIN\">\n            <!--Add login component-->\n            <app-login></app-login>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
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

var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
        this.title = "RiceBook";
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/*The login form*/\r\n#user_login_form {\r\n    margin-top: 20%;\r\n}\r\n/*Field for username input*/\r\n#login_username {\r\n    width: 50%;\r\n    height: auto;\r\n    margin: auto;\r\n    margin-top: 1%;\r\n}\r\n#login_username label {\r\n    font-size: 160%;\r\n}\r\n#login_username .text-danger {\r\n    font-size: 120%;\r\n}\r\n#login_password {\r\n    width: 50%;\r\n    height: auto;\r\n    margin: auto;\r\n    margin-top: 2%;\r\n}\r\n#login_password label {\r\n    font-size: 160%;\r\n}\r\n#login_password .text-danger {\r\n    font-size: 120%;\r\n}\r\n#login_btn {\r\n    width: 40%;\r\n    height: auto;\r\n    margin: auto;\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\r\n}\r\n#login_btn button {\r\n    width: 100%;\r\n    margin: auto;\r\n    font-size: 150%;\r\n    background-color: #0B51B0;\r\n}\r\n/*Invalid user name or password alert*/\r\n#user_login_invalid {\r\n    width: 50%;\r\n    margin: auto;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"login-form\">\n\n  <!--ngForm contains the validation for entire form-->\n  <form #loginForm=\"ngForm\" id=\"user_login_form\">\n\n    <!--ALERT-->\n    <!--Alert user if user enter a invalid username or wrong password-->\n    <div class=\"alert alert-danger\" role=\"alert\" id=\"user_login_invalid\" *ngIf=\"showInvalidMsg\">\n      {{errorMessage}}\n    </div>\n\n    <div class=\"alert alert-warning\" id=\"user_login_invalid\">\n      <span>please log in with username</span>\n    </div>\n    <!--USERNAME-->\n    <div class=\"form-group\" id=\"login_username\">\n      <label>USERNAME</label><br/>\n      <input type=\"text\" #username=\"ngModel\"\n      class=\"form-control\" [class.is-invalid]=\"username.invalid && username.touched || showInvalidMsg\"\n      id=\"login-username\" name=\"login-username\" required\n      [(ngModel)]=\"loginModel.username\">\n      <!--Error message for invalid username input-->\n      <div *ngIf=\"username.errors && (username.invalid || username.touched)\" [class.d-none]=\"username.valid || username.untouched\">\n        <small class=\"text-danger\" *ngIf=\"username.errors.required\">Username is required</small>\n      </div>\n    </div>\n\n    <!--PASSWORD-->\n    <div class=\"form-group\" id=\"login_password\">\n      <label>PASSWORD</label><br/>\n      <input type=\"password\" #pwd=\"ngModel\"\n      class=\"form-control\" [class.is-invalid]=\"pwd.invalid && pwd.touched || showInvalidMsg\"\n      id=\"login-pwd\" name=\"login-pwd\" required\n      [(ngModel)]=\"loginModel.pwd\">\n      <!--Error message for invalid password input-->\n      <div *ngIf=\"pwd.errors && (pwd.invalid || pwd.touched)\" [class.d-none]=\"pwd.valid || pwd.untouched\">\n        <small class=\"text-danger\" *ngIf=\"pwd.errors.required\">Password is required</small>\n      </div>\n    </div>\n\n    <!--LOGIN BUTTON-->\n    <div id=\"login_btn\">\n      <button [disabled]=\"loginForm.form.invalid\" class=\"btn btn-primary\" (click)=\"checkUserValide()\">LOG IN</button>\n    </div>\n    \n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user_login */ "./src/app/user_login.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/auth/login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function LoginComponent(_loginService, router) {
        this._loginService = _loginService;
        this.router = router;
        this.profile = [];
        this.userFollowing = [];
        this.currentUserFollowingList = [];
        this.postsFeed = [];
        this.userPosts = [];
        //new login model
        this.loginModel = new _user_login__WEBPACK_IMPORTED_MODULE_1__["UserLogin"]();
        // Create two valid param to check if username and password are valid
        this.validUser = false;
        this.showInvalidMsg = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.initLocalStorage();
        this.getUserInfo();
        this.getFollowingInfo();
        this.getPosts();
    };
    /**
     * @initLocalStorage()
     * Initialize the local storage
     */
    LoginComponent.prototype.initLocalStorage = function () {
        localStorage.setItem("userFollowing", "");
        localStorage.setItem("userPosts", "");
        localStorage.setItem("currentUser", "");
        localStorage.setItem("status", "");
    };
    /**
     * @getUserInfo()
     * Function to get all user information from service getUser function
     * Save all user information into profile array
     */
    LoginComponent.prototype.getUserInfo = function () {
        var _this = this;
        this._loginService.getUser().subscribe(function (data) {
            _this.profile = data;
        });
    };
    /**
     * @getFollowingInfo()
     * Function to get the following information
     * Store all following information into the userFollowing
     */
    LoginComponent.prototype.getFollowingInfo = function () {
        var _this = this;
        this._loginService.getFollowing().subscribe(function (data) {
            _this.userFollowing = data;
            console.log(_this.userFollowing[0]);
        });
    };
    /**
     * @getPosts()
     * Function to get all posts from mock-data
     */
    LoginComponent.prototype.getPosts = function () {
        var _this = this;
        this._loginService.getPosts().subscribe(function (data) {
            _this.postsFeed = data;
            console.log(_this.postsFeed);
        });
    };
    /**
     * @findUserFollowing(username)
     * Function to get current user's following list
     */
    LoginComponent.prototype.findUserFollowing = function (username) {
        for (var i = 0; i < this.userFollowing.length; i++) {
            console.log(this.userFollowing[i].username);
            // For all users in the following find the current user and get its following list
            if (this.userFollowing[i].username == username) {
                console.log("we found the user");
                for (var j = 0; j < this.userFollowing[i].following.length; j++) {
                    // push users following into the currentUserFolloingList
                    //this.currentUserFollowingList.push(this.userFollowing[i].following[j].netID);
                    this.storeFollowings(this.userFollowing[i].following[j].netID);
                }
            }
        }
        // Store current user following list to the localstroage
        localStorage.setItem("userFollowing", JSON.stringify(this.currentUserFollowingList));
    };
    /**
     * @storeFollowings()
     * Store user's following detail information into localstorage
     */
    LoginComponent.prototype.storeFollowings = function (netID) {
        for (var i = 0; i < this.userFollowing.length; i++) {
            if (this.userFollowing[i].netID == netID) {
                this.currentUserFollowingList.push(this.userFollowing[i]);
            }
        }
    };
    /**
     * @findUserPosts(username)
     * By pass the username
     * Find all relative posts including user posts and following posts
     * Store posts into localstorage
     */
    LoginComponent.prototype.findUserPosts = function (username) {
        for (var i = 0; i < this.postsFeed.length; i++) {
            if (this.postsFeed[i].author == username) {
                this.userPosts.push(this.postsFeed[i]);
            }
        }
        for (var i = 0; i < this.currentUserFollowingList.length; i++) {
            for (var j = 0; j < this.postsFeed.length; j++) {
                if (this.currentUserFollowingList[i].username == this.postsFeed[j].author) {
                    this.userPosts.push(this.postsFeed[j]);
                }
            }
        }
        localStorage.setItem("userPosts", JSON.stringify(this.userPosts));
    };
    /**
    * @checkUserValid()
    * Check if entered username is registered
    * Or password is correct
    */
    LoginComponent.prototype.checkUserValide = function () {
        this.validUser = false;
        console.log(this.loginModel.username);
        for (var i = 0; i < this.profile.length; i++) {
            if (this.loginModel.username == this.profile[i].username && this.loginModel.pwd == this.profile[i].password) {
                // If the login username and password are match and correct
                console.log("valid user");
                this.validUser = true;
                this.showInvalidMsg = false;
                // Set netID and status to the localStorage
                localStorage.setItem('currentUser', this.profile[i].username);
                localStorage.setItem('status', this.profile[i].status);
                this.findUserFollowing(this.loginModel.username);
                this.findUserPosts(this.loginModel.username);
                this.router.navigate(['/main']);
            }
        }
        if (this.validUser != true) {
            this.errorMessage = this._loginService.showErrorMessage();
            console.log("invalid user");
            this.showInvalidMsg = true;
        }
        // succesful login
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/login/login.service.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/login/login.service.ts ***!
  \*********************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        // Create the url for user profile json
        this._url = "../../assets/mock-data/profile.json";
        this._followingUrl = "../../assets/mock-data/following.json";
        this._postsUrl = "../../assets/mock-data/posts.json";
    }
    // Function to return user profile json
    LoginService.prototype.getUser = function () {
        return this.http.get(this._url);
    };
    LoginService.prototype.getFollowing = function () {
        return this.http.get(this._followingUrl);
    };
    LoginService.prototype.getPosts = function () {
        return this.http.get(this._postsUrl);
    };
    /**
   * loginAction()
   * @param username
   * @param pwd
   * @param profile
   * Check if user entered username and password are match and valid
   */
    LoginService.prototype.loginAction = function (username, pwd, profile) {
        for (var i = 0; i < profile.length; i++) {
            if (username == profile[i].username && pwd == profile[i].password) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    /**
     * showSuccessMessage()
     * When user successLogged in
     * Return the success message
     */
    LoginService.prototype.ShowSuccessMessage = function () {
        var message = "User login successful";
        return message;
    };
    /**
     * showErrorMessage()
     * When user entered a invalid username or wrong password
     * Show this message
     */
    LoginService.prototype.showErrorMessage = function () {
        var message = "Invalid username or wrong password!";
        return message;
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/auth/registration/registration.component.css":
/*!**************************************************************!*\
  !*** ./src/app/auth/registration/registration.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#registration_btn {\r\n    height: 100%;\r\n    float: left;\r\n    margin-bottom: 30%;\r\n}\r\n\r\n#clear_btn {\r\n    height: 100%;\r\n    float: left;\r\n    margin-left: 10%;\r\n}\r\n\r\n/**/\r\n\r\n.REGISTRATION_TITLE {\r\n    width: 50%;\r\n    height: 100%;\r\n    margin-left: 8%;\r\n}\r\n\r\n.REGISTRATION_TITLE .form-group {\r\n    margin-top: 1px;\r\n    margin-bottom: 4%;\r\n}\r\n\r\n.REGISTRATION_TITLE label {\r\n    margin-bottom: 1%;\r\n    font-size: 1.3em;\r\n}\r\n\r\n.REGISTRATION_TITLE small {\r\n    font-size: 1em;\r\n}"

/***/ }),

/***/ "./src/app/auth/registration/registration.component.html":
/*!***************************************************************!*\
  !*** ./src/app/auth/registration/registration.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"REGISTRATION_TITLE\">\n    <form #registForm=\"ngForm\"> <!--We have the reference of ngForm by assign the variable name #registForm-->\n        <div class=\"alert alert-success\" *ngIf=\"registStatus\">\n            <span><b>DING!  </b>Welcome {{userModel.name}}</span>\n        </div>\n        <!--ACCOUNT NAME-->\n        <div class=\"form-group\" id=\"regist_account_name\">\n            <!--This is the part for user account name-->\n            <label>ACCOUNT NAME *</label><br/>\n            <!--[(ngModel)] is two way binding-->\n            <input type=\"text\" #name=\"ngModel\" \n                class=\"form-control\" [class.is-invalid]=\"name.invalid && name.touched\"\n                id=\"account\" name=\"account\" required \n                [(ngModel)]=\"userModel.name\">\n            <!--\n                This div contains error message will pop up if name has error when name is invliad or name has been touched\n                The class will change to \"d-none\" when name is vliad or name has never been touched\n            -->\n            <div *ngIf=\"name.errors && (name.invalid || name.touched)\" [class.d-none]=\"name.valid || name.untouched\">\n                <!--This small tag contains error message will pop up if name is not entered-->\n                <small class=\"text-danger\" *ngIf=\"name.errors.required\">Name is required</small>\n            </div>\n        </div>\n\n        <!--DISPLAY NAME-->\n        <div class=\"form-group\">\n            <label>DISPLAY NAME</label><br/>\n            <input type=\"text\" \n                class=\"form-control\" id=\"display_name\" name=\"display\" [(ngModel)]=\"userModel.display\">\n        </div>\n        \n        <!--EMAIL ADDRESS-->\n        <div class=\"form-group\">\n            <label>EMIAL ADDRESS *</label><br/>\n            <input type=\"text\" #email=\"ngModel\"\n                class=\"form-control\" [class.is-invalid]=\"email.invalid && email.touched\"\n                id=\"email\" name=\"email\" placeholder=\"username@ricebook.com\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" required \n                [(ngModel)]=\"userModel.email\">\n            <!--Error message--> \n            <div *ngIf=\"email.errors && (email.invalid || email.touched)\" [class.d-none]=\"email.vliad || email.untouched\">\n                <small class=\"text-danger\" *ngIf=\"email.errors.required\">Email address is required</small>\n                <small class=\"text-danger\" *ngIf=\"email.errors.pattern\">Please enter a valid email address</small>\n            </div>\n        </div>\n\n        <!--PHONE NUMBER-->\n        <div class=\"form-group\">\n            <label>PHONE NUMBER *</label><br/>\n            <input type=\"text\" #phone=\"ngModel\"\n                class=\"form-control\" [class.is-invalid]=\"phone.invalid && phone.touched\"\n                id=\"phone\" name=\"phone\" placeholder=\"123-123-1233\" pattern=\"\\d{3}[\\-]\\d{3}[\\-]\\d{4}\" required\n                [(ngModel)]=\"userModel.phone\">\n                <!--The pattenr for phone number is 123-123-1233-->\n            <!--Error message-->\n            <div *ngIf=\"phone.errors && (phone.invalid || phone.touched)\" [class.d-none]=\"phone.valid || phone.untouched\">\n                <small class=\"text-danger\" *ngIf=\"phone.errors.required\">Phone number is required</small>\n                <small class=\"text-danger\" *ngIf=\"phone.errors.pattern\">Phone number must follow the pattern: 123-123-1233</small>\n            </div>\n        </div>\n\n        <!--DATE OF BIRTH-->\n        <div class=\"form-group\">\n            <label>DATE OF BIRTH *</label><br/>\n            <input type=\"date\" #date=\"ngModel\"\n                class=\"form-control\" id=\"birth\" name=\"birth\" required [(ngModel)]=\"userModel.birth\">\n        </div>\n\n        <!--ZIPCODE-->\n        <div class=\"form-group\">\n            <label>ZIPCODE *</label><br/>\n            <input type=\"text\" #zipcode=\"ngModel\"\n                class=\"form-control\" [class.is-invalid]=\"zipcode.invalid && zipcode.touched\"\n                id=\"zipcode\" name=\"zipcode\" placeholder=\"77030\" pattern=\"\\d{5}\" required \n                [(ngModel)]=\"userModel.zipcode\">\n                <!--The pattenr of zipcode should be 5 digit numbers-->\n            <!--Error message for invalid and mispattern-->\n            <div *ngIf=\"zipcode.errors && (zipcode.invalid || zipcode.touched)\" [class.d-none]=\"zipcode.valid || zipcode.untouched\">\n                <small class=\"text-danger\" *ngIf=\"zipcode.errors.required\">Zipcode is required</small>\n                <small class=\"text-danger\" *ngIf=\"zipcode.errors.pattern\">Zipcode must be 5 digit numbers</small>\n            </div>\n        </div>\n\n        <!--PASSWORD-->\n        <div class=\"form-group\">\n            <label>PASSWORD *</label><br/>\n            <input type=\"password\" #pwd=\"ngModel\"\n                class=\"form-control\" [class.is-invalid]=\"pwd.invalid && pwd.touched\"\n                id=\"pwd\" name=\"pwd\" required \n                [(ngModel)]=\"userModel.pwd\">\n            <!--Error message for password required-->\n            <div *ngIf=\"pwd.errors && (pwd.invliad || pwd.touched)\" [class.d-none]=\"pwd.valid || pwd.untouched\">\n                <small class=\"text-danger\" *ngIf=\"pwd.errors.required\">Password is required</small>\n            </div>\n        </div>\n\n        <!--\n            User input confirm password field\n            Check for password validation\n            And check password matching with confirm password\n            Create a new directive named pwdValidator to test password match\n        -->\n        <!--CONFIRM PASSWORD-->\n        <div class=\"form-group\">\n            <label>CONFIRM PASSWORD *</label><br/>\n            <input type=\"password\" #repwd=\"ngModel\"\n                class=\"form-control\" [class.is-invalid]=\"repwd.invalid && repwd.touched\" pwdValidator=\"pwd\"\n                id=\"repwd\" name=\"repwd\" required \n                [(ngModel)]=\"userModel.repwd\">\n            <!--Error message for confirm password required and password mismatch-->\n            <div >\n                <small class=\"text-danger\" *ngIf=\"repwd.touched && repwd.errors?.notEqual\">Password and confirm Password does not match</small>\n            </div>\n        </div>\n\n        <div id=\"registration_btns\">\n            <!--REGISTRATION BUTTON-->\n            <div id=\"registration_btn\">\n                <button [disabled]=\"registForm.form.invalid\" class=\"btn btn-primary\" (click)=\"registSuccess()\">REGISTER</button>\n            </div>\n            <!--CLEAR BUTTON-->\n            <div id=\"clear_btn\">\n                <button class=\"btn btn-primary\" (click)=\"registerClear()\">CLEAR</button>\n            </div>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/registration/registration.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/auth/registration/registration.component.ts ***!
  \*************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_registration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user_registration */ "./src/app/user_registration.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent() {
        this.registStatus = false;
        // Create a new userModel to recieve user input
        this.userModel = new _user_registration__WEBPACK_IMPORTED_MODULE_1__["UserInfo"]();
    }
    RegistrationComponent.prototype.registerClear = function () {
        this.userModel.name = "";
        this.userModel.display = "";
        this.userModel.email = "";
        this.userModel.phone = "";
        this.userModel.birth = null;
        this.userModel.zipcode = null;
        this.userModel.pwd = "";
        this.userModel.repwd = "";
    };
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.registSuccess = function () {
        this.registStatus = true;
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/auth/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/auth/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/main/following/following.component.css":
/*!********************************************************!*\
  !*** ./src/app/main/following/following.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Followings User Information*/\r\n.following_user_info {\r\n    width: 95%;\r\n    height: auto;\r\n    margin: auto;\r\n    border-bottom: 1px solid #BABABA;\r\n}\r\n.following_user_detail {\r\n    width: 100%;\r\n    padding-top: 1%;\r\n    height: 100%;\r\n}\r\n.following_img_username {\r\n    width: 100%;\r\n    overflow: hidden;\r\n}\r\n/*Following img*/\r\n.following_img {\r\n    width: 20%;\r\n    float: left;\r\n    border: 1px solid #BABABA;\r\n    box-shadow: 1px 1px 10px #0DCE00;\r\n}\r\n/*Following Username*/\r\n.following_username {\r\n    width: auto;\r\n    height: 50%;\r\n    float: left;\r\n    padding-left: 5%;\r\n    padding-top: 3%;\r\n    font-size: 15px;\r\n}\r\n.unfollow {\r\n    width: 15px;\r\n    float: right;\r\n}\r\n.unfollow:hover {\r\n    cursor: pointer;\r\n}\r\n/*Following Status*/\r\n.following_status {\r\n    width: 100%;\r\n    height: auto;\r\n    padding-top: 5%;\r\n    padding-bottom: 5%;\r\n    font-size: 15px;\r\n}\r\n/*Following Module Add Field*/\r\n.following_add_new_user {\r\n    width: 90%;\r\n    height: 3em;\r\n    margin: auto;\r\n    margin-top: 1em;\r\n}\r\n#following_add_field {\r\n    width: 60%;\r\n    height: 80%;\r\n    float: left;\r\n}\r\n#following_add_field input {\r\n    width: 100%;\r\n    height: 100%;\r\n    border: none;\r\n    font-size: 1.3em;\r\n    text-indent: 0.5em;\r\n    border-bottom: 1px solid #BABABA;\r\n}\r\n#following_add_button {\r\n    width: 33%;\r\n    float: left;\r\n    margin-left: 3%;\r\n}\r\n#following_add_button button {\r\n    width: 100%;\r\n}\r\n#invalidUser {\r\n    width: 90%;\r\n    margin: auto;\r\n    padding-bottom: 1%;\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/main/following/following.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/following/following.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <!--Use *ngFor to fetch following data from followings array-->\n  <div *ngFor=\"let following of followingList\" class=\"following_user_info\">\n\n    <div class=\"following_user_detail\">\n      <div class=\"following_img_username\">\n        <img class=\"following_img\" src={{following.img}}>\n          \n        <div class=\"following_username\">\n          {{following.username}}\n        </div>   \n        <!--When click remove icon, remove the user-->\n        <img class=\"unfollow\" src=\"../../../assets/img/unfollow.png\" (click)=\"deleteFollowing(following.username)\">\n\n      </div>\n        \n      <div class=\"following_status\">\n        {{following.status}}\n      </div>\n\n    </div>\n    \n  </div>\n\n  <div class=\"following_add_new_user\">\n\n    <div name=\"following_add_field\" id=\"following_add_field\">\n      <input type=\"text\" [(ngModel)]=\"newFollowing\" *ngIf=\"newFollowing!=null\">\n    </div>\n\n    <div name=\"following_add_button\" id=\"following_add_button\">\n      <button class=\"btn btn-primary btn-sm\" (click)=\"addFollowing(newFollowing)\">ADD</button>\n    </div>\n\n  </div>\n  <div id=\"invalidUser\">\n    <span *ngIf=\"invalidUser\">Invalid user</span>\n  </div>\n  \n\n</div>"

/***/ }),

/***/ "./src/app/main/following/following.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/following/following.component.ts ***!
  \*******************************************************/
/*! exports provided: FollowingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingComponent", function() { return FollowingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _following_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./following.service */ "./src/app/main/following/following.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FollowingComponent = /** @class */ (function () {
    function FollowingComponent(_followingService) {
        this._followingService = _followingService;
        // followingList contains user's following
        this.followingList = [];
        // contains all following information
        this.followings = [];
        // posts contains all post feeds
        this.posts = [];
        // posts contains user's posts and following posts
        this.postList = [];
        //
        this.deletePostList = [];
        // Params for new following check
        this.valid = false;
        this.duplicate = false;
        this.newFollowing = "";
        this.invalidUser = false;
        // Create a emitter to transfer value to parent component
        this.PostListEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FollowingComponent.prototype.ngOnInit = function () {
        this.getFollowing();
        this.getFollowingList();
        this.getPosts();
        this.getPostsList();
    };
    /**
     * @getFollowing()
     * Get all following from service
     * Then store followings
     */
    FollowingComponent.prototype.getFollowing = function () {
        var _this = this;
        this._followingService.getFollowing().subscribe(function (data) {
            _this.followings = data;
        });
    };
    /**
     * @getPosts()
     * Get all post feeds from service
     * Then store posts
     */
    FollowingComponent.prototype.getPosts = function () {
        var _this = this;
        this._followingService.getPost().subscribe(function (data) {
            _this.posts = data;
        });
    };
    /**
     * @getFollowingList()
     * Get current user following list from localStorage
     */
    FollowingComponent.prototype.getFollowingList = function () {
        this.followingList = JSON.parse(localStorage.getItem("userFollowing"));
        console.log(this.followingList);
    };
    /**
     * @getPostsList()
     * Get current user posts and following posts
     */
    FollowingComponent.prototype.getPostsList = function () {
        this.postList = JSON.parse(localStorage.getItem("userPosts"));
        console.log(this.postList);
        //this.PostListEvent.emit(this.postList);
    };
    /**
     * @addFollowing(newFollowing)
     * Get user input newFollowing
     * Check if new following is valid and not duplicate
     * If valid and not duplicate
     * Store into followingList and update the localstorage
     */
    FollowingComponent.prototype.addFollowing = function (newFollowing) {
        // Check for duplicate followings
        for (var i = 0; i < this.followingList.length; i++) {
            if (this.followingList[i].username == newFollowing) {
                this.duplicate = true;
            }
        }
        // Check for valid followings
        for (var j = 0; j < this.followings.length; j++) {
            //console.log("all user: " + this.followings[j].username);
            if (this.followings[j].username == newFollowing) {
                this.valid = true;
                this.newFollowingObj = this.followings[j];
            }
        }
        // Valid new following and not duplicate
        if (this.valid == true && this.duplicate == false) {
            this.followingList.push(this.newFollowingObj);
            localStorage.setItem("userFollowing", JSON.stringify(this.followingList));
            this.addPost(newFollowing);
            this.invalidUser = false;
        }
        else {
            // Print out error message
            this.invalidUser = true;
        }
        // Initialize all params
        this.valid = false;
        this.duplicate = false;
        this.newFollowing = "";
        //location.reload();
    };
    /**
     * @deleteFollowing(username)
     * Delete user selected following user from following list
     * Then update the localStorage
     */
    FollowingComponent.prototype.deleteFollowing = function (username) {
        for (var i = 0; i < this.followingList.length; i++) {
            if (this.followingList[i]['username'] == username) {
                if (i == 0) {
                    this.followingList.splice(0, 1);
                    localStorage.setItem("userFollowing", JSON.stringify(this.followingList));
                }
                else {
                    /*Delete the i-th content*/
                    this.followingList.splice(i, 1);
                    localStorage.setItem("userFollowing", JSON.stringify(this.followingList));
                }
            }
        }
        // Delete username feed
        this.deletePost(username);
        console.log("remove: " + username);
    };
    /**
     * @addPost(username)
     * Check new following's posts
     * Then add to the postList and update localStorage
     */
    FollowingComponent.prototype.addPost = function (username) {
        this.getPostsList();
        /*
        for(let i = 0; i < this.posts.length; i++){
          if(this.posts[i].author == username){
            this.postList.push(this.posts[i]);
          }
        }
        */
        this.postList = this._followingService.addPost(username, this.postList, this.posts);
        localStorage.setItem("userPosts", JSON.stringify(this.postList));
        this.PostListEvent.emit(this.postList);
    };
    /**
     * @deletePost(username)
     * Delete the user selected following
     * Update new posts list to the localStorage
     */
    FollowingComponent.prototype.deletePost = function (username) {
        this.getPostsList();
        this.deletePostList = this._followingService.deletePost(username, this.postList);
        localStorage.setItem("userPosts", JSON.stringify(this.deletePostList));
        this.PostListEvent.emit(this.deletePostList);
        this.deletePostList = [];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FollowingComponent.prototype, "PostListEvent", void 0);
    FollowingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-following',
            template: __webpack_require__(/*! ./following.component.html */ "./src/app/main/following/following.component.html"),
            styles: [__webpack_require__(/*! ./following.component.css */ "./src/app/main/following/following.component.css")]
        }),
        __metadata("design:paramtypes", [_following_service__WEBPACK_IMPORTED_MODULE_1__["FollowingService"]])
    ], FollowingComponent);
    return FollowingComponent;
}());



/***/ }),

/***/ "./src/app/main/following/following.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/following/following.service.ts ***!
  \*****************************************************/
/*! exports provided: FollowingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingService", function() { return FollowingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FollowingService = /** @class */ (function () {
    // In order to use HTTP, create a dependence of http in constructor
    // Then we can use http as instance to refer the HttpClient
    function FollowingService(http) {
        this.http = http;
        // Create a property point to the json file
        this._url = "../../assets/mock-data/following.json";
        this._postUrl = "../../assets/mock-data/posts.json";
    }
    // Create a function to return the following data in the service
    // STEP1: Define the following class
    // STEP2: Register FollowingService in app.module
    // Return a observable array
    FollowingService.prototype.getFollowing = function () {
        /* Using hard code variables
        return [
          {"id":1, "username":"test1", "status":"something"},
          {"id":2, "username":"test2", "status":"something"},
          {"id":3, "username":"test3", "status":"something"},
          {"id":4, "username":"test4", "status":"something"},
        ]
        */
        // Get data from HTTP calls and request data from url
        return this.http.get(this._url);
        // .get return an observable
        // Create a following interface
    };
    /**
     * return post json
     */
    FollowingService.prototype.getPost = function () {
        return this.http.get(this._postUrl);
    };
    /**
     * Find all posts with currentUser as author
     */
    FollowingService.prototype.getUserPosts = function (currentUser, PostList) {
        var post = [];
        for (var i = 0; i < PostList.length; i++) {
            if (PostList[i].author == currentUser) {
                post.push(PostList[i]);
            }
        }
        return post;
    };
    FollowingService.prototype.addFollowing = function (username, followingList) {
    };
    /**
     * deletePost
     * @param username
     * @param PostList
     * If post contains username
     * Delete it from the current post list
     */
    FollowingService.prototype.deletePost = function (username, PostList) {
        // Use a new array to update value
        var deletePostList = [];
        for (var i = 0; i < PostList.length; i++) {
            if (PostList[i].author != username) {
                deletePostList.push(PostList[i]);
            }
        }
        return deletePostList;
    };
    /**
     * addPost
     * @param username
     * @param PostList
     * If post contains username
     * Add it to the user following posts
     */
    FollowingService.prototype.addPost = function (username, PostList, posts) {
        for (var i = 0; i < posts.length; i++) {
            if (posts[i].author == username) {
                PostList.push(posts[i]);
            }
        }
        return PostList;
    };
    FollowingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FollowingService);
    return FollowingService;
}());



/***/ }),

/***/ "./src/app/main/headline/headline.component.css":
/*!******************************************************!*\
  !*** ./src/app/main/headline/headline.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headline_mainframe {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.headline_user_new_post {\r\n    width: 82%;\r\n    height: 95%;\r\n    float: left;\r\n    padding-top: 2%;\r\n    border-bottom-left-radius: 1%;\r\n    border-bottom-right-radius: 1%;\r\n    background-color: #F7F7F7;\r\n}\r\n\r\n.headline_user_add_new_img {\r\n    width: 15%;\r\n    height: auto;\r\n    float: left;\r\n    margin-left: 10%;\r\n    margin-top: 1%;\r\n}\r\n\r\n#add_img {\r\n    width: 100%;\r\n    height: auto;\r\n    border: 2px solid #BABABA;\r\n}\r\n\r\n.headline_user_add_new_post {\r\n    height: 100%;\r\n    width: 70%;\r\n    float: left;\r\n    margin-left: 3%;\r\n}\r\n\r\n.headline_user_add_new_post textarea {\r\n    resize: none;\r\n    height: 73%;\r\n    width: 90%;\r\n    font-size: 1.5em;\r\n}\r\n\r\n.headline_user_add_new_post_btns {\r\n    height: 15%;\r\n    width: 90%;\r\n}\r\n\r\n.headline_btn_share {\r\n    width: 20%;\r\n    float: right;\r\n}\r\n\r\n.headline_btn_share button {\r\n    width: 100%;\r\n}\r\n\r\n.headline_btn_clear {\r\n    width: 25%;\r\n    padding-right: 5%;\r\n    float: right;\r\n}\r\n\r\n.headline_btn_clear button {\r\n    width: 100%;\r\n}\r\n\r\n/*Headline User Information(Right Conrner)*/\r\n\r\n.headline_user_info {\r\n    width: 17%;\r\n    height: 95%;\r\n    float: right;\r\n    border-bottom-left-radius: 2%;\r\n    border-bottom-right-radius: 2%;\r\n    background-color: #F7F7F7;\r\n}\r\n\r\n/*Set user img*/\r\n\r\n.headline_user_img {\r\n    width: 40%;\r\n    height: auto;\r\n    margin: auto;\r\n    border-radius: 50%;\r\n    margin-top: 10%;\r\n    border: 4px solid #BABABA;\r\n}\r\n\r\n.headline_user_img img {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n}\r\n\r\n/*User status*/\r\n\r\n.headline_user_status {\r\n    width: 90%;\r\n    height: 20%;\r\n    margin: auto;\r\n    margin-top: 5%;\r\n    font-size: 100%;\r\n    text-align: center;\r\n}\r\n\r\n/*User status update field*/\r\n\r\n.headline_user_status_update {\r\n    width: 100%;\r\n    height: 20%;\r\n    margin: auto;\r\n    margin-top: 5%;\r\n    font-size: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.headline_user_status_update textarea {\r\n    width: 75%;\r\n    height: 90%;\r\n    margin-left: 2%;\r\n    resize: none;\r\n    float: left;\r\n}\r\n\r\n.headline_user_status_update button {\r\n    width: 20%;\r\n    height: 50%;\r\n    font-size: 80%;\r\n    margin-right: 2%;\r\n    margin-top: 7%;\r\n    float: right;\r\n}\r\n\r\n.headline_user_status span {\r\n    align-content: center;\r\n}\r\n\r\n.headline_user_status span:hover {\r\n    cursor: pointer;   /*Change cursor to pointer when hover the mouse*/\r\n}\r\n\r\n/*User follower follows posts*/\r\n\r\n.headline_user_feed_information {\r\n    width: 100%;\r\n    height: 20%;\r\n    margin-top: 3%;\r\n}\r\n\r\n.headline_user_follower_control {\r\n    width: 33%;\r\n    height: 100%;\r\n    float: left;\r\n}\r\n\r\n#user_follower {\r\n    border-left: 1px solid #BABABA;\r\n    border-right: 1px solid #BABABA;\r\n}\r\n\r\n/*Numbers*/\r\n\r\n.headline_user_follower_number {\r\n    width: 100%;\r\n    height: auto;\r\n    font-size: 150%;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n\r\n/*Follower following posts data*/\r\n\r\n.headline_user_follower_title {\r\n    width: 100%;\r\n    height: auto;\r\n    font-size: 110%;\r\n    text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main/headline/headline.component.html":
/*!*******************************************************!*\
  !*** ./src/app/main/headline/headline.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"headline_mainframe\">\n  <!--Div for user to add new post with picture-->\n  <div class=\"headline_user_new_post\">\n    <!--Field for user to add new img-->\n    <div class=\"headline_user_add_new_img\">\n      <img alt=\"temporary img\" id=\"add_img\" src=\"../../../assets/img/add.png\">\n      <input type=\"file\">\n    </div>\n\n    <!--Field for user to write new post-->\n    <div class=\"headline_user_add_new_post\">\n      <!--Use ngModel two way bind to clear out the value-->\n      <textarea placeholder=\"Share your post\" [(ngModel)]=\"clearValue\"></textarea>\n\n      <div class=\"headline_user_add_new_post_btns\">\n\n        <div class=\"headline_btn_share\">\n          <button class=\"btn btn-primary\" (click)=\"addPost()\">Share</button>\n        </div>\n\n        <div class=\"headline_btn_clear\">\n          <button class=\"btn btn-primary\" (click)=\"clearOnClick()\">Clear</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"headline_user_info\">\n      <div class=\"headline_user_img\">\n        <img src={{currentUser.img}}>\n      </div>\n\n      <div class=\"headline_user_status\" *ngIf=\"showStatus\" (click)=\"clickUserStatus()\">\n        <!-- In order to change the status, user hard code instead\n          <span>{{currentUser.status}}</span>\n        -->\n        <span>{{userStatus}}</span>\n      </div>\n      <!--hide or show update textare based on the status-->\n      <div class=\"headline_user_status_update\" *ngIf=\"showStatusUpdate\">\n        <!--<textarea>{{currentUser.status}}</textarea>-->\n          <textarea [(ngModel)]=\"userStatus\"></textarea>\n          <button class=\"btn btn-primary btn-sm\" (click)=\"clickUpdateStatus()\">Save</button>\n      </div>\n\n      <!--User follow follower posts information-->\n      <div class=\"headline_user_feed_information\">\n\n        <div class=\"headline_user_follower_control\" id=\"user_follow\">\n\n          <div class=\"headline_user_follower_number\">{{currentUser.following}}</div>\n          <div class=\"headline_user_follower_title\">Following</div>\n\n        </div>\n\n        <div class=\"headline_user_follower_control\" id=\"user_follower\">\n\n          <div class=\"headline_user_follower_number\">{{currentUser.follower}}</div>\n          <div class=\"headline_user_follower_title\">Followers</div>\n\n        </div>\n\n        <div class=\"headline_user_follower_control\" id=\"user_posts\">\n\n          <div class=\"headline_user_follower_number\">{{currentUser.posts}}</div>\n          <div class=\"headline_user_follower_title\"><span>Posts</span></div>\n\n        </div>\n\n      </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/headline/headline.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/headline/headline.component.ts ***!
  \*****************************************************/
/*! exports provided: HeadlineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadlineComponent", function() { return HeadlineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _headline_headline_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../headline/headline.service */ "./src/app/main/headline/headline.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeadlineComponent = /** @class */ (function () {
    // Create headlineService in constructor
    function HeadlineComponent(_headlineService, http) {
        this._headlineService = _headlineService;
        this.http = http;
        this.postList = JSON.parse(localStorage.getItem("userPosts"));
        // Create user array
        this.users = [];
        this.user = [];
        //@Output() addNewPost = new EventEmitter();
        this.addNewPost = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // A new post
        this.newPost = {
            "img": "",
            "time": "Oct 16, 2018",
            "author": "",
            "article": "",
            "title": "dummy title",
            "comment": ""
        };
        this.showStatusUpdate = false;
        this.showStatus = true;
        this.userStatus = localStorage.getItem("status");
        this.testUser = {};
        this.currentUser = {
            netID: "",
            username: "",
            status: "",
            following: "",
            follower: "",
            img: "",
        };
        /*When user click clear button for new post, set textarea value to ' '*/
        this.clearValue = '';
    }
    HeadlineComponent.prototype.clearOnClick = function () {
        console.log("clear btn");
        this.clearValue = '';
    };
    /**
     * @addPost()
     * When user click "share" button
     * Create a new IPost class and add information to that newPost
     * Then push the new Post to up-to-date postList
     * Emit new List to the post.component
     * Then update postList in localStorage
     */
    HeadlineComponent.prototype.addPost = function () {
        this.postList = JSON.parse(localStorage.getItem("userPosts"));
        console.log(this.clearValue);
        // Create a new post object
        // Set the article
        this.newPost.article = this.clearValue;
        this.newPost.author = localStorage.getItem("currentUser");
        this.newPost.time = Date();
        this.postList.unshift(this.newPost);
        localStorage.setItem("userPosts", JSON.stringify(this.postList));
        this.addNewPost.emit(this.postList);
        this.clearValue = "";
    };
    /*When click userstatus, hide current user status and show the textarea for user to edit*/
    HeadlineComponent.prototype.clickUserStatus = function () {
        this.showStatus = false;
        this.showStatusUpdate = true;
    };
    /*When click save button, save the update value and display the user status*/
    HeadlineComponent.prototype.clickUpdateStatus = function () {
        this.showStatus = true;
        this.showStatusUpdate = false;
        localStorage.setItem("status", this.userStatus);
        /*
        this._headlineService.updateUser(this.currentUser).subscribe(data => {
          console.log("PUT Request is successful", this.currentUser);
        },
        error => {
          console.log("Error", error);
        });
        
        this.testUser = {
          "id": 2,
          "username": "Ecophobia",
          "status": "123",
          "img": "../../assets/img/user2.png"
        }
    
        this.http.put("../../assets/mock-data/following.json", this.testUser).subscribe();
        */
    };
    HeadlineComponent.prototype.ngOnInit = function () {
        var _this = this;
        // When page init
        // Use service object to call getUser method
        // Then subscribe observable and get data
        this._headlineService.getUser()
            .subscribe(function (data) {
            console.log(data);
            _this.users = data;
            _this.loginUser = localStorage.getItem("currentUser");
            for (var i = 0; i < _this.users.length; i++) {
                console.log(_this.users[i].netID);
                if (_this.users[i].username == _this.loginUser) {
                    // We find the current user
                    //this.user = this.users[i];
                    _this.currentUser.netID = _this.loginUser;
                    _this.currentUser.status = _this.users[i].status;
                    // Set user status to the local storage and get the status
                    _this.currentUser.following = _this.users[i].following.length;
                    console.log(_this.currentUser.following);
                    _this.currentUser.follower = _this.users[i].follower.length;
                    _this.currentUser.img = _this.users[i].img;
                    console.log(_this.currentUser.img);
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeadlineComponent.prototype, "addNewPost", void 0);
    HeadlineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-headline',
            template: __webpack_require__(/*! ./headline.component.html */ "./src/app/main/headline/headline.component.html"),
            styles: [__webpack_require__(/*! ./headline.component.css */ "./src/app/main/headline/headline.component.css")]
        }),
        __metadata("design:paramtypes", [_headline_headline_service__WEBPACK_IMPORTED_MODULE_1__["HeadlineService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HeadlineComponent);
    return HeadlineComponent;
}());



/***/ }),

/***/ "./src/app/main/headline/headline.service.ts":
/*!***************************************************!*\
  !*** ./src/app/main/headline/headline.service.ts ***!
  \***************************************************/
/*! exports provided: HeadlineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadlineService", function() { return HeadlineService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeadlineService = /** @class */ (function () {
    // Add private http to the constructor
    function HeadlineService(http) {
        this.http = http;
        // Create the url for user.json
        // following.json 改名 userInfo.json
        this._url = "../../assets/mock-data/following.json";
    }
    // Return user information function
    // getUser() method return Observable<IUser[]>
    HeadlineService.prototype.getUser = function () {
        return this.http.get(this._url);
    };
    /**
     * Update the user status **test function
    */
    HeadlineService.prototype.updateUser = function (userInfo) {
        return this.http.put(this._url, userInfo);
    };
    HeadlineService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HeadlineService);
    return HeadlineService;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main_mainframe {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/*Main Page Headline Module*/\r\n\r\n.main_headline {\r\n    width: 80%;\r\n    font-family: monospace;\r\n    height: 35%;\r\n    margin: auto;\r\n}\r\n\r\n.postpart {\r\n    width: 80%;\r\n    height: auto;\r\n    font-family: monospace;\r\n    margin: auto;\r\n}\r\n\r\n/*Main Page Following Module*/\r\n\r\n.main_following_module {\r\n    font-family: monospace;\r\n    width: 17%;\r\n    height: 100%;\r\n    height: auto;\r\n    float: right;\r\n    background-color: #E7E7E7;\r\n    border-top-left-radius: 2%;\r\n    border-top-right-radius: 2%;\r\n}\r\n\r\n/*Main Page Posts Module*/\r\n\r\n.main_posts_module {\r\n    font-family: monospace;\r\n    width: 82%;\r\n    height: auto;\r\n    float: left;\r\n}\r\n\r\n.user_profile:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.user_logout:hover {\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main_mainframe\">\n\n  <div class=\"app_headline\">\n    <div class=\"app_navi\">\n      <div class=\"web_name\">\n        <span>RiceBook</span>\n      </div>\n    \n      <div class=\"web_logo\">\n        <img src=\"./assets/img/logo.png\">\n      </div>\n    \n      <div class=\"search_bar\">\n        <textarea placeholder=\"Search\" [(ngModel)]=\"search\"></textarea>\n      </div>\n    \n      <div class=\"search_btn\">\n        <button class=\"btn btn-default\" (click)=\"onSearchClick()\" *ngIf=\"searchOn\">Search</button>\n        <button class=\"btn btn-default\" (click)=\"onClearSearch()\" *ngIf=\"searchOff\">Clear</button>\n      </div>\n    \n      <div class=\"user_profile\">\n        <span routerLink=\"/profile\">Profile</span>\n      </div>\n    \n      <div class=\"user_logout\">\n        <span routerLink=\"/\" (click)=\"Logout()\">Logout</span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"main_headline\">\n    <app-headline (addNewPost)=\"postListEvent($event)\"></app-headline>\n  </div>\n \n\n  <div class=\"postpart\">\n  <!-- Test div for posts\n    <div *ngFor=\"let post of postList\">\n      <span style=\"color:white\">{{post.title}}</span>\n    </div>\n  -->\n    <app-posts class=\"main_posts_module\" [postList]=\"postList\"></app-posts>\n    <app-following class=\"main_following_module\" (PostListEvent)=\"postListEvent($event)\"></app-following>\n  </div> \n</div>\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.service */ "./src/app/main/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = /** @class */ (function () {
    function MainComponent(_mainService) {
        this._mainService = _mainService;
        this.search = "";
        this.searchOn = true;
        this.searchOff = false;
        // Using postList to connect with following.component and posts.component
        this.postList = [];
        this.userPost = [];
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    /**
     * onSearchClick()
     * When user click search button
     * Based on search bar content
     * Show specific content on the post view
     */
    MainComponent.prototype.onSearchClick = function () {
        // Get the postList
        var userPost = JSON.parse(localStorage.getItem("userPosts"));
        this.postList = this._mainService.searchKeyWord(this.search, userPost);
        this.searchOn = false;
        this.searchOff = true;
        /*
        if(this.search == ""){
          return // do nothing
        }
        else {
          // Set the postList to null
          this.postList = [];
          console.log(this.search);
          // Get the postList
          let userPost = JSON.parse(localStorage.getItem("userPosts"));
          console.log(userPost);
          // Check for the author
          for(let i = 0; i < userPost.length; i++){
            if(userPost[i].author.toLowerCase().includes(this.search.toLowerCase())
            || userPost[i].article.toLowerCase().includes(this.search.toLowerCase())){
              this.postList.push(userPost[i]);
            }
          }
        }
        */
    };
    /**
     * @onClearSearch
     * When user click clear button on search bar
     * Clear search bar content
     * And show all posts on the post view
     */
    MainComponent.prototype.onClearSearch = function () {
        this.searchOn = true;
        this.searchOff = false;
        this.search = "";
        this.postList = JSON.parse(localStorage.getItem("userPosts"));
    };
    MainComponent.prototype.postListEvent = function ($event) {
        this.postList = $event;
    };
    MainComponent.prototype.Logout = function () {
        this._mainService.logOutUser();
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/main.service.ts":
/*!**************************************!*\
  !*** ./src/app/main/main.service.ts ***!
  \**************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
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

var MainService = /** @class */ (function () {
    function MainService() {
    }
    MainService.prototype.logOutUser = function () {
        localStorage.setItem("currentUser", "");
    };
    MainService.prototype.searchKeyWord = function (searchKey, userPost) {
        var postList = [];
        if (searchKey == "") {
            return userPost;
        }
        else {
            // Set the postList to null
            console.log(searchKey);
            // Check for the author
            for (var i = 0; i < userPost.length; i++) {
                if (userPost[i].author.toLowerCase().includes(searchKey.toLowerCase())
                    || userPost[i].article.toLowerCase().includes(searchKey.toLowerCase())) {
                    postList.push(userPost[i]);
                }
            }
        }
        return postList;
    };
    MainService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "./src/app/main/posts/posts.component.css":
/*!************************************************!*\
  !*** ./src/app/main/posts/posts.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main_posts_post {\r\n    width: 100%;\r\n    height: auto;\r\n    overflow: hidden;\r\n}\r\n\r\n.posts_post_title_time {\r\n    width: 100%;\r\n    height: auto;\r\n    border-bottom: 2px solid #D5D5D5;\r\n    text-align: center;\r\n}\r\n\r\n.posts_post_title_time span {\r\n    margin-left: 5%;\r\n    font-size: 130%;\r\n}\r\n\r\n.posts_post_img_article {\r\n    width: 90%;\r\n    height: auto;\r\n    margin: auto;\r\n}\r\n\r\n/*Field for post img*/\r\n\r\n.posts_post_img {\r\n    width: 40%;\r\n    height: auto;\r\n    float: left;\r\n}\r\n\r\n.posts_post_img img {\r\n    width: 100%;\r\n    height: auto;\r\n    margin-top: 10%;\r\n    margin-bottom: 10%;\r\n}\r\n\r\n/*Field for post article*/\r\n\r\n.posts_post_article {\r\n    width: 55%;\r\n    height: auto;\r\n    float: right;\r\n    margin-top: 3%;\r\n    margin-bottom: 3%;\r\n    font-family: sans-serif;\r\n}\r\n\r\n.posts_post_article span {\r\n    font-size: 1.5em;\r\n}\r\n\r\n.posts_post_module {\r\n    width: 100%;\r\n    height: auto;\r\n    background-color: #F7F7F7;\r\n    margin-bottom: 1%;\r\n}\r\n\r\n.posts_post {\r\n    width: 100%;\r\n    height: 5%;\r\n}\r\n\r\n.posts_btns {\r\n    width: 100%;\r\n    height: auto;\r\n    overflow: hidden;\r\n    background-color: #D5D5D5;\r\n}\r\n\r\n.posts_btns button {\r\n    float: right;\r\n    margin-right: 3%;\r\n    margin-top: 0.5%;\r\n    margin-bottom: 0.5%;\r\n}\r\n\r\n.postComment {\r\n    width: 100%;\r\n    font-size: 130%;\r\n    padding-top: 2%;\r\n    padding-bottom: 1%;\r\n}\r\n\r\n.postComment span {\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\r\n    padding-left: 2%;\r\n}\r\n\r\n.postComment #comment_comment {\r\n    width: auto;\r\n    margin-left: 1%;\r\n    padding-left: 2%;\r\n    padding-right: 2%;\r\n    border-radius: 7px;\r\n    background-color: #D5D5D5;\r\n}\r\n\r\n.postComment #comment_username {\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/main/posts/posts.component.html":
/*!*************************************************!*\
  !*** ./src/app/main/posts/posts.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main_posts_post\">\n\n  <!--Iterate the data from posts.json-->\n  <div class=\"posts_post_module\" *ngFor=\"let post of postList\">\n\n      <div class=\"posts_post\">\n\n        <div class=\"posts_post_title_time\">\n          <h3>{{post.title}}</h3>\n          <span>{{post.author}}</span>\n          <span>{{post.time}}</span>\n        </div>\n\n        <div class=\"posts_post_img_article\">\n\n          <div class=\"posts_post_img\">\n            <img src={{post.img}}>\n          </div>\n          <div class=\"posts_post_article\">\n            <span>{{post.article}}</span>\n          </div>\n          \n        </div>\n        \n      </div>\n\n      <div class=\"posts_btns\">\n        <button class=\"btn btn-primary\">Edit</button>\n        <button class=\"btn btn-primary\" (click)=\"clickComment()\">Comment</button>\n      </div>\n      \n      <div *ngIf=\"showComment\">\n      <div *ngFor=\"let comment of post.comments\" class=\"postComment\" >\n        <span id=\"comment_username\">{{comment.username}}:</span>\n        <span id=\"comment_comment\">{{comment.comment}}</span>\n      </div>\n      </div>\n  </div>\n\n  \n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/main/posts/posts.component.ts":
/*!***********************************************!*\
  !*** ./src/app/main/posts/posts.component.ts ***!
  \***********************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../posts/posts.service */ "./src/app/main/posts/posts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostsComponent = /** @class */ (function () {
    function PostsComponent(_postService) {
        this._postService = _postService;
        this.postList = [];
        this.showComment = false;
        this.userPosts = [];
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.getPostsList();
        //this._postService.getPost().subscribe(data => this.posts = data);
        /*
        this._postService.getPost().subscribe(data => {
          this.posts = data;
          console.log(this.posts[0]);
          console.log(data);
        });
        */
        this._postService.getPost().subscribe(function (response) { _this.posts = response["posts"]; });
        console.log(this.posts);
        // When init the page, load the user posts from localStorage
        this.postList = JSON.parse(localStorage.getItem("userPosts"));
    };
    PostsComponent.prototype.clickComment = function () {
        if (this.showComment == true) {
            this.showComment = false;
        }
        else {
            this.showComment = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PostsComponent.prototype, "postList", void 0);
    PostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/main/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/main/posts/posts.component.css")],
        }),
        __metadata("design:paramtypes", [_posts_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/main/posts/posts.service.ts":
/*!*********************************************!*\
  !*** ./src/app/main/posts/posts.service.ts ***!
  \*********************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostsService = /** @class */ (function () {
    function PostsService(http) {
        this.http = http;
        this._url = "../../assets/mock-data/posts.json";
    }
    /*
    getPost(): Observable<IPosts[]>{
      return this.http.get<IPosts[]>(this._url);
  
    }
    */
    PostsService.prototype.getPost = function () {
        return this.http.get(this._url);
    };
    PostsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
        /*Regist this service in app.module*/
        ,
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PostsService);
    return PostsService;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile_main_frame {\r\n    width: 100%;\r\n    height: auto;\r\n    margin: auto;\r\n}\r\n\r\n.profile_user_info {\r\n    width: 80%;\r\n    height: 95%;\r\n    margin: auto;\r\n    background-color: #F7F7F7;\r\n}\r\n\r\n.profile_user_info div {\r\n    font-family: monospace;\r\n}\r\n\r\n.profile_img {\r\n    width: 15%;\r\n    height: auto;\r\n    margin: auto;\r\n    padding-top: 4%;\r\n}\r\n\r\n.profile_img img {\r\n    width: 100%;\r\n    height: auto;\r\n    border-radius: 50%;\r\n    border: 4px solid #BABABA;\r\n}\r\n\r\n.profile_update_form {\r\n    width: 50%;\r\n    height: auto;\r\n    margin: auto;\r\n}\r\n\r\n.form-group {\r\n    width: 50%;\r\n    height: auto;\r\n    margin: auto;\r\n    margin-top: 1em;\r\n    font-size: 1.3em;\r\n}\r\n\r\n.update_btn {\r\n    width: 20%;\r\n    margin: auto;\r\n    margin-top: 3%;\r\n    margin-bottom: 10%;\r\n}\r\n\r\n.update_btn button {\r\n    width: 100%;\r\n    margin: auto;\r\n}\r\n\r\n.user_profile span:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.user_logout span:hover {\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <!--Navigation Bar-->\n  <div class=\"app_headline\">\n      <div class=\"app_navi\">\n        <div class=\"web_name\">\n          <span>RiceBook</span>\n        </div>\n  \n        <div class=\"web_logo\">\n          <img src=\"./assets/img/logo.png\">\n        </div>\n  \n        <div class=\"search_bar\">\n          <textarea placeholder=\"Harlan0103\"></textarea>\n        </div>\n  \n        <div class=\"search_btn\">\n          <button class=\"btn btn-default\">Search</button>\n        </div>\n  \n      <div class=\"user_profile\" routerLink=\"/main\">\n        <span>Main</span>\n      </div>\n  \n      <div class=\"user_logout\" routerLink=\"/\">\n        <span>Logout</span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"profile_main_frame\">\n  <div class=\"profile_user_info\">\n\n    <div class=\"profile_img\">\n      <img src={{profile.img}}>\n      <input type=\"file\" *ngIf=\"editable\">\n    </div>\n\n    <form class=\"profile_update_form\" #updateForm=\"ngForm\">\n      <div class=\"form-group\">\n        <label>Username</label>\n          <input type=\"text\" class=\"form-control\" id=\"account\" name=\"account\" disabled placeholder=\"{{profile.username}}\">\n          <div></div>\n        </div>\n      \n        <div class=\"form-group\">\n          <label>Dispaly name</label>\n          <input type=\"text\" class=\"form-control\" id=\"display\" name=\"display\" value=\"{{profile.displayname}}\" [(ngModel)]=\"profile.displayname\" *ngIf=\"editable\">\n          <input type=\"text\" class=\"form-control\" id=\"display\" name=\"display\" value=\"{{profile.displayname}}\" disabled *ngIf=\"diseditable\">\n          <div></div>\n        </div>\n      \n        <!--Email Address Editable-->\n        <div class=\"form-group\" *ngIf=\"editable\">\n            <label>Email</label>\n            <input type=\"text\" #email=\"ngModel\"\n                class=\"form-control\" [class.is-invalid]=\"email.invalid && email.touched\"\n                id=\"email\" name=\"email\" placeholder=\"username@ricebook.com\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" required \n                [(ngModel)]=\"profile.email\">\n            <!--Error message--> \n            <div *ngIf=\"email.errors && (email.invalid || email.touched)\" [class.d-none]=\"email.vliad || email.untouched\">\n                <small class=\"text-danger\" *ngIf=\"email.errors.required\">Email address is required</small>\n                <small class=\"text-danger\" *ngIf=\"email.errors.pattern\">Please enter a valid email address</small>\n            </div>\n        </div>\n\n        <!--Email Address Diseditable-->\n        <div class=\"form-group\" *ngIf=\"diseditable\">\n          <label>Email</label>\n          <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" required value=\"{{profile.email}}\" disabled>\n        </div>\n      \n        <!--Date of Birth-->\n        <div class=\"form-group\">\n          <label>Date of Birth</label>\n          <input type=\"text\" class=\"form-control\" id=\"dob\" name=\"dob\" disabled placeholder=\"{{profile.dob}}\">\n        </div>\n      \n        <!--Zipcode Diseditable-->\n        <div class=\"form-group\" *ngIf=\"diseditable\">\n          <label>Zipcode</label>\n          <input type=\"text\" class=\"form-control\" id=\"zipcode\" name=\"zipcode\" required value=\"{{profile.zipcode}}\" disabled >\n        </div>\n\n        <!--ZIPCODE-->\n        <div class=\"form-group\" *ngIf=\"editable\">\n            <label>Zipcode</label>\n            <input type=\"text\" #zipcode=\"ngModel\"\n                class=\"form-control\" [class.is-invalid]=\"zipcode.invalid && zipcode.touched\"\n                id=\"zipcode\" name=\"zipcode\" placeholder=\"77030\" pattern=\"\\d{5}\" required \n                [(ngModel)]=\"profile.zipcode\">\n              <!--The pattenr of zipcode should be 5 digit numbers-->\n            <!--Error message for invalid and mispattern-->\n            <div *ngIf=\"zipcode.errors && (zipcode.invalid || zipcode.touched)\" [class.d-none]=\"zipcode.valid || zipcode.untouched\">\n                <small class=\"text-danger\" *ngIf=\"zipcode.errors.required\">Zipcode is required</small>\n                <small class=\"text-danger\" *ngIf=\"zipcode.errors.pattern\">Zipcode must be 5 digit numbers</small>\n            </div>\n        </div>\n\n        <!--Update button-->\n        <div class=\"update_btn\">\n            <button class=\"btn btn-primary\" (click)=\"updateOnClick()\" *ngIf=\"editable\" [disabled]=\"updateForm.form.invalid\">Update</button>\n            <button class=\"btn btn-primary\" (click)=\"editOnClick()\" *ngIf=\"diseditable\">Edit</button>\n        </div>\n\n    </form>\n\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.service */ "./src/app/profile/profile.service.ts");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/login/login.service */ "./src/app/auth/login/login.service.ts");
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
    function ProfileComponent(_profileService, pService) {
        this._profileService = _profileService;
        this.pService = pService;
        // a string to store user profile
        this.currentUser = [];
        this.editable = false;
        this.diseditable = true;
        this.profile = {
            img: "",
            username: "",
            displayname: "",
            email: "",
            dob: "",
            zipcode: ""
        };
    }
    /*When click update, update data and show edit button*/
    ProfileComponent.prototype.updateOnClick = function () {
        this.editable = false;
        this.diseditable = true;
    };
    /*When click edit, show edit page with update button*/
    ProfileComponent.prototype.editOnClick = function () {
        this.editable = true;
        this.diseditable = false;
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._profileService.getUser().subscribe(function (data) {
            _this.currentUser = data;
            console.log(_this.currentUser);
            _this.storageUser = localStorage.getItem("currentUser");
            console.log(_this.storageUser);
            _this.getUserInfo();
            // Call method in service to fetch user profile into profile object
            _this.profile = _this.pService.fetchLoggedInUser(_this.storageUser, _this.currentUser);
            console.log(_this.profile);
            /*
            for(let i = 0; i < this.currentUser.length; i++){
              if(this.currentUser[i].netID == this.storageUser){
                //this.profile.img = this.currentUser[i].img;
                this.profile.dob = this.currentUser[i].dob;
                this.profile.img = this.currentUser[i].img;
                this.profile.username = this.currentUser[i].username;
                this.profile.zipcode = this.currentUser[i].zipcode;
                this.profile.displayname = this.currentUser[i].displayname;
                this.profile.email = this.currentUser[i].email;
              }
            }
            */
        });
    };
    ProfileComponent.prototype.getUserInfo = function () {
        console.log("fetching user data from service");
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.service.ts":
/*!********************************************!*\
  !*** ./src/app/profile/profile.service.ts ***!
  \********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
        // Create url
        this._url = "../../assets/mock-data/profile.json";
    }
    // Function to get user information
    ProfileService.prototype.getUser = function () {
        return this.http.get(this._url);
    };
    ProfileService.prototype.fetchLoggedInUser = function (username, userProfile) {
        //console.log(userProfile);
        //console.log(username);
        var profile = {
            username: "",
            displayname: "",
            email: "",
            zipcode: "",
            dob: "",
            img: ""
        };
        //let profile: IProfile;
        for (var i = 0; i < userProfile.length; i++) {
            if (username == userProfile[i].username) {
                profile.username = userProfile[i].username;
                profile.displayname = userProfile[i].displayname;
                profile.email = userProfile[i].email;
                profile.dob = userProfile[i].dob;
                profile.zipcode = userProfile[i].zipcode;
                profile.img = userProfile[i].img;
            }
        }
        //console.log(profile);
        return profile;
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/user_login.ts":
/*!*******************************!*\
  !*** ./src/app/user_login.ts ***!
  \*******************************/
/*! exports provided: UserLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLogin", function() { return UserLogin; });
/*
Create a class UserLogin initilize login component
*/
var UserLogin = /** @class */ (function () {
    function UserLogin() {
    }
    return UserLogin;
}());



/***/ }),

/***/ "./src/app/user_password_confirm.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/user_password_confirm.directive.ts ***!
  \****************************************************/
/*! exports provided: userPasswordConfirm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userPasswordConfirm", function() { return userPasswordConfirm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
@user_password_confirm.directive.ts
Custom password validation
The userPasswordConfirm class is implements the Angular Validator interface
So we need to import the Validator form "@angualr/forms"
In the Angular, When we create a directive
We need to decorate the directive
We create selector as attribute apply to the field we want to use
*/


var userPasswordConfirm = /** @class */ (function () {
    function userPasswordConfirm() {
    }
    userPasswordConfirm_1 = userPasswordConfirm;
    userPasswordConfirm.prototype.validate = function (control) {
        // To find the parent element form then get the the password element
        var controlToCompare = control.parent.get(this.pwdValidator);
        if (controlToCompare && controlToCompare.value !== control.value) {
            // The return type is {[key:string]: any | null}
            // Return the key to the template component to get the error type
            return { 'notEqual': true };
        }
        // Then add this module into root module
        return null;
    };
    var userPasswordConfirm_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], userPasswordConfirm.prototype, "pwdValidator", void 0);
    userPasswordConfirm = userPasswordConfirm_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[pwdValidator]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALIDATORS"],
                    useExisting: userPasswordConfirm_1,
                    multi: true
                }]
        })
    ], userPasswordConfirm);
    return userPasswordConfirm;
}());



/***/ }),

/***/ "./src/app/user_registration.ts":
/*!**************************************!*\
  !*** ./src/app/user_registration.ts ***!
  \**************************************/
/*! exports provided: UserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfo", function() { return UserInfo; });
/*
Create a class contains new registrated user information
*/
var UserInfo = /** @class */ (function () {
    function UserInfo() {
    }
    return UserInfo;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\harlan\Desktop\Ricebook\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map