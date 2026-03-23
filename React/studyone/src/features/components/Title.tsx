import { memo } from "react"

function Title({title}:{title:string}) {
  return (
    <div className='text-3xl font-bold text-center'>{title}</div>
  )
}

export default memo(Title)