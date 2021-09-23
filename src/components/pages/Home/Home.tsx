import CircularProgress from "@material-ui/core/CircularProgress"
import ReactMarkdown from "react-markdown"
import useFetch from "../../../api/useFetch"
import { StrapiImage } from "../../StrapiComponents/StrapiImage"
import { examplesResource } from "../../../api/constants"

import styles from "./Home.module.css"
import { example } from "../../interfaces"
import PreviewCard from "../../PreviewCard/PreviewCard"
import { ErrorMessage } from "../../ErrorMessage/ErrorMessage"

const Home = (): JSX.Element => {
  const { isLoading, response, error } = useFetch("/home-page")
  const {
    isLoading: userStoryIsLoading,
    response: userStoryResponse,
    error: userStoryError,
  } = useFetch(`${examplesResource}?_sort=updatedAt:DESC&_limit=3`)

  if (isLoading) return <CircularProgress />
  if (error)
    return (
      <ErrorMessage
        title={"Could not fetch the home page"}
        description={"Could not fetch the home page. Please try again later."}
      />
    )

  return (
    <section className={styles.homeContainer}>
      <div id={styles.introductionSection}>
        <div style={{ maxWidth: 500 }}>
          <h1>{response.header}</h1>
          <ReactMarkdown>{response.header_description}</ReactMarkdown>
        </div>
        <StrapiImage image={response.header_illustration} width={400} />
      </div>

      <section id={styles.userStories}>
        <h1>{response.user_stories_header}</h1>
        <ReactMarkdown>{response.user_stories_description}</ReactMarkdown>
        {userStoryIsLoading ? (
          <CircularProgress />
        ) : userStoryError ? (
          <ErrorMessage
            title={"Could not fetch user stories"}
            description={
              "Could not fetch the user stories. Please try again later."
            }
          />
        ) : (
          <div className={styles.cardRow}>
            {userStoryResponse.map((userStory: example) => {
              return (
                <PreviewCard
                  title={userStory.title}
                  intro={userStory.intro}
                  resource={"examples"}
                  id={userStory.id}
                />
              )
            })}
          </div>
        )}
      </section>
    </section>
  )
}

export default Home
