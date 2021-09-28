import { useQuery } from "react-query"
import { USER_STORIES } from "./constants"

export const useUserStories = (urlParams?: string) => {
  return useQuery(
    USER_STORIES,
    async () =>
      await fetch(
        `${process.env.REACT_APP_STRAPI_URL}/${USER_STORIES}${urlParams ?? ""}`
      ).then((res) => res.json())
  )
}
