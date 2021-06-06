import React from "react"
import { Row } from "react-bootstrap"

import ProductPreview from "../Shop/ProductPreview"

const YouMayAlsoLike = ({ youMayAlsoLike, referenced }) => {
  return (
    <>
      {(youMayAlsoLike || referenced) && (
        <>
          <h4>You may also like:</h4>
          <Row>
            {youMayAlsoLike &&
              youMayAlsoLike.map(item => {
                return <ProductPreview key={item.id} product={item} />
              })}
            {referenced &&
              referenced.map(({ node }) => {
                return <ProductPreview key={node.id} product={node} />
              })}
          </Row>
        </>
      )}
    </>
  )
}

export default YouMayAlsoLike
