import React from "react";
import "./Login.css";

const Login = () => {
  const formSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="background-login">
      <form action="">
        <div>
          <label htmlFor="username"></label>
          <input type="text" name="usarname" placeholder="Nombre de usuario" />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input type="password" placeholder="Contaseña" />
        </div>
        <input type="submit" value="ENVIAR" onClick={(e) => formSubmit(e)} />
      </form>
    </div>
  );
};

export default Login;
