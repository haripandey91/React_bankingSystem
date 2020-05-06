import React from 'react'
import Input from "./Input"
import Button from "./Button"
import "../styles/registration.scss"
export default function Login(props) {
    
    console.log(props.RonClick)
   
    return (
        <div className="registration"> 
        <span className="heading">
        <h5>{props.heading}</h5>
        </span>
        <span  className="inputs">
           Full name:      <Input name={props.Uname} id={props.RUserId}value= {props.Uvalue} onChange = {props.onChange}/>
           Password:     <Input name={props.Pname} id={props.RPasswordId} value= {props.Pvalue} onChange = {props.onChange}/>
           Initial Cash Deposit : <Input name={props.InitialAmount} id={props.InitialAmountId} value= {props.InitialAmountvalue} onChange = {props.onChange}/>
            </span> 
            <span className="buttons">           
            <Button className={props.RegistrationclassName} value = {props.Registrationvalue} onClick={(e)=>props.SaveonClick(e)}/>
            <Button className={props.BackclassName} value = {props.BackButtonvalue} onClick={(e)=>props.BackonClick(e)}/>
            </span>
        </div>
    )
}
