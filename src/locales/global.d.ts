declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.mp4';

type Primitive = string | number | boolean | undefined | null;
type DeepKeyof<T> = T extends Primitive
  ? never
  : {
      [K in keyof T]: K extends string ? `${K}` | `${K}.${DeepKeyof<T[K]>}` : never;
    }[keyof T];
