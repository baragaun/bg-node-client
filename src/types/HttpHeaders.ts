import { HttpHeaderName } from './enums.js';

export type HttpHeaders = Partial<Record<HttpHeaderName, string>>;
