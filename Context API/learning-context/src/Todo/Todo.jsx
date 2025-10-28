import React, { useState, useEffect } from "react";
 import "./Todo.css";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [editId, setEditId] = useState(null);

  // Load todos from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(stored);
  }, []);

  // Save todos to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (!task.trim()) return;

    if (editId) {
      setTodos((prev) =>
        prev.map((t) => (t.id === editId ? { ...t, text: task } : t))
      );
      setEditId(null);
    } else {
      const newTodo = {
        id: Date.now(),
        text: task,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
    setTask("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleEdit = (id) => {
    const t = todos.find((t) => t.id === id);
    setTask(t.text);
    setEditId(id);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div className="app-container">
      <h1>📝 Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          placeholder="Enter a task..."
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTodo}>
          {editId ? "Update" : "Add"}
        </button>
      </div>

      <ul className="todo-list">
        {todos.length === 0 && <p className="empty">No tasks yet!</p>}
        {todos.map((t) => (
          <li key={t.id} className={t.completed ? "completed" : ""}>
            <span onClick={() => toggleComplete(t.id)}>{t.text}</span>
            <div className="actions">
              <button className="edit" onClick={() => handleEdit(t.id)}>
                Edit
              </button>
              <button className="delete" onClick={() => handleDelete(t.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
