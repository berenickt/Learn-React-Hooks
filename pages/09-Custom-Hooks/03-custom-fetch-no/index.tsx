import { useEffect, useState } from 'react'

// 더미 데이터 반환해주는 API - jsonplaceholder
const baseURL = 'https://jsonplaceholder.typicode.com'

export default function CustomHookFetchNonePage() {
  const [data, setData] = useState(null)

  const fetchUrl = (type: string) => {
    fetch(baseURL + '/' + type)
      .then(res => res.json())
      .then(res => setData(res))
  }

  useEffect(() => {
    fetchUrl('users')
  }, [])

  return (
    <>
      <h1>useFetch</h1>
      <button onClick={() => fetchUrl('users')}>Users</button>
      <button onClick={() => fetchUrl('Posts')}>Posts</button>
      <button onClick={() => fetchUrl('Todos')}>Todos</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
