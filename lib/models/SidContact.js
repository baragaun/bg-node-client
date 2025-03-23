import { BaseModel } from './BaseModel.js';
export class SidContact extends BaseModel {
    userId = '';
    channelId;
    nickname;
    typeTextIds = [];
    favorite;
    notes;
    archivedAt;
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            if (attributes.userId) {
                this.userId = attributes.userId;
            }
            if (attributes.channelId) {
                this.channelId = attributes.channelId;
            }
            if (attributes.nickname) {
                this.nickname = attributes.nickname;
            }
            if (attributes.typeTextIds) {
                this.typeTextIds = attributes.typeTextIds;
            }
            if (attributes.favorite === true || attributes.favorite === false) {
                this.favorite = attributes.favorite;
            }
            if (attributes.notes) {
                this.notes = attributes.notes;
            }
            if (attributes.archivedAt) {
                if (attributes.archivedAt instanceof Date) {
                    this.archivedAt = attributes.archivedAt;
                }
                else {
                    this.archivedAt = new Date(attributes.archivedAt);
                }
            }
            if (!Array.isArray(this.typeTextIds)) {
                this.typeTextIds = [];
            }
        }
    }
}
//# sourceMappingURL=SidContact.js.map