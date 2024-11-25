function printHello() {
    console.log("Hello World")
}

function printBye() {
    console.log("byee")
}

export default function Button() {
    return (
        <div>
            <button onClick={printHello}>Click me!</button>
            <p onClick={printBye}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores sed dolore nostrum voluptates hic fuga autem? Voluptas rerum facere non adipisci, libero reprehenderit eos fugiat dolore obcaecati inventore cum modi.</p>
        </div>
    )
}