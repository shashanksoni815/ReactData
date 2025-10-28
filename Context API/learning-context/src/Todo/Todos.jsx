import React, { useState } from 'react'

const Todos = () => {

    const [inp, setInp] = useState("");

    const [work, setWork] = useState([]);

    const handleChange = (e) => {
        setInp(e.target.value)
        
    }
    
    const handleSubmit = () => {
        console.log(inp);
        setWork((prev) => [...prev, inp])
        setInp("");

    }

    const handleDelete = (id) => {
        setWork(work.filter((works) => works.id != id));
    }


  return (
    <>
        <div className="">
            <div>
                <input onChange={handleChange} value={inp} type="text" placeholder='Write Todo' />
                <button onClick={handleSubmit } >Submit</button>
            </div>
            <div>
                {
                    work.map((works) => {
                        return(
                            <div  key={works.id}>
                                {works}
                                <button onClick={handleDelete (works.id)} >Delete</button>
                            
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Todos;