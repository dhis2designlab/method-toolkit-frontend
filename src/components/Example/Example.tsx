import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import useFetch from "../../api/useFetch";
import { example } from "../types";
import { examplesResource } from "../../api/constants";
import { CircularLoader, NoticeBox } from "@dhis2/ui-core";

import styles from "./Example.module.css";

interface match {
  match: any;
}

const Example = ({ match }: match) => {
  const [result, setResult] = useState<example | undefined>(undefined);

  const handleResponse = (newResponse: example) => {
    if (newResponse && newResponse !== result) {
      setResult(newResponse);
    }
  };

  const { isLoading, error, response } = useFetch(
    `${examplesResource}/${match.params.id}`
  );

  handleResponse(response);

  if (isLoading) {
    return (
      <article className={styles.container}>
        <CircularLoader />
      </article>
    );
  }

  if (error) {
    return (
      <article className={styles.container}>
        <NoticeBox error title="Could not fetch example">
          Could not fetch the example you requested. Please try again later.
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
      </article>
    );
  }
};

export default Example;
