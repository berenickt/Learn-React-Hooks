import { useCallback, useState } from 'react'
import Child6 from './Child'

export default function MemoUseMemoPage() {
  const [parentAge, setParentAge] = useState(0)

  const incrementParentAge = () => setParentAge(parentAge + 1)

  console.log('🧑부모 컴포넌트가 렌더링이 되었어요.')

  /** 📌 참조형 타입(객체, 배열, 함수 등)의 경우, React.memo+useCallback만 사용
   * useCallback = `함수`를 메모이제이션할 떄
   * useMemo = `변수`를 메모이제이션할 떄
   *
   * useCallback을 사용하면, tellMe는 항상 같은 메모리 주소를 갖고 있기 때문에
   * 자식 컴포넌트의 React.memo에서 재렌더링이 일어나지 않습니다.
   */
  // useCallback을 사용하면
  const tellMe = useCallback(() => {
    console.log('길동아 사랑해')
  }, [])

  return (
    <div style={{ border: '2px solid orange', padding: '10px' }}>
      <h1>🧑부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <Child6 name={'홍길동'} tellMe={tellMe} />
    </div>
  )
}
