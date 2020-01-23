import React, {Component} from 'react';
import './App.scss';
import Button from 'react-bootstrap/Button';

class Savings extends Component{
  constructor(props){
    super(props);
    this.state = {
      totalSaved: 0,
    }
  }

  submitForm = (e) => {
    e.preventDefault();
    let {total} = this.props;
    let {totalSaved} = this.state;
    let data = new FormData(this.form);
    let percentage = data.get('percentage-input');
    let years = data.get('years-input');
    totalSaved = total*percentage/100*years
    this.setState({totalSaved: parseFloat(totalSaved).toFixed(2)})
  }


  render(){
    return (
      <div className="savingsTable">
        <div className="savingsInput">
          <h3>Long Term Saving</h3>
          <form onSubmit={this.submitForm} ref={(el) => {this.form = el}} className="inputPercent">
            <input type="number" min="1" max="100" name="percentage-input" id="percentage-input" placeholder="Enter Percentage You Want to Save"/>
            <input type="number" min="1" max="100" name="years-input" id="years-input" placeholder="Enter How Many Years"/>
            <Button type="submit" variant="warning">Enter</Button>
          </form>
        </div>
        <div className="savingResult">
          <h3>Your Total Saved Will Be:</h3>
          <p>${this.state.totalSaved}</p>
        </div>
      </div>
    );
  }
}

export default Savings;
