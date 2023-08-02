import { useEffect, useRef } from 'react'

/** 📌 useRef로 Dom요소에 접근
 * const ref = useRef(value)
 * ==> <input ref={ref} />
 *
 * 접근하고자 하는 요소 태그에 ref속성으로 넣어주면, 해당 요소의 DOM에 접근 가능
 * e.g. 렌더링 시 로그인 페이지에서 아이디 input에 focus효과 줄 때
 * 마치 바닐라 JS의 Document.querySelect() 역할
 */
export default function UseRefDomPage() {
  const inputRef: any = useRef()

  useEffect(() => {
    // console.log(inputRef)
    inputRef.current.focus()
  }, [])

  const login = () => {
    alert(`환영합니다 ${inputRef.current.value}!`)
    inputRef.current.focus()
  }

  return (
    <>
      <h1>useRef-04-DOM 요소에 접근</h1>
      <input ref={inputRef} type="text" placeholder="유저명" />
      <button onClick={login}>로그인</button>
    </>
  )
}
