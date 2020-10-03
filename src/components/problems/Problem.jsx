import React, { Component } from 'react';
import def from '../../images/def1.jpg';
import air from '../../images/air2.jpg';
import {Link} from 'react-router-dom';


export default class Problem extends Component {
    render() {
        return (
            <div>
               
                
               <div className="card mb-5 mt-3 ml-5 mr-5 bg-dark text-white text-center" >
                <img src={air} className="card-img-top" alt="one"/>
                <div className="card-body">
                    <h5 className="card-title">Air Pollution</h5>
                        <p className="card-text">Read the what is Air Pollution and what are the solution is</p>
                        <Link to="/air" className="btn btn-danger">Solution</Link>
                </div>
                </div>
                <div className="card mb-5 mt-3 ml-5 mr-5 bg-dark text-white text-center">
                <img src={def} className="card-img-top" alt="one"  />
                <div className="card-body">
                    <h5 className="card-title">Deforestation</h5>
                        <p className="card-text">Read the what is Deforestation and what are the solution is</p>
                        <Link to="/deforest" className="btn btn-danger">Solution</Link>
                </div>
                </div>

               
                
            </div>
        )
    }
}
