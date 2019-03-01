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
import { Directive, Input } from '@angular/core';
import { NbCdkColumnDef, NB_SORT_HEADER_COLUMN_DEF, NbColumnDefDirective } from '../cdk/table';
/**
 * Column definition for the tree-grid.
 * Defines a set of cells available for a table column.
 */
var NbTreeGridColumnDefDirective = /** @class */ (function (_super) {
    __extends(NbTreeGridColumnDefDirective, _super);
    function NbTreeGridColumnDefDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hideOnValue = null;
        _this.showOnValue = null;
        return _this;
    }
    NbTreeGridColumnDefDirective_1 = NbTreeGridColumnDefDirective;
    Object.defineProperty(NbTreeGridColumnDefDirective.prototype, "hideOn", {
        /**
         * Amount of pixels of viewport at which column should be hidden.
         * type number
         */
        get: function () {
            return this.hideOnValue;
        },
        set: function (value) {
            this.hideOnValue = !value && value !== 0
                ? null
                : parseInt(value, 10);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbTreeGridColumnDefDirective.prototype, "showOn", {
        /**
         * Amount of pixels of viewport at which column should be shown.
         * type number
         */
        get: function () {
            return this.showOnValue;
        },
        set: function (value) {
            this.showOnValue = !value && value !== 0
                ? null
                : parseInt(value, 10);
        },
        enumerable: true,
        configurable: true
    });
    NbTreeGridColumnDefDirective.prototype.ngOnChanges = function () {
        if (this.hideOn != null && this.showOn != null) {
            throw new Error("hideOn and showOn are mutually exclusive and can't be used simultaneously.");
        }
    };
    NbTreeGridColumnDefDirective.prototype.shouldHide = function (width) {
        return !this.shouldShow(width);
    };
    NbTreeGridColumnDefDirective.prototype.shouldShow = function (width) {
        if (this.hideOn == null && this.showOn == null) {
            return true;
        }
        if (this.hideOn != null) {
            return width > this.hideOn;
        }
        return width >= this.showOn;
    };
    var NbTreeGridColumnDefDirective_1;
    __decorate([
        Input('nbTreeGridColumnDef'),
        __metadata("design:type", String)
    ], NbTreeGridColumnDefDirective.prototype, "name", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], NbTreeGridColumnDefDirective.prototype, "hideOn", null);
    __decorate([
        Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], NbTreeGridColumnDefDirective.prototype, "showOn", null);
    NbTreeGridColumnDefDirective = NbTreeGridColumnDefDirective_1 = __decorate([
        Directive({
            selector: '[nbTreeGridColumnDef]',
            providers: [
                { provide: NbCdkColumnDef, useExisting: NbTreeGridColumnDefDirective_1 },
                { provide: NB_SORT_HEADER_COLUMN_DEF, useExisting: NbTreeGridColumnDefDirective_1 },
            ],
        })
    ], NbTreeGridColumnDefDirective);
    return NbTreeGridColumnDefDirective;
}(NbColumnDefDirective));
export { NbTreeGridColumnDefDirective };
//# sourceMappingURL=tree-grid-column-def.directive.js.map