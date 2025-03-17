import { useState } from "react";

function Ludo() {
    let [moves, setMoves] = useState({blue: 0, red: 0, yellow: 0, green: 0 })
    return ( 
        <>
            <div>
                <p>Game Brains</p>
                <div>
                    <p>Blue Moves = {moves.blue}</p>
                    <button style={{backgroundColor:"blue"}} >+1</button>
                    <p>Yellow Moves = {moves.yellow}</p>
                    <button style={{backgroundColor:"yellow", color:"black"}} >+1</button>
                    <p>Green Moves = {moves.green}</p>
                    <button style={{backgroundColor:"green"}} >+1</button>
                    <p>Red Moves = {moves.red}</p>
                    <button style={{backgroundColor:"red"}}>+1</button>
                </div>
            </div>
        </>
    );
}

export default Ludo;