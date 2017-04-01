import React from 'react';
import { TimerContainer } from '../containers';

const Tea = ({ tea, onStartClick, onPauseClick, onResetClick }) => {
  return(
    <div>
      {tea.name} should be steeped for {tea.time_seconds}s at {tea.temperature_C}°C.
      <br/>
      It can be steeped up to {tea.max_steeps} times, adding {tea.additional_time_per_steep}s per steep.
      <TimerContainer />
      <div>
        <button onClick={onStartClick}>Start</button>
        <button onClick={onPauseClick}>Pause</button>
        <button onClick={onResetClick}>Reset</button>
      </div>
    </div>
  )
};

export default Tea;
