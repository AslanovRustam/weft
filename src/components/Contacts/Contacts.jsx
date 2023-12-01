import Twit from "../../assets/images/socials/twit.svg?react";
import Discord from "../../assets/images/socials/discord.svg?react";
import Tg from "../../assets/images/socials/tg.svg?react";
import s from "./contacts.module.css";

export default function Contacts() {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Join our Community</h2>
      <ul className={s.list}>
        <li className={s.item}>
          <p className={s.name}>Telegram</p>
          <a target="_blank" href="#">
            <Tg className={s.icon} />
          </a>
        </li>
        <li className={s.item}>
          <p className={s.name}>Twitter (X)</p>
          <a target="_blank" href="#">
            <Twit className={s.icon} />
          </a>
        </li>
        <li className={s.item}>
          <p className={s.name}>Discord</p>
          <a target="_blank" href="#">
            <Discord className={s.icon} />
          </a>
        </li>
      </ul>
    </div>
  );
}
