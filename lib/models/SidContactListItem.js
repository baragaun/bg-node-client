import { BaseModel } from './BaseModel.js';
export class SidContactListItem extends BaseModel {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    userId = '';
    channelId;
    nickname;
    typeTextIds = [];
    favorite;
    notes;
    archivedAt;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.userId !== undefined) {
                this.userId = attributes.userId;
            }
            if (attributes.channelId !== undefined) {
                this.channelId = attributes.channelId;
            }
            if (attributes.nickname !== undefined) {
                this.nickname = attributes.nickname;
            }
            if (attributes.typeTextIds !== undefined) {
                this.typeTextIds = attributes.typeTextIds;
            }
            if (attributes.favorite !== undefined) {
                this.favorite = attributes.favorite;
            }
            if (attributes.notes !== undefined) {
                this.notes = attributes.notes;
            }
            if (attributes.archivedAt !== undefined && attributes.archivedAt !== '') {
                this.archivedAt = attributes.archivedAt;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
}
//# sourceMappingURL=SidContactListItem.js.map