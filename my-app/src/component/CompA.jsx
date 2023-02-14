import React from "react";
import CompB from "./CompB";

let CompA=()=> {
   let name ="buddyvamsi"
   let place ="marathalli bridge"
  return (
    <div>
        <h1>Comp A</h1>

        <hr/>
       
        <CompB Name={name} Place={place}/>
    </div>
  )
}

export default CompA