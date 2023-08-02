import { useRef, useState } from 'react'

export default function UseRefLetPage() {
  const [renderer, setRenderer] = useState(0)
  const countRef = useRef(0)
  let countVar = 0

  /** 📌 일반 변수와 useRef의 차이점
   * 컴포넌트 렌더링 => 함수가 다시 불림
   * 함수가 다시 불림 => 해당 함수 내 모든 변수와 함수들이 초기화됨
   *
   * 즉, 일반 변수는 재렌더링되면서 계속 초기화되고,
   * Ref는 컴포넌트가 렌더링되어도, 초기화되지 않고 계속 값을 유지함
   */
  const doRendering = () => {
    setRenderer(renderer + 1)
  }

  const onClickIncreaseRef = () => {
    countRef.current = countRef.current + 1
    console.log('Ref :', countRef.current)
  }

  const onClickIncreaseState = () => {
    countVar += 1
    console.log('var: ', countVar)
  }

  const printResults = () => {
    console.log(`ref: ${countRef.current}, var: ${countVar}`)
  }

  return (
    <>
      <h1>useRef-02-변수관리-일반변수와 ref의 차이점</h1>
      <p>Ref : {countRef.current}</p>
      <p>Var : {countVar}</p>
      <button onClick={doRendering}>렌더링</button>
      <button onClick={onClickIncreaseRef}>Ref 올려</button>
      <button onClick={onClickIncreaseState}>Var 올려</button>
      <button onClick={printResults}>Ref Var 값 출력</button>
    </>
  )
}
