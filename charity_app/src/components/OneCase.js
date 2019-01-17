import React from "react";
import { Button } from 'react-bootstrap';
const OneCase = (props) => {
    return (
        <div className="oneCase">
            <div className="rightside">
                <div className="image">
                    <img src={props.activeCase.img} alt="" />
                </div>
                <div className="buttons"></div>
                   
                <Button className='backbut'
                    onClick={() => {
                        props.setCurrentCase(null);
                    }}> HOMEPAGE</Button>
                <br></br>
                {/* <div className="back"
                onClick={() => {
                    props.setCurrentCase(null);
                }}> BACK TO HOMEPAGE</div> */}
            </div>
            <div className="leftside">

                <h2>name: {props.activeCase.name}</h2>
                <h2>Details: {props.activeCase.details}</h2>
                <h2>City: {props.activeCase.city}</h2>
                <h2>email: {props.activeCase.email}</h2>
                <h2>phone: {props.activeCase.phone}</h2>
                <h2>Organization Name: {props.activeCase.organtion_name}</h2>
                <h2>Needed: {props.activeCase.needed}</h2>
                <h2>Number of donors:{props.activeCase.sum === '0' ? props.activeCase.numberofdonors = 0 :
                    props.activeCase.numberofdonors}</h2>
                <h2>Total Donation: {props.activeCase.sum}</h2>

                <div className="buttons">
                    <Button onClick={() => { props.deleteCase(props.activeCase.id) }}>Delete</Button>
                    {/* <button onClick={() => { props.toggleModal() }}>Edit</button> */}
                    {/* <button onClick={() => { props.deleteCase(props.activeCase.id) }}>Delete</button> */}
                    <Button onClick={() => { props.toggleModal() }}> Edit</Button>
                </div>
            </div>

            {/* <div className="container1">


            </div> */}
        </div>

    );
};



export default OneCase;