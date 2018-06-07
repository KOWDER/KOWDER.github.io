import React, {Component} from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import Group from '../Group';

class GroupE extends Component {
  state = {
    items: ['Brazil', 'Swtzerland', 'Costa Rica', 'Serbia'],
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
export default GroupE;