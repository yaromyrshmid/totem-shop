import React from "react"
import { Row } from "react-bootstrap"

import ProductPreview from "../Shop/ProductPreview"

const OtherColors = ({ otherColors }) => {
  return (
    <>
      {otherColors.length > 0 && (
        <>
          <h4>Other Colors:</h4>
          <Row>
            {otherColors.map(({ node }) => {
              return <ProductPreview key={node.id} product={node} />
            })}
          </Row>
        </>
      )}
    </>
  )
}

export default OtherColors
