import Chance from 'chance';

const chance = new Chance();

const date = new Date();
const dateMMDD = `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

const emailDomain = process.env.EMAIL_DOMAIN || 'baragaun.com';
const emailPrefix = process.env.EMAIL_PREFIX || 'holger+test-';
let emailCounter = 1;
let userHandleCounter = 1;

export const uniqueEmail = (): string => {
  return `${emailPrefix}${dateMMDD}-${crypto.randomUUID().replaceAll('-', '')}-${emailCounter++}@${emailDomain}`;
};

export const uniqueUserHandle = (): string => {
  return `${chance.word()}-${crypto.randomUUID().replaceAll('-', '')}-${userHandleCounter++}`;
};

export default chance;
