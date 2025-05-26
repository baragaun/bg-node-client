import { BaseListFilter } from './BaseListFilter.js';
import { IncludeFilterOption } from '../enums.js';
export declare class BgChannelListFilter extends BaseListFilter {
    userId?: string | null;
    userIds?: string[] | null;
    mustHaveMessages?: boolean | null;
    invitationMustBeAccepted?: boolean | null;
    includeArchivedMessages?: IncludeFilterOption | null;
    includeSystemMessages?: IncludeFilterOption | null;
}
