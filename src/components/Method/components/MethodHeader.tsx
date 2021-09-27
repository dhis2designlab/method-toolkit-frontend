import ReactMarkdown from "react-markdown"
import { StrapiImage } from "../../StrapiComponents/StrapiImage"

import styles from "./MethodHeader.module.css"

interface MethodHeaderProps {
  title: string
  description: string
  image?: any
}

// TODO add strapiimage

const MethodHeader = ({ title, description, image }: MethodHeaderProps) => {
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

export default MethodHeader
