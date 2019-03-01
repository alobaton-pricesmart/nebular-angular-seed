/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license infornbion.
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
import { Directive, ElementRef, InjectionToken, Input } from '@angular/core';
import { CdkCell, CdkCellDef, CdkColumnDef, CdkFooterCell, CdkFooterCellDef, CdkHeaderCell, CdkHeaderCellDef, } from '@angular/cdk/table';
/**
 * Cell definition for the nb-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
var NbCellDefDirective = /** @class */ (function (_super) {
    __extends(NbCellDefDirective, _super);
    function NbCellDefDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbCellDefDirective_1 = NbCellDefDirective;
    var NbCellDefDirective_1;
    NbCellDefDirective = NbCellDefDirective_1 = __decorate([
        Directive({
            selector: '[nbCellDef]',
            providers: [{ provide: CdkCellDef, useExisting: NbCellDefDirective_1 }],
        })
    ], NbCellDefDirective);
    return NbCellDefDirective;
}(CdkCellDef));
export { NbCellDefDirective };
/**
 * Header cell definition for the nb-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
var NbHeaderCellDefDirective = /** @class */ (function (_super) {
    __extends(NbHeaderCellDefDirective, _super);
    function NbHeaderCellDefDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbHeaderCellDefDirective_1 = NbHeaderCellDefDirective;
    var NbHeaderCellDefDirective_1;
    NbHeaderCellDefDirective = NbHeaderCellDefDirective_1 = __decorate([
        Directive({
            selector: '[nbHeaderCellDef]',
            providers: [{ provide: CdkHeaderCellDef, useExisting: NbHeaderCellDefDirective_1 }],
        })
    ], NbHeaderCellDefDirective);
    return NbHeaderCellDefDirective;
}(CdkHeaderCellDef));
export { NbHeaderCellDefDirective };
/**
 * Footer cell definition for the nb-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
var NbFooterCellDefDirective = /** @class */ (function (_super) {
    __extends(NbFooterCellDefDirective, _super);
    function NbFooterCellDefDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbFooterCellDefDirective_1 = NbFooterCellDefDirective;
    var NbFooterCellDefDirective_1;
    NbFooterCellDefDirective = NbFooterCellDefDirective_1 = __decorate([
        Directive({
            selector: '[nbFooterCellDef]',
            providers: [{ provide: CdkFooterCellDef, useExisting: NbFooterCellDefDirective_1 }],
        })
    ], NbFooterCellDefDirective);
    return NbFooterCellDefDirective;
}(CdkFooterCellDef));
export { NbFooterCellDefDirective };
export var NB_SORT_HEADER_COLUMN_DEF = new InjectionToken('NB_SORT_HEADER_COLUMN_DEF');
/**
 * Column definition for the nb-table.
 * Defines a set of cells available for a table column.
 */
var NbColumnDefDirective = /** @class */ (function (_super) {
    __extends(NbColumnDefDirective, _super);
    function NbColumnDefDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbColumnDefDirective_1 = NbColumnDefDirective;
    var NbColumnDefDirective_1;
    __decorate([
        Input('nbColumnDef'),
        __metadata("design:type", String)
    ], NbColumnDefDirective.prototype, "name", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], NbColumnDefDirective.prototype, "sticky", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], NbColumnDefDirective.prototype, "stickyEnd", void 0);
    NbColumnDefDirective = NbColumnDefDirective_1 = __decorate([
        Directive({
            selector: '[nbColumnDef]',
            providers: [
                { provide: CdkColumnDef, useExisting: NbColumnDefDirective_1 },
                { provide: NB_SORT_HEADER_COLUMN_DEF, useExisting: NbColumnDefDirective_1 },
            ],
        })
    ], NbColumnDefDirective);
    return NbColumnDefDirective;
}(CdkColumnDef));
export { NbColumnDefDirective };
/** Header cell template container that adds the right classes and role. */
var NbHeaderCellDirective = /** @class */ (function (_super) {
    __extends(NbHeaderCellDirective, _super);
    function NbHeaderCellDirective(columnDef, elementRef) {
        var _this = _super.call(this, columnDef, elementRef) || this;
        elementRef.nativeElement.classList.add("nb-column-" + columnDef.cssClassFriendlyName);
        return _this;
    }
    NbHeaderCellDirective = __decorate([
        Directive({
            selector: 'nb-header-cell, th[nbHeaderCell]',
            host: {
                'class': 'nb-header-cell',
                'role': 'columnheader',
            },
        }),
        __metadata("design:paramtypes", [NbColumnDefDirective,
            ElementRef])
    ], NbHeaderCellDirective);
    return NbHeaderCellDirective;
}(CdkHeaderCell));
export { NbHeaderCellDirective };
/** Footer cell template container that adds the right classes and role. */
var NbFooterCellDirective = /** @class */ (function (_super) {
    __extends(NbFooterCellDirective, _super);
    function NbFooterCellDirective(columnDef, elementRef) {
        var _this = _super.call(this, columnDef, elementRef) || this;
        elementRef.nativeElement.classList.add("nb-column-" + columnDef.cssClassFriendlyName);
        return _this;
    }
    NbFooterCellDirective = __decorate([
        Directive({
            selector: 'nb-footer-cell, td[nbFooterCell]',
            host: {
                'class': 'nb-footer-cell',
                'role': 'gridcell',
            },
        }),
        __metadata("design:paramtypes", [NbColumnDefDirective,
            ElementRef])
    ], NbFooterCellDirective);
    return NbFooterCellDirective;
}(CdkFooterCell));
export { NbFooterCellDirective };
/** Cell template container that adds the right classes and role. */
var NbCellDirective = /** @class */ (function (_super) {
    __extends(NbCellDirective, _super);
    function NbCellDirective(columnDef, elementRef) {
        var _this = _super.call(this, columnDef, elementRef) || this;
        elementRef.nativeElement.classList.add("nb-column-" + columnDef.cssClassFriendlyName);
        return _this;
    }
    NbCellDirective = __decorate([
        Directive({
            selector: 'nb-cell, td[nbCell]',
            host: {
                'class': 'nb-cell',
                'role': 'gridcell',
            },
        }),
        __metadata("design:paramtypes", [NbColumnDefDirective,
            ElementRef])
    ], NbCellDirective);
    return NbCellDirective;
}(CdkCell));
export { NbCellDirective };
//# sourceMappingURL=cell.js.map