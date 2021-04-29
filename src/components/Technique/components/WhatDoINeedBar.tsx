import { Link } from "react-router-dom";
import { technique } from "../../interfaces";
import { techniquesResource } from "../../../api/constants";
import BarChartIcon from "@material-ui/icons/BarChart";
import TimerIcon from "@material-ui/icons/Timer";
import AmpStoriesIcon from "@material-ui/icons/AmpStories";
import AllInclusive from "@material-ui/icons/AllInclusive";
import CreateIcon from "@material-ui/icons/Create";

import styles from "./WhatDoINeedBar.module.css";

interface whatDoIneed {
  difficulty: string;
  phase?: string;
  materials?: string;
  minimum_time: number;
  maximum_time: number;
  pairs_well_with?: technique[];
}

const WhatDoINeedBar = ({
  difficulty,
  phase,
  materials,
  maximum_time,
  minimum_time,
  pairs_well_with,
}: whatDoIneed) => {
  return (
    <article className={styles.whatDoINeed}>
      <article>
        <div className={styles.iconOnLine}>
          <AllInclusive />
          <p className={styles.attributeHeading}>Phase</p>
        </div>
        {phase}
      </article>
      <article>
        <div className={styles.iconOnLine}>
          <BarChartIcon />
          <p className={styles.attributeHeading}>Difficulty</p>
        </div>
        {difficulty}
      </article>
      <article>
        <div className={styles.iconOnLine}>
          <TimerIcon />
          <p className={styles.attributeHeading}>Time</p>
        </div>
        {minimum_time}-{maximum_time} hours
      </article>
      {materials && materials !== "" ? (
        <article>
          <div className={styles.iconOnLine}>
            <CreateIcon />
            <p className={styles.attributeHeading}>Materials needed</p>
          </div>
          {materials}
        </article>
      ) : null}
      {pairs_well_with?.length !== 0 ? (
        <article className={styles.pairsWellWith}>
          <div className={styles.iconOnLine}>
            <AmpStoriesIcon />
            <p className={styles.attributeHeading}>Pairs well with</p>
          </div>
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
