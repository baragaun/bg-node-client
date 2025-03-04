declare const signalClient: {
    helpers: {
        createRegistration: (registrationId?: number) => import("./types.js").RegistrationDocument;
    };
};
export default signalClient;
