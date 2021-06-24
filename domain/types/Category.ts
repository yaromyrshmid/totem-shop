export type Category = {
  sys: {
    id: string;
  };
  name: string;
  slug: string;
  image: {
    url: string;
    title: string;
  };
};

export type CategorySlugOnly = {
  slug: string;
};
