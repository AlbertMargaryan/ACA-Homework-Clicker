import React from 'react';
import './App.css';

import Button from './components/Button/Button.js'

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
     this.handleDecreaseCounter = this.handleDecreaseCounter.bind(this)
  }

  handleIncreaseCounter() {

      this.setState(state => ({
        minDis: false
      })) //Seting Decrease button disabled:false

    if(this.state.counter >= this.state.max) {
      this.setState(state => ({
        maxDis: true
      }))
    }
    else{
      this.setState(state => ({
        counter: this.state.counter + this.state.step
      }));
      console.log(this.state.counter)
    }
  }
  handleDecreaseCounter() {
     this.setState(state => ({
        maxDis: false
      })) 

    if(this.state.counter <= this.state.min) {
      this.setState(state => ({
        minDis: true
      }))
    }

    else{
      this.setState(state => ({
        counter: this.state.counter - this.state.step,
      }));
      console.log(this.state.counter)
    }
  }

  render(){
    return (
      <>
        <h1>
          {this.state.counter}
        </h1>
        <Button title="Increase" disabled={this.state.maxDis} onclick={this.handleIncreaseCounter} />
        <Button title="Decrease" disabled={this.state.minDis} onclick={this.handleDecreaseCounter}/>
      </>
    );
  }
}
