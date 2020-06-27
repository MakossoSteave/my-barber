import React from "react";
import axios from "axios";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: ""
    };
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:3000/api/user/register", {
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
      .then(response => {
        console.log(response);

        alert("felicitation vous êtes membres");
      })
      .catch(error => {
        console.log(error.response);

        alert(
          "le mots de passe ou l'email n'est pas dans les normes de la page , essai encore"
        );
      });
  };
  render() {
    const { email, password, name } = this.state;

    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81vTVlOLizL._AC_SL1500_.jpg"
              width="500px"
            />
          </div>
          <form className="form" onSubmit={this.submitHandler.bind(this)}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
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
                placeholder="Password"
                valuer={password}
                onChange={this.changeHandler}
              />
            </div>
            <div className="footer">
              <button type="submit" className="btn">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
