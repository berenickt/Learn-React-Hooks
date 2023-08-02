import { useEffect, useState } from 'react'
import Timer from '../../src/components/Timer'

export default function UseEffectCleanUpPage() {
  const [showTimer, setShowTimer] = useState(false)

  // **** 맨 처음 렌더링됐을 때만, 마운트
  useEffect(() => {
    console.log('마운팅...🛥️')
  }, [])

  return (
    <>
      <h1>useEffect-02-Clean-Up</h1>
      {showTimer && <Timer />}
      <br />
      <button onClick={() => setShowTimer(!showTimer)}>토글 Timer</button>
    </>
  )
}
