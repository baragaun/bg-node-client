import { BaseListFilter } from './BaseListFilter.js';
import { IncludeFilterOption } from '../enums.js';

export class BgChannelListFilter extends BaseListFilter {
  public userId?: string | null;
  public userIds?: string[] | null;
  public mustHaveMessages?: boolean | null;
  public invitationMustBeAccepted?: boolean | null;
  public includeArchivedMessages?: IncludeFilterOption | null;
  public includeSystemMessages?: IncludeFilterOption | null;
}
