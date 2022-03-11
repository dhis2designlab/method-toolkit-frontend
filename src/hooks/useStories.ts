import { useQuery } from "react-query"
import { STORIES } from "../constants"

export const useStories = (urlParams?: string) => {
  return useQuery(STORIES, async () => {
    const response = await fetch(
      `${process.env.REACT_APP_STRAPI_URL}/${STORIES}${urlParams ?? ""}`
    )

    if (!response.ok) {
      throw new Error(
        `Status: ${response.status} \n Status text: ${response.statusText}`
      )
    }

    return response.json()
  })
}
