import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import Link from 'next/link';

import { ColorPreview } from 'domain/types';
import CustomA from 'components/ui/links/CustomA';

interface ColorPanelProps {
  productSlug: string;
  colors?: Array<ColorPreview>;
  colorSlug?: string;
}

const ColorPanel: React.FC<ColorPanelProps> = ({ colors, productSlug, colorSlug }): JSX.Element => {
  const classes = useStyles();

  if (!colors || !colors.length || !colorSlug) return <></>;

  return (
    <Box className={classes.container}>
      {colors.map((color) => (
        <Link href={`${productSlug}?color=${color.slug}`} passHref key={color.sys.id}>
          <CustomA>
            <Box className={classes.item} style={{ backgroundColor: color.hexColor }}>
              {colorSlug === color.slug && <Box className={classes.activeBorder} />}
            </Box>
          </CustomA>
        </Link>
      ))}
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    gap: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  item: {
    height: 20,
    width: 20,
    borderRadius: '50%',
    position: 'relative'
  },
  activeBorder: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    height: '140%',
    width: '140%',
    borderRadius: '50%',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: theme.palette.primary.main
  }
}));

export default ColorPanel;
