import useFetch from "../../api/useFetch";
import ReactMarkdown from "react-markdown";
import { aboutPageResource } from "../../api/constants";
import { CircularLoader, NoticeBox } from "@dhis2/ui-core";

import styles from "./About.module.css";

const About = () => {
  const { isLoading, error, response } = useFetch(aboutPageResource);

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

  if (response) {
    return (
      <article className={styles.container}>
        <h1>{response.title}</h1>
        <ReactMarkdown
          className={styles.richDescription}
          children={response.content}
        />
      </article>
    );
  }
};

export default About;
