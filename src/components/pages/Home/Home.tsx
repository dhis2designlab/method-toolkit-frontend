import CircularProgress from "@material-ui/core/CircularProgress"
import ReactMarkdown from "react-markdown"
import { StrapiImage } from "../../StrapiComponents/StrapiImage"
import styles from "./Home.module.css"
import { ErrorMessage } from "../../ErrorMessage/ErrorMessage"
import { usePage } from "../../../hooks/usePage"
import { useUserStories } from "../../../hooks/useUserStories"
import { CoverCardList } from "../../CoverCardList/CoverCardList"

const Home = (): JSX.Element => {
  const HOME_PAGE = "home-page"
  const { isLoading, data, error } = usePage(HOME_PAGE, `/${HOME_PAGE}`)
  const {
    isLoading: userStoryIsLoading,
    data: userStoryData,
    error: userStoryError,
  } = useUserStories("?_sort=updatedAt:DESC&_limit=3")

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
          <h1>{data.header}</h1>
          <ReactMarkdown>{data.header_description}</ReactMarkdown>
        </div>
        <StrapiImage image={data.header_illustration} width={400} />
      </div>

      <section id={styles.userStories}>
        <h2>{data.user_stories_header}</h2>
        <ReactMarkdown>{data.user_stories_description}</ReactMarkdown>
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
            <CoverCardList cardList={userStoryData} resource={"examples"} />
          </div>
        )}
      </section>
    </section>
  )
}

export default Home
