import s from "./containerBG.module.css";

export default function ContainerBG({ children }) {
  return <div className={s.container}>{children}</div>;
}
