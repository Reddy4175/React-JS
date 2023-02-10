import React from "react";
//import CompB from "./CompB";
import Compclass from "./Compclass";
let CompA= () => {
    let Product = "Dell";
    let Price = 55000;
    return <div>
        <h1>CompA</h1>
        <hr />
        <Compclass product={Product} price={Price}/>
    </div>
}
export default CompA