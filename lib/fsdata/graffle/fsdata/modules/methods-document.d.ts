import type * as $$Utilities from 'graffle/utilities-for-generated';
import type * as $$Schema from './schema.js';
import type * as $$SelectionSets from './selection-sets.js';
export interface Document<$Context> {
    <$Document>(document: $$Utilities.ExactNonEmpty<$Document, $$SelectionSets.$Document<$Context['scalars']>>): $$Utilities.DocumentBuilder.DocumentRunner<$Context, $$Schema.Schema, $Document>;
}
export interface BuilderMethodsDocumentFn extends $$Utilities.TypeFunction {
    return: Document<this['params']>;
}
