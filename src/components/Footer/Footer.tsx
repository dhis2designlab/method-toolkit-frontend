import { Link } from "react-router-dom"
import styles from "./Footer.module.css"
import UiOLogo from "../../media/uio-inverse-oneline-1.svg"

const Footer = (): JSX.Element => {
  const scrollToTop = (): void => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.upperRow}>
          <div>
            <h4>DHIS2 DESIGN LAB</h4>
            <ul className={styles.footerList}>
              <li>
                <a
                  href={
                    "https://www.mn.uio.no/ifi/english/research/networks/hisp/dhis2-design-lab/"
                  }
                >
                  About the lab
                </a>
              </li>
              <li>
                <a
                  href={
                    "https://www.mn.uio.no/ifi/english/research/networks/hisp/dhis2-design-lab/#projects"
                  }
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>RESOURCES</h4>
            <ul className={styles.footerList}>
              <li>
                <Link to={"/"}>Overview</Link>
              </li>
              <li>
                <Link to={"/activities"}>Activities</Link>
              </li>
              <li>
                <Link to={"/methods"}>Methods</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>PARTNERS</h4>
            <ul className={styles.footerList}>
              <li>
                <a href={"https://www.uio.no/english/"}>University of Oslo</a>
              </li>
              <li>
                <a href={"https://betterehealth.eu/"}>BETTEReHEALTH</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.lowerRow}>
          <a href={"https://www.uio.no/english/"}>
            <img src={UiOLogo} alt={"UiO Logo"}></img>
          </a>
          <div className={styles.lowerRowRight}>
            <div className={styles.lowerRowRightLinks}>
              <a
                href={
                  "https://www.mn.uio.no/ifi/english/research/networks/hisp/dhis2-design-lab/"
                }
              >
                DHIS2 Design Lab
              </a>
            </div>
            <p className={styles.backToTop} onClick={() => scrollToTop()}>
              Back to top
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
