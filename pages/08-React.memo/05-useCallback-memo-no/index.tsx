import { useState } from 'react'
import Child from './Child'

export default function MemoUseCallbackNonePage() {
  const [parentAge, setParentAge] = useState(0)

  const incrementParentAge = () => setParentAge(parentAge + 1)

  console.log('🧑부모 컴포넌트가 렌더링이 되었어요.')

  /*** 📌 참조형 타입(객체, 배열, 함수 등)의 경우, React.memo만 사용했을 경우
   * 부모 컴포넌트가 렌더링이 되면 자식 컴포넌트도 렌더링이 되는데,
   * JS에서 함수는 객체의 한 종류입니다.
   * 마찬가지로 tellMe()는 객체이기 때문에 메모리 주소가 들어있습니다.
   * 그래서 컴포넌트가 렌더링될 떄마다, 자식 컴포넌트로 tellMe()를 다른 메모리 주소가 전달됩니다.
   */
  const tellMe = () => console.log('길동아 사랑해')

  return (
    <div style={{ border: '2px solid orange', padding: '10px' }}>
      <h1>🧑부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <Child name={'홍길동'} tellMe={tellMe} />
    </div>
  )
}
