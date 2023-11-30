import Allocation from "../../assets/images/Allocation.svg?react";
import s from "./alocation.module.css";

export default function Alocation() {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Allocation</h2>
      <Allocation className={s.image} />
    </div>
  );
}
