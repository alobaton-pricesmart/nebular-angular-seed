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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Attribute, ChangeDetectorRef, ElementRef, Inject, IterableDiffers, NgModule } from '@angular/core';
import { CdkTable, CdkTableModule } from '@angular/cdk/table';
import { NbBidiModule, NbDirectionality } from '../bidi';
import { NbPlatformModule, NbPlatform } from '../platform';
import { NB_DOCUMENT } from '../../../theme.options';
import { NbCellDefDirective, NbCellDirective, NbColumnDefDirective, NbFooterCellDefDirective, NbFooterCellDirective, NbHeaderCellDefDirective, NbHeaderCellDirective, } from './cell';
import { NbCellOutletDirective, NbDataRowOutletDirective, NbFooterRowOutletDirective, NbHeaderRowOutletDirective, NbFooterRowComponent, NbFooterRowDefDirective, NbHeaderRowComponent, NbHeaderRowDefDirective, NbRowComponent, NbRowDefDirective, } from './row';
export var NB_TABLE_TEMPLATE = "\n  <ng-container nbHeaderRowOutlet></ng-container>\n  <ng-container nbRowOutlet></ng-container>\n  <ng-container nbFooterRowOutlet></ng-container>";
var NbTable = /** @class */ (function (_super) {
    __extends(NbTable, _super);
    function NbTable(differs, changeDetectorRef, elementRef, role, dir, document, platform) {
        return _super.call(this, differs, changeDetectorRef, elementRef, role, dir, document, platform) || this;
    }
    NbTable = __decorate([
        __param(3, Attribute('role')),
        __param(5, Inject(NB_DOCUMENT)),
        __metadata("design:paramtypes", [IterableDiffers,
            ChangeDetectorRef,
            ElementRef, String, NbDirectionality, Object, NbPlatform])
    ], NbTable);
    return NbTable;
}(CdkTable));
export { NbTable };
var COMPONENTS = [
    NbTable,
    // Template defs
    NbHeaderCellDefDirective,
    NbHeaderRowDefDirective,
    NbColumnDefDirective,
    NbCellDefDirective,
    NbRowDefDirective,
    NbFooterCellDefDirective,
    NbFooterRowDefDirective,
    // Outlets
    NbDataRowOutletDirective,
    NbHeaderRowOutletDirective,
    NbFooterRowOutletDirective,
    NbCellOutletDirective,
    // Cell directives
    NbHeaderCellDirective,
    NbCellDirective,
    NbFooterCellDirective,
    // Row directives
    NbHeaderRowComponent,
    NbRowComponent,
    NbFooterRowComponent,
];
var NbTableModule = /** @class */ (function (_super) {
    __extends(NbTableModule, _super);
    function NbTableModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbTableModule = __decorate([
        NgModule({
            imports: [NbBidiModule, NbPlatformModule],
            declarations: COMPONENTS.slice(),
            exports: COMPONENTS.slice(),
        })
    ], NbTableModule);
    return NbTableModule;
}(CdkTableModule));
export { NbTableModule };
//# sourceMappingURL=table.module.js.map