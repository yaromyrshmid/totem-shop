import gql from 'graphql-tag';

import { apolloClient } from '../../apollo-client';
import { Collection } from './core/Collection';
import { ProductPreview } from '../types/ProductPreview';

export class ProductPreviewsRepo {
  static async getFeaturedProducts() {
    const collection: Collection<ProductPreview> = await apolloClient.query({
      query: gql`
        query FeaturedProducts(
          $productCollectionWhere: ProductFilter
          $productCollectionOrder: [ProductOrder]
        ) {
          productCollection(where: $productCollectionWhere, order: $productCollectionOrder) {
            items {
              sys {
                id
              }
              name
              slug
              price
              mainImage {
                url
              }
            }
          }
        }
      `,
      variables: {
        productCollectionWhere: {
          featured: true,
          available: true
        },
        productCollectionOrder: 'sys_publishedAt_DESC'
      }
    });

    return collection.data.productCollection.items;
  }

  static async getProductsByCategorySlug(slug: string) {
    const collection: Collection<ProductPreview> = await apolloClient.query({
      query: gql`
        query Query($productCollectionWhere: ProductFilter) {
          productCollection(where: $productCollectionWhere) {
            items {
              sys {
                id
              }
              name
              slug
              price
              mainImage {
                url
              }
            }
          }
        }
      `,
      variables: {
        productCollectionWhere: {
          category: {
            slug
          }
        },
        productCollectionOrder: 'sys_publishedAt_DESC'
      }
    });

    return collection.data.productCollection.items;
  }
}
