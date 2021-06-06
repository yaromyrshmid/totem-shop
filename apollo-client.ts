import { ApolloClient, InMemoryCache } from '@apollo/client';

const CONTENTFUL_API = 'https://graphql.contentful.com/content/v1/spaces';

export const apolloClient = new ApolloClient({
  uri: `${CONTENTFUL_API}/${process.env.CONTENTFUL_SPACE_ID}?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  cache: new InMemoryCache()
});
