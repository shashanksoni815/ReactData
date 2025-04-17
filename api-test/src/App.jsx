import { BrowserRouter as Router, Routes, Route } from "react-router";
import './App.css'
import Product from "./goCart/Product";
import ShowCart from "./goCart/AddCart";
import Nav from "./goCart/Nav";
import Home from "./goCart/Home";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<ShowCart />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
