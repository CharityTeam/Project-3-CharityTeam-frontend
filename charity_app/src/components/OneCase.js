import React from "react";

const OneCase = (props) => {
    return (
        <div>
            <div className="back"
            onClick={() => {
                props.setCurrentCase(null);
            }}> Back </div>
                <div className="container1">
                <div className="image">
                    <img src={props.activeCase.img} alt=""/>
                </div>

                <h2>Name :{props.activeCase.name}</h2>
                <h2>Details :{props.activeCase.details}</h2>
                <h2>Money needed: {props.activeCase.needed}</h2>
                <h2>Total Donation:{props.activeCase.sum}</h2>
                <h2>Number of Doners {props.activeCase.numberofdonors}</h2>

                <div className="buttons">
                    <button onClick={() => {props.toggleModal() }}>Edit</button>
                    <button onClick={() => {props.deleteCase(props.activeCase.id)}}>Delete</button>
                </div>
            </div> 
        </div>
    );
};



export default OneCase;