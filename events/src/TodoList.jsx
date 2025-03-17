import { useState } from "react";

function TodoList() {
    let [todos, setTodos] = useState(["sample Tasks"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos([...todos, newTodo]);
        setNewTodo("");
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    return ( 
        <>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue} />
            <button onClick={addNewTask} >Add Task</button>
            <br /><br /><br /><br /><br /><br />
            <h4>Tasks to do</h4>

            <ul>
                {
                    todos.map((todo) => (
                        <li>{todo}</li>
                    ))
                }
            </ul>

        </>
     );
}

export default TodoList;