import gql from 'graphql-tag';

import { apolloClient } from '../../apollo-client';
import { Collection } from './core/Collection';
import { HeroSlide } from '../types/HeroSlide';

export abstract class HeroSlidesRepo {
  static async get() {
    const collection: Collection<HeroSlide> = await apolloClient.query({
      query: gql`
        query HeroSlider {
          heroSliderCollection {
            items {
              sys {
                id
              }
              title
              subtitle
              position
              textAlign
              link
              image {
                url
              }
            }
          }
        }
      `
    });

    return collection.data.heroSliderCollection.items;
  }
}
