import React from 'react'
class Compclass extends React.Component{
    render(){
        return <div>
            <h2>Component Class</h2>
            <pre>{JSON.stringify(this.props)}</pre>
            <h3>employee:{this.props.props1}</h3>
        </div>
    }
}
export default Compclass