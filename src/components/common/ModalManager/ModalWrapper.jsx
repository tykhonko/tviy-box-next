import React from "react";
import PropTypes from "prop-types";

const ModalWrapper = ({
  id,
  Modal,
  open,
  withClickAway,
  onClose,
  onExited,
  modalProps,
}) => {
  const handleClose = (event, reason) => {
    if (!withClickAway && reason === "clickaway") {
      return;
    }

    if (modalProps && modalProps.onClose) {
      modalProps.onClose();
    }

    onClose(id);
  };

  const handleExited = () => {
    if (modalProps && modalProps.onExited) {
      modalProps.onExited();
    }

    onExited(id);
  };

  return (
    <Modal
      {...modalProps}
      open={open}
      onClose={handleClose}
      onExited={handleExited}
    />
  );
};

/* eslint-disable react/forbid-prop-types */
ModalWrapper.propTypes = {
  id: PropTypes.string.isRequired,
  Modal: PropTypes.elementType.isRequired,
  open: PropTypes.bool.isRequired,
  withClickAway: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onExited: PropTypes.func.isRequired,
  modalProps: PropTypes.object,
};

export default React.memo(ModalWrapper);
