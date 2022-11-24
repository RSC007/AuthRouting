import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const ConfirmationPopUp = ({ toggle, onLogout, message }) => {
  return (
    <div>
      <Modal
        isOpen={true}
        toggle={toggle}
      >
        <ModalHeader toggle={toggle}>LogOut</ModalHeader>
        <ModalBody>
          {message}
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={onLogout}>
            Log Out
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ConfirmationPopUp;
