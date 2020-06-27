import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Tab from "../page/tabs";


export default class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      number:"",
      salon: "",
      date: "",
      message:""
    };
  }
  handleeClick() {
    alert("deconnection");
    console.log(localStorage);
    localStorage.removeItem("token");
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleClick() {
    alert("votre reservation a bien été pris en compte");
  }
  componentDidMount = () => {
    axios
      .get("http://localhost:3000/api/all/allsalon", {
        headers: {
          "auth-token": localStorage.getItem("token")
        }
      })
      .then(response => {
       
        console.log("bien", response);
      })
      .catch(error => {
        console.log("mal", error);
        alert("You are no autorise");
        this.props.history.push("/");
      });

 
  };
  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:3000/api/reservation/reservation",
      
        {          
       
        email:this.state.email,
        date:this.state.date,
        number:this.state.number,
        salon:this.state.salon,
        message:this.state.message
        },
        {
          headers: {
            'Content-Type': 'application/json',           
          }
        
        
       
      })
      
      
      .then(response => {
        
        console.log(response.data);
        alert("votre reservation a bien été pris en compte");
        this.props.history.push("/acceuil");
      })
      .catch(error => {
        console.log(error);
        alert("remplissez bien le formulaire");
      });
  };
  render() {
    const { email, salon, date ,number, message } = this.state;
    return (
      <div>
         <Link to="/">
          <button
            onClick={this.handleeClick}
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
        <img
          src="https://c7.uihere.com/files/35/875/818/computer-icons-concept-incandescent-light-bulb-idea.jpg"
          style={{ width: "46%", height: "88vh" }}
          align="right"
        />
        
         <Tab />
         <br></br>
         <div class="card">
         <h5 class="card-header info-color white-text text-center py-4">
        <strong>Make your Reservation</strong>
    </h5>
    <div class="card-body px-lg-5 pt-0">
    <form class="text-center" style={{"color": "bleu"}} onSubmit={this.submitHandler.bind(this)}>
        <div class="md-form mt-3">
                <input type="text"  class="form-control" name="email" placeholder="email"  value={email}
                onChange={this.changeHandler}>
                </input>       
            </div>
            <br></br>
            <div class="md-form">
                <input type="text"  class="form-control" placeholder="Number of adults" name="number" value={number}
                onChange={this.changeHandler}>
               </input>
            </div>
            <br></br>
            <div class="md-form">
                <input type="text" id="materialContactFormText" class="form-control" placeholder="Type Of Sallon" name="salon" value={salon} onChange={this.changeHandler}>
               </input>
               <p><small>you can have this type of Sallon : <br></br> Coiffure , Lissage , Coloration</small></p>
            </div>
            <div class="md-form">
            <input type="date" id="materialContactFormText" class="form-control" name="date" value={date} onChange={this.changeHandler}>
              </input>
            </div>
            <br></br>
            <div class="md-form">
                <textarea id="materialContactFormMessage" class="form-control md-textarea" rows="3" placeholder="Write your preference" name="message" value={message} onChange={this.changeHandler}></textarea>
                <label for="materialContactFormMessage">Message</label>
            </div>
           < button class="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit">Send</button>
      </form>
    </div>
           </div>
      </div>
    );
  }
}
