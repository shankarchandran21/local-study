import { createSlice } from "@reduxjs/toolkit"
import { getProducts } from "./createAsyncProducts"

interface Product {
    id:string,
    title:string,
    price:string,
    img:string,
    amount:number
}

interface Detail {
    cartItems: Product[],
    amount:number,
    total:number,
    isLoading:boolean
}

const initialState:Detail ={
    cartItems:[],
    amount:0,
    total:0,
    isLoading:false
}

const productSlice = createSlice({
    name:"Products",
    initialState,
    reducers:{
        
    },
    extraReducers: (builder)=>{
        builder.addCase(getProducts.pending,(state,action)=>{})
        builder.addCase(getProducts.fulfilled,(state,action)=>{
                state.cartItems = action.payload
        })
        builder.addCase(getProducts.rejected,(state,action)=>{})
    }
})


export default productSlice.reducer









