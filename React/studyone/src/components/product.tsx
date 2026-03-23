import React, { useEffect } from 'react'
import { getProducts } from '../createSlice/createAsyncProducts'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../store'

function Product() {
    const dispatch = useDispatch<AppDispatch>()
    const products = useSelector((state:RootState)=>state.product)

    console.log(JSON.stringify(products))

    useEffect(()=>{
        (()=>{
            dispatch(getProducts())
        })()
    },[])
  return (
    <div>product</div>
  )
}

export default Product