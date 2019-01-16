import React from "react";
import { Button } from 'react-bootstrap';
const OneCase = (props) => {
    return (
        <div>
            <div className="back"
                onClick={() => {
                    props.setCurrentCase(null);
                }}> Back </div>
            <div className="container1">
                <div className="image">
                    <img src={props.activeCase.img} alt="" />
                </div>

                <h2>name: {props.activeCase.name}</h2>
                <h2>Details: {props.activeCase.details}</h2>
                <h2>City: {props.activeCase.city}</h2>
                <h2>email: {props.activeCase.email}</h2>
                <h2>phone: {props.activeCase.phone}</h2>
                <h2>Organization Name: {props.activeCase.organtion_name}</h2>
                <h2>Needed: {props.activeCase.needed}</h2>
                <h2>Number of donors:{props.activeCase.numberofdonors}</h2>
                <h2>Total Donation: {props.activeCase.sum}</h2>

                <div className="buttons">
                <Button bsStyle="primary">Primary</Button>
                    <button onClick={() => { props.toggleModal() }}>Edit</button>
                    <button onClick={() => { props.deleteCase(props.activeCase.id) }}>Delete</button>
                    <Button bsStyle="primary">Primary</Button>
                </div>
            </div>
        </div>
    );
};



export default OneCase;