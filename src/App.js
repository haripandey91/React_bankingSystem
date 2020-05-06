import React, { useState, useEffect } from "react";
import "./App.css";
import Register from "./pages/Register";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Registration from "./Components/Registration";

function App() {
  const [sregister, setsRegister] = useState();
  const [users, setUsers] = useState([]);
  const [tempUser, setTempUser] = useState();
  const [tempLoginUser, setTempLoginUser] = useState();

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
            balance: tempUser.InitialAmount,
            id: create_id(),
          },
        ])
      : console.log("Please fill the form first");

    console.log(users);
  };

  const onLoginInputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(users, "before");
    setTempLoginUser({ ...tempLoginUser, [name]: value });
    console.log(tempLoginUser);
  };

  const loginHandler = () => {
    console.log(users[0].id, tempLoginUser);
    const user = users.filter(
      (tempUser) =>
        tempUser.id === Number(tempLoginUser.uname) &&
        tempUser.password === tempLoginUser.Lname
    );
    console.log(user);
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
        <Register
          Uname="uname"
          Pname="Lname"
          UserId="userId"
          PasswordId="passwordId"
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
      ) : (
        <Registration
          Uname="Uname"
          Pname="Pname"
          InitialAmount="InitialAmount"
          RUserId="rUserId"
          RPasswordId="rPasswordId"
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
      <Footer />
    </div>
  );
}

export default App;
