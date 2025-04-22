import { useState } from "react";
import Nav from "./Nav";
import { Link, useNavigate } from "react-router";
import Footer from "./Footer";

function Signup() {
    const [username, setUsername] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [confirmPass , setConfirmPass] = useState("")
    const navigate = useNavigate();

    

    const formSubmit = (e) => {
        e.preventDefault();

        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        const userExists = existingUsers.find(user => user.username === username);
        if (userExists) {
        alert('user already registered!');
        return;
        }

        // console.log(username)
        // console.log(email)
        // console.log(password)
        // console.log(confirmPass) 

        if (password === confirmPass) {
            console.log("password is saved")
            const newUser = { username, email, password, confirmPass };
    
            console.log(newUser)
    
            const updatedUsers = [...existingUsers, newUser];
            localStorage.setItem('users', JSON.stringify(updatedUsers));
        
            alert('Signup successful!');
            navigate('/login');

        } else {
            return alert("enter correct password")
        }

    }

    return ( 
        <>
            <Nav />
            <div className="main">
                <div className="signup-pg">
                    <form className="signup-from" onSubmit={formSubmit} >
                        <h1>Signup your account</h1>
                        <label htmlFor="user"> Username  </label>
                        <input type="text"  id="user" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <label htmlFor="mail"> Email  </label>
                        <input type="email" id="mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="pass"> Password  </label>
                        <input type="text" id="pass" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <label htmlFor="Cpass"> Confirm Password  </label>
                        <input type="text" id="Cpass" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
                        <p>Already have an account? <Link to="/login" >Login</Link>    </p>
                        <button type="submit" >Sign Up</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Signup;