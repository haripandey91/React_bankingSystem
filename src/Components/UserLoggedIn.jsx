import React from 'react'
import "../styles/userloggedin.scss"
import Input from './Input'
import Button from './Button'

const LoggedIn = (props) => { 
    
    return (
        <div className="logged"> 
            <div className="loggedIn">
                <p>Hello {props.loggedInUserName}</p>
                <div className="totalFundsDiv">
                   <label className="totalFunds">Total Funds: {props.funds}</label>
                </div> 
                <button onClick={props.depositOnClick} className={props.depositClassName}>{props.depositValue}</button>
                <button onClick={props.withdrawOnClick} className={props.withdrawClassName}>{props.withdrawValue}</button>
                <label>{props.messageAfterLogin}</label>
                <Input name={props.AmountName} id={props.UserId} value= {props.AmountValue} onChange = {props.onChange}/>
                <button onClick={props.onClick} className={props.submitClassName}>{props.submitValue}</button>
            </div> 
        </div>
    )
}

export default LoggedIn