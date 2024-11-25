import { useState } from "react";

export default function Counter() {
    // let [stateVariable, setStateVariable] = useState(10);
    let [count, setCount] = useState(0)

    let inCount = () => {
        //count = count + 1;
        setCount(count+1);
        // console.log(count);
    };

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={inCount}>Increse Count</button>
        </div>
    )
}