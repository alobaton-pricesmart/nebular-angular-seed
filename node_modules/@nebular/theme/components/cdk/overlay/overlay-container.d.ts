import { ChangeDetectorRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injector, ViewContainerRef } from '@angular/core';
import { NbPosition } from './overlay-position';
import { NbComponentPortal, NbPortalInjector, NbPortalOutletDirective, NbTemplatePortal } from './mapping';
export interface NbRenderableContainer {
    /**
     * A renderContent method renders content with provided context.
     * Naturally, this job has to be done by ngOnChanges lifecycle hook, but
     * ngOnChanges hook will be triggered only if we update content or context properties
     * through template property binding syntax. But in our case we're updating these properties programmatically.
     * */
    renderContent(): any;
}
export declare abstract class NbPositionedContainer {
    position: NbPosition;
    readonly top: boolean;
    readonly right: boolean;
    readonly bottom: boolean;
    readonly left: boolean;
}
export declare class NbOverlayContainerComponent {
    protected vcr: ViewContainerRef;
    protected injector: Injector;
    private changeDetectorRef;
    portalOutlet: NbPortalOutletDirective;
    isAttached: boolean;
    content: string;
    constructor(vcr: ViewContainerRef, injector: Injector, changeDetectorRef: ChangeDetectorRef);
    readonly isStringContent: boolean;
    attachComponentPortal<T>(portal: NbComponentPortal<T>): ComponentRef<T>;
    attachTemplatePortal<C>(portal: NbTemplatePortal<C>): EmbeddedViewRef<C>;
    attachStringContent(content: string): void;
    detach(): void;
    protected createChildInjector(cfr: ComponentFactoryResolver): NbPortalInjector;
}
