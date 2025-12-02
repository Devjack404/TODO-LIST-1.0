import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './components/Navbar'
import AddTask from './components/AddTask'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <div className='my-4 font-sans sm:text-center text-center'>
      <h1 className='font-sans text-2xl  font-bold lg:text-4xl'>SIMPLE TODO LIST</h1>
    </div>
    <AddTask />

  </StrictMode>,
)
