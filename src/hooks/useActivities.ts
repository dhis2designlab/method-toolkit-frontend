import { useQuery } from "react-query"
import { ACTIVITIES } from "../constants"

export const useActivities = (urlParams?: string) => {
  return useQuery(
    ACTIVITIES,
    async () =>
      await fetch(
        `${process.env.REACT_APP_STRAPI_URL}/${ACTIVITIES}${urlParams ?? ""}`
      ).then((res) => res.json())
  )
}
