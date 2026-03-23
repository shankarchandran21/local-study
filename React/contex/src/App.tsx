import './App.css'
import { useGlobalContext } from './contex/contex'

function App() {
  const {state,dispatch} = useGlobalContext()



  return (
    <>
      <div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={()=>dispatch({type:'increment'})}>
          count is {state}
        </button>
        <button onClick={()=>dispatch({type:'add_given_number',payload:5})}>+5</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App



