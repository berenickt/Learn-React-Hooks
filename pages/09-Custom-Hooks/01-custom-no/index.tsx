import { useState } from 'react'

export default function CustomHookNonePage() {
  const [inputValue, setInputValue] = useState('')

  /***
   * 여러 개의 컴포넌트가 있고, 컴포넌트마다 input값을 처리해줘야 한다면,
   * 로직을 여러 컴포넌트마다 복사붙여넣기해야 합니다.
   * 그렇게 되면 중복코드가 발생합니다.
   * 그래서 로직을 Custom Hook으로 만들어 놓으면, 재사용성이 올라갑니다
   */
  const handleChange = (e: any) => setInputValue(e.target.value)

  const handleSubmit = () => {
    alert(inputValue)
    setInputValue('')
  }

  return (
    <>
      <h1>useInput</h1>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>확인</button>
    </>
  )
}
