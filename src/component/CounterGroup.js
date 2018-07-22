import React,{Component} from "react"
import Counter from "./Counter";



class CounterGroup extends Component{
    constructor(props){
        super(props)

    this.state = {
        amount:0,
        sum:0
    }
    this.inputValue = React.createRef()
    }

    inputCounterNumber =(event)=>{
        var amount = this.inputValue.current.value;
        this.setState({
            amount:amount,
            sum:0
        })

    }

    updateSum =(flag)=>{
        let sum =  this.state.sum;
        if(flag ==="add"){
            sum++;
        }else{
            sum--;
        }
        this.setState({
            sum:sum
        })
    }


    render(){

return(<div>

    <input type="text" ref={this.inputValue} onChange={(this.inputCounterNumber).bind(this)}/>
    {this.generateCounter()}
<div>sum:{this.state.sum}</div>
</div>)
    }
    generateCounter = ()=>{
        let list = []
        for(let i = 0;i<this.state.amount;i++){
            list.push(<Counter   update = {(e)=>this.updateSum(e)}/>)
        }
        return list
    }
}


export default CounterGroup