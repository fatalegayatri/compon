import React from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";
const Modal = ({ children, setOpen, btn }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 w-full h-full bg-black bg-opacity-50 z-10"
      onClick={() => setOpen(false)}
    >
      <div className="fixed inset-0 flex justify-center  items-center h-full">
        <div className="flex flex-col justify-between gap-5 bg-white rounded-lg p-10 ">
          <div className="">{children}</div>
          <div className="flex justify-end">{btn}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
};

export default Modal;
