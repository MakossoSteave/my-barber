import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirectTrue: false,
      alert: false
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:3000/api/user/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        const token = response.data;
        console.log("LE TOKEN STP ", token);
        localStorage.setItem("token", token);
        //this.props.history.push("/acceuil");
        this.setState({
          redirectTrue: true
        });
      })
      .catch(error => {
        console.log(error);

        this.setState({
          alert: true
        });
        alert("email ou mots de passe incorrect");
      });
  };
  render() {
    const { email, password } = this.state;

    if (this.state.redirectTrue) {
      return <Redirect to="/acceuil" />;
    }
    if (this.state.alert) {
    }

    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81vTVlOLizL._AC_SL1500_.jpg"
              width="500px"
            />
          </div>

          <form className="form" onSubmit={this.submitHandler.bind(this)}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                valuer={password}
                onChange={this.changeHandler}
              />
            </div>

            <div className="footer">
              <button type="submit" className="btn">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
