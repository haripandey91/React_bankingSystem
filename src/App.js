import React, { useState, useEffect } from "react";
import "./App.css";
import Register from "./pages/Register";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Registration from "./Components/Registration";
import LoggedIn from "./Components/UserLoggedIn";
import data from './Components/users.json'

function App() {
  const [sregister, setsRegister] = useState();
  const [users, setUsers] = useState(data);
  const [tempUser, setTempUser] = useState();
  const [tempLoginUser, setTempLoginUser] = useState();
  const [userVerified, setUserVerified] = useState(false);
  const [tempDeposit, setTempDeposit] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState();
  const [depositClicked, setDepositClicked] = useState("withdraw");
  const [updateBalance, setUpdateBalance] = useState();
  /* const [updateUser, setUpdateUser] = useState(); */

  const onSubmitHandler = () => {
  
    let currentUserBalance = loggedInUser.balance;
    console.log(currentUserBalance, tempDeposit.AmountValue);
    depositClicked === "deposit"
      ? (currentUserBalance = currentUserBalance + tempDeposit[0].balance)
      : (currentUserBalance = currentUserBalance - tempDeposit[0].balance);

      setLoggedInUser({
      id: loggedInUser.id,
      name: loggedInUser.name,
      balance: currentUserBalance,
      password: loggedInUser.password
    });
    

    let i = users.findIndex((item) => item.id === loggedInUser.id);
    console.log(i);
    let temp = [...users];
    temp[i] = loggedInUser;
    setUsers(temp);

    return currentUserBalance;
  };

  const depositClick = () => {
    setDepositClicked("deposit");
  };

  const withdrawClick = () => {
    setDepositClicked("withdraw");
  };

  const loginHandler = () => {
    const user = users.filter(
      (tempUser) =>
        tempUser.id === Number(tempLoginUser.uname) &&
        tempUser.password === tempLoginUser.Lname
    );
    user.length === 1
      ? setUserVerified(true)
      : console.log("something went wrong");
    setLoggedInUser({
      id: user[0].id,
      name: user[0].name,
      balance: user[0].balance,
      password: user[0].password,
    });
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
    //  console.log(tempLoginUser);
  };

  const depositInputHandler = (e) => {
    const AmountName = e.target.name;
    const AmountValue = e.target.value;
    console.log(AmountName, AmountValue);
    setTempDeposit([
      { ...tempDeposit, AmountName: AmountName, balance: Number(AmountValue) },
    ]);
    console.log(tempDeposit, "I am the tempDeposit");
  };

  useEffect(() => {
    setsRegister("Login");
  }, []);

  const setBackPage = (e) => {
    setsRegister("Login");
  };

  return (
    <div>
      <Header heading="Buutti Bank" />
      {sregister === "Login" ? (
        <div>
          <Register
            Uname="uname"
            Pname="Lname"
            UserId="userId"
            PasswordId="passwordId"
            type="password"
            onChange={onLoginInputHandler}
            RclassName="btn btn-info"
            LclassName="btn btn-success"
            Rvalue="Register"
            Lvalue="Login"
            heading="Please login to continue"
            RonClick={onClickHandaler}
            LonClick={loginHandler}
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
          onChange={onChangeHandaler}
          InitialAmountId="initialAmountId"
          RegistrationclassName="btn btn-success"
          BackclassName="btn btn-danger"
          Registrationvalue="Save"
          BackButtonvalue="Back"
          heading="Please register to continue"
          SaveonClick={onSaveHandler}
          BackonClick={setBackPage}
        />
      )}

      {userVerified === true ? (
        <LoggedIn
          depositClassName="btn btn-info depositClassName"
          withdrawClassName="btn btn-danger withdrawClassName"
          submitClassName="btn btn-success submitClassName"
          // onClick={depositInputHandler}
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
          funds={loggedInUser.balance + " €"}
          messageAfterLogin={
            depositClicked === "withdraw"
              ? "How much you would like to withdraw?"
              : "How much you would like to deposit?"
          }
        />
      ) : (
        console.log()
      )}
      <Footer />
    </div>
  );
}

export default App;
