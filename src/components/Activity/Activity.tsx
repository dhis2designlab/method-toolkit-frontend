import { RouteComponentProps } from "react-router"
import { TParams } from "../types"
import { useActivity } from "../../hooks/useActivity"
import { ErrorMessage } from "../ErrorMessage/ErrorMessage"
import { DynamicZoneMapper } from "../StrapiComponents/DynamicZoneMapper"
import { CoverCardList } from "../CoverCardList/CoverCardList"
import styles from "./Activity.module.css"
import { ACTIVITIES, METHODS } from "../../constants"
import StyledHeader from "../StyledHeader/StyledHeader"
import { CenteredLoading } from "../CenteredLoading/CenteredLoading"

const Activity = ({ match }: RouteComponentProps<TParams>) => {
  const { isLoading, error, data } = useActivity(match.params.id)

  if (isLoading) <CenteredLoading />

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
      <StyledHeader title={data.title} description={data.description} />
      <div className={styles.contentContainer}>
        <article className={styles.mainContent}>
          {data.dynamic_zone
            ? data.dynamic_zone.map((component: any, index: number) => {
                return <DynamicZoneMapper component={component} key={index} />
              })
            : null}
        </article>
        {data.activities.length !== 0 ? (
          <>
            <h3>Activities linked to {data.title}</h3>
            <CoverCardList cardList={data.activities} resource={ACTIVITIES} />
          </>
        ) : null}
        {data.methods.length !== 0 ? (
          <>
            <h3>Methods included in this activity</h3>
            <CoverCardList cardList={data.methods} resource={METHODS} />
          </>
        ) : null}
      </div>
    </article>
  )
}

export default Activity
