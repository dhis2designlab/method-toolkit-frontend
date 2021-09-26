import { useState } from "react"
import { usePage } from "../../../hooks/usePage"
import { CircularProgress } from "@material-ui/core"
import { ErrorMessage } from "../../ErrorMessage/ErrorMessage"

import commonStyles from "../commonStyles.module.css"
import SearchBar from "../../SearchBar/SearchBar"
import { CoverCard } from "../../CoverCard/CoverCard"
import { useActivities } from "../../../hooks/useActivities"

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

  if (isLoading) return <CircularProgress />

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
          {filteredActivities.map((activity: any) => {
            return (
              <CoverCard
                key={activity.id}
                id={activity.id}
                resource="activities"
                title={activity.title}
                cardContent={activity.cover.short_description}
              />
            )
          })}
        </div>
      )}
    </section>
  )
}
