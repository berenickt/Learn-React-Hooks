export default function Child({ name, age }: any) {
  console.log('👶자녀  컴포넌트가 렌더링이 되었어요.')

  return (
    <div style={{ border: '2px solid powderblue', padding: '10px' }}>
      <h3>👶자녀</h3>
      <p>name: {name}</p>
      <p>age: {age}</p>
    </div>
  )
}
