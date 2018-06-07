import React, {Component} from 'react';

import GroupA from './Groups/GroupA';
import GroupB from './Groups/GroupB';
import GroupC from './Groups/GroupC';
import GroupD from './Groups/GroupD';
import GroupE from './Groups/GroupE';
import GroupF from './Groups/GroupF';
import GroupG from './Groups/GroupG';
import GroupH from './Groups/GroupH';

import '../styles/App.css';




class App extends Component {
  render() {
    return (
      <div className="group-grid">
        <GroupA />
        <GroupB />
        <GroupC />
        <GroupD />
        <GroupE />
        <GroupF />
        <GroupG />
        <GroupH />
      </div>
    );
  }
}
export default App;
