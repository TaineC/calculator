import React, {Component} from 'react';
import './App.scss';
import Button from 'react-bootstrap/Button';
import {MContext} from './Provider';

class Tax extends Component{
  constructor(props){
    super(props);
    this.state = {
      total: 0,
    }
  }

  calculateTax = () => {
    let {salary} = this.props;
    let {tax} = this.state;
    if(salary <= 14000){
      tax = 1.105;
    }
    if(salary > 14000 && salary <= 48000){
      tax = 1.175;
    }
    if(salary > 48000 && salary <= 70000){
      tax = 1.3;
    }
    else{
      tax = 1.33;
    }
    let total = salary/tax;
    this.setState({total: parseInt(total)})
    document.getElementsByClassName("tax")[0].style.display = "block";
  }

  navigateInterest = () => {
    if(this.state.total != 0){
      document.getElementsByClassName("taxbox")[0].style.display = "none";
      document.getElementsByClassName("interestbox")[0].style.display = "block";
    }
  }

  saveTotal = (total) => {
    this.props.data(total)
  }

  render(){
    return (
        <div className="subhead">
          <Button onClick={this.navigateInterest} onClick={(context)=>{context.setMessage("testing")}} variant="danger" className="navbutton">Interest</Button>
          <h2>Tax</h2>
          <p>You're Yearly Salary is: <span>${this.props.salary}</span></p>
          <Button onClick={this.calculateTax} variant="success">Work Out Tax</Button>
          <p className="tax">You're Salary After Tax: <span>${this.state.total}</span></p>
          <Button onClick={this.saveTotal}>Save Data</Button>
        </div>
    );
  }
}

export default Tax;
