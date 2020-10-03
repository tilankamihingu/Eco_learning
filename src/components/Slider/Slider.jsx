import React, { Component } from 'react';
import one from '../../images/one.jpg';
import two from '../../images/two.jpg';
import three from '../../images/three.jpg';
import four from '../../images/four.jpg';

export default class Slider extends Component {
    render() {
        return (
            <div>
                  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          <li data-target="#carouselExampleIndicators" data-slide-to={3} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={one} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={two} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={three} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={four} alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
            </div>
        )
    }
}
