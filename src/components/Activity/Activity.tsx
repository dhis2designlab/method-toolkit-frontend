import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import PreviewCard from "../PreviewCard/PreviewCard";
import { activitiesResource } from "../../api/constants";
import { activity } from "../types";
import useFetch from "../../api/useFetch";
import { CircularLoader, NoticeBox } from "@dhis2/ui-core";

import styles from "./Activity.module.css";
interface match {
  match: any;
}

const Activity = ({ match }: match) => {
  const [result, setResult] = useState<activity | undefined>(undefined);

  const handleResponse = (newResponse: activity) => {
    if (newResponse && newResponse !== result) {
      setResult(newResponse);
    }
  };

  const { isLoading, error, response } = useFetch(
    `${activitiesResource}/${match.params.id}`
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
        <NoticeBox error title="Could not fetch activity">
          Could not fetch the activity you requested. Please try again later.
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
        {result.techniques?.length !== 0 ? (
          <>
            <h2>Techniques which can be applied</h2>
            <article className={styles.cardList}>
              {result.techniques?.map((technique: any) => {
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
    );
  }
};

export default Activity;
