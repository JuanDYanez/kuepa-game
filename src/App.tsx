import {Routes, Route} from 'react-router-dom'

import Home from './Pages/Home/Home.tsx'
import NavBar from './Components/NavBar/NavBar.tsx'

import './App.styles.css'

function App() {
  
  return (
    <div className='main-container'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
