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
import { NbAdjustment, NbPosition, NbTrigger, NbDynamicOverlayHandler, NbDynamicOverlay, } from '../cdk';
import { NbPopoverComponent } from './popover.component';
/**
 * Powerful popover directive, which provides the best UX for your users.
 *
 * @stacked-example(Showcase, popover/popover-showcase.component)
 *
 * Popover can accept different content such as:
 * TemplateRef
 *
 * ```html
 * <button [nbPopover]="templateRef"></button>
 * <ng-template #templateRef>
 *   <span>Hello, Popover!</span>
 * </ng-template>
 * ```
 * ### Installation
 *
 * Import `NbPopoverModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbPopoverModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Custom components
 *
 * ```html
 * <button [nbPopover]="MyPopoverComponent"></button>
 * ```
 *
 * Both custom components and templateRef popovers can receive *contentContext* property
 * that will be passed to the content props.
 *
 * Primitive types
 *
 * ```html
 * <button nbPopover="Hello, Popover!"></button>
 * ```
 *
 * Popover has different placements, such as: top, bottom, left, right, start and end
 * which can be used as following:
 *
 * @stacked-example(Placements, popover/popover-placements.component)
 *
 * By default popover will try to adjust itself to maximally fit viewport
 * and provide the best user experience. It will try to change position of the popover container.
 * If you wanna disable this behaviour just set it falsy value.
 *
 * ```html
 * <button nbPopover="Hello, Popover!" [nbPopoverAdjustment]="false"></button>
 * ```
 *
 * Popover has a number of triggers which provides an ability to show and hide the component in different ways:
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
 * @stacked-example(Available Triggers, popover/popover-modes.component.html)
 *
 * Noop mode is especially useful when you need to control Popover programmatically, for example show/hide
 * as a result of some third-party action, like HTTP request or validation check:
 *
 * @stacked-example(Manual Control, popover/popover-noop.component)
 *
 * Below are examples for manual popover settings control, both via template binding and code.
 * @stacked-example(Popover Settings, popover/popover-dynamic.component)
 *
 * Please note, while manipulating Popover setting via code, you need to call `rebuild()` method to apply the settings
 * changed.
 * @stacked-example(Popover Settings Code, popover/popover-dynamic-code.component)
 *
 * @additional-example(Template Ref, popover/popover-template-ref.component)
 * @additional-example(Custom Component, popover/popover-custom-component.component)
 * */
var NbPopoverDirective = /** @class */ (function () {
    function NbPopoverDirective(hostRef, dynamicOverlayHandler) {
        this.hostRef = hostRef;
        this.dynamicOverlayHandler = dynamicOverlayHandler;
        /**
         * Container content context. Will be applied to the rendered component.
         * */
        this.context = {};
        /**
         * Position will be calculated relatively host element based on the position.
         * Can be top, right, bottom, left, start or end.
         * */
        this.position = NbPosition.TOP;
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
    }
    Object.defineProperty(NbPopoverDirective.prototype, "mode", {
        get: function () {
            return this.trigger;
        },
        /**
         * Deprecated, use `trigger`
         * @deprecated
         * @breaking-change 4.0.0
         * */
        set: function (mode) {
            console.warn("Popover 'nbPopoverMode' input is deprecated and will be removed as of 4.0.0.\n      Use 'nbPopoverTrigger' instead.");
            this.trigger = mode;
        },
        enumerable: true,
        configurable: true
    });
    NbPopoverDirective.prototype.ngOnInit = function () {
        this.dynamicOverlayHandler
            .host(this.hostRef)
            .componentType(NbPopoverComponent);
    };
    NbPopoverDirective.prototype.ngOnChanges = function () {
        this.rebuild();
    };
    NbPopoverDirective.prototype.ngAfterViewInit = function () {
        this.dynamicOverlay = this.configureDynamicOverlay()
            .build();
    };
    NbPopoverDirective.prototype.rebuild = function () {
        this.dynamicOverlay = this.configureDynamicOverlay()
            .rebuild();
    };
    NbPopoverDirective.prototype.show = function () {
        this.dynamicOverlay.show();
    };
    NbPopoverDirective.prototype.hide = function () {
        this.dynamicOverlay.hide();
    };
    NbPopoverDirective.prototype.toggle = function () {
        this.dynamicOverlay.toggle();
    };
    NbPopoverDirective.prototype.ngOnDestroy = function () {
        this.dynamicOverlayHandler.destroy();
    };
    NbPopoverDirective.prototype.configureDynamicOverlay = function () {
        return this.dynamicOverlayHandler
            .position(this.position)
            .trigger(this.trigger)
            .adjustment(this.adjustment)
            .content(this.content)
            .context(this.context);
    };
    __decorate([
        Input('nbPopover'),
        __metadata("design:type", Object)
    ], NbPopoverDirective.prototype, "content", void 0);
    __decorate([
        Input('nbPopoverContext'),
        __metadata("design:type", Object)
    ], NbPopoverDirective.prototype, "context", void 0);
    __decorate([
        Input('nbPopoverPlacement'),
        __metadata("design:type", String)
    ], NbPopoverDirective.prototype, "position", void 0);
    __decorate([
        Input('nbPopoverAdjustment'),
        __metadata("design:type", String)
    ], NbPopoverDirective.prototype, "adjustment", void 0);
    __decorate([
        Input('nbPopoverMode'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NbPopoverDirective.prototype, "mode", null);
    __decorate([
        Input('nbPopoverTrigger'),
        __metadata("design:type", String)
    ], NbPopoverDirective.prototype, "trigger", void 0);
    NbPopoverDirective = __decorate([
        Directive({
            selector: '[nbPopover]',
            providers: [NbDynamicOverlayHandler, NbDynamicOverlay],
        }),
        __metadata("design:paramtypes", [ElementRef,
            NbDynamicOverlayHandler])
    ], NbPopoverDirective);
    return NbPopoverDirective;
}());
export { NbPopoverDirective };
//# sourceMappingURL=popover.directive.js.map