interface SearchInputProps {
    placeholder:string,
    name:string,
    value:string,
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

type Task = {
  id: number;
  title: string;
  status:string
};

type TaskData = {
  Completed: Task[];
  Pending: Task[];
  InProgress: Task[];
  
};

type Category = keyof TaskData;


export type {SearchInputProps,TaskData,Category,Task}