import s from "./button.module.css";

export default function Button({
  text,
  grey,
  icon,
  fontSize,
  showModal,
  width,
}) {
  return (
    <button
      style={{ fontSize: fontSize, width: width }}
      className={`${s.btn} ${grey && s.grey} ${showModal && s.hideBtn}`}
      type="button"
    >
      {icon && icon}
      {text}
    </button>
  );
}
