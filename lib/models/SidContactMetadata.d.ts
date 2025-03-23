/** Copyright ©2024 Baragaun, Inc. - All rights reserved **/
import { BaseModelMetadata } from './BaseModelMetadata.js';
export declare abstract class SidContactMetadata extends BaseModelMetadata {
    firstName?: string | null;
    lastName?: string | null;
    userHandle?: string | null;
    avatarUrl?: string | null;
    protected constructor(attributes?: Partial<SidContactMetadata>);
}
