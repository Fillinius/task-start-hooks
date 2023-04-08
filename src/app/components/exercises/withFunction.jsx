import React from "react";
import CardWrapper from "../common/Card";

const handleOnLogin = () => {
  console.log("OnLogin")
  localStorage.setItem("token", "auth")
}
const handleLogOut = () => {
  localStorage.removeItem("token")
  console.log("LogOut")
}
const withFunction = (SimpleComponent) => (props) => {
  const isAuth = localStorage.getItem("token")
  return (
    <>
      <CardWrapper>
        <SimpleComponent
          {...props}
          isAuth={isAuth}
          onLogin={handleOnLogin}
          onLogOut={handleLogOut} />
      </CardWrapper>
    </>
  );
}

export default withFunction;
