import React from 'react'
//import CompA from './CompA';
import Compclass2 from './Compclass2'
 
class Compclass extends React.Component{
    Name = "Vamsi"
     salary = 95000
     Company = "ISRO"
     dept = "Scientist"
    render(){
        return (<div>
    <h1>CompA</h1>
        <hr />
        <hr />
         <Compclass2 name={this.Name} salary={this.salary} Company={this.Company} designation={this.dept}/>
        </div>)
    }
}
export default Compclass
