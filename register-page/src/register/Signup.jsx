// import imag from "../assets/image.png" ;
// import image from "../register/im.png"
// "../public/image.png"


import { Link, useNavigate } from "react-router-dom";
import Nav from "./Nav";
// import Login from "./Login";
import { useState } from "react";

function Signup() {

    const userDetail = {
        name:"",
        email:"",
        password:""
    }

    const [data, setData] = useState(userDetail);
    // const navigate = useNavigate();

    const handleChange = (e) => {
        // console.log(e.target.value);
        // console.log(e.target.name);
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name]:value})
    }
    // console.log(data)

    const hamdleSubmit = (e) => {
        e.preventDefault();

        if (data.name == "" || data.email == "" || data.password == "") {
            alert("Please Enter Details")
        } else {
            const getData = JSON.parse(localStorage.getItem("user") || "[]" );
            let arr = [];
            arr = [...getData]
            arr.push(data)
            setData = localStorage.setItem("user", JSON.stringify(arr));
            alert("Signup Successful")
            useNavigate("/login");
        }
    }

    return ( 
        <>
            <div>
                <Nav />
                <div className="main-page">
                    <form onSubmit={hamdleSubmit} >
                        <div className="heading">
                            <p>Sign Up</p>
                        </div>
                        <div className="account">
                            <input type="text" name="name"  placeholder="Enter your Name" onChange={handleChange} />
                            <input type="email" name="email"  placeholder="Enter your Email" onChange={handleChange} />
                            <input type="password" name="password"  placeholder="Enter your Password" onChange={handleChange} />
                            <p>Already have an account ? <Link to="/login" > login</Link>  </p>
                        </div>
                        <button  >Sign Up</button>
                    </form>
                   
                </div>
            </div>
        </>
     );
}

export default Signup;