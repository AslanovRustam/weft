import manifesto_1 from "../../assets/images/manifesto_1.png";
import manifesto_2 from "../../assets/images/manifesto_2.png";
import manifesto_3 from "../../assets/images/manifesto_3.png";
import manifesto_4 from "../../assets/images/manifesto_4.png";
import s from "./manifesto.module.css";

export default function Manifesto() {
  return (
    <div className={s.container} id="manifesto">
      <div className={s.titleContainer}>
        <h2 className={s.title}>
          <span>WEFT</span> Manifesto
        </h2>
        <p className={s.subTitle}>
          Becoming a WEFT holder is not only about being part of a vibrant
          community, but a full-fledged beneficiary of the platform's income.
          Join WEISS to experience the constant edge of profit holder!
        </p>
      </div>
      <ul className={s.list}>
        <li className={s.item}>
          <div className={s.iconContainer}>
            <img
              className={s.icon}
              src={manifesto_1}
              alt="manifesto item icon"
            />
          </div>
          <p className={s.description}>
            The greatest asset a brand can have is its loyal users, and they
            should be rewarded.
          </p>
        </li>{" "}
        <li className={s.item}>
          <div className={s.iconContainer}>
            <img
              className={s.icon}
              src={manifesto_2}
              alt="manifesto item icon"
            />
          </div>{" "}
          <p className={s.description}>
            Tokenization is the only way to build an infrastructure where the
            final gain can be delivered to true contributors.
          </p>
        </li>{" "}
        <li className={s.item}>
          <div className={s.iconContainer}>
            <img
              className={s.icon}
              src={manifesto_3}
              alt="manifesto item icon"
            />
          </div>{" "}
          <p className={s.description}>
            Decentralization is mainstream in the entertainment sector. The
            community should profit, not anonymous individuals.
          </p>
        </li>{" "}
        <li className={s.item}>
          <div className={s.iconContainer}>
            <img
              className={s.icon}
              src={manifesto_4}
              alt="manifesto item icon"
            />
          </div>{" "}
          <p className={s.description}>
            Every loyal participant is a true beneficiary and should receive a
            share of the platform's revenue.
          </p>
        </li>
      </ul>
    </div>
  );
}
