import Chance from 'chance';

import libData from './libData.js';

const chance = new Chance();

const date = new Date();
const dateMMDD = `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

let emailDomain: string | undefined = undefined;
let emailPrefix: string | undefined = undefined;
let emailCounter = 1;
let userHandleCounter = 1;

export const uniqueEmail = (prefix?: string, domain?: string): string => {
  if (!emailDomain) {
    emailPrefix = prefix || libData.config()?.testEmailPrefix || 'test';
    emailDomain = domain || libData.config()?.testEmailDomain || 'test.com';
  }
  return `${emailPrefix}${dateMMDD}-${crypto.randomUUID().replaceAll('-', '')}-${emailCounter++}@${emailDomain}`;
};

export const uniqueUserHandle = (): string => {
  return `${chance.word()}-${crypto.randomUUID().replaceAll('-', '')}-${userHandleCounter++}`;
};

export default chance;
