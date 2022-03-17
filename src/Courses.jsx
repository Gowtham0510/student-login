import React, { Component } from "react";


export class Courses extends Component {

    state = {
        course: this.props.course,
    };

    render() {
        
        //console.log(this.props);
        return (

            <div className="col-lg-6">
                <div className="card m-2">
                    <div className="card-body">
                        <div className="text-muted"># {this.state.course.id}</div>
                        <h5 className="pt-5 border-top">{this.state.course.courseName
                        }</h5>
                        <div>$ {this.state.course.price}</div>
                        <div>{this.state.course.duration}</div>
                    </div>


                    <div className="card-footer">
                        <div className="float-left">
                            <span className="badge highlight">{this.state.course.quantity}</span>
                            <div className="btn-group">
                                <button className="btn btn-outline-success" onClick={() => {
                                    this.props.onIncrement(this.state.course, 10);
                                }} > + </button>

                                <button
                                    className="btn btn-outline-success"
                                    onClick={() => {
                                        this.props.onDecrement(this.state.course, 0);
                                    }}
                                >
                                    -
                                </button>


                                <div className="card-footer text-right">{this.props.children}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
    componentDidUpdate(){
        console.log(this.revProps,this.precState,this.props,this.state);
        } 
    
}