import { SortDirection } from '../enums.js';
export class SortItem {
    field = '';
    direction = SortDirection.asc;
    constructor(attributes) {
        if (attributes) {
            this.field = attributes.field || '';
            if (attributes.direction) {
                this.direction = attributes.direction;
            }
        }
    }
}
//# sourceMappingURL=SortItem.js.map