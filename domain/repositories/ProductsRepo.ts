import gql from 'graphql-tag';

import { apolloClient } from '../../apollo-client';
import { Product, ProductSlugOnly } from 'domain/types';
import { Collection } from './core/Collection';

export abstract class ProductsRepo {
  static async getSlugs() {
    const collection: Collection<ProductSlugOnly> = await apolloClient.query({
      query: gql`
        query Query {
          productCollection {
            items {
              slug
              category {
                slug
              }
            }
          }
        }
      `
    });

    return collection.data.productCollection.items;
  }

  static async getBySlug(slug: string) {
    const collection: Collection<Product> = await apolloClient.query({
      query: gql`
        query Query($productCollectionWhere: ProductFilter) {
          productCollection(where: $productCollectionWhere) {
            items {
              name
              price
              description {
                json
              }
              mainImage {
                url
              }
              colorsCollection {
                items {
                  color
                  slug
                  available
                  sys {
                    id
                  }
                }
              }
            }
          }
        }
      `,
      variables: {
        productCollectionWhere: {
          slug
        }
      }
    });

    return collection.data.productCollection.items[0];
  }
}
