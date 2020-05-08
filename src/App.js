import React, { Component } from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import './App.css';
import Navbar from './layout/Navbar'
import Dashboard from './dashboard/Dashboard';
import ProjectDetails from './projects/ProjectDetails'

class App extends Component {
 
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route  exact path='/' component={Dashboard} />
          <Route path='/project/:id' component={ProjectDetails} />
        </Switch>
      </div>
      
      
      </BrowserRouter>
    );
  }
}

export default App;
