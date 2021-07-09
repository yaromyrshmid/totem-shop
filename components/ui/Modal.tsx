import React from 'react';
import { makeStyles, Dialog, DialogTitle, DialogActions, DialogContent } from '@material-ui/core';
import { scrollBarStyles } from 'theme/scrollBar';

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  title?: string;
  actionsComponent?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  open,
  children,
  title,
  actionsComponent
}): JSX.Element => {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      BackdropProps={{
        classes: {
          root: classes.backdrop
        }
      }}
      PaperProps={{
        classes: {
          root: classes.container
        }
      }}
    >
      {!!title && <DialogTitle className={classes.titleContainer}>{title}</DialogTitle>}

      <DialogContent className={classes.contentContainer}>{children}</DialogContent>

      {!!actionsComponent && (
        <DialogActions className={classes.actionsContainer}>{actionsComponent}</DialogActions>
      )}
    </Dialog>
  );
};

const useStyles = makeStyles((theme) => ({
  backdrop: {
    backgroundColor: `${theme.palette.info.main} !important`,
    opacity: `0.2 !important`
  },
  container: {
    boxShadow: 'none',
    margin: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(2.5)
    }
  },
  titleContainer: {
    padding: theme.spacing(1.5)
  },
  contentContainer: {
    padding: `${theme.spacing(1)}px ${theme.spacing(1.5)}px`,
    ...scrollBarStyles.vertical
  },
  actionsContainer: {
    justifyContent: 'space-between'
  }
}));

export default Modal;
