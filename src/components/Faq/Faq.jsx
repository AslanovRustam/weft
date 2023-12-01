import s from "./faw.module.css";
import question from "../../assets/images/questions.png";
import Accordion from "../Accordion/Accordion";
export default function Faq() {
  const faqs = [
    {
      title: "What is WEFT?",
      text: "WEFT (Weiss Fuel Token) is a BEP-20 standard token of the WEISS platform — a tool for players and crypto users who want to increase their profits.",
    },
    {
      title: "How can I buy token?",
      text: "The token sale will be held on the widget. The date and terms will be announced later. Subscribe to our newsletters and socials to stay tuned.",
    },
    {
      title: "What are the utilities of WEFT?",
      text: "Tokens can be used as money on the platform. Hold2Earn program - you obtain a share of the platform's income by holding tokens for a set duration.",
    },
    {
      title: "Are there any restrictions on presale?",
      text: "Depending on the stage, there can be a minimum and maximum limit on the sale amount per user. No wait list is needed — more details on the sale to be announced.",
    },
    {
      title: "How can I contact WEISS?",
      text: "Support: support.en@weiss.bet Promotion: social.marketing@taktonum.com",
    },
  ];

  return (
    <div className={s.container} id="FAQs">
      <div className={s.leftSection}>
        <h2 className={s.title}>FAQs</h2>
        <p className={s.subTitle}>You may have questions, we have answers</p>
        <img className={s.image} src={question} alt="question" />
      </div>
      <ul className={s.rightSection}>
        {faqs.map(({ title, text }) => (
          <Accordion title={title} text={text} key={title} />
        ))}
      </ul>
    </div>
  );
}
