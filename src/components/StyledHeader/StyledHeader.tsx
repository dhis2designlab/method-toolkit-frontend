import ReactMarkdown from "react-markdown"
import { StrapiImage } from "../StrapiComponents/StrapiImage"

import styles from "./StyledHeader.module.css"

interface StyledHeaderProps {
  title: string
  description: string
  image?: any
}

const StyledHeader = ({ title, description, image }: StyledHeaderProps) => {
  return (
    <div className={styles.methodHeaderContainer}>
      <div className={styles.methodHeader}>
        {image ? <StrapiImage image={image} width={256} /> : null}
        <div className={styles.methodHeaderText}>
          <h1>{title}</h1>
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default StyledHeader
