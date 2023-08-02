import { useContext } from 'react'

import { ThemeContext } from '../context/ThemeContext'
import { UserContext } from '../context/UserContext'

export default function Content() {
  const { isDark }: any = useContext(ThemeContext)
  const user: any = useContext(UserContext)

  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black',
      }}>
      <p>{user}님, 좋은 하루 되세요!</p>
    </div>
  )
}
