import { useQuery } from "react-query"
import { METHODS } from "../constants"

export const useMethods = (urlParams?: string) => {
  return useQuery(
    METHODS,
    async () => {
        const response = await fetch(
          `${process.env.REACT_APP_STRAPI_URL}/${METHODS}${urlParams ?? ""}`
        )

        if (!response.ok) {
          throw new Error(
            `Status: ${response.status} \n Status text: ${response.statusText}`
          )
        }
      
        return response.json()

    }
  )
}
