import s from "./button.module.css";

export default function Button({ text, grey }) {
  return (
    <button className={`${s.btn} ${grey && s.grey}`} type="button">
      {text}
    </button>
  );
}
