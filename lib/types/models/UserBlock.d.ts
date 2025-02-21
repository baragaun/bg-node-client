export declare class UserBlock {
    userId: string;
    reasonTextId: string;
    notes?: string | null;
    adminNotes?: string | null;
    createdAt: Date;
    constructor(attributes?: Partial<UserBlock>);
}
