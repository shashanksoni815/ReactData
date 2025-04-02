// import Cart from "./Cart";

function Body() {
    const apiData = JSON.parse(localStorage.getItem("data"));
    return ( 
        <>
            <div className="body-card" >
                {
                    apiData.map((api) => (
                        <div key={api.id} className="card-in" >
                            <h2>{api.name}</h2>
                            <h3>{api.price}</h3>
                            <button className="btn" >  Add to cart</button>
                        </div>
                    ))
                }
            </div>
        </>
     );
}

export default Body;

// style={{border:"2px solid black", height:"200px", marginTop:"6px",  width:"200px"}}
// style={{ display:"flex", flexWrap:"wrap" , justifyContent:"space-between", }}