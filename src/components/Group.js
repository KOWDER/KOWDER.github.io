import React from 'react';
import {SortableContainer} from 'react-sortable-hoc';
import Team from './Team';

import '../styles/Group.css';

const Group = SortableContainer(({items}) => {
  return (
    <div className="">
    <ul>
      {items.map((value, index) => (
        <Team key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
    </div>
  );
});

export default Group;