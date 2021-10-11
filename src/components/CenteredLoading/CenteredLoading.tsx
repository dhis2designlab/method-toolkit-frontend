import CircularProgress from "@material-ui/core/CircularProgress"
import styles from "./CenteredLoading.module.css"

export const CenteredLoading = () => {
  return (
    <div className={styles.container}>
      <CircularProgress />
    </div>
  )
}
