(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\PROJECTS\DatingApp\DatingApp\Client\src\main.ts */"zUnb");


/***/ }),

/***/ "0zBU":
/*!***************************************************!*\
  !*** ./src/app/Components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _resister_resister_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resister/resister.component */ "g99/");




function HomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Find yout match");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Come on in to view your matches... all you need to do is signup!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.registerToggler(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Learn more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-resister", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("CancelRegister", function HomeComponent_div_2_Template_app_resister_CancelRegister_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.CancelRegisterMode($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    //HttpClient -> handling requests
    constructor(http) {
        this.http = http;
        //RegisterMode
        this.registerMode = false;
    }
    //Load -> when view is fully initialized
    ngOnInit() {
    }
    //Register Toggler
    //=================
    registerToggler() {
        this.registerMode = !this.registerMode;
    }
    //___________________
    //CancelRegisterMode
    //___________________
    //receives value from Child(registerComponent) via EventEmitter
    CancelRegisterMode(event) {
        //set event value in registerMode
        this.registerMode = event;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 2, consts: [[1, "container", "mt-5"], ["style", "text-align: center;", 4, "ngIf"], ["class", "container", 4, "ngIf"], [2, "text-align", "center"], [1, "lead"], [1, "text-center"], [1, "btn", "btn-primary", "btn-lg", "mr-2", 3, "click"], [1, "btn", "btn-info", "btn-lg"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-4"], [3, "CancelRegister"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 10, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 4, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.registerMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerMode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _resister_resister_component__WEBPACK_IMPORTED_MODULE_3__["ResisterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "OhjR":
/*!*****************************************************!*\
  !*** ./src/app/Shared/_services/account.service.ts ***!
  \*****************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global */ "WQwO");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");





class AccountService {
    //HttpClient - for handling requests
    constructor(http) {
        this.http = http;
        //(SubjectBehaviour - Observable)
        //------------------
        //CurrentUser Data
        this.currentUser = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        //User is loggedIn or not
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
    }
    //getter methods - to use outside component
    //asObservable() -> subject cannot be modified using next()
    //--------------
    get CurrentUser() {
        return this.currentUser.asObservable();
    }
    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }
    //--------------------
    //**SET CurrentUser**
    //--------------------
    //used in appComponent to make user loggedIn until logOut is clicked
    //get user from localStorage & pass in this method
    setCurrentUser(user) {
        this.currentUser.next(user);
    }
    //=======
    //Login
    //=======
    //model = formData passed into login() method
    login(model) {
        //Call API(accounts/login)
        return this.http.post(_global__WEBPACK_IMPORTED_MODULE_1__["Global"].BASE_API_PATH + "account/login", model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            //Get user from API
            const user = res;
            //console.log("LOGIN API RESPONSE:"+ JSON.stringify(res));
            //If **Success** 
            if (user) {
                //SetCurrent user detais = user in BehaviourSubject
                this.currentUser.next(user);
                //Set loggedIn Status = true
                this.loggedIn.next(true);
                //add user to LocalStorage
                localStorage.setItem('user', JSON.stringify(user));
            }
        }));
    }
    //=========
    //Register
    //=========
    register(model) {
        //Call Register API
        return this.http.post(_global__WEBPACK_IMPORTED_MODULE_1__["Global"].BASE_API_PATH + "account/register", model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            //Get User from API
            const user = res;
            //If **Success**
            if (user) {
                //SetCurrent user detais = user in BehaviourSubject
                this.currentUser.next(user);
                //Set loggedIn Status = true
                this.loggedIn.next(true);
                //Add User to LocalStorage
                localStorage.setItem('user', JSON.stringify(res));
            }
            //optional to show 'res' from API directly without JSON.Stringify(res)
            return user;
        }));
    }
    //========
    //Logout
    //========
    logout() {
        //Clear LocalStorage
        //localStorage.removeItem('user');
        localStorage.clear();
        //SetCurrent user detais = null in BehaviourSubject
        this.currentUser.next(null);
        //Set loggedIn Status = false
        this.loggedIn.next(false);
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Shared_services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shared/_services/account.service */ "OhjR");
/* harmony import */ var _Shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Shared/components/nav/nav.component */ "Zk9G");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    //Dependency Injection -> HttpClient
    constructor(accountService) {
        this.accountService = accountService;
        this.title = 'Client';
    }
    //Loads -> when view is fully initialized
    ngOnInit() {
        //CurrentUser
        this.setCurrentUser();
    }
    //CurrentUser
    //============
    setCurrentUser() {
        //get user from localStorage + pass in setCurrentUser in accountService
        const user = JSON.parse(localStorage.getItem('user'));
        this.accountService.setCurrentUser(user);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Shared_services_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container", 2, "margin-top", "60px"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_Shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "WQwO":
/*!**********************************!*\
  !*** ./src/app/Shared/global.ts ***!
  \**********************************/
/*! exports provided: Global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
//=================
// BASE API PATH 
//=================
//BASE API URL is kept here
//use static keword => access directly as className.BASE_API_URL;
//dont need to create class instance
//NOTE:
//This url can also be kept in environments - production,development depending upon the use case 
//but here we need to specify if we want to use that url for production mode
class Global {
}
Global.BASE_API_PATH = "http://localhost:1472/api/";


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _Shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Shared/components/nav/nav.component */ "Zk9G");
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/home/home.component */ "0zBU");
/* harmony import */ var _Components_resister_resister_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/resister/resister.component */ "g99/");
/* harmony import */ var _Components_members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/members/member-list/member-list.component */ "uFKN");
/* harmony import */ var _Components_members_member_details_member_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/members/member-details/member-details.component */ "ibBO");
/* harmony import */ var _Components_lists_lists_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/lists/lists.component */ "nynr");
/* harmony import */ var _Components_messages_messages_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/messages/messages.component */ "slVL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            //ToastrModule
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot({
                positionClass: 'toast-bottom-right'
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _Shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
        _Components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _Components_resister_resister_component__WEBPACK_IMPORTED_MODULE_9__["ResisterComponent"],
        _Components_members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_10__["MemberListComponent"],
        _Components_members_member_details_member_details_component__WEBPACK_IMPORTED_MODULE_11__["MemberDetailsComponent"],
        _Components_lists_lists_component__WEBPACK_IMPORTED_MODULE_12__["ListsComponent"],
        _Components_messages_messages_component__WEBPACK_IMPORTED_MODULE_13__["MessagesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"]] }); })();


/***/ }),

/***/ "Zk9G":
/*!********************************************************!*\
  !*** ./src/app/Shared/components/nav/nav.component.ts ***!
  \********************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/account.service */ "OhjR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");






function NavComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Matches");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "List");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function NavComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Edit Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_7_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, user_r3.userName), "");
} }
function NavComponent_form_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NavComponent_form_9_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NavComponent_form_9_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.model.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NavComponent_form_9_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.model.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.model.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.model.password);
} }
class NavComponent {
    //AccountService,Router,ToastrNotification
    constructor(accountService, router, toastr) {
        this.accountService = accountService;
        this.router = router;
        this.toastr = toastr;
        //Model
        this.model = {
            username: "",
            password: ""
        };
    }
    ngOnInit() {
        //________________
        //Get CurrentUser
        //________________
        //currentUser -> holds user obj
        this.currentUser = this.accountService.CurrentUser;
    }
    //=======
    //Login
    //=======
    //pass model(formData) -> login
    login() {
        this.accountService.login(this.model).subscribe(res => {
            //res = loggedInData
            //console.log("LoggedIn Successfully!");
            //Toastr Notification
            this.toastr.success("LoggedIn Successfully!");
            //After Login -> navigate to membersComponent
            this.router.navigateByUrl('/members');
        }, error => {
            console.log(error);
            //Toastr notification
            this.toastr.error(error.error);
        });
    }
    //=======
    //Logout
    //=======
    logout() {
        this.accountService.logout();
        //console.log("LoggedOut Successfully!");
        //Toastr notification
        this.toastr.success("LoggedOut Successfully!");
        //After Logout -> navigate to HomeComponent
        this.router.navigateByUrl('/');
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 11, vars: 9, consts: [[1, "navbar", "navbar-expand-lg", "navbar", "navbar-dark", "bg-primary"], [1, "container"], ["routerLink", "/", 1, "navbar-brand"], [1, "navbar-nav", "mr-auto", "mt-2", "mt-lg-0"], [4, "ngIf"], ["class", "dropdown mr-40", "style", "float:right;", 4, "ngIf"], ["class", "form-inline my-2 my-lg-0", "autocomplete", "false", 3, "ngSubmit", 4, "ngIf"], [1, "nav-item"], ["href", "/members", 1, "nav-link"], ["href", "/lists", 1, "nav-link"], ["routerLink", "/messages", 1, "nav-link"], [1, "dropdown", "mr-40", 2, "float", "right"], ["id", "dropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle", "text-light", 2, "text-decoration", "none!important"], ["aria-labelledby", "dropdownMenuLink", 1, "dropdown-menu", "mt-3"], ["href", "#", 1, "dropdown-item"], [1, "dropdown-divider"], ["href", "#", 1, "dropdown-item", 3, "click"], ["autocomplete", "false", 1, "form-inline", "my-2", "my-lg-0", 3, "ngSubmit"], ["form", "ngForm"], ["type", "text", "placeholder", "Username", "name", "username", 1, "form-control", "mr-sm-2", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Password", "name", "password", 1, "form-control", "mr-sm-2", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-success", "my-2", "my-sm-0"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dating App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavComponent_ng_container_5_Template, 10, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavComponent_div_7_Template, 10, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavComponent_form_9_Template, 6, 2, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, ctx.currentUser));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, ctx.currentUser));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, ctx.currentUser) === null);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"]], styles: [".dropdown-toggle[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]{\r\n    cursor:pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi10b2dnbGUsIC5kcm9wZG93bi1pdGVte1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "ckG1":
/*!*****************************************************!*\
  !*** ./src/app/Shared/_services/members.service.ts ***!
  \*****************************************************/
/*! exports provided: MembersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersService", function() { return MembersService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global */ "WQwO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




//===========
//Http Header
//===========
//Requires JWT Token => Pass JWT in Headers
//**Get Token from user.Token in localStorage (current user login)**
//Pass Token in Header: {Authorization: Bearer Token}
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
        Authorization: 'Bearer' + JSON.parse(localStorage.getItem('user')).token
    })
};
class MembersService {
    //Http -> handling http requests
    constructor(http) {
        this.http = http;
    }
    //___________
    //Get Users
    //___________
    //Type: Member[]
    getMembers() {
        return this.http.get(_global__WEBPACK_IMPORTED_MODULE_1__["Global"].BASE_API_PATH + 'users', httpOptions);
    }
    //_________________
    //Get User by name
    //_________________
    //Type: Member
    getMember(username) {
        return this.http.get(_global__WEBPACK_IMPORTED_MODULE_1__["Global"].BASE_API_PATH + 'users/' + username, httpOptions);
    }
}
MembersService.ɵfac = function MembersService_Factory(t) { return new (t || MembersService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
MembersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MembersService, factory: MembersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "g99/":
/*!***********************************************************!*\
  !*** ./src/app/Components/resister/resister.component.ts ***!
  \***********************************************************/
/*! exports provided: ResisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResisterComponent", function() { return ResisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Shared_services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Shared/_services/account.service */ "OhjR");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");





class ResisterComponent {
    //AccountService(Dependency Injection),ToastrService
    constructor(accountService, toastr) {
        this.accountService = accountService;
        this.toastr = toastr;
        //Model
        this.model = {
            username: "",
            password: ""
        };
        //OUTPUT Data to HomeComponent(Child->Parent)
        //sending CancelNotification -> to set registerMode=false
        //use EventEmitter() to emit value in Cancel() method
        this.CancelRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    //=========
    //Register
    //=========
    register() {
        this.accountService.register(this.model).subscribe(res => {
            //res - register form data 
            //console.log(res);
            //Toastr Notification
            this.toastr.success("Registerd Successfully!");
            //Move to HomePage after Registration
            this.cancel();
        }, error => {
            //console.log(error);
            //Toastr Notification
            this.toastr.error(error.error);
        });
    }
    //________
    // Cancel
    //========
    cancel() {
        //console.log("Registration Cancelled!");
        //Emit value using eventEmitter
        this.CancelRegister.emit(false);
    }
}
ResisterComponent.ɵfac = function ResisterComponent_Factory(t) { return new (t || ResisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Shared_services_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"])); };
ResisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResisterComponent, selectors: [["app-resister"]], outputs: { CancelRegister: "CancelRegister" }, decls: 14, vars: 2, consts: [["autocomplete", "off", 3, "ngSubmit"], ["registerForm", "ngForm"], [1, "text-center", "text-primary"], [1, "form-group"], ["type", "text", "placeholder", "Username", "name", "username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Password", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-success", "mr-2"], ["type", "button", 1, "btn", "btn-danger", "mr-2", 3, "click"]], template: function ResisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResisterComponent_Template_form_ngSubmit_0_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResisterComponent_Template_input_ngModelChange_6_listener($event) { return ctx.model.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResisterComponent_Template_input_ngModelChange_8_listener($event) { return ctx.model.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResisterComponent_Template_button_click_12_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNpc3Rlci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "ibBO":
/*!*******************************************************************************!*\
  !*** ./src/app/Components/members/member-details/member-details.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MemberDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDetailsComponent", function() { return MemberDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MemberDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
MemberDetailsComponent.ɵfac = function MemberDetailsComponent_Factory(t) { return new (t || MemberDetailsComponent)(); };
MemberDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MemberDetailsComponent, selectors: [["app-member-details"]], decls: 2, vars: 0, template: function MemberDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "member-details works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW1iZXItZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "nynr":
/*!*****************************************************!*\
  !*** ./src/app/Components/lists/lists.component.ts ***!
  \*****************************************************/
/*! exports provided: ListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsComponent", function() { return ListsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ListsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ListsComponent.ɵfac = function ListsComponent_Factory(t) { return new (t || ListsComponent)(); };
ListsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListsComponent, selectors: [["app-lists"]], decls: 2, vars: 0, template: function ListsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "lists works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0cy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "slVL":
/*!***********************************************************!*\
  !*** ./src/app/Components/messages/messages.component.ts ***!
  \***********************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MessagesComponent {
    constructor() { }
    ngOnInit() {
    }
}
MessagesComponent.ɵfac = function MessagesComponent_Factory(t) { return new (t || MessagesComponent)(); };
MessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessagesComponent, selectors: [["app-messages"]], decls: 2, vars: 0, template: function MessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "messages works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdlcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "uFKN":
/*!*************************************************************************!*\
  !*** ./src/app/Components/members/member-list/member-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: MemberListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberListComponent", function() { return MemberListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Shared_services_members_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Shared/_services/members.service */ "ckG1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function MemberListComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r1.knownAs);
} }
class MemberListComponent {
    //Service Object - DependencyInjection
    constructor(membersService) {
        this.membersService = membersService;
    }
    //Load -> when view is fully initialized
    ngOnInit() {
        //Call methods
        this.getMembers();
    }
    //==========
    //Get Users
    //==========
    getMembers() {
        this.membersService.getMembers().subscribe(res => {
            this.members = res;
        });
    }
}
MemberListComponent.ɵfac = function MemberListComponent_Factory(t) { return new (t || MemberListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Shared_services_members_service__WEBPACK_IMPORTED_MODULE_1__["MembersService"])); };
MemberListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MemberListComponent, selectors: [["app-member-list"]], decls: 3, vars: 1, consts: [[1, "row"], [1, "col-2"], [4, "ngFor", "ngForOf"]], template: function MemberListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MemberListComponent_p_2_Template, 2, 1, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.members);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW1iZXItbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/home/home.component */ "0zBU");
/* harmony import */ var _Components_lists_lists_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/lists/lists.component */ "nynr");
/* harmony import */ var _Components_members_member_details_member_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/members/member-details/member-details.component */ "ibBO");
/* harmony import */ var _Components_members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/members/member-list/member-list.component */ "uFKN");
/* harmony import */ var _Components_messages_messages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/messages/messages.component */ "slVL");
/* harmony import */ var _Shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Shared/_guards/auth.guard */ "vkgl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const routes = [
    //HomePage
    { path: '', component: _Components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    //RouteGuard Protected
    //implement routeGuard in single line for all routes
    { path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [_Shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        children: [
            //Members
            { path: 'members', component: _Components_members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_4__["MemberListComponent"] },
            { path: 'members/:id', component: _Components_members_member_details_member_details_component__WEBPACK_IMPORTED_MODULE_3__["MemberDetailsComponent"] },
            //Lists
            { path: 'lists', component: _Components_lists_lists_component__WEBPACK_IMPORTED_MODULE_2__["ListsComponent"] },
            //Messages
            { path: 'messages', component: _Components_messages_messages_component__WEBPACK_IMPORTED_MODULE_5__["MessagesComponent"] },
        ] },
    //WildCardRoute 
    { path: '**', component: _Components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vkgl":
/*!**********************************************!*\
  !*** ./src/app/Shared/_guards/auth.guard.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/account.service */ "OhjR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");





class AuthGuard {
    //Depenedencies = AccountService|Router|ToastrNotification
    constructor(accountService, router, toastr) {
        this.accountService = accountService;
        this.router = router;
        this.toastr = toastr;
    }
    canActivate(route, state) {
        //return true;
        //Returns true/false -> if User is LoggedIn OR not!
        //-------------------
        return this.accountService.CurrentUser.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(user => {
            //if user is loggedIn
            if (user) {
                //Grant Access to route
                return true;
            }
            //if not user -> not loggedIn
            //Unauthorized Access
            this.toastr.error("Login to continue!");
            return false;
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map