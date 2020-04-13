import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./Screens/Home"
import Login from "./Screens/Login"
import MeraButton from "./Component/MeraButton"
import Swal from "sweetalert2"
import { Fab, AddIcon } from '@material-ui/core';
import EmployeeList from "./Component/EmployeeList/employeeData"
import EmployeeForm from "./Component/EmployeeForm/form"

class App extends Component {
  state = {
    user: false
  }
  onlogin = () => {
    this.setState({
      user: true
    })
  }
  onUserLogOut = () => {
    this.setState({
      user: false
    })
  }

  render() {
    const {user} = this.state
    return (
      <div className="App">
      <header className="App-header">
         <Login onlogin={this.onlogin.bind(this)}/>
        <EmployeeForm />
        <EmployeeList onLogout={this.onUserLogOut.bind(this)}/>

          <br/>
        </header>
      </div>
    );
  }
}

export default App;
