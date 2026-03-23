
type Action = {type:'increment'}| {type:"decrement"} | {type:"add_given_number",payload: number} 

export const reducer = (state:number,action:Action)=>{

if(action.type === "increment"){
    return state + 1
}else if (action.type === "add_given_number"){
    return state+action.payload
}

    return state
}


