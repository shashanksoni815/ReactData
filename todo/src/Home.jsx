
import React, { useState } from 'react';

function Home() {
    const [todo, setTodo] = useState(["setdata"]);
    const [task, setTask] = useState("");

    const handleTodo = () => {
        console.log(task);
        setTodo([...todo, task]);
        setTask('')

        
        
    }

    let inpValue = (e) => {
        // console.log(e)
        // console.log(e.target)
        // console.log(e.target.value)
        setTask(e.target.value)

    }

    return (
        <>
        <h1>Hello</h1>
        <input value={task} placeholder='enter your todo' onChange={inpValue} /> 
        <button  onClick={handleTodo} >Submit</button>
        <hr />
        <div>
            {
                todo.map((todos, idx) => (
                    <li key={idx} >{todos}</li>
                ))
            }
        </div>
        </>
        
    );
}

export default Home;

