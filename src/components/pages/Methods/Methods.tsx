import { useState } from "react"
import { usePage } from "../../../hooks/usePage"
import { CircularProgress } from "@material-ui/core"
import { ErrorMessage } from "../../ErrorMessage/ErrorMessage"

import commonStyles from "../commonStyles.module.css"
import SearchBar from "../../SearchBar/SearchBar"
import { CoverCard } from "../../CoverCard/CoverCard"
import { useMethods } from "../../../hooks/useMethods"

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
          {filteredMethods.map((methods: any) => {
            return (
              <CoverCard
                key={methods.id}
                id={methods.id}
                resource="methods"
                title={methods.title}
                slug={methods.slug}
                cardContent={methods.cover.short_description}
              />
            )
          })}
        </div>
      )}
    </section>
  )
}
