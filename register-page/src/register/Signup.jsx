import React from "react";
import Nav from "./Nav";

export default function Signup() {

    const handlesubmit = {
        
    }

    return(
        <>
            <Nav />
            <div style={{height:"90vh", width:"100vw", display:"flex", justifyContent:"center", alignItems:"center"}}>
                <div style={{height:"400px", width:"450px", border:"2px solid black", borderRadius:"15px"}}>
                    <form onSubmit={handlesubmit} style={{height:"100%", width:"100%"}}>
                        <h2>Signup </h2>
                        <span style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>

                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" required style={{width:"150px", height:"30px", padding:"5px"}} />
                        </span>
                        <span style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>

                        <label htmlFor="email">email</label>
                        <input type="email" id="email" required style={{width:"150px", height:"20px", padding:"5px"}} />
                        </span>
                        <span style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>

                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" required style={{width:"150px", height:"30px", padding:"5px"}} />
                        </span>
                        <span style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>

                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" required style={{width:"150px", height:"30px", padding:"5px"}} />
                        </span>

                        <p>Already have an account? <a href="">Login</a></p>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}