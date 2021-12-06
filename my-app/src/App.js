
import './App.css';
import Product from "./component/Product"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductAdd from './component/ProductAdd';
import Signin from './component/Signin';
import Signup from './component/Signup';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PrivateAdmin from './Layout/PrivateAdmin';
import LayoutAdmin from './Layout/LayoutAdmin';
function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get("https://61542c7c2473940017efac73.mockapi.io/products")
      setProducts(data)
    }
    getProduct();
  }, [])

  const onHandleAdd = async (product) => {
    const { data } = await axios.post("https://61542c7c2473940017efac73.mockapi.io/products", product);
    setProducts(data)
  }
  const signup = async (user) => {
    const { data } = await axios.post("https://61542c7c2473940017efac73.mockapi.io/user", user);
    setProducts(data)
  }
  return (
    <div className="App">
      <BrowserRouter >
        <Routes >

          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup onAdd={signup} />} />

          <Route path="admin/*" element={<PrivateAdmin ><LayoutAdmin /></PrivateAdmin>} >
            <Route path="product" element={<Product product={products} />} />
            <Route path="product/add" element={<ProductAdd onAdd={onHandleAdd} />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
