import s from "./button.module.css";

export default function Button({ text, grey, icon, fontSize }) {
  return (
    <button
      style={{ fontSize: fontSize }}
      className={`${s.btn} ${grey && s.grey}`}
      type="button"
    >
      {icon && icon}
      {text}
    </button>
  );
}
