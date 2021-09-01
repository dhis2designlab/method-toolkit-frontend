import { useState } from "react"
import ReactMarkdown from "react-markdown"
import PreviewCard from "../PreviewCard/PreviewCard"
import useFetch from "../../api/useFetch"
import { techniquesResource } from "../../api/constants"
import { technique, example } from "../interfaces"
import CircularProgress from "@material-ui/core/CircularProgress"
import WhatDoINeedBar from "./components/WhatDoINeedBar"
import Alert from "@material-ui/lab/Alert"
import AlertTitle from "@material-ui/lab/AlertTitle"
import { RouteComponentProps } from "react-router"
import { TParams } from "../types"

import styles from "./Technique.module.css"

const Technique = ({ match }: RouteComponentProps<TParams>) => {
  const [result, setResult] = useState<technique | undefined>(undefined)

  const handleResult = (newResult: technique[]) => {
    if (newResult && newResult[0] !== result) {
      setResult(newResult[0])
    }
  }

  const { isLoading, error, response } = useFetch(
    `${techniquesResource}?slug=${match.params.id}`
  )

  handleResult(response)

  if (isLoading) {
    return (
      <article className={styles.container}>
        <CircularProgress />
      </article>
    )
  }

  if (error) {
    return (
      <article className={styles.container}>
        <Alert severity="error">
          <AlertTitle>Could not fetch technique</AlertTitle>
          We could not fetch the technique you requested. Please try again.
        </Alert>
      </article>
    )
  }

  if (result) {
    return (
      <article className={styles.container} key={result.id}>
        <h1 className={styles.title}>{result.title}</h1>
        <div className={styles.contentDivider}>
          <article className={styles.contentLeft}>
            <WhatDoINeedBar
              difficulty={result.difficulty}
              phase={result.phase}
              minimum_time={result.minimum_time}
              maximum_time={result.maximum_time}
              materials={result.materials}
              pairs_well_with={result.pairs_well_with}
            />
            <h2>What</h2>
            <p>{result.intro}</p>
            <ReactMarkdown children={result.content} />
          </article>
          {result.examples?.length !== 0 ? (
            <article className={styles.contentRight}>
              <h2>Examples from other DHIS2 projects</h2>
              <article className={styles.center}>
                {result.examples?.map((example: example) => {
                  return (
                    <PreviewCard
                      title={example.title}
                      intro={example.intro}
                      resource={"examples"}
                      id={example.id}
                      key={example.id}
                    />
                  )
                })}
              </article>
            </article>
          ) : null}
        </div>
      </article>
    )
  }
}

export default Technique
