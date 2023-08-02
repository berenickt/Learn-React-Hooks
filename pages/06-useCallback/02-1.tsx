import { useCallback, useState } from 'react'
import Box from './02-2-Box'

export default function UseCallBackBoxPage() {
  const [size, setSize] = useState(100)
  const [isDark, setIsDark] = useState(false)

  const onChangeInput = (e: any) => setSize(e.target.value)
  const onClickTheme = () => setIsDark(!isDark)

  /** useCallback 응용 예제
   * theme를 바꾸는 거와 박스키우는 것은 상관없기 때문에
   * useCallback으로 size가 변경될 때만 callback 함수 실행
   */
  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: 'pink',
      width: `${size}px`,
      height: `${size}px`,
    }
  }, [size])

  return (
    <div style={{ background: isDark ? 'black' : 'white' }}>
      <input type="number" value={size} onChange={onChangeInput} />
      <button onClick={onClickTheme}>테마 변경</button>
      <Box createBoxStyle={createBoxStyle} />
    </div>
  )
}
