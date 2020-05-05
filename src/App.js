import React, {useState, useEffect}from 'react';
import './App.css';
import Register from './pages/Register'
import Header from "./Components/Header"


function App() {
  
const [sregister, setsRegister] = useState("Login");

const onClickHandaler=(e)=>{  
setsRegister(e.target.value)
}

  return (
    <div>
      <Header heading ="bank"/>
      {sregister ==="Login" ?
      <Register
       info="Hari" 
      Uname="uname"
      Pname="Lname"
      RclassName="btn btn-info" 
      LclassName="btn btn-success"
      Rvalue="register"
      Lvalue="Login"
      heading="Information"
      info="this is for login"
      RonClick = {onClickHandaler}


      />:
      <Register
      info="Hari" 
     Uname="uname"
     Pname="Lname"
     RclassName="btn btn-info" 
     LclassName="btn btn-success"
     Rvalue="Save"
     heading="Information"
     info="this is for login"
     RonClick = {onClickHandaler}
     />}
    </div>
  )}
  
export default App;
