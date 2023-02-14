import React from "react";

class Component2 extends React.Component{

    render(){
        return(
              <div>
               <h1>Component2</h1>
               <h3>SurName:{this.props.Name}</h3>
               <h3>Address:{this.props.Place}</h3>
              </div>

        )
    }
}
export default Component2