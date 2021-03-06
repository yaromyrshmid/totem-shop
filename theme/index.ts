import { createMuiTheme } from '@material-ui/core/styles';

import palette from './palette';
import overrides from './overrides';
import typography from './typography';

const themeProps = {
  palette,
  overrides,
  typography
};

export const theme = createMuiTheme(themeProps);
