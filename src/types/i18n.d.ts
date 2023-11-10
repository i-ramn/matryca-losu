export type FlattenKeys<T extends Record<string, unknown>, Key = keyof T> = Key extends string
  ? T[Key] extends Record<string, unknown>
    ? Key | `${Key}.${FlattenKeys<T[Key]>}`
    : Key
  : never;

export type MessageIds = FlattenKeys<typeof import('@/locales/pl.json')>;

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: MessageIds;
    }
  }
}

export {};
