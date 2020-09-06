import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import { Row, Button } from "react-bootstrap"
import styled from "gatsby-plugin-styled-components"
import { connect } from "react-redux"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components//UI/Title"
import Carousel from "../components/Product/Carousel"
import YouMayAlsoLike from "../components/Product/YouMayAlsoLike"
import * as actions from "../state/actions/cart"

const Product = props => {
  const data = props.data
  console.log(data)
  const [currentImage, setCurrentImage] = useState(0)
  const [currentColor, setCurrentColor] = useState(
    data.product.colors ? data.product.colors[0] : null
  )

  //Availability
  const [available, setAvailable] = useState(true)
  const availabilityFromSena = []
  // const availabilityFromSena = data.availabilitySena.edges[2].node.array.filter(
  //   product => {
  //     return product.name === data.product.name
  //   }
  // )
  //Disabling buy button for colors/products that are not available
  useEffect(() => {
    if (data.product.getAvailabilityFromSena && availabilityFromSena) {
      setAvailable(false)
      availabilityFromSena[0].colors.forEach(color => {
        if (color.color === currentColor) {
          if (color.quantity > 0) {
            setAvailable(true)
          }
        }
      })
    }
    if (data.product.notAvailable) {
      setAvailable(false)
    }
    if (data.product.notAvailableColors) {
      setAvailable(true)
      data.product.notAvailableColors.forEach(color => {
        if (color === currentColor) {
          setAvailable(false)
        }
      })
    }
  }, [currentColor])

  //Cart
  const handleAddToCart = () => {
    const item = {
      name: data.product.name,
      price: data.product.price,
      color: currentColor,
      image: data.product.images[currentImage],
      id: `${data.product.name}-${currentColor}`,
      quantity: 1,
      slug: data.product.slug,
    }
    if (!(props.cart.findIndex(product => product.id === item.id) > -1)) {
      props.addToCart(item)
    }
    props.toggleCart()
  }

  const handleColorChange = event => {
    const activeImage = data.product.images.findIndex(
      image => image.description === event.target.value
    )
    setCurrentImage(activeImage > -1 && activeImage)
    setCurrentColor(event.target.value)
  }

  return (
    <Layout>
      <SEO title="" />
      <div>
        <Link to="/shop">назад до Магазину</Link>
      </div>
      <Title title={data.product.name} />
      <div>
        <p>{data.product.price} грн.</p>
        {data.product.colors && (
          <div>
            <p>Колір:</p>
            {data.product.colors.map((color, index) => (
              <div key={`color-${index}`}>
                <input
                  type="radio"
                  name="colors"
                  value={color}
                  defaultChecked={index === 0 ? true : false}
                  onChange={handleColorChange}
                />
                <label>
                  {color}
                  {data.product.notAvailableColors
                    ? data.product.notAvailableColors.includes(color) && (
                        <p>немає в наявності</p>
                      )
                    : null}
                </label>
              </div>
            ))}
          </div>
        )}

        <Button onClick={handleAddToCart} disabled={!available}>
          {available ? "Додати в кошик" : "Немає в наявності"}
        </Button>
      </div>
      <Carousel images={data.product.images} currentSlide={currentImage} />
      <YouMayAlsoLike
        youMayAlsoLike={data.product.youMayAlsoLike}
        referenced={data.referenced.edges}
      />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    product: contentfulProduct(slug: { eq: $slug }) {
      id
      name
      slug
      price
      colors
      description {
        json
      }
      category {
        category
      }
      images {
        id
        fluid {
          ...GatsbyContentfulFluid
        }
        description
      }
      youMayAlsoLike {
        name
        slug
        price
        category {
          slug
        }
        id
        images {
          fluid {
            ...GatsbyContentfulFluid
            src
          }
        }
      }
      getAvailabilityFromSena
      notAvailable
      notAvailableColors
    }

    referenced: allContentfulProduct(
      filter: { youMayAlsoLike: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      edges {
        node {
          name
          slug
          price
          colors
          category {
            slug
          }
          id
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }

    availabilitySena: allShopComplects {
      edges {
        node {
          array {
            name
            colors {
              color
              quantity
            }
          }
        }
      }
    }
  }
`

const mapStateToProps = state => {
  return {
    cart: state.cart,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: item => dispatch(actions.addToCart(item)),
    toggleCart: () => dispatch(actions.toggleCart()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product)
