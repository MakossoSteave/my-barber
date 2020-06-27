import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBContainer
} from "mdbreact";
import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Tab from "../page/tabs";

export default class BarberSpace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      ville: "",
      SalonName: "",
      Address: "",
      NbTel: "",
      NbEmploye: "",
      photo: "",
      description: ""
    };
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log("un");
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:3000/api/coiffeur/register", {
        name: this.state.name,
        password: this.state.password,
        ville: this.state.ville,
        SalonName: this.state.SalonName,
        Address: this.state.Address,
        NbTel: this.state.NbTel,
        NbEmploye: this.state.NbEmploye,
        photo: this.state.photo,
        description: this.state.description
      })
      .then(response => {
        console.log(response);
        alert("felicitation vous êtes propriotaire d'un salon");
        this.props.history.push("/acceuil");
      })
      .catch(error => {
        console.log(error.response);
        alert("remplissez bien le formulaire");
      });
  };
  render() {
    const {
      name,
      password,
      ville,
      SalonName,
      Address,
      NbTel,
      NbEmploye,
      photo,
      description
    } = this.state;
    return (
      <section className="my-5">
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
            <h2 className="h1-responsive font-weight-bold text-center my-5">
              Create your BarberShop
            </h2>
            <p className="text-center w-responsive mx-auto pb-5">
              welcome to the hair salon creation space, here you can create your
              salon
            </p>
            <MDBRow>
              <MDBCol lg="5" className="lg-0 mb-4">
                <MDBCard>
                  <form onSubmit={this.submitHandler}>
                    <MDBCardBody>
                      <div className="form-header blue accent-1">
                        <h3 className="mt-2">
                          <MDBIcon icon="envelope" /> creation
                        </h3>
                      </div>
                      <p className="dark-grey-text">Your turn to create</p>
                      <div className="md-form">
                        <MDBInput
                          icon="user"
                          label="Your name"
                          iconClass="grey-text"
                          type="text"
                          name="name"
                          value={name}
                          onChange={this.changeHandler}
                        />
                      </div>
                      <div className="md-form">
                        <MDBInput
                          icon="envelope"
                          label="City"
                          iconClass="grey-text"
                          name="ville"
                          value={ville}
                          onChange={this.changeHandler}
                          type="text"
                          id="form-email"
                        />
                      </div>
                      <div className="md-form">
                        <MDBInput
                          icon="tag"
                          label="Salon Name"
                          iconClass="grey-text"
                          type="text"
                          name="SalonName"
                          value={SalonName}
                          onChange={this.changeHandler}
                        />
                      </div>
                      <div className="md-form">
                        <MDBInput
                          icon="pencil-alt"
                          label="Address"
                          iconClass="grey-text"
                          type="text"
                          // type="textarea"
                          id="form-text"
                          name="Address"
                          value={Address}
                          onChange={this.changeHandler}
                        />
                      </div>
                      <div className="md-form">
                        <MDBInput
                          icon="pencil-alt"
                          label="Phone Number"
                          iconClass="grey-text"
                          type="text"
                          // type="textarea"
                          id="form-text"
                          name="NbTel"
                          value={NbTel}
                          onChange={this.changeHandler}
                        />
                      </div>
                      <div className="md-form">
                        <MDBInput
                          icon="pencil-alt"
                          label="Number Of employee"
                          iconClass="grey-text"
                          type="text"
                          // type="textarea"
                          id="form-text"
                          name="NbEmploye"
                          value={NbEmploye}
                          onChange={this.changeHandler}
                        />
                      </div>
                      <div className="md-form">
                        <MDBInput
                          icon="pencil-alt"
                          label="Picture"
                          iconClass="grey-text"
                          type="text"
                          // type="textarea"
                          id="form-text"
                          name="photo"
                          value={photo}
                          onChange={this.changeHandler}
                        />
                      </div>
                      <div className="md-form">
                        <MDBInput
                          icon="pencil-alt"
                          label="Description"
                          iconClass="grey-text"
                          type="textarea"
                          id="form-text"
                          name="description"
                          value={description}
                          onChange={this.changeHandler}
                        />
                      </div>
                      <div className="md-form">
                        <MDBInput
                          icon="pencil-alt"
                          label="Password"
                          iconClass="grey-text"
                          type="password"
                          id="form-text"
                          name="password"
                          value={password}
                          onChange={this.changeHandler}
                        />
                      </div>
                      <div className="text-center">
                        <button type="submit" className="btn">
                          Create
                        </button>
                      </div>
                    </MDBCardBody>
                  </form>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="7">
                <div
                  id="map-container"
                  className="rounded z-depth-1-half map-container"
                  style={{ height: "600px" }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
                    title="This is a unique title"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 2 }}
                  />
                </div>
                <br />
                <MDBRow className="text-center">
                  <MDBCol md="4">
                    <MDBBtn tag="a" floating color="blue" className="accent-1">
                      <MDBIcon icon="map-marker-alt" />
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBContainer>
      </section>
    );
  }
}
