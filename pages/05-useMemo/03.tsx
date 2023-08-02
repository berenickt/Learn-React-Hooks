import { useEffect, useMemo, useState } from 'react'

export default function UseMemoPage() {
  const [number, setNumber] = useState(0)
  const [isKorea, setIsKorea] = useState(true)

  /** 📌 JS 타입 종류, 객체타입이 변수에 저장될 떄
   * 원시타입 | 객체타입 (원시타입을 제외한 모든 것, Object, Array)
   *
   * 어떤 변수에 객체타입을 할당하면,
   * 객체타입이 크기가 크기 때문에, 변수에 객체타입이 할당되는 것이 아니라
   * 어떤 메모리 상에 공간이 할당되어 저장되고, `변수에는 메모리 주소`가 할당됩니다.
   * 똑같은 객체를 할당해도, 두 메모리 주소가 다르기 때문에 ===을 하면 false 나옵니다.
   */
  const location = useMemo(() => {
    return {
      country: isKorea ? '한국' : '외국',
    }
  }, [isKorea])

  useEffect(() => {
    // useEffect 안에서 뭔가 오래걸리는 작업을 해야한다면,
    // 꼭 필요할 떄만 useMemo 호출
    console.log('useEffect 호출')
  }, [location])

  return (
    <div>
      <h2>하루에 몇끼 먹어요?</h2>
      <input type="number" value={number} onChange={(e: any) => setNumber(e.target.value)} />
      <br />
      <br />
      <hr />
      <h2>어느 나라에 있어요?</h2>
      <p>나라 : {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
    </div>
  )
}
