import { useMemo, useState } from 'react'

const hardCalculate = (number: number) => {
  console.log('어려운 계산!')
  for (let i = 0; i < 999999; i++) {} // 생각하는 시간
  return number + 10000
}

const easyCalculate = (number: number) => {
  console.log('짱 쉬운 계산!')
  return number + 1
}

export default function UseMemoPage() {
  const [hardNumber, setHardNumber] = useState(1)
  const [easyNumber, setEasyNumber] = useState(1)

  /** 📌 useMemo(콜백함수, 의존성배열)
   * 어떠한 조건이 만족됐을 떄만 변수들이 초기화
   * 그 조건을 만족하지 못하면, 함수형 컴포넌트가 재렌더링되더라도 값이 유지됨 => 메모이제이션
   *
   * hardNumber가 변경될 떄만 hardCalculate가 다시 호출됨
   * hardNumber가 변경되지 않으면, 그 전에 갖고있던 hardNumber의 값을 재사용
   */
  // const hardSum = hardCalculate(hardNumber);
  const hardSum = useMemo(() => hardCalculate(hardNumber), [hardNumber])
  const easySum = easyCalculate(easyNumber)

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input type="number" value={hardNumber} onChange={e => setHardNumber(parseInt(e.target.value))} />
      <span>+ 10000 = {hardSum}</span>
      <h3>쉬운 계산기</h3>
      <input type="number" value={easyNumber} onChange={e => setEasyNumber(parseInt(e.target.value))} />
      <span>+ 1 = {easySum}</span>
    </div>
  )
}
