import { IncludeFilterOption } from '../enums.js';
import { SortItem } from './SortItem.js';

export class FindObjectsOptions {
  public limit?: number;
  public sort?: SortItem[];
  public skip?: number;
  public timeout?: boolean;
  public tailable?: boolean;
  public awaitData?: boolean;
  public batchSize?: number;
  public returnKey?: boolean;
  public maxTimeMS?: number;
  public maxAwaitTimeMS?: number;
  public noCursorTimeout?: boolean;
  public singleBatch?: boolean;
  public allowPartialResults?: boolean;
  public showRecordId?: boolean;
  public includeArchived?: IncludeFilterOption;
  public includeBlocked?: IncludeFilterOption;
  public includeDeleted?: IncludeFilterOption;
  public includeSuspended?: IncludeFilterOption;
  public projection?: any;

  constructor(attributes?: Partial<FindObjectsOptions>) {
    if (attributes) {
      if (
        attributes.limit === 0 ||
        (
          attributes.limit &&
          !isNaN(attributes.limit)
        )
      ) {
        this.limit = attributes.limit;
      }
      if (attributes.sort) {
        this.sort = attributes.sort;
      }
      if (
        attributes.skip === 0 ||
        (
          attributes.skip &&
          !isNaN(attributes.skip)
        )
      ) {
        this.skip = attributes.skip;
      }
      if (attributes.timeout === true || attributes.timeout === false) {
        this.timeout = attributes.timeout;
      }
      if (attributes.tailable === true || attributes.tailable === false) {
        this.tailable = attributes.tailable;
      }
      if (attributes.awaitData === true || attributes.awaitData === false) {
        this.awaitData = attributes.awaitData;
      }
      if (
        attributes.batchSize === 0 ||
        (
          attributes.batchSize &&
          !isNaN(attributes.batchSize)
        )
      ) {
        this.batchSize = attributes.batchSize;
      }
      if (attributes.returnKey === true || attributes.returnKey === false) {
        this.returnKey = attributes.returnKey;
      }
      if (
        attributes.maxTimeMS === 0 ||
        (
          attributes.maxTimeMS &&
          !isNaN(attributes.maxTimeMS)
        )
      ) {
        this.maxTimeMS = attributes.maxTimeMS;
      }
      if (
        attributes.maxAwaitTimeMS === 0 ||
        (
          attributes.maxAwaitTimeMS &&
          !isNaN(attributes.maxAwaitTimeMS)
        )
      ) {
        this.maxAwaitTimeMS = attributes.maxAwaitTimeMS;
      }
      if (attributes.noCursorTimeout === true || attributes.noCursorTimeout === false) {
        this.noCursorTimeout = attributes.noCursorTimeout;
      }
      if (attributes.singleBatch === true || attributes.singleBatch === false) {
        this.singleBatch = attributes.singleBatch;
      }
      if (attributes.allowPartialResults === true || attributes.allowPartialResults === false) {
        this.allowPartialResults = attributes.allowPartialResults;
      }
      if (attributes.showRecordId === true || attributes.showRecordId === false) {
        this.showRecordId = attributes.showRecordId;
      }
      if (attributes.includeArchived) {
        this.includeArchived = attributes.includeArchived;
      }
      if (attributes.includeBlocked) {
        this.includeBlocked = attributes.includeBlocked;
      }
      if (attributes.includeDeleted) {
        this.includeDeleted = attributes.includeDeleted;
      }
      if (attributes.includeSuspended) {
        this.includeSuspended = attributes.includeSuspended;
      }
      if (attributes.projection) {
        this.projection = attributes.projection;
      }
    }
  }
}
