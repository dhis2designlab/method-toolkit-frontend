import { useState } from "react";
import ReactMarkdown from "react-markdown";
import useFetch from "../../api/useFetch";
import { example } from "../interfaces";
import { examplesResource } from "../../api/constants";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import { RouteComponentProps } from "react-router";
import { TParams } from "../types";

import styles from "./Example.module.css";

const Example = ({ match }: RouteComponentProps<TParams>) => {
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
        <CircularProgress />
      </article>
    );
  }

  if (error) {
    return (
      <article className={styles.container}>
        <Alert severity="error">
          <AlertTitle>Could not fetch example</AlertTitle>
          Could not fetch the example you requested. Please try again later.
        </Alert>
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
