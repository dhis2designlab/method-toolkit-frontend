import { RouteComponentProps } from "react-router"
import { TParams } from "../types"
import { useMethod } from "../../hooks/useMethod"
import { ErrorMessage } from "../ErrorMessage/ErrorMessage"
import StyledHeader from "../StyledHeader/StyledHeader"
import { InfoBar } from "./components/InfoBar"
import { DynamicZoneMapper } from "../StrapiComponents/DynamicZoneMapper"
import styles from "./Method.module.css"
import { CenteredLoading } from "../CenteredLoading/CenteredLoading"

const Method = ({ match }: RouteComponentProps<TParams>) => {
  const { isLoading, error, data } = useMethod(match.params.id)

  if (isLoading) return <CenteredLoading />

  if (error) {
    return (
      <ErrorMessage
        title={"Could not fetch method"}
        description={
          "We could not fetch the method you requested. Please try again."
        }
      />
    )
  }

  return (
    <article className={styles.container} key={data[0].id}>
      <StyledHeader
        title={data[0].title}
        description={data[0].header.header_description}
        image={data[0].header.header_image}
      />
      <div className={styles.contentDivider}>
        {data[0].stats ? (
          <InfoBar
            minimumTime={data[0].stats.minimum_time}
            maximumTime={data[0].stats.maximum_time}
            materials={data[0].materials}
            difficulty={data[0].stats.difficulty}
            participants={data[0].stats.participants}
            methods={data[0].methods}
          />
        ) : null}
        <article className={styles.mainContent}>
          {data[0].dynamic_zone.map((component: any, index: number) => {
            return <DynamicZoneMapper component={component} key={index} />
          })}
        </article>
      </div>
    </article>
  )
}

export default Method
