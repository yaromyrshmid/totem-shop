import { ApolloClient } from '@apollo/client';

import { cache } from './cache';

const CONTENTFUL_API = 'https://graphql.contentful.com/content/v1/spaces';

export const apolloClient = new ApolloClient({
  uri: `${CONTENTFUL_API}/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
  cache
});
