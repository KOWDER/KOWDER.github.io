import React, { Component } from 'react';
import Group from './components/Group';
import ElimStage from './components/Eliminations';

import './App.css';

const groupA = ['Russia', 'Egypt', 'Saudi Arabia', 'Uruguay'];
const groupB = ['Portugal', 'Spain', 'Morocco', 'Iran'];
const groupC = ['France', 'Australia', 'Peru', 'Denmark'];
const groupD = ['Argentina', 'Iceland', 'Croatia', 'Nigeria'];
const groupE = ['Brazil', 'Switzerland', 'Costa Rica', 'Serbia'];
const groupF = ['Germany', 'Mexico', 'Sweden', 'South Korea'];
const groupG = ['Belgium', 'Panama', 'Tunisia', 'England'];
const groupH = ['Poland', 'Senegal', 'Colombia', 'Japan'];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      A: [],
      B: [],
      C: [],
      D: [],
      E: [],
      F: [],
      G: [],
      H: [],
      height1: '',
      height2: '',
      height3: '',
      height4: '',
      height5: '',
      height6: '',
      height7: '',
      height8: '',
      quarter1: '',
      quarter2: '',
      quarter3: '',
      quarter4: '',
      semi1: '',
      semi2: '',
      final1: ''
    }
  }

  handleGroup = (e) => {
    e.persist();
    e.preventDefault();

    let groupName = e.target.parentNode.parentNode.childNodes[0].childNodes[0].textContent;

    if (e.target.classList.contains('checked')) {
      e.target.classList.remove('checked');
      this.setState((prevState) => ({
        [groupName]: prevState[groupName].filter(country => country !== e.target.value)
      }));
    } else {
      if (this.state[groupName].length > 1) {
        return
      }
      e.target.classList.add('checked');
      this.setState((prevState) => ({
        [groupName]: [...prevState[groupName], e.target.value]
      }));
    }
  }

  handleElim = (e) => {
    e.preventDefault();
    let match = e.target.parentNode.classList[0];
    this.setState({ [match]: e.target.textContent });

    if (match === "final1") {
      if(!e.target.textContent) {
        return
      } else {
        alert(`Congratulations ${e.target.textContent} for winning the 2018 WC!`);
      }
    }


  }



  render() {
    return (
      <div className="App">
        <div className="titles">
          <h1>World Cup Picker 2018</h1>
        </div>
        <div className="instructions">
          <h3>- Select the countries that will qualify for the elimination stages.</h3>
          <h3>- Only 2 teams from each group can qualify.</h3>
          <h3>- Select them in order of seeding, select 1st seed first and 2nd seed after.</h3>
          <h3>- When you're happy with your choices, click the button below.</h3>
        </div>
        <div className="groups">
          <Group name='A' countries={groupA} onClick={(e) => this.handleGroup(e)}/>
          <Group name='B' countries={groupB} onClick={(e) => this.handleGroup(e)}/>
          <Group name='C' countries={groupC} onClick={(e) => this.handleGroup(e)}/>
          <Group name='D' countries={groupD} onClick={(e) => this.handleGroup(e)}/>
          <Group name='E' countries={groupE} onClick={(e) => this.handleGroup(e)}/>
          <Group name='F' countries={groupF} onClick={(e) => this.handleGroup(e)}/>
          <Group name='G' countries={groupG} onClick={(e) => this.handleGroup(e)}/>
          <Group name='H' countries={groupH} onClick={(e) => this.handleGroup(e)}/>
        </div>
        <div className="eliminations">
          <ElimStage qual={this.state} onClick={(e) => this.handleElim(e)}/>
        </div>
      </div>
    );
  }
}

export default App;
