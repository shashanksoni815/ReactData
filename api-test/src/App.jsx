import { BrowserRouter as Router, Routes, Route } from "react-router";
import './App.css'
import Product from "./goCart/Product";
import ShowCart from "./goCart/AddCart";
import Home from "./goCart/Home";
import Signup from "./goCart/Signup";
import Login from "./goCart/Login";
import Profile from "./goCart/Profile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<ShowCart />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
