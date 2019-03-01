var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, IterableDiffers } from '@angular/core';
import { merge, Subject } from 'rxjs';
var NbColumnsService = /** @class */ (function () {
    function NbColumnsService(differs) {
        this.differs = differs;
        this.columnHide$ = new Subject();
        this.columnShow$ = new Subject();
    }
    NbColumnsService.prototype.setColumns = function (columns) {
        if (!this.changesDiffer) {
            this.changesDiffer = this.differs.find(columns || []).create();
        }
        if (this.changesDiffer.diff(columns)) {
            this.allColumns = Array.from(columns);
            this.visibleColumns = Array.from(columns);
        }
    };
    NbColumnsService.prototype.getVisibleColumns = function () {
        return this.visibleColumns;
    };
    NbColumnsService.prototype.hideColumn = function (column) {
        var toRemove = this.visibleColumns.indexOf(column);
        if (toRemove > -1) {
            this.visibleColumns.splice(toRemove, 1);
            this.columnHide$.next();
        }
    };
    NbColumnsService.prototype.showColumn = function (column) {
        if (this.visibleColumns.includes(column)) {
            return;
        }
        this.visibleColumns.splice(this.findInsertIndex(column), 0, column);
        this.columnShow$.next();
    };
    NbColumnsService.prototype.onColumnsChange = function () {
        return merge(this.columnShow$, this.columnHide$);
    };
    NbColumnsService.prototype.findInsertIndex = function (column) {
        var initialIndex = this.allColumns.indexOf(column);
        if (initialIndex === 0 || !this.visibleColumns.length) {
            return 0;
        }
        if (initialIndex === this.allColumns.length - 1) {
            return this.visibleColumns.length;
        }
        var leftSiblingIndex = initialIndex - 1;
        for (var i = leftSiblingIndex; i >= 0; i--) {
            var leftSibling = this.allColumns[i];
            var index = this.visibleColumns.indexOf(leftSibling);
            if (index !== -1) {
                return index + 1;
            }
        }
        var rightSiblingIndex = initialIndex + 1;
        for (var i = rightSiblingIndex; i < this.allColumns.length; i++) {
            var rightSibling = this.allColumns[i];
            var index = this.visibleColumns.indexOf(rightSibling);
            if (index !== -1) {
                return index;
            }
        }
        throw new Error("Can't restore column position.");
    };
    NbColumnsService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [IterableDiffers])
    ], NbColumnsService);
    return NbColumnsService;
}());
export { NbColumnsService };
//# sourceMappingURL=tree-grid-columns.service.js.map