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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, HostListener } from '@angular/core';
import { NbTreeGridCellDirective } from './tree-grid-cell.component';
/**
 * When using custom row toggle, apply this directive on your toggle to toggle row on element click.
 */
var NbTreeGridRowToggleDirective = /** @class */ (function () {
    function NbTreeGridRowToggleDirective(cell) {
        this.cell = cell;
    }
    NbTreeGridRowToggleDirective.prototype.toggleRow = function ($event) {
        this.cell.toggleRow();
        $event.stopPropagation();
    };
    __decorate([
        HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], NbTreeGridRowToggleDirective.prototype, "toggleRow", null);
    NbTreeGridRowToggleDirective = __decorate([
        Directive({
            selector: '[nbTreeGridRowToggle]',
        }),
        __metadata("design:paramtypes", [NbTreeGridCellDirective])
    ], NbTreeGridRowToggleDirective);
    return NbTreeGridRowToggleDirective;
}());
export { NbTreeGridRowToggleDirective };
//# sourceMappingURL=tree-grid-row-toggle.directive.js.map