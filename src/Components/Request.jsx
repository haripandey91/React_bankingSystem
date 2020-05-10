import React from 'react'
import "../styles/request.scss"
const Request = (props) => {   
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
                    <p className="transferError">{props.requestError}</p> 
                    <input name={props.requestIdName} placeholder="Give request receiver's ID"  className="inputClassName" value= {props.requestIdValue} onChange = {props.onChange}/>
                    <input name={props.requestAmountName} placeholder="Requesting amount" className="inputClassName"  value= {props.requestAmountValue} onChange = {props.onChange}/>
                    <button onClick={props.onBackButtonClick} value={props.backButtonTransferValue} className="btn btn-danger transferBackButton">Back</button>
                    <button onClick={props.requestButtonClick} className={props.requestButtonClassName}>Request</button>
                </div> 
            </div>
    </div>
    )
}

export default Request