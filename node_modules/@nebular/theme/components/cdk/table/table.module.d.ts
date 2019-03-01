import { ChangeDetectorRef, ElementRef, IterableDiffers } from '@angular/core';
import { CdkTable, CdkTableModule } from '@angular/cdk/table';
import { NbDirectionality } from '../bidi';
import { NbPlatform } from '../platform';
export declare const NB_TABLE_TEMPLATE = "\n  <ng-container nbHeaderRowOutlet></ng-container>\n  <ng-container nbRowOutlet></ng-container>\n  <ng-container nbFooterRowOutlet></ng-container>";
export declare class NbTable<T> extends CdkTable<T> {
    constructor(differs: IterableDiffers, changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, role: string, dir: NbDirectionality, document: any, platform: NbPlatform | undefined);
}
export declare class NbTableModule extends CdkTableModule {
}
