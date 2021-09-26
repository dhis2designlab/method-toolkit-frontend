import { Button, Card } from "@material-ui/core"
import styles from "./CoverCard.module.css"
import { Link } from "react-router-dom"

interface CoverCardProps {
  id: string
  resource: string
  title: string
  cardContent: string
  coverImageUrl?: string
  slug?: string
}

export const CoverCard = ({
  id,
  resource,
  title,
  cardContent,
  coverImageUrl,
  slug
}: CoverCardProps) => {
  return (
    <Card className={styles.cardContainer}>
      <h3>{title}</h3>
      <p>{cardContent}</p>
      <Link id={styles.cardButton} to={`/${resource}/${slug ?? id}`}>
        <Button variant="outlined">Read more</Button>
      </Link>
    </Card>
  )
}
