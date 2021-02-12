import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { fetchActivity } from "../../api/ActivityAPI";
import PreviewCard from "../PreviewCard/PreviewCard";

import styles from "./Activity.module.css";
interface activity {
  match: any;
}

const Activity = ({ match }: activity) => {
  const [result, setResult]: any = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchActivity(match.params.id);
      setResult(await data?.json());
    };

    fetchData();
  }, [match.params.id, match.params.path]);

  return (
    <>
      {result ? (
        <article className={styles.container} key={result.id}>
          <h1>{result.title}</h1>
          <p>{result.intro}</p>
          <ReactMarkdown
            className={styles.richDescription}
            children={result.content}
          />
          {result.techniques.length !== 0 ? (
              <>
              <h2>Techniques which can be applied</h2>
            <article className={styles.cardList}>
              {result.techniques.map((technique: any) => {
                return (
                  <PreviewCard
                    title={technique.title}
                    intro={technique.intro}
                    resource={"techniques"}
                    id={technique.slug}
                  />
                );
              })}
            </article>
            </>
          ) : null}
        </article>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Activity;
