import { useRef, useState } from 'react'

/** 📌 useRef
 * useRef(value)로 저장된 값은 ref 객체 안의 {current : value} 형태로 저장됩니다.
 * current의 값은 초기값이 들어갑니다.
 *
 * e.g.
 * const ref = useRef("hi") ==> { current: "hi" }
 * ref.current              ==> { current: "hello" }
 *
 * 반환된 ref는 컴포넌트 전 생애주기에 유지됩니다.
 * 즉, 컴포넌트가 재렌더링되더라도, 언마운트 전까지 값을 유지할 수 있습니다.
 *
 * useRef를 쓰는 2가지 상황이 있습니다.
 * 1. state와 비슷하게 어떤 값을 저장해두는 저장공간
 *  -- state의 변화 -> 렌더링 -> 컴포넌트 내부 변수들 초기화
 *  -- ref의 변화 -> No 렌더링 -> 변수들의 값이 유지됨
 *  -- state의 변화 -> 렌더링 -> 그래도 Ref의 값은 유지됨
 * 2. Ref를 통해 실제 DOM 요소에 접근할 때
 *  -- input 요소를 클릭하지 않아도, 포커스를 주고 싶을 떄
 *  -- e.g. 로그인 화면에 아이디 input 창에 바로 포커스
 *  -- 바닐라 JS의 Document.querySelector()와 비슷
 */
export default function UseRefPage() {
  // ** 🔍  state : 값이 변할 때마다 재렌더링됨
  const [count, setCount] = useState(0)
  // ** 🔍 ref : 아무리 수정해도 재렌더링되지 않음,
  // 실제 값은 변경됨, 다음 렌더링때 변화된 값이 반영됨
  const countRef = useRef(0)

  console.log(countRef) // currentRef.current
  console.log('렌더링...🎨')

  const onClickIncreaseState = () => {
    setCount(count + 1)
  }

  const onClickIncreaseRef = () => {
    countRef.current = countRef.current + 1
    console.log('Ref :', countRef.current)
  }

  return (
    <>
      <h1>useRef-01-변수관리</h1>
      <p>State : {count}</p>
      <p>Ref : {countRef.current}</p>
      <button onClick={onClickIncreaseState}>State 올려</button>
      <button onClick={onClickIncreaseRef}>Ref 올려</button>
    </>
  )
}
