// import ShowCart from "./AddCart";
import Footer from "./Footer";
import Nav from "./Nav";
import pro from "../assets/images/logo.png"

function Profile() {
    // const user = JSON.parse(localStorage.getItem('loggedInUser'));

    return ( 
        <>
            <Nav />

            <div >
                <div className="profile">
                    <img src={pro} alt="pro" /> <hr />
                    <h3>User : {}</h3>
                    <h4>Email : {} </h4>
                </div>
            </div>


            {/* <div className="main" style={{flexDirection:"column"}} >
                <h1>Welcome, {user.username}</h1> <br /> <br />
                <h1>Your email is {user.email}</h1> <br /> <br />
                <button className="btn btn-info" onClick={() => {
                    localStorage.removeItem('loggedInUser') 
                    window.location.href = '/login' 
                }}> Logout </button>
            </div> */}
            <Footer />
        </>
     );
}

export default Profile;