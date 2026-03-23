import { memo } from "react"

function Title({title}:{title:string}) {
  return (
    <div className='text-xl text-center font-bold' >{title}</div>
  )
}

export default memo(Title)