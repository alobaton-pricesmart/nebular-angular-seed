import { AfterViewInit, ElementRef, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { NbAdjustment, NbDynamicOverlayHandler, NbPosition, NbTrigger } from '../cdk';
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
export declare class NbTooltipDirective implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    private hostRef;
    private dynamicOverlayHandler;
    context: Object;
    /**
     * Tooltip message
     */
    content: string;
    /**
     * Position will be calculated relatively host element based on the position.
     * Can be top, right, bottom, left, start or end.
     */
    position: NbPosition;
    /**
     * Container position will be changes automatically based on this strategy if container can't fit view port.
     * Set this property to any falsy value if you want to disable automatically adjustment.
     * Available values: clockwise, counterclockwise.
     */
    adjustment: NbAdjustment;
    /**
     *
     * @param {string} icon
     */
    icon: string;
    /**
     *
     * @param {string} status
     */
    status: string;
    /**
     * Describes when the container will be shown.
     * Available options: `click`, `hover`, `hint`, `focus` and `noop`
     * */
    trigger: NbTrigger;
    private dynamicOverlay;
    constructor(hostRef: ElementRef, dynamicOverlayHandler: NbDynamicOverlayHandler);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    rebuild(): void;
    show(): void;
    hide(): void;
    toggle(): void;
    ngOnDestroy(): void;
    protected configureDynamicOverlay(): NbDynamicOverlayHandler;
}
