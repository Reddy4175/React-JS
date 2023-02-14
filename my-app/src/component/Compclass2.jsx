import React from "react";
class Compclass2 extends React.Component{


    render(){
        return(
        <div>
            <h1>class component 2</h1>
            <h4>Full Name:{this.props.name}</h4>
        <h4> Salary:{this.props.salary}</h4>
        <h4>Main Company:{this.props.Company}</h4>
        <h4>Desigination:{this.props.designation}</h4>
        </div>
        )
    }
}
 export default Compclass2
