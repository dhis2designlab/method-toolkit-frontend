import { useQuery } from "react-query";

const fetchPage = async (pageResource: string) => {
    return await fetch(`${process.env.REACT_APP_STRAPI_URL}${pageResource}`)
    .then(res => res.json())
}

export const usePage = (queryKey: string, pageResource: string) => {
    return useQuery(queryKey, () => fetchPage(pageResource))
}