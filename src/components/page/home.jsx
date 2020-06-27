import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,

  MDBView,
  MDBBtn
} from "mdbreact";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import axios from "axios";
import { Component } from "react";
import { Redirect } from "react-router-dom";
import Tab from "../page/tabs";

export default class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectTrue: false,
      count: 0,
      salon:[],
      edit:''
    };
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleClick() {
    alert("deconnection");
    console.log(localStorage);
    localStorage.removeItem("token");
  }
 
  counteur() {
    this.setState({
      count: this.state.count + 1
    });
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:3000/api/all/allsalon", {
        headers: {
          "auth-token": localStorage.getItem("token")
        }
      })
      .then(response => {
        this.setState({
          user: response.data
        });
        console.log("bien", response);
      })
      .catch(error => {
        console.log("mal", error);
        alert("You are no autorise");
        this.props.history.push("/");
      });

    this.setState({
      more: !this.state.more
    });
  };
  render() {
    return (
      <MDBCard className="my-5 px-5 pb-5">
        <Link to="/">
          <button
            onClick={this.handleClick}
            style={{
              "background-color": "red",
              width: "8em",
              height: "2em",
              marginLeft: "80%"
            }}
          >
          Logout
          </button>
        </Link>

        <MDBCardBody>
          <Tab />
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Recents Salon
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            Book for free Your favorite Hairdresser in Paris: 24 hours a day, 7
            days a week. Choose your service in one of our partner lounges and
            pay on the spot. Instant confirmation. Simple and Free. Reminder
            SMS. Reservation 24/7.
          </p>
          {this.state.user &&
            this.state.user.map((elem, index) => (
              <MDBRow key={index}>
                <MDBCol lg="5" xl="4">
                  <MDBView
                    hover
                    className="rounded z-depth-1-half mb-lg-0 mb-4"
                  >
                    <img
                      className="img-fluid"
                      src={elem.photo}
                      alt=""
                      width="300px"
                    />

                    <a href="#!">
                      <MDBMask overlay="white-slight" />
                    </a>
                  </MDBView>
                  <br></br>
                </MDBCol>
                <br></br>
                <br></br>
                <br></br>
                <MDBCol lg="7" xl="8">
                  <h3 className="font-weight-bold mb-3 p-0">
                    <strong>{elem.SalonName}</strong>
                  </h3>
                  <p className="dark-grey-text">
                    {" "}
                    <strong>Description</strong> : {elem.description}
                  </p>
                  <p>
                    <p>
                      <strong>Address</strong> : {elem.Address}
                    </p>
                    <p>
                      <strong>phone number </strong> : {elem.NbTel}
                    </p>
                    <p>
                      <strong>employee number</strong> : {elem.NbEmploye}
                    </p>
                  </p>
                  <Link to="/reservation">
                    <MDBBtn color="primary" size="md">
                      Reserve
                    </MDBBtn>
                  </Link>
                  <br></br>
                  <br></br>
                  <button color="red" size="md" onClick={() => this.counteur()}>
                    like : {this.state.count}
                  </button>
                  <br></br>
                  <br></br>
                  

                  <hr className="my-5"></hr>
                </MDBCol>
              </MDBRow>
            ))}
        </MDBCardBody>
      </MDBCard>
    );
  }
}
