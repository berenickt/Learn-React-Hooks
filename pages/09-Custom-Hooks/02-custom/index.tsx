import useInput from '@/src/hooks/useInput'

function displayMessage(message: string) {
  alert(message)
}

export default function CustomHookPage() {
  const [inputValue, onChangeInput, onClickSubmit] = useInput('안녕', displayMessage)

  return (
    <>
      <h1>useInput</h1>
      <input type="text" value={inputValue} onChange={onChangeInput} />
      <button onClick={onClickSubmit}>확인</button>
    </>
  )
}
