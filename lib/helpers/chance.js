import Chance from 'chance';
import libData from './libData.js';
const chance = new Chance();
const date = new Date();
const dateMMDD = `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
let emailDomain = undefined;
let emailPrefix = undefined;
let emailCounter = 1;
let userHandleCounter = 1;
export const uniqueEmail = (prefix, domain) => {
    if (!emailDomain) {
        emailDomain = prefix || libData.config()?.testEmailDomain || 'test.com';
        emailPrefix = domain || libData.config()?.testEmailPrefix || 'test';
    }
    return `${emailPrefix}${dateMMDD}-${crypto.randomUUID().replaceAll('-', '')}-${emailCounter++}@${emailDomain}`;
};
export const uniqueUserHandle = () => {
    return `${chance.word()}-${crypto.randomUUID().replaceAll('-', '')}-${userHandleCounter++}`;
};
export default chance;
//# sourceMappingURL=chance.js.map