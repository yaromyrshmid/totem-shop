import { gql, useQuery, useReactiveVar } from '@apollo/client';
import { CartProduct, ColoredCartProduct } from 'domain/types';

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

export const useCartProducts = () => {
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
    }
  });

  return {
    loading,
    error,
    products: data ? [...data.coloredProductCollection.items, ...data.productCollection.items] : []
  };
};
