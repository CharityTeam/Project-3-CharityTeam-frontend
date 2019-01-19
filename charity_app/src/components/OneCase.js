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
<ul className="edit">
   
    <li> <h2> <b> Name: </b>{props.activeCase.name} </h2> </li>
    <li> <h2> Details: {props.activeCase.details}</h2> </li>
    <li>  <h2> City:{props.activeCase.city} </h2> </li>
    <li>  <h2> E-mail: {props.activeCase.email}</h2> </li>
    <li>  <h2> Phone: {props.activeCase.phone}</h2>  </li>
    <li>  <h2> Organization Name:{props.activeCase.organtion_name}</h2> </li>
    <li>  <h2> Needed: {props.activeCase.needed}</h2> </li>
    <li>  <h2> Number of donors:{props.activeCase.sum === '0' ? props.activeCase.numberofdonors = 0 :
                    props.activeCase.numberofdonors} </h2> </li>
               <li> <h2>Total Donation: {props.activeCase.sum} </h2> </li>

                </ul>
                <div className="buttons">
                   <Button onClick={() => { props.deleteCase(props.activeCase.id) }}  > <img src="https://img.icons8.com/cotton/64/000000/delete.png"></img>Delete</Button>
                   <Button onClick={() => { props.toggleModal() }}> <img src="https://img.icons8.com/cotton/64/000000/edit.png"></img> Edit</Button>
               </div>
               <br></br>
                    <button className='backbut'
                        onClick={() => {
                            props.setCurrentCase(null);
                        }}> <img src="https://img.icons8.com/cotton/64/000000/home.png"></img> Back to Homepage</button>
                
            </div>

            {/* <div className="container1">


            </div> */}
             </div>
        </div>

    );
};



export default OneCase;