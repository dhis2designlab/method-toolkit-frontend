import { useQuery } from "react-query"
import { ACTIVITIES } from "../constants"

export const useActivity = (id: string) => {
  return useQuery([ACTIVITIES, id], async () => {
    const response = await fetch(
      `${process.env.REACT_APP_STRAPI_URL}/${ACTIVITIES}/${id}`
    )

    if (!response.ok) {
      throw new Error(
        `Status: ${response.status} \n Status text: ${response.statusText}`
      )
    }

    return response.json()
  })
}
