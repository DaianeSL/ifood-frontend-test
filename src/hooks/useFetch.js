import { useEffect, useState } from 'react'
import fetch from 'isomorphic-unfetch'

const useFetch = (url, options = {}) => {
  const [response, setResponse] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const data = await fetch(url, options)
        const json = await data.json()

        setResponse(json)
        setLoading(false)
      } catch (err) {
        setError(err)
      }
    }
    fetchData()
  }, [])

  return { response, isLoading, error }
}

export default useFetch
