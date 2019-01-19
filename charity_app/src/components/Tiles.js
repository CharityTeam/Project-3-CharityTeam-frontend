import React from 'react';

import { Button, ProgressBar } from 'react-bootstrap';


const Tile = (props) => {
  return(
    <div className="tile">
      <img src={props.case.img} alt=""/>
      <h2>{props.case.name}</h2>
      <p>Money Needed: ${props.case.needed}</p>
      <p>Total Donatrion: ${props.case.sum}</p>
      <p>Remaining: ${(props.case.needed) - (props.case.sum)}</p>
      <div className="payPal">
      <label>Help Us with: </label><input type="number" id="numberText" onChange={(e) => {props.onChange(e)}} min="5" max="100"/>
      {props.paypayButton(props.case)}
      <Button onClick={() => {props.setCurrentCase(props.case)}}>Details</Button>
      </div>
       <div className="progresBar">
        <div className="background" style= {props.progressBar(props.case.needed, props.case.sum)}>
        </div>
      </div> 

      <ProgressBar bsStyle="success" now={(props.case.sum / props.case.needed) * 100} />

      
    </div>
  )
}

export default Tile;