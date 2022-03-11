import { useState } from "react"
import { usePage } from "../../../hooks/usePage"
import { CircularProgress } from "@material-ui/core"
import { ErrorMessage } from "../../ErrorMessage/ErrorMessage"
import SearchBar from "../../SearchBar/SearchBar"
import { CoverCardList } from "../../CoverCardList/CoverCardList"
import commonStyles from "../commonStyles.module.css"
import { STORIES } from "../../../constants"
import { CenteredLoading } from "../../CenteredLoading/CenteredLoading"
import { useStories } from "../../../hooks/useStories"

export const Stories = (): JSX.Element => {
  const STORIES_QUERYKEY = "user-stories-page"

  const [textSearch, setTextSearch] = useState<string>("")
  const handleTextSearch = (newValue: string) => {
    setTextSearch(newValue)
  }

  const { isLoading, error, data } = usePage(
    STORIES_QUERYKEY,
    `/${STORIES_QUERYKEY}`
  )

  const {
    isLoading: storiesIsLoading,
    data: storiesData,
    error: storiesError,
  } = useStories()

  const filteredUserStories =
    textSearch !== ""
      ? storiesData.filter(
          (userStory: any) =>
            userStory.title.toLowerCase().includes(textSearch) ||
            userStory.cover.short_description.toLowerCase().includes(textSearch)
        )
      : storiesData

  if (isLoading) return <CenteredLoading />

  if (error) return <ErrorMessage />

  return (
    <section className={commonStyles.pageContainer}>
      <div className={commonStyles.pageHeader}>
        <h1>{data.Title}</h1>
        <p>{data.Description}</p>
      </div>

      <SearchBar
        placeholderForTextField="Search for stories!"
        handleTextChange={handleTextSearch}
      />

      {storiesIsLoading ? (
        <CircularProgress />
      ) : storiesError ? (
        <ErrorMessage
          title={"Could not fetch stories"}
          description="We had some problems fetching the stories for you. Please try again later."
        />
      ) : (
        <div className={commonStyles.cardList}>
          <CoverCardList cardList={filteredUserStories} resource={STORIES} />
        </div>
      )}
    </section>
  )
}
