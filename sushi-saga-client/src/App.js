import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import SushiWallet from './components/SushiWallet';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super();
    this.state = {
      sushis: [],
      index: 0,
      eatArray: [],
      remaining: 100
    };
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          sushis: data
        });
      });
  }

  handleMoreClick = () => {
    const totalSushi = this.state.sushis.length;
    if (this.state.index + 4 == totalSushi) {
      this.setState({
        index: 0
      });
    } else {
      this.setState({
        index: this.state.index + 4
      });
    }
  };

  handleEatArrayClick = () => {
    this.setState({
      eatArray: [...this.state.eatArray, 0]
    });
  };

  handleRemainingClick = price => {
    this.setState({
      remaining: this.state.remaining - price
    });
  };

  handleShowSushiClick = id => {
    this.state.sushis.find(sushi => sushi.id === id).img_url = "";
  };

  handleAddBalanceClick = (e) => {
    e.preventDefault();
    // console.log(e.target.add.value);
    const addValue = e.target.add.value;
    this.setState({
      remaining: this.state.remaining + Number(addValue)
    })
  }

  render() {
    // console.log(this.state.sushis.slice(this.state.index, 4));
    return (
      <div className="app">
        <SushiContainer
          remaining={this.state.remaining}
          handleShowSushiClick={this.handleShowSushiClick}
          handleEatArrayClick={this.handleEatArrayClick}
          handleRemainingClick={this.handleRemainingClick}
          sushis={this.state.sushis.slice(
            this.state.index,
            this.state.index + 4
          )}
          handleMoreClick={this.handleMoreClick}
        />
        <Table
          eatArray={this.state.eatArray}
          remaining={this.state.remaining}
        />
        <SushiWallet handleAddBalanceClick={this.handleAddBalanceClick} />
      </div>
    );
  }
}

export default App;
