import React, { Fragment } from 'react'

class Sushi extends React.Component {

  handleEatClick = () => {
    if (this.props.remaining - this.props.sushi.price >= 0) {
      this.props.handleEatArrayClick();
      this.props.handleRemainingClick(this.props.sushi.price);
      this.props.handleShowSushiClick(this.props.sushi.id);
    }
  }

  render () {
    return (
      <div className="sushi">
        <div className="plate" 
            onClick={this.handleEatClick}>
          { 
            !this.props.sushi.img_url ?
              null
            :
              <img src={this.props.sushi.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi