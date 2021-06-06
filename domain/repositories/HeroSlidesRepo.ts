import gql from 'graphql-tag';

import { apolloClient } from '../../apollo-client';
import { Collection } from '../types/Collection';
import { HeroSlide } from '../types/HeroSlide';
import { IRepo } from './core/Repo';

interface IHeroSlidesRepo extends IRepo<HeroSlide> {}

export const HeroSlidesRepo: IHeroSlidesRepo = {
  async get() {
    const collection: Collection<HeroSlide> = await apolloClient.query({
      query: gql`
        query HeroSlider {
          heroSliderCollection {
            items {
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
};
