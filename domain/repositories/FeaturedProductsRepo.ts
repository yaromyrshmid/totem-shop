import gql from 'graphql-tag';

import { apolloClient } from '../../apollo-client';
import { Collection } from '../types/Collection';
import { ProductPreview } from '../types/ProductPreview';
import { IRepo } from './core/Repo';

interface IFeaturedProductsRepo extends IRepo<ProductPreview> {}

export const FeaturedProductsRepo: IFeaturedProductsRepo = {
  async get() {
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
};
