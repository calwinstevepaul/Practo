import React, { Component } from 'react'
import {authApi} from '../../apiCall'
import swal from 'sweetalert'
import UserDoctersInner from './UserDoctersInner'
export class UserDocters extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            docters:[]
        }
    }
    componentDidMount(){
        this.getMatch()
    }
    getMatch=()=>{
        authApi.get("/getdata/docters").then(res=>{
            this.setState({
                docters:res.data
            })
        })
    }
    
    render() {
        return (
            <div className="match">
                {this.state.docters.map(data=>{
                    return <UserDoctersInner data={data}/>
                })}
            </div>
        )
    }
}

export default UserDocters
