import { NbTreeGridCellDirective } from './tree-grid-cell.component';
/**
 * NbTreeGridRowToggleComponent
 */
export declare class NbTreeGridRowToggleComponent {
    private cell;
    private expandedValue;
    expanded: boolean;
    toggleRow($event: Event): void;
    constructor(cell: NbTreeGridCellDirective);
}
