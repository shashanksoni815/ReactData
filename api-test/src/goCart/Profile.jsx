// import ShowCart from "./AddCart";
import Footer from "./Footer";
import Nav from "./Nav";

function Profile() {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));

    return ( 
        <>
            <Nav />
            <div className="main" style={{flexDirection:"column"}} >
                <h1>Welcome, {user.username}</h1> <br /> <br />
                <h1>Your email is {user.email}</h1> <br /> <br />
                <button className="btn btn-info" onClick={() => {
                    localStorage.removeItem('loggedInUser') 
                    window.location.href = '/login' 
                }}> Logout </button>
            </div>
            <Footer />
        </>
     );
}

export default Profile;