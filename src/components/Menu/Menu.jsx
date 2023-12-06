import { createPortal } from "react-dom";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";
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
      <div className={`${s.container} ${showModal && s.containerActive}`}>
        <Navbar />
        <div className={s.buttons}>
          <Button text="Buy Token" width="100%" />
          <Button text="Whitepaper" grey width="100%" />
        </div>
      </div>
    </div>,
    modalRoot
  );
}
