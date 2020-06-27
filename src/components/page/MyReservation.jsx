import React from "react";
import {
  MDBListGroup,
  MDBListGroupItem,
  MDBContainer,
  MDBCard
} from "mdbreact";
import { Component } from "react";
import { Link } from "react-router-dom";
import Tab from "../page/tabs";
import axios from "axios";

export default class ListGroupPage extends Component {
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
  deleteclick(){
    console.log("reservation delete")
  }
  componentDidMount = () => {
    axios
      .get("http://localhost:3000/api/reservation/Myreservation", {
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
        
      });

  };
  render() {
    return (
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

          <MDBListGroup className="my-4 mx-4" style={{ width: "22rem" }}>

            <MDBListGroupItem color="primary"> type de soin : {this.state.user.salon}</MDBListGroupItem>
            <MDBListGroupItem color="primary"> date de reservation :{this.state.user.date}</MDBListGroupItem>
            <MDBListGroupItem color="primary"> numbre de personne : {this.state.user.number}</MDBListGroupItem>
            <MDBListGroupItem color="danger"><button style={{color:"green"}}
            onClick={this.deleteclick}
            >Supprimé la reservation </button></MDBListGroupItem>
            

          </MDBListGroup>
        </MDBCard>
      </MDBContainer>
    );
  }
}
