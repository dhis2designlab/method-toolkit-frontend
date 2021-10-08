import { useQuery } from "react-query"

const fetchPage = async (pageResource: string) => {
  const response = await fetch(
    `${process.env.REACT_APP_STRAPI_URL}${pageResource}`
  )
  if (!response.ok) {
    throw new Error(
      `Status: ${response.status} \n Status text: ${response.statusText}`
    )
  }

  return response.json()
}

export const usePage = (queryKey: string, pageResource: string) => {
  return useQuery(queryKey, () => fetchPage(pageResource))
}
