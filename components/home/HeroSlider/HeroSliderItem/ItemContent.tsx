import React from 'react';
import { Box, makeStyles, Link as MuiLink } from '@material-ui/core';
import classnames from 'classnames';
import Link from 'next/link';

import TextContent from './TextContent';
import { useLinkSwipe } from 'utils/hooks/useLinkSwipe';
import { useRouter } from 'next/router';

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
  const router = useRouter();

  const handleLinkClick = () => {
    router.push(link);
  };

  const { handleClick, handleMouseDown } = useLinkSwipe(handleLinkClick);

  if (link) {
    const isOutsideLink = link.substring(0, 4) === 'http';

    return (
      <Box className={classnames(classes.content, classes.linkedContent)} style={{ textAlign }}>
        {isOutsideLink ? (
          <a
            className={classes.linkedContent}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TextContent title={title} subtitle={subtitle} />
          </a>
        ) : (
          <Link href={link}>
            <MuiLink
              className={classes.linkedContent}
              onClick={handleClick}
              onMouseDown={handleMouseDown}
            >
              <TextContent title={title} subtitle={subtitle} />
            </MuiLink>
          </Link>
        )}
      </Box>
    );
  }

  return (
    <Box className={classnames(classes.content)} style={{ textAlign }}>
      <TextContent title={title} subtitle={subtitle} />
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  content: {
    textAlign: 'initial',
    padding: theme.spacing(2)
  },
  linkedContent: {
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.7,
      transition: 'opacity 300ms',
      textDecoration: 'none'
    }
  }
}));

export default ItemContent;
