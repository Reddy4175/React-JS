import React from "react";
import Component2 from './Component2'
let Component=()=> {
    let name ="buddyvamsi"
    let place ="marathalli bridge"
   return (
     <div>
         <h1>Component</h1>
 
         <hr/>
        
         <Component2 Name={name} Place={place}/>
     </div>
   )
 }
 export default Component