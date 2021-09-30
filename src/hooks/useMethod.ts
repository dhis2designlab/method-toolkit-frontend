import { useQuery } from "react-query"
import { METHODS } from "../constants"

export const useMethod = (slug: string) => {
  return useQuery(
    [METHODS, slug],
    async () =>
      await fetch(
        `${process.env.REACT_APP_STRAPI_URL}/${METHODS}?slug=${slug}`
      ).then((res) => res.json())
  )
}
