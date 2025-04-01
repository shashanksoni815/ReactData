// import Cart from "./Cart";

function Body({data}) {


    return ( 
        <>
            <div style={{ display:"flex", flexWrap:"wrap" , justifyContent:"space-between", }}>
                {
                    data.map((api) => (
                        <div key={api.id} style={{border:"2px solid black", height:"200px", marginTop:"6px",  width:"200px"}}>
                            <h2>{api.name}</h2>
                            <h3>{api.price}</h3>
                            <button  > Add to cart</button>
                        </div>
                    ))
                }
            </div>
        </>
     );
}

export default Body;