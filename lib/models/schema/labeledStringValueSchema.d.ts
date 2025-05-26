export declare const LabeledStringValueSchema: {
    $schema: string;
    $id: string;
    title: string;
    version: number;
    primaryKey: string;
    type: string;
    properties: {
        label: {
            type: string;
        };
        value: {
            type: string;
        };
        tags: {
            type: string;
            items: {
                type: string;
            };
        };
    };
    required: string[];
};
