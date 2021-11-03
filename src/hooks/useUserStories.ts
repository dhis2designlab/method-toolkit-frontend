import { useQuery } from "react-query"
import { USER_STORIES } from "../constants"

export const useUserStories = (urlParams?: string) => {
  return useQuery(USER_STORIES, async () => {
    const response = await fetch(
      `${process.env.REACT_APP_STRAPI_URL}/${USER_STORIES}${urlParams ?? ""}`
    )

    if (!response.ok) {
      throw new Error(
        `Status: ${response.status} \n Status text: ${response.statusText}`
      )
    }

    return response.json()
  })
}
