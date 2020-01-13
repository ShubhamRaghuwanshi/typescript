// Partial<T>
// Readonly<T>
// Record<K,T>
// Pick<T,K>
// Omit<T,K>
// Exclude<T,U>
// NonNullable<T>
// Required<T>

interface Props {
  a?: number;
  b?: string;
};

const obj: Props = { a: 5 }; // OK

const obj2: Required<Props> = { a: 5 };