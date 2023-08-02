import { useState } from 'react'

export default function Timer() {
  useState(() => {
    // **** 1초에 1번씩 log 찍음
    const timer = setInterval(() => {
      console.log('타이머 돌아가는 중...')
    }, 1000)

    // **** 정리(clean-up) 작업
    // 👋 화면에서 사라질 떄 처리해줄 작업
    return () => {
      clearInterval(timer)
      console.log('타이머가 종료되었습니다.')
    }
  }, [])

  return <span>타이머를 시작합니다. 콘솔을 보세요!</span>
}
