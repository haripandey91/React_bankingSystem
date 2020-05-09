import React from 'react'
import "../styles/userloggedin.scss"
import Input from './Input'
import Button from './Button'

const LoggedIn = (props) => { 
    
    return (
        <div className="logged"> 
            <div className="loggedIn">
                <p>Hello {props.loggedInUserName} !</p>
                <button onClick={props.logOutClick} className={props.logOutClassName}>{props.logoutValue}</button>
                <div className="totalFundsDiv">
                   <label className="totalFunds">Total Available Funds: {props.funds}</label>
                </div> 
                <button onClick={props.transferOnClick} className={props.transferClassName}>{props.transferValue}</button>
                <button onClick={props.depositOnClick} className={props.depositClassName}>{props.depositValue}</button>
                <button onClick={props.withdrawOnClick} className={props.withdrawClassName}>{props.withdrawValue}</button>
                <label className="WithdrawMessage">{props.messageAfterLogin}</label>
                <Input name={props.AmountName} className={props.inputClassName} id={props.UserId} value= {props.AmountValue} onChange = {props.onChange}/>
                <button onClick={props.onClick} className={props.submitClassName}>{props.submitValue}</button>
            </div> 
        </div>
    )
}

export default LoggedIn