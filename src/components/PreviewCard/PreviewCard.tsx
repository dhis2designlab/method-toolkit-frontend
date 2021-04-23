import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import { Link } from "react-router-dom";

import styles from "./PreviewCard.module.css";

interface previewCard {
  title: string;
  intro: string;
  resource: string;
  id: string;
}

const PreviewCard = ({ title, intro, id, resource }: previewCard) => {
  // Shows the first 100 characters in the card, if there's less than 100 characters
  // the sent in text gets returned.
  const previewText = (text: string) => {
    const previewText =
      text.length > 100 ? text.substring(0, 100) + "..." : text;
    return previewText;
  };

  return (
    <div className={styles.container}>
    <Link to={`/${resource}/${id}`}>
      <Card className={styles.card}>
        <CardContent>
        <h3>{title}</h3>
        <p>{previewText(intro)}</p>
        </CardContent>
      </Card>
    </Link>
    </div>
  );
};

export default PreviewCard;
