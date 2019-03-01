import { IterableDiffers, TemplateRef } from '@angular/core';
import { NbCellDefDirective, NbFooterCellDefDirective, NbFooterRowDefDirective, NbHeaderCellDefDirective, NbHeaderRowDefDirective, NbRowDefDirective } from '../cdk/table';
import { NbColumnsService } from './tree-grid-columns.service';
export interface NbTreeGridResponsiveRowDef {
    hideColumn(column: string): any;
    showColumn(column: string): any;
}
/**
 * Data row definition for the tree-grid.
 * Captures the header row's template and columns to display.
 */
export declare class NbTreeGridRowDefDirective<T> extends NbRowDefDirective<T> implements NbTreeGridResponsiveRowDef {
    private columnsService;
    /**
     * Columns to be displayed on this row
     */
    columns: Iterable<string>;
    constructor(template: TemplateRef<any>, differs: IterableDiffers, columnsService: NbColumnsService);
    /** @docs-private */
    hideColumn(column: string): void;
    /** @docs-private */
    showColumn(column: string): void;
}
export declare class NbTreeGridHeaderRowDefDirective extends NbHeaderRowDefDirective implements NbTreeGridResponsiveRowDef {
    private columnsService;
    /**
     * Columns to be displayed on this row
     */
    columns: Iterable<string>;
    constructor(template: TemplateRef<any>, differs: IterableDiffers, columnsService: NbColumnsService);
    /** @docs-private */
    hideColumn(column: string): void;
    /** @docs-private */
    showColumn(column: string): void;
}
export declare class NbTreeGridFooterRowDefDirective extends NbFooterRowDefDirective implements NbTreeGridResponsiveRowDef {
    private columnsService;
    /**
     * Columns to be displayed on this row
     */
    columns: Iterable<string>;
    constructor(template: TemplateRef<any>, differs: IterableDiffers, columnsService: NbColumnsService);
    /** @docs-private */
    hideColumn(column: string): void;
    /** @docs-private */
    showColumn(column: string): void;
}
/**
 * Cell definition for a nb-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
export declare class NbTreeGridCellDefDirective extends NbCellDefDirective {
}
/**
 * Header cell definition for the nb-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
export declare class NbTreeGridHeaderCellDefDirective extends NbHeaderCellDefDirective {
}
/**
 * Footer cell definition for the nb-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
export declare class NbTreeGridFooterCellDefDirective extends NbFooterCellDefDirective {
}
