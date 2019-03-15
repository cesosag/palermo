import { useEffect, useState } from 'react'

const useAPI = (endpoint, deps) => {
  const [data, setData] = useState({ title: 'hello' })
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setError(null)
      setIsLoading(true)
      try {
        const res = await fetch(endpoint)
        setData(await res.json())
      } catch (err) {
        setError(err)
      }
      setIsLoading(false)
    }
    fetchData()
  }, deps)

  return [data, isLoading, error]
}

export default useAPI
