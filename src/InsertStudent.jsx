import React, { Component } from "react";

export class NewStudent extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", city: "", phone: "", photo: "" };
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <form>
            <h4 class="p-2 border-bottom">New Student</h4>

            <div class="form-group form-row">
              <label className="col-lg-4">Student Name</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.name}
                  onChange={(event) => {
                    this.setState({ name: event.target.value });
                  }}
                ></input>
              </div>
            </div>
          
           <div class="form-group form-row">
              <label className="col-lg-4">City</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.city}
                  onChange={(event) => {
                    this.setState({ city: event.target.value });
                  }}
                ></input>
              </div>
            </div>
           
       <div class="form-group form-row">
              <label className="col-lg-4">Phone</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.phone}
                  onChange={(event) => {
                    this.setState({ phone: event.target.value });
                  }}
                ></input>
              </div>
            </div>
       
        <div class="form-group form-row">
              <label className="col-lg-4">Photo</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.photo}
                  onChange={(event) => {
                    this.setState({ photo: event.target.value });
                  }}
                ></input>
              </div>
            </div>
       
         <div class=" border-top p-2">
              <button className="btn btn-success" onClick={this.onSaveClick}>
                     Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  onSaveClick = async (event) => {
    event.preventDefault();

    var student = {
      name: this.state.name,
      address: { city: this.state.city },
      phone: this.state.phone,
      photo: this.state.photo,
    };

    
    var response = await fetch("http://localhost:5000/Students", {
      method: "POST",
      body: JSON.stringify(student),
      headers: {
        "Content-type": "application/json",
      },
    });

    var body = await response.json();
    console.log(body);

    //after receiving response body, redirect to /Students
    if (body) {
      this.props.history.replace("/StudentsList");
    }
  };
}