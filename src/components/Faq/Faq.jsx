import s from "./faw.module.css";
import question from "../../assets/images/questions.png";
import Accordion from "../Accordion/Accordion";
export default function Faq() {
  return (
    <div className={s.container} id="FAQs">
      <div className={s.leftSection}>
        <h2 className={s.title}>FAQs</h2>
        <p className={s.subTitle}>You may have questions, we have answers</p>
        <img className={s.image} src={question} alt="question" />
      </div>
      <div className={s.rightSection}>
        <Accordion />
      </div>
    </div>
  );
}
