import { useReducer, useState } from 'react'

/*** 📌 useReducer
 * 여러 개의 복잡한 하위 state를 다뤄야 할 때,
 * useState대신 useReducer를 사용하면 편리
 *
 * e.g. state로 다음과 같이 담아야 할 떄
 * {
 *  teacher : 'james',
 *  students: ['Kim', 'Ann', 'John']
 * }
 *
 * useReducer는 다음 3가지로 구성됩니다.
 * 👉 Reducer  : state를 업데이트 해주는 역할
 *               e.g. 거내내역(state)를 업데이트해주는 `은행` 🏢
 *
 * 👉 Dispatch : Reducer에게 요구를 하는 역할
 *               e.g. 은행에 거래내역을 업데이트해달라고 요청하는 `고객` 😀
 *
 * 👉 Action   : Reducer에게 요구하는 내용
 *               e.g. 고객이 은행에게 “만원을 출금해달라”라는 `행동` 👌
 *
 * 이를 컴포넌트 관점에서 표현해보면
 * DisPatch(Action) ====> Reducer(State, Action)
 *                                     == udpate => State
 */
const ACTION_TYPES = {
  deposit: 'deposit',
  withdraw: 'withdraw',
}

/**
 * @param state reducer가 불리는 시점의 money state
 * @param action reducer에게 요구하는 내용
 * @returns
 */
const reducer = (state: any, action: any) => {
  console.log('reducer가 일을 합니다!', state, action)
  switch (action.type) {
    // 예금이면
    case ACTION_TYPES.deposit:
      return state + action.payload
    // 출금이면
    case ACTION_TYPES.withdraw:
      return state - action.payload
    default:
      return state
  }
}

/**
 * reducer  : 은행, state 업데이트
 * dispatch : 고객, state 업데이트 요구
 * action   : 요구하는 내용
 */
export default function UseReducerPage() {
  /*** 📌 useReducer
   * 사용법 👉 [상태, dispatch] = useReducer(reducer, 상태초기값)
   * dispatch를 호출하면 reducer가 호출됨
   * reducer는 action을 토대로 state를 수정
   */
  const [balanceMoney, dispatch] = useReducer(reducer, 0)
  const [money, setMoney] = useState(0)

  // **** dispatch(액션을 넘기면, reducer의 action으로 받음)
  const onClickDeposit = () => dispatch({ type: ACTION_TYPES.deposit, payload: money })
  const onClickWithdraw = () => dispatch({ type: ACTION_TYPES.withdraw, payload: money })
  const onChangeMoney = (e: any) => setMoney(parseInt(e.target.value))

  return (
    <div>
      <h1>useReducer 은행에 오신 것을 환영합니다.</h1>
      <p>잔고: {balanceMoney}원</p>
      <input type="number" value={money} onChange={onChangeMoney} step="1000" />
      <button onClick={onClickDeposit}>예금</button>
      <button onClick={onClickWithdraw}>출금</button>
    </div>
  )
}
