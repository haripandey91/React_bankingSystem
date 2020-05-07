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
        onChange={props.onChange}
        RclassName={props.RclassName}
        LclassName={props.LclassName}
        InitialAmount={props.InitialAmount}
        RonClick={props.RonClick}
        LonClick={props.LonClick}
        Rvalue={props.Rvalue}
        Lvalue={props.Lvalue}
        heading={props.heading}
      />
    </div>
  );
};

export default Register;
