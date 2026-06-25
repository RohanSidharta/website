import {Routes} from 'react-router'
import{Route} from 'react-router'
import './App.css'
import { HomePage } from './pages/HomePage.jsx'
import { CheckoutPage } from './pages/CheckoutPage.jsx'

function App() {
 

  return (
    <Routes>
      <Route path="/" element={ <HomePage/>}/>
      <Route path="/checkout.html" element={<CheckoutPage/>}/>
    </Routes>
    
  )
}

export default App
