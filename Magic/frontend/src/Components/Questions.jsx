import React, { useState, useEffect } from 'react';


function Questions() {

    const [que, setQue] = useState(null)
    const [selectedOption, setSelectedOption] = useState('')
    const [correctAnswer, setCorrectAnswer] = useState(false);


    useEffect(() => {
        fetch('https://aptitude-api.vercel.app/Age')
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
            // alert("Correct answer");
        } else {
            alert("Wrong Answer")
        }
    }

    return ( 
        <>
            <div>
                <h3>{que.question}</h3>
                {
                    que.options.map((val , idx) => (
                        <label key={idx}>
                            <input type="radio"
                            name="age"
                            value={val}
                            checked = { selectedOption == val }
                            onChange={handleChange}
                            />
                            {val}
                        </label>
                    ))
                }
                <p>selected option : {selectedOption} </p> <br /><br />
                <button onClick={checkAnswer } > Submit </button>
                {/* <h4>{que.options[0]}</h4>
                <h4>{que.options[1]}</h4>
                <h4>{que.options[2]}</h4>
                <h4>{que.options[3]}</h4>
                <h5>{que.answer}</h5>
                <h5>{que.explanation}</h5> */}

                { correctAnswer && (
                    <div className='correctModel'>
                    <div className='correct'>
                         <h1>Answer is correct</h1>
                         <h5>Correct answer : {que.answer}</h5>
                        <h5>Explanation = {que.explanation}</h5>
                         <button onClick={() => setCorrectAnswer(false)}> Ok </button>
                    </div>
                    </div>
                )}

            </div>
        </>
    );
}

export default Questions;