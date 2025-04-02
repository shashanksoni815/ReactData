function Signup() {
    return ( 
        <>
            <div>
                <div>
                    <form action="">
                        <div>
                            <p>Sign Up</p>
                        </div>
                        <div className="account">
                            <input type="text" name="name"  placeholder="Enter your Name" />
                            <input type="text" name="email"  placeholder="Enter your Email" />
                            <input type="text" name="password"  placeholder="Enter your Password" />
                            <p>Already have an account ? <a href="">Login</a></p>
                        </div>
                        <button>Sign Up</button>
                    </form>
                </div>
            </div>
        </>
     );
}

export default Signup;