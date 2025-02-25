import FactoryGirl from 'factory-girl'

import chance from '../helpers/chance.js';
import { User } from '../../types/models/User.js';
import { LabeledStringValue } from '../../types/models/LabeledStringValue.js';
import { UiLanguage } from '../../types/enums.js';

const emailDomain = 'baragaun.com';

const attrs: FactoryGirl.Attributes<Partial<User>> = {
  userHandle: chance.word(),

  firstName: chance.first(),

  lastName: chance.last(),

  email: FactoryGirl.factory.sequence(
    'user.email', n => `holger+test-${n}@${emailDomain}`,
  ),

  phoneNumber: () => chance.bool({ likelihood: 30 })
    ? chance.phone()
    : undefined,

  genderTextId: chance.bool({ likelihood: 30 })
    ? chance.pickone([undefined, '', '-', 'f', 'm', 'x'])
    : undefined,

  cityOfResidence: () => chance.bool({ likelihood: 10 })
    ? chance.city()
    : undefined,

  regionOfResidence: () => chance.bool({ likelihood: 10 })
    ? chance.state()
    : undefined,

  countryOfResidenceTextId: () => chance.bool({ likelihood: 90 })
    ? chance.country()
    : undefined,

  postalCode: () => chance.bool({ likelihood: 90 })
    ? chance.postcode()
    : undefined,

  avatarUrl: () => chance.bool({ likelihood: 10 })
    ? chance.url()
    : undefined,

  websites: () => chance.bool({ likelihood: 40 })
    ? Array.from({ length: chance.integer({ min: 0, max: 3 })})
      .map(_ => new LabeledStringValue({ label: chance.word(), value: chance.url() }))
    : undefined,

  preferredLanguageTextId: () => chance.bool({ likelihood: 9 })
    ? chance.pickone(Object.values(UiLanguage))
    : undefined,

  spokenLanguagesTextIds: () => chance.bool({ likelihood: 10 })
    ? chance.pickset(Object.values(UiLanguage), chance.integer({ min: 0, max: 2 }))
    : undefined,

  selectedUiLanguageTextId: () => chance.bool({ likelihood: 30 })
    ? UiLanguage.en
    : chance.pickone(Object.values(UiLanguage)),

  fallbackUiLanguageTextId: () => chance.bool({ likelihood: 80 })
    ? UiLanguage.en
    : chance.pickone(Object.values(UiLanguage)),

  roles: undefined,

  source: () => chance.bool({ likelihood: 10 })
    ? chance.word()
    : undefined,

  discoverable: () => chance.bool({ likelihood: 99.5 }),

  trustLevel: () => chance.bool({ likelihood: .1 })
    ? chance.integer({ min: -10, max: -1 }) // 0.1% are marked as bad actors
    : chance.integer({ min: 1, max: 1000 }),

  inactivatedAt: () => chance.bool({ likelihood: 1 })
    ? new Date(Date.now() - chance.integer({
      min: 24 * 3600 * 1000, // youngest is 1 day old
      max: 500 * 24 * 3600 * 1000, // oldest is 500 days old
    }))
    : undefined,

  createdAt: () => new Date(Date.now() - chance.integer({
    min: 24 * 3600 * 1000, // youngest is 1 day old
    max: 500 * 24 * 3600 * 1000, // oldest is 500 days old
  })),

  // todo: add more
}

const initUserFactory = (): void => {
  FactoryGirl.factory.define<User>('User', User, attrs)
}

export default initUserFactory
