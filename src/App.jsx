import React, {Component} from 'react';
import Tax from './Tax';
import Interest from './Interest';
import Calculator from './Calculator';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      salary: 0,
    }
  }
  
  render(){
    return (
      <div className="App">

        <BrowserRouter basename='/'>
          <Switch>
            <Route exact path='/' component={Calculator}/>
            <Route path='/tax' component={Tax}/>
            <Route path='/interst' component={Interest}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
