import React from 'react';
import { Card, makeStyles, Box, Typography } from '@material-ui/core';
import Link from 'next/link';
import Image from 'next/image';

import CustomA from 'components/ui/links/CustomA';
import { ProductPreview } from 'domain/types';

interface ProductCardProps {
  product: ProductPreview;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product: {
    slug,
    mainImage: { url },
    price,
    name
  }
}): JSX.Element => {
  const classes = useStyles();

  return (
    <Link href={slug} passHref>
      <CustomA>
        <Card>
          <Box className={classes.imageContainer}>
            <Image src={url} layout="fill" objectFit="cover" quality={100} />
          </Box>

          <Box className={classes.content}>
            <Typography variant="h6" component="h3">
              {name}
            </Typography>

            <Typography variant="h6" component="p" color="secondary">
              {price} грн.
            </Typography>
          </Box>
        </Card>
      </CustomA>
    </Link>
  );
};

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    height: 200,
    width: '100%',
    overflow: 'hidden',
    position: 'relative'
  },
  content: {
    width: '100%',
    padding: theme.spacing(2)
  }
}));

export default ProductCard;
