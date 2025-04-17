import { BrowserRouter as Router, Routes, Route } from "react-router";
import './App.css'
import Product from "./goCart/Product";
import ShowCart from "./goCart/AddCart";
import Nav from "./goCart/Nav";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<ShowCart />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
