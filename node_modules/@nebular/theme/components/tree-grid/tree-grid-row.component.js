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
import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Inject, Input } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { NbCdkFooterRow, NbCdkHeaderRow, NbCdkRow, NbFooterRowComponent, NbHeaderRowComponent, NbRowComponent, } from '../cdk/table';
import { NB_TREE_GRID } from './tree-grid-injection-tokens';
export var NB_ROW_DOUBLE_CLICK_DELAY = 200;
/**
 * Cells container. Adds the right class and role.
 */
var NbTreeGridRowComponent = /** @class */ (function (_super) {
    __extends(NbTreeGridRowComponent, _super);
    function NbTreeGridRowComponent(tree, elementRef) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.doubleClick$ = new Subject();
        /**
         * Time to wait for second click to expand row deeply.
         * 200ms by default.
         */
        _this.doubleClickDelay = NB_ROW_DOUBLE_CLICK_DELAY;
        /**
         * Toggle row on click. Enabled by default.
         */
        _this.clickToToggle = true;
        _this.tree = tree;
        return _this;
    }
    NbTreeGridRowComponent_1 = NbTreeGridRowComponent;
    NbTreeGridRowComponent.prototype.toggleIfEnabledNode = function () {
        var _this = this;
        if (!this.clickToToggle) {
            return;
        }
        timer(NB_ROW_DOUBLE_CLICK_DELAY)
            .pipe(take(1), takeUntil(this.doubleClick$))
            .subscribe(function () { return _this.tree.toggleRow(_this); });
    };
    NbTreeGridRowComponent.prototype.toggleIfEnabledNodeDeep = function () {
        if (!this.clickToToggle) {
            return;
        }
        this.doubleClick$.next();
        this.tree.toggleRow(this, { deep: true });
    };
    NbTreeGridRowComponent.prototype.ngOnDestroy = function () {
        this.doubleClick$.complete();
    };
    var NbTreeGridRowComponent_1;
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], NbTreeGridRowComponent.prototype, "doubleClickDelay", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], NbTreeGridRowComponent.prototype, "clickToToggle", void 0);
    __decorate([
        HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NbTreeGridRowComponent.prototype, "toggleIfEnabledNode", null);
    __decorate([
        HostListener('dblclick'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NbTreeGridRowComponent.prototype, "toggleIfEnabledNodeDeep", null);
    NbTreeGridRowComponent = NbTreeGridRowComponent_1 = __decorate([
        Component({
            selector: 'tr[nbTreeGridRow]',
            template: "<ng-container nbCellOutlet></ng-container>",
            host: {
                'class': 'nb-tree-grid-row',
                'role': 'row',
            },
            providers: [{ provide: NbCdkRow, useExisting: NbTreeGridRowComponent_1 }],
            changeDetection: ChangeDetectionStrategy.OnPush,
        }),
        __param(0, Inject(NB_TREE_GRID)),
        __metadata("design:paramtypes", [Object, ElementRef])
    ], NbTreeGridRowComponent);
    return NbTreeGridRowComponent;
}(NbRowComponent));
export { NbTreeGridRowComponent };
var NbTreeGridHeaderRowComponent = /** @class */ (function (_super) {
    __extends(NbTreeGridHeaderRowComponent, _super);
    function NbTreeGridHeaderRowComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbTreeGridHeaderRowComponent_1 = NbTreeGridHeaderRowComponent;
    var NbTreeGridHeaderRowComponent_1;
    NbTreeGridHeaderRowComponent = NbTreeGridHeaderRowComponent_1 = __decorate([
        Component({
            selector: 'tr[nbTreeGridHeaderRow]',
            template: "\n    <ng-container nbCellOutlet></ng-container>",
            host: {
                'class': 'nb-tree-grid-header-row',
                'role': 'row',
            },
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [{ provide: NbCdkHeaderRow, useExisting: NbTreeGridHeaderRowComponent_1 }],
        })
    ], NbTreeGridHeaderRowComponent);
    return NbTreeGridHeaderRowComponent;
}(NbHeaderRowComponent));
export { NbTreeGridHeaderRowComponent };
var NbTreeGridFooterRowComponent = /** @class */ (function (_super) {
    __extends(NbTreeGridFooterRowComponent, _super);
    function NbTreeGridFooterRowComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbTreeGridFooterRowComponent_1 = NbTreeGridFooterRowComponent;
    var NbTreeGridFooterRowComponent_1;
    NbTreeGridFooterRowComponent = NbTreeGridFooterRowComponent_1 = __decorate([
        Component({
            selector: 'tr[nbTreeGridFooterRow]',
            template: "\n    <ng-container nbCellOutlet></ng-container>",
            host: {
                'class': 'nb-tree-grid-footer-row',
                'role': 'row',
            },
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [{ provide: NbCdkFooterRow, useExisting: NbTreeGridFooterRowComponent_1 }],
        })
    ], NbTreeGridFooterRowComponent);
    return NbTreeGridFooterRowComponent;
}(NbFooterRowComponent));
export { NbTreeGridFooterRowComponent };
//# sourceMappingURL=tree-grid-row.component.js.map