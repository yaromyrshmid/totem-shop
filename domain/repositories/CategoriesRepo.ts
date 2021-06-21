import gql from 'graphql-tag';

import { apolloClient } from '../../apollo-client';
import { Category } from 'domain/types';
import { Collection } from './core/Collection';
import { IRepo } from './core/Repo';

interface ICategoriesRepo extends IRepo<Category> {}

export const CategoriesRepo: ICategoriesRepo = {
  async get() {
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
};
