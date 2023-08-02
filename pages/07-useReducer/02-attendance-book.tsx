import { useReducer, useState } from 'react'
import Student from './Student'

/**
 * @param state reducer가 불리는 시점의 학생 state
 * @param action reducer에게 요구하는 내용
 * @returns
 */
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'add-student':
      const name = action.payload.name
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false, // 출석 여부
      }
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      }
    case 'delete-student':
      return {
        count: state.count - 1,
        students: state.students.filter((student: any) => student.id !== action.payload.id),
      }
    case 'mark-student':
      return {
        count: state.count,
        students: state.students.map((student: any) => {
          // 클릭한 학생만 isHere를 반대로
          if (student.id === action.payload.id) {
            return { ...student, isHere: !student.isHere }
          }
          return student
        }),
      }
    default:
      return state
  }
}

const initialState = {
  count: 0,
  students: [],
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
  const [studentsInfo, dispatch] = useReducer(reducer, initialState)
  const [name, setName] = useState('')

  // **** dispatch(액션을 넘기면, reducer의 action으로 받음)
  const onClickAddBtn = () => dispatch({ type: 'add-student', payload: { name } })
  const onChangeInput = (e: any) => setName(e.target.value)

  return (
    <>
      <h1>출석부</h1>
      <p>총 학생 수 : {studentsInfo.count}</p>
      <input type="text" placeholder="이름을 입력하세요" value={name} onChange={onChangeInput} />
      <button onClick={onClickAddBtn}>추가</button>
      {studentsInfo.students.map((student: any) => (
        <Student
          key={student.id} //
          name={student.name}
          dispatch={dispatch}
          id={student.id}
          isHere={student.isHere}
        />
      ))}
    </>
  )
}
