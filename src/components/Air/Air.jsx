import React, { Component } from 'react';
import AirOne from '../../images/air1.jpg';
import AirTwo from '../../images/air2.jpg';
import AirThree from '../../images/air3.jpg';
import {Link} from 'react-router-dom';

export default class Air extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={AirOne} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={AirTwo} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={AirThree} alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title font-weight-bold">Description</h5>
          <p className="card-text">Air pollution is the presence of substances in the atmosphere that are harmful to the health of humans and other living beings, or cause damage to the climate or to materials. There are different types of air pollutants, such as gases (such as ammonia, carbon monoxide, sulfur dioxide, nitrous oxides, methane and chlorofluorocarbons), particulates (both organic and inorganic), and biological molecules. Air pollution may cause diseases, allergies and even death to humans; it may also cause harm to other living organisms such as animals and food crops, and may damage the natural or built environment. Both human activity and natural processes can generate air pollution.
            Air pollution is a significant risk factor for a number of pollution-related diseases, including respiratory infections, heart disease, COPD, stroke and lung cancer.The human health effects of poor air quality are far reaching, but principally affect the body's respiratory system and the cardiovascular system. Individual reactions to air pollutants depend on the type of pollutant a person is exposed to, the degree of exposure, and the individual's health status and genetics.Indoor air pollution and poor urban air quality are listed as two of the world's worst toxic pollution problems in the 2008 Blacksmith Institute World's Worst Polluted Places report.Outdoor air pollution alone causes to 4.21 million deaths annually.Overall, air pollution causes the deaths of around 7 million people worldwide each year, and is the world's largest single environmental health risk.
            Productivity losses and degraded quality of life caused by air pollution are estimated to cost the world economy $5 trillion per year.Various pollution control technologies and strategies are available to reduce air pollution.An air pollutant is a material in the air that can have adverse effects on humans and the ecosystem. The substance can be solid particles, liquid droplets, or gases. A pollutant can be of natural origin or man-made. Pollutants are classified as primary or secondary. Primary pollutants are usually produced by processes such as ash from a volcanic eruption. Other examples include carbon monoxide gas from motor vehicle exhausts or sulfur dioxide released from factories. Secondary pollutants are not emitted directly. Rather, they form in the air when primary pollutants react or interact. Ground level ozone is a prominent example of a secondary pollutant. Some pollutants may be both primary and secondary: they are both emitted directly and formed from other primary pollutants.</p>
        </div> 
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title font-weight-bold text-primary">Sources</h5>
          <h6 className="card-title">Man-made</h6>
          <ul>
            <li>Stationary sources include smoke stacks of fossil fuel power stations (see for example environmental impact of the coal industry), manufacturing facilities (factories) and waste incinerators, as well as furnaces and other types of fuel-burning heating devices. In developing and poor countries, traditional biomass burning is the major source of air pollutants; traditional biomass includes wood, crop waste and dung.</li>
            <li>Mobile sources include motor vehicles, marine vessels, and aircraft.</li>
            <li>Controlled burn practices in agriculture and forest management. Controlled or prescribed burning is a technique sometimes used in forest management, farming, prairie restoration or greenhouse gas abatement. Fire is a natural part of both forest and grassland ecology and controlled fire can be a tool for foresters. Controlled burning stimulates the germination of some desirable forest trees, thus renewing the forest.</li>
            <li>Fumes from paint, hair spray, varnish, aerosol sprays and other solvents. These can be substantial; emissions from these sources was estimated to account for almost half of pollution from volatile organic compounds in the Los Angeles basin in the 2010s.</li>
          </ul>
          <h6 className="card-title">Natural Sources</h6>
          <ul>
            <li>Dust from natural sources, usually large areas of land with little vegetation or no vegetation</li>
            <li>Radon gas from radioactive decay within the Earth's crust. Radon is a colorless, odorless, naturally occurring, radioactive noble gas that is formed from the decay of radium. It is considered to be a health hazard. Radon gas from natural sources can accumulate in buildings, especially in confined areas such as the basement and it is the second most frequent cause of lung cancer, after cigarette smoking.</li>
            <li>Vegetation, in some regions, emits environmentally significant amounts of Volatile organic compounds (VOCs) on warmer days. These VOCs react with primary anthropogenic pollutants—specifically, NOx, SO2, and anthropogenic organic carbon compounds — to produce a seasonal haze of secondary pollutants.Black gum, poplar, oak and willow are some examples of vegetation that can produce abundant VOCs. The VOC production from these species result in ozone levels up to eight times higher than the low-impact tree species.</li>
          </ul>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title font-weight-bold text-primary">Health Effects</h5>
          <ul>
            <li><h6>Cancer(lung Cancer)</h6></li>
            <p className="card-text">A review of evidence regarding whether ambient air pollution exposure is a risk factor for cancer in 2007 found solid data to conclude that long-term exposure to PM2.5 (fine particulates) increases the overall risk of non-accidental mortality by 6% per a 10 microg/m3 increase. Exposure to PM2.5 was also associated with an increased risk of mortality from lung cancer (range: 15% to 21% per 10 microg/m3 increase) and total cardiovascular mortality (range: 12% to 14% per a 10 microg/m3 increase). The review further noted that living close to busy traffic appears to be associated with elevated risks of these three outcomes – increase in lung cancer deaths, cardiovascular deaths, and overall non-accidental deaths. The reviewers also found suggestive evidence that exposure to PM2.5 is positively associated with mortality from coronary heart diseases and exposure to SO2 increases mortality from lung cancer, but the data was insufficient to provide solid conclusions.[84] Another investigation showed that higher activity level increases deposition fraction of aerosol particles in human lung and recommended avoiding heavy activities like running in outdoor space at polluted areas.</p>
          </ul>
        </div> 
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title font-weight-bold text-primary">Sentinel-5P brings air pollution into focus</h5>
          <p className="card-text">Launched on 13 October, the Sentinel-5P satellite has delivered its first images of air pollution. Even though the satellite is still being prepared for service, these first results have been hailed as exceptional and show how this latest Copernicus satellite is set to take the task of monitoring air quality into a new era.
          This new mission promises to image air pollutants in more detail than ever before. And, while these first results demonstrate the sophistication of the satellite's instrument, they certainly bring the issue of air pollution sharply into focus.
          </p>
          <h5 className="card-title font-weight-bold text-primary">Monitoring air pollution from fires</h5>
          <p className="card-text">The wildfires that have been devastating the Amazon rainforest have been international headline news over the last weeks. These fires are not only an environmental tragedy in terms of lost forest and biodiversity, but they are also leaving their mark on the atmosphere, affecting air quality and, potentially, the global climate.
          In light of the climate crisis, the loss of swathes of the forest is a serious concern. Everyone on Earth benefits from the health of rainforests like the Amazon. Trees act as sinks for carbon, absorbing and storing atmospheric carbon dioxide – one of the main greenhouse gases – and therefore helping to cool the planet.
          Consumed by fires in recent months, forests are releasing much of the carbon dioxide they once stored in their biomass back into the atmosphere. However, there are also a host of other pollutants entering the air. The Copernicus Sentinel-5P mission is being used to closely monitor the changes in air quality.
          </p>
        </div> 
      </div>
      <div className="card mt-3 bg-dark text-white">
        <div className="card-body">
          <h5 className="card-title font-weight-bold text-danger">Solution</h5>
          <ul>
            <li><h6 className="card-title text-primary">Electricity</h6></li>
            <p className="card-text">Most of the countries are rich with sunlight and wind. If we have to use these natural sources well and increase it. Solar panels are the other option. In some countries, there are so many water resources. Then we have to create small Hydropower plants from every city and in some cities, we have to create wind power plants. Then we have to decrease coal power plants and fuel power plants. It is very good for the environment and our health.</p>
            <li><h6 className="card-title text-primary">Transport</h6></li>
            <p className="card-text">Nowadays most of the countries are using petrol and diesel vehicles(especially Asian). It is not good for our environment.but we have to use bicycles for our day-to-day life because it is also good for our health and also the environment. The other thing is we have to use public Transport because nowadays there are so many vehicles on the road. but we use public transport then decrease the number of vehicles on the road. Another thing is we have to use battery power vehicles. And also we have to use automated things such as robots AI products.</p>
            <li><h6 className="card-title text-primary">Own plan</h6></li>
            <p className="card-text">we have to create a mini Electricity plant in our home. Then we have used electric cars.no problem with the Electricity bill. We have to use automated things in our daily life. We have to use bicycles. It will be an investment you make for yourself.</p>
          </ul>
          <Link to="/problem" className="btn btn-danger">Back to Problems</Link>
        </div> 
      </div>
            </div>
        )
    }
}
