import slide1 from "../assets/slider/img1.png"
import slide2 from "../assets/slider/img2.png"
import slide3 from "../assets/slider/img3.png"
import Footer from "./Footer";

import Nav from "./Nav";

function Home() {
    return ( 
        <>
            <Nav />
            <div id="carouselExampleSlidesOnly"   class="carousel slide " data-bs-ride="carousel">
            <div class="carousel-inner" >
                <div class="carousel-item active">
                <img src={slide1} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <img src={slide2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <img src={slide3} class="d-block w-100" alt="..." />
                </div>
            </div>
            </div>
            <Footer />
        </>
     );
}

export default Home;