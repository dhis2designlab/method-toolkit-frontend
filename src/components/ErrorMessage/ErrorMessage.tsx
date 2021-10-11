import { Alert, AlertTitle } from "@material-ui/lab"
import styles from "./ErrorMessage.module.css"

interface ErrorMessageInterface {
  title?: string
  description?: string
}

export const ErrorMessage = ({
  title,
  description,
}: ErrorMessageInterface): JSX.Element => {
  const genericTitle = "Failed while fetching"
  const genericDescription =
    "Could not fetch the content for the page. Please try again later."

  return (
    <div className={styles.errorMessageContainer}>
      <div className={styles.errorMessages}>
        <Alert severity="error">
          <AlertTitle>{title ?? genericTitle}</AlertTitle>
          {description ?? genericDescription}
        </Alert>
      </div>
    </div>
  )
}
