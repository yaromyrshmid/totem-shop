import React from 'react';
import { Breadcrumbs, Link as MuiLink, Typography, Box, makeStyles } from '@material-ui/core';
import Link from 'next/link';

interface ProductBreadcrumbsProps {
  categoryName: string;
  categorySlug: string;
  productName: string;
}

const ProductBreadcrumbs: React.FC<ProductBreadcrumbsProps> = ({
  categoryName,
  categorySlug,
  productName
}): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link href="/shop" passHref>
          <MuiLink color="inherit">Магазин</MuiLink>
        </Link>

        <Link href={`/shop/${categorySlug}`} passHref>
          <MuiLink color="inherit">{categoryName}</MuiLink>
        </Link>
        <Typography color="textPrimary">{productName}</Typography>
      </Breadcrumbs>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3)
    }
  }
}));

export default ProductBreadcrumbs;
