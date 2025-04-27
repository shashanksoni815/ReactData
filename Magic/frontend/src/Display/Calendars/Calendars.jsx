import Questions from "../../Components/Questions";

function Calender() {
    return ( 
        <>
            <h1>Calendar</h1>
            <Questions uri="https://aptitude-api.vercel.app/Calendar" />
        </>
     );
}

export default Calender;