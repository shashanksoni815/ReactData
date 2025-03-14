import { useState } from "react";

import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


function Like() {
    let [isLike, setIsLike] = useState(false);
    let toggleLike = () => {
        setIsLike(!isLike);
    }

    return ( 
        <>
        <p onClick={toggleLike} style={{color:"red"}} >
            {isLike ? <FaHeart /> : <FaRegHeart />}    
        </p>
        </>
     );
}

export default Like;

