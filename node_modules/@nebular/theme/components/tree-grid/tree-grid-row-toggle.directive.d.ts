import { NbTreeGridCellDirective } from './tree-grid-cell.component';
/**
 * When using custom row toggle, apply this directive on your toggle to toggle row on element click.
 */
export declare class NbTreeGridRowToggleDirective {
    private cell;
    toggleRow($event: Event): void;
    constructor(cell: NbTreeGridCellDirective);
}
