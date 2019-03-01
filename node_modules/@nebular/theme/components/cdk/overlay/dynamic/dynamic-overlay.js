var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ComponentFactoryResolver, Injectable, NgZone } from '@angular/core';
import { filter, takeUntil, takeWhile } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { createContainer, NbOverlayService, patch } from '../overlay';
var NbDynamicOverlay = /** @class */ (function () {
    function NbDynamicOverlay(overlay, componentFactoryResolver, zone) {
        this.overlay = overlay;
        this.componentFactoryResolver = componentFactoryResolver;
        this.zone = zone;
        this.context = {};
        this.positionStrategyChange$ = new Subject();
        this.alive = true;
    }
    Object.defineProperty(NbDynamicOverlay.prototype, "isAttached", {
        get: function () {
            return this.ref && this.ref.hasAttached();
        },
        enumerable: true,
        configurable: true
    });
    NbDynamicOverlay.prototype.create = function (componentType, content, context, positionStrategy) {
        this.setContentAndContext(content, context);
        this.setComponent(componentType);
        this.setPositionStrategy(positionStrategy);
        return this;
    };
    NbDynamicOverlay.prototype.setContent = function (content) {
        this.content = content;
        if (this.container) {
            this.updateContext();
        }
    };
    NbDynamicOverlay.prototype.setContext = function (context) {
        this.context = context;
        if (this.container) {
            this.updateContext();
        }
    };
    NbDynamicOverlay.prototype.setContentAndContext = function (content, context) {
        this.content = content;
        this.context = context;
        if (this.container) {
            this.updateContext();
        }
    };
    NbDynamicOverlay.prototype.setComponent = function (componentType) {
        this.componentType = componentType;
        // in case the component is shown we recreate it and show it back
        if (this.ref && this.isAttached) {
            this.dispose();
            this.show();
        }
        else if (this.ref && !this.isAttached) {
            this.dispose();
        }
    };
    NbDynamicOverlay.prototype.setPositionStrategy = function (positionStrategy) {
        var _this = this;
        this.positionStrategyChange$.next();
        this.positionStrategy = positionStrategy;
        this.positionStrategy.positionChange
            .pipe(takeWhile(function () { return _this.alive; }), takeUntil(this.positionStrategyChange$), filter(function () { return !!_this.container; }))
            .subscribe(function (position) { return patch(_this.container, { position: position }); });
        if (this.ref) {
            this.ref.updatePositionStrategy(this.positionStrategy);
        }
    };
    NbDynamicOverlay.prototype.show = function () {
        if (!this.ref) {
            this.createOverlay();
        }
        this.renderContainer();
    };
    NbDynamicOverlay.prototype.hide = function () {
        if (!this.ref) {
            return;
        }
        this.ref.detach();
        this.container = null;
    };
    NbDynamicOverlay.prototype.toggle = function () {
        if (this.isAttached) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    NbDynamicOverlay.prototype.dispose = function () {
        this.alive = false;
        this.hide();
        if (this.ref) {
            this.ref.dispose();
            this.ref = null;
        }
    };
    NbDynamicOverlay.prototype.getContainer = function () {
        return this.container;
    };
    NbDynamicOverlay.prototype.createOverlay = function () {
        this.ref = this.overlay.create({
            positionStrategy: this.positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
        });
        this.updatePositionWhenStable();
    };
    NbDynamicOverlay.prototype.renderContainer = function () {
        var containerContext = this.createContainerContext();
        if (!this.container) {
            this.container = createContainer(this.ref, this.componentType, containerContext, this.componentFactoryResolver);
        }
        this.container.instance.renderContent();
    };
    NbDynamicOverlay.prototype.updateContext = function () {
        var containerContext = this.createContainerContext();
        Object.assign(this.container.instance, containerContext);
        this.container.instance.renderContent();
        this.container.changeDetectorRef.detectChanges();
    };
    NbDynamicOverlay.prototype.createContainerContext = function () {
        return {
            content: this.content,
            context: this.context,
            cfr: this.componentFactoryResolver,
        };
    };
    /**
     * Dimensions of the container may change after content update. So we listen to zone.stable event to
     * reposition the container.
     */
    NbDynamicOverlay.prototype.updatePositionWhenStable = function () {
        var _this = this;
        this.zone.onStable
            .pipe(takeWhile(function () { return _this.alive; }))
            .subscribe(function () {
            _this.ref && _this.ref.updatePosition();
        });
    };
    NbDynamicOverlay = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [NbOverlayService,
            ComponentFactoryResolver,
            NgZone])
    ], NbDynamicOverlay);
    return NbDynamicOverlay;
}());
export { NbDynamicOverlay };
//# sourceMappingURL=dynamic-overlay.js.map