/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ComponentFactoryResolver } from '@angular/core';
import { NbOverlayContainerComponent, NbPositionedContainer, NbRenderableContainer } from '../cdk';
/**
 * Overlay container.
 * Renders provided content inside.
 *
 * @styles
 *
 * popover-fg
 * popover-bg
 * popover-border
 * popover-shadow
 * */
export declare class NbPopoverComponent extends NbPositionedContainer implements NbRenderableContainer {
    overlayContainer: NbOverlayContainerComponent;
    content: any;
    context: Object;
    cfr: ComponentFactoryResolver;
    renderContent(): void;
    protected detachContent(): void;
    protected attachContent(): void;
    protected attachTemplate(): void;
    protected attachComponent(): void;
    protected attachString(): void;
}
