import React from "react";
import {
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBCol,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBContainer
} from "mdbreact";
import { Component } from "react";
import axios from "axios";
import Tab from "../page/tabs";
import { Link } from "react-router-dom";
import Snackbar from "@material-ui/icons";

export default class SocialPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }
  handleClick() {
    alert("deconnection");
    console.log(localStorage);
    localStorage.removeItem("token");
  }
  componentDidMount = () => {
    axios
      .get("http://localhost:3000/api/profil/profil", {
        headers: {
          "auth-token": localStorage.getItem("token")
        }
      })

      .then(response => {
        this.setState({
          user: response.data
        });
        console.log(response.data);
        console.log(this.state);
      })
      .catch(error => {
        console.log(error.res);
        this.props.history.push("/");
      });
  };
  render() {
    return (
      <MDBRow>
        <MDBContainer>
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
            <Tab />
            <MDBCol md="6" lg="4">
              <MDBCard personal className="my-5">
                <MDBCardImage
                  top
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPds087Sz0hw4O8vMDn7L5L-TWVoM3k0_EnQSlo3ACFmzUe4fe"
                  alt="MDBCard image cap"
                />
                <MDBCardBody>
                  <MDBCardTitle>
                    <a href="#!" className="title-one"></a>
                  </MDBCardTitle>
                  <p className="card-meta">
                    <strong> Name :</strong> {this.state.user.name}{" "}
                  </p>
                  <MDBCardText>
                    {" "}
                    <strong>Email :</strong> {this.state.user.email}
                  </MDBCardText>
                  <hr />
                  <p href="#!" className="card-meta">
                    <span>
                      <MDBIcon icon="user" />
                      <strong>date of création : </strong>
                      {this.state.user.date}
                    </span>
                  </p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBCard>
        </MDBContainer>
      </MDBRow>
    );
  }
}
