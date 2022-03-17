import React, { Component } from "react";
import { Courses } from "./Courses";

export class CourseList extends Component {
  state = {
    courses:[]
  }
  render() {
    return (
      <div className="container-fluid">
        <h4> Course List </h4>
        <div className="row">
          {this.state.courses.map((cour) => {
            return (
              <Courses key={cour.id} course={cour} onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}>
                <button className="btn btn-primary">Payment</button>
              </Courses>
            );
          })}
        </div>
      </div>
    );
  }

  componentDidMount = async()=> {
    //fetch data from data source
    var response = await fetch("http://localhost:5000/courses", { method: "GET" });
    var cours = await response.json();
    console.log(cours);

        this.setState({ courses : cours });
    };
    //console.log("componentDidMount - CourseLIst");


  handleIncrement = (course, maxValue) => {
    //get index of selected course
    let allCourses = [...this.state.courses];
    let index = allCourses.indexOf(course);
    if (allCourses[index].quantity < maxValue) {
      allCourses[index].quantity++;
      //update the state of current component (parent component)
      this.setState({ courses: allCourses });
    }
  };
  handleDecrement = (course, minValue) => {
    //get index of selected course
    let allCourses = [...this.state.courses];
    let index = allCourses.indexOf(course);
    if (allCourses[index].quantity > minValue) {
      allCourses[index].quantity--;
      //update the state of current component (parent component)
      this.setState({ courses: allCourses });
    }
  };
}
