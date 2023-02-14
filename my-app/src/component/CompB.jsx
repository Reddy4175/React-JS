import React from "react";

let CompB = (props) => {
    return (
    <div>
        <h1>CompB</h1>
        {/* <pre>{JSON.stringify(props)}</pre> */}
        <h4>Buddy's Name:{props.Name}</h4>
        <h4>Budddy's place:{props.Place}</h4>
        
    </div>
    )
}
export default CompB