import { useState } from "react";
import Button from "../Button/Button";
import play2Earn from "../../assets/images/Play2Earn.png";
import hold2Earn from "../../assets/images/Hold2Earn.png";
import s from "./features.module.css";

export default function Features() {
  const [active, setActive] = useState({ play2Earn: true, hold2Earn: false });

  const selectActiveTab = () => {
    setActive((prev) => ({
      play2Earn: !prev.play2Earn,
      hold2Earn: !prev.hold2Earn,
    }));
  };

  return (
    <section className={s.section}>
      <ul className={s.titleList}>
        <li
          onClick={selectActiveTab}
          className={`${s.titleItem} ${active.play2Earn && s.activeTitle}`}
        >
          Play2Earn
          <p></p>
        </li>
        <li
          onClick={selectActiveTab}
          className={`${s.titleItem} ${active.hold2Earn && s.activeTitle}`}
        >
          Hold2Earn
          <p></p>
        </li>
      </ul>
      <ul className={s.list}>
        <li className={`${s.item} ${!active.play2Earn && s.inActiveContent}`}>
          <img className={s.image} src={play2Earn} alt="play2Earn" />
          <div className={s.textContainer}>
            <p>
              Play2Earn (P2E) is a special platform program that gives you
              tokenized rakeback for every bet you make. <br></br>Rakeback is a
              way of passive earning. Refunding a part of the betting cost
              regardless of its success.<br></br>
              <br></br>The tokens obtained with P2E can be staked in the
              Hold2Earn program for additional profit, or withdrawn to a gaming
              account. They also count as points in the Loyalty Program.
              <br></br>
              <br></br>Full details of your bets, including game type, date,
              rakeback and your total earnings are available in the P2E
              Analytics section.
            </p>
            <Button text="Play to Earn" />
          </div>
        </li>
        <li className={`${s.item} ${!active.hold2Earn && s.inActiveContent}`}>
          <img className={s.image} src={hold2Earn} alt="hold2Earn" />
          <div className={s.textContainer}>
            <p>
              The Hold2Earn program locks loyalty tokens for a set period of
              time to provide passive returns.<br></br>When the platform's
              income grows, Hold2Earn participants receive additional tokenized
              share at the end of the staking period. Otherwise, the same number
              of tokens that were invested are returned.
              <br></br> You must be registered to participate in Hold2Earn.
              Selecting the staking period an amount, monitoring the current
              status, and statistics of past holdings are available in a
              convenient widget.<br></br>
              <br></br> Go ahead and try out the welcome staking!
            </p>
            <Button text="Hold to Earn" />
          </div>
        </li>
      </ul>
    </section>
  );
}
