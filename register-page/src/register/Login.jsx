import { Link } from "react-router-dom";
import Nav from "./Nav";

function Login() {
    return ( 
        <>
            <div>
                <Nav />
                <div className="main-page">
                    <form >
                        <div className="heading">
                            <p>Login</p>
                        </div>
                        <div className="account">
                            <input type="text" name="email"  placeholder="Enter your Email" />
                            <input type="text" name="password"  placeholder="Enter your Password" />
                            <p>Create account ? <Link to="/" >Signup</Link> </p>
                        </div>
                        <button>Login</button>
                    </form>
                    
                </div>
            </div>
        </>
     );
}

export default Login;