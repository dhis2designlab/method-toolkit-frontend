import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { fetchExample } from "../../api/ExamplesAPI";

import styles from "./Example.module.css";

interface example {
  match: any;
}

const Example = ({ match }: example) => {
  const [result, setResult]: any = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchExample(match.params.id);
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
        </article>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Example;
