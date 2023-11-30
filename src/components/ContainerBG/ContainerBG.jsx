import s from "./containerBG.module.css";

export default function ContainerBG({ children }) {
  return <section className={s.container}>{children}</section>;
}
