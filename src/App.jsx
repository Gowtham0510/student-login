import React, { Component } from "react";
import "./index.css";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "popper.js/dist/umd/popper";
import { NavBar } from "./NavBar";
import { StudentsList } from "./StudentsList";
import { CourseList } from "./CoursesList";
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import { PageNotFound } from "./PageNotFound";
import{ Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import {NewStudent} from "./InsertStudent";



export class App extends Component {


  

  render() {
    return (
      <BrowserRouter>
      <NavBar />
      <Routes > 
      <Route path="/" exact element={<Login />} />
      <Route path="/dashboard" exact element={<Dashboard/> } />
      <Route path="/students" exact element={<StudentsList/>} />
      <Route path="/courses" exact element={<CourseList/> } />
      <Route path="/newstudent" exact element={<NewStudent />} />
      <Route path="*" element={<PageNotFound />} />

      </Routes>
      </BrowserRouter>

        
    ); 
  }
}
