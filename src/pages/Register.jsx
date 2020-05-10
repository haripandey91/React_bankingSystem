import React from "react";
import Login from "../Components/Login";
const Register = (props) => {
  return (
    <div className="register">
      <div>
        <p>{props.info}</p>
      </div>
      <Login
        Uname={props.Uname}
        Uvalue={props.Uvalue}
        Pname={props.Pname}
        Pvalue={props.Pvalue}
        Usertype={props.Usertype}
        Passtype={props.Passtype}
        onChange={props.onChange}
        RclassName={props.RclassName}
        LclassName={props.LclassName}
        InitialAmount={props.InitialAmount}
        RonClick={props.RonClick}
        LonClick={props.LonClick}
        Rvalue={props.Rvalue}
        Lvalue={props.Lvalue}
        heading={props.heading}
        validityMessage = {props.validityMessage}
        registrationSuccess= {props.registrationSuccess}
/*         usersIds={props.usersIds}
        usersPasswords={props.usersPasswords} */
        users={props.users}
      />
    </div>
  );
};

export default Register;
