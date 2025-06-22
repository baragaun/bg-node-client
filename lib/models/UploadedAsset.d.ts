import { AssetHostingService, ModelType, UploadedAssetType } from '../enums.js';
export declare class UploadedAsset {
    ownerId: string;
    ownerModelType: ModelType;
    assetType: UploadedAssetType;
    hostingService: AssetHostingService;
    url?: string | null;
    path?: string | null;
    s3Bucket?: string | null;
    s3Key?: string | null;
    mimeType?: string | null;
    uploadUrl?: string | null;
    uploadUrlExpiresAt?: string | null;
    uploadedAt?: string | null;
    expiresAt?: string | null;
    constructor(attributes?: Partial<UploadedAsset>);
    static get searchFields(): string[];
}
