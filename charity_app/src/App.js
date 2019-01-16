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
       data.sum = data.donation.doner_donation;
       data.numberofdonors = 0;
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

  updateCase(caseOne) {
  
    const url = API_URL + `/cases/${caseOne.id}`
    fetch(url, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(caseOne)
    })
    .then(response => response.json())
    .then(data => {
      data.sum = data.donation.sumdonation;
      const updatedcases = this.state.cases.map(el => {
        // if(el.id === data.id ){
        //  return el.sum ? el : el.sum = caseOne.sum;
        //  }else{
        //    return data
        //  }
        return el.id === data.id ? data : el
      })

  
      console.log('current state: ', this.state.cases);
      console.log('new state: ', updatedcases)
      
      this.setState({
        cases: updatedcases,
        activeCase: caseOne,
        modal: false
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  
  deleteCase(id) {
    const url = API_URL + `/cases/${id}`;
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
      this.updateCase(oneCase)
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
    
    return allCases.map((oneCase, index) => {
      return (
       
        <Tile key={oneCase.id}
          case={oneCase}
          setCurrentCase={this.setCurrentCase.bind(this)}
          progressBar={this.progressBar.bind(this)}/>
          
      )
    })
  }

  toggleModal(){
    this.setState({
      modal: !this.state.modal
    })
  }

  progressBar(total, sum){
    const colorBackground = `${(sum / total) * 100}%`
    return{
      backgroundColor: 'green',
      width: colorBackground,
      height: '1.5vh',
    borderRadius: '5px'
    }
  }

  render() {
    return (
      <div className="App">
      <div className="nav">
      <img src="http://www.accessrecordsmanagement.co.uk/wp-content/uploads/2016/11/Records-Management-Website-Headers-17.jpg" alt="" srcset=""/>
      </div>
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
          <div className="tiles">
          {this.renderTiles(this.state.cases)}
          </div>
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
