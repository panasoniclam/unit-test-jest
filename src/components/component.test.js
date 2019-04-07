import React,{Component} from 'react'
import Action from './../actions/action.test'
import { connect } from 'react-redux';
class Test extends Component{
    constructor(Props){
        super(Props);
        this.state ={
            data:'test',
            lam:'anh lam'

        }
    }
    onClick = () =>{
        this.setState({
            data:'da thay doi'
        })
    }
    
    render(){
        console.log('state ban dau',this.state)
        return(
            <div>
                <h1>{this.state.data}</h1>
                {this.state.lam}
                <button onClick={this.onClick}>Click</button>
               <h1>{this.props.test}</h1> 
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        data:state.lam
    }
}

const mapDispatchPros = (dispatch,props)=>{
    return{
        onClick:()=>{
            dispatch(Action.Test());
        }
    }
}

export default connect(mapStateToProps,mapDispatchPros)(Test)