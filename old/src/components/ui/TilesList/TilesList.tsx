import React from 'react';
import { GatsbyImageFluidProps } from 'gatsby-image';

interface TilesListProps {
  items: Array<TileItem>;
}

export interface TileItem {
  name: string;
  slug: string;
  id: string;
  image: GatsbyImageFluidProps;
}

const TilesList: React.FC<TilesListProps> = ({ items }): JSX.Element => {
  return (
    <div>
      <p>test</p>
    </div>
  );
};

export default TilesList;
