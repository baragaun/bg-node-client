import * as jetstream from '@nats-io/jetstream';
export declare const decodeMessage: <T = any>(msg: jetstream.JsMsg) => T;
