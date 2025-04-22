import logo from "../assets/images/logo3.png"
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import Policies from "./Policies";

function Footer() {
    return ( 
        <>
            <footer style={{position:"sticky"}} >
            <Policies />
            <div className=" row footer">
                <div className="col foot">
                    <img src={logo} alt="logo" />
                </div>
                <div className="col foot">
                    <h3>Get to know us</h3>
                    <div className="row">
                        <div className="col foot2">
                            <ul>
                                <li>Home</li>
                                <li>Products</li>
                                <li>Cart</li>
                            </ul>
                        </div>
                        <div className="col foot2">
                            <ul>
                                <li>Login</li>
                                <li>Signup</li>
                                <li>Profile</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col connect">
                <h3>Connect with us</h3>
                    <div className="icon">
                    <FaFacebook /> <FiYoutube /> <FaTwitterSquare /> <FaInstagram />
                    </div>
                    
                </div>
            </div>
            </footer>
        </>
     );
}

export default Footer;