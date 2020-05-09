import React from "react";
import Register from "./Register";
import Registration from "../Components/Registration";
import Login from '../Components/Login'

const FirstPage = (props) => {
  console.log(props.validityMessage)
    return (
  <div>
    {props.sregister === "Login" ? (
      <div>
        <Register
          Uname="uname"
          Pname="Lname"
          UserId="userId"
          PasswordId="passwordId"
          type="password"
          onChange={props.onLoginInputHandler}
          RclassName="btn btn-info"
          LclassName="btn btn-success"
          Rvalue="Register"
          Lvalue="Login"
          heading="Please login to continue"
          RonClick={props.onClickHandaler}
          LonClick={props.loginHandler}
          validityMessage= {props.validityMessage}
        />
      </div>
    ) : (
      <Registration
        Uname="Uname"
        Pname="Pname"
        InitialAmount="InitialAmount"
        RUserId="rUserId"
        RPasswordId="rPasswordId"
        Ptype="password"
        onChange={props.onChangeHandaler}
        InitialAmountId="initialAmountId"
        RegistrationclassName="btn btn-success"
        BackclassName="btn btn-danger"
        Registrationvalue="Save"
        BackButtonvalue="Back"
        heading="Please register to continue"
        SaveonClick={props.onSaveHandler}
        BackonClick={props.setBackPage}
      />
    )}
  </div>);
};

export default FirstPage;
