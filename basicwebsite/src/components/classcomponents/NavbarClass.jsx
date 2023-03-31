// import
// class creation
// render()
// export

import React from 'react';

class navBarclass extends React.Component{
    constructor(props) {
        super(props);
        // console.log(this);
        this.state={title:"Bharadwaj",age:"25"}
    }
    render(){
        return <h1 onClick={()=>{
            this.setState({title:"chanakya", age:"30"});
            }}>
                {this.state.title}
                &nbsp; age:{this.state.age}
                </h1>
                
    }
}

export default navBarclass;