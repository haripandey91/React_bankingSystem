import React from 'react'
import Input from "./Input"
import Button from "./Button"
import "../styles/login.scss"
export default function Login(props) {
    console.log(props.RonClick)
    
    return (
        <div className="login"> 
        <span className="heading">
        <h5>{props.heading}</h5>
        </span>
        <span  className="inputs">
            User ID:         <Input name={props.Uname} id={props.UserId} value= {props.Uvalue} onChange = {props.onChange}/>
            Password:        <Input name={props.Pname} id={props.PasswordId} value= {props.Pvalue} onChange = {props.onChange}/>
            </span> 
            <span className="buttons">           
            <Button className={props.RclassName} value = {props.Rvalue} onClick={(e)=>props.RonClick(e)}/>
            <Button className={props.LclassName} value = {props.Lvalue} onClick={props.LonCLick}/>
            </span>
        </div>
    )
}
