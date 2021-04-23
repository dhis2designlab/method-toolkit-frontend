import { useState } from "react";
import ReactMarkdown from "react-markdown";
import PreviewCard from "../PreviewCard/PreviewCard";
import useFetch from "../../api/useFetch";
import { techniquesResource } from "../../api/constants";
import { technique, example } from "../types";
import CircularProgress from "@material-ui/core/CircularProgress";
import WhatDoINeedBar from "./components/WhatDoINeedBar";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";

import styles from "./Technique.module.css";

interface match {
  match: any;
}

const Technique = ({ match }: match) => {
  const [result, setResult] = useState<technique | undefined>(undefined);

  const handleResult = (newResult: technique[]) => {
    if (newResult && newResult[0] !== result) {
      setResult(newResult[0]);
    }
  };

  const { isLoading, error, response } = useFetch(
    `${techniquesResource}?slug=${match.params.id}`
  );

  handleResult(response);

  if (isLoading) {
    return (
      <article className={styles.container}>
        <CircularProgress />;
      </article>
    );
  }

  if (error) {
    return (
      <article className={styles.container}>
        <Alert severity="error">
          <AlertTitle>Could not fetch technique</AlertTitle>
          We could not fetch the technique you requested. Please try again.
        </Alert>
      </article>
    );
  }

  if (result) {
    return (
      <article className={styles.container} key={result.id}>
        <h1>{result.title}</h1>
        <p>{result.intro}</p>
        <WhatDoINeedBar
          difficulty={result.difficulty}
          minimum_time={result.minimum_time}
          maximum_time={result.maximum_time}
          pairs_well_with={result.pairs_well_with}
        />
        <ReactMarkdown
          className={styles.richDescription}
          children={result.content}
        />
        {result.examples?.length !== 0 ? (
          <article>
            <h2>Examples</h2>
            <article className={styles.center}>
              {result.examples?.map((example: example) => {
                return (
                  <PreviewCard
                    title={example.title}
                    intro={example.intro}
                    resource={"examples"}
                    id={example.id}
                    key={example.id}
                  />
                );
              })}
            </article>
          </article>
        ) : null}
      </article>
    );
  }
};

export default Technique;
