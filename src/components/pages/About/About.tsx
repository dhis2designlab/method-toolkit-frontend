import ReactMarkdown from "react-markdown"
import styles from "./About.module.css"
import { CenteredLoading } from "../../CenteredLoading/CenteredLoading"
import { ErrorMessage } from "../../ErrorMessage/ErrorMessage"
import { usePage } from "../../../hooks/usePage"

const ABOUT_PAGE = "about-page"

const About = () => {
  const { isLoading, error, data } = usePage(ABOUT_PAGE, `/${ABOUT_PAGE}`)

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

  return (
    <article className={styles.container}>
      <h1>{data.title}</h1>
      <ReactMarkdown
        className={styles.richDescription}
        children={data.content}
      />
    </article>
  )
}

export default About
