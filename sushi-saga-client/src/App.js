import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()

    this.state = {
      sushiAll: [],
      sushiIndex: 1,
      cash: 1000,
      warning: null,
      plates: []
    }
  }



  handleFetch = () => {
    fetch(API)
    .then(res => res.json())
    .then(sushiData => {
      return this.setSushi(sushiData)
    })
  }

  componentDidMount(){
    this.handleFetch()

  }

  handleMore = () => {

  }

   handleEaten = (sushi) => {
     if (this.state.cash < sushi.price){
       this.handleWarning()
     }

     else {
       let index = this.state.sushiAll.indexOf(sushi)
       let arr = this.state.sushiAll
       sushi.eaten = true
       arr[index] = sushi

       let newCash = this.state.cash - sushi.price
       let newPlate = this.state.plates
       newPlate.push(sushi)
       this.setState({
         sushiAll: arr,
         cash: newCash,
         warning: null,
         plates: newPlate
       })}

  }



  setSushi = (data) => {
    // console.log('setSushi', data)
    let counter = 0
    let sushis = []
    data.map(item => {
      if (item.id === this.state.sushiIndex && counter !=4){
        sushis.push(item)
        let newIndex = this.state.sushiIndex+1
        this.setState({sushiIndex:newIndex})
        counter++

      }
      // console.log(item)
    })
    let newIndex = this.state.sushiIndex+1
    this.setState({
      sushiIndex:newIndex,
      sushiAll: sushis
    })
    // console.log(this.state.sushiAll)
  }

  handleWarning = () => {
    this.setState({
      warning: "you can't afford this jawn"
    })
    // return this.state.warning
  }



  render() {
    return (
      <div className="app">
        <SushiContainer sushiAll = {this.state.sushiAll} handleEaten = {this.handleEaten} handleMore = {this.handleMore = this.handleFetch}  />
        <Table cash = {this.state.cash} warning = {this.state.warning}  plates = {this.state.plates}/>
      </div>
    );
  }
}

export default App;
