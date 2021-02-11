import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { fetchTechnique } from "../../api/TechniquesAPI";

import styles from "./DisplayPage.module.css";
interface displayPage {
  match: any;
}

const DisplayPage = ({ match }: displayPage) => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTechnique(match.params.id);
      setResult(await data?.json());
    };

    fetchData();
  }, [match.params.id]);

  return (
    <>
      {result.length !== 0 ? (
        result.map((item: any) => {
          return (
            <article className={styles.container} key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.intro}</p>
              <ReactMarkdown className={styles.richDescription} children={item.content} />
            </article>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default DisplayPage;
