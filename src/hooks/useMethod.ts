import { useQuery } from "react-query"
import { METHODS } from "../constants"

export const useMethod = (slug: string) => {
  return useQuery([METHODS, slug], async () => {
    const response = await fetch(
      `${process.env.REACT_APP_STRAPI_URL}/${METHODS}?slug=${slug}`
    )

    if (!response.ok) {
      throw new Error(
        `Status: ${response.status} \n Status text: ${response.statusText}`
      )
    }

    return response.json()
  })
}
