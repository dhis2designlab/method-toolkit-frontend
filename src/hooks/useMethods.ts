import { useQuery } from "react-query"
import { METHODS } from "../constants"

export const useMethods = (urlParams?: string) => {
  return useQuery(
    METHODS,
    async () =>
      await fetch(
        `${process.env.REACT_APP_STRAPI_URL}/${METHODS}${urlParams ?? ""}`
      ).then((res) => res.json())
  )
}
