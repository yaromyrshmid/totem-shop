import { useMediaQuery, useTheme } from '@material-ui/core';

type screen = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const useWidth = (): screen => {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();

  return (
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));

      return output === 'xs' && matches ? key : output;
    }, 'xs') || 'xs'
  );
};
