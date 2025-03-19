import Chance from 'chance';

import libData from './libData.js';

const chance = new Chance();

const date = new Date();
const dateMMDD = `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

let emailDomain: string | undefined = undefined;
let emailPrefix: string | undefined = undefined;
let emailCounter = 1;
let userHandleCounter = 1;

export const uniqueEmail = (): string => {
  if (!emailDomain) {
    emailDomain = libData.config()?.testEmailDomain || 'test.com';
    emailPrefix = libData.config()?.testEmailPrefix || 'test';
  }
  return `${emailPrefix}${dateMMDD}-${crypto.randomUUID().replaceAll('-', '')}-${emailCounter++}@${emailDomain}`;
};

export const uniqueUserHandle = (): string => {
  if (!emailDomain) {
    emailDomain = libData.config()?.testEmailDomain || 'test.com';
    emailPrefix = libData.config()?.testEmailPrefix || 'test';
  }
  return `${chance.word()}-${crypto.randomUUID().replaceAll('-', '')}-${userHandleCounter++}`;
};

export default chance;
