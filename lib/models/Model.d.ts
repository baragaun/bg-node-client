/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
export declare abstract class Model {
    id: string;
    createdAt: string;
    createdBy?: string | null;
    updatedAt?: string | null;
    updatedBy?: string | null;
    deletedAt?: string | null;
    deletedBy?: string | null;
    protected constructor(attributes?: Partial<Model> | null);
    static get searchFields(): string[];
}
