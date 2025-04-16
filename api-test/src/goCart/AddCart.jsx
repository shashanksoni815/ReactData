import { useContext } from "react";
import CartContext from './Product'

function ShowCart() {
    const addCart = useContext(CartContext);
    // const apiData = JSON.parse(localStorage.getItem("data"));
    console.log(CartContext)

    // const addToCart = () => {
    //     console.log(apiData[2])
    //     // setNum(num = api.id)
    //     console.log(num)
    // }

    return (
        <>
            {/* <div className="body-card">
                {
                    apiData.map((api) => (
                        <div key={api.id} className="card-in" >
                            <h2>{api.name}</h2>
                            <h3>{api.price}</h3>
                            <button className="btn" id={api.id }  >  Add to cart</button>
                        </div>
                    ))
                }
            </div> */}
        </>
    );
    
}

export default ShowCart;