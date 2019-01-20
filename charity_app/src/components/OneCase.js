import React from "react";
import { Button } from 'react-bootstrap';
const OneCase = (props) => {
    return (
        <div className="oneCase">
        <div className="merg">
       
           
                <div className="image">
                    <img src={props.activeCase.img} alt="" />
                </div>
                
                
                <br></br>
                {/* <div className="back"
                onClick={() => {
                    props.setCurrentCase(null);
                }}> BACK TO HOMEPAGE</div> */}
          
<ul className="edit">
   
    <li> <h2><b> Name: </b>{props.activeCase.name} </h2> </li>
    <li> <h2><b>Details: </b> {props.activeCase.details}</h2> </li>
    <li>  <h2><b>City: </b>{props.activeCase.city} </h2> </li>
    <li>  <h2><b>E-mail: </b> {props.activeCase.email}</h2> </li>
    <li>  <h2><b> Phone: </b> {props.activeCase.phone}</h2>  </li>
    <li>  <h2> <b> Organization Name: </b> { props.activeCase.organtion_name}</h2> </li>
    <li>  <h2> <b>Needed: </b> {props.activeCase.needed}</h2> </li>
    <li>  <h2> <b>Number of donors: </b> {props.activeCase.sum === '0' ? props.activeCase.numberofdonors = 0 :
                    props.activeCase.numberofdonors} </h2> </li>
               <li> <h2><b>Total Donation: </b> {props.activeCase.sum} </h2> </li>

                </ul>
                <div className="buttons">
                   <Button onClick={() => { props.deleteCase(props.activeCase.id) }}  > <img src="https://img.icons8.com/cotton/64/000000/delete.png" alt=""></img>Delete</Button>
                   <Button onClick={() => { props.toggleModal() }}> <img src="https://img.icons8.com/cotton/64/000000/edit.png" alt=""></img> Edit</Button>
               </div>
               <br></br>
                    <button className='backbut'
                        onClick={() => {
                            props.setCurrentCase(null);
                        }}> <img src="https://img.icons8.com/cotton/64/000000/home.png" alt=""></img> Back to Homepage</button>
                
         

            {/* <div className="container1">


            </div> */}
             </div>
        </div>

    );
};



export default OneCase;