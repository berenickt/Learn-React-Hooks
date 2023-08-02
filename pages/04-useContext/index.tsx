import { useState } from 'react'

import Page from '@/src/components/Page'
import { ThemeContext } from '@/src/context/ThemeContext'
import { UserContext } from '@/src/context/UserContext'

export default function useContextPage() {
  const [isDark, setIsDark] = useState(false)

  return (
    <UserContext.Provider value={'사용자'}>
      {/* (2) Context */}
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  )
}
