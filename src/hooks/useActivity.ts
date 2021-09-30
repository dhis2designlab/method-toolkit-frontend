import { useQuery } from "react-query"
import { ACTIVITIES } from "../constants"

export const useActivity = (id: string) => {
  return useQuery(
    [ACTIVITIES, id],
    async () =>
      await fetch(
        `${process.env.REACT_APP_STRAPI_URL}/${ACTIVITIES}/${id}`
      ).then((res) => res.json())
  )
}
