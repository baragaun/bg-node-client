// import * as Factory from 'factory.ts';
import { Factory } from 'rosie';

import { LabeledStringValue } from '../../types/models/LabeledStringValue.js';
import { ModelType, UiLanguage } from '../../types/enums.js';
import { User } from '../../types/models/User.js';
import { UserFactory } from './definitions.js';
import chance from '../../helpers/chance.js';
import deleteFunc from './helpers/delete.js';
import save from './helpers/save.js';
import create from './helpers/create.js';
import randomDate from '../../helpers/randomDate.js';

const emailDomain = 'baragaun.com';

const userFactory = Factory.define<User>('User', User)
  .attr('avatarUrl', () => (chance.bool({ likelihood: 10 }) ? chance.url() : undefined))
  .attr('cityOfResidence', () => (chance.bool({ likelihood: 10 }) ? chance.city() : undefined))
  .attr('countryOfResidenceTextId', () => (chance.bool({ likelihood: 90 }) ? chance.country() : undefined))
  .attr('createdAt', () => randomDate())
  .attr('discoverable', () => chance.bool({ likelihood: 99.5 }))
  .sequence('email', (i) => `holger+test-${i}@${emailDomain}`)
  .attr('fallbackUiLanguageTextId', () =>
    chance.bool({ likelihood: 80 }) ? UiLanguage.en : chance.pickone(Object.values(UiLanguage)),
  )
  .attr('firstName', () => chance.first())
  .attr('lastName', () => chance.last())
  .attr('genderTextId', () =>
    chance.bool({ likelihood: 30 }) ? chance.pickone([undefined, '', '-', 'f', 'm', 'x']) : undefined,
  )
  .attr('inactivatedAt', () => (chance.bool({ likelihood: 1 }) ? randomDate() : undefined))
  .attr('phoneNumber', () => (chance.bool({ likelihood: 30 }) ? chance.phone() : undefined))
  .attr('postalCode', () => (chance.bool({ likelihood: 90 }) ? chance.postcode() : undefined))
  .attr('preferredLanguageTextId', () =>
    chance.bool({ likelihood: 9 }) ? chance.pickone(Object.values(UiLanguage)) : undefined,
  )
  .attr('regionOfResidence', () => (chance.bool({ likelihood: 10 }) ? chance.state() : undefined))
  .attr('selectedUiLanguageTextId', () =>
    chance.bool({ likelihood: 30 }) ? UiLanguage.en : chance.pickone(Object.values(UiLanguage)),
  )
  .attr('source', () => (chance.bool({ likelihood: 10 }) ? chance.word() : undefined))
  .attr('spokenLanguagesTextIds', () =>
    chance.bool({ likelihood: 10 })
      ? chance.pickset(Object.values(UiLanguage), chance.integer({ min: 0, max: 2 }))
      : undefined,
  )
  .attr('trustLevel', () =>
    chance.bool({ likelihood: 0.1 })
      ? chance.integer({ min: -10, max: -1 }) // 0.1% are marked as bad actors
      : chance.integer({ min: 1, max: 1000 }),
  )
  .attr('websites', () =>
    chance.bool({ likelihood: 40 })
      ? Array.from({ length: chance.integer({ min: 0, max: 3 }) }).map(
          (_) => new LabeledStringValue({ label: chance.word(), value: chance.url() }),
        )
      : undefined,
  )
  .attr('userHandle', () => chance.word()) as UserFactory;

userFactory.create = (props: Partial<User> | Partial<User>[], options?: any, count?: number): Promise<User | User[]> =>
  create<User>(props, options, count);

// userFactory.create2 = async (
//   props: Partial<User> | Partial<User>[],
//   options?: any,
//   count?: number,
//   ): Promise<User | User[]> => {
//   if (!db.isConnected()) {
//     throw new Error('db-not-available');
//   }
//
//   if (Array.isArray(props)) {
//     const promises =  props.map(async (userProps) => {
//       const user = userFactory.build(userProps, options);
//       const { object } = await db.insert<User>(user);
//       return object;
//     })
//
//     return await Promise.all(promises);
//   }
//
//   if (count && count > 1) {
//     const promises =  Array.from({ length: count})
//       .map(async (userProps) => {
//         const user = userFactory.build(userProps, options);
//         const { object } = await db.insert<User>(user);
//         return object;
//       })
//
//     return await Promise.all(promises);
//   }
//
//   const user = userFactory.build(props)
//   const { object } = await db.insert<User>(user);
//
//   return object;
// };

userFactory.save = async (user: User): Promise<User> => save(user);

userFactory.delete = async (user: User): Promise<User> => {
  await deleteFunc(user.id, ModelType.User);

  return user;
};

export default userFactory;

// const userFactoryOLD = Factory.Sync.makeFactory<User>({
//   addedToBgVaultAt: undefined,
//   adminNotes: undefined,
//   appFeatures: undefined,
//   authType: undefined,
//   avatarUrl: Factory.Sync.each(() => chance.bool({ likelihood: 10 })
//     ? chance.url()
//     : undefined),
//   cityOfResidence: Factory.Sync.each(() => chance.bool({ likelihood: 10 })
//     ? chance.city()
//     : undefined),
//   countryOfResidenceTextId: Factory.Sync.each(() => chance.bool({ likelihood: 90 })
//     ? chance.country()
//     : undefined),
//   createdAt: Factory.Sync.each(() => new Date(Date.now() - chance.integer({
//     min: 24 * 3600 * 1000, // youngest is 1 day old
//     max: 500 * 24 * 3600 * 1000, // oldest is 500 days old
//   }))),
//   createdBy: undefined,
//   deletedAt: undefined,
//   deletedBy: undefined,
//   discoverable: Factory.Sync.each(() => chance.bool({ likelihood: 99.5 })),
//   email: Factory.Sync.each((i) => `holger+test-${i}@${emailDomain}`),
//   emailLowerCase: undefined,
//   emailSource: undefined,
//   emailUpdatedAt: undefined,
//   events: undefined,
//   fallbackUiLanguageTextId: Factory.Sync.each(() => chance.bool({ likelihood: 80 })
//     ? UiLanguage.en
//     : chance.pickone(Object.values(UiLanguage))),
//   firstName: Factory.Sync.each(() => chance.first()),
//   genderTextId: Factory.Sync.each(() => chance.bool({ likelihood: 30 })
//     ? chance.pickone([undefined, '', '-', 'f', 'm', 'x'])
//     : undefined),
//   id: undefined,
//   inactivatedAt: Factory.Sync.each(() => chance.bool({ likelihood: 1 })
//     ? new Date(Date.now() - chance.integer({
//       min: 24 * 3600 * 1000, // youngest is 1 day old
//       max: 500 * 24 * 3600 * 1000, // oldest is 500 days old
//     }))
//     : undefined),
//   inactivatedBy: undefined,
//   isAdmin: undefined,
//   isEmailVerified: undefined,
//   isPhoneNumberVerified: undefined,
//   isTestUser: undefined,
//   lastName: undefined,
//   latestActivityAt: undefined,
//   metadata: undefined,
//   onboardingStage: undefined,
//   optIntoNewsletter: undefined,
//   passwordHash: undefined,
//   passwordUpdatedAt: undefined,
//   phoneNumber: Factory.Sync.each(() => chance.bool({ likelihood: 30 })
//     ? chance.phone()
//     : undefined),
//   phoneNumberUpdatedAt: undefined,
//   postalCode: Factory.Sync.each(() => chance.bool({ likelihood: 90 })
//     ? chance.postcode()
//     : undefined),
//   preferences: undefined,
//   preferredLanguageTextId: Factory.Sync.each(() => chance.bool({ likelihood: 9 })
//     ? chance.pickone(Object.values(UiLanguage))
//     : undefined),
//   regionOfResidence: Factory.Sync.each(() => chance.bool({ likelihood: 10 })
//     ? chance.state()
//     : undefined),
//   roles: undefined,
//   selectedUiLanguageTextId: Factory.Sync.each(() => chance.bool({ likelihood: 30 })
//     ? UiLanguage.en
//     : chance.pickone(Object.values(UiLanguage))),
//   signedInAt: undefined,
//   signedOutAt: undefined,
//   source: Factory.Sync.each(() => chance.bool({ likelihood: 10 })
//     ? chance.word()
//     : undefined),
//   spokenLanguagesTextIds: Factory.Sync.each(() => chance.bool({ likelihood: 10 })
//     ? chance.pickset(Object.values(UiLanguage), chance.integer({ min: 0, max: 2 }))
//     : undefined),
//   suspendedAt: undefined,
//   suspendedBy: undefined,
//   termsAndConditionsAcceptedAt: undefined,
//   tfaBackupCodes: undefined,
//   timezone: undefined,
//   trustLevel: Factory.Sync.each(() => chance.bool({ likelihood: .1 })
//     ? chance.integer({ min: -10, max: -1 }) // 0.1% are marked as bad actors
//     : chance.integer({ min: 1, max: 1000 })),
//   updatedAt: undefined,
//   updatedBy: undefined,
//   userBlocks: undefined,
//   websites: Factory.Sync.each(() => chance.bool({ likelihood: 40 })
//     ? Array.from({ length: chance.integer({ min: 0, max: 3 })})
//       .map(_ => new LabeledStringValue({ label: chance.word(), value: chance.url() }))
//     : undefined),
//   userHandle: Factory.Sync.each(() => chance.word()),
// });
//
// export default userFactoryOLD
