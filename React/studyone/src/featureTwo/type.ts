interface SearchInputProps {
    value:string,
    placeholder:string, 
    name:string,
    handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

interface Task{
    id:number,
    title:string,
    completed: boolean

}

type ButtonUpDown = "up" | "down"

export type {SearchInputProps,Task,ButtonUpDown}