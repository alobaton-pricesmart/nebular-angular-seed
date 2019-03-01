/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbTableModule } from '../cdk/table';
import { NbTreeGridComponent } from './tree-grid.component';
import { NbTreeGridCellDefDirective, NbTreeGridFooterCellDefDirective, NbTreeGridFooterRowDefDirective, NbTreeGridHeaderCellDefDirective, NbTreeGridHeaderRowDefDirective, NbTreeGridRowDefDirective, } from './tree-grid-def.component';
import { NbTreeGridFooterRowComponent, NbTreeGridHeaderRowComponent, NbTreeGridRowComponent, } from './tree-grid-row.component';
import { NbTreeGridCellDirective, NbTreeGridFooterCellDirective, NbTreeGridHeaderCellDirective, } from './tree-grid-cell.component';
import { NbSortDirective, NbSortHeaderComponent, NbSortHeaderIconDirective, NbSortIconComponent, } from './tree-grid-sort.component';
import { NbTreeGridDataSourceBuilder } from './data-source/tree-grid-data-source';
import { NbTreeGridSortService } from './data-source/tree-grid-sort.service';
import { NbTreeGridFilterService } from './data-source/tree-grid-filter.service';
import { NbTreeGridService } from './data-source/tree-grid.service';
import { NbTreeGridDataService } from './data-source/tree-grid-data.service';
import { NbFilterDirective, NbFilterInputDirective } from './tree-grid-filter';
import { NbTreeGridRowToggleDirective } from './tree-grid-row-toggle.directive';
import { NbTreeGridColumnDefDirective } from './tree-grid-column-def.directive';
import { NbTreeGridRowToggleComponent } from './tree-grid-row-toggle.component';
var COMPONENTS = [
    // Tree Grid
    NbTreeGridComponent,
    NbTreeGridRowDefDirective,
    NbTreeGridRowComponent,
    NbTreeGridCellDefDirective,
    NbTreeGridCellDirective,
    NbTreeGridHeaderRowDefDirective,
    NbTreeGridHeaderRowComponent,
    NbTreeGridHeaderCellDefDirective,
    NbTreeGridHeaderCellDirective,
    NbTreeGridFooterRowDefDirective,
    NbTreeGridFooterRowComponent,
    NbTreeGridFooterCellDefDirective,
    NbTreeGridFooterCellDirective,
    NbTreeGridColumnDefDirective,
    // Sort directives
    NbSortDirective,
    NbSortHeaderComponent,
    NbSortIconComponent,
    // Filter directives
    NbFilterDirective,
    NbFilterInputDirective,
    NbTreeGridRowToggleDirective,
    NbTreeGridRowToggleComponent,
    NbSortHeaderIconDirective,
];
var NbTreeGridModule = /** @class */ (function () {
    function NbTreeGridModule() {
    }
    NbTreeGridModule = __decorate([
        NgModule({
            imports: [CommonModule, NbTableModule],
            declarations: COMPONENTS.slice(),
            exports: [NbTableModule].concat(COMPONENTS),
            providers: [
                NbTreeGridSortService,
                NbTreeGridFilterService,
                NbTreeGridService,
                NbTreeGridDataService,
                NbTreeGridDataSourceBuilder,
            ],
        })
    ], NbTreeGridModule);
    return NbTreeGridModule;
}());
export { NbTreeGridModule };
//# sourceMappingURL=tree-grid.module.js.map