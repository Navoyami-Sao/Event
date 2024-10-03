import './App.css'

import React, { Component } from 'react'


class User extends Component{
constructor(props){
    super(props)
    this.state = {
        counter : 0,
        isName : 'Abdullox',
        isAge : '14',
    }
}
clickBtn = ()=>{
    this.setState  ({
       counter : this.state.counter + 1
    }
)}
decBtn = ()=>{
    this.setState ({
        counter : this.state.counter - 1
    })
}
resBtn = ()=>{
    this.setState({
            counter : 0,
    })
}
inputName = (e)=>{
    this.setState({
        isName : e.target.value,
    })
}
inputAge = (e)=>{
    this.setState({
        isAge : e.target.value,
    })
}



    render(){
        let {lastName, firstName, link} = this.props
        return(
            <div className='w-25 bg-primary p-2 mt-5 text-center fs-3 mx-auto'>
                <div>
                <p className='text-light'>{this.state.counter}</p>  
                <div className='d-f'>
                <button onClick={this.clickBtn} className=' m-1 w-25 btn btn-success'>Up</button>
                <button onClick={this.decBtn} className=' m-1 w-25 btn btn-danger'>Down</button>
                <button onClick={this.resBtn} className=' m-1 w-25 btn btn-warning'>Reset</button>
                </div> 
                <form className='mt-5'>
                    <span className='fs-5 '>Ismingiz :</span>
                    <input onChange={this.inputName} className='w-100% rounded-3 mt-3 mb-5' type='text'/>
                    <span className='fs-5 mt-5'>Yoshingiz :</span>
                    <input onChange={this.inputAge} className=' w-100% rounded-3 mt-3 mb-5 ' type='number'/>
                </form>
                </div>
                <div>
                    <p className='fs-5'>Ismi : {this.state.isName}</p>
                    <p className='fs-5'>Yoshi :  {this.state.isAge}</p>
                </div>       
            </div>
        )
    }
}



const App = () => {
  return (
    <User/>
  )
}

export default App
