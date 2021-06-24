import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

import { Category } from 'domain/types';
import CustomA from 'components/ui/links/CustomA';
import Link from 'next/link';

interface CategoryNavigationItemProps {
  category: Category;
  isSelected?: boolean;
}

const CategoryNavigationItem: React.FC<CategoryNavigationItemProps> = ({
  category: { slug, name },
  isSelected = false
}): JSX.Element => {
  const classes = useStyles();

  if (isSelected) {
    return (
      <Typography variant="h5" component="h2">
        {name}
      </Typography>
    );
  }

  return (
    <Link href={`/shop/${slug}`} passHref>
      <CustomA>
        <Typography color="textSecondary" className={classes.text} variant="h5" component="h2">
          {name}
        </Typography>
      </CustomA>
    </Link>
  );
};

const useStyles = makeStyles((theme) => ({
  text: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    ['&:hover']: {
      textDecoration: 'underline'
    }
  }
}));

export default CategoryNavigationItem;
