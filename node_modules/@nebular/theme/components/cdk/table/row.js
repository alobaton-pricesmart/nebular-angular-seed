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
import { ChangeDetectionStrategy, Component, Directive, Input } from '@angular/core';
import { CdkFooterRow, CdkFooterRowDef, CdkHeaderRow, CdkHeaderRowDef, CdkRow, CdkRowDef, CdkCellOutlet, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, } from '@angular/cdk/table';
var NbDataRowOutletDirective = /** @class */ (function (_super) {
    __extends(NbDataRowOutletDirective, _super);
    function NbDataRowOutletDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbDataRowOutletDirective_1 = NbDataRowOutletDirective;
    var NbDataRowOutletDirective_1;
    NbDataRowOutletDirective = NbDataRowOutletDirective_1 = __decorate([
        Directive({
            selector: '[nbRowOutlet]',
            providers: [{ provide: DataRowOutlet, useExisting: NbDataRowOutletDirective_1 }],
        })
    ], NbDataRowOutletDirective);
    return NbDataRowOutletDirective;
}(DataRowOutlet));
export { NbDataRowOutletDirective };
var NbHeaderRowOutletDirective = /** @class */ (function (_super) {
    __extends(NbHeaderRowOutletDirective, _super);
    function NbHeaderRowOutletDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbHeaderRowOutletDirective_1 = NbHeaderRowOutletDirective;
    var NbHeaderRowOutletDirective_1;
    NbHeaderRowOutletDirective = NbHeaderRowOutletDirective_1 = __decorate([
        Directive({
            selector: '[nbHeaderRowOutlet]',
            providers: [{ provide: HeaderRowOutlet, useExisting: NbHeaderRowOutletDirective_1 }],
        })
    ], NbHeaderRowOutletDirective);
    return NbHeaderRowOutletDirective;
}(HeaderRowOutlet));
export { NbHeaderRowOutletDirective };
var NbFooterRowOutletDirective = /** @class */ (function (_super) {
    __extends(NbFooterRowOutletDirective, _super);
    function NbFooterRowOutletDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbFooterRowOutletDirective_1 = NbFooterRowOutletDirective;
    var NbFooterRowOutletDirective_1;
    NbFooterRowOutletDirective = NbFooterRowOutletDirective_1 = __decorate([
        Directive({
            selector: '[nbFooterRowOutlet]',
            providers: [{ provide: FooterRowOutlet, useExisting: NbFooterRowOutletDirective_1 }],
        })
    ], NbFooterRowOutletDirective);
    return NbFooterRowOutletDirective;
}(FooterRowOutlet));
export { NbFooterRowOutletDirective };
var NbCellOutletDirective = /** @class */ (function (_super) {
    __extends(NbCellOutletDirective, _super);
    function NbCellOutletDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbCellOutletDirective_1 = NbCellOutletDirective;
    var NbCellOutletDirective_1;
    NbCellOutletDirective = NbCellOutletDirective_1 = __decorate([
        Directive({
            selector: '[nbCellOutlet]',
            providers: [{ provide: CdkCellOutlet, useExisting: NbCellOutletDirective_1 }],
        })
    ], NbCellOutletDirective);
    return NbCellOutletDirective;
}(CdkCellOutlet));
export { NbCellOutletDirective };
/**
 * Header row definition for the nb-table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
var NbHeaderRowDefDirective = /** @class */ (function (_super) {
    __extends(NbHeaderRowDefDirective, _super);
    function NbHeaderRowDefDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbHeaderRowDefDirective_1 = NbHeaderRowDefDirective;
    var NbHeaderRowDefDirective_1;
    __decorate([
        Input('nbHeaderRowDef'),
        __metadata("design:type", Object)
    ], NbHeaderRowDefDirective.prototype, "columns", void 0);
    __decorate([
        Input('nbHeaderRowDefSticky'),
        __metadata("design:type", Boolean)
    ], NbHeaderRowDefDirective.prototype, "sticky", void 0);
    NbHeaderRowDefDirective = NbHeaderRowDefDirective_1 = __decorate([
        Directive({
            selector: '[nbHeaderRowDef]',
            providers: [{ provide: CdkHeaderRowDef, useExisting: NbHeaderRowDefDirective_1 }],
        })
    ], NbHeaderRowDefDirective);
    return NbHeaderRowDefDirective;
}(CdkHeaderRowDef));
export { NbHeaderRowDefDirective };
/**
 * Footer row definition for the nb-table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
var NbFooterRowDefDirective = /** @class */ (function (_super) {
    __extends(NbFooterRowDefDirective, _super);
    function NbFooterRowDefDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbFooterRowDefDirective_1 = NbFooterRowDefDirective;
    var NbFooterRowDefDirective_1;
    __decorate([
        Input('nbFooterRowDef'),
        __metadata("design:type", Object)
    ], NbFooterRowDefDirective.prototype, "columns", void 0);
    __decorate([
        Input('nbFooterRowDefSticky'),
        __metadata("design:type", Boolean)
    ], NbFooterRowDefDirective.prototype, "sticky", void 0);
    NbFooterRowDefDirective = NbFooterRowDefDirective_1 = __decorate([
        Directive({
            selector: '[nbFooterRowDef]',
            providers: [{ provide: CdkFooterRowDef, useExisting: NbFooterRowDefDirective_1 }],
        })
    ], NbFooterRowDefDirective);
    return NbFooterRowDefDirective;
}(CdkFooterRowDef));
export { NbFooterRowDefDirective };
/**
 * Data row definition for the nb-table.
 * Captures the data row's template and other properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */
var NbRowDefDirective = /** @class */ (function (_super) {
    __extends(NbRowDefDirective, _super);
    function NbRowDefDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbRowDefDirective_1 = NbRowDefDirective;
    var NbRowDefDirective_1;
    __decorate([
        Input('nbRowDefColumns'),
        __metadata("design:type", Object)
    ], NbRowDefDirective.prototype, "columns", void 0);
    __decorate([
        Input('nbRowDefWhen'),
        __metadata("design:type", Function)
    ], NbRowDefDirective.prototype, "when", void 0);
    NbRowDefDirective = NbRowDefDirective_1 = __decorate([
        Directive({
            selector: '[nbRowDef]',
            providers: [{ provide: CdkRowDef, useExisting: NbRowDefDirective_1 }],
        })
    ], NbRowDefDirective);
    return NbRowDefDirective;
}(CdkRowDef));
export { NbRowDefDirective };
/** Footer template container that contains the cell outlet. Adds the right class and role. */
var NbHeaderRowComponent = /** @class */ (function (_super) {
    __extends(NbHeaderRowComponent, _super);
    function NbHeaderRowComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbHeaderRowComponent_1 = NbHeaderRowComponent;
    var NbHeaderRowComponent_1;
    NbHeaderRowComponent = NbHeaderRowComponent_1 = __decorate([
        Component({
            selector: 'nb-header-row, tr[nbHeaderRow]',
            template: "\n    <ng-container nbCellOutlet></ng-container>",
            host: {
                'class': 'nb-header-row',
                'role': 'row',
            },
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [{ provide: CdkHeaderRow, useExisting: NbHeaderRowComponent_1 }],
        })
    ], NbHeaderRowComponent);
    return NbHeaderRowComponent;
}(CdkHeaderRow));
export { NbHeaderRowComponent };
/** Footer template container that contains the cell outlet. Adds the right class and role. */
var NbFooterRowComponent = /** @class */ (function (_super) {
    __extends(NbFooterRowComponent, _super);
    function NbFooterRowComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbFooterRowComponent_1 = NbFooterRowComponent;
    var NbFooterRowComponent_1;
    NbFooterRowComponent = NbFooterRowComponent_1 = __decorate([
        Component({
            selector: 'nb-footer-row, tr[nbFooterRow]',
            template: "\n    <ng-container nbCellOutlet></ng-container>",
            host: {
                'class': 'nb-footer-row',
                'role': 'row',
            },
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [{ provide: CdkFooterRow, useExisting: NbFooterRowComponent_1 }],
        })
    ], NbFooterRowComponent);
    return NbFooterRowComponent;
}(CdkFooterRow));
export { NbFooterRowComponent };
/** Data row template container that contains the cell outlet. Adds the right class and role. */
var NbRowComponent = /** @class */ (function (_super) {
    __extends(NbRowComponent, _super);
    function NbRowComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbRowComponent_1 = NbRowComponent;
    var NbRowComponent_1;
    NbRowComponent = NbRowComponent_1 = __decorate([
        Component({
            selector: 'nb-row, tr[nbRow]',
            template: "\n    <ng-container nbCellOutlet></ng-container>",
            host: {
                'class': 'nb-row',
                'role': 'row',
            },
            providers: [{ provide: CdkRow, useExisting: NbRowComponent_1 }],
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
    ], NbRowComponent);
    return NbRowComponent;
}(CdkRow));
export { NbRowComponent };
//# sourceMappingURL=row.js.map