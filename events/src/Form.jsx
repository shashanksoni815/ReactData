// import React from 'react';
function handleFormSubmit() {
    console.log("Form was Submitted");
};

function Form() {
    return ( 
        <>
            <form>
                <input type="text" />
                <button onClick={handleFormSubmit}>Submit</button>
            </form>
        </>
     );
}

export default Form;