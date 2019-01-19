import React from "react";
import { Button } from 'react-bootstrap';
const OneCase = (props) => {
    return (
        <div className="oneCase">
        <div className="merg">
       
            <div className="rightside">
                <div className="image">
                    <img src={props.activeCase.img} alt="" />
                </div>
                
                
                <br></br>
                {/* <div className="back"
                onClick={() => {
                    props.setCurrentCase(null);
                }}> BACK TO HOMEPAGE</div> */}
            </div>
            <div className="leftside">

                <h2>Name: {props.activeCase.name}</h2>
                <h2>Details: {props.activeCase.details}</h2>
                <h2>City: {props.activeCase.city}</h2>
                <h2>email: {props.activeCase.email}</h2>
                <h2>phone: {props.activeCase.phone}</h2>
                <h2>Organization Name: {props.activeCase.organtion_name}</h2>
                <h2>Needed: {props.activeCase.needed}</h2>
                <h2>Number of donors:{props.activeCase.sum === '0' ? props.activeCase.numberofdonors = 0 :
                    props.activeCase.numberofdonors}</h2>
                <h2>Total Donation: {props.activeCase.sum}</h2>
                <h2>Remaining: {  props.activeCase.needed - parseInt(props.activeCase.sum)}</h2>
                <label>Help Us with: </label><input type="number" id="doner_donation" name="doner_donation" onChange={(e) => {props.onChange(e)}} min="5" max="1000"/>
                {/*Here's  an example in the bottom to call the paypal method*/}
                   {props.paypayButton(props.activeCase, props.total)}

                
                <div className="buttons">
                   <Button onClick={() => { props.deleteCase(props.activeCase.id) }}>Delete</Button>
                   <Button onClick={() => { props.toggleModal() }}> Edit</Button>
               </div>
               <br></br>
                    <button className='backbut'
                        onClick={() => {
                            props.setCurrentCase(null);
                        }}> BACK TO HOMEPAGE</button>
                
            </div>

            {/* <div className="container1">


            </div> */}
             </div>
        </div>

    );
};



export default OneCase;