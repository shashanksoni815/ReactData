
import React, { useState } from 'react';

function Home() {
    // const [todo, setTodo] = useState[""]

    // const handleTodo = (e) => {
    //     console.log(e.target.value)
    //     // console.log(todo)
    //     // console.log(setTodo)
    // }

    return (
        <>
        <h1>Hello</h1>
        <input placeholder='enter your todo' onChange={data} /> 
        <button value={data} onClick={handleTodo} >Submit</button>
        </>
        
    );
}

export default Home;

