import React, { useState, useEffect } from "react";
import "./App.css";
import FirstPage from "./pages/FirstPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LoggedIn from "./Components/UserLoggedIn";
import data from "./Components/users.json";
import "./styles/app.scss";
import Transfer from "./Components/Transfer";
import Request from './Components/Request'

function App() {
  /*   let a = {idName: 91, transferAmountName: 100}; */
  const [sregister, setsRegister] = useState();
  const [users, setUsers] = useState(data);
  const [tempUser, setTempUser] = useState();
  const [tempLoginUser, setTempLoginUser] = useState("");
  const [userVerified, setUserVerified] = useState(false);
  const [tempDeposit, setTempDeposit] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState([]);
  const [depositClicked, setDepositClicked] = useState("deposit");
  const [validityMessage, setValidityMessage] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState();
  const [registerError, setRegisterError] = useState();
  const [tempTransfer, setTempTransfer] = useState();
  const [transferError, setTransferError] = useState();
  const [requestValue, setRequestValue] = useState();


  const requestClicked = (e) => {
    let currentUser = loggedInUser;
  }

  const requestInputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRequestValue({ ...requestValue, [name]: value });
    console.log(name, value, requestValue)
  };

  const onSubmitHandler = (e) => {
    let currentUserBalance = loggedInUser;
    let currentUserBalanceAmount = loggedInUser.balance;
    console.log(currentUserBalanceAmount);
    let newBalance;
    if (depositClicked === "deposit") {
      newBalance = currentUserBalance.balance + tempDeposit[0].balance;
    } else if (depositClicked === "withdraw") {
      if (currentUserBalance.balance >= tempDeposit[0].balance) {
        newBalance = currentUserBalance.balance - tempDeposit[0].balance;
      } else if (currentUserBalance.balance < tempDeposit[0].balance) {
        console.log(currentUserBalanceAmount);
        newBalance = currentUserBalanceAmount;
        setTransferError(
          "!!! Withdrawl amount excessed the available fund. !!! "
        );
      }
    } else {
      setDepositClicked("transfer");
      console.log("Unusual condition");
    }

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
    setUsers(temp);
  };

  const transferSubmitClicked = () => {
    let receiverId = tempTransfer.idName;
    // Deducting from the current user part starts here
    let currentUserBalance = loggedInUser;
    if (
      tempTransfer.transferAmountName < currentUserBalance.balance ||
      tempTransfer.transferAmountName === currentUserBalance.balance
    ) {
      let newBalance =
        currentUserBalance.balance - tempTransfer.transferAmountName;
      setLoggedInUser({
        id: loggedInUser.id,
        name: loggedInUser.name,
        balance: newBalance,
        password: loggedInUser.password,
      });

      let i = users.findIndex((item) => item.id === loggedInUser.id);
      let temp = [...users];
      temp[i].balance = newBalance;
      setUsers(temp);
      // Deducting from the current user ends here and users array is updated with new balance.

      //Now from here adding the transfered fund to the user starts.
      let index = users.findIndex((item) => item.id === receiverId);
      console.log(index.length, "the index: ", index);
      if (index === 0 || index) {
        let userCopy = [...users];
        let nameOfAccountHolder = userCopy[index].name;
        let balanceAfterReceivedFund =
          userCopy[index].balance + tempTransfer.transferAmountName;
        userCopy[index].balance = balanceAfterReceivedFund;
        setUsers(userCopy);
        setTransferError(
          "You have transferred " +
            tempTransfer.transferAmountName +
            "€ to " +
            nameOfAccountHolder
        );
      } else {
        setTransferError(
          "!!! User not found !! Please give the valid User ID. !!! "
        );
      }
    } else {
      setTransferError("!!! Transfer amount excessed the available fund. !!!");
    }
  };

  const transferInputHandler = (e) => {
    setTransferError("");
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setTempTransfer({ ...tempTransfer, [name]: Number(value) });
  };

  const allInOne = (e) => {
    const value = e.target.value;
    setDepositClicked(value);
    setTransferError("");
    console.log(value)
  };

  const loginHandler = () => {
    const user = users.filter(
      (tempUser) =>
        tempUser.id === Number(tempLoginUser.uname) &&
        tempUser.password === tempLoginUser.Lname
    );

    if (user.length === 1) {
      setUserVerified(true);
      setLoggedInUser({
        id: user[0].id,
        name: user[0].name,
        balance: user[0].balance,
        password: user[0].password,
      });
    } else {
      setValidityMessage("!!  Please enter the valid information !!");
    }
    setRegistrationSuccess("");
    console.log(loggedInUser);
  };

  const onClickHandaler = (e) => {
    setsRegister(e.target.value);
    setRegistrationSuccess("");
    setTransferError("");
    setValidityMessage("");
  };

  const create_id = () => {
    let id;
    do {
      id = Math.floor(Math.random() * 100000000);
    } while (users.find((user) => user.id === id));
    return id;
  };

  const onChangeHandaler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTempUser({ ...tempUser, [name]: value });
  };

  const onSaveHandler = () => {
    if (tempUser.Uname && tempUser.Pname && tempUser.InitialAmount) {
      setUsers([
        ...users,
        {
          name: tempUser.Uname,
          password: tempUser.Pname,
          balance: Number(tempUser.InitialAmount),
          id: create_id(),
        },
      ]);
      setLoginPage();
      setTempUser({});
      setRegistrationSuccess(
        "Registration was successful."
      );
      console.log(users);
    } else {
      setRegisterError("!! Please fill the information first !!");
    }
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
    setTempDeposit([
      { ...tempDeposit, AmountName: AmountName, balance: Number(AmountValue) },
    ]);
  };

  useEffect(() => {
    setsRegister("Login");
  }, []);

  useEffect(() => {
    setUsers(data);
  }, []);

  const setBackPage = (e) => {
    setValidityMessage("");
    setRegisterError("");
    setsRegister("Login");
  };

  const setLoginPage = (e) => {
    setsRegister("Login");
  };

  const logOutClick = (e) => {
    setUserVerified(false);
    setLoggedInUser([]);
    setTempLoginUser([]);
    setValidityMessage("");
    setTempTransfer();
    setRegistrationSuccess();
    setRegistrationSuccess("You have been logged out!!");
  };

  return (
    <div className="MainAppDiv">
      <Header heading="Secret State Bank" />
      {!userVerified ? (
        <FirstPage
          sregister={sregister}
          onLoginInputHandler={onLoginInputHandler}
          onClickHandaler={onClickHandaler}
          loginHandler={loginHandler}
          onChangeHandaler={onChangeHandaler}
          onSaveHandler={onSaveHandler}
          setBackPage={setBackPage}
          validityMessage={validityMessage}
          registrationSuccess={registrationSuccess}
          registerError={registerError}
          users={users}
        />
      ) : (
        <div>
          {depositClicked === "deposit" || depositClicked === "withdraw" ? (
            <LoggedIn
              depositClassName={
                depositClicked === "deposit"
                  ? "btn btn-danger depositClassName"
                  : "btn depositClassName depositClassNameForButton"
              }
              withdrawClassName={
                depositClicked === "withdraw"
                  ? "btn btn-danger"
                  : " btn withdrawClassName"
              }
              submitClassName="btn btn-success submitClassName"
              onChange={depositInputHandler}
              onClick={onSubmitHandler}
              loggedInUserName={loggedInUser.name}
              submitValue="Submit"
              depositValue="Deposit"
              withdrawValue="Withdraw"
              transferButtonValue="transfer"
              requestButtonValue="request"
              inputClassName="inputClassName"
              amountPlaceholder={
                depositClicked === "deposit"
                  ? "How much you would like to DEPOSIT?"
                  : "How much you would like to WITHDRAW?"
              }
              AmountName={tempDeposit.name}
              AmountValue={tempDeposit.AmountValue}
              withdrawButtonValue="withdraw"
              depositButtonValue="deposit"
              depositOnClick={allInOne}
              withdrawOnClick={allInOne}
              logOutClick={logOutClick}
              logOutClassName="btn btn-dark logOutClassName"
              logoutValue="Log Out"
              depositError={transferError}
              transferClassName={
                depositClicked === "transfer"
                  ? "btn btn-danger transferClassName"
                  : "btn transferClassName transferClassNameForButton"
              }
              transferValue="Transfer Funds"
              transferOnClick={allInOne}
              funds={loggedInUser.balance + " € "}
              messageAfterLogin={
                depositClicked === "withdraw"
                  ? "How much you would like to WITHDRAW?"
                  : "How much you would like to DEPOSIT?"
              }
              RequestOnClick={allInOne}
              requestClassName="btn requestClassName"
              requestButtonValue="request"
              requestValue="Request Fund"


            />
          ) : (
            <div>
              
            {depositClicked === "transfer" ? (
              <Transfer
              loggedInUserName={loggedInUser.name}
              logOutClick={logOutClick}
              logOutClassName="btn btn-dark logOutClassName"
              funds={loggedInUser.balance + " € "}
              transferIdClassName="transferIdClassName"
              onChange={transferInputHandler}
              onBackButtonClick={allInOne}
              backButtonTransferValue="deposit"
              BackclassName="btn btn-danger"
              idName="idName"
              transferAmountName="transferAmountName"
              transferAmountClassName="transferAmountClassName"
              //transferOnClick={allInOne}
              transferSubmitClick={transferSubmitClicked}
              submitClassName="btn btn-success submitClass"
              transferError={transferError}
              transferClassName={
                depositClicked === "transfer"
                  ? "btn btn-danger transferClassName"
                  : "btn transferClassName transferClassNameForButton"
              }
              depositClassName={
                depositClicked === "deposit"
                  ? "btn btn-danger depositClassName"
                  : "btn depositClassName depositClassNameForButton"
              }
              withdrawClassName={
                depositClicked === "withdraw"
                  ? "btn btn-danger"
                  : " btn withdrawClassName"
              }
            />
            ):( 
          <Request
          loggedInUserName={loggedInUser.name}
          logOutClick={logOutClick}
          logOutClassName="btn btn-dark logOutClassName"
          funds={loggedInUser.balance + " € "}
          requestError={transferError}
          requestIdName="rIdName"
          requestAmountName="requestAmountName"
          onChange={requestInputHandler}
          backButtonTransferValue="deposit"
          onBackButtonClick={allInOne}
          requestButtonClick={requestClicked}
          requestButtonClassName="btn btn-success requestButtonClassName"

          />)}
          </div>
          )}
        </div>
      )}
      <div className="userList">
        Saved Users List:
        {users &&
          users.map((user) => (
            <span>
              {" "}
              <p>
                {" "}
                User Id => {user.id}, password => {user.password}, Username =>{" "}
                {user.name}, Initial fund => {user.balance}
              </p>
            </span>
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
