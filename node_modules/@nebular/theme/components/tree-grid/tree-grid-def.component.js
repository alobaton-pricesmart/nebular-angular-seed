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
import { Directive, Input, IterableDiffers, TemplateRef } from '@angular/core';
import { NbCdkCellDef, NbCdkFooterCellDef, NbCdkFooterRowDef, NbCdkHeaderCellDef, NbCdkHeaderRowDef, NbCdkRowDef, NbCellDefDirective, NbFooterCellDefDirective, NbFooterRowDefDirective, NbHeaderCellDefDirective, NbHeaderRowDefDirective, NbRowDefDirective, } from '../cdk/table';
import { NbColumnsService } from './tree-grid-columns.service';
/**
 * Data row definition for the tree-grid.
 * Captures the header row's template and columns to display.
 */
var NbTreeGridRowDefDirective = /** @class */ (function (_super) {
    __extends(NbTreeGridRowDefDirective, _super);
    function NbTreeGridRowDefDirective(template, differs, columnsService) {
        var _this = _super.call(this, template, differs) || this;
        _this.columnsService = columnsService;
        return _this;
    }
    NbTreeGridRowDefDirective_1 = NbTreeGridRowDefDirective;
    Object.defineProperty(NbTreeGridRowDefDirective.prototype, "columns", {
        get: function () {
            return this.columnsService.getVisibleColumns();
        },
        /**
         * Columns to be displayed on this row
         */
        set: function (value) {
            this.columnsService.setColumns(value);
        },
        enumerable: true,
        configurable: true
    });
    /** @docs-private */
    NbTreeGridRowDefDirective.prototype.hideColumn = function (column) {
        this.columnsService.hideColumn(column);
    };
    /** @docs-private */
    NbTreeGridRowDefDirective.prototype.showColumn = function (column) {
        this.columnsService.showColumn(column);
    };
    var NbTreeGridRowDefDirective_1;
    __decorate([
        Input('nbTreeGridRowDefColumns'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NbTreeGridRowDefDirective.prototype, "columns", null);
    NbTreeGridRowDefDirective = NbTreeGridRowDefDirective_1 = __decorate([
        Directive({
            selector: '[nbTreeGridRowDef]',
            providers: [{ provide: NbCdkRowDef, useExisting: NbTreeGridRowDefDirective_1 }],
        }),
        __metadata("design:paramtypes", [TemplateRef,
            IterableDiffers,
            NbColumnsService])
    ], NbTreeGridRowDefDirective);
    return NbTreeGridRowDefDirective;
}(NbRowDefDirective));
export { NbTreeGridRowDefDirective };
var NbTreeGridHeaderRowDefDirective = /** @class */ (function (_super) {
    __extends(NbTreeGridHeaderRowDefDirective, _super);
    function NbTreeGridHeaderRowDefDirective(template, differs, columnsService) {
        var _this = _super.call(this, template, differs) || this;
        _this.columnsService = columnsService;
        return _this;
    }
    NbTreeGridHeaderRowDefDirective_1 = NbTreeGridHeaderRowDefDirective;
    Object.defineProperty(NbTreeGridHeaderRowDefDirective.prototype, "columns", {
        get: function () {
            return this.columnsService.getVisibleColumns();
        },
        /**
         * Columns to be displayed on this row
         */
        set: function (value) {
            this.columnsService.setColumns(value);
        },
        enumerable: true,
        configurable: true
    });
    /** @docs-private */
    NbTreeGridHeaderRowDefDirective.prototype.hideColumn = function (column) {
        this.columnsService.hideColumn(column);
    };
    /** @docs-private */
    NbTreeGridHeaderRowDefDirective.prototype.showColumn = function (column) {
        this.columnsService.showColumn(column);
    };
    var NbTreeGridHeaderRowDefDirective_1;
    __decorate([
        Input('nbTreeGridHeaderRowDef'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NbTreeGridHeaderRowDefDirective.prototype, "columns", null);
    NbTreeGridHeaderRowDefDirective = NbTreeGridHeaderRowDefDirective_1 = __decorate([
        Directive({
            selector: '[nbTreeGridHeaderRowDef]',
            providers: [{ provide: NbCdkHeaderRowDef, useExisting: NbTreeGridHeaderRowDefDirective_1 }],
        }),
        __metadata("design:paramtypes", [TemplateRef,
            IterableDiffers,
            NbColumnsService])
    ], NbTreeGridHeaderRowDefDirective);
    return NbTreeGridHeaderRowDefDirective;
}(NbHeaderRowDefDirective));
export { NbTreeGridHeaderRowDefDirective };
var NbTreeGridFooterRowDefDirective = /** @class */ (function (_super) {
    __extends(NbTreeGridFooterRowDefDirective, _super);
    function NbTreeGridFooterRowDefDirective(template, differs, columnsService) {
        var _this = _super.call(this, template, differs) || this;
        _this.columnsService = columnsService;
        return _this;
    }
    NbTreeGridFooterRowDefDirective_1 = NbTreeGridFooterRowDefDirective;
    Object.defineProperty(NbTreeGridFooterRowDefDirective.prototype, "columns", {
        get: function () {
            return this.columnsService.getVisibleColumns();
        },
        /**
         * Columns to be displayed on this row
         */
        set: function (value) {
            this.columnsService.setColumns(value);
        },
        enumerable: true,
        configurable: true
    });
    /** @docs-private */
    NbTreeGridFooterRowDefDirective.prototype.hideColumn = function (column) {
        this.columnsService.hideColumn(column);
    };
    /** @docs-private */
    NbTreeGridFooterRowDefDirective.prototype.showColumn = function (column) {
        this.columnsService.showColumn(column);
    };
    var NbTreeGridFooterRowDefDirective_1;
    __decorate([
        Input('nbTreeGridFooterRowDef'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NbTreeGridFooterRowDefDirective.prototype, "columns", null);
    NbTreeGridFooterRowDefDirective = NbTreeGridFooterRowDefDirective_1 = __decorate([
        Directive({
            selector: '[nbTreeGridFooterRowDef]',
            providers: [{ provide: NbCdkFooterRowDef, useExisting: NbTreeGridFooterRowDefDirective_1 }],
        }),
        __metadata("design:paramtypes", [TemplateRef,
            IterableDiffers,
            NbColumnsService])
    ], NbTreeGridFooterRowDefDirective);
    return NbTreeGridFooterRowDefDirective;
}(NbFooterRowDefDirective));
export { NbTreeGridFooterRowDefDirective };
/**
 * Cell definition for a nb-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
var NbTreeGridCellDefDirective = /** @class */ (function (_super) {
    __extends(NbTreeGridCellDefDirective, _super);
    function NbTreeGridCellDefDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbTreeGridCellDefDirective_1 = NbTreeGridCellDefDirective;
    var NbTreeGridCellDefDirective_1;
    NbTreeGridCellDefDirective = NbTreeGridCellDefDirective_1 = __decorate([
        Directive({
            selector: '[nbTreeGridCellDef]',
            providers: [{ provide: NbCdkCellDef, useExisting: NbTreeGridCellDefDirective_1 }],
        })
    ], NbTreeGridCellDefDirective);
    return NbTreeGridCellDefDirective;
}(NbCellDefDirective));
export { NbTreeGridCellDefDirective };
/**
 * Header cell definition for the nb-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
var NbTreeGridHeaderCellDefDirective = /** @class */ (function (_super) {
    __extends(NbTreeGridHeaderCellDefDirective, _super);
    function NbTreeGridHeaderCellDefDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbTreeGridHeaderCellDefDirective_1 = NbTreeGridHeaderCellDefDirective;
    var NbTreeGridHeaderCellDefDirective_1;
    NbTreeGridHeaderCellDefDirective = NbTreeGridHeaderCellDefDirective_1 = __decorate([
        Directive({
            selector: '[nbTreeGridHeaderCellDef]',
            providers: [{ provide: NbCdkHeaderCellDef, useExisting: NbTreeGridHeaderCellDefDirective_1 }],
        })
    ], NbTreeGridHeaderCellDefDirective);
    return NbTreeGridHeaderCellDefDirective;
}(NbHeaderCellDefDirective));
export { NbTreeGridHeaderCellDefDirective };
/**
 * Footer cell definition for the nb-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
var NbTreeGridFooterCellDefDirective = /** @class */ (function (_super) {
    __extends(NbTreeGridFooterCellDefDirective, _super);
    function NbTreeGridFooterCellDefDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbTreeGridFooterCellDefDirective_1 = NbTreeGridFooterCellDefDirective;
    var NbTreeGridFooterCellDefDirective_1;
    NbTreeGridFooterCellDefDirective = NbTreeGridFooterCellDefDirective_1 = __decorate([
        Directive({
            selector: '[nbTreeGridFooterCellDef]',
            providers: [{ provide: NbCdkFooterCellDef, useExisting: NbTreeGridFooterCellDefDirective_1 }],
        })
    ], NbTreeGridFooterCellDefDirective);
    return NbTreeGridFooterCellDefDirective;
}(NbFooterCellDefDirective));
export { NbTreeGridFooterCellDefDirective };
//# sourceMappingURL=tree-grid-def.component.js.map