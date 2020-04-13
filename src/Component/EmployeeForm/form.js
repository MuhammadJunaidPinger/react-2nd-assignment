import React, { Component } from "react";
import MeraButton from "../MeraButton";

class EmployeeForm extends Component {
    state = {
        employee: [],
        firstName: "",
        lastName: "",
        salary: "",
        JobStart: "",
    }
    onChange(key, value) {
        this.setState({
            [key]: value
        })
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
                <h1>Add Employee Form</h1>

                <input placeholder="First name" 
                value={this.state.firstName} 
                style={inputStyle}
                onChange={(e) => this.onChange("firstName", e.target.value)}/>
                
                <br /><br />
                <input placeholder="Last name" value={this.state.lastName} style={inputStyle} onChange={(e) => this.onChange("lastName", e.target.value)}/>
                <br /><br />
                <input placeholder="Salary" value={this.state.salary} style={inputStyle} onChange={(e) => this.onChange("salary", e.target.value)}/>
                <br /><br />
                <input placeholder="Job start at" value={this.state.JobStart} style={inputStyle} onChange={(e) => this.onChange("JobStart", e.target.value)}/>
                <br /><br />
                <MeraButton buttonClicked={this.saveData.bind(this)} buttonText="Update" bgColor="Orange" />
                
            </div>
            
        )
    }
}
export default EmployeeForm;