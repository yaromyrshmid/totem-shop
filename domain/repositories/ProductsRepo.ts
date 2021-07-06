import gql from 'graphql-tag';

import { apolloClient } from '../../apollo-client';
import { Product, ProductIdOnly, ProductSlugOnly } from 'domain/types';
import { Collection } from './core/Collection';
import { Result } from './core/Result';

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

  static async getIdBySlug(slug: string) {
    const collection: Collection<ProductIdOnly> = await apolloClient.query({
      query: gql`
        query Query($productCollectionWhere: ProductFilter) {
          productCollection(where: $productCollectionWhere) {
            items {
              sys {
                id
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

    return collection.data.productCollection.items[0]?.sys.id;
  }

  static async getById(productId: string) {
    const result: Result<Product> = await apolloClient.query({
      query: gql`
        query Query($productId: String!) {
          product(id: $productId) {
            sys {
              id
            }
            name
            slug
            price
            description {
              json
            }
            mainImage {
              url
            }
            imagesCollection {
              items {
                url
              }
            }
            category {
              name
              slug
            }
            youMayAlsoLikeCollection {
              items {
                name
                slug
                price
                mainImage {
                  url
                }
                sys {
                  id
                }
                category {
                  slug
                }
              }
            }
            colorsCollection {
              items {
                sys {
                  id
                }
                color
                hexColor
                slug
                mainImage {
                  url
                }
                imagesCollection {
                  items {
                    url
                  }
                }
                available
              }
            }
            available
          }
        }
      `,
      variables: {
        productId
      }
    });

    return result.data.product;
  }
}
