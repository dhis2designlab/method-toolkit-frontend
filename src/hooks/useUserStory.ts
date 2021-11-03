import { useQuery } from "react-query"
import { USER_STORIES } from "../constants"

export const useUserStory = (id: string) => {
  return useQuery([USER_STORIES, id], async () => {
    const response = await fetch(
      `${process.env.REACT_APP_STRAPI_URL}/${USER_STORIES}/${id}`
    )

    if (!response.ok) {
      throw new Error(
        `Status: ${response.status} \n Status text: ${response.statusText}`
      )
    }

    return response.json()
  })
}
