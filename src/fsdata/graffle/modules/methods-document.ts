import type * as $$Utilities from 'graffle/utilities-for-generated';

import type * as $$Schema from './schema.js';
import type * as $$SelectionSets from './selection-sets.js';

export interface Document<$Context> {
  <$Document>(
    document: $$Utilities.ExactNonEmpty<
      $Document,
      $$SelectionSets.$Document<
        // @ts-expect-error Context constraint missing to avoid TS compare depth limit.
        $Context['scalars']
      >
    >,
  ): $$Utilities.DocumentBuilder.DocumentRunner<
    $Context,
    $$Schema.Schema,
    // Satisfying the constraint on the DocumentRunner type.
    $Document
  >;
}

export interface BuilderMethodsDocumentFn extends $$Utilities.TypeFunction {
  return: Document<this['params']>;
}
