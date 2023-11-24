import s from "./hero.module.css";

export default function Hero() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>
        <span>WEFT Token</span> is the New Step<br></br> in iGaming Evolution
      </h1>
    </div>
  );
}
