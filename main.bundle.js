webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movies_movies_component__ = __webpack_require__("../../../../../src/app/movies/movies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__movie_detail_movie_detail_component__ = __webpack_require__("../../../../../src/app/movie-detail/movie-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
the AppRoutingModule
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { CommonModule } from '@angular/common';






var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    //tu dong homepage lay component dashboard lam trang chu . 
    //pathMatch: 'full' go phai dung ko dc viet hoa, dau cach
    { path: 'movies', component: __WEBPACK_IMPORTED_MODULE_2__movies_movies_component__["a" /* MoviesComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_4__movie_detail_movie_detail_component__["a" /* MovieDetailComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'contactdetail/:id', component: __WEBPACK_IMPORTED_MODULE_4__movie_detail_movie_detail_component__["a" /* MovieDetailComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                // CommonModule
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            // declarations: []
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  color: MediumSeaGreen;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 150%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    {{ title }}!\n  </h1>\n  <!--\n  <app-movies> </app-movies>\n  <app-pmovie></app-pmovie>\n  <app-messages></app-messages>\n-->\n<nav>\n  <a routerLink =\"/dashboard\">Dashboard</a>\n  <a routerLink =\"/movies\">Movies</a>\n</nav>\n<router-outlet></router-outlet>\n</div>\n\n\n<a href=\"/contact\">Contact</a>\n\n<a href=\"/contactdetail\">contactdetail</a>\n<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
App Component
*/

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'This is my Angular 5 tutorials series !';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__movies_movies_component__ = __webpack_require__("../../../../../src/app/movies/movies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__movie_detail_movie_detail_component__ = __webpack_require__("../../../../../src/app/movie-detail/movie-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__movie_service__ = __webpack_require__("../../../../../src/app/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__messages_messages_component__ = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__movie_search_movie_search_component__ = __webpack_require__("../../../../../src/app/movie-search/movie-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__contact_detail_contact_detail_component__ = __webpack_require__("../../../../../src/app/contact-detail/contact-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__test_test_component__ = __webpack_require__("../../../../../src/app/test/test.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__movies_movies_component__["a" /* MoviesComponent */],
                __WEBPACK_IMPORTED_MODULE_4__movie_detail_movie_detail_component__["a" /* MovieDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_7__messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__movie_search_movie_search_component__["a" /* MovieSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_13__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_14__contact_detail_contact_detail_component__["a" /* ContactDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_15__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_16__test_test_component__["a" /* TestComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__movie_service__["a" /* MovieService */],
                __WEBPACK_IMPORTED_MODULE_8__message_service__["a" /* MessageService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/contact-detail/contact-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact-detail/contact-detail.component.html":
/***/ (function(module, exports) {

module.exports = "TTT\n<div *ngFor =\"let contact of contacts\">\n  <a routerLink =\"contactdetail/{{contact.id}}\">{{contact.name}}</a>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/contact-detail/contact-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactDetailComponent = (function () {
    function ContactDetailComponent() {
        this.contacts = [
            { id: 1, name: 'name 1', phone: '1234' },
            { id: 2, name: 'name 2', phone: '4234' },
            { id: 3, name: 'name 3', phone: '234' },
            { id: 4, name: 'name 4', phone: '32456' },
        ];
    }
    // 3 injeantable: co the trich xuat o bat ki dau co cung gia tri va co the thay doi
    ContactDetailComponent.prototype.ngOnInit = function () {
    };
    ContactDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact-detail',
            template: __webpack_require__("../../../../../src/app/contact-detail/contact-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact-detail/contact-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactDetailComponent);
    return ContactDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "TTT\n<div *ngFor =\"let moviecontact of movies1\">\n  <a routerLink =\"../contactdetail/{{moviecontact.id}}\">{{moviecontact.name}}</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { fakeMovies } from '../fake-movies';
var ContactComponent = (function () {
    // movies = fakeMovies;
    function ContactComponent() {
        this.movie1 = {
            id: 1,
            name: "Star Wars",
            releaseYear: 1977
        };
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrap{max-width:1170px;margin:0 auto ;}\r\n.col-1-4{ width: 22%; float:left; padding-right:20px; padding-bottom: 20px;}\r\n.movie-box{ width: 130px; height: 80px; padding: 20px 10px;background: #ff0000; border-radius:5px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Top 4 Movies</h3>\n<div class=\"wrap\">\n  <a *ngFor = \"let movie of movies\" class=\"col-1-4\" \n    routerLink =\"/detail/{{movie.id}}\"\n  >\n    <div class=\"movie-box\">\n        <h4>{{movie.name}}</h4>\n    </div>\n  </a>\n</div>\n<div style=\"clear: both;\"></div>\n<br /><br /><br /><br />\n<app-movie-search></app-movie-search>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__movie_service__ = __webpack_require__("../../../../../src/app/movie.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //service lam nhiem vu lay du lieu
var DashboardComponent = (function () {
    function DashboardComponent(movieService) {
        this.movieService = movieService;
        this.movies = [];
    }
    DashboardComponent.prototype.getMovies = function () {
        var _this = this;
        this.movieService.getMovies().subscribe(function (movies) { return _this.movies = movies.slice(0, 10); });
        //subscribe THeo doi, quan sat khi naof ham co ket qua, co ket qua thi se chui vao. slice(1,5) lay tu 1 - 5
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.getMovies();
        //goi ham trong  ngOnInit chuw ko goi trong constructor se a/h den performer
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__movie_service__["a" /* MovieService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
MessageService
*/

var MessageService = (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.deleteAllMessages = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/app/messages/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button.clear {    \n    background: #3399ff;\n    color: white;\n    border: none;\n    padding: 5px;\n    border-radius: 4px;    \n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\nMr Nguyen Duc Hoang\nhttps://www.youtube.com/c/nguyenduchoang\nEmail: sunlight4d@gmail.com\nShow messages and button to \"delete all messages\"\n-->\n<div *ngIf=\"messageService.messages.length\" style=\"text-align:left;\">  \n  <h4>Messages</h4>\n  <button class=\"clear\"\n          (click)=\"messageService.deleteAllMessages()\">Delete all messages</button>\n  <div *ngFor='let message of messageService.messages'> {{message}}</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-messages',
            template: __webpack_require__("../../../../../src/app/messages/messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/movie-detail/movie-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\nMr Nguyen Duc Hoang\nhttps://www.youtube.com/c/nguyenduchoang\nEmail: sunlight4d@gmail.com\nCSS for MovieDetail Component\n*/\n.details {  \n    background: mediumseagreen;\n    color: white;\n    padding: 0.5em;\n    margin: 1em;        \n    max-width: 16em;  \n    text-align: left;\n    font-size: 0.875em; /* 14px/16=0.875em */\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/movie-detail/movie-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- \nMr Nguyen Duc Hoang\nhttps://www.youtube.com/c/nguyenduchoang\nEmail: sunlight4d@gmail.com\nHTML template for \"movie's details\" component\n-->\n<div *ngIf=\"movie\" class=\"details\">\n    <h3>Bai 8 You selected: {{movie.name}}. Details:</h3>\n    <table style=\"width: 100%\">            \n        <tr>\n            <td>name:</td>\n            <td><input [(ngModel)]=\"movie.name\" placeholder=\"name\"></td> \n        </tr>\n        <tr>\n            <td>release year: </td>\n            <input [(ngModel)]=\"movie.releaseYear\" placeholder=\"release year\">    \n        </tr>\n    </table>  \n    <button (click) = \"save()\">Save</button>\n    <button (click) = \"goBack()\">goBack</button>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/movie-detail/movie-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_movie__ = __webpack_require__("../../../../../src/models/movie.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__movie_service__ = __webpack_require__("../../../../../src/app/movie.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Movie's Detail Component
*/


 //laf vien router dang sing cletan (ton tai duy nhat trong app)
 //go back tro lai man hinh

var MovieDetailComponent = (function () {
    function MovieDetailComponent(route, movieService, location) {
        this.route = route;
        this.movieService = movieService;
        this.location = location;
    }
    // 3 injeantable: co the trich xuat o bat ki dau co cung gia tri va co the thay doi
    MovieDetailComponent.prototype.ngOnInit = function () {
        this.getMovieFromRoute();
    };
    MovieDetailComponent.prototype.getMovieFromRoute = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        console.log("this.route.snapshot.paramMap = " + JSON.stringify(this.route.snapshot.paramMap));
        //Call service to "get movie from id" ?
        this.movieService.getMovieFromId(id).subscribe(function (movie) { return _this.movie = movie; });
        //subscribe quan sat xem khi nao co ket qua, co ket qua thi chui va ham ben trong
        // dau + de bien thanh so
    };
    MovieDetailComponent.prototype.save = function () {
        var _this = this;
        this.movieService.updateMovie(this.movie).subscribe(function () { return _this.goBack(); });
    };
    MovieDetailComponent.prototype.goBack = function () {
        this.location.back();
        //quay tro lai man hinh truoc
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_movie__["a" /* Movie */])
    ], MovieDetailComponent.prototype, "movie", void 0);
    MovieDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-movie-detail',
            template: __webpack_require__("../../../../../src/app/movie-detail/movie-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/movie-detail/movie-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__movie_service__["a" /* MovieService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], MovieDetailComponent);
    return MovieDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/movie-search/movie-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/movie-search/movie-search.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- \nMr Nguyen Duc Hoang\nhttps://www.youtube.com/c/nguyenduchoang\nEmail: sunlight4d@gmail.com\nSearch movie by typing in <input> tag\n-->\n<div id=\"movies\">\n  <h4>Movie search</h4> \n  <input #searchBox (keyup)=\"search(searchBox.value)\" /> \n <!--  #searchBox: laf id cua the inbox trong angula -->\n  <ul class=\"movies\">\n    <li *ngFor=\"let movie of movies$ | async\" class=\"movieListItem\">\n      <a routerLink=\"/detail/{{movie.id}}\">\n        {{movie.name}}\n      </a>\n    </li>\n  </ul>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/movie-search/movie-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__movie_service__ = __webpack_require__("../../../../../src/app/movie.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
MovieSearchComponent
*/




var MovieSearchComponent = (function () {
    function MovieSearchComponent(movieService) {
        this.movieService = movieService;
        this.searchedSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    MovieSearchComponent.prototype.search = function (searchedString) {
        console.log("searchedString = " + searchedString);
        this.searchedSubject.next(searchedString);
    };
    MovieSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movies$ = this.searchedSubject.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* debounceTime */])(300), // wait 300ms after each keystroke before considering the searched string
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* distinctUntilChanged */])(), // ignore new string if same as previous string
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* switchMap */])(function (searchedString) { return _this.movieService.searchMovies(searchedString); }));
    };
    MovieSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-movie-search',
            template: __webpack_require__("../../../../../src/app/movie-search/movie-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/movie-search/movie-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__movie_service__["a" /* MovieService */]])
    ], MovieSearchComponent);
    return MovieSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/movie.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_movie__ = __webpack_require__("../../../../../src/models/movie.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Services could get data from server, create fake data, get data from local storage
*/




//MessageService


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var MovieService = (function () {
    function MovieService(http, 
        // http Thay doi o day thi noi khac cung thay doi, injectable
        messageService) {
        this.http = http;
        this.messageService = messageService;
        this.moviesURL = 'http://localhost:3000/movies/';
    }
    MovieService.prototype.getMovies = function () {
        // this.messageService.add(`${ new Date().toLocaleString()}. Get movie list`);
        // return of(fakeMovies);
        return this.http.get(this.moviesURL).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["e" /* tap */])(function (receivedMovies) { return console.log("receivedMovies = " + JSON.stringify(receivedMovies)); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])([]); })
        //nếu  lay dc dữ liệu thì vào hàm tap, còn ko lay dc thì vòa hàm catchError
        );
    };
    MovieService.prototype.getMovieFromId = function (id) {
        // return of(fakeMovies.find(movie => movie.id === id));
        var url = this.moviesURL + "/" + id;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["e" /* tap */])(function (receivedMovies) { return console.log("receivedMovies = " + JSON.stringify(receivedMovies)); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (_error) { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_1__models_movie__["a" /* Movie */]()); }));
    };
    /** PUT: update the movie on the server */
    MovieService.prototype.updateMovie = function (movie) {
        return this.http.put(this.moviesURL + "/" + movie.id, movie, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["e" /* tap */])(function (updatedMovie) { return console.log("updated movie = " + JSON.stringify(updatedMovie)); }));
    };
    /** POST: add a new movie to the server */
    MovieService.prototype.addMovie = function (newMovie) {
        return this.http.post(this.moviesURL, newMovie, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["e" /* tap */])(function (movie) { return console.log("inserted movie = " + JSON.stringify(movie)); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_1__models_movie__["a" /* Movie */]()); }));
    };
    /** DELETE: delete the movie from the server */
    MovieService.prototype.deleteMovie = function (movieId) {
        var url = this.moviesURL + "/" + movieId;
        return this.http.delete(url, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["e" /* tap */])(function (_) { return console.log("Deleted movie with id = " + movieId); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(null); }));
    };
    /* GET movies whose name contains searched string */
    MovieService.prototype.searchMovies = function (typedString) {
        if (!typedString.trim()) {
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])([]);
        }
        return this.http.get(this.moviesURL + "?name_like=" + typedString).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["e" /* tap */])(function (foundedMovies) { return console.log("founded movies = " + JSON.stringify(foundedMovies)); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(null); }));
    };
    MovieService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__message_service__["a" /* MessageService */]])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "../../../../../src/app/movies/movies.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\nMr Nguyen Duc Hoang\nhttps://www.youtube.com/c/nguyenduchoang\nEmail: sunlight4d@gmail.com\nCSS for Movies Component\n*/\n.parent {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.selected {\n  background: mediumseagreen !important;\n  color: white;\n}\n\n.movies {\n  background: #3399ff;  \n  padding: 0.5em 1em 0.5em 1.5em;\n  margin: 1em;        \n  max-width: 16em;\n}\n.movies .movieListItem \n{\n  font-size: 0.875em; /* 14px/16=0.875em */\n  font-family: Georgia, Serif;\n  background: #cce5ff;\n  padding: 0.3em;\n  margin: 0.2em;\n  text-align: left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/movies/movies.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- \nMr Nguyen Duc Hoang\nhttps://www.youtube.com/c/nguyenduchoang\nEmail: sunlight4d@gmail.com\nHTML template for \"movies\" component\n\n[class.selected]=\"eachMovie === selectedMovie\" \n            (click)=\"onSelect(eachMovie)\"\n-->\n<h2>My favorite movies1</h2>\n<div *ngFor =\"let moviecontact of movies\">\n    <a routerLink =\"../contactdetail/{{moviecontact.id}}\">{{moviecontact.name}}</a>\n  </div>\n\n\n<div style=\"text-align: left;\">\n    <table style=\"width: 300px\">\n        <tr>\n            <td>New movie's name:</td>\n            <td>\n                <input #movieName placeholder=\"name\">\n            </td>\n        </tr>\n        <tr>\n            <td>release year: </td>\n            <input #releaseYear placeholder=\"release year\">\n        </tr>\n        <tr>\n            <button (click)=\"add(movieName.value, releaseYear.value); movieName.value=''; releaseYear.value=''\">\n                add\n            </button>\n        </tr>\n    </table>\n</div>\n<div class=\"parent\">\n    <ol class=\"movies\">\n        <li class=\"movieListItem\" \n            *ngFor=\"let eachMovie of movies\" \n            [class.selected]=\"eachMovie === selectedMovie\" \n            (click)=\"onSelect(eachMovie)\"\n          >\n           \n                {{eachMovie.name}} - {{eachMovie.releaseYear}}\n          \n        </li>\n    </ol>\n    <app-movie-detail [movie]=\"selectedMovie\"></app-movie-detail>\n</div>\n\n\n<h2>My favorite movies</h2>\n<div class=\"parent\">\n    <ol class=\"movies\">\n        <li class=\"movieListItem\" \n            *ngFor=\"let eachMovie of movies\" \n          >\n            <a routerLink=\"/detail/{{eachMovie.id}}\" >\n                {{eachMovie.name}} - {{eachMovie.releaseYear}}\n            </a>\n            <button (click) = \"delete(eachMovie.id)\">X</button>\n        </li>\n    </ol>\n <!--    <app-movie-detail [movie]=\"selectedMovie\"></app-movie-detail> -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/movies/movies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_movie__ = __webpack_require__("../../../../../src/models/movie.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movie_service__ = __webpack_require__("../../../../../src/app/movie.service.ts");
/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Movies Component
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { fakeMovies } from '../fake-movies';

var MoviesComponent = (function () {
    function MoviesComponent(movieService) {
        this.movieService = movieService;
        this.movie = {
            id: 1,
            name: "Star Wars",
            releaseYear: 1977
        };
    }
    MoviesComponent.prototype.getMoviesFromServices = function () {
        var _this = this;
        //this.movies = this.movieService.getMovies();
        this.movieService.getMovies().subscribe(function (updatedMovies) { return _this.movies = updatedMovies; });
    };
    MoviesComponent.prototype.ngOnInit = function () {
        this.getMoviesFromServices();
    };
    MoviesComponent.prototype.onSelect = function (movie) {
        this.selectedMovie = movie;
        console.log("selectedMovie = " + JSON.stringify(this.selectedMovie));
        // alert(`selectedMovie = ${JSON.stringify(this.selectedMovie)}`);
    };
    MoviesComponent.prototype.add = function (name, releaseYear) {
        var _this = this;
        name = name.trim();
        if (Number.isNaN(Number(releaseYear)) || !name || Number(releaseYear) === 0) {
            alert('Name must not be blank, Release year must be a number');
            return;
        }
        var newMovie = new __WEBPACK_IMPORTED_MODULE_1__models_movie__["a" /* Movie */]();
        newMovie.name = name;
        newMovie.releaseYear = Number(releaseYear);
        this.movieService.addMovie(newMovie)
            .subscribe(function (insertedMovie) {
            _this.movies.push(insertedMovie);
        });
    };
    MoviesComponent.prototype.delete = function (movieId) {
        var _this = this;
        this.movieService.deleteMovie(movieId).subscribe(function (_) {
            _this.movies = _this.movies.filter(function (eachMovie) { return eachMovie.id !== movieId; });
        });
    };
    MoviesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-movies',
            template: __webpack_require__("../../../../../src/app/movies/movies.component.html"),
            styles: [__webpack_require__("../../../../../src/app/movies/movies.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__movie_service__["a" /* MovieService */]])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  test works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-test',
            template: __webpack_require__("../../../../../src/app/test/test.component.html"),
            styles: [__webpack_require__("../../../../../src/app/test/test.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/models/movie.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Movie; });
/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
movies.ts - Define Movie class
*/
var Movie = (function () {
    function Movie() {
    }
    return Movie;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map