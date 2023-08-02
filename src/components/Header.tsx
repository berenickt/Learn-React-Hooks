import { useContext } from 'react'

import { ThemeContext } from '../context/ThemeContext'
import { UserContext } from '../context/UserContext'

export default function Header() {
  // **** (3) Context : 사용하려는 컴포넌트에서 선언
  const { isDark }: any = useContext(ThemeContext)
  const user: any = useContext(UserContext)

  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? 'black' : 'lightgray',
        color: isDark ? 'white' : 'black',
      }}>
      <h1>Welcom {user}!</h1>
    </header>
  )
}
