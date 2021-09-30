import { useQuery } from "react-query"
import { METHODS } from "../constants"

export const useMethods = () => {
  return useQuery(
    METHODS,
    async () =>
      await fetch(
        `${process.env.REACT_APP_STRAPI_URL}/${METHODS}`
      ).then((res) => res.json())
  )
}
