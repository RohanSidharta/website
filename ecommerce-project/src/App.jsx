import {Routes} from 'react-router'
import{Route} from 'react-router'
import './App.css'
import { HomePage } from './pages/HomePage.jsx'
import { CheckoutPage } from './pages/CheckoutPage.jsx'
import { OrdersPage } from './pages/OrdersPage.jsx'
import {Tracking} from './pages/Tracking.jsx'
import { useEffect ,useState} from 'react'
import axios from 'axios';

function App() {
  
  const[cart,setCart]=useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/api/cart-items?expand=product')
    .then((response)=>{
      setCart(response.data);
    });
  },[]);
  

  return (
    <Routes>
      <Route index element={ <HomePage  cart={cart}/>}/>
      <Route path="/checkout" element={<CheckoutPage cart={cart}/>}/>
      <Route path="/orders" element={<OrdersPage cart={cart}/>}></Route>
      <Route path="/tracking" element={<Tracking />}></Route>
    </Routes>
    
  )
}

export default App
