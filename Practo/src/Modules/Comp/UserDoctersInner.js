import React, { Component } from 'react'
import {authApi} from '../../apiCall'
import swal from 'sweetalert'


export class UserDoctersInner extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            model:false,
            appointmentTime:""
        }
    }

    submit=(docterId)=>{
        authApi.post("/update/docterAppointment",{
            docterId,
            appointmentTime:this.state.appointmentTime
        })
        .then(res=>{
            if(res.data.status){
                swal({icon:"success",text:"Docter Appointment Added"})
            }
            else{
                swal({icon:"warning",text:"Sorry Docter is not available at that time"})
            }
        })
        .catch(()=>{
            swal({icon:"error",text:"Error in Adding Docter Appointment"})
        })
    }
   


    render() {
        return (
            <>
                <div onClick={()=>this.setState({model:true})} className="match-card">
                    <div className="match-card-1">
                       
                        <div className="match-card-1-1">
                            <img src={this.props.data.docterImage} alt="logo" width="100px" height="100px"/>
                        </div>
                        <div className="match-card-1-2">
                            <h3>{this.props.data.name}</h3>
                            <table>
                                <tr><td><strong>Specialties:</strong></td><td>{this.props.data.specialties}</td></tr>
                                <tr><td><strong>Experience:</strong></td><td>{this.props.data.experience}</td></tr>
                                <tr><td><strong>Timings:</strong></td><td>{this.props.data.timings}</td></tr>
                                <tr><td><strong>Phone:</strong></td><td>{this.props.data.phone}</td></tr>

                            </table>
                             
                        </div>
                    </div>
                   
                    
                </div>

                {this.state.model
                ?
                    <>
                        <div onClick={()=>this.setState({model:false})} className="close">

                        </div>
                        <div className="player-selection-model">
                            <div className="player-selection-model-inner">
                                <div className="player-selection-model-inner-1">
                                   
                                    
                                    <h3 className="player-selection-model-inner-1-h3">Docter Details</h3>
                                    <div className="squad">
                                        <div className="squad-img">
                                            <img src={this.props.data.docterImage} alt="logo" width="150px" height="150px"/>

                                        </div>

                                        <table>
                                            <tr><td><strong>Specialties:</strong></td><td>{this.props.data.specialties}</td></tr>
                                            <tr><td><strong>Experience:</strong></td><td>{this.props.data.experience}</td></tr>
                                            <tr><td><strong>Timings:</strong></td><td>{this.props.data.timings}</td></tr>
                                            <tr><td><strong>Phone:</strong></td><td>{this.props.data.phone}</td></tr>
                                            <tr><td><strong>Address:</strong></td><td>{this.props.data.address}</td></tr>

                                        </table>
                                    </div>

                                    

                                </div>
                                
                                <div className="player-selection-model-inner-2">                           

                                    <h3 className="player-selection-model-inner-1-h3">Book Appointment</h3>
                                    <input type="datetime-local" className="inputbox-1" value={this.state.appointmentTime} onChange={(e)=>this.setState({appointmentTime:e.target.value})}/>

                                    <div className="squad">
                                       <button className="button" onClick={()=>this.submit(this.props.data.id)}>Book</button>
                                    </div>
                                    
                                    

                                </div>
                            </div>
                        </div>
                    </>
                :
                    <></>
                }

            </>
        )
    }
}

export default UserDoctersInner
