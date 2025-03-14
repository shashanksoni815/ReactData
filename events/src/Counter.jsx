import { useState } from "react"

export default function Counter() {
    let [count, setCount] = useState(0);

    let inCount = () => {
        setCount(count + 1);
        console.log(count);
    };

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={inCount} >Increase Count</button>
        </div>
    )

}

// let count = 0;

//     function inCount() {
//         count += 1;
//         console.log(count);
//     }