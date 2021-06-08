import React from 'react';

import { Category } from 'domain/types';

interface CategoryTilesProps {
  categories: Array<Category>;
}

const CategoryTiles: React.FC<CategoryTilesProps> = ({ categories }): JSX.Element => {
  return (
    <div>
      <p>test</p>
    </div>
  );
};

export default CategoryTiles;
