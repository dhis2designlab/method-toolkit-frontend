import { CoverCard } from "../CoverCard/CoverCard"
import styles from "./CoverCardList.module.css"

interface CoverCardListProps {
  cardList: any[]
  resource: string
}

export const CoverCardList = ({ cardList, resource }: CoverCardListProps) => {
  return (
    <article className={styles.cardList}>
      {cardList.map((card: any) => {
        return (
          <CoverCard
            key={card.id}
            id={card.id}
            slug={card.slug}
            resource={resource}
            title={card.title}
            cardContent={card.cover.short_description}
          />
        )
      })}
    </article>
  )
}
