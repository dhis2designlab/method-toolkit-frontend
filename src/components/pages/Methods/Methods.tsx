import { useState } from "react"
import { usePage } from "../../../hooks/usePage"
import { CircularProgress } from "@material-ui/core"
import { ErrorMessage } from "../../ErrorMessage/ErrorMessage"
import SearchBar from "../../SearchBar/SearchBar"
import { useMethods } from "../../../hooks/useMethods"
import { CoverCardList } from "../../CoverCardList/CoverCardList"
import commonStyles from "../commonStyles.module.css"

export const Methods = (): JSX.Element => {
  const METHODS_QUERYKEY = "methods-page"

  const [textSearch, setTextSearch] = useState<string>("")
  const handleTextSearch = (newValue: string) => {
    setTextSearch(newValue)
  }

  const { isLoading, error, data } = usePage(
    METHODS_QUERYKEY,
    `/${METHODS_QUERYKEY}`
  )

  const {
    isLoading: methodsIsLoading,
    data: methodsData,
    error: methodsError,
  } = useMethods()

  const filteredMethods =
    textSearch !== ""
      ? methodsData.filter(
          (method: any) =>
            method.title.toLowerCase().includes(textSearch) ||
            method.cover.short_description.toLowerCase().includes(textSearch)
        )
      : methodsData

  if (isLoading) return <CircularProgress />

  if (error) return <ErrorMessage />

  return (
    <section className={commonStyles.pageContainer}>
      <div className={commonStyles.pageHeader}>
        <h1>{data.Title}</h1>
        <p>{data.Description}</p>
      </div>

      <SearchBar
        placeholderForTextField="Search for methods!"
        handleTextChange={handleTextSearch}
      />

      {methodsIsLoading ? (
        <CircularProgress />
      ) : methodsError ? (
        <ErrorMessage
          title={"Could not fetch methods"}
          description="We had some problems fetching the methods for you. Please try again later."
        />
      ) : (
        <div className={commonStyles.cardList}>
          <CoverCardList cardList={filteredMethods} resource={"methods"} />
        </div>
      )}
    </section>
  )
}
