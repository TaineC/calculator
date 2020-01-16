import React, {Component} from 'react';
import './App.scss';
import Button from 'react-bootstrap/Button';
import {MContext} from './Provider';

class Interest extends Component{
  constructor(props){
    super(props);
  }

  navigateTax = () => {
    document.getElementsByClassName("interestbox")[0].style.display = "none";
    document.getElementsByClassName("taxbox")[0].style.display = "block";
  }

  render(){
    return (
      <div className="subhead">
        <Button onClick={this.navigateTax} variant="success" className="navbutton">Tax Rate</Button>
        <h2>Interest</h2>
        {/* <MContext.Consumer>
          <p>{this.context.state.message}</p>
        </MContext.Consumer> */}
      </div>
    );
  }
}

export default Interest;
