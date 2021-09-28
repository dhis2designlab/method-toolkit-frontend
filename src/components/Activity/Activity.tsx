import CircularProgress from "@material-ui/core/CircularProgress"
import { RouteComponentProps } from "react-router"
import { TParams } from "../types"
import { useActivity } from "../../hooks/useActivity"
import { ErrorMessage } from "../ErrorMessage/ErrorMessage"
import { DynamicZoneMapper } from "../StrapiComponents/DynamicZoneMapper"
import { CoverCardList } from "../CoverCardList/CoverCardList"
import styles from "./Activity.module.css"

const Activity = ({ match }: RouteComponentProps<TParams>) => {
  const { isLoading, error, data } = useActivity(match.params.id)

  if (isLoading) {
    return (
      <article className={styles.container}>
        <CircularProgress />
      </article>
    )
  }

  if (error) {
    return (
      <ErrorMessage
        title={"Could not fetch activity"}
        description={
          "Could not fetch the activity you requested. Please try again later."
        }
      />
    )
  }

  return (
    <article className={styles.container} key={data.id}>
      <div className={styles.pageHeader}>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
      <article className={styles.mainContent}>
        {data.dynamic_zone
          ? data.dynamic_zone.map((component: any) => {
              return <DynamicZoneMapper component={component} />
            })
          : null}
      </article>
      {data.activities.length !== 0 ? (
        <>
          <h3>Activities linked to {data.title}</h3>
          <CoverCardList cardList={data.activities} resource={"activities"} />
        </>
      ) : null}
      {data.methods.length !== 0 ? (
        <>
          <h3>Methods included in this activity</h3>
          <CoverCardList cardList={data.methods} resource={"methods"} />
        </>
      ) : null}
    </article>
  )
}

export default Activity
