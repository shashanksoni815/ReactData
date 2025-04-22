import { useEffect, useState } from "react";

function Suggetion() {
    const [pro, setPro] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("data"));
        setPro(items)
    })

    return ( 
        <>

            

            {/* <div id="carouselExampleInterval" class="carousel slide slider" data-bs-ride="carousel">
                <div class="carousel-inner ">

                    {
                        pro.map((product) => (
                            <div key={product.id}>
                                <div class="carousel-item active" data-bs-interval="10000">
                                    <img src={product.image} class="d-block w-10" alt="..." />
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                <img src="..." class="d-block w-10" alt="..." />
                                </div>
                                <div class="carousel-item">
                                <img src="..." class="d-block w-10" alt="..." />
                                </div>
                            </div>
                        ))
                    }


                    
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div> */}
        </>
     );
}

export default Suggetion;