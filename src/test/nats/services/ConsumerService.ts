import { 
  Consumer, 
  ConsumerConfig, 
  ConsumerInfo, 
  OrderedConsumerOptions 
} from "@nats-io/jetstream";

import NatsJetStreamClient from "../NatsJetStreamClient.js";

export class ConsumerService {
  constructor(private client: NatsJetStreamClient) {}

  async createConsumer(streamName: string, config: ConsumerConfig): Promise<ConsumerInfo> {
    try {
      const jsm = await this.client.getJetStreamManager();
      return await jsm.consumers.add(streamName, config);
    } catch (err) {
      console.error(`Error creating consumer for stream ${streamName}:`, err);
      throw err;
    }
  }

  async deleteConsumer(streamName: string, consumerName: string): Promise<boolean> {
    try {
      const jsm = await this.client.getJetStreamManager();
      return await jsm.consumers.delete(streamName, consumerName);
    } catch (err) {
      console.error(`Error deleting consumer ${consumerName} from stream ${streamName}:`, err);
      return false;
    }
  }

  async getOrderedConsumer(
    streamName: string,
    options?: Partial<OrderedConsumerOptions>
  ): Promise<Consumer> {
    // This does not create a consumer
    try {
      const js = await this.client.getJetStreamClient();
      // No consumer name is specified for ordered consumers
      return js.consumers.get(streamName, options);
    } catch (err) {
      console.error(`Error getting ordered consumer for stream ${streamName}:`, err);
      throw err;
    }
  }
 }
 