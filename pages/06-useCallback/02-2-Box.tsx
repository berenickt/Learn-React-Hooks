import { useEffect, useState } from 'react'

export default function Box({ createBoxStyle }: any) {
  const [style, setStyle] = useState({})

  /**
   * createBoxStyle바뀔때만 스타일 변경
   */
  useEffect(() => {
    console.log('🍊 박스 키우기 ')
    setStyle(createBoxStyle())
  }, [createBoxStyle])

  return <div style={style} />
}
