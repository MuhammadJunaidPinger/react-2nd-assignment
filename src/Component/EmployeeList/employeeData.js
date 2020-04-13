import React, { Component } from "react";
import MeraButton from "../MeraButton";
import EmployeeForm from "../EmployeeForm/form"
class EmployeeList extends Component {
    state = {
        employee: [],
        firstName: "",
        lastName: "",
        salary: "",
        JobStart: "",
    }
    logOut = () => {
        this.props.onLogout()
    }
    
saveData = () =>{
    const { firstName, lastName, salary,JobStart, employee } = this.state
    employee.push({ firstName, lastName, salary,JobStart })
    this.setState({
        employee
    })
}
render() {
    const inputStyle = {
        width: 300,
        height: 25,
        border: "2px solid orange",
        borderRadius: "8px",
        outLine: "none",
        padding: "5px",
        marginLeft: "10px"
    }
    const style = {
        border: "2px solid orange",
        height: "450px",
        width: "50%",
        margin: "35px auto",
        borderRadius: "15px"
    }
    return (
        <div style={style}>
            <h1>Add Employee detail</h1>
            <div>
                    <table border="2 solid white">
                {this.state.employee.map((item,index) => {
                    return <tr key={index}>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.salary}</td>
                        <td>{item.JobStart}</td>
                        <td><button>Edit</button></td>

                    </tr>
                })}
            </table>
                </div>
            <MeraButton buttonText="logOut" buttonClicked={this.logOut.bind(this)} bgColor="defualt" color="black" marginLeft="150px" />

            
        </div>
    )
}
}
export default EmployeeList;