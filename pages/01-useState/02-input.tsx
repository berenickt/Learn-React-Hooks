import { useState } from 'react'

const heavyWork = () => {
  console.log('엄청 무거운 작업!!!')
  return ['홍길동', '김민수']
}

export default function UseStateInputPage() {
  // **** 초기값을 가져올 떄 무거운 작업을 가져와야 한다면?
  // Callback 형태로 맨 처음 화면에 렌더링될 떄만 불려집니다.
  const [names, setNames] = useState(() => {
    return heavyWork()
  })
  const [input, setInput] = useState('')

  const onChageInput = (e: any) => {
    setInput(e.target.value)
  }

  const onClickUpload = () => {
    // **** state를 변경할 떄, 새로 변경될 state값이 이전 state값과 연관있다면?
    // setState의 인자로 새로운 state를 리턴하는 콜백함수를 넣어주는게 좋다.
    setNames(prevState => {
      console.log('이전 state: ', prevState)

      return [input, ...prevState]
    })
  }

  return (
    <>
      <input type="text" value={input} onChange={onChageInput} />
      <button onClick={onClickUpload}>업로드</button>
      {names.map((name, idx) => (
        <p key={idx}>{name}</p>
      ))}
      {}
    </>
  )
}
