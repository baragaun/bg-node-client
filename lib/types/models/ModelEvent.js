/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { ModelEventType } from '../../enums.js';
export class ModelEvent {
    time = new Date();
    modelEventType = ModelEventType.info;
    message = '';
    constructor(attributes) {
        if (attributes) {
            if (attributes.time) {
                this.time = attributes.time;
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