import React, { Component } from 'react'
import InputBox from '../ReuseComp/InputBox'
import {authApi} from '../../apiCall'
import swal from 'sweetalert'

export class AddDocter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            photo:[],
            name:"",
            specialties:"",
            timings:"",
            experience:"",
            address:"",
            phone:""
        }
    }
    eventHandle=(e)=>{
        let value = e.target.value
       
        this.setState({
            [e.target.name]: value
        })
    }
    
    submit=()=>{
        const formdata=new FormData();
        formdata.append("photo",this.state.photo);
        formdata.append("name",this.state.name);
        formdata.append("specialties",this.state.specialties);
        formdata.append("timings",this.state.timings);
        formdata.append("experience",this.state.experience);
        formdata.append("address",this.state.address);
        formdata.append("phone",this.state.phone);

        let config={
            headers: {
                'content-type': 'multipart/form-data',
        
            }
        }
        authApi.post("/update/addDocter",formdata,config)
        .then(res=>{
            console.log("add Product admin = ");
            swal({icon:"success",text:"Docter Added"})

        })
        .catch(()=>{
            swal({icon:"error",text:"Error in Adding Docter"})

        })

       
    }
    
    render() {
        return (
            <div className="moderators">
                <div className="moderators-inner">
                    <strong>
                        <h3>Add a New Docter</h3>
                    </strong>
                    <div className="text-field">
                        <label>Docter Photo: </label>
                        <input type="file" className="inputbox-1"  onChange={(e)=>this.setState({photo:e.target.files[0]})}/>
                    </div>
                    <div className="text-field">
                        <label>Name : </label>
                        <InputBox  placeholder="Name" name="name" type="text" value={this.state.name} onChange={this.eventHandle} />
                    </div>

                    <div className="text-field">
                        <label>Specialties : </label>
                        <InputBox  placeholder="Specialties" name="specialties" type="text" value={this.state.specialties} onChange={this.eventHandle} />
                    </div>
                    <div className="text-field">
                        <label>Timings : </label>
                        <InputBox  placeholder="Timings (eg: 9am -10pm)" name="timings" type="text"  value={this.state.timings} onChange={this.eventHandle} />
                    </div>
                    <div className="text-field">
                        <label>Experience : </label>
                        <InputBox  placeholder="Experience (Years)" name="experience" type="number"  value={this.state.experience} onChange={this.eventHandle} />
                    </div> <div className="text-field">
                        <label>Address : </label>
                        <InputBox  placeholder="Address" name="address" type="text"  value={this.state.address} onChange={this.eventHandle} />
                    </div> <div className="text-field">
                        <label>Phone: </label>
                        <InputBox  placeholder="Phone" name="phone" type="number"  value={this.state.phone} onChange={this.eventHandle} />
                    </div>
                    
                    <button onClick={()=>this.submit()} className="button">Add Docter</button>
                </div>
            </div>
        )
    }
}

export default AddDocter
