export default function Student({ name, dispatch, id, isHere }: any) {
  const onClickMarkStudent = () => dispatch({ type: 'mark-student', payload: { id } })
  const onClickDeleteStudent = () => dispatch({ type: 'delete-student', payload: { id } })

  return (
    <div>
      <span
        style={{
          textDecoration: isHere ? 'line-through' : 'none',
          color: isHere ? 'grey' : 'black',
        }}
        onClick={onClickMarkStudent}>
        {name}
      </span>
      <button onClick={onClickDeleteStudent}>삭제</button>
    </div>
  )
}
