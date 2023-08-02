import { createContext } from 'react'

// **** (1) Context
// Provider로 넘기는 걸 실패했을 떄는, 여기서 정의한 초기값을 보여줌
export const ThemeContext: any = createContext('1234')
