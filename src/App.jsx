import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home';
import Problem from './components/problems/Problem';
import Air from './components/Air/Air';
import Deforest from './components/Deforest/Deforest';
import Final from './components/Final/Final';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/problem" component={Problem} />
        <Route path="/air" component={Air} />
        <Route path="/deforest" component={Deforest} />
        <Route path="/final" component={Final} />
        
      </Switch>
    </div>
  );
}

export default App;
