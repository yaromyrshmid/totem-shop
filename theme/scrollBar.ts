import { makeStyles } from '@material-ui/core';

export const useScrollBarStyles = makeStyles((theme) => ({
  vertical: {
    '&::-webkit-scrollbar': {
      height: 10
    },
    '&::-webkit-scrollbar-thumb': {
      background: theme.palette.primary.main,
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: theme.palette.common.white
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: theme.palette.secondary.main
    }
  }
}));
