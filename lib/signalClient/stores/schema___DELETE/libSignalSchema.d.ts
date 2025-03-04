declare const libSignalSchema: {
    identityKeySchema: import("rxdb").RxJsonSchema<import("../../types.js").IdentityKeyDocument>;
    kyberPrekeySchema: import("rxdb").RxJsonSchema<import("../../types.js").KyberPreKeyDocument>;
    preKeySchema: import("rxdb").RxJsonSchema<import("../../types.js").PreKeyDocument>;
    registrationSchema: import("rxdb").RxJsonSchema<import("../../types.js").RegistrationDocument>;
    senderKeySchema: import("rxdb").RxJsonSchema<import("../../types.js").SenderKeyDocument>;
    sessionSchema: import("rxdb").RxJsonSchema<import("../../types.js").SessionDocument>;
    signedPrekeySchema: import("rxdb").RxJsonSchema<import("../../types.js").SignedPreKeyDocument>;
};
export default libSignalSchema;
