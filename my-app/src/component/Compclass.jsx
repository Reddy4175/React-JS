import React from 'react'
//import CompA from './CompA';
import Compclass2 from './Compclass2'
 
class Compclass extends React.Component{
    Product = "Dell"
     Price = 55000
     qty = 2
    render(){
        return (<div>
    <h1>CompA</h1>
        <hr />
         <Compclass2 product={this.Product} price={this.Price} Quantity={this.qty}/>
        </div>)
    }
}
export default Compclass
// import React, {Component} from "react";
// import Compclass2 from "./Compclass2";
// class Compclass extends Component{
//     name="oe"
//     email="new@gmail.com"
//     render(){
//         return(
//             <div>
//                 <h4>
//                     <Compclass2 name={this.name} email={this.email}/>
//                 </h4>
//             </div>
//         )
//     }
// }
//export default Compclass