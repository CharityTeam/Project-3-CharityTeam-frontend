import React, { Component } from 'react';
import './App.css';
import Tile from './components/Tiles';
import OneCase from './components/OneCase';
import CaseForm from './components/CaseForm';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
const API_URL = 'http://localhost:3000';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cases: [],
      activeCase: null,
      modal: false
    }
  }

  fetchCases() {
    const url = API_URL + '/cases';
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ cases: data }))
      .catch(error => console.log(error))
  }

  componentDidMount() {
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
        const updatedCase = this.state.cases.filter(oneCase => oneCase.id !== id)
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
    if (this.state.activeCase) {
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
          progressBar={this.progressBar.bind(this)} />

      )
    })
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    })
  }

  progressBar(total, sum) {
    const colorBackground = `${(sum / total) * 100}%`
    return {
      backgroundColor: 'green',
      width: colorBackground,
      height: '1vh',
      borderRadius: '5px'
    }
  }

  renderHeader() {
    return(
      <div className="nav">

          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                ur website name
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href="#">
                About Us
    </NavItem>
              <NavDropdown eventKey={3} title="Organizations" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Insan</MenuItem>
                <MenuItem eventKey={3.2}>Bunyan</MenuItem>
                <MenuItem eventKey={3.3}>Takaful</MenuItem>
                {/* <MenuItem divider /> */}
                <MenuItem eventKey={3.4}>Zahra</MenuItem>
              </NavDropdown>
              <NavItem eventKey={2} href="#">
                Contact us
    </NavItem>

            </Nav>
          </Navbar>



          <img src="http://www.accessrecordsmanagement.co.uk/wp-content/uploads/2016/11/Records-Management-Website-Headers-17.jpg" alt=""  />
        </div>
    )
  }

  renderContent(){
    if(this.state.activeCase){
      switch (this.state.modal) {
        case true:
        return(<OneCase
          setCurrentCase={this.setCurrentCase.bind(this)}
          activeCase={this.state.activeCase}
          deleteCase={this.deleteCase.bind(this)}
          toggleModal={this.toggleModal.bind(this)}
          />  );
          
      
        default:
        return(<OneCase
          setCurrentCase={this.setCurrentCase.bind(this)}
          activeCase={this.state.activeCase}
          deleteCase={this.deleteCase.bind(this)}
          toggleModal={this.toggleModal.bind(this)}
        />  );
      }
      
    } else{
      return(
        <div className="Cases">
        <div className="action-buttons">
          <div onClick={this.toggleModal.bind(this)}>+</div>
        </div>
        <div className="tiles">
          {this.renderTiles(this.state.cases)}
        </div>
      </div>
      )
    }
  }

  render() {
    return (
      <div className="App">
        
        {this.renderHeader()}

        {this.renderContent()}

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
