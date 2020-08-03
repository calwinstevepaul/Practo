import React, { Component } from 'react'
import AppointmentsInner from './AppointmentsInner'
import {authApi} from '../../apiCall'
import swal from 'sweetalert'
export class Appointments extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Appointments:[]
        }
    }
    componentDidMount(){
        this.getAppointments()
    }
    getAppointments=()=>{
        authApi.get("/getdata/appointments").then(res=>{
            this.setState({
                Appointments:res.data
            })
        })
    }
    
    render() {
        return (
            <div className="match">
                {this.state.Appointments.map(data=>{                    
                    return <AppointmentsInner data={data} getAppointments={this.getAppointments} />
                })}
            </div>
        )
    }
}

export default Appointments
