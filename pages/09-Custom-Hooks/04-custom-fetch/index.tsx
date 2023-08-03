import useFetch from '@/src/hooks/useFetch'

// 더미 데이터 반환해주는 API - jsonplaceholder
const baseURL = 'https://jsonplaceholder.typicode.com'

export default function CustomHookFetchPage() {
  const { data: userData } = useFetch(baseURL, 'users')
  const { data: postData } = useFetch(baseURL, 'posts')

  return (
    <>
      <h1>User</h1>
      {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
      <h1>Post</h1>
      {postData && <pre>{JSON.stringify(postData[0], null, 2)}</pre>}
    </>
  )
}
