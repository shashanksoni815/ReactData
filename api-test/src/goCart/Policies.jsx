import { FaShippingFast } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";

function Policies() {
    return ( 
        <>
            <div className="row policies">
                <div className="col polici-col">
                    <div className="polici-Icon"><FaShippingFast /></div>
                    <div className="policies-text p-3 ">
                        <h3>Fast Shipping</h3>
                        <h6>Fast Shipping at your
                        door step.</h6>
                    </div>
                </div>
                <div className="col polici-col">
                    <div className="polici-Icon"><GiReturnArrow /></div>
                    <div className="policies-text p-3 ">
                        <h3>Free Returns</h3>
                        <h6>Free return if products
                        are damaged.</h6>
                    </div>
                </div>
                <div className="col polici-col">
                    <div className="polici-Icon"><BiSupport /></div>
                    <div className="policies-text p-3 ">
                        <h3>Support 24/7</h3>
                        <h6>24/7 and 365 days
                        support is available.</h6>
                    </div>
                </div>
                <div className="col polici-col">
                    <div className="polici-Icon"><FaArrowRightLong />
                    </div>
                    <div className="policies-text p-3 ">
                        <h3>Seller Login</h3>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Policies;