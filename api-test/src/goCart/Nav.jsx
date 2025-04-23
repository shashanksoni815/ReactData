import { useEffect, useState } from "react";
import { Link } from "react-router";
import logo from "../assets/images/logo3.png"


function Nav() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const item = JSON.parse(localStorage.getItem('cartItems'));
        setCount( item.length)
    }, )

    return ( 
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid upper-nav ">
                    <Link to="/"><img className="navbar-brand " src={logo} alt="src"/></Link> 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mx-5 mb-lg-2">
                        <li className="nav-item mx-4 fs-5"  >
                        <Link className="nav-link active" to="/product" aria-current="page" >Products</Link>
                        </li>
                        <li className="nav-item mx-4 fs-5"  >
                        <Link className="nav-link active" to="/cart" >Cart {count} </Link>
                        </li>
                        <li className="nav-item mx-4 fs-5"  >
                        <Link className="nav-link active" to="/signup" > Signup</Link>
                        </li>
                        <li className="nav-item mx-4 fs-5"  >
                        <Link className="nav-link active" to="/login" >Login</Link>
                        </li>
                        <li className="nav-item mx-4 fs-5"  >
                        <Link className="nav-link active" to="/profile" >Profile </Link>
                        </li>  
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
                </nav>
        </>
    );
}

export default Nav;