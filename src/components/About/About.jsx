import Button from "../Button/Button";
import video from "../../assets/images/video.mp4";
import image from "../../assets/images/weft_img.png";
import s from "./about.module.css";

export default function About({ orientation }) {
  return (
    <ul className={s.list} id="about">
      <li className={s.item}>
        <div className={s.contentContainer}>
          <video
            className={s.video}
            src={video}
            muted
            loop
            playsInline
            autoPlay
          />
        </div>

        <div className={s.textContainer}>
          <h2 className={s.title}>WEISS</h2>
          <p className={s.info}>
            is the iGaming platform with X daily users, providing its
            token-holders a part of its revenue! WEISS is integrated with
            blockchain technology, providing full transparency along with its
            other benefits. <br></br>A blockchain is a sequence of
            interdependent virtual cells containing digital information.
            <br></br> These cells contain information on all transactions since
            the blockchain's creation. <br></br>A token is a form of
            representing an asset or value on the blockchain.
          </p>

          <Button text="Play on WEISS" width={orientation && "21rem"} />
        </div>
      </li>
      <li className={s.item}>
        <div className={s.textContainer}>
          <h2 className={s.title}>WEFT</h2>
          <p className={s.info}>
            Weiss Fuel Token is a BEP-20 standard token of the WEISS platform. A
            tool for both players and crypto users who want to increase their
            profits. <br></br> <br></br>Staking is when you lock up crypto
            assets for a period of time to support the operation of a
            blockchain. In return, you get more assets.
          </p>
          <Button text="Buy WEFT" width={orientation && "21rem"} />
        </div>
        <div className={s.contentContainer}>
          <img className={s.image} src={image} alt="logo weft" />
        </div>
      </li>
    </ul>
  );
}
