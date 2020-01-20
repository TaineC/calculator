import React, {Component} from 'react';
import Income from './Income';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      salary: 0,
      tax: 0,
      total: 0,
    }
  }

  submitForm = (e) => {
    e.preventDefault();
    let formData = new FormData(this.form);
    let salary = formData.get('salary-input');
    let tax = 0;
    this.setState({salary: parseInt(salary)});
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
    tax = salary-total;
    this.setState({total: parseFloat(total).toFixed(2)})
    this.setState({tax: parseFloat(tax).toFixed(2)})
    this.setState({salary: parseFloat(salary)})
  }

  // navigateInterest = () => {
  //   if(this.state.total != 0){
  //     document.getElementsByClassName("taxbox")[0].style.display = "none";
  //     document.getElementsByClassName("interestbox")[0].style.display = "block";
  //   }
  // }
  
  render(){
    return (
      <div className="main">
        <div className="header">
          <div className="backgroundImage"></div>
          <div className="headerText">
            <h1>Money Calculator</h1>
          </div>
        </div>
          <div className="salaryInput">
            <h3>Input Your Yearly Salary</h3>
            <form onSubmit={this.submitForm} ref={(el) => {this.form = el}} className="input">
              <input type="number" name="salary-input" id="salary-input"/>
              <Button type="submit" variant="warning">Enter</Button>
            </form>
          </div>
          
          <>
            {this.state.salary >= 1 ? 
              <Income total={this.state.total} salary={this.state.salary} tax={this.state.tax}/>
            : null}
          </>
      </div>
    );
  }
}

export default App;
