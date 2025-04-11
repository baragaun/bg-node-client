import * as jetstream from "@nats-io/jetstream";
import * as nats from "@nats-io/nats-core";

import NatsJetStreamClient from "../NatsJetStreamClient.js";

export class MessageService {
  constructor(private client: NatsJetStreamClient) {}
  async publishMessage(subject: string, data: any, options?: { 
    headers?: Record<string, string>, 
    msgID?: string, 
    timeout?: number,
    expect?: {
      lastMsgID?: string,
      streamName?: string,
      lastSequence?: number,
      lastSubjectSequence?: number
    }
  }): Promise<string> {
    try {
      const js = await this.client.getJetStreamClient();
      const encoder = new TextEncoder();
      const payload = typeof data === 'string' ? encoder.encode(data) : encoder.encode(JSON.stringify(data));
      
      // Convert options to JetStreamPublishOptions format
      const publishOptions: any = {};
      
      if (options?.headers) {
        publishOptions.headers = nats.headers();
        for (const [key, value] of Object.entries(options.headers)) {
          publishOptions.headers.append(key, value);
        }
      }
      
      if (options?.msgID) {
        publishOptions.msgID = options.msgID;
      }
      
      if (options?.timeout) {
        publishOptions.timeout = options.timeout;
      }
      
      if (options?.expect) {
        publishOptions.expect = {};
        if (options.expect.lastMsgID) publishOptions.expect.lastMsgID = options.expect.lastMsgID;
        if (options.expect.streamName) publishOptions.expect.streamName = options.expect.streamName;
        if (options.expect.lastSequence) publishOptions.expect.lastSequence = options.expect.lastSequence;
        if (options.expect.lastSubjectSequence) publishOptions.expect.lastSubjectSequence = options.expect.lastSubjectSequence;
      }
      
      const pubAck = await js.publish(subject, payload, publishOptions);
      return pubAck.seq.toString();
    } catch (err) {
      console.error(`Error publishing to ${subject}:`, err);
      throw err;
    }
  }

  /**
   * Decode a message from a JetStream message
   * @param msg The JetStream message
   * @returns The decoded data
   */
  decodeMessage<T = any>(msg: jetstream.JsMsg): T {
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
  }

  /**
 * Consume messages from a stream with a consumer
 * @param streamName Name of the stream
 * @param consumerName Name of the consumer
 * @param options Consumer options
 * @returns ConsumerMessages for iteration
 */
  async consumeStream(
    streamName: string, 
    consumerName: string,
    options?: {
      max_messages?: number,
      expires?: number,
      idle_heartbeat?: number,
    }
  ): Promise<jetstream.ConsumerMessages> {
    try {
      const js = await this.client.getJetStreamClient();
      const consumer = await js.consumers.get(streamName, consumerName);
      return consumer.consume(options);
    } catch (err) {
      console.error(`Error consuming from stream ${streamName} with consumer ${consumerName}:`, err);
      throw err;
    }
  }

  /**
   * Fetch a batch of messages from a consumer
   * @param streamName Name of the stream
   * @param consumerName Name of the consumer
   * @param options Fetch options
   * @returns ConsumerMessages with the batch
   */
  async fetchMessages(
    streamName: string,
    consumerName: string,
    options?: {
      max_messages?: number,
      expires?: number,
    }
  ): Promise<jetstream.ConsumerMessages> {
    try {
      const js = await this.client.getJetStreamClient();
      const consumer = await js.consumers.get(streamName, consumerName);
      return consumer.fetch(options);
    } catch (err) {
      console.error(`Error fetching from stream ${streamName} with consumer ${consumerName}:`, err);
      throw err;
    }
  }

  /**
   * Get the next message from a consumer
   * @param streamName Name of the stream
   * @param consumerName Name of the consumer
   * @param options Next options
   * @returns Promise that resolves with a message or null
   */
  async getNextMessage(
    streamName: string,
    consumerName: string,
    options?: {
      expires?: number,
    }
  ): Promise<jetstream.JsMsg> {
    try {
      const js = await this.client.getJetStreamClient();
      const consumer = await js.consumers.get(streamName, consumerName);
      return consumer.next(options);
    } catch (err) {
      console.error(`Error getting next message from stream ${streamName} with consumer ${consumerName}:`, err);
      throw err;
    }
  }
}
