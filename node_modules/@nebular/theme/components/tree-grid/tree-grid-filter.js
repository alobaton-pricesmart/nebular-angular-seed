/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, HostListener, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeWhile } from 'rxjs/operators';
var NbFilterDirective = /** @class */ (function () {
    function NbFilterDirective() {
    }
    NbFilterDirective.prototype.filter = function (filterRequest) {
        this.filterable.filter(filterRequest);
    };
    __decorate([
        Input('nbFilter'),
        __metadata("design:type", Object)
    ], NbFilterDirective.prototype, "filterable", void 0);
    NbFilterDirective = __decorate([
        Directive({ selector: '[nbFilter]' })
    ], NbFilterDirective);
    return NbFilterDirective;
}());
export { NbFilterDirective };
/**
 * Helper directive to trigger data source's filter method when user types in input
 */
var NbFilterInputDirective = /** @class */ (function (_super) {
    __extends(NbFilterInputDirective, _super);
    function NbFilterInputDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.search$ = new Subject();
        _this.alive = true;
        /**
         * Debounce time before triggering filter method. Set in milliseconds.
         * Default 200.
         */
        _this.debounceTime = 200;
        return _this;
    }
    NbFilterInputDirective_1 = NbFilterInputDirective;
    NbFilterInputDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.search$
            .pipe(takeWhile(function () { return _this.alive; }), debounceTime(this.debounceTime))
            .subscribe(function (query) {
            _super.prototype.filter.call(_this, query);
        });
    };
    NbFilterInputDirective.prototype.ngOnDestroy = function () {
        this.alive = false;
        this.search$.complete();
    };
    NbFilterInputDirective.prototype.filter = function (event) {
        this.search$.next(event.target.value);
    };
    var NbFilterInputDirective_1;
    __decorate([
        Input('nbFilterInput'),
        __metadata("design:type", Object)
    ], NbFilterInputDirective.prototype, "filterable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], NbFilterInputDirective.prototype, "debounceTime", void 0);
    __decorate([
        HostListener('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NbFilterInputDirective.prototype, "filter", null);
    NbFilterInputDirective = NbFilterInputDirective_1 = __decorate([
        Directive({
            selector: '[nbFilterInput]',
            providers: [{ provide: NbFilterDirective, useExisting: NbFilterInputDirective_1 }],
        })
    ], NbFilterInputDirective);
    return NbFilterInputDirective;
}(NbFilterDirective));
export { NbFilterInputDirective };
//# sourceMappingURL=tree-grid-filter.js.map