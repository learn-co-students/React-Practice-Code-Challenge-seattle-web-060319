import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component{
  
  render(){
    return (
      <Fragment>
        <div className="belt">
          {
            this.props.sushis.map((sushi) => {
              return <Sushi sushi={sushi} beenEaten={this.props.beenEaten} eatMe={this.props.eatMe}/>
            })
          }
          <MoreButton handleMoreClick={this.props.handleMoreClick}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer