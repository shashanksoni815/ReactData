
import React, { useState } from 'react';

function Home() {
    const [todo, setTodo] = useState([]);
    const [task, setTask] = useState("");
    const [editID, setEditID] = useState(null);

    const handleTodo = () => {
        if(task.trim() === "") return
        console.log(task);

        if (editID) {
            setTodo((prev) => prev.map((t) => t.id === editID ? { ...t, work: task } : t))
            setEditID(null);
        } else {
            setTodo([...todo, {work: task, id: Date.now()}]);
        }

        setTask('')
    }

    let inpValue = (e) => {
        // console.log(e)
        // console.log(e.target)
        // console.log(e.target.value)
        setTask(e.target.value)

    }

    const doDelete = (id) => {
        setTodo(todo.filter((todos) => todos.id !== id))
    }
    const doUpdate = (id) => {
        
        // setTodo(todo.filter((todos) => todos.id === id))
        const upd = todo.find((t) => t.id === id)
        // console.log()
        setTask(upd.work)
        // setTodo(...todo, {work: task, id: id});
        setEditID(id);
    }

    return (
        <>
        <h1>Hello</h1>
        <input value={task} placeholder='enter your todo' onChange={inpValue} /> 
        <button  onClick={handleTodo} >Submit</button>
        <hr />
        <div>
            {
                todo.map((todos) => (
                    <div key={todos.id}>
                    <li  >{todos.work}</li>
                    <button onClick={() => doDelete(todos.id) } >Delete</button>
                    <button onClick={() => doUpdate(todos.id) } >Update</button>
                    </div>
                ))
            }
        </div>
        </>
        
    );
}

export default Home;

