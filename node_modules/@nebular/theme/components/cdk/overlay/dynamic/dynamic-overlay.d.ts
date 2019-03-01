import { ComponentFactoryResolver, ComponentRef, NgZone, Type } from '@angular/core';
import { Subject } from 'rxjs';
import { NbAdjustableConnectedPositionStrategy } from '../overlay-position';
import { NbRenderableContainer } from '../overlay-container';
import { NbOverlayContent, NbOverlayService } from '../overlay';
import { NbOverlayRef } from '../mapping';
export interface NbDynamicOverlayController {
    show(): any;
    hide(): any;
    toggle(): any;
    rebuild(): any;
}
export declare class NbDynamicOverlay {
    private overlay;
    private componentFactoryResolver;
    private zone;
    protected ref: NbOverlayRef;
    protected container: ComponentRef<NbRenderableContainer>;
    protected componentType: Type<NbRenderableContainer>;
    protected context: Object;
    protected content: NbOverlayContent;
    protected positionStrategy: NbAdjustableConnectedPositionStrategy;
    protected positionStrategyChange$: Subject<{}>;
    protected alive: boolean;
    readonly isAttached: boolean;
    constructor(overlay: NbOverlayService, componentFactoryResolver: ComponentFactoryResolver, zone: NgZone);
    create(componentType: Type<NbRenderableContainer>, content: NbOverlayContent, context: Object, positionStrategy: NbAdjustableConnectedPositionStrategy): this;
    setContent(content: NbOverlayContent): void;
    setContext(context: Object): void;
    setContentAndContext(content: NbOverlayContent, context: Object): void;
    setComponent(componentType: Type<NbRenderableContainer>): void;
    setPositionStrategy(positionStrategy: NbAdjustableConnectedPositionStrategy): void;
    show(): void;
    hide(): void;
    toggle(): void;
    dispose(): void;
    getContainer(): ComponentRef<NbRenderableContainer>;
    protected createOverlay(): void;
    protected renderContainer(): void;
    protected updateContext(): void;
    protected createContainerContext(): Object;
    /**
     * Dimensions of the container may change after content update. So we listen to zone.stable event to
     * reposition the container.
     */
    protected updatePositionWhenStable(): void;
}
