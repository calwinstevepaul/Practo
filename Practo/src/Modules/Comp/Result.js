import React, { Component } from 'react'
import {authApi} from '../../apiCall'
import swal from 'sweetalert'

export class Result extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            appointments:[]
        }
    }
    
    componentDidMount(){
        this.getResult()
    }
    getResult(){
        authApi.get("/getdata/userAppointments").then(res=>{
            this.setState({
                appointments:res.data
                
            })
        })
    }
    render() {
        return (
            <div className="info">
                <div className="info-inner">
                    <div className="user-appointment">

                        <table >
                            <tr>
                                <th>Docter Name</th>
                                <th>Contact Number</th>
                                <th>Date</th>
                                <th>Time</th>

                            </tr>
                            {this.state.appointments.map(data=>{
                                return (
                                    <tr> 
                                        <td>{data.docter.name}</td>
                                        <td>{data.docter.phone}</td>
                                        <td>{new Date(data.appointmentTime).toDateString()}</td>
                                        <td>{new Date(data.appointmentTime).toLocaleTimeString()}</td>
                                    </tr>
                                    
                                )
                            })}

 

                        </table>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Result
