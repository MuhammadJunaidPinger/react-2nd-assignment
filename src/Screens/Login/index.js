import React, { Component } from "react";
import MeraButton from "../../Component/MeraButton";
import Swal from "sweetalert2"
import { Fab, } from '@material-ui/core';

class Login extends Component {
    state = {
        email: "admin@domain.com",
        password: "admin" 
    }
    login = () => {
        if(this.state.email === document.getElementById("email").value 
        && this.state.password === document.getElementById("password").value)
         {
            Swal.fire(
                'Good job!',
                'Login successful!',
              )
              this.props.onlogin()
        }else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Wrong Credentials !',
              })
        }
    }
    render() {
        const style = {
            border: "2px solid orange",
            height: "400px",
            width: "50%",
            margin: "35px auto",
            borderRadius: "15px"
        }
        const inputStyle = {
            width: 300,
            height: 25,
            // hover: "blue",
            // blur: "green",
            border: "2px solid orange",
            borderRadius: "8px",
            outLine: "none",
            textAlign: "center",
            focus: "green"
        }
        return (
        <div style={style}>
            <h1>Login Form</h1>

            {"Email: "}<br/>
            <input placeholder="Email" type = "email" id="email" style={inputStyle} />
            <br/>
            
            {"Password:"}<br/>
            <input placeholder="Password" type="password" id="password" style={inputStyle}/>
            <br/><br/>
          {/* <Fab> */}
            <MeraButton buttonText="Login" buttonClicked={this.login.bind(this)} />
            {/* </Fab> */}
            </div>            
        )
    }
}
export default Login;