import palette from './palette';

const thumbStyles = {
  '&::-webkit-scrollbar-thumb': {
    background: palette.primary.main,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: palette.common.white
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: palette.secondary.main
  }
};

export const scrollBarStyles = {
  horizontal: {
    '&::-webkit-scrollbar': {
      height: 10
    },
    ...thumbStyles
  },
  vertical: {
    '&::-webkit-scrollbar': {
      width: 10
    },
    ...thumbStyles
  }
};
