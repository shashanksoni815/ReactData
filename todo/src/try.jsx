// import React, { useState } from 'react'

// const Try = () => {
//     const [name, setname] = useState("");
//     const [task, setTask] = useState("");
//     const [data, setData] = useState([{name: "demo", task: "think"}]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//     }

//     const handleData = () => {
//         const prev = [...data];

//         prev.push({name: name, task: task});

//         setData(prev);
//         console.log(data);
//         setname("")
//         setTask("")
//     }
//     const delTask = (idx) => {
//         const prev = [...data];

//         prev.splice(idx, 1);

//         setData(prev);
//     }
//     const editTask = (idx) => {
//         const prev = [...data];

        

//         setData(prev);
//     }

//   return (
//     <>
//         <div>
//             <form onSubmit={handleSubmit} >
//                 <input onChange={(e)=> setname(e.target.value)} value={name} type="text" /> <br /><br />
//                 <input onChange={(e) => setTask(e.target.value)} value={task} type="text" /> <br /><br />
//                 <button onClick={handleData} type='Submit' >Submit</button><br /><br />
//             </form>
//             {data.map((d,idx) => {
//                 return(
//                     <div key={idx} value={d.name}>
//                         <h3>{d.name}</h3>
//                         <h3>{d.task}</h3>
//                         <button onClick={() => editTask(idx)}>Edit</button>
//                         <button onClick={() => delTask(idx)}>Delet</button>
//                     </div>
//                 )
//             })}
//         </div>
//     </>
//   )
// }

// export default Try;


import React, { useState } from 'react'

const Try = () => {
    const [name, setname] = useState("");
    const [task, setTask] = useState("");
    const [data, setData] = useState([{name: "demo", task: "think"}]);
    const [editIndex, setEditIndex] = useState(null); // Track which item is being edited
    const [isEditing, setIsEditing] = useState(false); // Track if we're in edit mode

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleData = () => {
        if (isEditing) {
            // If we're editing, update the existing item
            const prev = [...data];
            prev[editIndex] = {name: name, task: task};
            setData(prev);
            
            // Reset edit mode
            setIsEditing(false);
            setEditIndex(null);
        } else {
            // If we're adding new item
            const prev = [...data];
            prev.push({name: name, task: task});
            setData(prev);
        }
        
        // Clear input fields
        setname("");
        setTask("");
        console.log(data);
    }

    const delTask = (idx) => {
        const prev = [...data];
        prev.splice(idx, 1);
        setData(prev);
        
        // If we were editing this item, cancel edit mode
        if (editIndex === idx) {
            setIsEditing(false);
            setEditIndex(null);
            setname("");
            setTask("");
        }
    }

    const editTask = (idx) => {
        // Populate the form with the item's current values
        setname(data[idx].name);
        setTask(data[idx].task);
        
        // Set edit mode and track which item we're editing
        setIsEditing(true);
        setEditIndex(idx);
    }

    const cancelEdit = () => {
        // Cancel editing and clear the form
        setIsEditing(false);
        setEditIndex(null);
        setname("");
        setTask("");
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                        onChange={(e) => setname(e.target.value)} 
                        value={name} 
                        type="text" 
                        placeholder="Enter name"
                    /> <br /><br />
                    <input 
                        onChange={(e) => setTask(e.target.value)} 
                        value={task} 
                        type="text" 
                        placeholder="Enter task"
                    /> <br /><br />
                    
                    <button onClick={handleData} type='submit'>
                        {isEditing ? "Update" : "Submit"}
                    </button>
                    
                    {isEditing && (
                        <button onClick={cancelEdit} type='button' style={{marginLeft: '10px'}}>
                            Cancel
                        </button>
                    )}
                    <br /><br />
                </form>

                {data.map((d, idx) => {
                    return(
                        <div 
                            key={idx} 
                            style={{
                                backgroundColor: editIndex === idx ? '#ffffcc' : 'transparent',
                                padding: '10px',
                                marginBottom: '10px'
                            }}
                        >
                            <h3>{d.name}</h3>
                            <h3>{d.task}</h3>
                            <button onClick={() => editTask(idx)}>Edit</button>
                            <button onClick={() => delTask(idx)}>Delete</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Try;