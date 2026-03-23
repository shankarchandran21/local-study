import type { SearchInputProps } from "../type"

function SearchInput({name,placeholder,value,handleChange}:SearchInputProps) {
  return (
    <input placeholder={placeholder} name={name} value={value} onChange={handleChange}/>
  )
}

export default SearchInput