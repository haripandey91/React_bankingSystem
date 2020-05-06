import React from 'react'
import "../styles/userloggedin.scss"
import Input from './Input'
import Button from './Button'

const LoggedIn = (props) => { 
    
    return (
        <div className="logged"> 
            <div className="loggedIn">
                <p>Hello</p>
                <div className="totalFundsDiv">
                   <label className="totalFunds">Total Funds: {props.funds}</label>
                </div> 
                <button onClick={props.onClick} className={props.depositClassName}>{props.depositValue}</button>
                <button onClick={props.onClick} className={props.withdrawClassName}>{props.withdrawValue}</button>
                <Input name={props.Uname} id={props.UserId} value= {props.Uvalue} onChange = {props.onChange}/>
                <Input name={props.Pname} id={props.PasswordId} value= {props.Pvalue} onChange = {props.onChange}/>
            </div> 
        </div>
    )
}

export default LoggedIn