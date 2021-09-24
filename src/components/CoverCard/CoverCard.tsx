import { Button, Card } from "@material-ui/core"
import styles from "./CoverCard.module.css"

interface CoverCardProps {
    title: string,
    cardContent: string,
    coverImageUrl?: string,
    slug?: string
}

export const CoverCard = ({ title, cardContent, coverImageUrl }: CoverCardProps) => {
    return (
        <Card className={styles.cardContainer}>
            <h3>{title}</h3>
            <p>{cardContent}</p>
            <Button variant="outlined">Read more</Button>
        </Card>
    )
}