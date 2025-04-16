import ShowCart from "./AddCart";

function Home() {
    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(data));
      }, []);
    return ( 
        <>
            Home
            <ShowCart />
        </>
     );
}

export default Home;