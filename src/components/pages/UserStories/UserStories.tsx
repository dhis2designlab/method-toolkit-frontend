import { useState } from "react"
import { usePage } from "../../../hooks/usePage"
import { CircularProgress } from "@material-ui/core"
import { ErrorMessage } from "../../ErrorMessage/ErrorMessage"
import SearchBar from "../../SearchBar/SearchBar"
import { CoverCardList } from "../../CoverCardList/CoverCardList"
import commonStyles from "../commonStyles.module.css"
import { USER_STORIES } from "../../../constants"
import { CenteredLoading } from "../../CenteredLoading/CenteredLoading"
import { useUserStories } from "../../../hooks/useUserStories"

export const UserStories = (): JSX.Element => {
  const USER_STORIES_QUERYKEY = "user-stories-page"

  const [textSearch, setTextSearch] = useState<string>("")
  const handleTextSearch = (newValue: string) => {
    setTextSearch(newValue)
  }

  const { isLoading, error, data } = usePage(
    USER_STORIES_QUERYKEY,
    `/${USER_STORIES_QUERYKEY}`
  )

  const {
    isLoading: userStoriesIsLoading,
    data: userStoriesData,
    error: userStoriesError,
  } = useUserStories()

  const filteredUserStories =
    textSearch !== ""
      ? userStoriesData.filter(
          (userStory: any) =>
            userStory.title.toLowerCase().includes(textSearch) ||
            userStory.cover.short_description.toLowerCase().includes(textSearch)
        )
      : userStoriesData

  if (isLoading) return <CenteredLoading />

  if (error) return <ErrorMessage />

  return (
    <section className={commonStyles.pageContainer}>
      <div className={commonStyles.pageHeader}>
        <h1>{data.Title}</h1>
        <p>{data.Description}</p>
      </div>

      <SearchBar
        placeholderForTextField="Search for user stories!"
        handleTextChange={handleTextSearch}
      />

      {userStoriesIsLoading ? (
        <CircularProgress />
      ) : userStoriesError ? (
        <ErrorMessage
          title={"Could not fetch user stories"}
          description="We had some problems fetching the user stories for you. Please try again later."
        />
      ) : (
        <div className={commonStyles.cardList}>
          <CoverCardList
            cardList={filteredUserStories}
            resource={USER_STORIES}
          />
        </div>
      )}
    </section>
  )
}
