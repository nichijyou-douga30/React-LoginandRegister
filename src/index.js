import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Button from "@material-ui/core/Button";

class App1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false,
      Component: null
    };
  }

  showLoginBox() {
    this.setState({isLoginOpen: true, isRegisterOpen: false});
  }

  showRegisterBox() {
    this.setState({isRegisterOpen: true, isLoginOpen: false});
  }

  render() {
    const {Component} = this.state;

    return (


     <div className="box-controller">
       <Button color="primary" onClick={this
         .showLoginBox
         .bind(this)}>Login</Button>
       <Button color="secondary" onClick={this
         .showRegisterBox
         .bind(this)}>Register</Button>
       <div
         className={"controller " + (this.state.isLoginOpen
         ? "login"
         : "")}
         onClick={this
         .showLoginBox
         .bind(this)}>
         Login
       </div>
       <div
         className={"controller " + (this.state.isRegisterOpen
         ? "register"
         : "")}
         onClick={this
         .showRegisterBox
         .bind(this)}>
         Register
       </div>
       <hr class="hr1" />
     <div className="box-container">
      {this.state.isLoginOpen && <LoginBox/>}
      {this.state.isRegisterOpen && <RegisterBox/>}
     </div>
     </div>

    );
  }
}

//Login Box
class LoginBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  submitLogin(e) {}

  render() {
    return (
      <div className="inner-container-l">
        <div className="header">
          Login
        </div>
        <div className="box">

          <div className="input-group">
            <label htmlFor="username">Username</label>
	    <br/>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"/>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
	    <br/>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"/>
          </div>

          <button
            type="button"
            className="login-btn"
            onClick={this
            .submitLogin
            .bind(this)}>Login</button>
        </div>
      </div>
    );
  }

}

//Register Box 
class RegisterBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  submitRegister(e) {}

  render() {
    return (
      <div className="inner-container-r">
        <div className="header">
          Register
        </div>
        <div className="box">

          <div className="input-group">
            <label htmlFor="username">Username</label>
	    <br/>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"/>
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
	    <br/>
            <input type="text" name="email" className="login-input" placeholder="Email"/>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
	    <br/>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"/>
          </div>
          <button
            type="button"
            className="login-btn"
            onClick={this
            .submitRegister
            .bind(this)}>Register</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App1 />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
