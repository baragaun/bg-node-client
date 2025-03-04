export declare abstract class BaseListFilter {
    ids?: string[];
    excludeIds?: string[];
    searchText?: string;
    caseSensitive?: boolean;
    textSearchFields?: string[];
    createdAtFrom?: Date | string | null;
    createdAtUntil?: Date | string | null;
    updatedAtFrom?: Date | string | null;
    updatedAtUntil?: Date | string | null;
    protected constructor(attributes?: Partial<BaseListFilter> | null);
}
