import React from 'react';
import { TimerContainer } from '../containers';
import { SteepCountSelector } from './';

const Tea = ({ tea, onStartClick, onPauseClick, onResetClick, timerRunning, steepCount, onChangeSteepCount }) => {
  return(
    <div style={{textAlign: 'center', color:'#666666'}}>
      <h3><img src="/dist/Leaf.png"/>{tea.name}</h3>
      <div><TimerContainer /></div>
      <div style={{padding:'10px'}}>
        Steeps:
        <SteepCountSelector
          max_steeps={tea.max_steeps}
          steepCount={steepCount}
          timerRunning={timerRunning}
          onChangeSteepCount={onChangeSteepCount}
        />
      </div>
      <div style={{padding: '10px', color: '#393939'}}>
        {`The recommended steep is ${tea.amount_g}g at ${tea.temperature_C}C/${tea.temperature_F}F`}
      </div>
      <div>
        <button hidden={timerRunning} onClick={onStartClick}>Start</button>
        <button hidden={!timerRunning} onClick={onPauseClick}>Pause</button>
        <button onClick={onResetClick}>Reset</button>
      </div>
    </div>
  )
};

export default Tea;
