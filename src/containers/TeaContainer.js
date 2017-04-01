import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class TeaContainer extends Component{
  render(){
    const { tea } = this.context.store.getState().timer;
    return(
      <div>
        {tea.name} should be steeped for {tea.time_seconds}s at {tea.temperature_C}°C.
        <br/>
        It can be steeped up to {tea.max_steeps} times, adding {tea.additional_time_per_steep}s per steep.
      </div>
    )
  }
};

TeaContainer.contextTypes = {
  store: React.PropTypes.object
};
