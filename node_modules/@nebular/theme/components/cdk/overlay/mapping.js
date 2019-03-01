var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Directive, Injectable, NgModule, } from '@angular/core';
import { CdkPortal, CdkPortalOutlet, ComponentPortal, PortalInjector, PortalModule, TemplatePortal, } from '@angular/cdk/portal';
import { FlexibleConnectedPositionStrategy, Overlay, OverlayContainer, OverlayModule, OverlayPositionBuilder, } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var NbPortalDirective = /** @class */ (function (_super) {
    __extends(NbPortalDirective, _super);
    function NbPortalDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbPortalDirective = __decorate([
        Directive({ selector: '[nbPortal]' })
    ], NbPortalDirective);
    return NbPortalDirective;
}(CdkPortal));
export { NbPortalDirective };
var NbPortalOutletDirective = /** @class */ (function (_super) {
    __extends(NbPortalOutletDirective, _super);
    function NbPortalOutletDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbPortalOutletDirective = __decorate([
        Directive({ selector: '[nbPortalOutlet]' })
    ], NbPortalOutletDirective);
    return NbPortalOutletDirective;
}(CdkPortalOutlet));
export { NbPortalOutletDirective };
var NbComponentPortal = /** @class */ (function (_super) {
    __extends(NbComponentPortal, _super);
    function NbComponentPortal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NbComponentPortal;
}(ComponentPortal));
export { NbComponentPortal };
var NbOverlay = /** @class */ (function (_super) {
    __extends(NbOverlay, _super);
    function NbOverlay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbOverlay = __decorate([
        Injectable()
    ], NbOverlay);
    return NbOverlay;
}(Overlay));
export { NbOverlay };
var NbPlatform = /** @class */ (function (_super) {
    __extends(NbPlatform, _super);
    function NbPlatform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbPlatform = __decorate([
        Injectable()
    ], NbPlatform);
    return NbPlatform;
}(Platform));
export { NbPlatform };
var NbOverlayPositionBuilder = /** @class */ (function (_super) {
    __extends(NbOverlayPositionBuilder, _super);
    function NbOverlayPositionBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbOverlayPositionBuilder = __decorate([
        Injectable()
    ], NbOverlayPositionBuilder);
    return NbOverlayPositionBuilder;
}(OverlayPositionBuilder));
export { NbOverlayPositionBuilder };
var NbTemplatePortal = /** @class */ (function (_super) {
    __extends(NbTemplatePortal, _super);
    function NbTemplatePortal(template, viewContainerRef, context) {
        return _super.call(this, template, viewContainerRef, context) || this;
    }
    return NbTemplatePortal;
}(TemplatePortal));
export { NbTemplatePortal };
var NbOverlayContainer = /** @class */ (function (_super) {
    __extends(NbOverlayContainer, _super);
    function NbOverlayContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbOverlayContainer.ngInjectableDef = i0.defineInjectable({ factory: function NbOverlayContainer_Factory() { return new NbOverlayContainer(i0.inject(i1.DOCUMENT)); }, token: NbOverlayContainer, providedIn: "root" });
    return NbOverlayContainer;
}(OverlayContainer));
export { NbOverlayContainer };
var NbFlexibleConnectedPositionStrategy = /** @class */ (function (_super) {
    __extends(NbFlexibleConnectedPositionStrategy, _super);
    function NbFlexibleConnectedPositionStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NbFlexibleConnectedPositionStrategy;
}(FlexibleConnectedPositionStrategy));
export { NbFlexibleConnectedPositionStrategy };
var NbPortalInjector = /** @class */ (function (_super) {
    __extends(NbPortalInjector, _super);
    function NbPortalInjector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NbPortalInjector;
}(PortalInjector));
export { NbPortalInjector };
var CDK_MODULES = [OverlayModule, PortalModule];
/**
 * This module helps us to keep all angular/cdk deps inside our cdk module via providing aliases.
 * Approach will help us move cdk in separate npm package and refactor nebular/theme code.
 * */
var NbCdkMappingModule = /** @class */ (function () {
    function NbCdkMappingModule() {
    }
    NbCdkMappingModule_1 = NbCdkMappingModule;
    NbCdkMappingModule.forRoot = function () {
        return {
            ngModule: NbCdkMappingModule_1,
            providers: [
                NbOverlay,
                NbPlatform,
                NbOverlayPositionBuilder,
            ],
        };
    };
    var NbCdkMappingModule_1;
    NbCdkMappingModule = NbCdkMappingModule_1 = __decorate([
        NgModule({
            imports: CDK_MODULES.slice(),
            exports: CDK_MODULES.concat([
                NbPortalDirective,
                NbPortalOutletDirective,
            ]),
            declarations: [NbPortalDirective, NbPortalOutletDirective],
        })
    ], NbCdkMappingModule);
    return NbCdkMappingModule;
}());
export { NbCdkMappingModule };
//# sourceMappingURL=mapping.js.map