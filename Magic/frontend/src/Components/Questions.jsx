import React, { useState, useEffect } from 'react';


function Questions() {

    const [que, setQue] = useState([])
    const [selectedOption, setSelectedOption] = useState()

    useEffect(() => {
        fetch('https://aptitude-api.vercel.app/Age')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setQue(data);
        })
    }, [])

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
        
    }

    return ( 
        <>
            <div>
                <form >
                    <h3>{que.question}</h3>

                    <label>
                        <input
                            type="radio"
                            value={que.options[0]}
                            checked={selectedOption === que.options[0]}
                            onChange={handleChange}
                        />
                        {que.options[0]}
                    </label>

                    <br />

                    <label>
                        <input
                            type="radio"
                            value={que.options[1]}
                            checked={selectedOption === que.options[1]}
                            onChange={handleChange}
                        />
                        {que.options[1]}
                    </label>

                    <br />

                    <label>
                        <input
                            type="radio"
                            value={que.options[2]}
                            checked={selectedOption === que.options[2]}
                            onChange={handleChange}
                        />
                        {que.options[2]}
                    </label>

                    <br />

                    <label>
                        <input
                            type="radio"
                            value={que.options[3]}
                            checked={selectedOption === que.options[3]}
                            onChange={handleChange}
                        />
                        {que.options[3]}
                    </label>

                    <p>Selected: {selectedOption}</p>
        
                </form>
            </div>




            <div>
                <h3>{que.question}</h3>
                <h4>{que.options[0]}</h4>
                <h4>{que.options[1]}</h4>
                <h4>{que.options[2]}</h4>
                <h4>{que.options[3]}</h4>
                <h5>{que.answer}</h5>
                <h5>{que.explanation}</h5>
            </div>
        </>
    );
}

export default Questions;