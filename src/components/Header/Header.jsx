import Container from "../Container/Container";
import logo from "../../assets/images/logo.svg";
import lang from "../../assets/images/language.svg";
import s from "./header.module.css";
import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";

export default function Header() {
  return (
    <header>
      <Container>
        <div className={s.container}>
          <div className={s.langContainer}>
            <img className={s.logo} src={logo} alt="weiss logo" />
            <img className={s.lang} src={lang} alt="lang" />
            <span>En</span>
          </div>
          <Navbar />
          <div className={s.buttons}>
            <Button text="Whitepaper" grey />
            <Button text="Buy Token" />
          </div>
        </div>
      </Container>
    </header>
  );
}
