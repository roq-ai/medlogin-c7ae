/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model appointment
 *
 */
export type appointment = $Result.DefaultSelection<Prisma.$appointmentPayload>;
/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model doctor
 *
 */
export type doctor = $Result.DefaultSelection<Prisma.$doctorPayload>;
/**
 * Model nurse
 *
 */
export type nurse = $Result.DefaultSelection<Prisma.$nursePayload>;
/**
 * Model staff_member
 *
 */
export type staff_member = $Result.DefaultSelection<Prisma.$staff_memberPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Appointments
 * const appointments = await prisma.appointment.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Appointments
   * const appointments = await prisma.appointment.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **appointment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Appointments
   * const appointments = await prisma.appointment.findMany()
   * ```
   */
  get appointment(): Prisma.appointmentDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.doctor`: Exposes CRUD operations for the **doctor** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Doctors
   * const doctors = await prisma.doctor.findMany()
   * ```
   */
  get doctor(): Prisma.doctorDelegate<ExtArgs>;

  /**
   * `prisma.nurse`: Exposes CRUD operations for the **nurse** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Nurses
   * const nurses = await prisma.nurse.findMany()
   * ```
   */
  get nurse(): Prisma.nurseDelegate<ExtArgs>;

  /**
   * `prisma.staff_member`: Exposes CRUD operations for the **staff_member** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Staff_members
   * const staff_members = await prisma.staff_member.findMany()
   * ```
   */
  get staff_member(): Prisma.staff_memberDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    appointment: 'appointment';
    company: 'company';
    doctor: 'doctor';
    nurse: 'nurse';
    staff_member: 'staff_member';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'appointment' | 'company' | 'doctor' | 'nurse' | 'staff_member' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      appointment: {
        payload: Prisma.$appointmentPayload<ExtArgs>;
        fields: Prisma.appointmentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.appointmentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.appointmentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          findFirst: {
            args: Prisma.appointmentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.appointmentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          findMany: {
            args: Prisma.appointmentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>[];
          };
          create: {
            args: Prisma.appointmentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          createMany: {
            args: Prisma.appointmentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.appointmentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          update: {
            args: Prisma.appointmentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          deleteMany: {
            args: Prisma.appointmentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.appointmentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.appointmentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAppointment>;
          };
          groupBy: {
            args: Prisma.appointmentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AppointmentGroupByOutputType>[];
          };
          count: {
            args: Prisma.appointmentCountArgs<ExtArgs>;
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number;
          };
        };
      };
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      doctor: {
        payload: Prisma.$doctorPayload<ExtArgs>;
        fields: Prisma.doctorFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.doctorFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$doctorPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.doctorFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>;
          };
          findFirst: {
            args: Prisma.doctorFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$doctorPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.doctorFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>;
          };
          findMany: {
            args: Prisma.doctorFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>[];
          };
          create: {
            args: Prisma.doctorCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>;
          };
          createMany: {
            args: Prisma.doctorCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.doctorDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>;
          };
          update: {
            args: Prisma.doctorUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>;
          };
          deleteMany: {
            args: Prisma.doctorDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.doctorUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.doctorUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>;
          };
          aggregate: {
            args: Prisma.DoctorAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateDoctor>;
          };
          groupBy: {
            args: Prisma.doctorGroupByArgs<ExtArgs>;
            result: $Utils.Optional<DoctorGroupByOutputType>[];
          };
          count: {
            args: Prisma.doctorCountArgs<ExtArgs>;
            result: $Utils.Optional<DoctorCountAggregateOutputType> | number;
          };
        };
      };
      nurse: {
        payload: Prisma.$nursePayload<ExtArgs>;
        fields: Prisma.nurseFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.nurseFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$nursePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.nurseFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$nursePayload>;
          };
          findFirst: {
            args: Prisma.nurseFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$nursePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.nurseFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$nursePayload>;
          };
          findMany: {
            args: Prisma.nurseFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$nursePayload>[];
          };
          create: {
            args: Prisma.nurseCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$nursePayload>;
          };
          createMany: {
            args: Prisma.nurseCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.nurseDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$nursePayload>;
          };
          update: {
            args: Prisma.nurseUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$nursePayload>;
          };
          deleteMany: {
            args: Prisma.nurseDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.nurseUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.nurseUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$nursePayload>;
          };
          aggregate: {
            args: Prisma.NurseAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateNurse>;
          };
          groupBy: {
            args: Prisma.nurseGroupByArgs<ExtArgs>;
            result: $Utils.Optional<NurseGroupByOutputType>[];
          };
          count: {
            args: Prisma.nurseCountArgs<ExtArgs>;
            result: $Utils.Optional<NurseCountAggregateOutputType> | number;
          };
        };
      };
      staff_member: {
        payload: Prisma.$staff_memberPayload<ExtArgs>;
        fields: Prisma.staff_memberFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.staff_memberFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staff_memberPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.staff_memberFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staff_memberPayload>;
          };
          findFirst: {
            args: Prisma.staff_memberFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staff_memberPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.staff_memberFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staff_memberPayload>;
          };
          findMany: {
            args: Prisma.staff_memberFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staff_memberPayload>[];
          };
          create: {
            args: Prisma.staff_memberCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staff_memberPayload>;
          };
          createMany: {
            args: Prisma.staff_memberCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.staff_memberDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staff_memberPayload>;
          };
          update: {
            args: Prisma.staff_memberUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staff_memberPayload>;
          };
          deleteMany: {
            args: Prisma.staff_memberDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.staff_memberUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.staff_memberUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staff_memberPayload>;
          };
          aggregate: {
            args: Prisma.Staff_memberAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateStaff_member>;
          };
          groupBy: {
            args: Prisma.staff_memberGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Staff_memberGroupByOutputType>[];
          };
          count: {
            args: Prisma.staff_memberCountArgs<ExtArgs>;
            result: $Utils.Optional<Staff_memberCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type DoctorCountOutputType
   */

  export type DoctorCountOutputType = {
    appointment: number;
  };

  export type DoctorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | DoctorCountOutputTypeCountAppointmentArgs;
  };

  // Custom InputTypes

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorCountOutputType
     */
    select?: DoctorCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountAppointmentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: appointmentWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    appointment: number;
    company: number;
    doctor: number;
    nurse: number;
    staff_member: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | UserCountOutputTypeCountAppointmentArgs;
    company?: boolean | UserCountOutputTypeCountCompanyArgs;
    doctor?: boolean | UserCountOutputTypeCountDoctorArgs;
    nurse?: boolean | UserCountOutputTypeCountNurseArgs;
    staff_member?: boolean | UserCountOutputTypeCountStaff_memberArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppointmentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: appointmentWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: companyWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDoctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: doctorWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNurseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: nurseWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStaff_memberArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: staff_memberWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null;
    _min: AppointmentMinAggregateOutputType | null;
    _max: AppointmentMaxAggregateOutputType | null;
  };

  export type AppointmentMinAggregateOutputType = {
    id: string | null;
    appointment_date: Date | null;
    appointment_time: string | null;
    doctor_id: string | null;
    patient_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AppointmentMaxAggregateOutputType = {
    id: string | null;
    appointment_date: Date | null;
    appointment_time: string | null;
    doctor_id: string | null;
    patient_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AppointmentCountAggregateOutputType = {
    id: number;
    appointment_date: number;
    appointment_time: number;
    doctor_id: number;
    patient_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type AppointmentMinAggregateInputType = {
    id?: true;
    appointment_date?: true;
    appointment_time?: true;
    doctor_id?: true;
    patient_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AppointmentMaxAggregateInputType = {
    id?: true;
    appointment_date?: true;
    appointment_time?: true;
    doctor_id?: true;
    patient_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AppointmentCountAggregateInputType = {
    id?: true;
    appointment_date?: true;
    appointment_time?: true;
    doctor_id?: true;
    patient_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appointment to aggregate.
     */
    where?: appointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: appointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` appointments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned appointments
     **/
    _count?: true | AppointmentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AppointmentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AppointmentMaxAggregateInputType;
  };

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
    [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>;
  };

  export type appointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appointmentWhereInput;
    orderBy?: appointmentOrderByWithAggregationInput | appointmentOrderByWithAggregationInput[];
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum;
    having?: appointmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AppointmentCountAggregateInputType | true;
    _min?: AppointmentMinAggregateInputType;
    _max?: AppointmentMaxAggregateInputType;
  };

  export type AppointmentGroupByOutputType = {
    id: string;
    appointment_date: Date;
    appointment_time: string;
    doctor_id: string;
    patient_id: string;
    created_at: Date;
    updated_at: Date;
    _count: AppointmentCountAggregateOutputType | null;
    _min: AppointmentMinAggregateOutputType | null;
    _max: AppointmentMaxAggregateOutputType | null;
  };

  type GetAppointmentGroupByPayload<T extends appointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof AppointmentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
          : GetScalarType<T[P], AppointmentGroupByOutputType[P]>;
      }
    >
  >;

  export type appointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        appointment_date?: boolean;
        appointment_time?: boolean;
        doctor_id?: boolean;
        patient_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        doctor?: boolean | doctorDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['appointment']
    >;

  export type appointmentSelectScalar = {
    id?: boolean;
    appointment_date?: boolean;
    appointment_time?: boolean;
    doctor_id?: boolean;
    patient_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type appointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | doctorDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $appointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'appointment';
    objects: {
      doctor: Prisma.$doctorPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        appointment_date: Date;
        appointment_time: string;
        doctor_id: string;
        patient_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['appointment']
    >;
    composites: {};
  };

  type appointmentGetPayload<S extends boolean | null | undefined | appointmentDefaultArgs> = $Result.GetResult<
    Prisma.$appointmentPayload,
    S
  >;

  type appointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    appointmentFindManyArgs,
    'select' | 'include'
  > & {
    select?: AppointmentCountAggregateInputType | true;
  };

  export interface appointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['appointment']; meta: { name: 'appointment' } };
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {appointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends appointmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentFindUniqueArgs<ExtArgs>>,
    ): Prisma__appointmentClient<
      $Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Appointment that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {appointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends appointmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__appointmentClient<
      $Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends appointmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentFindFirstArgs<ExtArgs>>,
    ): Prisma__appointmentClient<
      $Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends appointmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__appointmentClient<
      $Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     *
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends appointmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Appointment.
     * @param {appointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     *
     **/
    create<T extends appointmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentCreateArgs<ExtArgs>>,
    ): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Appointments.
     *     @param {appointmentCreateManyArgs} args - Arguments to create many Appointments.
     *     @example
     *     // Create many Appointments
     *     const appointment = await prisma.appointment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends appointmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Appointment.
     * @param {appointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     *
     **/
    delete<T extends appointmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentDeleteArgs<ExtArgs>>,
    ): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Appointment.
     * @param {appointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends appointmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentUpdateArgs<ExtArgs>>,
    ): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Appointments.
     * @param {appointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends appointmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends appointmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Appointment.
     * @param {appointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     **/
    upsert<T extends appointmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentUpsertArgs<ExtArgs>>,
    ): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
     **/
    count<T extends appointmentCountArgs>(
      args?: Subset<T, appointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AppointmentAggregateArgs>(
      args: Subset<T, AppointmentAggregateArgs>,
    ): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>;

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends appointmentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: appointmentGroupByArgs['orderBy'] }
        : { orderBy?: appointmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, appointmentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the appointment model
     */
    readonly fields: appointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__appointmentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    doctor<T extends doctorDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, doctorDefaultArgs<ExtArgs>>,
    ): Prisma__doctorClient<
      $Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the appointment model
   */
  interface appointmentFieldRefs {
    readonly id: FieldRef<'appointment', 'String'>;
    readonly appointment_date: FieldRef<'appointment', 'DateTime'>;
    readonly appointment_time: FieldRef<'appointment', 'String'>;
    readonly doctor_id: FieldRef<'appointment', 'String'>;
    readonly patient_id: FieldRef<'appointment', 'String'>;
    readonly created_at: FieldRef<'appointment', 'DateTime'>;
    readonly updated_at: FieldRef<'appointment', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * appointment findUnique
   */
  export type appointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointment to fetch.
     */
    where: appointmentWhereUniqueInput;
  };

  /**
   * appointment findUniqueOrThrow
   */
  export type appointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointment to fetch.
     */
    where: appointmentWhereUniqueInput;
  };

  /**
   * appointment findFirst
   */
  export type appointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointment to fetch.
     */
    where?: appointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for appointments.
     */
    cursor?: appointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` appointments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * appointment findFirstOrThrow
   */
  export type appointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointment to fetch.
     */
    where?: appointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for appointments.
     */
    cursor?: appointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` appointments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * appointment findMany
   */
  export type appointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointments to fetch.
     */
    where?: appointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing appointments.
     */
    cursor?: appointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` appointments.
     */
    skip?: number;
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * appointment create
   */
  export type appointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * The data needed to create a appointment.
     */
    data: XOR<appointmentCreateInput, appointmentUncheckedCreateInput>;
  };

  /**
   * appointment createMany
   */
  export type appointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many appointments.
     */
    data: appointmentCreateManyInput | appointmentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * appointment update
   */
  export type appointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * The data needed to update a appointment.
     */
    data: XOR<appointmentUpdateInput, appointmentUncheckedUpdateInput>;
    /**
     * Choose, which appointment to update.
     */
    where: appointmentWhereUniqueInput;
  };

  /**
   * appointment updateMany
   */
  export type appointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update appointments.
     */
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyInput>;
    /**
     * Filter which appointments to update
     */
    where?: appointmentWhereInput;
  };

  /**
   * appointment upsert
   */
  export type appointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * The filter to search for the appointment to update in case it exists.
     */
    where: appointmentWhereUniqueInput;
    /**
     * In case the appointment found by the `where` argument doesn't exist, create a new appointment with this data.
     */
    create: XOR<appointmentCreateInput, appointmentUncheckedCreateInput>;
    /**
     * In case the appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<appointmentUpdateInput, appointmentUncheckedUpdateInput>;
  };

  /**
   * appointment delete
   */
  export type appointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter which appointment to delete.
     */
    where: appointmentWhereUniqueInput;
  };

  /**
   * appointment deleteMany
   */
  export type appointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appointments to delete
     */
    where?: appointmentWhereInput;
  };

  /**
   * appointment without action
   */
  export type appointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
  };

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly user_id: FieldRef<'company', 'String'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model doctor
   */

  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null;
    _avg: DoctorAvgAggregateOutputType | null;
    _sum: DoctorSumAggregateOutputType | null;
    _min: DoctorMinAggregateOutputType | null;
    _max: DoctorMaxAggregateOutputType | null;
  };

  export type DoctorAvgAggregateOutputType = {
    years_of_experience: number | null;
  };

  export type DoctorSumAggregateOutputType = {
    years_of_experience: number | null;
  };

  export type DoctorMinAggregateOutputType = {
    id: string | null;
    specialization: string | null;
    years_of_experience: number | null;
    working_days: string | null;
    working_hours: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type DoctorMaxAggregateOutputType = {
    id: string | null;
    specialization: string | null;
    years_of_experience: number | null;
    working_days: string | null;
    working_hours: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type DoctorCountAggregateOutputType = {
    id: number;
    specialization: number;
    years_of_experience: number;
    working_days: number;
    working_hours: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type DoctorAvgAggregateInputType = {
    years_of_experience?: true;
  };

  export type DoctorSumAggregateInputType = {
    years_of_experience?: true;
  };

  export type DoctorMinAggregateInputType = {
    id?: true;
    specialization?: true;
    years_of_experience?: true;
    working_days?: true;
    working_hours?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type DoctorMaxAggregateInputType = {
    id?: true;
    specialization?: true;
    years_of_experience?: true;
    working_days?: true;
    working_hours?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type DoctorCountAggregateInputType = {
    id?: true;
    specialization?: true;
    years_of_experience?: true;
    working_days?: true;
    working_hours?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type DoctorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which doctor to aggregate.
     */
    where?: doctorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: doctorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` doctors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned doctors
     **/
    _count?: true | DoctorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: DoctorAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: DoctorSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: DoctorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: DoctorMaxAggregateInputType;
  };

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
    [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>;
  };

  export type doctorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: doctorWhereInput;
    orderBy?: doctorOrderByWithAggregationInput | doctorOrderByWithAggregationInput[];
    by: DoctorScalarFieldEnum[] | DoctorScalarFieldEnum;
    having?: doctorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DoctorCountAggregateInputType | true;
    _avg?: DoctorAvgAggregateInputType;
    _sum?: DoctorSumAggregateInputType;
    _min?: DoctorMinAggregateInputType;
    _max?: DoctorMaxAggregateInputType;
  };

  export type DoctorGroupByOutputType = {
    id: string;
    specialization: string;
    years_of_experience: number;
    working_days: string;
    working_hours: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: DoctorCountAggregateOutputType | null;
    _avg: DoctorAvgAggregateOutputType | null;
    _sum: DoctorSumAggregateOutputType | null;
    _min: DoctorMinAggregateOutputType | null;
    _max: DoctorMaxAggregateOutputType | null;
  };

  type GetDoctorGroupByPayload<T extends doctorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorGroupByOutputType, T['by']> & {
        [P in keyof T & keyof DoctorGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
          : GetScalarType<T[P], DoctorGroupByOutputType[P]>;
      }
    >
  >;

  export type doctorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      specialization?: boolean;
      years_of_experience?: boolean;
      working_days?: boolean;
      working_hours?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      appointment?: boolean | doctor$appointmentArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['doctor']
  >;

  export type doctorSelectScalar = {
    id?: boolean;
    specialization?: boolean;
    years_of_experience?: boolean;
    working_days?: boolean;
    working_hours?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type doctorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | doctor$appointmentArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $doctorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'doctor';
    objects: {
      appointment: Prisma.$appointmentPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        specialization: string;
        years_of_experience: number;
        working_days: string;
        working_hours: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['doctor']
    >;
    composites: {};
  };

  type doctorGetPayload<S extends boolean | null | undefined | doctorDefaultArgs> = $Result.GetResult<
    Prisma.$doctorPayload,
    S
  >;

  type doctorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    doctorFindManyArgs,
    'select' | 'include'
  > & {
    select?: DoctorCountAggregateInputType | true;
  };

  export interface doctorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['doctor']; meta: { name: 'doctor' } };
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {doctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends doctorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, doctorFindUniqueArgs<ExtArgs>>,
    ): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Doctor that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {doctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends doctorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, doctorFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends doctorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, doctorFindFirstArgs<ExtArgs>>,
    ): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Doctor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends doctorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, doctorFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     *
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const doctorWithIdOnly = await prisma.doctor.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends doctorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, doctorFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Doctor.
     * @param {doctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     *
     **/
    create<T extends doctorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, doctorCreateArgs<ExtArgs>>,
    ): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Doctors.
     *     @param {doctorCreateManyArgs} args - Arguments to create many Doctors.
     *     @example
     *     // Create many Doctors
     *     const doctor = await prisma.doctor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends doctorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, doctorCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Doctor.
     * @param {doctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     *
     **/
    delete<T extends doctorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, doctorDeleteArgs<ExtArgs>>,
    ): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Doctor.
     * @param {doctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends doctorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, doctorUpdateArgs<ExtArgs>>,
    ): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Doctors.
     * @param {doctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends doctorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, doctorDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends doctorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, doctorUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Doctor.
     * @param {doctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
     **/
    upsert<T extends doctorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, doctorUpsertArgs<ExtArgs>>,
    ): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
     **/
    count<T extends doctorCountArgs>(
      args?: Subset<T, doctorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends DoctorAggregateArgs>(
      args: Subset<T, DoctorAggregateArgs>,
    ): Prisma.PrismaPromise<GetDoctorAggregateType<T>>;

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends doctorGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: doctorGroupByArgs['orderBy'] }
        : { orderBy?: doctorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, doctorGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the doctor model
     */
    readonly fields: doctorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__doctorClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    appointment<T extends doctor$appointmentArgs<ExtArgs> = {}>(
      args?: Subset<T, doctor$appointmentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the doctor model
   */
  interface doctorFieldRefs {
    readonly id: FieldRef<'doctor', 'String'>;
    readonly specialization: FieldRef<'doctor', 'String'>;
    readonly years_of_experience: FieldRef<'doctor', 'Int'>;
    readonly working_days: FieldRef<'doctor', 'String'>;
    readonly working_hours: FieldRef<'doctor', 'String'>;
    readonly user_id: FieldRef<'doctor', 'String'>;
    readonly created_at: FieldRef<'doctor', 'DateTime'>;
    readonly updated_at: FieldRef<'doctor', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * doctor findUnique
   */
  export type doctorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doctorInclude<ExtArgs> | null;
    /**
     * Filter, which doctor to fetch.
     */
    where: doctorWhereUniqueInput;
  };

  /**
   * doctor findUniqueOrThrow
   */
  export type doctorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doctorInclude<ExtArgs> | null;
    /**
     * Filter, which doctor to fetch.
     */
    where: doctorWhereUniqueInput;
  };

  /**
   * doctor findFirst
   */
  export type doctorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doctorInclude<ExtArgs> | null;
    /**
     * Filter, which doctor to fetch.
     */
    where?: doctorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for doctors.
     */
    cursor?: doctorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` doctors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[];
  };

  /**
   * doctor findFirstOrThrow
   */
  export type doctorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doctorInclude<ExtArgs> | null;
    /**
     * Filter, which doctor to fetch.
     */
    where?: doctorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for doctors.
     */
    cursor?: doctorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` doctors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[];
  };

  /**
   * doctor findMany
   */
  export type doctorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doctorInclude<ExtArgs> | null;
    /**
     * Filter, which doctors to fetch.
     */
    where?: doctorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing doctors.
     */
    cursor?: doctorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` doctors.
     */
    skip?: number;
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[];
  };

  /**
   * doctor create
   */
  export type doctorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doctorInclude<ExtArgs> | null;
    /**
     * The data needed to create a doctor.
     */
    data: XOR<doctorCreateInput, doctorUncheckedCreateInput>;
  };

  /**
   * doctor createMany
   */
  export type doctorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many doctors.
     */
    data: doctorCreateManyInput | doctorCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * doctor update
   */
  export type doctorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doctorInclude<ExtArgs> | null;
    /**
     * The data needed to update a doctor.
     */
    data: XOR<doctorUpdateInput, doctorUncheckedUpdateInput>;
    /**
     * Choose, which doctor to update.
     */
    where: doctorWhereUniqueInput;
  };

  /**
   * doctor updateMany
   */
  export type doctorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update doctors.
     */
    data: XOR<doctorUpdateManyMutationInput, doctorUncheckedUpdateManyInput>;
    /**
     * Filter which doctors to update
     */
    where?: doctorWhereInput;
  };

  /**
   * doctor upsert
   */
  export type doctorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doctorInclude<ExtArgs> | null;
    /**
     * The filter to search for the doctor to update in case it exists.
     */
    where: doctorWhereUniqueInput;
    /**
     * In case the doctor found by the `where` argument doesn't exist, create a new doctor with this data.
     */
    create: XOR<doctorCreateInput, doctorUncheckedCreateInput>;
    /**
     * In case the doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<doctorUpdateInput, doctorUncheckedUpdateInput>;
  };

  /**
   * doctor delete
   */
  export type doctorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doctorInclude<ExtArgs> | null;
    /**
     * Filter which doctor to delete.
     */
    where: doctorWhereUniqueInput;
  };

  /**
   * doctor deleteMany
   */
  export type doctorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which doctors to delete
     */
    where?: doctorWhereInput;
  };

  /**
   * doctor.appointment
   */
  export type doctor$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    where?: appointmentWhereInput;
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    cursor?: appointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * doctor without action
   */
  export type doctorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doctorInclude<ExtArgs> | null;
  };

  /**
   * Model nurse
   */

  export type AggregateNurse = {
    _count: NurseCountAggregateOutputType | null;
    _avg: NurseAvgAggregateOutputType | null;
    _sum: NurseSumAggregateOutputType | null;
    _min: NurseMinAggregateOutputType | null;
    _max: NurseMaxAggregateOutputType | null;
  };

  export type NurseAvgAggregateOutputType = {
    years_of_experience: number | null;
  };

  export type NurseSumAggregateOutputType = {
    years_of_experience: number | null;
  };

  export type NurseMinAggregateOutputType = {
    id: string | null;
    years_of_experience: number | null;
    shift: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type NurseMaxAggregateOutputType = {
    id: string | null;
    years_of_experience: number | null;
    shift: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type NurseCountAggregateOutputType = {
    id: number;
    years_of_experience: number;
    shift: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type NurseAvgAggregateInputType = {
    years_of_experience?: true;
  };

  export type NurseSumAggregateInputType = {
    years_of_experience?: true;
  };

  export type NurseMinAggregateInputType = {
    id?: true;
    years_of_experience?: true;
    shift?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type NurseMaxAggregateInputType = {
    id?: true;
    years_of_experience?: true;
    shift?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type NurseCountAggregateInputType = {
    id?: true;
    years_of_experience?: true;
    shift?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type NurseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nurse to aggregate.
     */
    where?: nurseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of nurses to fetch.
     */
    orderBy?: nurseOrderByWithRelationInput | nurseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: nurseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` nurses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` nurses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned nurses
     **/
    _count?: true | NurseCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: NurseAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: NurseSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: NurseMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: NurseMaxAggregateInputType;
  };

  export type GetNurseAggregateType<T extends NurseAggregateArgs> = {
    [P in keyof T & keyof AggregateNurse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNurse[P]>
      : GetScalarType<T[P], AggregateNurse[P]>;
  };

  export type nurseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: nurseWhereInput;
    orderBy?: nurseOrderByWithAggregationInput | nurseOrderByWithAggregationInput[];
    by: NurseScalarFieldEnum[] | NurseScalarFieldEnum;
    having?: nurseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NurseCountAggregateInputType | true;
    _avg?: NurseAvgAggregateInputType;
    _sum?: NurseSumAggregateInputType;
    _min?: NurseMinAggregateInputType;
    _max?: NurseMaxAggregateInputType;
  };

  export type NurseGroupByOutputType = {
    id: string;
    years_of_experience: number;
    shift: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: NurseCountAggregateOutputType | null;
    _avg: NurseAvgAggregateOutputType | null;
    _sum: NurseSumAggregateOutputType | null;
    _min: NurseMinAggregateOutputType | null;
    _max: NurseMaxAggregateOutputType | null;
  };

  type GetNurseGroupByPayload<T extends nurseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NurseGroupByOutputType, T['by']> & {
        [P in keyof T & keyof NurseGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], NurseGroupByOutputType[P]>
          : GetScalarType<T[P], NurseGroupByOutputType[P]>;
      }
    >
  >;

  export type nurseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      years_of_experience?: boolean;
      shift?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['nurse']
  >;

  export type nurseSelectScalar = {
    id?: boolean;
    years_of_experience?: boolean;
    shift?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type nurseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $nursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'nurse';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        years_of_experience: number;
        shift: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['nurse']
    >;
    composites: {};
  };

  type nurseGetPayload<S extends boolean | null | undefined | nurseDefaultArgs> = $Result.GetResult<
    Prisma.$nursePayload,
    S
  >;

  type nurseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    nurseFindManyArgs,
    'select' | 'include'
  > & {
    select?: NurseCountAggregateInputType | true;
  };

  export interface nurseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['nurse']; meta: { name: 'nurse' } };
    /**
     * Find zero or one Nurse that matches the filter.
     * @param {nurseFindUniqueArgs} args - Arguments to find a Nurse
     * @example
     * // Get one Nurse
     * const nurse = await prisma.nurse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends nurseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, nurseFindUniqueArgs<ExtArgs>>,
    ): Prisma__nurseClient<$Result.GetResult<Prisma.$nursePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Nurse that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {nurseFindUniqueOrThrowArgs} args - Arguments to find a Nurse
     * @example
     * // Get one Nurse
     * const nurse = await prisma.nurse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends nurseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, nurseFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__nurseClient<$Result.GetResult<Prisma.$nursePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Nurse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nurseFindFirstArgs} args - Arguments to find a Nurse
     * @example
     * // Get one Nurse
     * const nurse = await prisma.nurse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends nurseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, nurseFindFirstArgs<ExtArgs>>,
    ): Prisma__nurseClient<$Result.GetResult<Prisma.$nursePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Nurse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nurseFindFirstOrThrowArgs} args - Arguments to find a Nurse
     * @example
     * // Get one Nurse
     * const nurse = await prisma.nurse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends nurseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, nurseFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__nurseClient<$Result.GetResult<Prisma.$nursePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Nurses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nurseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nurses
     * const nurses = await prisma.nurse.findMany()
     *
     * // Get first 10 Nurses
     * const nurses = await prisma.nurse.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const nurseWithIdOnly = await prisma.nurse.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends nurseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, nurseFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nursePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Nurse.
     * @param {nurseCreateArgs} args - Arguments to create a Nurse.
     * @example
     * // Create one Nurse
     * const Nurse = await prisma.nurse.create({
     *   data: {
     *     // ... data to create a Nurse
     *   }
     * })
     *
     **/
    create<T extends nurseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, nurseCreateArgs<ExtArgs>>,
    ): Prisma__nurseClient<$Result.GetResult<Prisma.$nursePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Nurses.
     *     @param {nurseCreateManyArgs} args - Arguments to create many Nurses.
     *     @example
     *     // Create many Nurses
     *     const nurse = await prisma.nurse.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends nurseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, nurseCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Nurse.
     * @param {nurseDeleteArgs} args - Arguments to delete one Nurse.
     * @example
     * // Delete one Nurse
     * const Nurse = await prisma.nurse.delete({
     *   where: {
     *     // ... filter to delete one Nurse
     *   }
     * })
     *
     **/
    delete<T extends nurseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, nurseDeleteArgs<ExtArgs>>,
    ): Prisma__nurseClient<$Result.GetResult<Prisma.$nursePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Nurse.
     * @param {nurseUpdateArgs} args - Arguments to update one Nurse.
     * @example
     * // Update one Nurse
     * const nurse = await prisma.nurse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends nurseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, nurseUpdateArgs<ExtArgs>>,
    ): Prisma__nurseClient<$Result.GetResult<Prisma.$nursePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Nurses.
     * @param {nurseDeleteManyArgs} args - Arguments to filter Nurses to delete.
     * @example
     * // Delete a few Nurses
     * const { count } = await prisma.nurse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends nurseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, nurseDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Nurses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nurseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nurses
     * const nurse = await prisma.nurse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends nurseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, nurseUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Nurse.
     * @param {nurseUpsertArgs} args - Arguments to update or create a Nurse.
     * @example
     * // Update or create a Nurse
     * const nurse = await prisma.nurse.upsert({
     *   create: {
     *     // ... data to create a Nurse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nurse we want to update
     *   }
     * })
     **/
    upsert<T extends nurseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, nurseUpsertArgs<ExtArgs>>,
    ): Prisma__nurseClient<$Result.GetResult<Prisma.$nursePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Nurses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nurseCountArgs} args - Arguments to filter Nurses to count.
     * @example
     * // Count the number of Nurses
     * const count = await prisma.nurse.count({
     *   where: {
     *     // ... the filter for the Nurses we want to count
     *   }
     * })
     **/
    count<T extends nurseCountArgs>(
      args?: Subset<T, nurseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NurseCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Nurse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends NurseAggregateArgs>(
      args: Subset<T, NurseAggregateArgs>,
    ): Prisma.PrismaPromise<GetNurseAggregateType<T>>;

    /**
     * Group by Nurse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nurseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends nurseGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: nurseGroupByArgs['orderBy'] }
        : { orderBy?: nurseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, nurseGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetNurseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the nurse model
     */
    readonly fields: nurseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for nurse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__nurseClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the nurse model
   */
  interface nurseFieldRefs {
    readonly id: FieldRef<'nurse', 'String'>;
    readonly years_of_experience: FieldRef<'nurse', 'Int'>;
    readonly shift: FieldRef<'nurse', 'String'>;
    readonly user_id: FieldRef<'nurse', 'String'>;
    readonly created_at: FieldRef<'nurse', 'DateTime'>;
    readonly updated_at: FieldRef<'nurse', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * nurse findUnique
   */
  export type nurseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nurse
     */
    select?: nurseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: nurseInclude<ExtArgs> | null;
    /**
     * Filter, which nurse to fetch.
     */
    where: nurseWhereUniqueInput;
  };

  /**
   * nurse findUniqueOrThrow
   */
  export type nurseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nurse
     */
    select?: nurseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: nurseInclude<ExtArgs> | null;
    /**
     * Filter, which nurse to fetch.
     */
    where: nurseWhereUniqueInput;
  };

  /**
   * nurse findFirst
   */
  export type nurseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nurse
     */
    select?: nurseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: nurseInclude<ExtArgs> | null;
    /**
     * Filter, which nurse to fetch.
     */
    where?: nurseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of nurses to fetch.
     */
    orderBy?: nurseOrderByWithRelationInput | nurseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for nurses.
     */
    cursor?: nurseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` nurses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` nurses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of nurses.
     */
    distinct?: NurseScalarFieldEnum | NurseScalarFieldEnum[];
  };

  /**
   * nurse findFirstOrThrow
   */
  export type nurseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nurse
     */
    select?: nurseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: nurseInclude<ExtArgs> | null;
    /**
     * Filter, which nurse to fetch.
     */
    where?: nurseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of nurses to fetch.
     */
    orderBy?: nurseOrderByWithRelationInput | nurseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for nurses.
     */
    cursor?: nurseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` nurses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` nurses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of nurses.
     */
    distinct?: NurseScalarFieldEnum | NurseScalarFieldEnum[];
  };

  /**
   * nurse findMany
   */
  export type nurseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nurse
     */
    select?: nurseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: nurseInclude<ExtArgs> | null;
    /**
     * Filter, which nurses to fetch.
     */
    where?: nurseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of nurses to fetch.
     */
    orderBy?: nurseOrderByWithRelationInput | nurseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing nurses.
     */
    cursor?: nurseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` nurses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` nurses.
     */
    skip?: number;
    distinct?: NurseScalarFieldEnum | NurseScalarFieldEnum[];
  };

  /**
   * nurse create
   */
  export type nurseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nurse
     */
    select?: nurseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: nurseInclude<ExtArgs> | null;
    /**
     * The data needed to create a nurse.
     */
    data: XOR<nurseCreateInput, nurseUncheckedCreateInput>;
  };

  /**
   * nurse createMany
   */
  export type nurseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many nurses.
     */
    data: nurseCreateManyInput | nurseCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * nurse update
   */
  export type nurseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nurse
     */
    select?: nurseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: nurseInclude<ExtArgs> | null;
    /**
     * The data needed to update a nurse.
     */
    data: XOR<nurseUpdateInput, nurseUncheckedUpdateInput>;
    /**
     * Choose, which nurse to update.
     */
    where: nurseWhereUniqueInput;
  };

  /**
   * nurse updateMany
   */
  export type nurseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update nurses.
     */
    data: XOR<nurseUpdateManyMutationInput, nurseUncheckedUpdateManyInput>;
    /**
     * Filter which nurses to update
     */
    where?: nurseWhereInput;
  };

  /**
   * nurse upsert
   */
  export type nurseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nurse
     */
    select?: nurseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: nurseInclude<ExtArgs> | null;
    /**
     * The filter to search for the nurse to update in case it exists.
     */
    where: nurseWhereUniqueInput;
    /**
     * In case the nurse found by the `where` argument doesn't exist, create a new nurse with this data.
     */
    create: XOR<nurseCreateInput, nurseUncheckedCreateInput>;
    /**
     * In case the nurse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<nurseUpdateInput, nurseUncheckedUpdateInput>;
  };

  /**
   * nurse delete
   */
  export type nurseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nurse
     */
    select?: nurseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: nurseInclude<ExtArgs> | null;
    /**
     * Filter which nurse to delete.
     */
    where: nurseWhereUniqueInput;
  };

  /**
   * nurse deleteMany
   */
  export type nurseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nurses to delete
     */
    where?: nurseWhereInput;
  };

  /**
   * nurse without action
   */
  export type nurseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nurse
     */
    select?: nurseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: nurseInclude<ExtArgs> | null;
  };

  /**
   * Model staff_member
   */

  export type AggregateStaff_member = {
    _count: Staff_memberCountAggregateOutputType | null;
    _avg: Staff_memberAvgAggregateOutputType | null;
    _sum: Staff_memberSumAggregateOutputType | null;
    _min: Staff_memberMinAggregateOutputType | null;
    _max: Staff_memberMaxAggregateOutputType | null;
  };

  export type Staff_memberAvgAggregateOutputType = {
    years_of_experience: number | null;
  };

  export type Staff_memberSumAggregateOutputType = {
    years_of_experience: number | null;
  };

  export type Staff_memberMinAggregateOutputType = {
    id: string | null;
    position: string | null;
    years_of_experience: number | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Staff_memberMaxAggregateOutputType = {
    id: string | null;
    position: string | null;
    years_of_experience: number | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Staff_memberCountAggregateOutputType = {
    id: number;
    position: number;
    years_of_experience: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Staff_memberAvgAggregateInputType = {
    years_of_experience?: true;
  };

  export type Staff_memberSumAggregateInputType = {
    years_of_experience?: true;
  };

  export type Staff_memberMinAggregateInputType = {
    id?: true;
    position?: true;
    years_of_experience?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Staff_memberMaxAggregateInputType = {
    id?: true;
    position?: true;
    years_of_experience?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Staff_memberCountAggregateInputType = {
    id?: true;
    position?: true;
    years_of_experience?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Staff_memberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which staff_member to aggregate.
     */
    where?: staff_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of staff_members to fetch.
     */
    orderBy?: staff_memberOrderByWithRelationInput | staff_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: staff_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` staff_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` staff_members.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned staff_members
     **/
    _count?: true | Staff_memberCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Staff_memberAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Staff_memberSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Staff_memberMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Staff_memberMaxAggregateInputType;
  };

  export type GetStaff_memberAggregateType<T extends Staff_memberAggregateArgs> = {
    [P in keyof T & keyof AggregateStaff_member]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff_member[P]>
      : GetScalarType<T[P], AggregateStaff_member[P]>;
  };

  export type staff_memberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: staff_memberWhereInput;
    orderBy?: staff_memberOrderByWithAggregationInput | staff_memberOrderByWithAggregationInput[];
    by: Staff_memberScalarFieldEnum[] | Staff_memberScalarFieldEnum;
    having?: staff_memberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Staff_memberCountAggregateInputType | true;
    _avg?: Staff_memberAvgAggregateInputType;
    _sum?: Staff_memberSumAggregateInputType;
    _min?: Staff_memberMinAggregateInputType;
    _max?: Staff_memberMaxAggregateInputType;
  };

  export type Staff_memberGroupByOutputType = {
    id: string;
    position: string;
    years_of_experience: number;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Staff_memberCountAggregateOutputType | null;
    _avg: Staff_memberAvgAggregateOutputType | null;
    _sum: Staff_memberSumAggregateOutputType | null;
    _min: Staff_memberMinAggregateOutputType | null;
    _max: Staff_memberMaxAggregateOutputType | null;
  };

  type GetStaff_memberGroupByPayload<T extends staff_memberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Staff_memberGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Staff_memberGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Staff_memberGroupByOutputType[P]>
          : GetScalarType<T[P], Staff_memberGroupByOutputType[P]>;
      }
    >
  >;

  export type staff_memberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        position?: boolean;
        years_of_experience?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['staff_member']
    >;

  export type staff_memberSelectScalar = {
    id?: boolean;
    position?: boolean;
    years_of_experience?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type staff_memberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $staff_memberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'staff_member';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        position: string;
        years_of_experience: number;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['staff_member']
    >;
    composites: {};
  };

  type staff_memberGetPayload<S extends boolean | null | undefined | staff_memberDefaultArgs> = $Result.GetResult<
    Prisma.$staff_memberPayload,
    S
  >;

  type staff_memberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    staff_memberFindManyArgs,
    'select' | 'include'
  > & {
    select?: Staff_memberCountAggregateInputType | true;
  };

  export interface staff_memberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['staff_member']; meta: { name: 'staff_member' } };
    /**
     * Find zero or one Staff_member that matches the filter.
     * @param {staff_memberFindUniqueArgs} args - Arguments to find a Staff_member
     * @example
     * // Get one Staff_member
     * const staff_member = await prisma.staff_member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends staff_memberFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, staff_memberFindUniqueArgs<ExtArgs>>,
    ): Prisma__staff_memberClient<
      $Result.GetResult<Prisma.$staff_memberPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Staff_member that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {staff_memberFindUniqueOrThrowArgs} args - Arguments to find a Staff_member
     * @example
     * // Get one Staff_member
     * const staff_member = await prisma.staff_member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends staff_memberFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, staff_memberFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__staff_memberClient<
      $Result.GetResult<Prisma.$staff_memberPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Staff_member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staff_memberFindFirstArgs} args - Arguments to find a Staff_member
     * @example
     * // Get one Staff_member
     * const staff_member = await prisma.staff_member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends staff_memberFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, staff_memberFindFirstArgs<ExtArgs>>,
    ): Prisma__staff_memberClient<
      $Result.GetResult<Prisma.$staff_memberPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Staff_member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staff_memberFindFirstOrThrowArgs} args - Arguments to find a Staff_member
     * @example
     * // Get one Staff_member
     * const staff_member = await prisma.staff_member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends staff_memberFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, staff_memberFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__staff_memberClient<
      $Result.GetResult<Prisma.$staff_memberPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Staff_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staff_memberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff_members
     * const staff_members = await prisma.staff_member.findMany()
     *
     * // Get first 10 Staff_members
     * const staff_members = await prisma.staff_member.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const staff_memberWithIdOnly = await prisma.staff_member.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends staff_memberFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, staff_memberFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staff_memberPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Staff_member.
     * @param {staff_memberCreateArgs} args - Arguments to create a Staff_member.
     * @example
     * // Create one Staff_member
     * const Staff_member = await prisma.staff_member.create({
     *   data: {
     *     // ... data to create a Staff_member
     *   }
     * })
     *
     **/
    create<T extends staff_memberCreateArgs<ExtArgs>>(
      args: SelectSubset<T, staff_memberCreateArgs<ExtArgs>>,
    ): Prisma__staff_memberClient<$Result.GetResult<Prisma.$staff_memberPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Staff_members.
     *     @param {staff_memberCreateManyArgs} args - Arguments to create many Staff_members.
     *     @example
     *     // Create many Staff_members
     *     const staff_member = await prisma.staff_member.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends staff_memberCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, staff_memberCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Staff_member.
     * @param {staff_memberDeleteArgs} args - Arguments to delete one Staff_member.
     * @example
     * // Delete one Staff_member
     * const Staff_member = await prisma.staff_member.delete({
     *   where: {
     *     // ... filter to delete one Staff_member
     *   }
     * })
     *
     **/
    delete<T extends staff_memberDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, staff_memberDeleteArgs<ExtArgs>>,
    ): Prisma__staff_memberClient<$Result.GetResult<Prisma.$staff_memberPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Staff_member.
     * @param {staff_memberUpdateArgs} args - Arguments to update one Staff_member.
     * @example
     * // Update one Staff_member
     * const staff_member = await prisma.staff_member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends staff_memberUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, staff_memberUpdateArgs<ExtArgs>>,
    ): Prisma__staff_memberClient<$Result.GetResult<Prisma.$staff_memberPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Staff_members.
     * @param {staff_memberDeleteManyArgs} args - Arguments to filter Staff_members to delete.
     * @example
     * // Delete a few Staff_members
     * const { count } = await prisma.staff_member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends staff_memberDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, staff_memberDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Staff_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staff_memberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff_members
     * const staff_member = await prisma.staff_member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends staff_memberUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, staff_memberUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Staff_member.
     * @param {staff_memberUpsertArgs} args - Arguments to update or create a Staff_member.
     * @example
     * // Update or create a Staff_member
     * const staff_member = await prisma.staff_member.upsert({
     *   create: {
     *     // ... data to create a Staff_member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff_member we want to update
     *   }
     * })
     **/
    upsert<T extends staff_memberUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, staff_memberUpsertArgs<ExtArgs>>,
    ): Prisma__staff_memberClient<$Result.GetResult<Prisma.$staff_memberPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Staff_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staff_memberCountArgs} args - Arguments to filter Staff_members to count.
     * @example
     * // Count the number of Staff_members
     * const count = await prisma.staff_member.count({
     *   where: {
     *     // ... the filter for the Staff_members we want to count
     *   }
     * })
     **/
    count<T extends staff_memberCountArgs>(
      args?: Subset<T, staff_memberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Staff_memberCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Staff_member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Staff_memberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Staff_memberAggregateArgs>(
      args: Subset<T, Staff_memberAggregateArgs>,
    ): Prisma.PrismaPromise<GetStaff_memberAggregateType<T>>;

    /**
     * Group by Staff_member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staff_memberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends staff_memberGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: staff_memberGroupByArgs['orderBy'] }
        : { orderBy?: staff_memberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, staff_memberGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetStaff_memberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the staff_member model
     */
    readonly fields: staff_memberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for staff_member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__staff_memberClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the staff_member model
   */
  interface staff_memberFieldRefs {
    readonly id: FieldRef<'staff_member', 'String'>;
    readonly position: FieldRef<'staff_member', 'String'>;
    readonly years_of_experience: FieldRef<'staff_member', 'Int'>;
    readonly user_id: FieldRef<'staff_member', 'String'>;
    readonly created_at: FieldRef<'staff_member', 'DateTime'>;
    readonly updated_at: FieldRef<'staff_member', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * staff_member findUnique
   */
  export type staff_memberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_member
     */
    select?: staff_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staff_memberInclude<ExtArgs> | null;
    /**
     * Filter, which staff_member to fetch.
     */
    where: staff_memberWhereUniqueInput;
  };

  /**
   * staff_member findUniqueOrThrow
   */
  export type staff_memberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_member
     */
    select?: staff_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staff_memberInclude<ExtArgs> | null;
    /**
     * Filter, which staff_member to fetch.
     */
    where: staff_memberWhereUniqueInput;
  };

  /**
   * staff_member findFirst
   */
  export type staff_memberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_member
     */
    select?: staff_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staff_memberInclude<ExtArgs> | null;
    /**
     * Filter, which staff_member to fetch.
     */
    where?: staff_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of staff_members to fetch.
     */
    orderBy?: staff_memberOrderByWithRelationInput | staff_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for staff_members.
     */
    cursor?: staff_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` staff_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` staff_members.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of staff_members.
     */
    distinct?: Staff_memberScalarFieldEnum | Staff_memberScalarFieldEnum[];
  };

  /**
   * staff_member findFirstOrThrow
   */
  export type staff_memberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_member
     */
    select?: staff_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staff_memberInclude<ExtArgs> | null;
    /**
     * Filter, which staff_member to fetch.
     */
    where?: staff_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of staff_members to fetch.
     */
    orderBy?: staff_memberOrderByWithRelationInput | staff_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for staff_members.
     */
    cursor?: staff_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` staff_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` staff_members.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of staff_members.
     */
    distinct?: Staff_memberScalarFieldEnum | Staff_memberScalarFieldEnum[];
  };

  /**
   * staff_member findMany
   */
  export type staff_memberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_member
     */
    select?: staff_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staff_memberInclude<ExtArgs> | null;
    /**
     * Filter, which staff_members to fetch.
     */
    where?: staff_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of staff_members to fetch.
     */
    orderBy?: staff_memberOrderByWithRelationInput | staff_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing staff_members.
     */
    cursor?: staff_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` staff_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` staff_members.
     */
    skip?: number;
    distinct?: Staff_memberScalarFieldEnum | Staff_memberScalarFieldEnum[];
  };

  /**
   * staff_member create
   */
  export type staff_memberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_member
     */
    select?: staff_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staff_memberInclude<ExtArgs> | null;
    /**
     * The data needed to create a staff_member.
     */
    data: XOR<staff_memberCreateInput, staff_memberUncheckedCreateInput>;
  };

  /**
   * staff_member createMany
   */
  export type staff_memberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many staff_members.
     */
    data: staff_memberCreateManyInput | staff_memberCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * staff_member update
   */
  export type staff_memberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_member
     */
    select?: staff_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staff_memberInclude<ExtArgs> | null;
    /**
     * The data needed to update a staff_member.
     */
    data: XOR<staff_memberUpdateInput, staff_memberUncheckedUpdateInput>;
    /**
     * Choose, which staff_member to update.
     */
    where: staff_memberWhereUniqueInput;
  };

  /**
   * staff_member updateMany
   */
  export type staff_memberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update staff_members.
     */
    data: XOR<staff_memberUpdateManyMutationInput, staff_memberUncheckedUpdateManyInput>;
    /**
     * Filter which staff_members to update
     */
    where?: staff_memberWhereInput;
  };

  /**
   * staff_member upsert
   */
  export type staff_memberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_member
     */
    select?: staff_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staff_memberInclude<ExtArgs> | null;
    /**
     * The filter to search for the staff_member to update in case it exists.
     */
    where: staff_memberWhereUniqueInput;
    /**
     * In case the staff_member found by the `where` argument doesn't exist, create a new staff_member with this data.
     */
    create: XOR<staff_memberCreateInput, staff_memberUncheckedCreateInput>;
    /**
     * In case the staff_member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<staff_memberUpdateInput, staff_memberUncheckedUpdateInput>;
  };

  /**
   * staff_member delete
   */
  export type staff_memberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_member
     */
    select?: staff_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staff_memberInclude<ExtArgs> | null;
    /**
     * Filter which staff_member to delete.
     */
    where: staff_memberWhereUniqueInput;
  };

  /**
   * staff_member deleteMany
   */
  export type staff_memberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which staff_members to delete
     */
    where?: staff_memberWhereInput;
  };

  /**
   * staff_member without action
   */
  export type staff_memberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_member
     */
    select?: staff_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staff_memberInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      appointment?: boolean | user$appointmentArgs<ExtArgs>;
      company?: boolean | user$companyArgs<ExtArgs>;
      doctor?: boolean | user$doctorArgs<ExtArgs>;
      nurse?: boolean | user$nurseArgs<ExtArgs>;
      staff_member?: boolean | user$staff_memberArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | user$appointmentArgs<ExtArgs>;
    company?: boolean | user$companyArgs<ExtArgs>;
    doctor?: boolean | user$doctorArgs<ExtArgs>;
    nurse?: boolean | user$nurseArgs<ExtArgs>;
    staff_member?: boolean | user$staff_memberArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      appointment: Prisma.$appointmentPayload<ExtArgs>[];
      company: Prisma.$companyPayload<ExtArgs>[];
      doctor: Prisma.$doctorPayload<ExtArgs>[];
      nurse: Prisma.$nursePayload<ExtArgs>[];
      staff_member: Prisma.$staff_memberPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    appointment<T extends user$appointmentArgs<ExtArgs> = {}>(
      args?: Subset<T, user$appointmentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    company<T extends user$companyArgs<ExtArgs> = {}>(
      args?: Subset<T, user$companyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'> | Null>;

    doctor<T extends user$doctorArgs<ExtArgs> = {}>(
      args?: Subset<T, user$doctorArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'findMany'> | Null>;

    nurse<T extends user$nurseArgs<ExtArgs> = {}>(
      args?: Subset<T, user$nurseArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nursePayload<ExtArgs>, T, 'findMany'> | Null>;

    staff_member<T extends user$staff_memberArgs<ExtArgs> = {}>(
      args?: Subset<T, user$staff_memberArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staff_memberPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.appointment
   */
  export type user$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    where?: appointmentWhereInput;
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    cursor?: appointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * user.company
   */
  export type user$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    where?: companyWhereInput;
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    cursor?: companyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * user.doctor
   */
  export type user$doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doctorInclude<ExtArgs> | null;
    where?: doctorWhereInput;
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[];
    cursor?: doctorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[];
  };

  /**
   * user.nurse
   */
  export type user$nurseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nurse
     */
    select?: nurseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: nurseInclude<ExtArgs> | null;
    where?: nurseWhereInput;
    orderBy?: nurseOrderByWithRelationInput | nurseOrderByWithRelationInput[];
    cursor?: nurseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: NurseScalarFieldEnum | NurseScalarFieldEnum[];
  };

  /**
   * user.staff_member
   */
  export type user$staff_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_member
     */
    select?: staff_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staff_memberInclude<ExtArgs> | null;
    where?: staff_memberWhereInput;
    orderBy?: staff_memberOrderByWithRelationInput | staff_memberOrderByWithRelationInput[];
    cursor?: staff_memberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Staff_memberScalarFieldEnum | Staff_memberScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const AppointmentScalarFieldEnum: {
    id: 'id';
    appointment_date: 'appointment_date';
    appointment_time: 'appointment_time';
    doctor_id: 'doctor_id';
    patient_id: 'patient_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const DoctorScalarFieldEnum: {
    id: 'id';
    specialization: 'specialization';
    years_of_experience: 'years_of_experience';
    working_days: 'working_days';
    working_hours: 'working_hours';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum];

  export const NurseScalarFieldEnum: {
    id: 'id';
    years_of_experience: 'years_of_experience';
    shift: 'shift';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type NurseScalarFieldEnum = (typeof NurseScalarFieldEnum)[keyof typeof NurseScalarFieldEnum];

  export const Staff_memberScalarFieldEnum: {
    id: 'id';
    position: 'position';
    years_of_experience: 'years_of_experience';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Staff_memberScalarFieldEnum =
    (typeof Staff_memberScalarFieldEnum)[keyof typeof Staff_memberScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type appointmentWhereInput = {
    AND?: appointmentWhereInput | appointmentWhereInput[];
    OR?: appointmentWhereInput[];
    NOT?: appointmentWhereInput | appointmentWhereInput[];
    id?: UuidFilter<'appointment'> | string;
    appointment_date?: DateTimeFilter<'appointment'> | Date | string;
    appointment_time?: StringFilter<'appointment'> | string;
    doctor_id?: UuidFilter<'appointment'> | string;
    patient_id?: UuidFilter<'appointment'> | string;
    created_at?: DateTimeFilter<'appointment'> | Date | string;
    updated_at?: DateTimeFilter<'appointment'> | Date | string;
    doctor?: XOR<DoctorRelationFilter, doctorWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type appointmentOrderByWithRelationInput = {
    id?: SortOrder;
    appointment_date?: SortOrder;
    appointment_time?: SortOrder;
    doctor_id?: SortOrder;
    patient_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    doctor?: doctorOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type appointmentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: appointmentWhereInput | appointmentWhereInput[];
      OR?: appointmentWhereInput[];
      NOT?: appointmentWhereInput | appointmentWhereInput[];
      appointment_date?: DateTimeFilter<'appointment'> | Date | string;
      appointment_time?: StringFilter<'appointment'> | string;
      doctor_id?: UuidFilter<'appointment'> | string;
      patient_id?: UuidFilter<'appointment'> | string;
      created_at?: DateTimeFilter<'appointment'> | Date | string;
      updated_at?: DateTimeFilter<'appointment'> | Date | string;
      doctor?: XOR<DoctorRelationFilter, doctorWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type appointmentOrderByWithAggregationInput = {
    id?: SortOrder;
    appointment_date?: SortOrder;
    appointment_time?: SortOrder;
    doctor_id?: SortOrder;
    patient_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: appointmentCountOrderByAggregateInput;
    _max?: appointmentMaxOrderByAggregateInput;
    _min?: appointmentMinOrderByAggregateInput;
  };

  export type appointmentScalarWhereWithAggregatesInput = {
    AND?: appointmentScalarWhereWithAggregatesInput | appointmentScalarWhereWithAggregatesInput[];
    OR?: appointmentScalarWhereWithAggregatesInput[];
    NOT?: appointmentScalarWhereWithAggregatesInput | appointmentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'appointment'> | string;
    appointment_date?: DateTimeWithAggregatesFilter<'appointment'> | Date | string;
    appointment_time?: StringWithAggregatesFilter<'appointment'> | string;
    doctor_id?: UuidWithAggregatesFilter<'appointment'> | string;
    patient_id?: UuidWithAggregatesFilter<'appointment'> | string;
    created_at?: DateTimeWithAggregatesFilter<'appointment'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'appointment'> | Date | string;
  };

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      user_id?: UuidFilter<'company'> | string;
      tenant_id?: StringFilter<'company'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'company'> | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type doctorWhereInput = {
    AND?: doctorWhereInput | doctorWhereInput[];
    OR?: doctorWhereInput[];
    NOT?: doctorWhereInput | doctorWhereInput[];
    id?: UuidFilter<'doctor'> | string;
    specialization?: StringFilter<'doctor'> | string;
    years_of_experience?: IntFilter<'doctor'> | number;
    working_days?: StringFilter<'doctor'> | string;
    working_hours?: StringFilter<'doctor'> | string;
    user_id?: UuidFilter<'doctor'> | string;
    created_at?: DateTimeFilter<'doctor'> | Date | string;
    updated_at?: DateTimeFilter<'doctor'> | Date | string;
    appointment?: AppointmentListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type doctorOrderByWithRelationInput = {
    id?: SortOrder;
    specialization?: SortOrder;
    years_of_experience?: SortOrder;
    working_days?: SortOrder;
    working_hours?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    appointment?: appointmentOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
  };

  export type doctorWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: doctorWhereInput | doctorWhereInput[];
      OR?: doctorWhereInput[];
      NOT?: doctorWhereInput | doctorWhereInput[];
      specialization?: StringFilter<'doctor'> | string;
      years_of_experience?: IntFilter<'doctor'> | number;
      working_days?: StringFilter<'doctor'> | string;
      working_hours?: StringFilter<'doctor'> | string;
      user_id?: UuidFilter<'doctor'> | string;
      created_at?: DateTimeFilter<'doctor'> | Date | string;
      updated_at?: DateTimeFilter<'doctor'> | Date | string;
      appointment?: AppointmentListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type doctorOrderByWithAggregationInput = {
    id?: SortOrder;
    specialization?: SortOrder;
    years_of_experience?: SortOrder;
    working_days?: SortOrder;
    working_hours?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: doctorCountOrderByAggregateInput;
    _avg?: doctorAvgOrderByAggregateInput;
    _max?: doctorMaxOrderByAggregateInput;
    _min?: doctorMinOrderByAggregateInput;
    _sum?: doctorSumOrderByAggregateInput;
  };

  export type doctorScalarWhereWithAggregatesInput = {
    AND?: doctorScalarWhereWithAggregatesInput | doctorScalarWhereWithAggregatesInput[];
    OR?: doctorScalarWhereWithAggregatesInput[];
    NOT?: doctorScalarWhereWithAggregatesInput | doctorScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'doctor'> | string;
    specialization?: StringWithAggregatesFilter<'doctor'> | string;
    years_of_experience?: IntWithAggregatesFilter<'doctor'> | number;
    working_days?: StringWithAggregatesFilter<'doctor'> | string;
    working_hours?: StringWithAggregatesFilter<'doctor'> | string;
    user_id?: UuidWithAggregatesFilter<'doctor'> | string;
    created_at?: DateTimeWithAggregatesFilter<'doctor'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'doctor'> | Date | string;
  };

  export type nurseWhereInput = {
    AND?: nurseWhereInput | nurseWhereInput[];
    OR?: nurseWhereInput[];
    NOT?: nurseWhereInput | nurseWhereInput[];
    id?: UuidFilter<'nurse'> | string;
    years_of_experience?: IntFilter<'nurse'> | number;
    shift?: StringFilter<'nurse'> | string;
    user_id?: UuidFilter<'nurse'> | string;
    created_at?: DateTimeFilter<'nurse'> | Date | string;
    updated_at?: DateTimeFilter<'nurse'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type nurseOrderByWithRelationInput = {
    id?: SortOrder;
    years_of_experience?: SortOrder;
    shift?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type nurseWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: nurseWhereInput | nurseWhereInput[];
      OR?: nurseWhereInput[];
      NOT?: nurseWhereInput | nurseWhereInput[];
      years_of_experience?: IntFilter<'nurse'> | number;
      shift?: StringFilter<'nurse'> | string;
      user_id?: UuidFilter<'nurse'> | string;
      created_at?: DateTimeFilter<'nurse'> | Date | string;
      updated_at?: DateTimeFilter<'nurse'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type nurseOrderByWithAggregationInput = {
    id?: SortOrder;
    years_of_experience?: SortOrder;
    shift?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: nurseCountOrderByAggregateInput;
    _avg?: nurseAvgOrderByAggregateInput;
    _max?: nurseMaxOrderByAggregateInput;
    _min?: nurseMinOrderByAggregateInput;
    _sum?: nurseSumOrderByAggregateInput;
  };

  export type nurseScalarWhereWithAggregatesInput = {
    AND?: nurseScalarWhereWithAggregatesInput | nurseScalarWhereWithAggregatesInput[];
    OR?: nurseScalarWhereWithAggregatesInput[];
    NOT?: nurseScalarWhereWithAggregatesInput | nurseScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'nurse'> | string;
    years_of_experience?: IntWithAggregatesFilter<'nurse'> | number;
    shift?: StringWithAggregatesFilter<'nurse'> | string;
    user_id?: UuidWithAggregatesFilter<'nurse'> | string;
    created_at?: DateTimeWithAggregatesFilter<'nurse'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'nurse'> | Date | string;
  };

  export type staff_memberWhereInput = {
    AND?: staff_memberWhereInput | staff_memberWhereInput[];
    OR?: staff_memberWhereInput[];
    NOT?: staff_memberWhereInput | staff_memberWhereInput[];
    id?: UuidFilter<'staff_member'> | string;
    position?: StringFilter<'staff_member'> | string;
    years_of_experience?: IntFilter<'staff_member'> | number;
    user_id?: UuidFilter<'staff_member'> | string;
    created_at?: DateTimeFilter<'staff_member'> | Date | string;
    updated_at?: DateTimeFilter<'staff_member'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type staff_memberOrderByWithRelationInput = {
    id?: SortOrder;
    position?: SortOrder;
    years_of_experience?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type staff_memberWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: staff_memberWhereInput | staff_memberWhereInput[];
      OR?: staff_memberWhereInput[];
      NOT?: staff_memberWhereInput | staff_memberWhereInput[];
      position?: StringFilter<'staff_member'> | string;
      years_of_experience?: IntFilter<'staff_member'> | number;
      user_id?: UuidFilter<'staff_member'> | string;
      created_at?: DateTimeFilter<'staff_member'> | Date | string;
      updated_at?: DateTimeFilter<'staff_member'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type staff_memberOrderByWithAggregationInput = {
    id?: SortOrder;
    position?: SortOrder;
    years_of_experience?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: staff_memberCountOrderByAggregateInput;
    _avg?: staff_memberAvgOrderByAggregateInput;
    _max?: staff_memberMaxOrderByAggregateInput;
    _min?: staff_memberMinOrderByAggregateInput;
    _sum?: staff_memberSumOrderByAggregateInput;
  };

  export type staff_memberScalarWhereWithAggregatesInput = {
    AND?: staff_memberScalarWhereWithAggregatesInput | staff_memberScalarWhereWithAggregatesInput[];
    OR?: staff_memberScalarWhereWithAggregatesInput[];
    NOT?: staff_memberScalarWhereWithAggregatesInput | staff_memberScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'staff_member'> | string;
    position?: StringWithAggregatesFilter<'staff_member'> | string;
    years_of_experience?: IntWithAggregatesFilter<'staff_member'> | number;
    user_id?: UuidWithAggregatesFilter<'staff_member'> | string;
    created_at?: DateTimeWithAggregatesFilter<'staff_member'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'staff_member'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    appointment?: AppointmentListRelationFilter;
    company?: CompanyListRelationFilter;
    doctor?: DoctorListRelationFilter;
    nurse?: NurseListRelationFilter;
    staff_member?: Staff_memberListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    appointment?: appointmentOrderByRelationAggregateInput;
    company?: companyOrderByRelationAggregateInput;
    doctor?: doctorOrderByRelationAggregateInput;
    nurse?: nurseOrderByRelationAggregateInput;
    staff_member?: staff_memberOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      appointment?: AppointmentListRelationFilter;
      company?: CompanyListRelationFilter;
      doctor?: DoctorListRelationFilter;
      nurse?: NurseListRelationFilter;
      staff_member?: Staff_memberListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type appointmentCreateInput = {
    id?: string;
    appointment_date: Date | string;
    appointment_time: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    doctor: doctorCreateNestedOneWithoutAppointmentInput;
    user: userCreateNestedOneWithoutAppointmentInput;
  };

  export type appointmentUncheckedCreateInput = {
    id?: string;
    appointment_date: Date | string;
    appointment_time: string;
    doctor_id: string;
    patient_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_time?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    doctor?: doctorUpdateOneRequiredWithoutAppointmentNestedInput;
    user?: userUpdateOneRequiredWithoutAppointmentNestedInput;
  };

  export type appointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_time?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentCreateManyInput = {
    id?: string;
    appointment_date: Date | string;
    appointment_time: string;
    doctor_id: string;
    patient_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_time?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_time?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type doctorCreateInput = {
    id?: string;
    specialization: string;
    years_of_experience: number;
    working_days: string;
    working_hours: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutDoctorInput;
    user: userCreateNestedOneWithoutDoctorInput;
  };

  export type doctorUncheckedCreateInput = {
    id?: string;
    specialization: string;
    years_of_experience: number;
    working_days: string;
    working_hours: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutDoctorInput;
  };

  export type doctorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    years_of_experience?: IntFieldUpdateOperationsInput | number;
    working_days?: StringFieldUpdateOperationsInput | string;
    working_hours?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutDoctorNestedInput;
    user?: userUpdateOneRequiredWithoutDoctorNestedInput;
  };

  export type doctorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    years_of_experience?: IntFieldUpdateOperationsInput | number;
    working_days?: StringFieldUpdateOperationsInput | string;
    working_hours?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutDoctorNestedInput;
  };

  export type doctorCreateManyInput = {
    id?: string;
    specialization: string;
    years_of_experience: number;
    working_days: string;
    working_hours: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type doctorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    years_of_experience?: IntFieldUpdateOperationsInput | number;
    working_days?: StringFieldUpdateOperationsInput | string;
    working_hours?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type doctorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    years_of_experience?: IntFieldUpdateOperationsInput | number;
    working_days?: StringFieldUpdateOperationsInput | string;
    working_hours?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type nurseCreateInput = {
    id?: string;
    years_of_experience: number;
    shift: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutNurseInput;
  };

  export type nurseUncheckedCreateInput = {
    id?: string;
    years_of_experience: number;
    shift: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type nurseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    years_of_experience?: IntFieldUpdateOperationsInput | number;
    shift?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutNurseNestedInput;
  };

  export type nurseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    years_of_experience?: IntFieldUpdateOperationsInput | number;
    shift?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type nurseCreateManyInput = {
    id?: string;
    years_of_experience: number;
    shift: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type nurseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    years_of_experience?: IntFieldUpdateOperationsInput | number;
    shift?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type nurseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    years_of_experience?: IntFieldUpdateOperationsInput | number;
    shift?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type staff_memberCreateInput = {
    id?: string;
    position: string;
    years_of_experience: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutStaff_memberInput;
  };

  export type staff_memberUncheckedCreateInput = {
    id?: string;
    position: string;
    years_of_experience: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type staff_memberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    years_of_experience?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutStaff_memberNestedInput;
  };

  export type staff_memberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    years_of_experience?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type staff_memberCreateManyInput = {
    id?: string;
    position: string;
    years_of_experience: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type staff_memberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    years_of_experience?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type staff_memberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    years_of_experience?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedManyWithoutUserInput;
    doctor?: doctorCreateNestedManyWithoutUserInput;
    nurse?: nurseCreateNestedManyWithoutUserInput;
    staff_member?: staff_memberCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutUserInput;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    doctor?: doctorUncheckedCreateNestedManyWithoutUserInput;
    nurse?: nurseUncheckedCreateNestedManyWithoutUserInput;
    staff_member?: staff_memberUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutUserNestedInput;
    company?: companyUpdateManyWithoutUserNestedInput;
    doctor?: doctorUpdateManyWithoutUserNestedInput;
    nurse?: nurseUpdateManyWithoutUserNestedInput;
    staff_member?: staff_memberUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutUserNestedInput;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    doctor?: doctorUncheckedUpdateManyWithoutUserNestedInput;
    nurse?: nurseUncheckedUpdateManyWithoutUserNestedInput;
    staff_member?: staff_memberUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DoctorRelationFilter = {
    is?: doctorWhereInput;
    isNot?: doctorWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type appointmentCountOrderByAggregateInput = {
    id?: SortOrder;
    appointment_date?: SortOrder;
    appointment_time?: SortOrder;
    doctor_id?: SortOrder;
    patient_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type appointmentMaxOrderByAggregateInput = {
    id?: SortOrder;
    appointment_date?: SortOrder;
    appointment_time?: SortOrder;
    doctor_id?: SortOrder;
    patient_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type appointmentMinOrderByAggregateInput = {
    id?: SortOrder;
    appointment_date?: SortOrder;
    appointment_time?: SortOrder;
    doctor_id?: SortOrder;
    patient_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type AppointmentListRelationFilter = {
    every?: appointmentWhereInput;
    some?: appointmentWhereInput;
    none?: appointmentWhereInput;
  };

  export type appointmentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type doctorCountOrderByAggregateInput = {
    id?: SortOrder;
    specialization?: SortOrder;
    years_of_experience?: SortOrder;
    working_days?: SortOrder;
    working_hours?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type doctorAvgOrderByAggregateInput = {
    years_of_experience?: SortOrder;
  };

  export type doctorMaxOrderByAggregateInput = {
    id?: SortOrder;
    specialization?: SortOrder;
    years_of_experience?: SortOrder;
    working_days?: SortOrder;
    working_hours?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type doctorMinOrderByAggregateInput = {
    id?: SortOrder;
    specialization?: SortOrder;
    years_of_experience?: SortOrder;
    working_days?: SortOrder;
    working_hours?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type doctorSumOrderByAggregateInput = {
    years_of_experience?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type nurseCountOrderByAggregateInput = {
    id?: SortOrder;
    years_of_experience?: SortOrder;
    shift?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type nurseAvgOrderByAggregateInput = {
    years_of_experience?: SortOrder;
  };

  export type nurseMaxOrderByAggregateInput = {
    id?: SortOrder;
    years_of_experience?: SortOrder;
    shift?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type nurseMinOrderByAggregateInput = {
    id?: SortOrder;
    years_of_experience?: SortOrder;
    shift?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type nurseSumOrderByAggregateInput = {
    years_of_experience?: SortOrder;
  };

  export type staff_memberCountOrderByAggregateInput = {
    id?: SortOrder;
    position?: SortOrder;
    years_of_experience?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type staff_memberAvgOrderByAggregateInput = {
    years_of_experience?: SortOrder;
  };

  export type staff_memberMaxOrderByAggregateInput = {
    id?: SortOrder;
    position?: SortOrder;
    years_of_experience?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type staff_memberMinOrderByAggregateInput = {
    id?: SortOrder;
    position?: SortOrder;
    years_of_experience?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type staff_memberSumOrderByAggregateInput = {
    years_of_experience?: SortOrder;
  };

  export type CompanyListRelationFilter = {
    every?: companyWhereInput;
    some?: companyWhereInput;
    none?: companyWhereInput;
  };

  export type DoctorListRelationFilter = {
    every?: doctorWhereInput;
    some?: doctorWhereInput;
    none?: doctorWhereInput;
  };

  export type NurseListRelationFilter = {
    every?: nurseWhereInput;
    some?: nurseWhereInput;
    none?: nurseWhereInput;
  };

  export type Staff_memberListRelationFilter = {
    every?: staff_memberWhereInput;
    some?: staff_memberWhereInput;
    none?: staff_memberWhereInput;
  };

  export type companyOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type doctorOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type nurseOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type staff_memberOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type doctorCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<doctorCreateWithoutAppointmentInput, doctorUncheckedCreateWithoutAppointmentInput>;
    connectOrCreate?: doctorCreateOrConnectWithoutAppointmentInput;
    connect?: doctorWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<userCreateWithoutAppointmentInput, userUncheckedCreateWithoutAppointmentInput>;
    connectOrCreate?: userCreateOrConnectWithoutAppointmentInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type doctorUpdateOneRequiredWithoutAppointmentNestedInput = {
    create?: XOR<doctorCreateWithoutAppointmentInput, doctorUncheckedCreateWithoutAppointmentInput>;
    connectOrCreate?: doctorCreateOrConnectWithoutAppointmentInput;
    upsert?: doctorUpsertWithoutAppointmentInput;
    connect?: doctorWhereUniqueInput;
    update?: XOR<
      XOR<doctorUpdateToOneWithWhereWithoutAppointmentInput, doctorUpdateWithoutAppointmentInput>,
      doctorUncheckedUpdateWithoutAppointmentInput
    >;
  };

  export type userUpdateOneRequiredWithoutAppointmentNestedInput = {
    create?: XOR<userCreateWithoutAppointmentInput, userUncheckedCreateWithoutAppointmentInput>;
    connectOrCreate?: userCreateOrConnectWithoutAppointmentInput;
    upsert?: userUpsertWithoutAppointmentInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutAppointmentInput, userUpdateWithoutAppointmentInput>,
      userUncheckedUpdateWithoutAppointmentInput
    >;
  };

  export type userCreateNestedOneWithoutCompanyInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    connect?: userWhereUniqueInput;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type userUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    upsert?: userUpsertWithoutCompanyInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCompanyInput, userUpdateWithoutCompanyInput>,
      userUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type appointmentCreateNestedManyWithoutDoctorInput = {
    create?:
      | XOR<appointmentCreateWithoutDoctorInput, appointmentUncheckedCreateWithoutDoctorInput>
      | appointmentCreateWithoutDoctorInput[]
      | appointmentUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutDoctorInput | appointmentCreateOrConnectWithoutDoctorInput[];
    createMany?: appointmentCreateManyDoctorInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutDoctorInput = {
    create?: XOR<userCreateWithoutDoctorInput, userUncheckedCreateWithoutDoctorInput>;
    connectOrCreate?: userCreateOrConnectWithoutDoctorInput;
    connect?: userWhereUniqueInput;
  };

  export type appointmentUncheckedCreateNestedManyWithoutDoctorInput = {
    create?:
      | XOR<appointmentCreateWithoutDoctorInput, appointmentUncheckedCreateWithoutDoctorInput>
      | appointmentCreateWithoutDoctorInput[]
      | appointmentUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutDoctorInput | appointmentCreateOrConnectWithoutDoctorInput[];
    createMany?: appointmentCreateManyDoctorInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type appointmentUpdateManyWithoutDoctorNestedInput = {
    create?:
      | XOR<appointmentCreateWithoutDoctorInput, appointmentUncheckedCreateWithoutDoctorInput>
      | appointmentCreateWithoutDoctorInput[]
      | appointmentUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutDoctorInput | appointmentCreateOrConnectWithoutDoctorInput[];
    upsert?: appointmentUpsertWithWhereUniqueWithoutDoctorInput | appointmentUpsertWithWhereUniqueWithoutDoctorInput[];
    createMany?: appointmentCreateManyDoctorInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?: appointmentUpdateWithWhereUniqueWithoutDoctorInput | appointmentUpdateWithWhereUniqueWithoutDoctorInput[];
    updateMany?: appointmentUpdateManyWithWhereWithoutDoctorInput | appointmentUpdateManyWithWhereWithoutDoctorInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutDoctorNestedInput = {
    create?: XOR<userCreateWithoutDoctorInput, userUncheckedCreateWithoutDoctorInput>;
    connectOrCreate?: userCreateOrConnectWithoutDoctorInput;
    upsert?: userUpsertWithoutDoctorInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutDoctorInput, userUpdateWithoutDoctorInput>,
      userUncheckedUpdateWithoutDoctorInput
    >;
  };

  export type appointmentUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?:
      | XOR<appointmentCreateWithoutDoctorInput, appointmentUncheckedCreateWithoutDoctorInput>
      | appointmentCreateWithoutDoctorInput[]
      | appointmentUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutDoctorInput | appointmentCreateOrConnectWithoutDoctorInput[];
    upsert?: appointmentUpsertWithWhereUniqueWithoutDoctorInput | appointmentUpsertWithWhereUniqueWithoutDoctorInput[];
    createMany?: appointmentCreateManyDoctorInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?: appointmentUpdateWithWhereUniqueWithoutDoctorInput | appointmentUpdateWithWhereUniqueWithoutDoctorInput[];
    updateMany?: appointmentUpdateManyWithWhereWithoutDoctorInput | appointmentUpdateManyWithWhereWithoutDoctorInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type userCreateNestedOneWithoutNurseInput = {
    create?: XOR<userCreateWithoutNurseInput, userUncheckedCreateWithoutNurseInput>;
    connectOrCreate?: userCreateOrConnectWithoutNurseInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutNurseNestedInput = {
    create?: XOR<userCreateWithoutNurseInput, userUncheckedCreateWithoutNurseInput>;
    connectOrCreate?: userCreateOrConnectWithoutNurseInput;
    upsert?: userUpsertWithoutNurseInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutNurseInput, userUpdateWithoutNurseInput>,
      userUncheckedUpdateWithoutNurseInput
    >;
  };

  export type userCreateNestedOneWithoutStaff_memberInput = {
    create?: XOR<userCreateWithoutStaff_memberInput, userUncheckedCreateWithoutStaff_memberInput>;
    connectOrCreate?: userCreateOrConnectWithoutStaff_memberInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutStaff_memberNestedInput = {
    create?: XOR<userCreateWithoutStaff_memberInput, userUncheckedCreateWithoutStaff_memberInput>;
    connectOrCreate?: userCreateOrConnectWithoutStaff_memberInput;
    upsert?: userUpsertWithoutStaff_memberInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutStaff_memberInput, userUpdateWithoutStaff_memberInput>,
      userUncheckedUpdateWithoutStaff_memberInput
    >;
  };

  export type appointmentCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<appointmentCreateWithoutUserInput, appointmentUncheckedCreateWithoutUserInput>
      | appointmentCreateWithoutUserInput[]
      | appointmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutUserInput | appointmentCreateOrConnectWithoutUserInput[];
    createMany?: appointmentCreateManyUserInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type companyCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type doctorCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<doctorCreateWithoutUserInput, doctorUncheckedCreateWithoutUserInput>
      | doctorCreateWithoutUserInput[]
      | doctorUncheckedCreateWithoutUserInput[];
    connectOrCreate?: doctorCreateOrConnectWithoutUserInput | doctorCreateOrConnectWithoutUserInput[];
    createMany?: doctorCreateManyUserInputEnvelope;
    connect?: doctorWhereUniqueInput | doctorWhereUniqueInput[];
  };

  export type nurseCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<nurseCreateWithoutUserInput, nurseUncheckedCreateWithoutUserInput>
      | nurseCreateWithoutUserInput[]
      | nurseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: nurseCreateOrConnectWithoutUserInput | nurseCreateOrConnectWithoutUserInput[];
    createMany?: nurseCreateManyUserInputEnvelope;
    connect?: nurseWhereUniqueInput | nurseWhereUniqueInput[];
  };

  export type staff_memberCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<staff_memberCreateWithoutUserInput, staff_memberUncheckedCreateWithoutUserInput>
      | staff_memberCreateWithoutUserInput[]
      | staff_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: staff_memberCreateOrConnectWithoutUserInput | staff_memberCreateOrConnectWithoutUserInput[];
    createMany?: staff_memberCreateManyUserInputEnvelope;
    connect?: staff_memberWhereUniqueInput | staff_memberWhereUniqueInput[];
  };

  export type appointmentUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<appointmentCreateWithoutUserInput, appointmentUncheckedCreateWithoutUserInput>
      | appointmentCreateWithoutUserInput[]
      | appointmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutUserInput | appointmentCreateOrConnectWithoutUserInput[];
    createMany?: appointmentCreateManyUserInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type companyUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type doctorUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<doctorCreateWithoutUserInput, doctorUncheckedCreateWithoutUserInput>
      | doctorCreateWithoutUserInput[]
      | doctorUncheckedCreateWithoutUserInput[];
    connectOrCreate?: doctorCreateOrConnectWithoutUserInput | doctorCreateOrConnectWithoutUserInput[];
    createMany?: doctorCreateManyUserInputEnvelope;
    connect?: doctorWhereUniqueInput | doctorWhereUniqueInput[];
  };

  export type nurseUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<nurseCreateWithoutUserInput, nurseUncheckedCreateWithoutUserInput>
      | nurseCreateWithoutUserInput[]
      | nurseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: nurseCreateOrConnectWithoutUserInput | nurseCreateOrConnectWithoutUserInput[];
    createMany?: nurseCreateManyUserInputEnvelope;
    connect?: nurseWhereUniqueInput | nurseWhereUniqueInput[];
  };

  export type staff_memberUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<staff_memberCreateWithoutUserInput, staff_memberUncheckedCreateWithoutUserInput>
      | staff_memberCreateWithoutUserInput[]
      | staff_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: staff_memberCreateOrConnectWithoutUserInput | staff_memberCreateOrConnectWithoutUserInput[];
    createMany?: staff_memberCreateManyUserInputEnvelope;
    connect?: staff_memberWhereUniqueInput | staff_memberWhereUniqueInput[];
  };

  export type appointmentUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<appointmentCreateWithoutUserInput, appointmentUncheckedCreateWithoutUserInput>
      | appointmentCreateWithoutUserInput[]
      | appointmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutUserInput | appointmentCreateOrConnectWithoutUserInput[];
    upsert?: appointmentUpsertWithWhereUniqueWithoutUserInput | appointmentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: appointmentCreateManyUserInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?: appointmentUpdateWithWhereUniqueWithoutUserInput | appointmentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: appointmentUpdateManyWithWhereWithoutUserInput | appointmentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type companyUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type doctorUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<doctorCreateWithoutUserInput, doctorUncheckedCreateWithoutUserInput>
      | doctorCreateWithoutUserInput[]
      | doctorUncheckedCreateWithoutUserInput[];
    connectOrCreate?: doctorCreateOrConnectWithoutUserInput | doctorCreateOrConnectWithoutUserInput[];
    upsert?: doctorUpsertWithWhereUniqueWithoutUserInput | doctorUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: doctorCreateManyUserInputEnvelope;
    set?: doctorWhereUniqueInput | doctorWhereUniqueInput[];
    disconnect?: doctorWhereUniqueInput | doctorWhereUniqueInput[];
    delete?: doctorWhereUniqueInput | doctorWhereUniqueInput[];
    connect?: doctorWhereUniqueInput | doctorWhereUniqueInput[];
    update?: doctorUpdateWithWhereUniqueWithoutUserInput | doctorUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: doctorUpdateManyWithWhereWithoutUserInput | doctorUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: doctorScalarWhereInput | doctorScalarWhereInput[];
  };

  export type nurseUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<nurseCreateWithoutUserInput, nurseUncheckedCreateWithoutUserInput>
      | nurseCreateWithoutUserInput[]
      | nurseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: nurseCreateOrConnectWithoutUserInput | nurseCreateOrConnectWithoutUserInput[];
    upsert?: nurseUpsertWithWhereUniqueWithoutUserInput | nurseUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: nurseCreateManyUserInputEnvelope;
    set?: nurseWhereUniqueInput | nurseWhereUniqueInput[];
    disconnect?: nurseWhereUniqueInput | nurseWhereUniqueInput[];
    delete?: nurseWhereUniqueInput | nurseWhereUniqueInput[];
    connect?: nurseWhereUniqueInput | nurseWhereUniqueInput[];
    update?: nurseUpdateWithWhereUniqueWithoutUserInput | nurseUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: nurseUpdateManyWithWhereWithoutUserInput | nurseUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: nurseScalarWhereInput | nurseScalarWhereInput[];
  };

  export type staff_memberUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<staff_memberCreateWithoutUserInput, staff_memberUncheckedCreateWithoutUserInput>
      | staff_memberCreateWithoutUserInput[]
      | staff_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: staff_memberCreateOrConnectWithoutUserInput | staff_memberCreateOrConnectWithoutUserInput[];
    upsert?: staff_memberUpsertWithWhereUniqueWithoutUserInput | staff_memberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: staff_memberCreateManyUserInputEnvelope;
    set?: staff_memberWhereUniqueInput | staff_memberWhereUniqueInput[];
    disconnect?: staff_memberWhereUniqueInput | staff_memberWhereUniqueInput[];
    delete?: staff_memberWhereUniqueInput | staff_memberWhereUniqueInput[];
    connect?: staff_memberWhereUniqueInput | staff_memberWhereUniqueInput[];
    update?: staff_memberUpdateWithWhereUniqueWithoutUserInput | staff_memberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: staff_memberUpdateManyWithWhereWithoutUserInput | staff_memberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: staff_memberScalarWhereInput | staff_memberScalarWhereInput[];
  };

  export type appointmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<appointmentCreateWithoutUserInput, appointmentUncheckedCreateWithoutUserInput>
      | appointmentCreateWithoutUserInput[]
      | appointmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutUserInput | appointmentCreateOrConnectWithoutUserInput[];
    upsert?: appointmentUpsertWithWhereUniqueWithoutUserInput | appointmentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: appointmentCreateManyUserInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?: appointmentUpdateWithWhereUniqueWithoutUserInput | appointmentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: appointmentUpdateManyWithWhereWithoutUserInput | appointmentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type companyUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type doctorUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<doctorCreateWithoutUserInput, doctorUncheckedCreateWithoutUserInput>
      | doctorCreateWithoutUserInput[]
      | doctorUncheckedCreateWithoutUserInput[];
    connectOrCreate?: doctorCreateOrConnectWithoutUserInput | doctorCreateOrConnectWithoutUserInput[];
    upsert?: doctorUpsertWithWhereUniqueWithoutUserInput | doctorUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: doctorCreateManyUserInputEnvelope;
    set?: doctorWhereUniqueInput | doctorWhereUniqueInput[];
    disconnect?: doctorWhereUniqueInput | doctorWhereUniqueInput[];
    delete?: doctorWhereUniqueInput | doctorWhereUniqueInput[];
    connect?: doctorWhereUniqueInput | doctorWhereUniqueInput[];
    update?: doctorUpdateWithWhereUniqueWithoutUserInput | doctorUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: doctorUpdateManyWithWhereWithoutUserInput | doctorUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: doctorScalarWhereInput | doctorScalarWhereInput[];
  };

  export type nurseUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<nurseCreateWithoutUserInput, nurseUncheckedCreateWithoutUserInput>
      | nurseCreateWithoutUserInput[]
      | nurseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: nurseCreateOrConnectWithoutUserInput | nurseCreateOrConnectWithoutUserInput[];
    upsert?: nurseUpsertWithWhereUniqueWithoutUserInput | nurseUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: nurseCreateManyUserInputEnvelope;
    set?: nurseWhereUniqueInput | nurseWhereUniqueInput[];
    disconnect?: nurseWhereUniqueInput | nurseWhereUniqueInput[];
    delete?: nurseWhereUniqueInput | nurseWhereUniqueInput[];
    connect?: nurseWhereUniqueInput | nurseWhereUniqueInput[];
    update?: nurseUpdateWithWhereUniqueWithoutUserInput | nurseUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: nurseUpdateManyWithWhereWithoutUserInput | nurseUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: nurseScalarWhereInput | nurseScalarWhereInput[];
  };

  export type staff_memberUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<staff_memberCreateWithoutUserInput, staff_memberUncheckedCreateWithoutUserInput>
      | staff_memberCreateWithoutUserInput[]
      | staff_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: staff_memberCreateOrConnectWithoutUserInput | staff_memberCreateOrConnectWithoutUserInput[];
    upsert?: staff_memberUpsertWithWhereUniqueWithoutUserInput | staff_memberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: staff_memberCreateManyUserInputEnvelope;
    set?: staff_memberWhereUniqueInput | staff_memberWhereUniqueInput[];
    disconnect?: staff_memberWhereUniqueInput | staff_memberWhereUniqueInput[];
    delete?: staff_memberWhereUniqueInput | staff_memberWhereUniqueInput[];
    connect?: staff_memberWhereUniqueInput | staff_memberWhereUniqueInput[];
    update?: staff_memberUpdateWithWhereUniqueWithoutUserInput | staff_memberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: staff_memberUpdateManyWithWhereWithoutUserInput | staff_memberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: staff_memberScalarWhereInput | staff_memberScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type doctorCreateWithoutAppointmentInput = {
    id?: string;
    specialization: string;
    years_of_experience: number;
    working_days: string;
    working_hours: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutDoctorInput;
  };

  export type doctorUncheckedCreateWithoutAppointmentInput = {
    id?: string;
    specialization: string;
    years_of_experience: number;
    working_days: string;
    working_hours: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type doctorCreateOrConnectWithoutAppointmentInput = {
    where: doctorWhereUniqueInput;
    create: XOR<doctorCreateWithoutAppointmentInput, doctorUncheckedCreateWithoutAppointmentInput>;
  };

  export type userCreateWithoutAppointmentInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    doctor?: doctorCreateNestedManyWithoutUserInput;
    nurse?: nurseCreateNestedManyWithoutUserInput;
    staff_member?: staff_memberCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutAppointmentInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    doctor?: doctorUncheckedCreateNestedManyWithoutUserInput;
    nurse?: nurseUncheckedCreateNestedManyWithoutUserInput;
    staff_member?: staff_memberUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutAppointmentInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutAppointmentInput, userUncheckedCreateWithoutAppointmentInput>;
  };

  export type doctorUpsertWithoutAppointmentInput = {
    update: XOR<doctorUpdateWithoutAppointmentInput, doctorUncheckedUpdateWithoutAppointmentInput>;
    create: XOR<doctorCreateWithoutAppointmentInput, doctorUncheckedCreateWithoutAppointmentInput>;
    where?: doctorWhereInput;
  };

  export type doctorUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: doctorWhereInput;
    data: XOR<doctorUpdateWithoutAppointmentInput, doctorUncheckedUpdateWithoutAppointmentInput>;
  };

  export type doctorUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    years_of_experience?: IntFieldUpdateOperationsInput | number;
    working_days?: StringFieldUpdateOperationsInput | string;
    working_hours?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutDoctorNestedInput;
  };

  export type doctorUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    years_of_experience?: IntFieldUpdateOperationsInput | number;
    working_days?: StringFieldUpdateOperationsInput | string;
    working_hours?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutAppointmentInput = {
    update: XOR<userUpdateWithoutAppointmentInput, userUncheckedUpdateWithoutAppointmentInput>;
    create: XOR<userCreateWithoutAppointmentInput, userUncheckedCreateWithoutAppointmentInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutAppointmentInput, userUncheckedUpdateWithoutAppointmentInput>;
  };

  export type userUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    doctor?: doctorUpdateManyWithoutUserNestedInput;
    nurse?: nurseUpdateManyWithoutUserNestedInput;
    staff_member?: staff_memberUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    doctor?: doctorUncheckedUpdateManyWithoutUserNestedInput;
    nurse?: nurseUncheckedUpdateManyWithoutUserNestedInput;
    staff_member?: staff_memberUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutUserInput;
    doctor?: doctorCreateNestedManyWithoutUserInput;
    nurse?: nurseCreateNestedManyWithoutUserInput;
    staff_member?: staff_memberCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutUserInput;
    doctor?: doctorUncheckedCreateNestedManyWithoutUserInput;
    nurse?: nurseUncheckedCreateNestedManyWithoutUserInput;
    staff_member?: staff_memberUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCompanyInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type userUpsertWithoutCompanyInput = {
    update: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCompanyInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
  };

  export type userUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutUserNestedInput;
    doctor?: doctorUpdateManyWithoutUserNestedInput;
    nurse?: nurseUpdateManyWithoutUserNestedInput;
    staff_member?: staff_memberUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutUserNestedInput;
    doctor?: doctorUncheckedUpdateManyWithoutUserNestedInput;
    nurse?: nurseUncheckedUpdateManyWithoutUserNestedInput;
    staff_member?: staff_memberUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type appointmentCreateWithoutDoctorInput = {
    id?: string;
    appointment_date: Date | string;
    appointment_time: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutAppointmentInput;
  };

  export type appointmentUncheckedCreateWithoutDoctorInput = {
    id?: string;
    appointment_date: Date | string;
    appointment_time: string;
    patient_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentCreateOrConnectWithoutDoctorInput = {
    where: appointmentWhereUniqueInput;
    create: XOR<appointmentCreateWithoutDoctorInput, appointmentUncheckedCreateWithoutDoctorInput>;
  };

  export type appointmentCreateManyDoctorInputEnvelope = {
    data: appointmentCreateManyDoctorInput | appointmentCreateManyDoctorInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutDoctorInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedManyWithoutUserInput;
    nurse?: nurseCreateNestedManyWithoutUserInput;
    staff_member?: staff_memberCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutDoctorInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutUserInput;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    nurse?: nurseUncheckedCreateNestedManyWithoutUserInput;
    staff_member?: staff_memberUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutDoctorInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutDoctorInput, userUncheckedCreateWithoutDoctorInput>;
  };

  export type appointmentUpsertWithWhereUniqueWithoutDoctorInput = {
    where: appointmentWhereUniqueInput;
    update: XOR<appointmentUpdateWithoutDoctorInput, appointmentUncheckedUpdateWithoutDoctorInput>;
    create: XOR<appointmentCreateWithoutDoctorInput, appointmentUncheckedCreateWithoutDoctorInput>;
  };

  export type appointmentUpdateWithWhereUniqueWithoutDoctorInput = {
    where: appointmentWhereUniqueInput;
    data: XOR<appointmentUpdateWithoutDoctorInput, appointmentUncheckedUpdateWithoutDoctorInput>;
  };

  export type appointmentUpdateManyWithWhereWithoutDoctorInput = {
    where: appointmentScalarWhereInput;
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyWithoutDoctorInput>;
  };

  export type appointmentScalarWhereInput = {
    AND?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
    OR?: appointmentScalarWhereInput[];
    NOT?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
    id?: UuidFilter<'appointment'> | string;
    appointment_date?: DateTimeFilter<'appointment'> | Date | string;
    appointment_time?: StringFilter<'appointment'> | string;
    doctor_id?: UuidFilter<'appointment'> | string;
    patient_id?: UuidFilter<'appointment'> | string;
    created_at?: DateTimeFilter<'appointment'> | Date | string;
    updated_at?: DateTimeFilter<'appointment'> | Date | string;
  };

  export type userUpsertWithoutDoctorInput = {
    update: XOR<userUpdateWithoutDoctorInput, userUncheckedUpdateWithoutDoctorInput>;
    create: XOR<userCreateWithoutDoctorInput, userUncheckedCreateWithoutDoctorInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutDoctorInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutDoctorInput, userUncheckedUpdateWithoutDoctorInput>;
  };

  export type userUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutUserNestedInput;
    company?: companyUpdateManyWithoutUserNestedInput;
    nurse?: nurseUpdateManyWithoutUserNestedInput;
    staff_member?: staff_memberUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutUserNestedInput;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    nurse?: nurseUncheckedUpdateManyWithoutUserNestedInput;
    staff_member?: staff_memberUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutNurseInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedManyWithoutUserInput;
    doctor?: doctorCreateNestedManyWithoutUserInput;
    staff_member?: staff_memberCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutNurseInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutUserInput;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    doctor?: doctorUncheckedCreateNestedManyWithoutUserInput;
    staff_member?: staff_memberUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutNurseInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutNurseInput, userUncheckedCreateWithoutNurseInput>;
  };

  export type userUpsertWithoutNurseInput = {
    update: XOR<userUpdateWithoutNurseInput, userUncheckedUpdateWithoutNurseInput>;
    create: XOR<userCreateWithoutNurseInput, userUncheckedCreateWithoutNurseInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutNurseInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutNurseInput, userUncheckedUpdateWithoutNurseInput>;
  };

  export type userUpdateWithoutNurseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutUserNestedInput;
    company?: companyUpdateManyWithoutUserNestedInput;
    doctor?: doctorUpdateManyWithoutUserNestedInput;
    staff_member?: staff_memberUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutNurseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutUserNestedInput;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    doctor?: doctorUncheckedUpdateManyWithoutUserNestedInput;
    staff_member?: staff_memberUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutStaff_memberInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedManyWithoutUserInput;
    doctor?: doctorCreateNestedManyWithoutUserInput;
    nurse?: nurseCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutStaff_memberInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutUserInput;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    doctor?: doctorUncheckedCreateNestedManyWithoutUserInput;
    nurse?: nurseUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutStaff_memberInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutStaff_memberInput, userUncheckedCreateWithoutStaff_memberInput>;
  };

  export type userUpsertWithoutStaff_memberInput = {
    update: XOR<userUpdateWithoutStaff_memberInput, userUncheckedUpdateWithoutStaff_memberInput>;
    create: XOR<userCreateWithoutStaff_memberInput, userUncheckedCreateWithoutStaff_memberInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutStaff_memberInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutStaff_memberInput, userUncheckedUpdateWithoutStaff_memberInput>;
  };

  export type userUpdateWithoutStaff_memberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutUserNestedInput;
    company?: companyUpdateManyWithoutUserNestedInput;
    doctor?: doctorUpdateManyWithoutUserNestedInput;
    nurse?: nurseUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutStaff_memberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutUserNestedInput;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    doctor?: doctorUncheckedUpdateManyWithoutUserNestedInput;
    nurse?: nurseUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type appointmentCreateWithoutUserInput = {
    id?: string;
    appointment_date: Date | string;
    appointment_time: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    doctor: doctorCreateNestedOneWithoutAppointmentInput;
  };

  export type appointmentUncheckedCreateWithoutUserInput = {
    id?: string;
    appointment_date: Date | string;
    appointment_time: string;
    doctor_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentCreateOrConnectWithoutUserInput = {
    where: appointmentWhereUniqueInput;
    create: XOR<appointmentCreateWithoutUserInput, appointmentUncheckedCreateWithoutUserInput>;
  };

  export type appointmentCreateManyUserInputEnvelope = {
    data: appointmentCreateManyUserInput | appointmentCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type companyCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyCreateOrConnectWithoutUserInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyCreateManyUserInputEnvelope = {
    data: companyCreateManyUserInput | companyCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type doctorCreateWithoutUserInput = {
    id?: string;
    specialization: string;
    years_of_experience: number;
    working_days: string;
    working_hours: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutDoctorInput;
  };

  export type doctorUncheckedCreateWithoutUserInput = {
    id?: string;
    specialization: string;
    years_of_experience: number;
    working_days: string;
    working_hours: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutDoctorInput;
  };

  export type doctorCreateOrConnectWithoutUserInput = {
    where: doctorWhereUniqueInput;
    create: XOR<doctorCreateWithoutUserInput, doctorUncheckedCreateWithoutUserInput>;
  };

  export type doctorCreateManyUserInputEnvelope = {
    data: doctorCreateManyUserInput | doctorCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type nurseCreateWithoutUserInput = {
    id?: string;
    years_of_experience: number;
    shift: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type nurseUncheckedCreateWithoutUserInput = {
    id?: string;
    years_of_experience: number;
    shift: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type nurseCreateOrConnectWithoutUserInput = {
    where: nurseWhereUniqueInput;
    create: XOR<nurseCreateWithoutUserInput, nurseUncheckedCreateWithoutUserInput>;
  };

  export type nurseCreateManyUserInputEnvelope = {
    data: nurseCreateManyUserInput | nurseCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type staff_memberCreateWithoutUserInput = {
    id?: string;
    position: string;
    years_of_experience: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type staff_memberUncheckedCreateWithoutUserInput = {
    id?: string;
    position: string;
    years_of_experience: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type staff_memberCreateOrConnectWithoutUserInput = {
    where: staff_memberWhereUniqueInput;
    create: XOR<staff_memberCreateWithoutUserInput, staff_memberUncheckedCreateWithoutUserInput>;
  };

  export type staff_memberCreateManyUserInputEnvelope = {
    data: staff_memberCreateManyUserInput | staff_memberCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type appointmentUpsertWithWhereUniqueWithoutUserInput = {
    where: appointmentWhereUniqueInput;
    update: XOR<appointmentUpdateWithoutUserInput, appointmentUncheckedUpdateWithoutUserInput>;
    create: XOR<appointmentCreateWithoutUserInput, appointmentUncheckedCreateWithoutUserInput>;
  };

  export type appointmentUpdateWithWhereUniqueWithoutUserInput = {
    where: appointmentWhereUniqueInput;
    data: XOR<appointmentUpdateWithoutUserInput, appointmentUncheckedUpdateWithoutUserInput>;
  };

  export type appointmentUpdateManyWithWhereWithoutUserInput = {
    where: appointmentScalarWhereInput;
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyWithoutUserInput>;
  };

  export type companyUpsertWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    update: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyUpdateWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    data: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
  };

  export type companyUpdateManyWithWhereWithoutUserInput = {
    where: companyScalarWhereInput;
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyWithoutUserInput>;
  };

  export type companyScalarWhereInput = {
    AND?: companyScalarWhereInput | companyScalarWhereInput[];
    OR?: companyScalarWhereInput[];
    NOT?: companyScalarWhereInput | companyScalarWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
  };

  export type doctorUpsertWithWhereUniqueWithoutUserInput = {
    where: doctorWhereUniqueInput;
    update: XOR<doctorUpdateWithoutUserInput, doctorUncheckedUpdateWithoutUserInput>;
    create: XOR<doctorCreateWithoutUserInput, doctorUncheckedCreateWithoutUserInput>;
  };

  export type doctorUpdateWithWhereUniqueWithoutUserInput = {
    where: doctorWhereUniqueInput;
    data: XOR<doctorUpdateWithoutUserInput, doctorUncheckedUpdateWithoutUserInput>;
  };

  export type doctorUpdateManyWithWhereWithoutUserInput = {
    where: doctorScalarWhereInput;
    data: XOR<doctorUpdateManyMutationInput, doctorUncheckedUpdateManyWithoutUserInput>;
  };

  export type doctorScalarWhereInput = {
    AND?: doctorScalarWhereInput | doctorScalarWhereInput[];
    OR?: doctorScalarWhereInput[];
    NOT?: doctorScalarWhereInput | doctorScalarWhereInput[];
    id?: UuidFilter<'doctor'> | string;
    specialization?: StringFilter<'doctor'> | string;
    years_of_experience?: IntFilter<'doctor'> | number;
    working_days?: StringFilter<'doctor'> | string;
    working_hours?: StringFilter<'doctor'> | string;
    user_id?: UuidFilter<'doctor'> | string;
    created_at?: DateTimeFilter<'doctor'> | Date | string;
    updated_at?: DateTimeFilter<'doctor'> | Date | string;
  };

  export type nurseUpsertWithWhereUniqueWithoutUserInput = {
    where: nurseWhereUniqueInput;
    update: XOR<nurseUpdateWithoutUserInput, nurseUncheckedUpdateWithoutUserInput>;
    create: XOR<nurseCreateWithoutUserInput, nurseUncheckedCreateWithoutUserInput>;
  };

  export type nurseUpdateWithWhereUniqueWithoutUserInput = {
    where: nurseWhereUniqueInput;
    data: XOR<nurseUpdateWithoutUserInput, nurseUncheckedUpdateWithoutUserInput>;
  };

  export type nurseUpdateManyWithWhereWithoutUserInput = {
    where: nurseScalarWhereInput;
    data: XOR<nurseUpdateManyMutationInput, nurseUncheckedUpdateManyWithoutUserInput>;
  };

  export type nurseScalarWhereInput = {
    AND?: nurseScalarWhereInput | nurseScalarWhereInput[];
    OR?: nurseScalarWhereInput[];
    NOT?: nurseScalarWhereInput | nurseScalarWhereInput[];
    id?: UuidFilter<'nurse'> | string;
    years_of_experience?: IntFilter<'nurse'> | number;
    shift?: StringFilter<'nurse'> | string;
    user_id?: UuidFilter<'nurse'> | string;
    created_at?: DateTimeFilter<'nurse'> | Date | string;
    updated_at?: DateTimeFilter<'nurse'> | Date | string;
  };

  export type staff_memberUpsertWithWhereUniqueWithoutUserInput = {
    where: staff_memberWhereUniqueInput;
    update: XOR<staff_memberUpdateWithoutUserInput, staff_memberUncheckedUpdateWithoutUserInput>;
    create: XOR<staff_memberCreateWithoutUserInput, staff_memberUncheckedCreateWithoutUserInput>;
  };

  export type staff_memberUpdateWithWhereUniqueWithoutUserInput = {
    where: staff_memberWhereUniqueInput;
    data: XOR<staff_memberUpdateWithoutUserInput, staff_memberUncheckedUpdateWithoutUserInput>;
  };

  export type staff_memberUpdateManyWithWhereWithoutUserInput = {
    where: staff_memberScalarWhereInput;
    data: XOR<staff_memberUpdateManyMutationInput, staff_memberUncheckedUpdateManyWithoutUserInput>;
  };

  export type staff_memberScalarWhereInput = {
    AND?: staff_memberScalarWhereInput | staff_memberScalarWhereInput[];
    OR?: staff_memberScalarWhereInput[];
    NOT?: staff_memberScalarWhereInput | staff_memberScalarWhereInput[];
    id?: UuidFilter<'staff_member'> | string;
    position?: StringFilter<'staff_member'> | string;
    years_of_experience?: IntFilter<'staff_member'> | number;
    user_id?: UuidFilter<'staff_member'> | string;
    created_at?: DateTimeFilter<'staff_member'> | Date | string;
    updated_at?: DateTimeFilter<'staff_member'> | Date | string;
  };

  export type appointmentCreateManyDoctorInput = {
    id?: string;
    appointment_date: Date | string;
    appointment_time: string;
    patient_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_time?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutAppointmentNestedInput;
  };

  export type appointmentUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_time?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_time?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentCreateManyUserInput = {
    id?: string;
    appointment_date: Date | string;
    appointment_time: string;
    doctor_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyCreateManyUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type doctorCreateManyUserInput = {
    id?: string;
    specialization: string;
    years_of_experience: number;
    working_days: string;
    working_hours: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type nurseCreateManyUserInput = {
    id?: string;
    years_of_experience: number;
    shift: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type staff_memberCreateManyUserInput = {
    id?: string;
    position: string;
    years_of_experience: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_time?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    doctor?: doctorUpdateOneRequiredWithoutAppointmentNestedInput;
  };

  export type appointmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_time?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_time?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type doctorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    years_of_experience?: IntFieldUpdateOperationsInput | number;
    working_days?: StringFieldUpdateOperationsInput | string;
    working_hours?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutDoctorNestedInput;
  };

  export type doctorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    years_of_experience?: IntFieldUpdateOperationsInput | number;
    working_days?: StringFieldUpdateOperationsInput | string;
    working_hours?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutDoctorNestedInput;
  };

  export type doctorUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    years_of_experience?: IntFieldUpdateOperationsInput | number;
    working_days?: StringFieldUpdateOperationsInput | string;
    working_hours?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type nurseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    years_of_experience?: IntFieldUpdateOperationsInput | number;
    shift?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type nurseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    years_of_experience?: IntFieldUpdateOperationsInput | number;
    shift?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type nurseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    years_of_experience?: IntFieldUpdateOperationsInput | number;
    shift?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type staff_memberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    years_of_experience?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type staff_memberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    years_of_experience?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type staff_memberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    years_of_experience?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use DoctorCountOutputTypeDefaultArgs instead
   */
  export type DoctorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    DoctorCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use appointmentDefaultArgs instead
   */
  export type appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    appointmentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use doctorDefaultArgs instead
   */
  export type doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    doctorDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use nurseDefaultArgs instead
   */
  export type nurseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = nurseDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use staff_memberDefaultArgs instead
   */
  export type staff_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    staff_memberDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
