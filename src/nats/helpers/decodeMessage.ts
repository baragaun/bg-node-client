import * as jetstream from '@nats-io/jetstream';

export const decodeMessage = <T = any>(msg: jetstream.JsMsg): T => {
  try {
    const decoder = new TextDecoder();
    const data = decoder.decode(msg.data);

    try {
      // Attempt to parse as JSON
      return JSON.parse(data) as T;
    } catch {
      // Return as string if not valid JSON
      return data as unknown as T;
    }
  } catch (err) {
    console.error('Error decoding message:', err);
    throw err;
  }
};
