import React, { Component } from 'react'
import Navbar from './Comp/Navbar'
import AddDocter from './Comp/AddDocter'
import AddMatch from './Comp/AddMatch'
import Appointments from './Comp/Appointments'



export class AdminHome extends Component {
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
          case 1:return <Appointments/>
          case 2:return <AddDocter/>
          default:return <Appointments/>
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

export default AdminHome
