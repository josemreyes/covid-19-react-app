import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <img
        src="covid-banner2.png"
        alt="Covid banner"
        className={styles.headerArea}
      />
    </header>
  );
}

export default Header;
