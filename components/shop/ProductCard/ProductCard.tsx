import React from 'react';
import { Card, makeStyles, Box, Typography } from '@material-ui/core';
import Link from 'next/link';
import Image from 'next/image';

import CustomA from 'components/ui/links/CustomA';
import { ColorPreview, ProductPreview } from 'domain/types';
import ColorPanel from './ColorPanel';

interface ProductCardProps {
  product: ProductPreview;
  colors?: Array<ColorPreview>;
  colorSlug?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product: {
    slug,
    mainImage: { url },
    price,
    name
  },
  colors,
  colorSlug
}): JSX.Element => {
  const classes = useStyles();

  return (
    <Link href={colorSlug ? `${slug}?color=${colorSlug}` : slug} passHref>
      <CustomA>
        <Card className={classes.card}>
          <Box className={classes.imageContainer}>
            <Image src={url} layout="fill" objectFit="cover" quality={100} />
          </Box>

          <Box className={classes.content}>
            <ColorPanel colors={colors} colorSlug={colorSlug} productSlug={slug} />

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
  card: {
    height: '100%'
  },
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
