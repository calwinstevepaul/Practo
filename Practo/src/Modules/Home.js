import React, { Component } from 'react'
import Navbar from './Comp/Navbar'
import './Home.css'
import UserDocters from './Comp/UserDocters'
import Selected from './Comp/Selected'
import Result from './Comp/Result'

 


export class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             page:1
        }
    }
    changePage=(value)=>{
        this.setState({
            page:value
        })
    }
   
    renderSwitch(param) {
        switch(param) {
          case 1:return <UserDocters />
        //   case 2:return <Selected />
          case 2:return <Result />
          default:return <UserDocters />
        }
    }
    
   
    render() {
        return (
            <div className="home">
                <Navbar changePage={this.changePage} {...this.props}/>  
                <div className="body">
                    {this.renderSwitch(this.state.page)}
                </div>                            
            </div>
        )
    }
}

export default Home
