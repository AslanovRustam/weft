import benefits_1 from "../../assets/images/benefits_1.png";
import benefits_2 from "../../assets/images/benefits_2.png";
import benefits_3 from "../../assets/images/benefits_3.png";
import s from "./benefits.module.css";

export default function Benefits() {
  return (
    <div className={s.container}>
      <h2 className={s.title}>
        <span>Token</span> Benefits
      </h2>
      <ul className={s.list}>
        <li className={s.item}>
          <div className={s.iconContainer}>
            <img className={s.icon} src={benefits_1} alt="benefits item icon" />
          </div>
          <p className={s.titleItem}>Earn by playing</p>
          <p className={s.description}>
            Every time enjoing games, you receive tokens that can be staked for
            passive profit or used as money on the platform.
          </p>
        </li>
        <li className={s.item}>
          <div className={s.iconContainer}>
            <img className={s.icon} src={benefits_2} alt="benefits item icon" />
          </div>
          <p className={s.titleItem}>Gaining share</p>
          <p className={s.description}>
            Using the Hold2Earn program, you obtain a share of the platform's
            income by holding tokens for a set duration.
          </p>
        </li>
        <li className={s.item}>
          <div className={s.iconContainer}>
            <img className={s.icon} src={benefits_3} alt="benefits item icon" />
          </div>
          <p className={s.titleItem}>Blockchain transparency</p>
          <p className={s.description}>
            You can check your game history, token balance, and transaction
            details over time. Additionally, you can access data on overall user
            statistics.
          </p>
        </li>
      </ul>
    </div>
  );
}
