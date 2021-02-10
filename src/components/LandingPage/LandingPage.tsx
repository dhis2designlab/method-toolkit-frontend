import React from "react";
import { Card } from "@dhis2/ui-core";

import styles from "./LandingPage.module.css";

const LandingPage = (): JSX.Element => {
  return (
    <section className={styles.landingContainer}>
      <h1>DHIS2 user-oriented design and innovation toolkit</h1>
      <p>
        Learn about, plan, and conduct user-oriented design and innovation with
        DHIS2
      </p>
      <article className={styles.cardContainer}>
        <Card className={styles.card}>Do</Card>
        <Card className={styles.card}>Plan</Card>
        <Card className={styles.card}>Learn</Card>
      </article>
    </section>
  );
};

export default LandingPage;
