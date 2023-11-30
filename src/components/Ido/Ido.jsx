import Ido1 from "../../assets/images/ido_1.svg?react";
import Ido2 from "../../assets/images/ido_2.svg?react";
import Ido3 from "../../assets/images/ido_3.svg?react";
import Ido4 from "../../assets/images/ido_4.svg?react";
import Ido5 from "../../assets/images/ido_5.svg?react";
import Ido6 from "../../assets/images/ido_6.svg?react";
import Icon from "../../assets/images/Icon.svg?react";
import s from "./ido.module.css";

export default function Ido() {
  return (
    <div className={s.container} id="ido">
      <h2 className={s.title}>IDO Information</h2>
      <ul className={s.list}>
        <li className={s.item}>
          <div className={s.idoContainer}>
            <Ido1 className={s.icon} />
            <p className={s.idoTitle}>ICO Token Price</p>
          </div>
          <p className={s.idoInfo}>1 WEFT = 0.0015 USD</p>
        </li>
        <li className={s.item}>
          <div className={s.idoContainer}>
            <Ido2 className={s.icon} />
            <p className={s.idoTitle}>IDO Allocation</p>
          </div>
          <p className={s.idoInfo}>240,000,000 - 20.0%</p>
        </li>
        <li className={s.item}>
          <div className={s.idoContainer}>
            <Ido3 className={s.icon} />
            <p className={s.idoTitle}>Min/Max Personal Cap</p>
          </div>
          <p className={s.idoInfo}>$100 / $5000</p>
        </li>
        <li className={s.item}>
          <div className={s.idoContainer}>
            <Ido4 className={s.icon} />
            <p className={s.idoTitle}>Accepts</p>
          </div>
          <div className={s.btnContainer}>
            <div className={s.btn}>
              <Ido5 className={s.icon} />
              <p className={s.desc}>USDT</p>
            </div>
            <div className={s.btnBlue}>
              <Ido6 className={s.icon} />
              <p className={s.desc}>USDC</p>
            </div>
          </div>
        </li>
      </ul>
      <ul className={s.list}>
        <li className={s.itemTime}>
          <div className={s.itemTtitle}>Private round</div>
          <p className={s.itemWhen}>Widget 5-8 Oct.</p>
        </li>
        <li className={s.itemTime}>
          <div className={s.itemTtitle}>Private round</div>
          <p className={s.itemWhen}>Widget 10-20 Oct.</p>
        </li>
        <li className={s.itemTime}>
          <div className={s.itemTtitle}>IDO</div>
          <p className={s.itemWhen}>IDO Platform 21 Oct.</p>
        </li>
      </ul>
      <div className={s.bonuses}>
        <p className={s.bonusTitle}>Special Bonuses for participants</p>
        <p className={s.bonusDescription}>
          Bonus for Purchase - up to 30% bonus in tokens, depending on the
          purchase amount х1.5 increased Rakeback from bets for 2 months. Up to
          x15 increased Limits for staking tokens in the Hold2Earn program,
          depending on the purchase amount
        </p>
      </div>
      <div className={s.information}>
        <Icon className={s.iconFoot} />
        <p className={s.footText}>Learn more in the WEFT Whitepaper</p>
      </div>
    </div>
  );
}
