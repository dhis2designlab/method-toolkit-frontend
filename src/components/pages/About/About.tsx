import useFetch from "../../../api/useFetch"
import ReactMarkdown from "react-markdown"
import { aboutPageResource } from "../../../api/constants"
import Alert from "@material-ui/lab/Alert"
import AlertTitle from "@material-ui/lab/AlertTitle"
import CircularProgress from "@material-ui/core/CircularProgress"

import styles from "./About.module.css"

const About = () => {
  const { isLoading, error, response } = useFetch(aboutPageResource)

  if (isLoading) {
    return (
      <article className={styles.container}>
        <CircularProgress />;
      </article>
    )
  }

  if (error) {
    return (
      <article className={styles.container}>
        <Alert severity="error">
          <AlertTitle>Could not fetch the page</AlertTitle>
          We could not fetch the page you requested. Please try again later.
        </Alert>
      </article>
    )
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
    )
  }
}

export default About
