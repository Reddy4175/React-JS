import React, { Component } from "react";
class Compclass2 extends React.Component{


    render(){
        return(
        <div>
            <h4>Property 1:{this.props.Product}</h4>
        <h4>Property 2:{this.props.Price}</h4>
        </div>)
    }
}
// export default Compclass2
// class Compclass2 extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>name:{this.props.name}</h1>
//             </div>
//         )
//     }
// }
// export default Compclass2