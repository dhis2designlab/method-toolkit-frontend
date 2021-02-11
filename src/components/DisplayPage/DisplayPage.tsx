import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { fetchTechnique } from "../../api/TechniquesAPI";
import PreviewCard from "../PreviewCard/PreviewCard";

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
  }, [match.params.id, match.params.path]);

  return (
    <>
      {result.length !== 0 ? (
        result.map((item: any) => {
          return (
            <article className={styles.container} key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.intro}</p>
              <ReactMarkdown
                className={styles.richDescription}
                children={item.content}
              />
                {item.examples.length !== 0
                  ? <article>
                    <h2>Examples</h2>
                    {item.examples.map((example: any) => {
                      return (
                        <PreviewCard
                          title={example.title}
                          intro={example.intro}
                          resource={"examples"}
                          id={example.id}
                        />
                      );
                    }
                    )}
                  </article>
                  : null}
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
