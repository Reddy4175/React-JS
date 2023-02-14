import React from "react";
import Function from "./Function";
class Class extends React.Component{
empname ="reddy";
empsal =85000;
emploc="bng"
render(){
    return(
        <div>
          <h1>Class Component</h1>
          <hr/>
<Function name={this.empname} salary={this.empsal} Location={this.emploc}/>
        </div>




    )
}



}
export default Class