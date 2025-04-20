import { useEffect, useState } from "react";
import { Link } from "react-router";

function Nav() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const item = JSON.parse(localStorage.getItem('cartItems'));
        setCount( item.length)
    }, [])

    return ( 
        <>
            
            <div className="nav">
                {/* <h3>Home</h3> */}
                <h3><Link to="/" >Home</Link></h3>
                <h3> <Link to='/' > Products </Link> </h3>
                <h3> <Link to='/cart' >Cart {count}</Link>   </h3>
                <h3> <Link to='/signup' >Sign up </Link>   </h3>
                <h3> <Link to='/login' >Login</Link>   </h3>
                <h3> <Link to='/profile' >Profile</Link>   </h3>
            </div>
        </>
    );
}

export default Nav;