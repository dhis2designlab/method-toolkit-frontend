import { useEffect, useState } from "react"

const useFetch = (resource: string) => {
  const [isLoading, setIsLoading] = useState(true)
  const [response, setResponse] = useState<any>(undefined)
  const [error, setError] = useState<Error | undefined>(undefined)

  const baseURL: string = "https://method-toolkit-backend.herokuapp.com"

  const handleErrors = (res: Response) => {
    if (!res.ok) {
      throw new Error(res.statusText)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${baseURL}${resource}`)
        handleErrors(res)
        const json = await res.json()
        setResponse(json)
      } catch (error) {
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
