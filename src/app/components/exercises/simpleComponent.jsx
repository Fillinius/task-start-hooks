import React from "react";
import PropTypes from "prop-types"

const SimpleComponent = ({ isAuth, onLogin, onLogOut }) => {
  console.log(isAuth);
  return (
    <>
      {isAuth
        ? <button
          className="btn btn-secondary"
          onClick={onLogOut}
        >Выйти</button>
        : <button
          className="btn btn-primary"
          onClick={onLogin}
        >Войти</button>}
    </>
  );
}
SimpleComponent.propTypes = {
  isAuth: PropTypes.string,
  onLogin: PropTypes.func,
  onLogOut: PropTypes.func
}
export default SimpleComponent;
