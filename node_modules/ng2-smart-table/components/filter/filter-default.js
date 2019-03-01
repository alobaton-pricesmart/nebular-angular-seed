import { Output, EventEmitter, Input } from '@angular/core';
import { Column } from '../../lib/data-set/column';
import { DataSource } from '../../lib/data-source/data-source';
var FilterDefault = /** @class */ (function () {
    function FilterDefault() {
        this.inputClass = '';
        this.filter = new EventEmitter();
        this.query = '';
    }
    FilterDefault.prototype.onFilter = function (query) {
        this.source.addFilter({
            field: this.column.id,
            search: query,
            filter: this.column.getFilterFunction(),
        });
    };
    FilterDefault.propDecorators = {
        "column": [{ type: Input },],
        "source": [{ type: Input },],
        "inputClass": [{ type: Input },],
        "filter": [{ type: Output },],
    };
    return FilterDefault;
}());
export { FilterDefault };
//# sourceMappingURL=filter-default.js.map