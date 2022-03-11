import { useQuery } from "react-query"
import { STORIES_STRAPI } from "../constants"

export const useStory = (id: string) => {
  return useQuery([STORIES_STRAPI, id], async () => {
    const response = await fetch(
      `${process.env.REACT_APP_STRAPI_URL}/${STORIES_STRAPI}/${id}`
    )

    if (!response.ok) {
      throw new Error(
        `Status: ${response.status} \n Status text: ${response.statusText}`
      )
    }

    return response.json()
  })
}
