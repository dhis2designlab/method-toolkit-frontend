import dhis2DesignLab from "../../media/dhis2_design_lab_logo.png"
import { Link } from "react-router-dom"

import styles from "./Header.module.css"

const Header = (): JSX.Element => {
  return (
    <nav className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <img
            className={styles.logo}
            src={dhis2DesignLab}
            alt={"DHIS2 Design Lab"}
          />
        </Link>
        <Link to="/activities">
          <li>Activities</li>
        </Link>
        <Link to="/do">
          <li>Do</li>
        </Link>
        <Link className={styles.about} to="/about">
          <li>About</li>
        </Link>
      </div>
    </nav>
  )
}

export default Header
