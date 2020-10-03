import React, { Component } from 'react';
import DefOne from '../../images/def1.jpg';
import DefTwo from '../../images/def2.jpg';
import DefThree from '../../images/def3.jpg';
import {Link} from 'react-router-dom';

export default class Deforest extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={DefOne} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={DefTwo} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={DefThree} alt="Third slide" />
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
          <p className="card-text">Deforestation, clearance, clearcutting or clearing is the removal of a forest or stand of trees from land which is then converted to a non-forest use.Deforestation can involve conversion of forest land to farms, ranches, or urban use. The most concentrated deforestation occurs in tropical rainforests.About 31% of Earth's land surface is covered by forests.</p>
          <p className="card-text">The Food and Agriculture Organization of the United Nations defines deforestation as the conversion of forest to other land uses (regardless of whether it is human-induced). “Deforestation” and “forest area net change” are not the same: the latter is the sum of all forest losses (deforestation) and all forest gains (forest expansion) in a given period. Net change, therefore, can be positive or negative, depending on whether gains exceed losses, or vice versa</p>
          <p className="card-text">The primary driver of deforestation is the expansion of agriculture. Trees are cut down for use as building material, timber or sold as fuel (sometimes in the form of charcoal or timber), while cleared land is used as pasture for livestock and agricultural crops. The vast majority of agricultural activity resulting in deforestation is subsidized by government tax revenue.Disregard of ascribed value, lax forest management, and deficient environmental laws are some of the factors that lead to large-scale deforestation. Deforestation in many countries—both naturally occurring and human-induced—is an ongoing issue.[8] Between 2000 and 2012, 2.3 million square kilometres (890,000 sq mi) of forests around the world were cut down.
          The removal of trees without sufficient reforestation has resulted in habitat damage, biodiversity loss, and aridity. Deforestation causes extinction, changes to climatic conditions, desertification, and displacement of populations, as observed by current conditions and in the past through the fossil record.Deforestation also has adverse impacts on biosequestration of atmospheric carbon dioxide, increasing negative feedback cycles contributing to global warming. Global warming also puts increased pressure on communities who seek food security by clearing forests for agricultural use and reducing arable land more generally. Deforested regions typically incur significant other environmental effects such as adverse soil erosion and degradation into wasteland. According to a study published in Nature Scientific Reports if deforestation continue in current rate in the next 20 - 40 years, it can trigger a full or almost full extinction of humanity. To avoid it humanity should pass from a civilization dominated by the economy to "cultural society" that "privileges the interest of the ecosystem above the individual interest of its components, but eventually in accordance with the overall communal interest</p>
          <p className="card-text">Deforestation is more extreme in tropical and subtropical forests in emerging economies. More than half of all plant and land animal species in the world live in tropical forests.As a result of deforestation, only 6.2 million square kilometres (2.4 million square miles) remain of the original 16 million square kilometres (6 million square miles) of tropical rainforest that formerly covered the Earth.An area the size of a football pitch is cleared from the Amazon rainforest every minute, with 136 million acres (55 million hectares) of rainforest cleared for animal agriculture overall.More than 3.6 million hectares of virgin tropical forest was lost in 2018.Consumption and production of beef is the primary driver of deforestation in the Amazon, with around 80% of all converted land being used to rear cattle.91% of Amazon land deforested since 1970 has been converted to cattle ranching.The global annual net loss of trees is estimated to be approximately 10 billion.According to the Global Forest Resources Assessment 2020 the global average annual deforested land in the 2015–2020 demi-decade was 10 million hectares and the average annual forest area net loss in the 2000–2010 decade was 4.7 million hectares.The world has lost 178 million ha of forest since 1990, which is an area about the size of Libya.</p>
        </div> 
      </div>
      
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title font-weight-bold text-primary">Environmental effects</h5>
          
            <p className="card-text">Deforestation is a contributor to global warming,and is often cited as one of the major causes of the enhanced greenhouse effect. Tropical deforestation is responsible for approximately 20% of world greenhouse gas emissions.According to the Intergovernmental Panel on Climate Change deforestation, mainly in tropical areas, could account for up to one-third of total anthropogenic carbon dioxide emissions.But recent calculations suggest that carbon dioxide emissions from deforestation and forest degradation (excluding peatland emissions) contribute about 12% of total anthropogenic carbon dioxide emissions with a range from 6% to 17%.Deforestation causes carbon dioxide to linger in the atmosphere. As carbon dioxide accrues, it produces a layer in the atmosphere that traps radiation from the sun. The radiation converts to heat which causes global warming, which is better known as the greenhouse effect.Plants remove carbon in the form of carbon dioxide from the atmosphere during the process of photosynthesis, but release some carbon dioxide back into the atmosphere during normal respiration. Only when actively growing can a tree or forest remove carbon, by storing it in plant tissues. Both the decay and the burning of wood release much of this stored carbon back into the atmosphere. Although an accumulation of wood is generally necessary for carbon sequestration, in some forests the network of symbiotic fungi that surround the trees' roots can store a significant amount of carbon, storing it underground even if the tree which supplied it dies and decays, or is harvested and burned.Another way carbon can be sequestered by forests is for the wood to be harvested and turned into long-lived products, with new young trees replacing them.Deforestation may also cause carbon stores held in soil to be released. Forests can be either sinks or sources depending upon environmental circumstances. Mature forests alternate between being net sinks and net sources of carbon dioxide</p>
            <p className="card-text">In deforested areas, the land heats up faster and reaches a higher temperature, leading to localized upward motions that enhance the formation of clouds and ultimately produce more rainfall.[54] However, according to the Geophysical Fluid Dynamics Laboratory, the models used to investigate remote responses to tropical deforestation showed a broad but mild temperature increase all through the tropical atmosphere. The model predicted 0.2 °C warming for upper air at 700 mb and 500 mb. However, the model shows no significant changes in other areas besides the Tropics. Though the model showed no significant changes to the climate in areas other than the Tropics, this may not be the case since the model has possible errors and the results are never absolutely definite.Deforestation affects wind flows, water vapour flows and absorption of solar energy thus clearly influencing local and global climate.</p>
        </div> 
      </div>
     
      <div className="card mt-3 bg-dark text-white">
        <div className="card-body">
          <h5 className="card-title font-weight-bold text-danger">Solution</h5>
          <ul>
            <li><h6 className="card-title text-primary">Planting</h6></li>
            <p className="card-text">We want trees for our lives but these days most people are cut trees for some works. It is not good for our future. It takes a long time for a tree to grow. But we must try to grow a plant.it is a good investment for the future. All people think we want our land but Allways we try to build Apartments.it can save a large area of jungle. Always we try to save the forests.</p>
            <li><h6 className="card-title text-primary">Self Farming and develop the Local industries</h6></li>
            <p className="card-text">In the past, all the peoples are farming but these days some people are farming most are not farming. We will try to get a bit of time in our daily life to farming in our land or any place. Then we can have to get fresh vegetables and fruits and it is good for the environment & economy side. We will try to need a practice future generation.</p>
            <li><h6 className="card-title text-primary">Own plan</h6></li>
            <p className="card-text">We have to create a garden with vegetable plants in our home. It is good for the environment and our health. Always we will try to find new things and instead of cutting down trees. Always we will try to grow a plant on our special days or every day. We do this then our planet is sustaining for future generations.</p>
          </ul>
          <Link to="/problem" className="btn btn-danger">Back to problems</Link>
        </div> 
      </div>
            </div>
        )
    }
}
