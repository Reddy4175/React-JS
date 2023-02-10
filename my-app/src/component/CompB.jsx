import React from "react";
let CompB = (props) => {
    return <div>
        <h1>CompB</h1>
        <pre>{JSON.stringify(props)}</pre>
        <h4>Property 1:{props.props1}</h4>
        <h4>Property 2:{props.props2}</h4>
        
    </div>
}
export default CompB