import Button from "../Button/Button";
import Ticker from "../Ticker/Ticker";
import Container from "../Container/Container";
import Twit from "../../assets/images/socials/twit.svg?react";
import Discord from "../../assets/images/socials/discord.svg?react";
import Tg from "../../assets/images/socials/tg.svg?react";
import IGaming from "../../assets/images/iGaming.svg?react";
import Betting from "../../assets/images/Betting.svg?react";
import s from "./hero.module.css";

export default function Hero() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>
        <span>WEFT Token</span> is the New Step<br></br> in iGaming Evolution
      </h1>
      <ul className={s.list}>
        <li className={s.item}>
          <Tg className={s.social} />
        </li>
        <li className={s.item}>
          <Twit className={s.social} />
        </li>
        <li className={s.item}>
          <Discord className={s.social} />
        </li>
      </ul>
      <ul className={s.buttonsList}>
        <li className={s.buttonsItem}>
          <Button
            text="iGaming"
            icon={<IGaming className={s.btnIcon} />}
            fontSize="1rem"
          />
        </li>
        <li className={s.buttonsItem}>
          <Button
            text="Betting"
            icon={<Betting className={s.btnIcon} />}
            fontSize="1rem"
          />
        </li>
      </ul>
      <Container>
        <Ticker />
      </Container>
    </div>
  );
}
