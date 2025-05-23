/**
 * Can be used like 'keyof'
 * but only represents the string keys, not the Symbols or numbers.
 * @link https://stackoverflow.com/a/51808262/3443137
 */
export type StringKeys<X> = Extract<keyof X, string>;

/**
 * The paths as strings-type of nested object
 * @link https://stackoverflow.com/a/58436959/3443137
 */
type Join<K, P> = K extends string | number ?
  P extends string | number ?
    `${K}${'' extends P ? '' : '.'}${P}`
    : never : never;

export type Paths<T, D extends number = 10> = [D] extends [never] ? never : T extends object ?
  { [K in keyof T]-?: K extends string | number ?
    `${K}` | (Paths<T[K], Prev[D]> extends infer R ? Join<K, R> : never)
    : never
  }[keyof T] : '';

// export type Leaves<T, D extends number = 10> = [D] extends [never] ? never : T extends object ?
//   { [K in keyof T]-?: Join<K, Leaves<T[K], Prev[D]>> }[keyof T] : '';
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20, ...0[]];

export type PropertyType<Type, Property extends string> = string extends Property
  ? unknown
  : Property extends keyof Type
    ? Type[Property]
    : Property extends `${number}`
      ? Type extends ReadonlyArray<infer ArrayType>
        ? ArrayType
        : unknown
      : Property extends `${infer Key}.${infer Rest}`
        ? Key extends `${number}`
          ? Type extends ReadonlyArray<infer ArrayType>
            ? PropertyType<ArrayType, Rest>
            : unknown
          : Key extends keyof Type
            ? Type[Key] extends Map<string, infer MapType>
              ? MapType
              : PropertyType<Type[Key], Rest>
            : unknown
        : unknown;


export type MangoQueryRegexOptions = 'i' | 'g' | 'm' | 'gi' | 'ig' | 'igm' | string;

/*
 * The MongoDB query library is huge and we do not need all the operators.
 * If you add an operator here, make sure that you properly add a test in
 * the file /test/unit/rx-storage-query-correctness.test.ts
 *
 * @link https://github.com/kofrasa/mingo#es6
 */
export interface MangoQueryOperators<PathValueType> {
  $eq?: PathValueType;
  $gt?: PathValueType;
  $gte?: PathValueType;
  $lt?: PathValueType;
  $lte?: PathValueType;
  $ne?: PathValueType;
  $in?: PathValueType[];
  $nin?: PathValueType[];
  $regex?: string;
  $options?: MangoQueryRegexOptions;
  $exists?: boolean;
  $type?: 'null' | 'boolean' | 'number' | 'string' | 'array' | 'object';
  $mod?: number;
  $not?: PathValueType;
  $size?: number;
  $elemMatch?: MangoQueryTypes<PathValueType>;
}

export type MangoQueryTypes<DocType> = Partial<{
  [Property in Paths<DocType>]: MangoQueryOperators<any> | PropertyType<DocType, Property>;
}> & {
  $and?: MangoQueryTypes<DocType>[];
  $or?: MangoQueryTypes<DocType>[];
  $nor?: MangoQueryTypes<DocType>[];
};

export type MangoQuerySortDirection = 'asc' | 'desc';
export type MangoQuerySortPart<RxDocType = any> = {
  [k in StringKeys<RxDocType> | string]: MangoQuerySortDirection;
};
