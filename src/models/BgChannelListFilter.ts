import { BaseListFilter } from './BaseListFilter.js';
import { IncludeFilterOption } from '../enums.js';

export class BgChannelListFilter extends BaseListFilter {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public userId?: string | null;
  public userIds?: string[] | null;
  public mustHaveMessages?: boolean | null;
  public invitationMustBeAccepted?: boolean | null;
  public includeArchivedMessages?: IncludeFilterOption | null;
  public includeSystemMessages?: IncludeFilterOption | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<BgChannelListFilter>) {
    super(attributes);
    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
