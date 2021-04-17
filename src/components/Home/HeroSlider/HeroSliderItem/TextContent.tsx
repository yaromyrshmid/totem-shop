import { Typography } from '@material-ui/core';
import React from 'react';

interface TextContentProps {
  title: string;
  subtitle?: string;
}

const TextContent: React.FC<TextContentProps> = ({
  title,
  subtitle
}: TextContentProps): JSX.Element => (
  <>
    <Typography variant="h2" component="h1" color="primary">
      {title}
    </Typography>

    {!!subtitle && (
      <Typography variant="h3" component="h2" color="secondary">
        {subtitle}
      </Typography>
    )}
  </>
);

export default TextContent;
