import React from "react";
import Register from "./Register";
import Registration from "../Components/Registration";

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
          Usertype="password"
          Passtype="password"
          onChange={props.onLoginInputHandler}
          RclassName="btn btn-info"
          LclassName="btn btn-success"
          Rvalue="Register"
          Lvalue="Login"
          heading="Please enter the information to login"
          RonClick={props.onClickHandaler}
          LonClick={props.loginHandler}
          validityMessage= {props.validityMessage}
          registrationSuccess= {props.registrationSuccess}
/*           usersPasswords={props.usersIds}
          usersIds={props.usersIds} */
          users={props.users}
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
        RegistrationclassName="btn btn-success RegistrationclassName"
        BackclassName="btn btn-danger BackclassName"
        Registrationvalue="Save"
        BackButtonvalue="Back"
        heading="Please register to continue"
        SaveonClick={props.onSaveHandler}
        BackonClick={props.setBackPage}
        registerError= {props.registerError}
      />
    )}
  </div>);
};

export default FirstPage;
