import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <div>
                 <nav className="navbar navbar-expand-lg navbar-light bg-dark">
              <Link className="navbar-brand text-uppercase text-white ml-5" href="#">Eco Learn</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span>
                  <i className="fas fa-bars" style={{color:'#fff'}}/>
                </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                  <Link className="nav-link text-uppercase text-white ml-5" to="/">Home&nbsp;<i className="fas fa-home"></i> <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link text-uppercase text-white ml-5" to="/problem">problems</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link text-uppercase text-white ml-5" to="/final">Images</Link>
                </li>
            
             </ul>
         
        </div>
      </nav>
            </div>
        )
    }
}
