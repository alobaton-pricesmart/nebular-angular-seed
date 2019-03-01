import { OnChanges } from '@angular/core';
import { NbColumnDefDirective } from '../cdk/table';
/**
 * Column definition for the tree-grid.
 * Defines a set of cells available for a table column.
 */
export declare class NbTreeGridColumnDefDirective extends NbColumnDefDirective implements OnChanges {
    /**
     * Column name
     */
    name: string;
    private hideOnValue;
    /**
     * Amount of pixels of viewport at which column should be hidden.
     * type number
     */
    hideOn: number | null;
    private showOnValue;
    /**
     * Amount of pixels of viewport at which column should be shown.
     * type number
     */
    showOn: number | null;
    ngOnChanges(): void;
    shouldHide(width: number): boolean;
    shouldShow(width: number): boolean;
}
