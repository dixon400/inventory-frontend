import { BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css";
import { Order } from "./components/Order";
import { ProductCreate } from "./components/ProductCreate";
import { Products } from "./components/Products";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Products/>}/>
      <Route path="/create" element={<ProductCreate/>}/>
      <Route path="/orders" element={<Order/>}/>
    </Routes>
  </BrowserRouter>;
}

export default App;
