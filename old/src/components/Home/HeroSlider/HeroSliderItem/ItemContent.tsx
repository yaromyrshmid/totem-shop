import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import classnames from 'classnames';

import NativeLink from '../../../ui/NativeLink';
import CustomLink from '../../../ui/CustomLink';
import TextContent from './TextContent';

const useStyles = makeStyles((theme) => ({
  content: {
    textAlign: 'initial',
    padding: theme.spacing(2)
  },
  linkedContent: {
    '&:hover': {
      opacity: 0.7,
      transition: 'opacity 300ms',
      textDecoration: 'none'
    }
  }
}));

interface ItemContentProps {
  title: string;
  subtitle?: string;
  link: string;
  textAlign: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
}

const ItemContent: React.FC<ItemContentProps> = ({
  title,
  subtitle,
  link,
  textAlign
}: ItemContentProps): JSX.Element => {
  const classes = useStyles();

  if (link) {
    const LinkComponent = link.substring(0, 4) === 'http' ? NativeLink : CustomLink;

    return (
      <Box className={classnames(classes.content, classes.linkedContent)} style={{ textAlign }}>
        <LinkComponent to={link} className={classes.linkedContent}>
          <TextContent title={title} subtitle={subtitle} />
        </LinkComponent>
      </Box>
    );
  }

  return (
    <Box className={classnames(classes.content)} style={{ textAlign }}>
      <TextContent title={title} subtitle={subtitle} />
    </Box>
  );
};

export default ItemContent;
