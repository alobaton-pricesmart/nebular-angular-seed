/**
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
import { Directive, ElementRef, Input, } from '@angular/core';
import { filter, takeWhile } from 'rxjs/operators';
import { NbAdjustment, NbDynamicOverlay, NbDynamicOverlayHandler, NbPosition, NbTrigger, } from '../cdk';
import { NbContextMenuComponent } from './context-menu.component';
import { NbMenuService } from '../menu/menu.service';
/**
 * Full featured context menu directive.
 *
 * @stacked-example(Showcase, context-menu/context-menu-showcase.component)
 *
 * Just pass menu items array:
 *
 * ```html
 * <button [nbContextMenu]="items"></button>
 * ...
 * items = [{ title: 'Profile' }, { title: 'Log out' }];
 * ```
 * ### Installation
 *
 * Import `NbContextMenuModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbContextMenuModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * If you want to handle context menu clicks you have to pass `nbContextMenuTag`
 * param and register to events using NbMenuService.
 * `NbContextMenu` renders plain `NbMenu` inside, so
 * you have to work with it just like with `NbMenu` component:
 *
 * @stacked-example(Menu item click, context-menu/context-menu-click.component)
 *
 * Context menu has different placements, such as: top, bottom, left and right
 * which can be used as following:
 *
 * ```html
 * <button [nbContextMenu]="items" nbContextMenuPlacement="right"></button>
 * ```
 *
 * ```ts
 * items = [{ title: 'Profile' }, { title: 'Log out' }];
 * ```
 *
 * By default context menu will try to adjust itself to maximally fit viewport
 * and provide the best user experience. It will try to change position of the context menu.
 * If you wanna disable this behaviour just set it falsy value.
 *
 * ```html
 * <button [nbContextMenu]="items" nbContextMenuAdjustment="counterclockwise"></button>
 * ```
 *
 * ```ts
 * items = [{ title: 'Profile' }, { title: 'Log out' }];
 * ```
 * Context menu has a number of triggers which provides an ability to show and hide the component in different ways:
 *
 * - Click mode shows the component when a user clicks on the host element and hides when the user clicks
 * somewhere on the document outside the component.
 * - Hint provides capability to show the component when the user hovers over the host element
 * and hide when the user hovers out of the host.
 * - Hover works like hint mode with one exception - when the user moves mouse from host element to
 * the container element the component remains open, so that it is possible to interact with it content.
 * - Focus mode is applied when user focuses the element.
 * - Noop mode - the component won't react to the user interaction.
 *
 * @stacked-example(Available Triggers, context-menu/context-menu-modes.component.html)
 *
 * Noop mode is especially useful when you need to control Popover programmatically, for example show/hide
 * as a result of some third-party action, like HTTP request or validation check:
 *
 * @stacked-example(Manual Control, context-menu/context-menu-noop.component)
 *
 * @stacked-example(Manual Control, context-menu/context-menu-right-click.component)
 * */
var NbContextMenuDirective = /** @class */ (function () {
    function NbContextMenuDirective(hostRef, menuService, dynamicOverlayHandler) {
        this.hostRef = hostRef;
        this.menuService = menuService;
        this.dynamicOverlayHandler = dynamicOverlayHandler;
        /**
         * Position will be calculated relatively host element based on the position.
         * Can be top, right, bottom and left.
         * */
        this.position = NbPosition.BOTTOM;
        /**
         * Container position will be changes automatically based on this strategy if container can't fit view port.
         * Set this property to any falsy value if you want to disable automatically adjustment.
         * Available values: clockwise, counterclockwise.
         * */
        this.adjustment = NbAdjustment.CLOCKWISE;
        /**
         * Describes when the container will be shown.
         * Available options: `click`, `hover`, `hint`, `focus` and `noop`
         * */
        this.trigger = NbTrigger.CLICK;
        this.alive = true;
        this._items = [];
    }
    Object.defineProperty(NbContextMenuDirective.prototype, "items", {
        /**
         * Basic menu items, will be passed to the internal NbMenuComponent.
         * */
        set: function (items) {
            this.validateItems(items);
            this._items = items;
        },
        enumerable: true,
        configurable: true
    });
    ;
    NbContextMenuDirective.prototype.ngOnInit = function () {
        this.dynamicOverlayHandler
            .host(this.hostRef)
            .componentType(NbContextMenuComponent);
    };
    NbContextMenuDirective.prototype.ngOnChanges = function () {
        this.rebuild();
    };
    NbContextMenuDirective.prototype.ngAfterViewInit = function () {
        this.dynamicOverlay = this.configureDynamicOverlay()
            .build();
        this.subscribeOnItemClick();
    };
    NbContextMenuDirective.prototype.rebuild = function () {
        this.dynamicOverlay = this.configureDynamicOverlay()
            .rebuild();
    };
    NbContextMenuDirective.prototype.show = function () {
        this.dynamicOverlay.show();
    };
    NbContextMenuDirective.prototype.hide = function () {
        this.dynamicOverlay.hide();
    };
    NbContextMenuDirective.prototype.toggle = function () {
        this.dynamicOverlay.toggle();
    };
    NbContextMenuDirective.prototype.ngOnDestroy = function () {
        this.dynamicOverlayHandler.destroy();
    };
    NbContextMenuDirective.prototype.configureDynamicOverlay = function () {
        return this.dynamicOverlayHandler
            .position(this.position)
            .trigger(this.trigger)
            .adjustment(this.adjustment)
            .context({
            position: this.position,
            items: this._items,
            tag: this.tag,
        });
    };
    /*
     * NbMenuComponent will crash if don't pass menu items to it.
     * So, we just validating them and throw custom obvious error.
     * */
    NbContextMenuDirective.prototype.validateItems = function (items) {
        if (!items || !items.length) {
            throw Error("List of menu items expected, but given: " + items);
        }
    };
    NbContextMenuDirective.prototype.subscribeOnItemClick = function () {
        var _this = this;
        this.menuService.onItemClick()
            .pipe(takeWhile(function () { return _this.alive; }), filter(function (_a) {
            var tag = _a.tag;
            return tag === _this.tag;
        }))
            .subscribe(function () { return _this.hide(); });
    };
    __decorate([
        Input('nbContextMenuPlacement'),
        __metadata("design:type", String)
    ], NbContextMenuDirective.prototype, "position", void 0);
    __decorate([
        Input('nbContextMenuAdjustment'),
        __metadata("design:type", String)
    ], NbContextMenuDirective.prototype, "adjustment", void 0);
    __decorate([
        Input('nbContextMenuTag'),
        __metadata("design:type", String)
    ], NbContextMenuDirective.prototype, "tag", void 0);
    __decorate([
        Input('nbContextMenu'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], NbContextMenuDirective.prototype, "items", null);
    __decorate([
        Input('nbContextMenuTrigger'),
        __metadata("design:type", String)
    ], NbContextMenuDirective.prototype, "trigger", void 0);
    NbContextMenuDirective = __decorate([
        Directive({
            selector: '[nbContextMenu]',
            providers: [NbDynamicOverlayHandler, NbDynamicOverlay],
        }),
        __metadata("design:paramtypes", [ElementRef,
            NbMenuService,
            NbDynamicOverlayHandler])
    ], NbContextMenuDirective);
    return NbContextMenuDirective;
}());
export { NbContextMenuDirective };
//# sourceMappingURL=context-menu.directive.js.map