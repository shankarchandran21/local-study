import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../store'
import { decrement, increment, incrementByAmount } from '../createSlice/counterSlice'

function ReduxCounter() {

    const count = useSelector((state:RootState)=>state.counter.count)
    const dispatch = useDispatch()

  return (
    <div>
            <h1>{count}</h1>
            <button onClick={()=>dispatch(increment())} type='button'>Increment</button>
            <button onClick={()=>dispatch(decrement())} type='button'>Decrement</button>
            <button onClick={()=>dispatch(incrementByAmount(5))} type='button'>+5</button>
    </div>
  )
}

export default ReduxCounter