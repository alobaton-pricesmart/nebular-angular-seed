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
import { Directive, ElementRef, Input } from '@angular/core';
import { NbAdjustment, NbDynamicOverlay, NbDynamicOverlayHandler, NbPosition, NbTrigger } from '../cdk';
import { NbTooltipComponent } from './tooltip.component';
/**
 *
 * Tooltip directive for small text/icon hints.
 *
 * ### Installation
 *
 * Import `NbTooltipModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbTooltipModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * @stacked-example(Showcase, tooltip/tooltip-showcase.component)
 *
 * Tooltip can accept a hint text and/or an icon:
 * @stacked-example(With Icon, tooltip/tooltip-with-icon.component)
 *
 * Same way as Popover, tooltip can accept placement position with `nbTooltipPlacement` proprety:
 * @stacked-example(Placements, tooltip/tooltip-placements.component)
 *
 * It is also possible to specify tooltip color using `nbTooltipStatus` property:
 * @stacked-example(Colored Tooltips, tooltip/tooltip-colors.component)
 *
 * Tooltip has a number of triggers which provides an ability to show and hide the component in different ways:
 *
 * - Click mode shows the component when a user clicks on the host element and hides when the user clicks
 * somewhere on the document outside the component.
 * - Hint provides capability to show the component when the user hovers over the host element
 * and hide when the user hovers out of the host.
 * - Hover works like hint mode with one exception - when the user moves mouse from host element to
 * the container element the component remains open, so that it is possible to interact with it content.
 * - Focus mode is applied when user focuses the element.
 * - Noop mode - the component won't react to the user interaction.
 */
var NbTooltipDirective = /** @class */ (function () {
    function NbTooltipDirective(hostRef, dynamicOverlayHandler) {
        this.hostRef = hostRef;
        this.dynamicOverlayHandler = dynamicOverlayHandler;
        this.context = {};
        /**
         * Position will be calculated relatively host element based on the position.
         * Can be top, right, bottom, left, start or end.
         */
        this.position = NbPosition.TOP;
        /**
         * Container position will be changes automatically based on this strategy if container can't fit view port.
         * Set this property to any falsy value if you want to disable automatically adjustment.
         * Available values: clockwise, counterclockwise.
         */
        this.adjustment = NbAdjustment.CLOCKWISE;
        /**
         * Describes when the container will be shown.
         * Available options: `click`, `hover`, `hint`, `focus` and `noop`
         * */
        this.trigger = NbTrigger.HINT;
    }
    Object.defineProperty(NbTooltipDirective.prototype, "icon", {
        /**
         *
         * @param {string} icon
         */
        set: function (icon) {
            this.context = Object.assign(this.context, { icon: icon });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbTooltipDirective.prototype, "status", {
        /**
         *
         * @param {string} status
         */
        set: function (status) {
            this.context = Object.assign(this.context, { status: status });
        },
        enumerable: true,
        configurable: true
    });
    NbTooltipDirective.prototype.ngOnInit = function () {
        this.dynamicOverlayHandler
            .host(this.hostRef)
            .componentType(NbTooltipComponent)
            .offset(8);
    };
    NbTooltipDirective.prototype.ngOnChanges = function () {
        this.rebuild();
    };
    NbTooltipDirective.prototype.ngAfterViewInit = function () {
        this.dynamicOverlay = this.configureDynamicOverlay()
            .build();
    };
    NbTooltipDirective.prototype.rebuild = function () {
        this.dynamicOverlay = this.configureDynamicOverlay()
            .rebuild();
    };
    NbTooltipDirective.prototype.show = function () {
        this.dynamicOverlay.show();
    };
    NbTooltipDirective.prototype.hide = function () {
        this.dynamicOverlay.hide();
    };
    NbTooltipDirective.prototype.toggle = function () {
        this.dynamicOverlay.toggle();
    };
    NbTooltipDirective.prototype.ngOnDestroy = function () {
        this.dynamicOverlayHandler.destroy();
    };
    NbTooltipDirective.prototype.configureDynamicOverlay = function () {
        return this.dynamicOverlayHandler
            .position(this.position)
            .trigger(this.trigger)
            .adjustment(this.adjustment)
            .content(this.content)
            .context(this.context);
    };
    __decorate([
        Input('nbTooltip'),
        __metadata("design:type", String)
    ], NbTooltipDirective.prototype, "content", void 0);
    __decorate([
        Input('nbTooltipPlacement'),
        __metadata("design:type", String)
    ], NbTooltipDirective.prototype, "position", void 0);
    __decorate([
        Input('nbTooltipAdjustment'),
        __metadata("design:type", String)
    ], NbTooltipDirective.prototype, "adjustment", void 0);
    __decorate([
        Input('nbTooltipIcon'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], NbTooltipDirective.prototype, "icon", null);
    __decorate([
        Input('nbTooltipStatus'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], NbTooltipDirective.prototype, "status", null);
    __decorate([
        Input('nbTooltipTrigger'),
        __metadata("design:type", String)
    ], NbTooltipDirective.prototype, "trigger", void 0);
    NbTooltipDirective = __decorate([
        Directive({
            selector: '[nbTooltip]',
            providers: [NbDynamicOverlayHandler, NbDynamicOverlay],
        }),
        __metadata("design:paramtypes", [ElementRef,
            NbDynamicOverlayHandler])
    ], NbTooltipDirective);
    return NbTooltipDirective;
}());
export { NbTooltipDirective };
//# sourceMappingURL=tooltip.directive.js.map