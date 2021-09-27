import React from "react";
import { Component } from "react";

class InfoBox extends Component{

    constructor(props){
        super(props)
        this.state = {
            username : "",
            email : "",
        }
        this.handleUsername = this.handleUsername.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
    }

    handleUsername(e){
        this.setState({username: e.tatget.value})
    }

    handleEmail(e){
        this.setState({email: e.tatget.value})
    }

    render(){
        return (
            <div>
                <span>Please Enter Your username</span>
                <input value={this.state.username} onChange={this.handleUsername} />
                <br/><br/>
                <span>Please Enter Your Email</span>
                <input value={this.state.email} onChange={this.handleEmail} />
            </div>
        )
    }

}

export default InfoBox;