import {Routes} from 'react-router'
import{Route} from 'react-router'
import './App.css'
import { HomePage } from './pages/HomePage.jsx'

function App() {
 

  return (
    <Routes>
      <Route path="/" element={ <HomePage/>}/>
      <Route path="/checkout" element={<div>Test checkout page</div>}/>
    </Routes>
    
  )
}

export default App
