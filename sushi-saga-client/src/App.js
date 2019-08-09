import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    sushiIndex: 0,
    bank: 100,
    totalSushi: []
  }

  handleMoreClick = (e) => {
    this.getSushi()
  }

  beenEaten = (sushi) => {
    return this.state.sushi.includes(sushi)
  }

  eatMe = (e) => {
    let sushi = this.state.sushi.filter(sushi => sushi.id == e.target.id)
    let targetSushi = sushi[0]
    if((this.state.bank - targetSushi.price) >= 0){
      this.state.sushi.forEach(sushi => {
        if(sushi === targetSushi){
          targetSushi.img_url = "!"
        }
      });
      this.setState({
        sushi: [...this.state.sushi],
        bank: this.state.bank - targetSushi.price
      })
   }
  }

  getSushi = () => {
    return fetch(API)
    .then(res => res.json())
    .then(data => {
      let newSushi = data.slice(this.state.sushiIndex, this.state.sushiIndex + 4)
      this.setState({
        sushi: [...newSushi],
        sushiIndex: this.state.sushiIndex + 4,
        totalSushi: [...this.state.totalSushi, ...newSushi]
      })
    })
  }

  render() {
    this.state.sushiIndex === 0 && this.getSushi()
    return (
      <div className="app">
        <SushiContainer  sushis={this.state.sushi} handleMoreClick={this.handleMoreClick} beenEaten={this.beenEaten} eatMe={this.eatMe}/>
        <Table bank={this.state.bank} chargeCustomer={null} totalSushi={this.state.totalSushi}/>
      </div>
    );
  }
}

export default App;