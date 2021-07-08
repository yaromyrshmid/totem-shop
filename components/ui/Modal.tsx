import React from 'react';
import { makeStyles, Dialog, DialogTitle, DialogActions, DialogContent } from '@material-ui/core';

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
      {!!title && <DialogTitle>{title}</DialogTitle>}

      <DialogContent>{children}</DialogContent>

      {!!actionsComponent && <DialogActions>{actionsComponent}</DialogActions>}
    </Dialog>
  );
};

const useStyles = makeStyles((theme) => ({
  backdrop: {
    backgroundColor: `${theme.palette.info.main} !important`,
    opacity: `0.2 !important`
  },
  container: {
    boxShadow: 'none'
  }
}));

export default Modal;
