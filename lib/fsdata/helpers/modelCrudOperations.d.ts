import { ModelType } from '../../enums.js';
export interface ModelCrudOperationDef {
    createField?: string;
    delete?: {
        field: string;
        returnsServiceRequest?: boolean;
    };
    findByIdField?: string;
    updateField?: string;
    selections: any;
    skipVars?: boolean;
    keyFieldName?: string;
}
export declare const modelCrudOperations: Partial<Record<ModelType, ModelCrudOperationDef>>;
