import { useQuery } from "react-query"
import { ACTIVITIES } from "../constants"

export const useActivities = () => {
  return useQuery(
    ACTIVITIES,
    async () =>
      await fetch(
        `${process.env.REACT_APP_STRAPI_URL}/${ACTIVITIES}`
      ).then((res) => res.json())
  )
}
