import { useState, useRef } from "react";
import Arrow from "../../assets/images/arrow.svg?react";
import s from "./accordion.module.css";

export default function Accordion({ title, text }) {
  const [active, setActive] = useState(false);
  const [height, setIHeight] = useState("0px");
  const content = useRef(null);
  function toggleAccordion() {
    setActive(!active);
    // setIHeight(active ? "0px" : `${content.current.scrollHeight}px`);
    setIHeight(active ? "0px" : `${content.current.offsetWidth}px`);
  }
  return (
    <li>
      <div
        className={`${s.container} ${active && s.activeContainer}`}
        onClick={toggleAccordion}
      >
        <div className={s.titleContainer}>
          <p className={s.title}>{title}</p>
          <Arrow className={`${s.icon} ${active && s.activeArrow}`} />
        </div>
        <p
          ref={content}
          style={{ maxHeight: `${height}` }}
          className={`${s.text} ${active && s.activeText}`}
        >
          {text}
        </p>
      </div>
    </li>
  );
}
