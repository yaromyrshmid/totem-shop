import gql from 'graphql-tag';

import { apolloClient } from '../../apollo-client';
import { Collection } from './core/Collection';
import { PageMeta } from 'domain/types/PageMeta';

const DEFAULT_SLUG = 'index';

export abstract class PageMetaRepo {
  private static async getBySlug(slug: string) {
    const collection: Collection<PageMeta> = await apolloClient.query({
      query: gql`
        query Query($metaDataCollectionWhere: MetaDataFilter) {
          metaDataCollection(where: $metaDataCollectionWhere) {
            items {
              sys {
                id
              }
              slug
              pageTitle
              instagramUrl
              viber
              telegram
              phoneNumber
            }
          }
        }
      `,
      variables: {
        metaDataCollectionWhere: {
          slug: slug
        }
      }
    });

    return collection.data.metaDataCollection.items[0];
  }

  static getDefault() {
    return this.getBySlug(DEFAULT_SLUG);
  }
}
