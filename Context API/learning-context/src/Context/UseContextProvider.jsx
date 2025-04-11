import { useState } from "react";
import UserContext from "./UseContext";

const UseContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    return(
        <>
            <UserContext.Provider value={{user, setUser}} >
            {children}
            </UserContext.Provider>
            
        </>
    )
}

export default UseContextProvider;