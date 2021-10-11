import useFetch from "../../../api/useFetch"
import ReactMarkdown from "react-markdown"
import { aboutPageResource } from "../../../api/constants"
import styles from "./About.module.css"
import { CenteredLoading } from "../../CenteredLoading/CenteredLoading"
import { ErrorMessage } from "../../ErrorMessage/ErrorMessage"

const About = () => {
  const { isLoading, error, response } = useFetch(aboutPageResource)

  if (isLoading) return <CenteredLoading />

  if (error)
    return (
      <ErrorMessage
        title={"Could not fetch the page"}
        description={
          "We could not fetch the page you requested. Please try again later."
        }
      />
    )

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
