import { useLocation } from "react-router-dom";

function Countries() {
    const {state} = useLocation();
    const data = state.data;
    console.log("The data in countries", data)
    

    return(
        
        <h2>The</h2>
    )
}

export default Countries