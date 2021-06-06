export interface IRepo<T> {
  get(): Promise<Array<T>>;
}
