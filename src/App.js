import React, { useState, useEffect } from "react";
import "./App.css";
import Register from "./pages/Register";
import FirstPage from "./pages/FirstPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Registration from "./Components/Registration";
import LoggedIn from "./Components/UserLoggedIn";
import data from "./Components/users.json";

function App() {
  const [sregister, setsRegister] = useState();
  const [users, setUsers] = useState(data);
  const [tempUser, setTempUser] = useState();
  const [tempLoginUser, setTempLoginUser] = useState();
  const [userVerified, setUserVerified] = useState(false);
  const [tempDeposit, setTempDeposit] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState([]);
  const [depositClicked, setDepositClicked] = useState("deposit");
  const [validityMessage, setValidityMessage]= useState("");
  const [transferClick, setTransferClick] = useState(); 

  const onSubmitHandler = (e) => {
    let currentUserBalance = loggedInUser;
    let newBalance;
    depositClicked === "deposit"
      ? (newBalance = currentUserBalance.balance + tempDeposit[0].balance)
      : (newBalance = currentUserBalance.balance - tempDeposit[0].balance);

    //dataChange in Loginuser state
    setLoggedInUser({
      id: loggedInUser.id,
      name: loggedInUser.name,
      balance: newBalance,
      password: loggedInUser.password,
    });

    let i = users.findIndex((item) => item.id === loggedInUser.id);
    let temp = [...users];
    temp[i].balance = newBalance;
    //dataChange in User state(main collection of data)
    setUsers(temp);
  };

  const depositClick = () => {
    setDepositClicked("deposit");
  };

  const withdrawClick = () => {
    setDepositClicked("withdraw");
  };

  const transferClicked = () => {
    setTransferClick("transfer");
  };

  const loginHandler = () => {
    if(tempLoginUser){console.log('hello')}
    const user = users.filter(
      (tempUser) =>
        tempUser.id === Number(tempLoginUser.uname) &&
        tempUser.password === tempLoginUser.Lname
    );

    if(user.length === 1){
      setUserVerified(true)
      setLoggedInUser({
      id: user[0].id,
      name: user[0].name,
      balance: user[0].balance,
      password: user[0].password,
    });
    }else{
      setValidityMessage("!!  Please enter the valid information !!")
      console.log(validityMessage)
    }
    
    console.log(loggedInUser);
  };

  const onClickHandaler = (e) => {
    setsRegister(e.target.value);
  };

  const create_id = () => {
    let id;
    do {
      id = Math.floor(Math.random() * 10000);
    } while (users.find((user) => user.id === id));
    return id;
  };

  const onChangeHandaler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTempUser({ ...tempUser, [name]: value });
  };

  const onSaveHandler = () => {
    tempUser
      ? setUsers([
          ...users,
          {
            name: tempUser.Uname,
            password: tempUser.Pname,
            balance: Number(tempUser.InitialAmount),
            id: create_id(),
          },
        ])
      : console.log("Please fill the form first");

    console.log(users);
  };

  const onLoginInputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(users);
    setTempLoginUser({ ...tempLoginUser, [name]: value });
  };

  const depositInputHandler = (e) => {
    const AmountName = e.target.name;
    const AmountValue = e.target.value;
    console.log(AmountName, AmountValue);
    setTempDeposit([
      { ...tempDeposit, AmountName: AmountName, balance: Number(AmountValue) },
    ]);
  };

  useEffect(() => {
    setsRegister("Login");
  }, []);

  const setBackPage = (e) => {
    setsRegister("Login");
  };

  const logOutClick = (e) =>{
    setUserVerified(false)
    console.log('You are  logged Out')
  }

  return (
    <div>
      <Header heading="Buutti Bank" />
      {!userVerified ? (
        <FirstPage
          sregister={sregister}
          onLoginInputHandler={onLoginInputHandler}
          onClickHandaler={onClickHandaler}
          loginHandler={loginHandler}
          onChangeHandaler={onChangeHandaler}
          onSaveHandler={onSaveHandler}
          setBackPage={setBackPage}
          validityMessage= {validityMessage}
        />
      ) : (
        <LoggedIn
          depositClassName={depositClicked === "deposit" ? "btn btn-danger depositClassName" : "btn depositClassName depositClassNameForButton"}
          withdrawClassName={depositClicked === "withdraw" ? "btn btn-danger" :" btn withdrawClassName"}
          submitClassName="btn btn-success submitClassName"
          onChange={depositInputHandler}
          onClick={onSubmitHandler}
          loggedInUserName={loggedInUser.name}
          submitValue="Submit"
          depositValue="Deposit"
          withdrawValue="Withdraw"
          AmountName={tempDeposit.name}
          AmountValue={tempDeposit.AmountValue}
          depositOnClick={depositClick}
          withdrawOnClick={withdrawClick}
          logOutClick={logOutClick}
          logOutClassName="btn btn-dark logOutClassName"
          logoutValue="Log Out"
          transferClassName={transferClick === "transfer" ? "btn btn-danger transferClassName" : "btn transferClassName transferClassNameForButton"}
          transferValue="Transfer Funds"
          transferOnClick={transferClicked}
          funds={loggedInUser.balance + " € " + " "}
          messageAfterLogin={
            depositClicked === "withdraw"
              ? "How much you would like to WITHDRAW?"
              : "How much you would like to DEPOSIT?"
          }
          
        />
      )}
      }
      <Footer />
    </div>
  );
}

export default App;
