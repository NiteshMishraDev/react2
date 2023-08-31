import React, { Component } from 'react'
import './Header.css'


export default class Header extends Component {
    constructor(props){
        super(props)

        this.state={
            
            keyword:"Search"

        }
    }
    
    onChange=(e)=>{
        this.setState({keyword:e.target.value ? e.target.value:"Search"})
         this.props.userInput(e.target.value)


    }


  render() {
    return (
      <div>
        <header>
          <h1 style={{color:"red"}}>Countries_React_App_Mishra</h1>
                        
            <input onChange={this.onChange}  placeholder="Search....."></input>
            <div style={{color:'yellow'}}>{this.state.keyword}</div>
        </header>
      </div>
    )
  }
}
