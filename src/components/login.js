import React, { Component } from "react";
// import $ from 'jquery';
import { Link } from "react-router-dom";
import Header from "./../components/header.js";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
      itemModified: this.props.item
    };
  }

  render() {
    return (
      <>
        <Header title="Iniciar Sesión" />
        <div ref="form" className="form">
          <div className="container">
            <label htmlFor="uname">Usuario</label>
            <input type="text" placeholder="Usuario" name="uname" required />

            <label htmlFor="psw">Contraseña</label>
            <input
              type="password"
              placeholder="Contraseña"
              name="psw"
              required
            />
          </div>
          <Link to="/list">
            <button type="submit">Login</button>
          </Link>
        </div>
      </>
    );
  }
}
export default Login;
