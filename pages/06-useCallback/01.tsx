import { useCallback, useEffect, useState } from 'react'

/** 📌 useMemo vs useCallback
 * 👉 useMemo     : 콜백함수가 리턴하는 값을 메모이제이션
 * 👉 useCallback : 인자로 전달한 콜백함수 그 자체를 메모이제이션
 */
export default function UseCallBackPage() {
  const [number, setNumber] = useState(0)
  const [toggle, setToggle] = useState(true)

  const onChangeNumber = (e: any) => setNumber(e.target.value)
  const onClickToggle = () => setToggle(!toggle)

  /*** 📌 useCallback
   * 함수형 컴포넌트는 state값이 변경될 떄마다 재렌더링됩니다.
   * 왜나하면 함수라서 재호출되면 내부 변수들은 초기화가 일어나기 때문이죠.
   *
   * getConsoleResult에 들어있는 것은 `함수를 가리키는 메모리주소`가 들어있음
   * 메모리 주소가 다르기 때문에
   * useEffect의 의존성배열에서
   * getConsoleResult의 메모리주소는 달라서 계속 콜백함수를 호출합니다.
   *
   * 이를 막아주기 위해서는 useCallback을 사용하면 됩니다.
   * 렌더링되더라도 getConsoleResult의 메모리 주소를 유지됩니다.
   * 아래는 number가 바뀔때마다 콜백함수가 갱신되어,
   * 새로운 메모리 주소가 할당됩니다.
   */
  const getConsoleResult = useCallback(() => {
    console.log(`💎 getConsoleResult: 현재 number: ${number}`)
    return
  }, [number])

  // **** getConsoleResult이 바뀔 때만 표시
  useEffect(() => {
    console.log('💡 getConsoleResult이 변경되었습니다.')
  }, [getConsoleResult])

  return (
    <div>
      <input type="number" value={number} onChange={onChangeNumber} />
      <button onClick={onClickToggle}>{toggle.toString()}</button>
      <br />
      <button onClick={getConsoleResult}>현재 number</button>
    </div>
  )
}
