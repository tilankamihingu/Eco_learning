import React, { Component } from 'react'
import NasaOne from '../../images/nasa1.png';
import NasaTwo from '../../images/nasa2.jpg';
export default class Final extends Component {
    render() {
        return (
            <div>
                 <div className="card mb-3 ml-5 mr-5 mt-5">
        <img src={NasaOne} className="card-img-top" alt="Nasa one" />
        <div className="card-body">
          <h5 className="card-title">Saterlight images</h5>
          <p className="card-text">Sentinel-5p sees nitrogen dioxide over Europe</p>
        </div>
      </div>
      <div className="card mb-3 ml-5 mr-5 mt-5">
        <img src={NasaTwo} className="card-img-top" alt="Nasa one" />
        <div className="card-body">
          <h5 className="card-title">Saterlight images</h5>
          <p className="card-text">Carbon monoxide from Amazon fires</p>
        </div>
      </div>
            </div>
        )
    }
}
