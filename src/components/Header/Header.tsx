import React from "react";
import dhis2DesignLab from "../../media/dhis2_design_lab_logo.png";

import styles from "./Header.module.css";

const Header = (): JSX.Element => {
  return (
    <nav className={styles.header}>
      <div className={styles.container}>
        <img
          className={styles.logo}
          src={dhis2DesignLab}
          alt={"DHIS2 Design Lab"}
        />
        <li>Do</li>
        <li>Plan</li>
        <li>Learn</li>
        <li className={styles.about}>About</li>
      </div>
    </nav>
  );
};

export default Header;
