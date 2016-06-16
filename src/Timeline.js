import React, {Component} from 'react';
import TimelineItem from './TimelineItem';

class Timeline extends Component {
  render() {
    return (
      <div>
        <TimelineItem />
        <TimelineItem />
      </div>
    );
  }
}

export default Timeline;