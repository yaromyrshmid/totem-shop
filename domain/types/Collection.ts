export type Collection<T> = {
  data: {
    [key: string]: {
      __typename: string;
      items: Array<T>;
    };
  };
};
