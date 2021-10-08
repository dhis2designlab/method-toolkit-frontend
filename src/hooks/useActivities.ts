import { useQuery } from "react-query"
import { ACTIVITIES } from "../constants"

export const useActivities = (urlParams?: string) => {
  return useQuery(ACTIVITIES, async () => {
    const response = await fetch(
      `${process.env.REACT_APP_STRAPI_URL}/${ACTIVITIES}${urlParams ?? ""}`
    )

    if (!response.ok) {
      throw new Error(
        `Status: ${response.status} \n Status text: ${response.statusText}`
      )
    }

    return response.json()
  })
}
