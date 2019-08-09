import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" id={props.sushi.id}
           onClick={props.eatMe}>
        { 
        props.sushi.img_url !== "!" ? <img src={props.sushi.img_url} width="100%" id={props.sushi.id}/> : null
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi