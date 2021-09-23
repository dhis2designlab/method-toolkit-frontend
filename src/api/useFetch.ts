import { useEffect, useState } from "react"

const useFetch = (resource: string) => {
  const [isLoading, setIsLoading] = useState(true)
  const [response, setResponse] = useState<any>(undefined)
  const [error, setError] = useState<Error | undefined>(undefined)

  const handleErrors = (res: Response) => {
    if (!res.ok) {
      throw new Error(res.statusText)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_STRAPI_URL}${resource}`)
        handleErrors(res)
        const json = await res.json()
        setResponse(json)
      } catch (error: any) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [resource])

  return { isLoading, error, response }
}

export default useFetch
