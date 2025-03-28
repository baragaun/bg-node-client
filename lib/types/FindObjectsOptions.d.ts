import { IncludeFilterOption } from '../enums.js';
import { SortItem } from './SortItem.js';
export declare class FindObjectsOptions {
    limit?: number;
    sort?: SortItem[];
    skip?: number;
    timeout?: boolean;
    tailable?: boolean;
    awaitData?: boolean;
    batchSize?: number;
    returnKey?: boolean;
    maxTimeMS?: number;
    maxAwaitTimeMS?: number;
    noCursorTimeout?: boolean;
    singleBatch?: boolean;
    allowPartialResults?: boolean;
    showRecordId?: boolean;
    includeArchived?: IncludeFilterOption;
    includeBlocked?: IncludeFilterOption;
    includeDeleted?: IncludeFilterOption;
    includeSuspended?: IncludeFilterOption;
    projection?: any;
    constructor(attributes?: Partial<FindObjectsOptions>);
}
