import React from 'react';
import Styles from './App.css';

import Button from './components/Button/Button.js'
import Input from './components/Input/Input.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      step: 1,
      min: 0,
      minDis: false, //dis - disabled
      max: +Infinity,
      maxDis: false //dis - disabled
    };

     this.handleIncreaseCounter = this.handleIncreaseCounter.bind(this);
     this.handleDecreaseCounter = this.handleDecreaseCounter.bind(this);
     this.handleResetCounter = this.handleResetCounter.bind(this);
     this.handleStepChanger = this.handleStepChanger.bind(this);
     this.handleMinimalChanger = this.handleMinimalChanger.bind(this);
     this.handleMaximalChanger = this.handleMaximalChanger.bind(this);
     this.handleSaveState = this.handleSaveState.bind(this);
     this.handleRestoreState = this.handleRestoreState.bind(this);
  }

  handleIncreaseCounter() {
      this.setState(state => ({
        minDis: false
      })) //Seting Decrease button disabled:false

    if(this.state.counter >= this.state.max || this.state.counter + this.state.step > this.state.max) {
      this.setState(state => ({
        maxDis: true
      }))
    }
    else{
      this.setState(state => ({
        counter: this.state.counter + this.state.step
      }));
    }
  }

  handleDecreaseCounter() {
     this.setState(state => ({
        maxDis: false
      })) 

    if(this.state.counter <= this.state.min || this.state.counter - this.state.step < this.state.min) {
      this.setState(state => ({
        minDis: true
      }))
    }

    else{
      this.setState(state => ({
        counter: this.state.counter - this.state.step,
      }));
    }
  }

  handleResetCounter() {
    this.setState(state => ({
        counter: this.state.min
    }))
  }

  handleStepChanger(event) {
    this.setState({step: +event.target.value})
  }
  handleMinimalChanger(event) {
    this.setState({min: +event.target.value})

    if(this.state.min+1 > this.state.counter) {
      this.setState({counter: this.state.min+1})
    }
  }
  handleMaximalChanger(event) {
    this.setState({max: +event.target.value})

    if(this.state.max <= this.state.counter) {
      this.setState({counter: this.state.max-1})
    }
  }
  handleSaveState() {
    let myJSON = JSON.stringify(this.state);
    localStorage.setItem("state", myJSON);
  }
  handleRestoreState() {
    if(localStorage.getItem("state")) {
      try {
        let obj = JSON.parse(localStorage.getItem("state"));
        this.setState(obj)
      }
      catch(e) {
        document.write(e)
      }
    }
  }

  render(){
    return (
      <>
        <h1>
          {this.state.counter}
        </h1>
        <div>
          <Button title="Increase" disabled={this.state.maxDis} onclick={this.handleIncreaseCounter} />
          <Button title="Decrease" disabled={this.state.minDis} onclick={this.handleDecreaseCounter}/>
          <Button title={"Reset to " + this.state.min} onclick={this.handleResetCounter}/>
        </div>
        <div className="Input-container">
            <Input labelText="Step: " type="number" val={this.state.step} onchange={this.handleStepChanger} />
            <Input labelText="Minimal value: "  type="number" val={this.state.min} onchange={this.handleMinimalChanger} />
            <Input labelText="Maximal value: " type="number" val={this.state.max} onchange={this.handleMaximalChanger} />
        </div>
        <div>
          <Button class="reversed" title="Save!" onclick={this.handleSaveState}/>
          <Button class="reversed" title="Restore!" onclick={this.handleRestoreState}/>
        </div>
      </>
    );
  }
}
