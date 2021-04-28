import styles from "./Footer.module.css";

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>DHIS2 Design Lab | University of Oslo</p>
    </footer>
  );
};

export default Footer;
