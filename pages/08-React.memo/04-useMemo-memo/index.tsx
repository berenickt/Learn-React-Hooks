import { useMemo, useState } from 'react'
import Child from './Child'

export default function MemoUseMemoPage() {
  const [parentAge, setParentAge] = useState(0)

  const incrementParentAge = () => setParentAge(parentAge + 1)

  console.log('🧑부모 컴포넌트가 렌더링이 되었어요.')

  /** 📌 참조형 타입(객체, 배열 등)의 경우, React.memo + useMemo 사용
   * useMemo를 사용하면, name이라는 변수가 새로운 메모리 주소를 가리키고 있어도
   * name이라는 변수의 값이 같다면, React.memo는 name이라는 변수가 변경되지 않았다고 판단 후 렌더링을 하지 않는다.
   * 즉, React.memo는 name이라는 변수가 변경되었는지를 판단하는 것이 아니라,
   * name이라는 변수가 가리키고 있는 메모리 주소가 변경되었는지를 판단한다.
   * 그래서 name이라는 변수가 가리키고 있는 메모리 주소가 변경되지 않았다면, React.memo는 렌더링을 하지 않는다.
   */
  const name = useMemo(() => {
    return {
      lastName: '홍',
      firstName: '길동',
    }
  }, [])

  return (
    <div style={{ border: '2px solid orange', padding: '10px' }}>
      <h1>🧑부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <Child name={name} />
    </div>
  )
}
