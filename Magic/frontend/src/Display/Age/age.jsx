import Questions from "../../Components/Questions";

function Age() {
    return ( 
        <>
            <h1>Age</h1>
            <Questions uri="https://aptitude-api.vercel.app/Age" />
        </>
     );
}

export default Age;