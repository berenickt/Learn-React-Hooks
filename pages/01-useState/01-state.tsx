import { useState } from 'react'

export default function UseStatePage() {
  // **** state 에는 형재 샅태 값이 들어있고,
  // setState 함수로 state값을 변경시킬 수 있다.
  // setState로 state를 변경할 떄마다, 컴포넌트는 리렌더링된다.
  const [time, settime] = useState(1)

  const onClickUpdate = () => {
    let newTime
    if (time >= 12) {
      newTime = 1
    } else {
      newTime = time + 1
    }
    settime(newTime)
  }

  console.log('업데이트!')

  return (
    <>
      <h1>useState</h1>
      <span>현재 시간 : {time}시</span>
      <br />
      <button onClick={onClickUpdate}>업데이트</button>
    </>
  )
}
