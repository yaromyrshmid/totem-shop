import React, { useLayoutEffect, useState } from 'react';
import Link from 'next/link';
import { Container, GridList, GridListTile } from '@material-ui/core';

import { Category } from 'domain/types';
import CategoryTileItem from './CategoryTileItem';
import { useWidth } from 'utils/hooks/useWidth';
import CustomA from 'components/ui/links/CustomA';
import EmptyTile from './EmptyTile';

interface CategoryTilesProps {
  categories: Array<Category>;
}

interface IEmptyTile {
  id: number;
}

const columnsForScreens = {
  xs: 2,
  sm: 3,
  md: 4,
  lg: 5,
  xl: 5
};

const CategoryTiles: React.FC<CategoryTilesProps> = ({ categories }): JSX.Element => {
  const breakpoint = useWidth();
  const [emtyTiles, setEmptyTiles] = useState<IEmptyTile[] | []>([]);

  useLayoutEffect(() => {
    const rest =
      columnsForScreens[breakpoint] - (categories.length % columnsForScreens[breakpoint]);

    setEmptyTiles(Array.apply(null, Array(rest)).map((_, index) => ({ id: index })));

    console.log(Array(rest));
  }, [breakpoint, categories]);

  return (
    <Container>
      <GridList cellHeight={160} cols={columnsForScreens[breakpoint]}>
        {categories.map((category) => (
          <GridListTile key={category.sys.id}>
            <Link
              href={{
                pathname: '/shop',
                query: { categories: [category.slug] }
              }}
              passHref
            >
              <CustomA>
                <CategoryTileItem category={category} />
              </CustomA>
            </Link>
          </GridListTile>
        ))}

        {emtyTiles.map(({ id }) => (
          <GridListTile key={id}>
            <EmptyTile />
          </GridListTile>
        ))}
      </GridList>
    </Container>
  );
};

export default CategoryTiles;
