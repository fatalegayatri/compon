import React, { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";
const ModalPage = () => {
  const [open, setOpen] = useState();
  const handelOpen = () => {
    setOpen(!open);
  };

  const btn = (
    <div>
      <Button primary onClick={handelOpen}>
        {" "}
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal setOpen={setOpen} btn={btn}>
      <p>Modal Content lorem dfjkwekjfkdsj fwjeij model </p>
    </Modal>
  );
  return (
    <div>
      <Button primary onClick={handelOpen}>
        Open Modal
      </Button>
      {open && modal}
    </div>
  );
};

export default ModalPage;
