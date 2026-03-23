import type { SearchInputProps } from "../type"

function SearchField({placeholder,name,value,onChange}:SearchInputProps) {

  return (
     <input className="border rounded" placeholder={placeholder} name={name}  value={value} onChange={onChange}/>

  )
}

export default SearchField