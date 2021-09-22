import { Alert, AlertTitle } from "@material-ui/lab"
import styles from "./ErrorMessage.module.css"

interface ErrorMessageInterface {
  title: string
  description: string
}

export const ErrorMessage = ({
  title,
  description,
}: ErrorMessageInterface): JSX.Element => {
  return (
    <div className={styles.errorMessage}>
      <Alert severity="error">
        <AlertTitle>{title}</AlertTitle>
        {description}
      </Alert>
    </div>
  )
}
