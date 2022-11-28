/** @format */

import reactDom from "react-dom";

const ModalPortal = ({ children }) => {
  const el = document.getElementById("modal");
  console.log(el);
  if (!el) return null;
  return reactDom.createPortal(children, el);
};

export default ModalPortal;
