import { Link } from "react-router-dom";
import { technique } from "../../types";
import { techniquesResource } from "../../../api/constants";

import styles from "./WhatDoINeedBar.module.css";

interface whatDoIneed {
  difficulty: string;
  minimum_time: number;
  maximum_time: number;
  pairs_well_with?: technique[];
}

const WhatDoINeedBar = ({
  difficulty,
  maximum_time,
  minimum_time,
  pairs_well_with,
}: whatDoIneed) => {
  return (
    <article className={styles.whatDoINeed}>
      <article>
        <p className={styles.attributeHeading}>Difficulty</p>
        {difficulty}
      </article>
      <article>
        <p className={styles.attributeHeading}>Time</p>
        {minimum_time}-{maximum_time} hours
      </article>
      {pairs_well_with?.length !== 0 ? (
        <article className={styles.pairsWellWith}>
          <p className={styles.attributeHeading}>Pairs well with</p>
          <article className={styles.techniques}>
            {pairs_well_with?.map((item) => {
              return (
                <Link to={`${techniquesResource}/${item.slug}`}>
                  {item.title}
                </Link>
              );
            })}
          </article>
        </article>
      ) : null}
    </article>
  );
};

export default WhatDoINeedBar;
