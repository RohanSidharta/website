import {Routes} from 'react-router'
import{Route} from 'react-router'
import './App.css'
import { HomePage } from './pages/HomePage.jsx'
import { CheckoutPage } from './pages/CheckoutPage.jsx'
import { OrdersPage } from './pages/OrdersPage.jsx'
import {Tracking} from './pages/Tracking.jsx'

function App() {
 

  return (
    <Routes>
      <Route index element={ <HomePage/>}/>
      <Route path="/checkout" element={<CheckoutPage/>}/>
      <Route path="/orders" element={<OrdersPage />}></Route>
      <Route path="/tracking" element={<Tracking />}></Route>
    </Routes>
    
  )
}

export default App
