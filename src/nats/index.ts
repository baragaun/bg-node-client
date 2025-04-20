import close from './close.js';
import { consumeStream } from './consumeStream.js';
import { createConsumer } from './createConsumer.js';
import { createStream } from './createStream.js';
import { deleteConsumer } from './deleteConsumer.js';
import { deleteStream } from './deleteStream.js';
import { fetchMessages } from './fetchMessages.js';
import { findStreamNameBySubject } from './findStreamNameBySubject.js';
import { getNextMessage } from './getNextMessage.js';
import { getOrderedConsumer } from './getOrderedConsumer.js';
import { getStream } from './getStream.js';
import init from './init.js';
import { publishMessage } from './publishMessage.js';

const natsService = {
  close,
  consumeStream,
  createConsumer,
  createStream,
  deleteConsumer,
  deleteStream,
  fetchMessages,
  findStreamNameBySubject,
  getNextMessage,
  getOrderedConsumer,
  getStream,
  init,
  publishMessage,
};

export default natsService;
