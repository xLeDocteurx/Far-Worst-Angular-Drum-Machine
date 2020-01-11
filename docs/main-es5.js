function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Header -->\n<app-header [appName]=\"appName\"></app-header>\n\n<!-- Router -->\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/drumkit-choice/drumkit-choice.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drumkit-choice/drumkit-choice.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDrumkitChoiceDrumkitChoiceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content\" role=\"main\">\n\t<h1>Choose your drum kit</h1>\n\n\t<mat-card>\n\n\t\t<mat-card-content class=\"order-options-container\">\n\t\t\t<div class=\"order-options-container\">\n\t\t\t\tOrder options : \n\t\t\t\t<div class=\"order-options\">\n\t\t\t\t\tname\n\t\t\t\t\t<button mat-button (click)=\"sortByName()\">\n\t\t\t\t\t\t<mat-icon>arrow_drop_up</mat-icon>\n\t\t\t\t\t</button>\n\t\t\t\t\t<button mat-button (click)=\"sortByNameReverse()\">\n\t\t\t\t\t\t<mat-icon>arrow_drop_down</mat-icon>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"order-options\">\n\t\t\t\t\tauthor\n\t\t\t\t\t<button mat-button (click)=\"sortByAuthor()\">\n\t\t\t\t\t\t<mat-icon>arrow_drop_up</mat-icon>\n\t\t\t\t\t</button>\n\t\t\t\t\t<button mat-button (click)=\"sortByAuthorReverse()\">\n\t\t\t\t\t\t<mat-icon>arrow_drop_down</mat-icon>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"order-options\">\n\t\t\t\t\tnumber of samples\n\t\t\t\t\t<button mat-button (click)=\"sortByNumberOfSamples()\">\n\t\t\t\t\t\t<mat-icon>arrow_drop_up</mat-icon>\n\t\t\t\t\t</button>\n\t\t\t\t\t<button mat-button (click)=\"sortByNumberOfSamplesReverse()\">\n\t\t\t\t\t\t<mat-icon>arrow_drop_down</mat-icon>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<mat-form-field class=\"search-form\">\n\t\t\t\t<mat-label>Seach by drum kit name or author name</mat-label>\n\t\t\t\t<input matInput placeholder=\"\" [(ngModel)]=\"filterInput\" (ngModelChange)=\"onFilterInputChange()\">\n\t\t\t\t\n\t\t\t\t<mat-icon matSuffix *ngIf=\"filterInput == ''\" class=\"grey-icon\">search</mat-icon>\n\t\t\t\t<mat-icon matSuffix *ngIf=\"filterInput != ''\" (click)=\"resetFilter()\">clear</mat-icon>\n\t\t\t</mat-form-field>\n\n\t\t\t<hr>\n\t\t</mat-card-content>\n\n\t\t<mat-card-content>\n\t\t\t<mat-action-list *ngIf=\"filteredDrumKits.length > 0\">\n\t\t\t\t<app-drumkit-list-element *ngFor=\"let drumKit of filteredDrumKits\" [drumKit]=\"drumKit\"></app-drumkit-list-element>\n\t\t\t</mat-action-list>\n\t\t\t<div *ngIf=\"filteredDrumKits.length < 1 && filterInput != ''\">\n\t\t\t\tNo result\n\t\t\t</div>\n\t\t</mat-card-content>\n\n\t</mat-card>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/drumkit-choice/drumkit-list-element/drumkit-list-element.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drumkit-choice/drumkit-list-element/drumkit-list-element.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDrumkitChoiceDrumkitListElementDrumkitListElementComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button mat-list-item (click)=\"selectDrumKit()\">\n\t<mat-icon matListIcon>music_video</mat-icon>\n\t<h3 matLine>Name: {{ drumKit.name }}</h3>\n\t<p matLine>\n\t\t<span>Author: {{ drumKit.author }}</span>\n\t\t / \n\t\t<span class=\"demo-2\">Number of samples: {{ drumKit.samples.length }}</span>\n\t</p>\n</button>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/e404/e404.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/e404/e404.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppE404E404ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content\">\n\t\n\t<h1>This page does not exist</h1>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<!-- Toolbar -->\n<div class=\"toolbar\" role=\"banner\">\n\t<a routerLink=\"/\">\n\t    <img\n\t      width=\"40\"\n\t      alt=\"Angular Logo\"\n\t      src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"\n\t    />\n\t</a>\n  \t<span>{{ appName }}</span>\n\n\t<div class=\"spacer\"></div>\n\n\t<a routerLink=\"/choose-kit\">Choose a drumkit</a>\n\t<a routerLink=\"/play\">Play</a>\n\n\t<div class=\"counter-spacer\"></div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content\" role=\"main\">\n\n  <h2>Welcome</h2>\n\n  <p>\n    This is my first Angular project.<br>\n    I tried as much as possible to manage the architechture with good practices.<br>\n    It is a simple musical app where you choose a drumkit and then you can play with it like on a drum machine.\n    For now now it is ment to be played on a touch screen device like a tablet or a big screen cellphone.<br>\n    Later I will implement MIDI input ( to get inputs from a physical keyboard or any MIDI device ) and keyboard ( to get inputs from either way a computer keyboard or a Makey Makey )<br>\n    Some drumkit creation would be nice too but I would have to dive deeper into the Angular docs.\n  </p>\n\n  I used :<br>\n  <ul>\n    <li>\n      A simple solution to order/filter drumkits in the \"choose a drumkit\" page's list<br>\n      I only display a copy of the drumkits, called \"filteredDrumKits\". When a search input is provided, it serves at receiving the filtered results. When no search input is provided it is the same as the original drumkits array.<br>\n      That same array is used when ordering the results.\n    </li>\n    <li>\n      Angular services to make some data available to the whole app.<br>\n      If I had more time to spend on this app I would have tried to implement a Flux\n    </li>\n    <li>\n      Angular Material library to style the components and make use of multitouch screen on tablets\n    </li>\n  </ul>\n  \n  <p>\n    This first try at making an app with Angular and Typescript was a good surprise when it came to discover the basics.<br>\n    I now understand where most of the template syntaxe of Vue.js comes from. From the loops to the conditionnal rendering. Vue.js' Observables are also inpired a lot from Angular's Observables.<br>\n    For the typescript part. The syntaxe hurts a lot at first but I understoud a lot of its capabilities.\n    It really unleash javascript POO abilities. ( In vanilla JS, having constructor and accessors without the possibility to have private variable feels strange to me but that does not with Typescript )<br>\n    Typed variable is really cool since it saves a lot of time not having to implement types validators.\n  </p>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/play/play.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play/play.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlayPlayComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content\">\n\n\t<div *ngIf=\"selectedDrumKit == null\">\n\t\tPlease, choose a drumkit before playing\n\t\t<hr>\n\t\t<button mat-raised-button (click)=\"goToChooseDrumKit()\" color=\"primary\">Choose your drumkit</button>\n\t</div>\n\t<!-- <div *ngIf=\"selectedDrumKit != null\">PAS NULL</div> -->\n\n<!-- \t<div *ngIf=\"selectedDrumKit == null\">\n\t\t<p>Please, choose a drumkit before playing</p>\n\t\t<button mat-raised-button (click)=\"goToChooseDrumKit()\" color=\"primary\">Choose your drumkit</button>\n\t<div> -->\n\n\t<mat-grid-list *ngIf=\"selectedDrumKit != null\" cols=\"4\" rowHeight=\"fit\" gutterSize=\"10px\" class=\"pads-container\">\n\t\t<mat-grid-tile mat-list-item *ngFor=\"let sample of selectedDrumKit.samples; index as i\" (click)=\"playAudioElement(i)\" class=\"pad\">\n\t\t\t{{ sample.name }}\n\t\t</mat-grid-tile>\n\t</mat-grid-list>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _e404_e404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./e404/e404.component */
    "./src/app/e404/e404.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _drumkit_choice_drumkit_choice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./drumkit-choice/drumkit-choice.component */
    "./src/app/drumkit-choice/drumkit-choice.component.ts");
    /* harmony import */


    var _play_play_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./play/play.component */
    "./src/app/play/play.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'choose-kit',
      component: _drumkit_choice_drumkit_choice_component__WEBPACK_IMPORTED_MODULE_5__["DrumkitChoiceComponent"]
    }, {
      path: 'play',
      component: _play_play_component__WEBPACK_IMPORTED_MODULE_6__["PlayComponent"]
    }, {
      path: '**',
      component: _e404_e404_component__WEBPACK_IMPORTED_MODULE_3__["E404Component"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 8px 0;\n}\n\np {\n  margin: 0;\n}\n\n.content {\n  display: flex;\n  margin: 32px auto;\n  padding: 0 16px;\n  max-width: 960px;\n  flex-direction: column;\n  align-items: center;\n}\n\nsvg.material-icons {\n  height: 24px;\n  width: auto;\n}\n\nsvg.material-icons:not(:last-child) {\n  margin-right: 8px;\n}\n\na,\na:visited,\na:hover {\n  color: #1976d2;\n  text-decoration: none;\n}\n\na:hover {\n  color: #125699;\n}\n\n.terminal {\n  position: relative;\n  width: 80%;\n  max-width: 600px;\n  border-radius: 6px;\n  padding-top: 45px;\n  margin-top: 8px;\n  overflow: hidden;\n  background-color: rgb(15, 15, 16);\n}\n\n.terminal::before {\n  content: \"\\2022 \\2022 \\2022\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  background: rgb(58, 58, 58);\n  color: #c2c3c4;\n  width: 100%;\n  font-size: 2rem;\n  line-height: 0;\n  padding: 14px 0;\n  text-indent: 4px;\n}\n\n.terminal pre {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  color: white;\n  padding: 0 1rem 1rem;\n  margin: 0;\n}\n\n.circle-link {\n  height: 40px;\n  width: 40px;\n  border-radius: 40px;\n  margin: 8px;\n  background-color: white;\n  border: 1px solid #eeeeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: 1s ease-out;\n}\n\n.circle-link:hover {\n  transform: translateY(-0.25rem);\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\n\nfooter {\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  line-height: 20px;\n}\n\nfooter a {\n  display: flex;\n  align-items: center;\n}\n\n.github-star-badge {\n  color: #24292e;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  padding: 3px 10px;\n  border: 1px solid rgba(27,31,35,.2);\n  border-radius: 3px;\n  background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n  margin-left: 4px;\n  font-weight: 600;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n}\n\n.github-star-badge:hover {\n  background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n  border-color: rgba(27,31,35,.35);\n  background-position: -.5em;\n}\n\n.github-star-badge .material-icons {\n  height: 16px;\n  width: 16px;\n  margin-right: 4px;\n}\n\nsvg#clouds {\n  position: fixed;\n  bottom: -160px;\n  left: -230px;\n  z-index: -10;\n  width: 1920px;\n}\n\n/* Responsive Styles */\n\n@media screen and (max-width: 767px) {\n\n  .card-container > *:not(.circle-link) ,\n  .terminal {\n    width: 100%;\n  }\n\n  .card:not(.highlight-card) {\n    height: 16px;\n    margin: 8px 0;\n  }\n\n  .card.highlight-card span {\n    margin-left: 72px;\n  }\n\n  svg#rocket-smoke {\n    right: 120px;\n    transform: rotate(-5deg);\n  }\n}\n\n@media screen and (max-width: 575px) {\n  svg#rocket-smoke {\n    display: none;\n    visibility: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwSkFBMEo7RUFDMUosZUFBZTtFQUNmLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQzs7QUFFQTs7Ozs7O0VBTUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9FQUFvRTtFQUNwRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix3RUFBd0U7RUFDeEUsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsOERBQThEO0VBQzlELGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0lBQWtJO0FBQ3BJOztBQUVBO0VBQ0UsOERBQThEO0VBQzlELGdDQUFnQztFQUNoQywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBR0Esc0JBQXNCOztBQUN0Qjs7RUFFRTs7SUFFRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtJQUNaLHdCQUF3QjtFQUMxQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luOiA4cHggMDtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDMycHggYXV0bztcbiAgcGFkZGluZzogMCAxNnB4O1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5zdmcubWF0ZXJpYWwtaWNvbnMge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG5zdmcubWF0ZXJpYWwtaWNvbnM6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG5hLFxuYTp2aXNpdGVkLFxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMTk3NmQyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogIzEyNTY5OTtcbn1cblxuLnRlcm1pbmFsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmctdG9wOiA0NXB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTUsIDE2KTtcbn1cblxuLnRlcm1pbmFsOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMjAyMiBcXDIwMjIgXFwyMDIyXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZDogcmdiKDU4LCA1OCwgNTgpO1xuICBjb2xvcjogI2MyYzNjNDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDE0cHggMDtcbiAgdGV4dC1pbmRlbnQ6IDRweDtcbn1cblxuLnRlcm1pbmFsIHByZSB7XG4gIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhcixDb25zb2xhcyxMaWJlcmF0aW9uIE1vbm8sTWVubG8sbW9ub3NwYWNlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xuICBtYXJnaW46IDA7XG59XG5cbi5jaXJjbGUtbGluayB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIG1hcmdpbjogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICB0cmFuc2l0aW9uOiAxcyBlYXNlLW91dDtcbn1cblxuLmNpcmNsZS1saW5rOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1cmVtKTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuZm9vdGVyIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZ2l0aHViLXN0YXItYmFkZ2Uge1xuICBjb2xvcjogIzI0MjkyZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAzcHggMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywzMSwzNSwuMik7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2ZhZmJmYywjZWZmM2Y2IDkwJSk7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZixBcHBsZSBDb2xvciBFbW9qaSxTZWdvZSBVSSBFbW9qaSxTZWdvZSBVSSBTeW1ib2w7XG59XG5cbi5naXRodWItc3Rhci1iYWRnZTpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmMGYzZjYsI2U2ZWJmMSA5MCUpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjcsMzEsMzUsLjM1KTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLS41ZW07XG59XG5cbi5naXRodWItc3Rhci1iYWRnZSAubWF0ZXJpYWwtaWNvbnMge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuc3ZnI2Nsb3VkcyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAtMTYwcHg7XG4gIGxlZnQ6IC0yMzBweDtcbiAgei1pbmRleDogLTEwO1xuICB3aWR0aDogMTkyMHB4O1xufVxuXG5cbi8qIFJlc3BvbnNpdmUgU3R5bGVzICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuXG4gIC5jYXJkLWNvbnRhaW5lciA+ICo6bm90KC5jaXJjbGUtbGluaykgLFxuICAudGVybWluYWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xuICAgIGhlaWdodDogMTZweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICB9XG5cbiAgLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDcycHg7XG4gIH1cblxuICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICByaWdodDogMTIwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIHN2ZyNyb2NrZXQtc21va2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.appName = 'Far Worst Angular Drum Machine';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _drumkit_choice_drumkit_choice_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./drumkit-choice/drumkit-choice.component */
    "./src/app/drumkit-choice/drumkit-choice.component.ts");
    /* harmony import */


    var _drumkit_choice_drumkit_list_element_drumkit_list_element_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./drumkit-choice/drumkit-list-element/drumkit-list-element.component */
    "./src/app/drumkit-choice/drumkit-list-element/drumkit-list-element.component.ts");
    /* harmony import */


    var _play_play_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./play/play.component */
    "./src/app/play/play.component.ts");
    /* harmony import */


    var _e404_e404_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./e404/e404.component */
    "./src/app/e404/e404.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _drumkit_choice_drumkit_choice_component__WEBPACK_IMPORTED_MODULE_9__["DrumkitChoiceComponent"], _drumkit_choice_drumkit_list_element_drumkit_list_element_component__WEBPACK_IMPORTED_MODULE_10__["DrumkitListElementComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _play_play_component__WEBPACK_IMPORTED_MODULE_11__["PlayComponent"], _e404_e404_component__WEBPACK_IMPORTED_MODULE_12__["E404Component"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/drum-kit.service.ts":
  /*!*************************************!*\
    !*** ./src/app/drum-kit.service.ts ***!
    \*************************************/

  /*! exports provided: DrumKitService */

  /***/
  function srcAppDrumKitServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DrumKitService", function () {
      return DrumKitService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _drumkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./drumkit */
    "./src/app/drumkit.ts");

    var DrumKitService =
    /*#__PURE__*/
    function () {
      function DrumKitService() {
        _classCallCheck(this, DrumKitService);
      }

      _createClass(DrumKitService, [{
        key: "getDrumKits",
        value: function getDrumKits() {
          return _drumkit__WEBPACK_IMPORTED_MODULE_2__["DRUMKITS"];
        }
      }, {
        key: "getSelectedDrumKit",
        value: function getSelectedDrumKit() {
          return this.selectedDrumKit;
        }
      }, {
        key: "setSelectedDrumKit",
        value: function setSelectedDrumKit(drumKit) {
          this.selectedDrumKit = drumKit;
        }
      }]);

      return DrumKitService;
    }();

    DrumKitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DrumKitService);
    /***/
  },

  /***/
  "./src/app/drumkit-choice/drumkit-choice.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/drumkit-choice/drumkit-choice.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDrumkitChoiceDrumkitChoiceComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content {\n  /*display: flex;*/\n  margin: 32px auto;\n  padding: 0 16px;\n  max-width: 960px;\n  flex-direction: column;\n  align-items: center;\n}\n\n.order-options-container {\n    /*display: flex;*/\n    /*flex-direction: row;*/\n}\n\n.order-options-container {\n    /*display: flex;*/\n    /*flex-direction: row;*/\n\tdisplay: inline-block;\n    /*width: auto;*/\n}\n\n.order-options {\n\tdisplay: inline-block;\n}\n\n.search-form {\n\t/*margin-left: auto;*/\n\t/*display: inline-block;*/\n\t/*width: auto;*/\n}\n\n.grey-icon {\n\tcolor: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJ1bWtpdC1jaG9pY2UvZHJ1bWtpdC1jaG9pY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix1QkFBdUI7Q0FDMUIscUJBQXFCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIseUJBQXlCO0NBQ3pCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9kcnVta2l0LWNob2ljZS9kcnVta2l0LWNob2ljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICAvKmRpc3BsYXk6IGZsZXg7Ki9cbiAgbWFyZ2luOiAzMnB4IGF1dG87XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgbWF4LXdpZHRoOiA5NjBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm9yZGVyLW9wdGlvbnMtY29udGFpbmVyIHtcbiAgICAvKmRpc3BsYXk6IGZsZXg7Ki9cbiAgICAvKmZsZXgtZGlyZWN0aW9uOiByb3c7Ki9cbn1cblxuLm9yZGVyLW9wdGlvbnMtY29udGFpbmVyIHtcbiAgICAvKmRpc3BsYXk6IGZsZXg7Ki9cbiAgICAvKmZsZXgtZGlyZWN0aW9uOiByb3c7Ki9cblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC8qd2lkdGg6IGF1dG87Ki9cbn1cblxuLm9yZGVyLW9wdGlvbnMge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zZWFyY2gtZm9ybSB7XG5cdC8qbWFyZ2luLWxlZnQ6IGF1dG87Ki9cblx0LypkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Ki9cblx0Lyp3aWR0aDogYXV0bzsqL1xufVxuXG4uZ3JleS1pY29uIHtcblx0Y29sb3I6IGdyZXk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/drumkit-choice/drumkit-choice.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/drumkit-choice/drumkit-choice.component.ts ***!
    \************************************************************/

  /*! exports provided: DrumkitChoiceComponent */

  /***/
  function srcAppDrumkitChoiceDrumkitChoiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DrumkitChoiceComponent", function () {
      return DrumkitChoiceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _drum_kit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../drum-kit.service */
    "./src/app/drum-kit.service.ts");

    var DrumkitChoiceComponent =
    /*#__PURE__*/
    function () {
      function DrumkitChoiceComponent(drumKitService) {
        _classCallCheck(this, DrumkitChoiceComponent);

        this.drumKitService = drumKitService;
      }

      _createClass(DrumkitChoiceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getDrumKits();
        }
      }, {
        key: "getDrumKits",
        value: function getDrumKits() {
          this.drumKits = this.drumKitService.getDrumKits();
          this.filteredDrumKits = this.drumKits;
          this.filterInput = '';
        }
      }, {
        key: "sortByName",
        value: function sortByName() {
          this.filteredDrumKits.sort(function (a, b) {
            if (a.name < b.name) {
              return -1;
            }

            if (a.name > b.name) {
              return 1;
            }

            return 0;
          });
        }
      }, {
        key: "sortByNameReverse",
        value: function sortByNameReverse() {
          this.filteredDrumKits.sort(function (a, b) {
            if (a.name < b.name) {
              return 1;
            }

            if (a.name > b.name) {
              return -1;
            }

            return 0;
          });
        }
      }, {
        key: "sortByAuthor",
        value: function sortByAuthor() {
          this.filteredDrumKits.sort(function (a, b) {
            if (a.author < b.author) {
              return -1;
            }

            if (a.author > b.author) {
              return 1;
            }

            return 0;
          });
        }
      }, {
        key: "sortByAuthorReverse",
        value: function sortByAuthorReverse() {
          this.filteredDrumKits.sort(function (a, b) {
            if (a.author < b.author) {
              return 1;
            }

            if (a.author > b.author) {
              return -1;
            }

            return 0;
          });
        }
      }, {
        key: "sortByNumberOfSamples",
        value: function sortByNumberOfSamples() {
          this.filteredDrumKits.sort(function (a, b) {
            return a.samples.length - b.samples.length;
          });
        }
      }, {
        key: "sortByNumberOfSamplesReverse",
        value: function sortByNumberOfSamplesReverse() {
          this.filteredDrumKits.sort(function (a, b) {
            return b.samples.length - a.samples.length;
          });
        }
      }, {
        key: "onFilterInputChange",
        value: function onFilterInputChange() {
          this.filteredDrumKits = this.filterDrumKits();
        }
      }, {
        key: "resetFilter",
        value: function resetFilter() {
          this.filterInput = '';
          this.filteredDrumKits = this.drumKits;
        }
      }, {
        key: "filterDrumKits",
        value: function filterDrumKits() {
          var _this = this;

          return this.drumKits.filter(function (drumKit, drumKit_Index) {
            return drumKit.name.toLowerCase().includes(_this.filterInput.toLowerCase()) || drumKit.author.toLowerCase().includes(_this.filterInput.toLowerCase());
          });
        }
      }]);

      return DrumkitChoiceComponent;
    }();

    DrumkitChoiceComponent.ctorParameters = function () {
      return [{
        type: _drum_kit_service__WEBPACK_IMPORTED_MODULE_2__["DrumKitService"]
      }];
    };

    DrumkitChoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-drumkit-choice',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./drumkit-choice.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/drumkit-choice/drumkit-choice.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./drumkit-choice.component.css */
      "./src/app/drumkit-choice/drumkit-choice.component.css")).default]
    })], DrumkitChoiceComponent);
    /***/
  },

  /***/
  "./src/app/drumkit-choice/drumkit-list-element/drumkit-list-element.component.css":
  /*!****************************************************************************************!*\
    !*** ./src/app/drumkit-choice/drumkit-list-element/drumkit-list-element.component.css ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDrumkitChoiceDrumkitListElementDrumkitListElementComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RydW1raXQtY2hvaWNlL2RydW1raXQtbGlzdC1lbGVtZW50L2RydW1raXQtbGlzdC1lbGVtZW50LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/drumkit-choice/drumkit-list-element/drumkit-list-element.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/drumkit-choice/drumkit-list-element/drumkit-list-element.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: DrumkitListElementComponent */

  /***/
  function srcAppDrumkitChoiceDrumkitListElementDrumkitListElementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DrumkitListElementComponent", function () {
      return DrumkitListElementComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _drum_kit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../drum-kit.service */
    "./src/app/drum-kit.service.ts");

    var DrumkitListElementComponent =
    /*#__PURE__*/
    function () {
      function DrumkitListElementComponent(drumKitService, router) {
        _classCallCheck(this, DrumkitListElementComponent);

        this.drumKitService = drumKitService;
        this.router = router;
      }

      _createClass(DrumkitListElementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectDrumKit",
        value: function selectDrumKit() {
          this.drumKitService.setSelectedDrumKit(this.drumKit);
          this.router.navigateByUrl('/play');
        }
      }]);

      return DrumkitListElementComponent;
    }();

    DrumkitListElementComponent.ctorParameters = function () {
      return [{
        type: _drum_kit_service__WEBPACK_IMPORTED_MODULE_3__["DrumKitService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DrumkitListElementComponent.prototype, "drumKit", void 0);
    DrumkitListElementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-drumkit-list-element',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./drumkit-list-element.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/drumkit-choice/drumkit-list-element/drumkit-list-element.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./drumkit-list-element.component.css */
      "./src/app/drumkit-choice/drumkit-list-element/drumkit-list-element.component.css")).default]
    })], DrumkitListElementComponent);
    /***/
  },

  /***/
  "./src/app/drumkit.ts":
  /*!****************************!*\
    !*** ./src/app/drumkit.ts ***!
    \****************************/

  /*! exports provided: DrumKit, Sample, DRUMKITS */

  /***/
  function srcAppDrumkitTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DrumKit", function () {
      return DrumKit;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Sample", function () {
      return Sample;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DRUMKITS", function () {
      return DRUMKITS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var DrumKit = function DrumKit() {
      _classCallCheck(this, DrumKit);
    };

    ;

    var Sample = function Sample() {
      _classCallCheck(this, Sample);
    };

    ;
    var DRUMKITS = [{
      author: 'Akai',
      name: 'MPC2000 01',
      samples: [{
        name: 'Hat Open',
        path: '../assets/akai/drumhits/HATS/HH_JHatOp1.wav'
      }, {
        name: 'Hat Closed',
        path: '../assets/akai/drumhits/HATS/HH_Hat1.wav'
      }, {
        name: 'Crash 1',
        path: '../assets/akai/drumhits/CYMBALS/HH_Crash8.wav'
      }, {
        name: 'Crash 2',
        path: '../assets/akai/drumhits/CYMBALS/HH_JRideHrd3.wav'
      }, {
        name: 'Kick 1',
        path: '../assets/akai/drumhits/KICKS/HH_JKick2.wav'
      }, {
        name: 'Kick 2',
        path: '../assets/akai/drumhits/KICKS/HH_Kick6.wav'
      }, {
        name: 'Snare',
        path: '../assets/akai/drumhits/SNARES/HH_JSnare32.wav'
      }, {
        name: 'Rim Shot',
        path: '../assets/akai/drumhits/SNARES/HH_Snare20.wav'
      }]
    }, {
      author: 'Mad Zack',
      name: 'Bling It On',
      samples: [{
        name: 'sympho 1',
        path: '../assets/factory_samples/bling_it_on/sympho_1.wav'
      }, {
        name: 'sympho 2',
        path: '../assets/factory_samples/bling_it_on/sympho_2.wav'
      }, {
        name: 'sympho 3',
        path: '../assets/factory_samples/bling_it_on/sympho_3.wav'
      }, {
        name: 'sympho 4',
        path: '../assets/factory_samples/bling_it_on/sympho_4.wav'
      }, {
        name: 'draw_swords',
        path: '../assets/factory_samples/bling_it_on/draw_swords.wav'
      }, {
        name: 'guido',
        path: '../assets/factory_samples/bling_it_on/guido.wav'
      }, {
        name: 'rubbish_hit',
        path: '../assets/factory_samples/bling_it_on/rubbish_hit.wav'
      }, {
        name: 'whipstitch',
        path: '../assets/factory_samples/bling_it_on/whipstitch.wav'
      }, {
        name: 'Bell 1',
        path: '../assets/factory_samples/bling_it_on/06.wav'
      }, {
        name: 'Bell 2',
        path: '../assets/factory_samples/bling_it_on/07.wav'
      }, {
        name: 'Bell 3',
        path: '../assets/factory_samples/bling_it_on/08.wav'
      }, {
        name: 'Bell 4',
        path: '../assets/factory_samples/bling_it_on/09.wav'
      }, {
        name: 'Kick 1',
        path: '../assets/factory_samples/bling_it_on/0.wav'
      }, {
        name: 'Kick 2',
        path: '../assets/factory_samples/bling_it_on/01.wav'
      }, {
        name: 'Snare',
        path: '../assets/factory_samples/bling_it_on/02.wav'
      }, {
        name: 'Clap',
        path: '../assets/factory_samples/bling_it_on/03.wav'
      }]
    }, {
      author: 'LeDocteur',
      name: 'Next One',
      samples: [{
        name: 'Piano 1',
        path: '../assets/factory_samples/next_one/06.wav'
      }, {
        name: 'Piano 2',
        path: '../assets/factory_samples/next_one/07.wav'
      }, {
        name: 'Sax Long',
        path: '../assets/factory_samples/next_one/08.wav'
      }, {
        name: 'Synth Rythm',
        path: '../assets/factory_samples/next_one/09.wav'
      }, {
        name: 'Bass 1',
        path: '../assets/factory_samples/next_one/bass_1.wav'
      }, {
        name: 'Bass 2',
        path: '../assets/factory_samples/next_one/bass_2.wav'
      }, {
        name: 'Bass 3',
        path: '../assets/factory_samples/next_one/bass_3.wav'
      }, {
        name: 'Whisper',
        path: '../assets/factory_samples/next_one/shot_calla_whisper.wav'
      }, {
        name: 'Klang',
        path: '../assets/factory_samples/next_one/garage_klang.wav'
      }, {
        name: 'Hit Hat',
        path: '../assets/factory_samples/next_one/hat_dud.wav'
      }, {
        name: 'Kick 2 Deep',
        path: '../assets/factory_samples/next_one/kick_so_deep_its_almost_not.wav'
      }, {
        name: 'Splash',
        path: '../assets/factory_samples/next_one/04.wav'
      }, {
        name: 'Kick',
        path: '../assets/factory_samples/next_one/0.wav'
      }, {
        name: 'Sub Kick',
        path: '../assets/factory_samples/next_one/01.wav'
      }, {
        name: 'Snare',
        path: '../assets/factory_samples/next_one/02.wav'
      }, {
        name: 'Clap',
        path: '../assets/factory_samples/next_one/03.wav'
      }]
    }, {
      author: 'Mad Zack',
      name: 'Satin Charly',
      samples: [{
        name: 'Trumpet 1',
        path: '../assets/factory_samples/Satin_Charly/trumpet1.wav'
      }, {
        name: 'Trumpet 2',
        path: '../assets/factory_samples/Satin_Charly/trumpet2.wav'
      }, {
        name: 'Trumpet 3',
        path: '../assets/factory_samples/Satin_Charly/trumpet3.wav'
      }, {
        name: 'Synth 1',
        path: '../assets/factory_samples/Satin_Charly/synth1.wav'
      }, {
        name: 'Chorus 1',
        path: '../assets/factory_samples/Satin_Charly/chorus1.wav'
      }, {
        name: 'Chorus 2',
        path: '../assets/factory_samples/Satin_Charly/chorus2.wav'
      }, {
        name: 'Bass 1',
        path: '../assets/factory_samples/Satin_Charly/bass1.wav'
      }, {
        name: 'Synth 2',
        path: '../assets/factory_samples/Satin_Charly/synth2.wav'
      }, {
        name: 'Noise scream',
        path: '../assets/factory_samples/Satin_Charly/00_noise_scream.wav'
      }, {
        name: 'Hit Hat',
        path: '../assets/factory_samples/Satin_Charly/hhc.wav'
      }, {
        name: 'Bass 2',
        path: '../assets/factory_samples/Satin_Charly/bass2.wav'
      }, {
        name: 'Vox Hit',
        path: '../assets/factory_samples/Satin_Charly/00_voxhit.wav'
      }, {
        name: 'Kick 1',
        path: '../assets/factory_samples/Satin_Charly/kick1.wav'
      }, {
        name: 'Kick 2',
        path: '../assets/factory_samples/Satin_Charly/kick2.wav'
      }, {
        name: 'Snare',
        path: '../assets/factory_samples/Satin_Charly/snare.wav'
      }, {
        name: 'Clap',
        path: '../assets/factory_samples/Satin_Charly/clap.wav'
      }]
    }, {
      author: 'Mad Zack',
      name: 'Untersitzer',
      samples: [{
        name: 'Kick 1',
        path: '../assets/factory_samples/Untersitzer/0.wav'
      }, {
        name: '',
        path: '../assets/factory_samples/Untersitzer/01.wav'
      }, {
        name: '',
        path: '../assets/factory_samples/Untersitzer/02.wav'
      }, {
        name: '',
        path: '../assets/factory_samples/Untersitzer/03.wav'
      }, {
        name: '',
        path: '../assets/factory_samples/Untersitzer/05.wav'
      }, {
        name: '',
        path: '../assets/factory_samples/Untersitzer/06.wav'
      }, {
        name: '',
        path: '../assets/factory_samples/Untersitzer/07.wav'
      }, {
        name: '',
        path: '../assets/factory_samples/Untersitzer/08.wav'
      }, {
        name: '',
        path: '../assets/factory_samples/Untersitzer/09.wav'
      }, {
        name: '',
        path: '../assets/factory_samples/Untersitzer/09.wav'
      }, {
        name: '',
        path: '../assets/factory_samples/Untersitzer/all_waves.wav'
      }, {
        name: '',
        path: '../assets/factory_samples/Untersitzer/bass_heaval.wav'
      }, {
        name: '',
        path: '../assets/factory_samples/Untersitzer/dry_clap.wav'
      }, {
        name: 'Jazz 1',
        path: '../assets/factory_samples/Untersitzer/jazz_times_1.wav'
      }, {
        name: 'Jazz 2',
        path: '../assets/factory_samples/Untersitzer/jazz_times_2.wav'
      }, {
        name: 'Sub Kick',
        path: '../assets/factory_samples/Untersitzer/sub_kick.wav'
      }, {
        name: 'Kick 2',
        path: '../assets/factory_samples/Untersitzer/tuddle.wav'
      }, {
        name: 'Turn It',
        path: '../assets/factory_samples/Untersitzer/turn_it.wav'
      }]
    }];
    /***/
  },

  /***/
  "./src/app/e404/e404.component.css":
  /*!*****************************************!*\
    !*** ./src/app/e404/e404.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppE404E404ComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content {\n  display: flex;\n  margin: 32px auto;\n  padding: 0 16px;\n  max-width: 960px;\n  flex-direction: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZTQwNC9lNDA0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2U0MDQvZTQwNC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDMycHggYXV0bztcbiAgcGFkZGluZzogMCAxNnB4O1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/e404/e404.component.ts":
  /*!****************************************!*\
    !*** ./src/app/e404/e404.component.ts ***!
    \****************************************/

  /*! exports provided: E404Component */

  /***/
  function srcAppE404E404ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "E404Component", function () {
      return E404Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var E404Component =
    /*#__PURE__*/
    function () {
      function E404Component() {
        _classCallCheck(this, E404Component);
      }

      _createClass(E404Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return E404Component;
    }();

    E404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-e404',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./e404.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/e404/e404.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./e404.component.css */
      "./src/app/e404/e404.component.css")).default]
    })], E404Component);
    /***/
  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a,\na:visited,\na:hover {\n  color: white;\n  text-decoration: none;\n  margin-left: 10px;\n}\n\na:hover {\n  color: #125699;\n}\n\n.toolbar {\n  height: 60px;\n  /*margin-top: -8px;*/\n  /*margin-bottom: -8px;*/\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n}\n\n.toolbar img {\n  margin: 0 16px;\n}\n\n.toolbar #twitter-logo:hover {\n  opacity: 0.8;\n}\n\n.spacer {\n  flex: 1;\n}\n\n.counter-spacer {\n  margin: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEsXG5hOnZpc2l0ZWQsXG5hOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6ICMxMjU2OTk7XG59XG5cbi50b29sYmFyIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICAvKm1hcmdpbi10b3A6IC04cHg7Ki9cbiAgLyptYXJnaW4tYm90dG9tOiAtOHB4OyovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnRvb2xiYXIgaW1nIHtcbiAgbWFyZ2luOiAwIDE2cHg7XG59XG5cbi50b29sYmFyICN0d2l0dGVyLWxvZ286aG92ZXIge1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxO1xufVxuXG4uY291bnRlci1zcGFjZXIge1xuICBtYXJnaW46IDhweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HeaderComponent.prototype, "appName", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content {\n  display: flex;\n  margin: 32px auto;\n  padding: 0 16px;\n  max-width: 960px;\n  flex-direction: column;\n  align-items: center;\n}\n\n.card svg.material-icons path {\n  fill: #888;\n}\n\n.card-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 16px;\n}\n\n.card {\n  border-radius: 4px;\n  border: 1px solid #eee;\n  background-color: #fafafa;\n  height: 40px;\n  width: 200px;\n  margin: 0 8px 16px;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  line-height: 24px;\n}\n\n.card-container .card:not(:last-child) {\n  margin-right: 0;\n}\n\n.card.card-small {\n  height: 16px;\n  width: 168px;\n}\n\n.card-container .card:not(.highlight-card) {\n  cursor: pointer;\n}\n\n.card-container .card:not(.highlight-card):hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(black, 0.35);\n}\n\n.card-container .card:not(.highlight-card):hover .material-icons path {\n  fill: rgb(105, 103, 103);\n}\n\n.card.highlight-card {\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n  border: none;\n  width: auto;\n  min-width: 30%;\n  position: relative;\n}\n\n.card.card.highlight-card span {\n  margin-left: 60px;\n}\n\nsvg#rocket {\n  width: 80px;\n  position: absolute;\n  left: -10px;\n  top: -24px;\n}\n\nsvg#rocket-smoke {\n  height: 100vh;\n  position: absolute;\n  top: 10px;\n  right: 180px;\n  z-index: -10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0VBQ1osWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMzJweCBhdXRvO1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXJkIHN2Zy5tYXRlcmlhbC1pY29ucyBwYXRoIHtcbiAgZmlsbDogIzg4ODtcbn1cblxuLmNhcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmNhcmQge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDAgOHB4IDE2cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uY2FyZC5jYXJkLXNtYWxsIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTY4cHg7XG59XG5cbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoYmxhY2ssIDAuMzUpO1xufVxuXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIgLm1hdGVyaWFsLWljb25zIHBhdGgge1xuICBmaWxsOiByZ2IoMTA1LCAxMDMsIDEwMyk7XG59XG5cbi5jYXJkLmhpZ2hsaWdodC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiBhdXRvO1xuICBtaW4td2lkdGg6IDMwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FyZC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogNjBweDtcbn1cblxuc3ZnI3JvY2tldCB7XG4gIHdpZHRoOiA4MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xMHB4O1xuICB0b3A6IC0yNHB4O1xufVxuXG5zdmcjcm9ja2V0LXNtb2tlIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxODBweDtcbiAgei1pbmRleDogLTEwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/play/play.component.css":
  /*!*****************************************!*\
    !*** ./src/app/play/play.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppPlayPlayComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#canvas-container {\n\t/*display: block;*/\n\t/*flex: 1;*/\n\tpadding: 25px;\n}\n\n.content {\n  /*display: flex;*/\n  margin: 32px auto;\n  padding: 0 16px;\n  max-width: 960px;\n  /*flex-direction: column;*/\n  /*align-items: center;*/\n}\n\n.pads-container {\n\tbackground: white;\n\theight: 80vh;\n}\n\n.pad {\n\tbackground: lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheS9wbGF5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLGFBQWE7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsdUJBQXVCO0FBQ3pCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLFlBQVk7QUFDYjs7QUFFQTtDQUNDLHFCQUFxQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3BsYXkvcGxheS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NhbnZhcy1jb250YWluZXIge1xuXHQvKmRpc3BsYXk6IGJsb2NrOyovXG5cdC8qZmxleDogMTsqL1xuXHRwYWRkaW5nOiAyNXB4O1xufVxuXG4uY29udGVudCB7XG4gIC8qZGlzcGxheTogZmxleDsqL1xuICBtYXJnaW46IDMycHggYXV0bztcbiAgcGFkZGluZzogMCAxNnB4O1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICAvKmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47Ki9cbiAgLyphbGlnbi1pdGVtczogY2VudGVyOyovXG59XG5cbi5wYWRzLWNvbnRhaW5lciB7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRoZWlnaHQ6IDgwdmg7XG59XG5cbi5wYWQge1xuXHRiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/play/play.component.ts":
  /*!****************************************!*\
    !*** ./src/app/play/play.component.ts ***!
    \****************************************/

  /*! exports provided: PlayComponent */

  /***/
  function srcAppPlayPlayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayComponent", function () {
      return PlayComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _drum_kit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../drum-kit.service */
    "./src/app/drum-kit.service.ts");

    var PlayComponent =
    /*#__PURE__*/
    function () {
      function PlayComponent(drumKitService, router) {
        _classCallCheck(this, PlayComponent);

        this.drumKitService = drumKitService;
        this.router = router;
        this.audioElements = [];
      }

      _createClass(PlayComponent, [{
        key: "goToChooseDrumKit",
        value: function goToChooseDrumKit() {
          this.router.navigateByUrl('/choose-kit');
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          console.log('onChanges()');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('onInit()');
          this.selectedDrumKit = this.drumKitService.getSelectedDrumKit();
          if (this.selectedDrumKit) this.loadDrumKit();
          console.log('this.drumKitService.getSelectedDrumKit()', this.drumKitService.getSelectedDrumKit());
          console.log('this.selectedDrumKit', this.selectedDrumKit);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          console.log('onDestroy()');
        }
      }, {
        key: "loadDrumKit",
        value: function loadDrumKit() {
          this.audioElements = this.selectedDrumKit.samples.map(function (sample) {
            return new Audio(sample.path);
          });
        }
      }, {
        key: "playAudioElement",
        value: function playAudioElement(index) {
          this.stopAudioElement(index);
          this.audioElements[index].play();
        }
      }, {
        key: "stopAudioElement",
        value: function stopAudioElement(index) {
          this.audioElements[index].pause();
          this.audioElements[index].currentTime = 0;
        }
      }]);

      return PlayComponent;
    }();

    PlayComponent.ctorParameters = function () {
      return [{
        type: _drum_kit_service__WEBPACK_IMPORTED_MODULE_3__["DrumKitService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    PlayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-play',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./play.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/play/play.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./play.component.css */
      "./src/app/play/play.component.css")).default]
    })], PlayComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/ledocteur/Desktop/My Work/03_Playground/angular-drum-machine/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map