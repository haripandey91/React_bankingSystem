import React, {useState, useEffect}from 'react';
import './App.css';
import Register from './pages/Register'
import Header from "./Components/Header"
import Registration from './Components/Registration'

let all_users = [];
function App() {

  const create_id = () => {
    const id = document.getElementById('rUserId');
    console.log(id);
};


const [sregister, setsRegister] = useState(); 



const onClickHandaler=(e)=>{
  console.log(e.value,'value');  
  setsRegister(e.target.value)
}

 useEffect(() => {
  setsRegister("Login");
},[]); 
  


const setBackPage = (e) =>{
  setsRegister("Login");
}

  return (
    <div>
      <Header heading ="Buutti Bank"/>
      {sregister ==="Login"? 
      <Register 
      Uname="uname"
      Pname="Lname"
      UserId = "userId"
      PasswordId = "passwordId"
      RclassName="btn btn-info" 
      LclassName="btn btn-success"
      Rvalue="Register"
      Lvalue="Login"
      heading="Please login to continue"
      info=""
      RonClick = {onClickHandaler}


      />:
      <Registration
     Uname="uname"
     Pname="Lname"
     InitialAmount="InitialAmount"
     RUserId= "rUserId"
     RPasswordId = "rPasswordId"
     InitialAmountId="initialAmountId"
     RegistrationclassName="btn btn-success" 
     BackclassName="btn btn-danger"
     Registrationvalue="Save"
     BackButtonvalue = "Back"
     heading="Please register to continue"
     info=""
     SaveonClick = {create_id}
     BackonClick = {setBackPage}
     />}
    </div>
  )}
  
export default App;
