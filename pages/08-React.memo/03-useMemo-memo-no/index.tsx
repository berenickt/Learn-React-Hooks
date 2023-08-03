import { useState } from 'react'
import Child3 from './Child'

export default function MemoUseMemoNonePage() {
  const [parentAge, setParentAge] = useState(0)

  const incrementParentAge = () => setParentAge(parentAge + 1)

  console.log('🧑부모 컴포넌트가 렌더링이 되었어요.')

  /** 📌 참조형 타입(객체, 배열 등)의 경우, React.memo만 사용했을 경우
   * JS에서 오브젝트는 참조형 데이터로 메모리의 주소를 가리키고 있다.
   * 함수안의 모든 변수는 렌더링될 떄, 초기화됨
   * 그래서 name이라는 변수는 새로운 메모리 주소를 가리키고 있음
   *
   * Child 컴포넌트는 name이라는 변수가 새로운 메모리 주소를 가리키고 있기 때문에
   * React.memo입장에서는 name이라는 변수가 변경되었다고 판단하고 렌더링을 한다.
   */
  const name = {
    lastName: '홍',
    firstName: '길동',
  }

  return (
    <div style={{ border: '2px solid orange', padding: '10px' }}>
      <h1>🧑부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <Child3 name={name} />
    </div>
  )
}
