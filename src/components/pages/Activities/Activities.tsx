import { useState } from "react"
import { usePage } from "../../../hooks/usePage"
import { CircularProgress } from "@material-ui/core"
import { ErrorMessage } from "../../ErrorMessage/ErrorMessage"
import SearchBar from "../../SearchBar/SearchBar"
import { useActivities } from "../../../hooks/useActivities"
import { CoverCardList } from "../../CoverCardList/CoverCardList"
import commonStyles from "../commonStyles.module.css"
import { ACTIVITIES } from "../../../constants"
import { CenteredLoading } from "../../CenteredLoading/CenteredLoading"

export const Activities = (): JSX.Element => {
  const ACTIVITIES_QUERYKEY = "activities-page"

  const [textSearch, setTextSearch] = useState<string>("")
  const handleTextSearch = (newValue: string) => {
    setTextSearch(newValue)
  }

  const { isLoading, error, data } = usePage(
    ACTIVITIES_QUERYKEY,
    `/${ACTIVITIES_QUERYKEY}`
  )
  const {
    isLoading: activitiesIsLoading,
    data: activitiesData,
    error: activitiesError,
  } = useActivities()

  const filteredActivities =
    textSearch !== ""
      ? activitiesData.filter(
          (activity: any) =>
            activity.title.toLowerCase().includes(textSearch) ||
            activity.cover.short_description.toLowerCase().includes(textSearch)
        )
      : activitiesData

  if (isLoading) return <CenteredLoading />

  if (error) return <ErrorMessage />

  return (
    <section className={commonStyles.pageContainer}>
      <div className={commonStyles.pageHeader}>
        <h1>{data.Title}</h1>
        <p>{data.Description}</p>
      </div>

      <SearchBar
        placeholderForTextField="Search for activities!"
        handleTextChange={handleTextSearch}
      />

      {activitiesIsLoading ? (
        <CircularProgress />
      ) : activitiesError ? (
        <ErrorMessage
          title={"Could not fetch activities"}
          description="We had some problems fetching the activities for you. Please try again later."
        />
      ) : (
        <div className={commonStyles.cardList}>
          <CoverCardList cardList={filteredActivities} resource={ACTIVITIES} />
        </div>
      )}
    </section>
  )
}
