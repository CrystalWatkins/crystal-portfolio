import React, { Component } from "react";
import axios from "axios";
// import { Alert } from "react-bootstrap";
import { toast } from 'react-toastify';

class Contact extends Component {
  state = { 
    name: "",
    email: "",
    message: "",
}
onNameChange(event) {
  this.setState({name: event.target.value})
}

onEmailChange(event) {
  this.setState({email: event.target.value})
}

onMessageChange(event) {
  this.setState({message: event.target.value})
}

handleSubmit = (e) => {
  e.preventDefault();
//  alert("Your email was sent Successfully!");
  const subject = this.state.name;
  const from = this.state.email;
  const text = this.state.message;
  axios.post("http://localhost:3000/api/email", {subject: subject, from: from, text: text}).then((res) =>{
    //toast goes here
    toast.success("Email Sent Successfully");
  })
  this.setState({name: "", email: "", message: ""});
}

  
render() {
  return (
    <div>
      <div className="row">
        <div className=" col-sm-12 jumbotron">
          <h1 className="contact">Contact</h1>
          <hr className="my-4" />
        <div className="row">
          <div className="col-sm-6">
            <form className="test-mailing" id="contact-form" onSubmit={(e) => this.handleSubmit(e)} method="POST">
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Name</label>
            </div>
    
          <input
            type="name"
            className="form-control"
            value={this.state.name}
            onChange={this.onNameChange.bind(this)}
            id="exampleFormControlInput1"
            placeholder="John Smith"
          ></input>
          <br />
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Email</label>
            <input
              type="email"
              className="form-control"
              value={this.state.email}
             onChange={this.onEmailChange.bind(this)}
              id="exampleFormControlInput1"
              placeholder="example@gmail.com"
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Message</label>
            <textarea
              className="form-control"
              value={this.state.message}
            onChange={this.onMessageChange.bind(this)}
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Message"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-secondary" >
            Submit
          </button>
      </form>
</div>
</div>

        </div>
      </div>
    </div>
  );
}

}
export default Contact;
