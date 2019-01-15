import React from "react";

const OneCase = props => {
    return (
        <div>
            <div className="case"
            onClick={() => {
                props.setCurrentCase(props.activeCase);
            }}>

                <div className="image">
                    <img>src={props.activeCase.img} alt ="" /></img>
                </div>

                <h2>{props.activeCase.name}</h2>
                <h2>{props.activeCase.details}</h2>
                <h2>{props.activeCase.sum}</h2>
                <h2>{props.activeCase.needed}</h2>
                <h2>{props.activeCase.number_of_donors}</h2>

                <div className="buttons">
                    <button onClick={() => { props.toggleModal() }}>donate</button>
                </div>
            </div> 
        </div>
    );
};



export default OneCase;