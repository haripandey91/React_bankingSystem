import React from 'react'
import Input from "./Input"
import Button from "./Button"
import "../styles/login.scss"

export default function Login(props) {
    console.log(props.validityMessage)
    return (
        <div>
        <div className="login"> 
        <span className="heading">
        <h5>{props.heading}</h5>
        </span>
        <p className="validationMessage">{props.validityMessage}</p>
        <p className="RegistrationSuccess">{props.registrationSuccess}</p>
        <span  className="inputs">
                   <Input name={props.Uname} placeholder=" User ID " type={props.Usertype} id={props.UserId} value= {props.Uvalue} onChange = {props.onChange}/>
                    <Input name={props.Pname} placeholder=" Password "type={props.Passtype} id={props.PasswordId} value= {props.Pvalue} onChange = {props.onChange}/>
            </span> 
            <span className="buttons">           
            <Button className={props.RclassName} value = {props.Rvalue} onClick={(e)=>props.RonClick(e)}/>
            <Button className={props.LclassName} value = {props.Lvalue} onClick={props.LonClick}/>
            </span>
        </div>
        <div>
        
     </div>
     </div>
    )
}
