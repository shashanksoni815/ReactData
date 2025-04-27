import Questions from "../../Components/Questions";

function Random() {
    return ( 
        <>
            <h1>Random</h1>
            <Questions uri=" https://aptitude-api.vercel.app/Random" />
        </>
     );
}

export default Random;