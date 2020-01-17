import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor(props) {
    super(props);
    this.state = {
    balance: 100000,
    rate: 5,
    term: 15,
    final: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.calculate = this.calculate.bind(this);
    }

  calculate() {
    let balance = (this.state.balance); // create a className with Principal
    let rate = (this.state.rate)/12/100;
    let term = (this.state.term) * 12; // years will equal 15 or 30
    // let statements below are for equation
    let num = rate/(Math.pow(1+rate, term))*balance;
    let den = Math.pow(1+rate, term)-1;
    let pm = balance * (num/den);
    let Mortgage =  pm.toFixed(2)// 
    console.log(balance, num, den, pm, Mortgage);
    this.setState({
      final: Mortgage,
      })
  };
      
  handleChange(event) {
    let target= event.target;
    let value= target.value;
    let name= target.name;
    this.setState({
    [name]: value
    });
    //console.log(value);
  }
  //   handleChange(event) {
          //display
      //     this.setState({value: event.target.value});
      //   }
    // this.setState({
    //   final: final,
  
  render() {
    return (
      <div className='container'>
          <h1>Mortgage Calculator</h1>

          <div className='form-group'>
            <label className='col-sm-2 control-label'>Balance</label>
              <div className='col-sm-10'>
                <input type='number' name='balance' className='form-control' placeholder='Balance' onChange={this.handleChange} value={this.state.balance}/>
              </div>
          </div>
            
          <div className='form-group'>
            <label className='col-sm-2 control-label'>Interest Rate (%)</label>
            <div className='col-sm-10'>
              <input name='rate' type='number' className='form-control' step='0.01' placeholder='Interest Rate (yearly)' onChange={this.handleChange} value={this.state.rate}/>
            </div>
          </div>
          <br/>
            
          <div className='form-group'>
            <div className='col-sm-offset-2 col-sm-10'>
              <label className='term' name='term'>Loan Term (years)</label>
                  <select className='term' value={this.state.term} onChange={this.handleChange}>
                    <option value='15'>15</option>
                    <option value='30'>30</option>
                  </select>
            </div>
          </div>

          <div className='form-group col-sm-offset-2 col-sm-10'>
            <button name='submit' onClick={this.calculate}> 
                Calculate </button>
            <br/>
            <br/>
                <label>
                  This is your estimated mortgage payment.
                </label>
            <div className='col-sm-10'>
                {/* <input 
                  name='output'
                  type='number' 
                  className='form-control' 
                  placeholder='Estimated mortgage..'
                  handleChange = {this.handleChange}
                  output = {this.state.final}
                  value={this.state.value}
                  /> */}
                  <p>{this.state.final}</p>
            </div>
          </div>
      </div>
    );
  }
}

