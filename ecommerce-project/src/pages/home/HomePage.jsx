import { Header } from "../../components/Header";
import "./HomePage.css";
import { useEffect ,useState} from "react";
import axios from "axios";
import { ProductsGrid } from "./ProductsGrid";


export function HomePage({cart}) {

  const[products,setProducts] = useState([]);
 

  useEffect(() => {
    axios.get("http://localhost:3000/api/products")
    .then((response) => {
      setProducts(response.data);
    });

    
  },[]);

  return (
    <>
    <Header cart={cart}/>

      <div className="home-page">
      <ProductsGrid products={products}/>
       
      </div>
    </>
  );
}
