import { useMemo } from 'react';
import { ApolloError, gql, useQuery, useReactiveVar } from '@apollo/client';

import { CartProduct, CartProductWQuantity, ColoredCartProduct } from 'domain/types';
import { cartVar } from 'utils/apollo/cartVar';

const GET_CART_PRODUCTS = gql`
  query CartProductsQuery(
    $productCollectionWhere: ProductFilter
    $coloredProductCollectionWhere: ColoredProductFilter
    $productCollectionLimit: Int
  ) {
    productCollection(where: $productCollectionWhere) {
      items {
        sys {
          id
        }
        name
        slug
        price
        mainImage {
          url
        }
        category {
          slug
        }
      }
    }
    coloredProductCollection(where: $coloredProductCollectionWhere) {
      items {
        sys {
          id
        }
        color
        slug
        mainImage {
          url
        }
        linkedFrom {
          productCollection(limit: $productCollectionLimit) {
            items {
              sys {
                id
              }
              name
              slug
              price
              category {
                slug
              }
            }
          }
        }
      }
    }
  }
`;

type CartQueryResponse = {
  productCollection: {
    items: CartProduct[];
  };
  coloredProductCollection: {
    items: ColoredCartProduct[];
  };
};

type CartProductsHookResult = {
  loading: boolean;
  error: ApolloError | undefined;
  products: CartProductWQuantity[];
};

export const useCartProducts = (): CartProductsHookResult => {
  const cartItems = useReactiveVar(cartVar);

  const { loading, error, data } = useQuery<CartQueryResponse>(GET_CART_PRODUCTS, {
    variables: {
      productCollectionWhere: {
        sys: {
          id_in: cartItems.map(({ id }) => id)
        }
      },
      coloredProductCollectionWhere: {
        sys: {
          id_in: cartItems.map(({ id }) => id)
        }
      },
      productCollectionLimit: 1
    },
    ssr: false
  });

  const productsNormalized = useMemo(
    () =>
      data
        ? [
            ...transformeColoredProducts(data.coloredProductCollection.items),
            ...data.productCollection.items
          ]
        : [],
    [data]
  );

  const productsWithQuantity = useMemo(
    () =>
      productsNormalized.map((product) => ({
        ...product,
        quantity: cartItems.find(({ id }) => id === product.sys.id)?.quantity || 0
      })),
    [productsNormalized, cartItems]
  );

  return {
    loading,
    error,
    products: productsWithQuantity
  };
};

const transformeColoredProducts = (coloredProducts: ColoredCartProduct[]): CartProduct[] =>
  coloredProducts.map(transformColored);

const transformColored = ({
  color,
  sys,
  mainImage,
  linkedFrom: {
    productCollection: {
      items: [product]
    }
  }
}: ColoredCartProduct): CartProduct => ({
  sys,
  name: `${product.name} - ${color}`,
  price: product.price,
  slug: `${product.slug}?color=${color}`,
  category: product.category,
  mainImage
});
