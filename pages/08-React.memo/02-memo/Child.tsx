import { memo } from 'react'

function Child2({ name, age }: any) {
  console.log('👶자녀  컴포넌트가 렌더링이 되었어요.')

  return (
    <div style={{ border: '2px solid powderblue', padding: '10px' }}>
      <h3>👶자녀</h3>
      <p>name: {name}</p>
      <p>age: {age}</p>
    </div>
  )
}

/*** 📌 React.memo 사용법
 * 최적화하려는 컴포넌트를 memo()로 감싸주기
 * 👉 memo()  : react에서 제공하는 고차 컴포넌트 중 하나
 * 고차 컴포넌트 : 컴포넌트를 인자로 받아서 또 다른 컴포넌트를 반환해줌
 *
 * 컴포넌트를 인자로 받아, props체크하는 최적화된 컴포넌트를 반환합니다.
 */
export default memo(Child2)
