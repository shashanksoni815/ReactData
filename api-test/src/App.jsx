// import { useState } from 'react'

import './App.css'
import Body from './Pixcel/Body';

function App() {
   
//    apiData.map((data) => {
//      console.log(data)
//    })
//    console.log(api)
//    localStorage.setItem("apiData", JSON.stringify(apiData))
//    let user = {name:"Alice", age:25};      "price": "RS 80,000",
//    localStorage.setItem(user,JSON.stringify(user))
//   const apiData = JSON.parse(localStorage.getItem("apiData"));
//   console.log(apiData);

  return (
    <>
      Data
      <Body data={apiData} />
    </>
  )
}

export default App
