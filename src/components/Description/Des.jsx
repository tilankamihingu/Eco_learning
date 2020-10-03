import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Des extends Component {
    render() {
        return (
            <div>
                <div className="card text-center">
                <div className="card-header bg-success text-bold font-weight-bold">
                 Problems,Solutions and how to Sustaining the planet
                </div>
                  <div className="card-body">
                  <h5 className="card-title">Watch the Problems & Solutions</h5>
                    <p className="card-text">We try to discuss problems and introduce some best solutions. There are a lot of problems on the planet but we discuss some main problems. All the people in the world have a basic or advanced knowledge of the environment. Someone watches this and gets knowledge of the environment and how to work with the environment and how to protect the planet for the future.  Then our effort is a success.</p>
                  <Link to="/problem" className="btn btn-success">Problems</Link>
                  </div>
       
              </div>
            </div>
        )
    }
}
