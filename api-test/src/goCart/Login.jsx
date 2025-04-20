import Nav from "./Nav";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

function Login() {

    const [username, setUsername] = useState("")
    const [password , setPassword] = useState("")
    const navigate = useNavigate()

    const checkDetails = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const checkUser = users.find(
        user => user.username === username && user.password === password
        );

        if (checkUser) {
        localStorage.setItem('loggedInUser', JSON.stringify(checkUser));
        alert('Login successful!');
        navigate('/profile');
        } else {
        alert('Invalid username or password');
        }
    }

    return ( 
        <>
            <Nav />
            <div className="main">
                <div className="signup-pg">
                    <form className="signup-from" onSubmit={checkDetails} >
                        <h1>Login your account</h1>
                        <label htmlFor="user"> Username  </label>
                        <input type="text"  id="user" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <label htmlFor="pass"> Password  </label>
                        <input type="text" id="pass" value={password} onChange={(e) => setPassword(e.target.value)} />
                        
                        <p>Don't have an account? <Link to="/signup" >Signup</Link> </p>
                        <button type="submit" >Login</button>
                    </form>
                    
                </div>
            </div>
        </>
     );
}

export default Login;