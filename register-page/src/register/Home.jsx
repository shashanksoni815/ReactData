import Nav from "./Nav";

function Home() {
    return ( 
        <>
            <Nav />
            <div className="home">
                <h2>Welcome to Home page !</h2>
                <button>Logout</button>
            </div>
        </>
     );
}

export default Home;