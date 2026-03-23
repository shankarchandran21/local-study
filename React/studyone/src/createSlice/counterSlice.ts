import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


interface counter {
    count: number
}

const initialState:counter = {
    count:0
}

const counterSlice = createSlice({
    name:"Counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.count +=  1
        },
        decrement :(state)=>{
            state.count -= 1
        },
        incrementByAmount :(state,action:PayloadAction<number>)=>{
            state.count +=action.payload
        }
    }
})

export const {increment,decrement,incrementByAmount} = counterSlice.actions

export default counterSlice.reducer