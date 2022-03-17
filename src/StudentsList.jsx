import React, { Component } from "react";
import { Link } from "react-router-dom";


export class StudentsList extends Component {
  state = {
    pageTitle: "Students",
    studentsCount: 5,

    students: []
  };
  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}
          <span className="badge badge-secondary m-2" style={{ color: "red" }} >
            {this.state.studentsCount}
          </span>

          <Link to="/newstudent" className="btn btn-primary">
            New Student
          </Link>   


          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Student Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {this.getStudentRow()}
          </tbody>
        </table>
      </div>
    );
  }

  componentDidMount = async () => {
    document.title = "Students - UPSHOT";
    //fetch data from data source
    var response = await fetch("http://localhost:5000/students", { method: "GET" });
    if (response.ok) {
      let body = await response.json();
      this.setState({students: body});
    } else {
      console.log("error:" +response.status);
    }
  };


  //Executes when the user clicks on Refresh button
  onRefreshClick = () => {
    this.setState({ studentsCount: 7 });
    console.log("hiii")
  };
  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="bg-warning p-2 text-center">No Phone</div>;
    }
  };

  getStudentRow = () => {
    return this.state.students.map((stud, index) => {
      return (
        <tr key={stud.id}>
          <td>{stud.id}</td>
          <td><img src={stud.photo} alt="student" />
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePictureClick(stud, index)
                }} >
                Change Picture
              </button>
            </div>
          </td>
          <td style={this.studentNameStyle(stud.name)}>{stud.name}</td>
          <td>{this.getPhoneToRender(stud.phone)}</td>
          <td>{stud.address.city}</td>
        </tr>

      );
    });
  };
  studentNameStyle = (studName) => {
    if (studName.startsWith("S")) return { backgroundColor: "green" };
    else if (studName.startsWith("J")) return { backgroundColor: "red" };
    else return {};
  };

  onChangePictureClick = (stud, index) => {
    console.log(stud);
    console.log(index);
    //get existing students
    var studArr = this.state.students;
    studArr[index].photo = "https://picsum.photos/id/256/200/300";
    //update "students" array in the state
    this.setState({ students: studArr });
  };

}



