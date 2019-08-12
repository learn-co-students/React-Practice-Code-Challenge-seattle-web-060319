import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from "../components/Sushi";

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map((sushi) => {
          return (
            <Sushi
              sushi={sushi}
              key={sushi.id}
              handleShowSushiClick={props.handleShowSushiClick}
              handleEatArrayClick={props.handleEatArrayClick}
              handleRemainingClick={props.handleRemainingClick}
              remaining={props.remaining}
            />
          );
        })}
        <MoreButton
          handleMoreClick={props.handleMoreClick}
        />
      </div>
    </Fragment>
  );
}

export default SushiContainer
