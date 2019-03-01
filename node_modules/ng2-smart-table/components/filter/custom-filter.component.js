var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { FilterDefault } from './filter-default';
var CustomFilterComponent = /** @class */ (function (_super) {
    __extends(CustomFilterComponent, _super);
    function CustomFilterComponent(resolver) {
        var _this = _super.call(this) || this;
        _this.resolver = resolver;
        return _this;
    }
    CustomFilterComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.column && !this.customComponent) {
            var componentFactory = this.resolver.resolveComponentFactory(this.column.filter.component);
            this.customComponent = this.dynamicTarget.createComponent(componentFactory);
            // set @Inputs and @Outputs of custom component
            this.customComponent.instance.query = this.query;
            this.customComponent.instance.column = this.column;
            this.customComponent.instance.source = this.source;
            this.customComponent.instance.inputClass = this.inputClass;
            this.customComponent.instance.filter.subscribe(function (event) { return _this.onFilter(event); });
        }
        if (this.customComponent) {
            this.customComponent.instance.ngOnChanges(changes);
        }
    };
    CustomFilterComponent.prototype.ngOnDestroy = function () {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    };
    CustomFilterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'custom-table-filter',
                    template: "<ng-template #dynamicTarget></ng-template>",
                },] },
    ];
    /** @nocollapse */
    CustomFilterComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver, },
    ]; };
    CustomFilterComponent.propDecorators = {
        "query": [{ type: Input },],
        "dynamicTarget": [{ type: ViewChild, args: ['dynamicTarget', { read: ViewContainerRef },] },],
    };
    return CustomFilterComponent;
}(FilterDefault));
export { CustomFilterComponent };
//# sourceMappingURL=custom-filter.component.js.map