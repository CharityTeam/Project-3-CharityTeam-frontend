import React, { Component } from 'react';
import './App.css';
import Tile from './components/Tiles';
import OneCase from './components/OneCase';
import CaseForm from './components/CaseForm';

const API_URL = 'http://localhost:3000';

class App extends Component {
  constructor(){
    super();
    this.state = {
      cases: [],
      activeCase: null,
      modal: false
    }
  }

  fetchCases(){
    const url = API_URL + '/cases';
    fetch(url)
      .then( response => response.json())
      .then( data => this.setState({cases: data}))
      .catch( error => console.log(error))
  }

  componentDidMount(){
    this.fetchCases();
  }

  createNewCase(oneCase) {
 
   const url = API_URL + '/cases'
   fetch(url, {
       method: 'POST',
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify(oneCase)
     })
     .then(response => response.json())
     .then(data => {
       console.log('DATA')
       console.log(data);
       const updatedcases = this.state.cases.concat([data]);
       console.log(updatedcases)
       this.setState({
         cases: updatedcases,
         activecase: data,
         modal: false
       })
     })
     .catch(error => {
       console.log(error);
     })
  }

  updateCase(oneCase) {
    const url = `http://localhost:3000/cases/${oneCase.id}`
    fetch(url, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(oneCase)
    })
    .then(response => response.json())
    .then(data => {

      const updatedcases = this.state.cases.map(el => {
        return el.id === data.id ? data : el
      })
      console.log('current state: ', this.state.cases);
      console.log('new state: ', updatedcases)

      this.setState({
        cases: updatedcases,
        activecase: oneCase,
        modal: false
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  
  deleteCase(id) {
    const url = `http://localhost:3000/cases/${id}`;
    fetch(url, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(data => {
        const updatedCase = this.state.cases.filter( oneCase => oneCase.id !== id)
        this.setState({
          cases: updatedCase,
          activeCase: null
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  handleSubmit(oneCase) {
    if(this.state.activeCase) {
      this.updatedcases(oneCase)
    } else {
      this.createNewCase(oneCase)
    }
  }

  setCurrentCase(oneCase) {
    console.log('setting Case');
    console.log(oneCase);
    this.setState({
      activeCase: oneCase
    })
  }

  renderTiles(allCases) {
    
    return allCases.map((oneCase) => {
      return (
        <Tile key={oneCase.id}
          case={oneCase}
          setCurrentCase={this.setCurrentCase.bind(this)}/>
      )
    })
  }

  toggleModal(){
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <div className="App">
      <header>My Cases</header>
      {this.state.activeCase ?  <OneCase 
         setCurrentCase={this.setCurrentCase.bind(this)} 
         activeCase={this.state.activeCase}
         deleteCase={this.deleteCase.bind(this)}
         toggleModal={this.toggleModal.bind(this)} 
       /> :
       <div className="Cases">
          <div className="action-buttons">
            <div onClick={this.toggleModal.bind(this)}>+</div>
          </div>
          {this.renderTiles(this.state.cases)}
        </div>}

      {this.state.modal ? 
        <CaseForm 
          handleSubmit={this.handleSubmit.bind(this)} 
          toggleModal={this.toggleModal.bind(this)}
          activeCase={this.state.activeCase}
          /> : ''}
    </div>
    );
  }
}

export default App;