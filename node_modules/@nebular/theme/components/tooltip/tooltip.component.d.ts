import { NbPosition, NbRenderableContainer } from '../cdk';
/**
 * Tooltip container.
 * Renders provided tooltip inside.
 *
 * @styles
 *
 * tooltip-bg
 * tooltip-primary-bg
 * tooltip-info-bg
 * tooltip-success-bg
 * tooltip-warning-bg
 * tooltip-danger-bg
 * tooltip-fg
 * tooltip-shadow
 * tooltip-font-size
 *
 */
export declare class NbTooltipComponent implements NbRenderableContainer {
    content: string;
    /**
     * Popover position relatively host element.
     * */
    position: NbPosition;
    readonly binding: string;
    readonly show: boolean;
    context: {
        icon?: string;
        status?: string;
    };
    readonly statusClass: string;
    /**
     * The method is empty since we don't need to do anything additionally
     * render is handled by change detection
     */
    renderContent(): void;
}
