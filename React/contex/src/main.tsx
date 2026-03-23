import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Contex from './contex/contex.tsx'

createRoot(document.getElementById('root')!).render(
  <Contex>
    <App />
  </Contex>
)
