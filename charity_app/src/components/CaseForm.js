import React, { Component } from 'react';

class CaseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.activeCase ? props.activeCase.name : '',
            details: props.activeCase ? props.activeCase.details : '',
            city: props.activeCase ? props.activeCase.city : '',
            email: props.activeCase ? props.activeCase.email : '',
            phone: props.activeCase ? props.activeCase.phone : '',
            organtion_name: props.activeCase ? props.activeCase.organtion_name : '',
            needed: props.activeCase ? props.activeCase.needed : '',
            img: props.activeCase ? props.activeCase.img : '',
            sum: props.activeCase ? props.activeCase.sum : '',
            id: props.activeCase ? props.activeCase.id : null
        }
    }

    handleChange(event) {
        const currentInput = event.target.name;
        const newValue = event.target.value;
        console.log('current input: ', currentInput);
        console.log('newValue: ', newValue);


        this.setState({
            [currentInput]: newValue
        }, function () {
            console.log(this.state);
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("handiling submit" , this.state)
        this.props.handleSubmit(this.state)
    }

    render() {
        return (
            <div className='modal'>
                <form className='show-form' onSubmit={this.handleSubmit.bind(this)}>
                    <label>Name:</label><input type="text" value={this.state.name} name="name" onChange={this.handleChange.bind(this)} /><br />
                    <label>Details</label><input type="text" value={this.state.details} name="details" onChange={this.handleChange.bind(this)} /><br />
                    <label>City:</label><input type="text" value={this.state.city} name="city" onChange={this.handleChange.bind(this)} /><br />
                    <label>e-mail:</label><input type="text" value={this.state.email} name="email" onChange={this.handleChange.bind(this)} /><br />
                    <label>Phone #:</label><input type="text" value={this.state.phone} name="phone" onChange={this.handleChange.bind(this)} /><br />
                    <label>Organaization:</label><input type="text" value={this.state.organtion_name} name="organtion_name" onChange={this.handleChange.bind(this)} /><br />
                    <label>needed:</label><input type="text" value={this.state.needed} name="needed" onChange={this.handleChange.bind(this)} /><br />
                    <label>image:</label><input type="text" value={this.state.img} name="img" onChange={this.handleChange.bind(this)} /><br />
                    <button className='close-modal' onClick={() => { this.props.toggleModal() }}>Cancel</button>
                    <br></br>
                    <button>Submit</button>
                </form>


            </div>
        )
    }
};

export default CaseForm;