import React from 'react'
import "../styles/userloggedin.scss"
import Input from './Input'
import Button from './Button'

const Transfer = (props) => { 
    
    return (
        <div className="mainDiv">
            <div className="logged"> 
                <div className="loggedIn">
                    <p className="UserNameP">Hello {props.loggedInUserName} !</p>
                    <button onClick={props.logOutClick} className={props.logOutClassName}>Log Out</button>
                    <div className="totalFundsDiv">
                    <label className="totalFunds">Total Available Funds: {props.funds}</label>
                    </div> 
                    <div className="ButtonWrap">
                        <button onClick={props.transferOnClick} className={props.transferClassName}>Transfer</button>
                        <button onClick={props.depositOnClick} className={props.depositClassName}>Deposit</button>
                        <button onClick={props.withdrawOnClick} className={props.withdrawClassName}>Withdraw</button>
                    </div> 
                    <p className="transferError">{props.transferError}</p>  
                    <Input name={props.idName} placeholder="Give receiver's ID"  className={props.transferIdClassName} value= {props.tranferIdValue} onChange = {props.onChange}/>
                    <Input name={props.transferAmountName} placeholder="Give amount to be transfered" className={props.transferAmountClassName}  value= {props.transferAmountValue} onChange = {props.onChange}/>
                    <button onClick={props.transferSubmitClick} className={props.submitClassName}>Transfer</button>
                </div> 
            </div>
    </div>
    )
}

export default Transfer