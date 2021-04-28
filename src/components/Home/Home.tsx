import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";

import styles from "./Home.module.css";

const Home = (): JSX.Element => {
  return (
    <section className={styles.landingContainer}>
      <h1>DHIS2 user-oriented design and innovation toolkit</h1>
      <p>
        Learn about, plan, and conduct user-oriented design and innovation with
        DHIS2
      </p>
      <article className={styles.cardList}>
        <Link to="/do">
          <Card className={styles.card}>Do</Card>
        </Link>

        <Link to="/plan">
          <Card className={styles.card}>Plan</Card>
        </Link>

        <Link to="/learn">
          <Card className={styles.card}>Learn</Card>
        </Link>
      </article>
    </section>
  );
};

export default Home;
