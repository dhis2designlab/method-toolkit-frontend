import { RouteComponentProps } from "react-router"
import { TParams } from "../types"
import { ErrorMessage } from "../ErrorMessage/ErrorMessage"
import { DynamicZoneMapper } from "../StrapiComponents/DynamicZoneMapper"
import styles from "./UserStory.module.css"
import { CenteredLoading } from "../CenteredLoading/CenteredLoading"
import { useUserStory } from "../../hooks/useUserStory"
import { Contact } from "./Contact"

const UserStory = ({ match }: RouteComponentProps<TParams>) => {
  const { isLoading, error, data } = useUserStory(match.params.id)

  if (isLoading) return <CenteredLoading />

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
      <h1 id={styles.userStoryTitle}>{data.title}</h1>
      <div className={styles.contentContainer}>
        <article className={styles.mainContent}>
          {data.dynamic_zone
            ? data.dynamic_zone.map((component: any, index: number) => {
                return <DynamicZoneMapper component={component} key={index} />
              })
            : null}
          {data.contacts && data.contacts.length !== 0 ? (
            <>
              <p id={styles.contactHeader}>Contact information:</p>
              {data.contacts.map((contact: any) => {
                return (
                  <Contact
                    name={contact.name}
                    occupation={contact.occupation}
                    email={contact.email}
                  />
                )
              })}
            </>
          ) : null}
        </article>
      </div>
    </article>
  )
}

export default UserStory