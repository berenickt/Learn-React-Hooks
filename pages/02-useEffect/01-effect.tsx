import { useEffect, useState } from 'react'

export default function UseEffectPage() {
  const [count, setCount] = useState(1)
  const [name, setName] = useState('')

  const onClickUpdate = () => {
    setCount(count + 1)
  }

  const onChangeInput = (e: any) => {
    setName(e.target.value)
  }

  // **** 1. 렌더링 될때마다 매번 실행됨
  // useEffect(() => {
  //   console.log('렌더링...🎨')
  // })

  // **** 2. [의존성배열] 값이 변할 때만 렌더링
  // useEffect(() => {
  //   console.log('count 변화💰')
  // }, [count])

  // useEffect(() => {
  //   console.log('name 변화😃')
  // }, [name])

  // **** 3. 맨 처음 렌더링됐을 때만, 마운트
  useEffect(() => {
    console.log('마운팅...🛥️')
  }, [])

  return (
    <>
      <h1>useEffect-01</h1>
      <button onClick={onClickUpdate}>업데이트</button>
      <span>카운트 : {count}</span>
      <br />
      <input type="text" value={name} onChange={onChangeInput} />
      <span>이름 : {name}</span>
    </>
  )
}
