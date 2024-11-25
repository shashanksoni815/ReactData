function haddleFormSubmit() {
    console.log("form was submitted")
}

export default function Form() {
    return (
        <form >
            <input type="text" placeholder="write something"/>
            <button onClick={haddleFormSubmit}>Submit</button>
        </form>
    )
}