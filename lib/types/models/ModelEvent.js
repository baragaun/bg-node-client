/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { ModelEventType } from '../enums.js';
export class ModelEvent {
    time = new Date();
    modelEventType = ModelEventType.info;
    message = '';
    constructor(attributes) {
        if (attributes) {
            if (attributes.time) {
                if (attributes.time instanceof Date) {
                    this.time = attributes.time;
                }
                else {
                    this.time = new Date(attributes.time);
                }
            }
            if (attributes.modelEventType) {
                this.modelEventType = attributes.modelEventType;
            }
            if (attributes.message) {
                this.message = attributes.message;
            }
        }
    }
}
//# sourceMappingURL=ModelEvent.js.map