import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  // stores a reference of our element. This is used later to avoid memory leak
  const elRef = useRef(null);
  // if the element doesn't exist yet, create it.
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current);
    // this is used for clean up to avoid a memory leak. It destroys the dom element we created when the modal is closed.
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};
export default Modal;
