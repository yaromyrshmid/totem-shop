import React from 'react';
import { Box } from '@material-ui/core';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { RichText } from 'domain/types';

interface ProductDescriptionProps {
  description: RichText;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ description }): JSX.Element => {
  return <Box>{documentToReactComponents(description.json)}</Box>;
};

export default ProductDescription;
