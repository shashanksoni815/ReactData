import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

function TodoList() {
    let [todos, setTodos] = useState([{task: "sample-task", id: uuidv4() }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {

        setTodos((prevTodos) => {
            return [...prevTodos, {task: newTodo, id: uuidv4() } ];
        })

        // setTodos([...todos, {task: newTodo, id: uuidv4() } ]);
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
                        <li key={todo.id} >
                            <span>{todo.task}</span> 
                            <button>delete</button>
                        </li>
                    ))
                }
            </ul>
        </>
    );
}

export default TodoList;