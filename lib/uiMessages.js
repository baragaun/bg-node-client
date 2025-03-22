import { BgNodeClientUiErrorCode, MultiStepActionResult, UiLanguage, UiMessageType } from './enums.js';
import { ErrorCode as ServerErrorCode } from './fsdata/gql/graphql.js';
let uiMessages = {
    [UiLanguage.en]: {
        [`BgNodeClientUiErrorCode.${BgNodeClientUiErrorCode.invalidInput}`]: '',
        [`BgNodeClientUiErrorCode.${BgNodeClientUiErrorCode.notFound}`]: '',
        [`BgNodeClientUiErrorCode.${BgNodeClientUiErrorCode.unauthorized}`]: '',
        [`ServerErrorCode.${ServerErrorCode.AcademicExperienceNameMissing}`]: '',
        [`ServerErrorCode.${ServerErrorCode.AcademicExperienceUserIdMissing}`]: '',
        [`ServerErrorCode.${ServerErrorCode.AlreadyExists}`]: '',
        [`ServerErrorCode.${ServerErrorCode.AlreadyGroupMember}`]: '',
        [`ServerErrorCode.${ServerErrorCode.AlreadyInitialized}`]: '',
        [`ServerErrorCode.${ServerErrorCode.AuthTokenNoMatch}`]: '',
        [`ServerErrorCode.${ServerErrorCode.BusinessExperienceNameMissing}`]: '',
        [`ServerErrorCode.${ServerErrorCode.BusinessExperienceUserIdMissing}`]: '',
        [`ServerErrorCode.${ServerErrorCode.CompanyNameMissing}`]: '',
        [`ServerErrorCode.${ServerErrorCode.CompanyNameTaken}`]: '',
        [`ServerErrorCode.${ServerErrorCode.ContentTagAlreadyExist}`]: '',
        [`ServerErrorCode.${ServerErrorCode.ContentTagModelTypeMissing}`]: '',
        [`ServerErrorCode.${ServerErrorCode.ContentTagObjectIdMissing}`]: '',
        [`ServerErrorCode.${ServerErrorCode.ContentTagTypeMissing}`]: '',
        [`ServerErrorCode.${ServerErrorCode.CurrentPasswordIncorrect}`]: '',
        [`ServerErrorCode.${ServerErrorCode.CurrentPasswordMissing}`]: '',
        [`ServerErrorCode.${ServerErrorCode.DataValidationFailed}`]: '',
        [`ServerErrorCode.${ServerErrorCode.DeviceUuidMissing}`]: '',
        [`ServerErrorCode.${ServerErrorCode.EmailInvalid}`]: '',
        [`ServerErrorCode.${ServerErrorCode.EmailMissing}`]: '',
        [`ServerErrorCode.${ServerErrorCode.ExceedsLimit}`]: '',
        [`ServerErrorCode.${ServerErrorCode.ExpertiseBidirectionalMappingError}`]: '',
        [`ServerErrorCode.${ServerErrorCode.ExpertiseTextIdDne}`]: '',
        [`ServerErrorCode.${ServerErrorCode.FailedToConnect}`]: '',
        [`ServerErrorCode.${ServerErrorCode.FailedToCreateAccount}`]: '',
        [`ServerErrorCode.${ServerErrorCode.FailedToSignin}`]: '',
        [`ServerErrorCode.${ServerErrorCode.FailedToUpdate}`]: '',
        [`ServerErrorCode.${ServerErrorCode.GroupLevelTooDeep}`]: '',
        [`ServerErrorCode.${ServerErrorCode.GroupNameMissing}`]: '',
        [`ServerErrorCode.${ServerErrorCode.GroupNameTaken}`]: '',
        [`ServerErrorCode.${ServerErrorCode.GroupNotActive}`]: '',
        [`ServerErrorCode.${ServerErrorCode.GroupRuleFailed}`]: '',
        [`ServerErrorCode.${ServerErrorCode.GroupSlugMissing}`]: '',
        [`ServerErrorCode.${ServerErrorCode.GroupSlugTaken}`]: '',
        [`ServerErrorCode.${ServerErrorCode.InvalidInput}`]: '',
        [`ServerErrorCode.${ServerErrorCode.InvalidPushNotificationToken}`]: '',
        [`ServerErrorCode.${ServerErrorCode.MatchingEngineNameMissing}`]: '',
        [`ServerErrorCode.${ServerErrorCode.MatchingEngineNameTaken}`]: '',
        [`ServerErrorCode.${ServerErrorCode.NoLiveWebsocketConnectionAvailable}`]: '',
        [`ServerErrorCode.${ServerErrorCode.NoNotificationMethodAvailable}`]: '',
        [`ServerErrorCode.${ServerErrorCode.NotAGroupMember}`]: '',
        [`ServerErrorCode.${ServerErrorCode.NotAllowed}`]: '',
        [`ServerErrorCode.${ServerErrorCode.NotFound}`]: '',
        [`ServerErrorCode.${ServerErrorCode.NotImplemented}`]: '',
        [`ServerErrorCode.${ServerErrorCode.NotInitialized}`]: '',
        [`ServerErrorCode.${ServerErrorCode.NotSupported}`]: '',
        [`ServerErrorCode.${ServerErrorCode.ParentGroupNotFound}`]: '',
        [`ServerErrorCode.${ServerErrorCode.PasswordMissing}`]: '',
        [`ServerErrorCode.${ServerErrorCode.PasswordNoMatch}`]: '',
        [`ServerErrorCode.${ServerErrorCode.PhoneNumberInvalid}`]: '',
        [`ServerErrorCode.${ServerErrorCode.PhoneNumberMissing}`]: '',
        [`ServerErrorCode.${ServerErrorCode.PhoneNumberNotSupported}`]: '',
        [`ServerErrorCode.${ServerErrorCode.ServiceNotAvailable}`]: '',
        [`ServerErrorCode.${ServerErrorCode.SystemError}`]: '',
        [`ServerErrorCode.${ServerErrorCode.Timeout}`]: '',
        [`ServerErrorCode.${ServerErrorCode.TooManyRequests}`]: '',
        [`ServerErrorCode.${ServerErrorCode.TrackingInvalidTrackId}`]: '',
        [`ServerErrorCode.${ServerErrorCode.TrainingCannotUpdateFields}`]: '',
        [`ServerErrorCode.${ServerErrorCode.TrainingContentPageCannotUpdateFields}`]: '',
        [`ServerErrorCode.${ServerErrorCode.TrainingContentPageMm2IdMissing}`]: '',
        [`ServerErrorCode.${ServerErrorCode.TrainingContentPageMm2IdTaken}`]: '',
        [`ServerErrorCode.${ServerErrorCode.TrainingMm2IdMissing}`]: '',
        [`ServerErrorCode.${ServerErrorCode.TrainingMm2IdTaken}`]: '',
        [`ServerErrorCode.${ServerErrorCode.TrainingSessionCannotUpdateFields}`]: '',
        [`ServerErrorCode.${ServerErrorCode.TrainingSessionMm2IdMissing}`]: '',
        [`ServerErrorCode.${ServerErrorCode.TrainingSessionMm2IdTaken}`]: '',
        [`ServerErrorCode.${ServerErrorCode.TrainingSessionProgressInvalid}`]: '',
        [`ServerErrorCode.${ServerErrorCode.TrainingSessionTrainingMissing}`]: '',
        [`ServerErrorCode.${ServerErrorCode.TrainingSessionUserIdMissing}`]: '',
        [`ServerErrorCode.${ServerErrorCode.Unauthorized}`]: '',
        [`ServerErrorCode.${ServerErrorCode.Unknown}`]: '',
        [`ServerErrorCode.${ServerErrorCode.UserAlreadyExists}`]: '',
        [`ServerErrorCode.${ServerErrorCode.UserDeviceNotFound}`]: '',
        [`ServerErrorCode.${ServerErrorCode.UserNotActive}`]: '',
        [`ServerErrorCode.${ServerErrorCode.UserNotFound}`]: '',
        [`MultiStepActionResult.${MultiStepActionResult.confirmTokenMismatch}`]: '',
        [`MultiStepActionResult.${MultiStepActionResult.dataValidationFailed}`]: '',
        [`MultiStepActionResult.${MultiStepActionResult.deviceNotFound}`]: '',
        [`MultiStepActionResult.${MultiStepActionResult.emailMismatch}`]: '',
        [`MultiStepActionResult.${MultiStepActionResult.emailNotVerified}`]: '',
        [`MultiStepActionResult.${MultiStepActionResult.error}`]: '',
        [`MultiStepActionResult.${MultiStepActionResult.expired}`]: '',
        [`MultiStepActionResult.${MultiStepActionResult.invalidEmail}`]: '',
        [`MultiStepActionResult.${MultiStepActionResult.missingEmail}`]: '',
        [`MultiStepActionResult.${MultiStepActionResult.missingPhoneNumber}`]: '',
        [`MultiStepActionResult.${MultiStepActionResult.notFound}`]: '',
        [`MultiStepActionResult.${MultiStepActionResult.ok}`]: '',
        [`MultiStepActionResult.${MultiStepActionResult.passed}`]: '',
        [`MultiStepActionResult.${MultiStepActionResult.passwordMismatch}`]: '',
        [`MultiStepActionResult.${MultiStepActionResult.passwordUpdated}`]: '',
        [`MultiStepActionResult.${MultiStepActionResult.phoneNumberInvalid}`]: '',
        [`MultiStepActionResult.${MultiStepActionResult.phoneNumberMismatch}`]: '',
        [`MultiStepActionResult.${MultiStepActionResult.phoneNumberNotVerified}`]: '',
        [`MultiStepActionResult.${MultiStepActionResult.systemError}`]: '',
        [`MultiStepActionResult.${MultiStepActionResult.unset}`]: '',
        [`MultiStepActionResult.${MultiStepActionResult.userFailedValidation}`]: '',
        [`MultiStepActionResult.${MultiStepActionResult.userNotFound}`]: '',
        [`MultiStepActionResult.${MultiStepActionResult.userNotSignedIn}`]: '',
    }
};
export const translate = (key, uiMessageType = UiMessageType.appErrorCode, language = UiLanguage.en, defaultKey = '', defaultMessage = '') => {
    let cKey = '';
    switch (uiMessageType) {
        case UiMessageType.appErrorCode:
            cKey = `AppErrorCode.${key}`;
            break;
        case UiMessageType.bgNodeClientUiErrorCode:
            cKey = `BgNodeClientUiErrorCode.${key}`;
            break;
        case UiMessageType.multiStepActionResult:
            cKey = `MultiStepActionResult.${key}`;
            break;
        case UiMessageType.serverErrorCode:
            cKey = `ServerErrorCode.${key}`;
            break;
    }
    if (uiMessages[language]?.[cKey]) {
        return uiMessages[language][cKey];
    }
    if (uiMessages[UiLanguage.en]?.[cKey]) {
        return uiMessages[UiLanguage.en][cKey];
    }
    switch (uiMessageType) {
        case UiMessageType.appErrorCode:
            cKey = `AppErrorCode.${defaultKey}`;
            break;
        case UiMessageType.bgNodeClientUiErrorCode:
            cKey = `BgNodeClientUiErrorCode.${defaultKey}`;
            break;
        case UiMessageType.multiStepActionResult:
            cKey = `MultiStepActionResult.${defaultKey}`;
            break;
        case UiMessageType.serverErrorCode:
            cKey = `ServerErrorCode.${defaultKey}`;
            break;
    }
    if (uiMessages[language]?.[cKey]) {
        return uiMessages[language][cKey];
    }
    if (uiMessages[UiLanguage.en]?.[cKey]) {
        return uiMessages[UiLanguage.en][cKey];
    }
    return defaultMessage || '';
};
export const getUiMessages = () => {
    return uiMessages;
};
export const setUiMessages = (newMessages) => {
    uiMessages = newMessages;
};
//# sourceMappingURL=uiMessages.js.map