import React, { createContext, useContext, useReducer, useState } from 'react'
import { reducer } from './reducer'

interface contextType {
   state: number,
   dispatch:React.ActionDispatch<[action: any]>

} 

const GlobalContext = createContext<contextType|undefined>(undefined)
export const useGlobalContext = ()=>{
    const context = useContext(GlobalContext)
    if(!context){
        throw new Error("Context Error")
    }
    return context
} 

function Contex({children}:Readonly<{children:React.ReactNode}>) {
const [state,dispatch] = useReducer(reducer,0)


  return (
    <GlobalContext.Provider value={{state,dispatch}}>{children}</GlobalContext.Provider>
  )
}

export default Contex