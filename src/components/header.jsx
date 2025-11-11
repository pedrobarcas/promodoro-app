import { Timer, Scroll } from "phosphor-react";
import styles from "../styles/modules/header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img
        src="https://img.icons8.com/?size=100&id=YJfJ0JM5Imsj&format=png&color=000000"
        alt=""
      />
      <nav div className={styles.headerContent}>
        <a href="#">
          <Timer />
        </a>
        <a href="#">
          <Scroll />
        </a>
      </nav>
    </header>
  );
}
