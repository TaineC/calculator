import React, {Component} from 'react';
import Tax from './Tax';
import Interest from './Interest';
import Provider from './Provider';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      salary: 0,
      // total: 0,
    }
  }

  submitForm = (e) => {
    e.preventDefault();
    let formData = new FormData(this.form);
    let salary = formData.get('salary-input')
    this.setState({salary: parseInt(salary)})
  }

  handleData = (data) => {
    this.setState({total: data})
  }
  
  render(){
    return (
        <div className="container">
          <div className="header">
            <h1>Money Calculator</h1>
          </div>
          <div className="salaryInput">
            <h3>Input Your Yearly Salary</h3>
            <form onSubmit={this.submitForm} ref={(el) => {this.form = el}} className="input">
              <input type="number" name="salary-input" id="salary-input"/>
              <Button onClick={this.calculateTax} type="submit" variant="success">Enter</Button>
            </form>
            {this.state.salary >= 1 ?
            <Provider>
              <Nav fill variant="tabs" defaultActiveKey="/" className="subItems">
                <Nav.Item className="subItem taxbox">
                  <Tax salary={this.state.salary} data={this.handleData}/>
                </Nav.Item>
                <Nav.Item className="subItem interestbox">
                  {/* <Interest total={this.state.total}/> */}
                </Nav.Item>
              </Nav>
            </Provider> 
            : null}
          </div>
        </div>
    );
  }
}

export default App;
