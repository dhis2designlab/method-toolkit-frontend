import React from "react";
import { Card } from "@dhis2/ui-core";

import styles from "./PreviewCard.module.css";

interface previewCard {
  title: string;
  intro: string;
}

const PreviewCard = ({ title, intro }: previewCard) => {
  // Shows the first 100 characters in the card, if there's less than 100 characters
  // the sent in text gets returned.
  const previewText = (text: string) => {
    const previewText =
      text.length > 100 ? text.substring(0, 100) + "..." : text;
    return previewText;
  };

  return (
    <Card className={styles.card}>
      <h3>{title}</h3>
      <p>{previewText(intro)}</p>
    </Card>
  );
};

export default PreviewCard;
