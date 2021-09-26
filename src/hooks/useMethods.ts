import { useQuery } from "react-query"

// Endpoint will be changed in #78
// https://github.com/dhis2designlab/method-toolkit-frontend/issues/78
const METHODS = "techniques"

export const useMethods = () => {
  return useQuery(
    METHODS,
    async () =>
      await fetch(
        `${process.env.REACT_APP_STRAPI_URL}/${METHODS}`
      ).then((res) => res.json())
  )
}
