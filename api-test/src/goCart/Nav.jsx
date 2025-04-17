import { Link } from "react-router";

function Nav() {
    return ( 
        <>
            
            <div className="nav">
                {/* <h3>Home</h3> */}
                <h3> <Link to='/' > Products </Link> </h3>
                <h3> <Link to='/cart' >Cart</Link>   </h3>
            </div>
        </>
    );
}

export default Nav;