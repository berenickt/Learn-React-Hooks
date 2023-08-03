import { useState } from 'react'
import Child1 from './Child'

/*** 📌 React.memo
 * React에서는 부모컴포넌트가 렌더링되면, 모든 자식 컴포넌트들도 렌더링됩니다.
 * 부모 나이가 증가(부모 컴포넌트가 렌더링)하면, 자식 컴포넌트도 렌더링됨
 * 자식 나이가 증가(자식 컴포넌트가 렌더링)하면, 부모 컴포넌트도 렌더링됨
 *
 * ✅ 문제점
 * 렌더링할 필요없는 컴포넌트도 렌더링되고 있음
 * 이를 React.memo로 해결할 수 있음
 * 부모 컴포넌트가 렌더링될 때,
 * 부모 컴포넌트만 렌더링되고, 자식은 안되게 할 떄
 *
 * cf. React.memo의 memo는 Memoization을 의미
 * Memoization은 이미 계산된 값을 메모리에 저장하고 재사용하는 기법
 * React.memo는 꼭 필요할 때만 써야합니다.
 * Memoization은 메모리를 쓰는 행위이기 때문에,
 * 무분별하게 쓰면 오히려 성능을 떨어뜨립니다.
 *
 * React.memo를 쓰는 상황
 * 1. 컴포넌트가 같은 Props로 자주 렌더링될 떄
 * 2. 컴포넌트가 렌더링될 때마다 복잡한 로직을 처리할 떄
 *
 * React.memo는 오직 Props 변화에만 의존하는 최적화 방법입니다.
 */
export default function MemoNonePage() {
  const [parentAge, setParentAge] = useState(0)
  const [childAge, setChildAge] = useState(0)

  const incrementParentAge = () => setParentAge(parentAge + 1)
  const incrementChildAge = () => setChildAge(childAge + 1)

  console.log('🧑부모 컴포넌트가 렌더링이 되었어요.')

  return (
    <div style={{ border: '2px solid orange', padding: '10px' }}>
      <h1>🧑부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <button onClick={incrementChildAge}>자녀 나이 증가</button>
      <Child1 name={'홍길동'} age={childAge} />
    </div>
  )
}
