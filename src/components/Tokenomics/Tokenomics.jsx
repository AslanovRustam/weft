import tokenomics from "../../assets/images/TOKENOMICS.png";
import s from "./tokenomics.module.css";

export default function Tokenomics() {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Tokenomics</h2>
      <div className={s.imgContainer}>
        <img className={s.image} src={tokenomics} alt="tokenomics" />
      </div>
    </div>
  );
}
