import { LegacyRef, forwardRef } from 'react'

/***
 * forwardRef로 묶어주면,
 * 첫번쨰 Props 인자와, 두번쨰 ref인자를 받을 수 있습니다.
 */
const MyInput = (props: any, ref: LegacyRef<HTMLInputElement>) => {
  return <input ref={ref} />
}

/** 📌 ForwardRef
 * ref를 Props으로 받으면,
 * `ref는 Props이 아니라는` 경고 메시지를 보여줄 수 있습니다.
 * forwardRef를 사용해야 합니다.
 */
export default forwardRef(MyInput)
