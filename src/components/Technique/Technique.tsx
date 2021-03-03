import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import PreviewCard from "../PreviewCard/PreviewCard";
import useFetch from "../../api/useFetch";
import { techniquesResource } from "../../api/constants";
import { technique, example } from "../types";
import { CircularLoader, NoticeBox } from "@dhis2/ui-core";

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
        <CircularLoader />;
      </article>
    );
  }

  if (error) {
    return (
      <article className={styles.container}>
        <NoticeBox error title="Could not fetch technique">
          We could not fetch the technique you requested. Please try again.
        </NoticeBox>
      </article>
    );
  }

  if (result) {
    return (
      <article className={styles.container} key={result.id}>
        <h1>{result.title}</h1>
        <p>{result.intro}</p>
        <ReactMarkdown
          className={styles.richDescription}
          children={result.content}
        />
        {result.examples?.length !== 0 ? (
          <article>
            <h2>Examples</h2>
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
        ) : null}
      </article>
    );
  }
};

export default Technique;
