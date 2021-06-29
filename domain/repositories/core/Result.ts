export type Result<T> = {
  data: {
    [key: string]: T;
  };
};
