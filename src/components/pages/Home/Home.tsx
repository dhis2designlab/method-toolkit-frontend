import CircularProgress from "@material-ui/core/CircularProgress"
import ReactMarkdown from "react-markdown"
import { StrapiImage } from "../../StrapiComponents/StrapiImage"
import styles from "./Home.module.css"
import { ErrorMessage } from "../../ErrorMessage/ErrorMessage"
import { usePage } from "../../../hooks/usePage"
import { DynamicZoneMapper } from "../../StrapiComponents/DynamicZoneMapper"

const Home = (): JSX.Element => {
  const HOME_PAGE = "home-page"

  const { isLoading, data, error } = usePage(HOME_PAGE, `/${HOME_PAGE}`)

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

      <article className={styles.mainContent}>
        <div>
          {data.dynamic_zone.map((component: any, index: number) => {
            return <DynamicZoneMapper component={component} key={index} />
          })}
        </div>
      </article>
    </section>
  )
}

export default Home
