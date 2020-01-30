import React, {Component} from 'react';
import Calculator from './Calculator';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Button from 'react-bootstrap/Button'

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
        <div className="link">
          <Button variant="warning" href="https://github.com/TaineC/calculator" target="_blank"><i className="fab fa-github"/></Button>
        </div>

        <BrowserRouter basename='/'>
          <Switch>
            <Route path='/' component={Calculator}/>
          </Switch>
          
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
