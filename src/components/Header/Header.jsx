import Container from "../Container/Container";
import logo from "../../assets/images/logo.svg";
// import lang from "../../assets/images/language.svg";
import s from "./header.module.css";
import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";
import useScreenOrientationPortrait from "../../helpers/orientation";

export default function Header({ showModal, setShowModal }) {
  const orientation = useScreenOrientationPortrait();

  return (
    <header className={`${showModal && s.menuOpen}`}>
      <Container>
        <div className={s.container}>
          <div className={s.langContainer}>
            <a href="#">
              <img className={s.logo} src={logo} alt="weiss logo" />
            </a>
            {/* <img className={s.lang} src={lang} alt="lang" />
            <span>En</span> */}
          </div>

          {orientation ? (
            <>
              <Button text="Buy Token" showModal={showModal} />
              <div className={s.menu} onClick={() => setShowModal(!showModal)}>
                <div className={`${s.item} ${showModal && s.open}`}></div>
                <div className={`${s.item} ${showModal && s.open}`}></div>
                <div className={`${s.item} ${showModal && s.open}`}></div>
              </div>
            </>
          ) : (
            <>
              <Navbar />
              <div className={s.buttons}>
                <Button text="Whitepaper" grey />
                <Button text="Buy Token" />
              </div>
            </>
          )}
        </div>
      </Container>
    </header>
  );
}
