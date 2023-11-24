import s from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav>
      <ul className={s.navList}>
        <li className={s.navItem}>
          <a className={s.navLink} href="#about">
            About
          </a>
        </li>
        <li className={s.navItem}>
          <a className={s.navLink} href="#features">
            Features
          </a>
        </li>
        <li className={s.navItem}>
          <a className={s.navLink} href="#manifesto">
            Manifesto
          </a>
        </li>
        <li className={s.navItem}>
          <a className={s.navLink} href="#benefits">
            Benefits
          </a>
        </li>
        <li className={s.navItem}>
          <a className={s.navLink} href="#ido">
            IDO
          </a>
        </li>
        <li className={s.navItem}>
          <a className={s.navLink} href="#FAQs">
            FAQs
          </a>
        </li>
      </ul>
    </nav>
  );
}
