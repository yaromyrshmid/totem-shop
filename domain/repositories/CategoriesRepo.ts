import gql from 'graphql-tag';

import { apolloClient } from '../../utils/apollo/apollo-client';
import { Category, CategorySlugOnly } from 'domain/types';
import { Collection } from './core/Collection';

export abstract class CategoriesRepo {
  static async get() {
    const collection: Collection<Category> = await apolloClient.query({
      query: gql`
        query Query($categoriesCollectionOrder: [CategoriesOrder]) {
          categoriesCollection(order: $categoriesCollectionOrder) {
            items {
              sys {
                id
              }
              name
              slug
              image {
                url
                title
              }
            }
          }
        }
      `,
      variables: {
        categoriesCollectionOrder: 'name_DESC'
      }
    });

    return collection.data.categoriesCollection.items;
  }

  static async getSlugs() {
    const collection: Collection<CategorySlugOnly> = await apolloClient.query({
      query: gql`
        query Query {
          categoriesCollection {
            items {
              slug
            }
          }
        }
      `
    });

    return collection.data.categoriesCollection.items;
  }
}
