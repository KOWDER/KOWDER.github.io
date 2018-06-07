import React from 'react';
import {SortableElement} from 'react-sortable-hoc';

import '../styles/Team.css';

const Team = SortableElement(({value}) =>
  <li>{value}</li>
);

export default Team;
