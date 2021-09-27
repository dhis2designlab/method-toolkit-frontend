import { Link } from "react-router-dom"
import {
  capitalizeFirstLetter,
  deCapitalizeFirstLetter,
} from "../../../util/textUtils"
import styles from "./InfoBar.module.css"

interface InfoBarProps {
  minimumTime?: number
  maximumTime?: Number
  materials?: any
  participants?: string
  difficulty?: string
  methods?: any
}

const buildMaterialsString = (materials: any) => {
  let materialsArray = materials.map((material: any) => material.name)
  let materialsString = ""
  for (let i = 0; i < materialsArray.length; i++) {
    switch (i) {
      case 0:
        materialsString += `${capitalizeFirstLetter(materialsArray[i])}`
        break
      default:
        materialsString += `, ${deCapitalizeFirstLetter(materialsArray[i])}`
        break
    }
  }
  return materialsString
}

export const InfoBar = ({
  minimumTime,
  maximumTime,
  materials,
  participants,
  difficulty,
  methods,
}: InfoBarProps) => {
  buildMaterialsString(materials)
  return (
    <>
      <article className={styles.infoBar}>
        <h3 id={styles.infoBarHeading}>Info</h3>
        {minimumTime && maximumTime ? (
          <div>
            <h4>Duration</h4>
            <p>
              {minimumTime}-{maximumTime} hours
            </p>
          </div>
        ) : null}
        {materials ? (
          <div>
            <h4>Materials</h4>
            <p>{buildMaterialsString(materials)}</p>
          </div>
        ) : null}
        {participants && participants !== "" ? (
          <div>
            <h4>Participants</h4>
            <p>{participants}</p>
          </div>
        ) : null}
        {difficulty ? (
          <div>
            <h4>Difficulty</h4>
            <p>{capitalizeFirstLetter(difficulty)}</p>
          </div>
        ) : null}
        {methods ? (
          <div>
            <h4>Pairs well with</h4>
            <div className={styles.pairsWellWith}>
              {methods.map((method: any) => {
                return <Link to={`${method.slug}`}>{method.title}</Link>
              })}
            </div>
          </div>
        ) : null}
      </article>
    </>
  )
}
