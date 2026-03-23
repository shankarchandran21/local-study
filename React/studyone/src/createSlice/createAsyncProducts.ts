import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../service";

const getProducts = createAsyncThunk("products/getPost",async(_,thunkAPI)=>{

    try {
        const res = await Api.get("/react-useReducer-cart-project")
        return res.data
    } catch (err) {
       return  thunkAPI.rejectWithValue("There was error...!!!")
    }

})


export {getProducts}