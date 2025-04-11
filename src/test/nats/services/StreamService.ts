import * as jetstream from "@nats-io/jetstream";

import NatsJetStreamClient from "../NatsJetStreamClient.js";


export class StreamService {
  constructor(private client: NatsJetStreamClient) {}

  async createStream(config: jetstream.StreamConfig): Promise<jetstream.StreamInfo> {
    try {
      const jsm = await this.client.getJetStreamManager();
      let streamInfo: jetstream.StreamInfo;

      // Try to find the existing Stream
      try {
        streamInfo = await jsm.streams.info(config.name)
        console.log(`Nats.StreamService.createStream: ${config.name} already exists, updating...`);
        streamInfo = await jsm.streams.update(config.name, config);
        console.log(`Nats.StreamService.createStream: ${config.name} updated`);
      } catch (error) {
        // There's no Stream, so we need to create it
        if (error.code === jetstream.JetStreamApiCodes.StreamNotFound) {
          streamInfo = await jsm.streams.add(config);
          console.log(`Nats.StreamService.createStream: ${config.name} created`);
        } else {
          throw error;
        }
      }
      
      return streamInfo;
    } catch (err) {
      console.error(`Nats.StreamService.createStream: Error creating/updating stream ${config.name}:`, err);
      throw err;
    }
  }

  async deleteStream(streamName: string): Promise<boolean> {
    try {
      const jsm = await this.client.getJetStreamManager();

      // Any check by name,
      // for a nonexistent Stream,
      // errors just the same.

      return await jsm.streams.delete(streamName);
    } catch (error) {
      if (error.code === jetstream.JetStreamApiCodes.StreamNotFound) {
        console.debug(`Nats.StreamService.deleteStream: Stream "${streamName}" not found, confirming nonexistence.`);
        return true;
      }
      console.error(`Nats.StreamService.deleteStream: Error deleting stream ${streamName}:`, error);
      throw error;
    }
  }

  async getStream(streamName: string): Promise<jetstream.Stream> {
    try {
      const jsm = await this.client.getJetStreamManager();

      // Any check by name,
      // for a nonexistent Stream,
      // errors just the same.

      return await jsm.streams.get(streamName);
    } catch (error) {
      if (error.code === jetstream.JetStreamApiCodes.StreamNotFound) {
        console.debug(`Nats.StreamService.getStream: Stream "${streamName}" not found.`);
        throw Error;
      }
      console.error(`Nats.StreamService.getStream: Error getting stream ${streamName}:`, error);
      throw error;
    }
  }

  async findStreamNameBySubject(subjectName: string): Promise<string> {
    try {
      const jsm = await this.client.getJetStreamManager();

      // Any check by name,
      // for a nonexistent Stream,
      // errors just the same.

      return await jsm.streams.find(subjectName);
    } catch (error) {
      if (error.code === jetstream.JetStreamApiCodes.StreamNotFound) {
        console.debug(`Nats.StreamService.findStreamNameBySubject: Stream containing "${subjectName}" not found.`);
        throw Error;
      }
      console.error(`Nats.StreamService.findStreamNameBySubject: Error finding subject stream ${subjectName}:`, error);
      throw error;
    }
  }
}