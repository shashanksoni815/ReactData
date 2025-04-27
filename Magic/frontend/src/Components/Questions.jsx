import React, { useState, useEffect } from 'react';
import "../Components/Questions.css"

function Questions({uri}) {

    const [que, setQue] = useState(null)
    const [selectedOption, setSelectedOption] = useState('')
    const [correctAnswer, setCorrectAnswer] = useState(false);
    const [inCorrectAnswer, setInCorrectAnswer] = useState(false);


    useEffect(() => {
        fetch(uri)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setQue(data);
        })
    }, [])

    if (!que) {
        return <p>Loading ...</p>
    }

    const handleChange = (e) => {
        setSelectedOption(e.target.value)
    }

    const checkAnswer = (e) => {
        e.preventDefault();
        if (selectedOption == que.answer) {
            setCorrectAnswer(true);
            setInCorrectAnswer(false);
        } else {
            setInCorrectAnswer(true);
            setCorrectAnswer(false);
        }
    }

    return ( 
        <>
            <div className='Question'>
                <h3>{que.question}</h3>
                {que.options.map((val , idx) => (
                    <label key={idx} className='option'>
                        <input type="radio"
                        className='form-check-input radio'
                        name="raid"
                        value={val}
                        checked = { selectedOption == val }
                        onChange={handleChange}
                        />
                        <p>{val}</p>
                    </label>
                ))}
                <p>selected option : {selectedOption} </p> 
                <br /><br />
                <button onClick={checkAnswer } > Submit </button>
                
                { inCorrectAnswer && (
                    <div >
                        <h1>Wrong Answer</h1>
                        <h5>Correct answer is: {que.answer}</h5>
                        <h5>Explanation: {que.explanation}</h5>
                        <button onClick={() => setInCorrectAnswer(false)}>Try Again</button>
                    </div>
                )}

                { correctAnswer && (
                    <div >
                        <h1>Answer is correct</h1>
                        <h5>Correct answer : {que.answer}</h5>
                        <h5>Explanation = {que.explanation}</h5>
                        <button  onClick={() => setCorrectAnswer(false)}> Ok </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default Questions;