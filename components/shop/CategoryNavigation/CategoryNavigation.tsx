import React from 'react';
import { Container, Typography, makeStyles, Box } from '@material-ui/core';

import { Category } from 'domain/types';
import CategoryNavigationItem from './CategoryNavigationItem';

interface CategoryNavigationProps {
  categories: Array<Category>;
  categorySlug: string;
}

const CategoryNavigation: React.FC<CategoryNavigationProps> = ({
  categories,
  categorySlug
}): JSX.Element => {
  const classes = useStyles();

  const selectedCategory = categories?.find(({ slug }) => slug === categorySlug);

  return (
    <Container>
      <Box className={classes.navigationContainer}>
        {categories.map((category) => (
          <CategoryNavigationItem
            category={category}
            key={category.sys.id}
            isSelected={categorySlug === category.slug}
          />
        ))}
      </Box>

      <Typography variant="h3" component="h1" className={classes.title}>
        {selectedCategory?.name}
      </Typography>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  navigationContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  title: {
    textAlign: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}));

export default CategoryNavigation;
