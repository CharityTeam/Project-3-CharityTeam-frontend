import React from 'react';

const Tile = (props) => {
  return(
    <div className="tile" onClick={() => {props.setCurrentShow(props.case)}}>
      <img src={props.case.img} alt=""/>
      <h2>{props.case.name}</h2>
    </div>
  )
}

export default Tile;