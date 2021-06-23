import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container, GridList, GridListTile, Typography, Box } from '@material-ui/core';

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

  useEffect(() => {
    const rest =
      columnsForScreens[breakpoint] - (categories.length % columnsForScreens[breakpoint]);

    const emptyTilesCount = columnsForScreens[breakpoint] === rest ? 0 : rest;

    setEmptyTiles(Array.apply(null, Array(emptyTilesCount)).map((_, index) => ({ id: index })));
  }, [breakpoint, categories]);

  return (
    <Container>
      <Box mb={4}>
        <Typography variant="h4" component="h2">
          Магазин:
        </Typography>
      </Box>

      <GridList cellHeight={160} cols={columnsForScreens[breakpoint]}>
        {categories.map((category) => (
          <GridListTile key={category.sys.id}>
            <Link
              href={{
                pathname: `/shop/${category.slug}`
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
