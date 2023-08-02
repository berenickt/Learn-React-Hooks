import { useEffect, useRef, useState } from 'react'

/** useRef 정리
 * useRef는 변화는 감지해야 하지만,
 * 그 변화가 렌더링을 발생시키면 안되는 값을 다룰 때 사용
 */
export default function UseRefRenderingPage() {
  const [count, setCount] = useState(1)
  // const [renderCount, setRenderCount] = useState(1)

  const renderCount = useRef(1)

  // **** 📌 useEffect 주의점 => 무한루프
  // 1. 올려 버튼 클릭
  // 2. useEffect안에서도 count를 업데이트시킴
  // 3.
  // useEffect(() => {
  //   console.log('렌더링')
  //   setRenderCount(renderCount + 1)
  // })

  useEffect(() => {
    renderCount.current = renderCount.current + 1
    console.log('렌더링 수: ', renderCount.current)
  })

  return (
    <>
      <h1>useRef-03-무한루프</h1>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>올려</button>
    </>
  )
}
