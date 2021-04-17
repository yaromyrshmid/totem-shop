import React from 'react';
import { Box, Container, makeStyles, Typography, useTheme } from '@material-ui/core';
import { useStaticQuery, graphql } from 'gatsby';

import Carousel from '../../ui/Carousel';
import { ProductPreview as ProductPreviewType, IProductPreviewNode } from '../../../types/Product';
import ProductPreview from '../../Shop/components/ProductPreview';

const getFeaturedProducts = graphql`
  query {
    products: allContentfulProduct(
      filter: { featured: { eq: true }, available: { eq: true } }
      sort: { fields: updatedAt, order: DESC }
    ) {
      edges {
        node {
          id
          name
          price
          slug
          mainImage {
            fluid(maxWidth: 800) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

const FeaturedProducts: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const {
    breakpoints: { values: breakpoints }
  } = useTheme();

  const products: Array<ProductPreviewType> = useStaticQuery(
    getFeaturedProducts
  ).products.edges.map(({ node }: IProductPreviewNode) => node);

  return (
    <>
      <Container>
        <Box mt={4}>
          <Typography variant="h4" component="h2">
            Новинки:
          </Typography>
        </Box>
      </Container>

      <Box>
        <Carousel
          settings={{
            slidesToScroll: 1,
            slidesToShow: 1,
            arrows: false,
            infinite: false,
            responsive: [
              {
                breakpoint: breakpoints.sm,
                settings: {
                  slidesToShow: 1
                }
              },
              {
                breakpoint: breakpoints.lg,
                settings: {
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 10000,
                settings: {
                  slidesToShow: 3
                }
              }
            ]
          }}
        >
          {products.map((product) => (
            <ProductPreview
              product={product}
              key={product.id}
              useNativeLinking
              containerClassName={classes.featuredItemContainer}
            />
          ))}
        </Carousel>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6)
  },
  featuredItemContainer: {
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(6)
  }
}));

export default FeaturedProducts;
