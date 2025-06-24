import { AssetHostingService, ModelType, UploadedAssetType, } from '../enums.js';
export class UploadedAsset {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    ownerId = '';
    ownerModelType = ModelType.unset;
    assetType = UploadedAssetType.unset;
    hostingService = AssetHostingService.unset;
    url;
    path;
    s3Bucket;
    s3Key;
    mimeType;
    uploadUrl;
    uploadUrlExpiresAt;
    uploadedAt;
    expiresAt;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.ownerId !== undefined) {
                this.ownerId = attributes.ownerId;
            }
            if (attributes.ownerModelType !== undefined) {
                this.ownerModelType = attributes.ownerModelType;
            }
            if (attributes.assetType !== undefined) {
                this.assetType = attributes.assetType;
            }
            if (attributes.hostingService !== undefined) {
                this.hostingService = attributes.hostingService;
            }
            if (attributes.url !== undefined) {
                this.url = attributes.url;
            }
            if (attributes.path !== undefined) {
                this.path = attributes.path;
            }
            if (attributes.s3Bucket !== undefined) {
                this.s3Bucket = attributes.s3Bucket;
            }
            if (attributes.s3Key !== undefined) {
                this.s3Key = attributes.s3Key;
            }
            if (attributes.mimeType !== undefined) {
                this.mimeType = attributes.mimeType;
            }
            if (attributes.uploadUrl !== undefined) {
                this.uploadUrl = attributes.uploadUrl;
            }
            if (attributes.uploadUrlExpiresAt !== undefined && attributes.uploadUrlExpiresAt !== '') {
                this.uploadUrlExpiresAt = attributes.uploadUrlExpiresAt;
            }
            if (attributes.uploadedAt !== undefined && attributes.uploadedAt !== '') {
                this.uploadedAt = attributes.uploadedAt;
            }
            if (attributes.expiresAt !== undefined && attributes.expiresAt !== '') {
                this.expiresAt = attributes.expiresAt;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
    static get searchFields() {
        return ['url', 'path'];
    }
}
//# sourceMappingURL=UploadedAsset.js.map