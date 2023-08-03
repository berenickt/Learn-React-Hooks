import { useEffect, useState } from 'react'

export default function useFetch(baseURL: string, initialType: string) {
  const [data, setData] = useState(null)

  const fetchUrl = (type: string) => {
    fetch(baseURL + '/' + type)
      .then(res => res.json())
      .then(res => setData(res))
  }

  useEffect(() => {
    fetchUrl(initialType)
  }, [])

  return {
    data,
    fetchUrl,
  }
}
