import React, { Component } from 'react'

 class Message extends Component {
    constructor(){
        super()
         this.state = {
            id:101,
            name:"psa"
              
         }
    }
    changename(){
        this.setState({
            name:"prostack",
            id:102
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.id }</h1>
        <button onClick={() => this.changename()}>click to login</button>
        </div>
    )
  }
}

export default Message