import s from "./ticker.module.css";
import first from "../../assets/images/CoinMarketCup_link.png";
import second from "../../assets/images/CG_Link.png";
import third from "../../assets/images/PS_Link.png";
import fourth from "../../assets/images/DS_Link.png";

export default function Ticker() {
  return (
    <div className={s.ticker}>
      <ul className={s.list}>
        <li className={s.item}>
          <img src={first} alt="logo icon" />
        </li>
        <li className={s.item}>
          <img src={second} alt="logo icon" />
        </li>
        <li className={s.item}>
          <img src={third} alt="logo icon" />
        </li>
        <li className={s.item}>
          <img src={fourth} alt="logo icon" />
        </li>
      </ul>
      <ul className={s.list}>
        <li className={s.item}>
          <img src={first} alt="logo icon" />
        </li>
        <li className={s.item}>
          <img src={second} alt="logo icon" />
        </li>
        <li className={s.item}>
          <img src={third} alt="logo icon" />
        </li>
        <li className={s.item}>
          <img src={fourth} alt="logo icon" />
        </li>
      </ul>
    </div>
  );
}
