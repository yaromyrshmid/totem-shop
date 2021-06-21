import gql from 'graphql-tag';

import { apolloClient } from '../../apollo-client';
import { Collection } from './core/Collection';
import { IRepo } from './core/Repo';
import { PageMeta } from 'domain/types/PageMeta';

interface IMetaRepo extends IRepo<PageMeta> {
  getBySlug(slug: string): Promise<PageMeta>;
}

export const PageMetaRepo: IMetaRepo = {
  async get() {
    const collection: Collection<PageMeta> = await apolloClient.query({
      query: gql`
        query Query {
          metaDataCollection {
            items {
              pageName
              sys {
                id
              }
            }
          }
        }
      `
    });

    return collection.data.metaDataCollection.items;
  },

  async getBySlug(slug: string) {
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
};
