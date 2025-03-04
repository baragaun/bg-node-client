declare const libSignalSchema: {
    identityKeySchema: import("rxdb").RxJsonSchema<import("../../../../signalClient/types.js").IdentityKeyDocument>;
    kyberPrekeySchema: import("rxdb").RxJsonSchema<import("../../../../signalClient/types.js").KyberPreKeyDocument>;
    preKeySchema: import("rxdb").RxJsonSchema<import("../../../../signalClient/types.js").PreKeyDocument>;
    registrationSchema: import("rxdb").RxJsonSchema<import("../../../../signalClient/types.js").RegistrationDocument>;
    senderKeySchema: import("rxdb").RxJsonSchema<import("../../../../signalClient/types.js").SenderKeyDocument>;
    sessionSchema: import("rxdb").RxJsonSchema<import("../../../../signalClient/types.js").SessionDocument>;
    signedPrekeySchema: import("rxdb").RxJsonSchema<import("../../../../signalClient/types.js").SignedPreKeyDocument>;
};
export default libSignalSchema;
