import React, {Component} from 'react';
import './App.scss';

class Income extends Component{
  constructor(props){
    super(props);
    this.state = {
      hour: 0,
      day: 0,
      week: 0,
      fortnight: 0,
      month: 0,
      total: this.props.total,
    }
  }

  workoutPayRates = () => {
    let {hour, day, week, fortnight, month, total} = this.state;
    month = total/12;
    fortnight = total/26;
    week = total/52;
    day = total/365;
    hour = total/365/8;
    this.setState({
      month: parseFloat(month).toFixed(2),
      fortnight: parseFloat(fortnight).toFixed(2),
      week: parseFloat(week).toFixed(2),
      day: parseFloat(day).toFixed(2),
      hour: parseFloat(hour).toFixed(2)
    })
  }

  componentDidMount(){
    this.workoutPayRates()
  }

  componentDidUpdate(nextProps){
    const{total} = this.props;
    if(nextProps.total !== total){
      this.setState({total}, () => {
        this.workoutPayRates()
      })
    }
  }

  render(){
    let {salary, tax} = this.props;
    let {hour, day, week, fortnight, month, total} = this.state;
    return (
        <div className="incomeTable">
          <div className="tableItem">
            <p>You're Total Salary:</p>
            <p>${salary}</p>
          </div>
          <div className="tableItem">
            <p>You're Income Tax:</p>
            <p>${tax}</p>
          </div>
          <div className="tableItem">
            <p>You're Final Income:</p>
            <p>${total}</p>
          </div>
          <div className="finalIncome">
            <div className="incomeTime">
              <p>Hourly</p>
              <p>${hour}</p>
            </div>
            <div className="incomeTime">
              <p>Daily</p>
              <p>${day}</p>
            </div>
            <div className="incomeTime">
              <p>Weekly</p>
              <p>${week}</p>
            </div>
            <div className="incomeTime">
              <p>Fortnightly</p>
              <p>${fortnight}</p>
            </div>
            <div className="incomeTime">
              <p>Monthly</p>
              <p>${month}</p>
            </div>
            <div className="incomeTime">
              <p>Yearly</p>
              <p>${total}</p>
            </div>
          </div>
        </div>
    );
  }
}

export default Income;
