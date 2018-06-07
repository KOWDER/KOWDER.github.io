import React, {Component} from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import Group from '../Group';

class GroupA extends Component {
  state = {
    items: ['Russia', 'Saudi Arabia', 'Egypt', 'Uruguay'],
  };
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };
  render() {
    return <Group items={this.state.items} onSortEnd={this.onSortEnd} />;
  }
}
export default GroupA;
