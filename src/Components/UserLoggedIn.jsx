import React from 'react'
import "../styles/userloggedin.scss"
import Input from './Input'

const LoggedIn = (props) => { 
    
    return (
        <div className="mainDiv">
            <div className="logged"> 
                <div className="loggedIn">
                    <p className="UserNameP">Hello {props.loggedInUserName} !</p>
                    <button onClick={props.logOutClick} className={props.logOutClassName}>{props.logoutValue}</button>
                    <div className="totalFundsDiv">
                    <label className="totalFunds">Total Available Funds: {props.funds}</label>
                    </div> 
                    <p className="transferError">{props.depositError}</p>
                    <button onClick={props.transferOnClick} className={props.transferClassName} value={props.transferButtonValue}>{props.transferValue}</button>
                    <button onClick={props.depositOnClick} className={props.depositClassName} value={props.depositButtonValue}>{props.depositValue}</button>
                    <button onClick={props.withdrawOnClick} className={props.withdrawClassName} value={props.withdrawButtonValue}>{props.withdrawValue}</button>
                    <label className="WithdrawMessage">{props.messageAfterLogin}</label>
                    <Input name={props.AmountName} className={props.inputClassName} id={props.UserId} value= {props.AmountValue} onChange = {props.onChange}/>
                    <button onClick={props.onClick} className={props.submitClassName} value={props.transferButtonValue}>{props.submitValue}</button>
                </div> 
            </div>
    </div>
    )
}

export default LoggedIn