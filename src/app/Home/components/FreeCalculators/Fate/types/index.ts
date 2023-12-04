export interface Response {
  a: number;
  a1: number;
  a2: number;
  a3: number;
  b: number;
  b1: number;
  b2: number;
  b3: number;
  c: number;
  c1: number;
  c2: number;
  d: number;
  d1: number;
  d2: number;
  e: number;
  e1: number;
  e2: number;
  f: number;
  f1: number;
  f2: number;
  g: number;
  g1: number;
  g2: number;
  h: number;
  h1: number;
  h2: number;
  i: number;
  i1: number;
  i2: number;
  x: number;
  x1: number;
  x2: number;
}

export interface Combinations {
  response?: Response;
}

export interface CalculationsDefaultState {
  combinations?: Response;
  isLoading: boolean;
  errors: string;
}
