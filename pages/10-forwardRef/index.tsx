import { useRef } from 'react'

import MyInput from '@/src/components/MyInput'

export default function ForwardRef() {
  const inputRef: any = useRef()

  const onClickFocus = () => {
    inputRef.current?.focus()
  }

  return (
    <>
      {/* <input type="text" ref={inputRef} /> */}
      <MyInput ref={inputRef} />
      <button onClick={onClickFocus}>집중</button>
    </>
  )
}
