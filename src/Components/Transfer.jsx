import React from 'react'
import "../styles/transfer.scss"
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
                    </div> 
                    <p className="transferError">{props.transferError}</p> 
                    <input name={props.idName} placeholder="Give receiver's ID"  className="inputClassName" value= {props.tranferIdValue} onChange = {props.onChange}/>
                    <input name={props.transferAmountName} placeholder="Give amount to be transfered" className="inputClassName"  value= {props.transferAmountValue} onChange = {props.onChange}/>
                    <button onClick={props.onBackButtonClick} value={props.backButtonTransferValue} className="btn btn-danger transferBackButton">Back</button>
                    <button onClick={props.transferSubmitClick} className={props.submitClassName}>Transfer</button>
                </div> 
            </div>
    </div>
    )
}

export default Transfer