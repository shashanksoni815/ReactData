// import React from 'react';

function print() {
    console.log("Hello")
}
function printHover() {
    console.log("Hello Hover")
}

function Button() {
    return ( 
        <>
            <h1>hi</h1>
            <button onClick={print} >Click me!</button>
            <p onMouseOver={printHover} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fuga a mollitia quo iusto aperiam deleniti pariatur voluptatum ex excepturi eum reprehenderit labore commodi nesciunt corporis, molestiae asperiores nemo odio!
            Rem explicabo exercitationem, voluptates veniam dolore blanditiis dicta molestiae in reiciendis ipsa saepe, reprehenderit enim laudantium perferendis sapiente architecto laborum suscipit dolores vero nihil fugiat ad qui obcaecati. Velit, porro.
            Labore, vitae perspiciatis. Tempore accusamus ratione voluptatibus animi quo aperiam laboriosam, quis porro libero similique cupiditate aut reprehenderit eos sit voluptatum ipsa quisquam consequuntur! Voluptatem, pariatur quod. Temporibus, voluptatem reiciendis.
            Eos labore nemo aperiam in animi, recusandae adipisci perspiciatis repellat accusamus quod distinctio voluptates corrupti, officia voluptas. Voluptates, nesciunt, assumenda aliquam, eum nulla numquam ipsa nostrum consequatur tempore saepe veniam.</p>
        </>
     );
}

export default Button;