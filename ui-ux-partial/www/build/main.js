webpackJsonp([2],{

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/sidemenu/sidemenu.module": [
		310,
		1
	],
	"../pages/signin/signin.module": [
		311,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var HomePage = /** @class */ (function () {
    function HomePage() {
        //setflag: boolean = false;
        this.user = {};
        //mailFlag: boolean = false;
        this.showMailFlag = false;
        this.availableUserTypes = [];
        this.userID = "";
        this.userName = "";
        this.ownerProperty = [];
        this.ownerMailingAddressState = false;
        //show is default
        this.isDefaultFlag = false;
        this.sameAsMailingAddress = false;
        this.notifications = [];
        this.allAvailableUserTypes = [];
        this.userUserTypes = [];
        this.companyTypes = [];
        this.currentUserType = {};
        this.addUserTypeActive = false;
        //mailing address form
        this.topForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            Name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](""),
            Id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](""),
            StreetAddress1: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            StreetAddress2: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](""),
            City: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            State: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            Zip: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            MailingAddressType: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("0"),
            UserId: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](this.userID)
        });
        ///property form for posting property info
        this.propertyForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            Id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](0),
            Customer: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
                Id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("0"),
                Name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](""),
                Email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("")
            }),
            StreetAddress1: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            StreetAddress2: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](""),
            City: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            State: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            Zip: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            UserId: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](""),
            Type: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]({}),
            Profiles: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]([]),
            Name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](""),
            IsProxy: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](false),
            IsDefault: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](false),
            ProxyPropertyId: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](0),
            UserTypeId: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]([])
        });
    }
    HomePage.prototype.updateSameAsMailingAddress = function () {
    };
    HomePage.prototype.showSetting = function (availableUserType) {
    };
    // Mailing Address
    // save mail address
    HomePage.prototype.saveMail = function (_availableUserType) {
    };
    // show / hide mail content
    HomePage.prototype.showHideMailContent = function (selectedAvailableUserType) {
    };
    HomePage.prototype.populateCustomerForm = function (properties) {
    };
    //show /hide property div
    HomePage.prototype.showHidePropertyContent = function (selectedPage) {
    };
    //if an option has three options hide/show the third option here
    HomePage.prototype.showHideCustomerContent = function (selectedPage) {
    };
    HomePage.prototype.showSetUp = function (selectedUserType) {
    };
    HomePage.prototype.toggleFormSelectionView = function (selectedAvailableUserType) {
    };
    //update default propety
    HomePage.prototype.updateDefaultProperty = function () {
    };
    // go my page
    HomePage.prototype.goMypage = function () {
    };
    //reset company info/mailing address form
    HomePage.prototype.getMailingAddress = function (availableUserType) {
    };
    //on selecct of a property from the dropdown
    HomePage.prototype.onPropertySelect = function (event, pageType) {
    };
    Object.defineProperty(HomePage.prototype, "IsDefault", {
        //get property default status
        get: function () {
            return this.propertyForm.get("IsDefault").value;
        },
        enumerable: true,
        configurable: true
    });
    HomePage.prototype.getProperties = function (userType) {
    };
    //add a new property into the System
    HomePage.prototype.addNewPropertyUpdate = function () {
    };
    //navigate to property-customer page
    HomePage.prototype.addNewProperty = function (availableUserType) {
    };
    //post new or existing property and also customers
    HomePage.prototype.postProperty = function (_availableUserType) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var postPropertyObj;
            return __generator(this, function (_a) {
                postPropertyObj = this.propertyForm.value;
                postPropertyObj.IsProxy = this.propertyForm.value.IsProxy;
                postPropertyObj.IsDefault = this.propertyForm.value.IsDefault;
                postPropertyObj.Type = _availableUserType.type;
                postPropertyObj.UserId = this.userID;
                postPropertyObj.UserTypeId = [_availableUserType.type.Id];
                postPropertyObj.CurrentUser = this.userName;
                if (this.propertyForm.value.Id == null || this.propertyForm.value.Id == 0) {
                    this.propertyForm.value.Customer.Id = 0;
                    postPropertyObj.Id = 0;
                    //postPropertyObj.Customer.Id = 0;
                    postPropertyObj.Profiles = [];
                }
                if (_availableUserType.name.toLowerCase() === 'owner' ||
                    _availableUserType.name.toLowerCase() === 'gamer') {
                    //ininitiliaze the profiles when its a new property
                    this.userDetails
                        .postProperty(postPropertyObj)
                        .subscribe(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.getUserMailingAddressAndProperties()];
                                case 1:
                                    _a.sent();
                                    this.addNewPropertyUpdate();
                                    this.alert.showToast("Property was updated.", this.constants.ToastColorGood);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                }
                else if (_availableUserType.name.toLowerCase() !== 'owner' &&
                    _availableUserType.name.toLowerCase() !== 'gamer') {
                    this.userDetails
                        .postProperty(postPropertyObj)
                        .subscribe(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.loading.closeSimpleLoading();
                                    return [4 /*yield*/, this.getUserMailingAddressAndProperties()];
                                case 1:
                                    _a.sent();
                                    this.loading.presentSimpleLoading('getting your information and properties/customers...');
                                    this.addNewPropertyUpdate();
                                    // Not sure if this belongs here
                                    // ------>
                                    this.userDetails
                                        .getCompanyInformation(this.userID, _availableUserType.id)
                                        .subscribe(function (response) {
                                        if (response) {
                                            _this.ownerMailingAddressState = true;
                                        }
                                        var streetAddress2 = response.StreetAddress2;
                                        _this.topForm.patchValue({
                                            Name: response.Name.trim(),
                                            Id: response.Id,
                                            StreetAddress1: response.StreetAddress1.trim(),
                                            StreetAddress2: (streetAddress2 !== undefined && streetAddress2 !== null && streetAddress2 !== '') ? streetAddress2.trim() : '',
                                            City: response.City.trim(),
                                            Zip: response.Zip.trim(),
                                            State: response.State
                                        });
                                        _this.loading.closeSimpleLoading();
                                        _this.alert.showToast("Property was updated.", _this.constants.ToastColorGood);
                                    });
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                }
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.updateUserTypeLocalStorage = function (userType) {
    };
    // get all available user types
    HomePage.prototype.getAllUserTypes = function () {
    };
    HomePage.prototype.getUserMailingAddressAndProperties = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    //get user notifications
    HomePage.prototype.getNotififications = function () { };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"C:\repo\123itt\123itt\ui-ux-partial\src\pages\home\home.html"*/'<ion-header no-border>\n\n	<ion-navbar color="bgbtn">\n\n		<button ion-button menuToggle>\n\n			<img src="assets/imgs/menu.png">\n\n		</button>\n\n		<ion-title class="TITLE">Home</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding>\n\n	<h1>Home page</h1>\n\n</ion-content>'/*ion-inline-end:"C:\repo\123itt\123itt\ui-ux-partial\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(308);


Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_0__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_chooser__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic2_super_tabs__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home_module__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_sidemenu_sidemenu__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_signin_signin__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__(305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_sidemenu_sidemenu__["a" /* SidemenuPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13_ionic_angular__["i" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/sidemenu/sidemenu.module#SidemenuPageModule', name: 'SidemenuPage', segment: 'sidemenu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home_module__["a" /* HomePageModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_14_ionic2_super_tabs__["a" /* SuperTabsModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13_ionic_angular__["g" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_sidemenu_sidemenu__["a" /* SidemenuPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_13_ionic_angular__["h" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_chooser__["a" /* Chooser */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_sidemenu_sidemenu__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_signin_signin__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storage) {
        var _this = this;
        this.storage = storage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.storage.get('userID').then(function (userID) {
                console.log(userID);
                if (userID == null) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_signin_signin__["a" /* SigninPage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_sidemenu_sidemenu__["a" /* SidemenuPage */];
                }
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\repo\123itt\123itt\ui-ux-partial\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\repo\123itt\123itt\ui-ux-partial\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["q" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["q" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidemenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SidemenuPage = /** @class */ (function () {
    function SidemenuPage(navCtrl, navParams, alertCtrl, loadingCtrl, storageCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storageCtrl = storageCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.photoUrl = "assets/imgs/logo.png";
        this.UserUserTyes = [];
        this.isOwner = false;
        this.isPrivateLabeler = false;
        this.isPrivateLabelerUser = false;
        this.storageCtrl.get("displayName").then(function (displayName) {
            _this.displayName = displayName;
        });
        this.storageCtrl.get("userTypes").then(function (userTypes) {
            _this.userTypes = userTypes;
        });
        this.getUserTypes();
    }
    SidemenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SidemenuPage');
        this.viewPage();
    };
    SidemenuPage.prototype.viewPage = function () {
        this.pages = [
            //{ image: 'assets/imgs/menu/home.svg', title: 'Home', component: HomePage},
            // { image: 'assets/imgs/menu/settings.svg', title: 'Account Settings', component: SettingPage },
            { image: 'assets/imgs/menu/logout.svg', title: 'Logout', component: null, class: 'logout' },
        ];
    };
    SidemenuPage.prototype.openPage = function (page) {
        var _this = this;
        if (page.component === null) {
            this.alertCtrl.create({
                title: "Confrim",
                message: "Are you sure want to Logout?",
                buttons: [{
                        text: "Cancel",
                        role: 'cancel',
                        handler: function () {
                            return;
                        }
                    },
                    {
                        text: "Ok",
                        cssClass: "signout",
                        handler: function () {
                            _this.storageCtrl.clear();
                            localStorage.clear();
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__signin_signin__["a" /* SigninPage */]);
                        }
                    }
                ]
            }).present();
            return;
        }
        else if (page.component === __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }
        else {
            this.nav.push(page.component);
        }
    };
    SidemenuPage.prototype.getUserTypes = function () {
        var _this = this;
        this.storageCtrl.get("userTypes").then(function (currentUserUserTypes) {
            _this.UserUserTyes = currentUserUserTypes;
            for (var _i = 0, _a = _this.UserUserTyes; _i < _a.length; _i++) {
                var userType = _a[_i];
                if (userType.Name.toLowerCase() === 'owner') {
                    _this.isOwner = true;
                }
                if (userType.Name.toLowerCase() === 'privatelabeluser') {
                    _this.isPrivateLabelerUser = true;
                }
            }
            if (_this.isOwner) {
                _this.pages.push({
                    image: 'assets/imgs/menu/account.svg',
                    title: 'Authorization',
                    component: null,
                    class: 'authorization'
                });
            }
            if (_this.isPrivateLabelerUser || _this.isPrivateLabeler) {
                _this.pages.push({
                    image: 'assets/imgs/menu/settings.svg',
                    title: 'Private Labeler Manager',
                    component: null,
                    class: 'private-labeler-manager'
                });
            }
            _this.pages.push({
                image: 'assets/imgs/menu/settings.svg',
                title: 'Help',
                component: null,
                class: 'help'
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Nav */]) === "function" && _a || Object)
    ], SidemenuPage.prototype, "nav", void 0);
    SidemenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sidemenu',template:/*ion-inline-start:"C:\repo\123itt\123itt\ui-ux-partial\src\pages\sidemenu\sidemenu.html"*/'<ion-split-pane>\n\n	<ion-menu type="overlay" [content]="content">\n\n		<ion-content>\n\n			<div class="topInfo" (click)="viewProfile()">\n\n				<div class="topProIcon"><img src="{{photoUrl}}" class="profilePhoto"></div>\n\n				<div class="proName">{{displayName}}</div>\n\n			</div>\n\n			<ion-list>\n\n				<div *ngFor="let p of pages" (click)="openPage(p)" style="border-top: 1px solid #ddd;" class="sidemenuItems {{p.class}}">\n\n					<button menuClose ion-item class="menubtn">\n\n						<img src="{{p.image}}" class="imgSize">\n\n						<span class="navTxt"> {{p.title}}</span>\n\n					</button>\n\n				</div>\n\n			</ion-list>\n\n		</ion-content>\n\n	</ion-menu>\n\n	<ion-nav [root]="rootPage" main #content></ion-nav>\n\n</ion-split-pane>'/*ion-inline-end:"C:\repo\123itt\123itt\ui-ux-partial\src\pages\sidemenu\sidemenu.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]) === "function" && _f || Object])
    ], SidemenuPage);
    return SidemenuPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=sidemenu.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SigninPage = /** @class */ (function () {
    function SigninPage(fb, navCtrl, navParams, loadingCtrl, alertCtrl, modalCtrl, storage) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.userInfo = {};
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.isLoggedIn = false;
    }
    SigninPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SigninPage');
    };
    SigninPage.prototype.signinUser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    SigninPage.prototype.gotoResetPage = function () {
    };
    SigninPage.prototype.registerUser = function () {
    };
    // password Show /Hide
    SigninPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
        console.log("hideShowPassword", this.passwordType, this.passwordIcon);
    };
    //sign in with facebook 
    SigninPage.prototype.signinWithFacebook = function () {
    };
    SigninPage.prototype.getUserDetail = function (userid) {
    };
    //sign in with google 
    SigninPage.prototype.signinWithGoogle = function () {
        console.log('signin with google');
    };
    SigninPage.prototype.clearContent = function () {
        this.userInfo.email = '';
        this.userInfo.pwd = '';
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"C:\repo\123itt\123itt\ui-ux-partial\src\pages\signin\signin.html"*/'<ion-header>\n\n	<ion-navbar color="bgbtn">\n\n		<ion-title>Login</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<div class="signin_container">\n\n		<div class="main_image">\n\n			<img src="assets/imgs/logo.png" />\n\n		</div>\n\n		<div class="main_cont">\n\n			<div class="userCont">\n\n				<ion-input \n\n						   type="text" \n\n						   [(ngModel)]="userInfo.email" \n\n						   placeholder="Email..." \n\n						   class="USER-NAME" \n\n						   (click)="clearContent()"></ion-input>\n\n			</div>\n\n			<div class="userCont">\n\n				<ion-input \n\n						   class="PASSWORD"\n\n						   [type]="passwordType" \n\n						   [(ngModel)]="userInfo.pwd" \n\n						   placeholder="Password..."></ion-input>\n\n				<ion-icon [name]="passwordIcon" (click)="hideShowPassword()"></ion-icon>\n\n			</div>\n\n			<div class="signin_signinbtn">\n\n				<button ion-button (click)="signinUser()" class="LOGIN">\n\n					Log In\n\n				</button>\n\n			</div>\n\n			<div class="facebook_signinbtn">\n\n				<button ion-button (click)="signinWithFacebook()">\n\n					Login with Facebook\n\n				</button>\n\n			</div>\n\n			<div class="google_signinbtn">\n\n				<button ion-button (click)="signinWithGoogle()">\n\n					Login with Google\n\n				</button>\n\n			</div>\n\n			<div class="signin_signupbtn">\n\n				<span (click)="gotoResetPage()">\n\n					Forgot Password?/\n\n				</span>\n\n				<span (click)="registerUser()" class="register">\n\n					Sign Up\n\n				</span>\n\n			</div>\n\n		</div>\n\n	</div>\n\n</ion-content>'/*ion-inline-end:"C:\repo\123itt\123itt\ui-ux-partial\src\pages\signin\signin.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]) === "function" && _g || Object])
    ], SigninPage);
    return SigninPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=signin.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map