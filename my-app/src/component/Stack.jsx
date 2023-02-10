import React from 'react'
class Stack extends React.Component {
  Mobile ='Iqoo Z6 Pro'
  Price ='20000'

  render(){
    return (<div>
        <h1>Stack Details</h1>
        <hr/>
        <h2>Mobile Brand:{this.Mobile}</h2>
        <h4>Mobile Price:{this.Price}</h4>
    </div>
    )
  }

}
export default Stack