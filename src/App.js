import React, { useState, useEffect } from "react";
import "./App.css";
import Register from "./pages/Register";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Registration from "./Components/Registration";
import LoggedIn from "./Components/UserLoggedIn";

function App() {
  const [sregister, setsRegister] = useState();
  const [users, setUsers] = useState([]);
  const [tempUser, setTempUser] = useState();
  const [tempLoginUser, setTempLoginUser] = useState();
  const [userVerified, setUserVerified] = useState(false);
  const [tempDeposit, setTempDeposit] = useState();
  const [loggedInUser, setLoggedInUser] = useState();

  /* let loggedInUserId;
  let loggedInUserName; */

  const loginHandler = () => {
    const user = users.filter(
      (tempUser) =>
        tempUser.id === Number(tempLoginUser.uname) &&
        tempUser.password === tempLoginUser.Lname
    );
      user.length === 1
        ? setUserVerified(true)
        : console.log("something went wrong");
     setLoggedInUser({id:user[0].id, name:user[0].name, balance:user[0].balance})
    // console.log(loggedInUserId, loggedInUserName);
    //console.log(setUserVerified.length);
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
    console.log(users, "before");
    setTempUser({ ...tempUser, [name]: value });
    console.log(tempUser);
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

  const depositInputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTempDeposit({ ...tempDeposit, [name]: value });
    console.log(tempDeposit);
  };

  const onSubmitHandler = () => {
    console.log(tempLoginUser);
    const currentUser = users.filter((user) => user.id === tempUser.id);
    console.log(currentUser);
    console.log(tempDeposit.amount);
  };

  const onLoginInputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(users, "before");
    setTempLoginUser({ ...tempLoginUser, [name]: value });
    //  console.log(tempLoginUser);
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
            Usertype="password"
            onChange={onLoginInputHandler}
            RclassName="btn btn-info"
            LclassName="btn btn-success"
            Rvalue="Register"
            Lvalue="Login"
            heading="Please login to continue"
            info="This is Login Page"
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
          info="This is Registration Page"
          SaveonClick={onSaveHandler}
          BackonClick={setBackPage}
        />
      )}

      {userVerified === true ? (
        <LoggedIn
          depositClassName="btn btn-info"
          withdrawClassName="btn btn-danger"
          submitClassName="btn btn-success"
          // onClick={depositInputHandler}
          onChange={depositInputHandler}
          onClick={onSubmitHandler}
          loggedInUserName= {loggedInUser.name}
          submitValue="Submit"
          depositValue="Deposit"
          withdrawValue="Withdraw"
          AmountName="amount"
          depositOnClick={depositInputHandler}
          //withdrawOnClick = {}
          funds={loggedInUser.balance +'€'}
          messageAfterLogin="How much you would like to withdraw??" //put a condition for two different messages. one with withdraw and another with deposit
        />
      ) : (
        console.log()
      )}

      <Footer />
    </div>
  );
}

export default App;
