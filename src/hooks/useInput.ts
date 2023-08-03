import { useState } from 'react'

export default function useInput(initialValue: any, submitAction: any) {
  const [inputValue, setInputValue] = useState(initialValue)

  const onChangeInput = (e: any) => setInputValue(e.target.value)

  const onClickSubmit = () => {
    setInputValue('')
    submitAction(inputValue)
  }

  return [inputValue, onChangeInput, onClickSubmit]
}
