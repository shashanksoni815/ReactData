import Nav from "./Nav";

function Profile() {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));

    return ( 
        <>
            <Nav />
            <div>
                <h1>Welcome, {user?.username}</h1>
                <h1>Your email is {user?.email}</h1>
                <button onClick={() => {
                    localStorage.removeItem('loggedInUser');
                    window.location.href = '/login';
                }}>
                    Logout
                </button>
            </div>
            
        </>
     );
}

export default Profile;