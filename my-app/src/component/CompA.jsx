import React from "react";
//import CompB from "./CompB";

let CompA= (props) => {
    return <div>
        <pre>{JSON.stringify(props)}</pre>
        <h2>product{props.Product}</h2>
        <h3>Quantity{props.Price}</h3>

    
        
        
    </div>
}
export default CompA