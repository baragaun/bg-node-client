import * as jetstream from '@nats-io/jetstream';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';

import NatsJetStreamClient from './NatsJetStreamClient.js';
import { StreamService } from './services/StreamService.js';

describe('StreamService', () => {
  let client: NatsJetStreamClient;
  let streamService: StreamService;
  
  const testStreamName = 'test_stream_service';
  const testSubject = 'test.stream.subject';

  beforeEach(async () => {
    client = new NatsJetStreamClient({
      servers: ['nats://localhost:4222'],
      timeout: 5000,
      reconnectTimeWait: 1000,
    });
    
    streamService = new StreamService(client);
    await client.connect();
  });

  afterEach(async () => {
    if (client.isConnected()) {
      try {
        // Delete the test stream
        try {
          await streamService.deleteStream(testStreamName);
        } catch (error) {
          console.log("Stream cleanup error:", error);
        }
        
        await client.close();
      } catch (error) {
        console.error('Error in test cleanup:', error);
      }
    }
  });

  describe('createStream', () => {
    it('should throw an error if the client is not connected', async () => {
      const disconnectedClient = new NatsJetStreamClient({
        servers: ['nats://localhost:4222'],
      });
      
      const disconnectedService = new StreamService(disconnectedClient);
      
      const streamConfig = {
        name: testStreamName,
        subjects: [testSubject],
      } as jetstream.StreamConfig;
      
      await expect(disconnectedService.createStream(streamConfig)).rejects.toThrow('Not connected to NATS');
    });

    it('should create a new stream when it does not exist', async () => {
      const streamConfig = {
        name: testStreamName,
        subjects: [testSubject],
      } as jetstream.StreamConfig;
      
      const streamInfo = await streamService.createStream(streamConfig);
      
      expect(streamInfo).toBeDefined();
      expect(streamInfo.config.name).toBe(testStreamName);
      expect(streamInfo.config.subjects).toContain(testSubject);
    });

    it('should update an existing stream when it already exists', async () => {
      const initialConfig = {
        name: testStreamName,
        subjects: [testSubject],
        retention: 'limits',
        max_msgs: 100,
        storage: 'memory',
        num_replicas: 1,
      } as jetstream.StreamConfig;
      
      await streamService.createStream(initialConfig);
      
      const updatedConfig = {
        name: testStreamName,
        subjects: [testSubject, 'test.stream.additional'], // Add another subject
        retention: 'limits',
        max_msgs: 200, // Increased max messages
        storage: 'memory',
        num_replicas: 1,
      } as jetstream.StreamConfig;
      
      const updatedInfo = await streamService.createStream(updatedConfig);
      
      expect(updatedInfo).toBeDefined();
      expect(updatedInfo.config.name).toBe(testStreamName);
      expect(updatedInfo.config.subjects).toContain('test.stream.additional');
      expect(updatedInfo.config.max_msgs).toBe(200);
    });
  });

  describe('deleteStream', () => {
    it('should delete an existing stream', async () => {
      const streamConfig = {
        name: testStreamName,
        subjects: [testSubject],
      } as jetstream.StreamConfig;
      
      await streamService.createStream(streamConfig);
      const deletionResult = await streamService.deleteStream(testStreamName);
      
      expect(deletionResult).toBe(true);
    });

    it('should return true if trying to delete a nonexistent stream', async () => {
      const nonExistentStreamName = 'non_existent_stream';
      const result = await streamService.deleteStream(nonExistentStreamName);      

      expect(result).toBe(true);
    });

    it('should throw an error if the client is not connected', async () => {
      const disconnectedClient = new NatsJetStreamClient({
        servers: ['nats://localhost:4222'],
      });
      
      const disconnectedService = new StreamService(disconnectedClient);
      
      await expect(disconnectedService.deleteStream(testStreamName)).rejects.toThrow('Not connected to NATS');
    });
  });
});