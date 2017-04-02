import React from 'react';
import { TimerContainer } from '../containers';
import { SteepCountSelector } from './';

const Tea = ({ tea, onStartClick, onPauseClick, onResetClick, timerRunning, steepCount, onChangeSteepCount }) => {
  return(
    <div>
      <h2>{tea.name}</h2> 
      <TimerContainer />
      <SteepCountSelector
        max_steeps={tea.max_steeps}
        steepCount={steepCount}
        timerRunning={timerRunning}
        onChangeSteepCount={onChangeSteepCount}
      />
      <div>
        <button hidden={timerRunning} onClick={onStartClick}>Start</button>
        <button hidden={!timerRunning} onClick={onPauseClick}>Pause</button>
        <button onClick={onResetClick}>Reset</button>
      </div>
    </div>
  )
};

export default Tea;
