
import data from "../public/json/data.json"
import './App.css'
import Home from "./goCart/Home";
// import Product from "./goCart/Product";
// import Body from './Pixcel/Body';
// import Nav from "./Pixcel/Nav";


function App() {
   localStorage.setItem("data", JSON.stringify(data));
  return (
    <>
      {/* <Nav />
      <Body /> */}
      {/* <Cart apiData={data} /> */}

        <Home />

    </>
  )
}

export default App


//  data.map((data) => {
  //    console.log(data.id)
  //  })
//    console.log(api)
//    let user = {name:"Alice", age:25};      "price": "RS 80,000",
//    localStorage.setItem(user,JSON.stringify(user))
//   const apiData = JSON.parse(localStorage.getItem("apiData"));
//   console.log(apiData);