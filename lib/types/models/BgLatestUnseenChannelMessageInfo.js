"use strict";
/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
Object.defineProperty(exports, "__esModule", { value: true });
exports.BgLatestUnseenChannelMessageInfo = void 0;
class BgLatestUnseenChannelMessageInfo {
    userId = '';
    createdAt = new Date();
    constructor(attributes) {
        if (attributes) {
            if (attributes.userId) {
                this.userId = attributes.userId;
            }
            if (attributes.createdAt) {
                if (attributes.createdAt instanceof Date) {
                    this.createdAt = attributes.createdAt;
                }
                else {
                    this.createdAt = new Date(attributes.createdAt);
                }
            }
        }
    }
}
exports.BgLatestUnseenChannelMessageInfo = BgLatestUnseenChannelMessageInfo;
