
import { Route, Routes } from 'react-router'
import './App.css'
import { LightHouse, MemoryAllocated, React, VirtualDom } from './pages'
import Layout from './router/layout'

function App() {


  return (
  
    <Routes>
        <Route path='/'  element={<Layout/>}>
            <Route index  element={<React/>}/>
            <Route path='/virtualDom' element={<VirtualDom/>}/>
            <Route path='/memoryManagement' element={<MemoryAllocated/>}/>
            <Route path='/lightHouse' element={<LightHouse/>}/>
        </Route>
    </Routes>

  )
}

export default App
