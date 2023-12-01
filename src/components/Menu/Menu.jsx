import { createPortal } from "react-dom";
import { useEffect } from "react";
import s from "./menu.module.css";

const modalRoot = document.querySelector("#modal");

export default function Menu({ onClose, showModal }) {
  useEffect(() => {
    if (showModal) {
      document.body.classList.add(s.overvlow);
      return;
    }
    document.body.classList.remove(s.overvlow);
  }, [showModal]);

  return createPortal(
    <div
      className={`${s.modalBackDrop} ${showModal && s.opacity}`}
      onClick={() => onClose()}
    >
      <div className={`${s.container} ${showModal && s.containerActive}`}></div>
    </div>,
    modalRoot
  );
}
