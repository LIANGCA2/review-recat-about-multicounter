import React,{Component} from "react";

class Counter extends Component{

    constructor(props){
        super(props);
        this.state={
            count:0
        }

    }
    add =()=>{
        console.log(this.state.count)
        var count= this.state.count;
        count = count+1;
        console.log(count)
        this.setState({
            count:count
        })
        this.props.update("add");
    }

    sub =()=>{
        let count= this.state.count;
        count = count-1;
        this.setState({
            count:count
        })
        this.props.update("sub");
    }

    render(){
        return(<div>

            <button onClick ={(this.add).bind(this)}>+</button>
            <button  onClick = {(this.sub).bind(this)}>-</button>
            <span>Count:{this.state.count}</span>

        </div>)
    }
}
export default Counter