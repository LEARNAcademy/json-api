import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './stylesheets/bootstrap.min.css'
import './stylesheets/App.css'

import Home from './pages/Home'
import Topic from './pages/Topic'
import Type from './pages/Type'
import Work from './pages/Work'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <div className='jumbotron'>
            <h1>Everything Anime</h1>
          </div>
          <Route path="/" exact component={Home} />
          <Route path="/type/:type" exact component={Type} />
          <Route path="/type/:type/topic/:topic" exact component={Topic} />
          <Route path="/type/:type/topic/:topic/work/:id" component={Work} />
        </div>
      </Router>
    );
  }
}

export default App;
