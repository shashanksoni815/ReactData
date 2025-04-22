import { useNavigate } from "react-router";

function Acc() {
    const navigate = useNavigate();
    return ( 
        <>
            <div className="mt-5 mb-5"  style={{textAlign:"center"}}>
                <h1>Login or Signup your account</h1> <br /><br />
                <button onClick={() => navigate("/login")} className="btn btn-info mx-5 fs-5">Login</button>
                <button onClick={() => navigate("/signup")} className="btn btn-info mx-5 fs-5">Signup</button><br />
            </div>
        </>
     );
}

export default Acc;