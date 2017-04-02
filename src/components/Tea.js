import React from 'react';
import { TimerContainer } from '../containers';
import { SteepCountSelector, SteepInstructions, TimerButton } from './';

const Tea = ({ tea, onStartClick, onPauseClick, onResetClick, timerRunning, steepCount, onChangeSteepCount }) => {
  return(
    <div style={{textAlign: 'center', color:'#666666'}}>
      <h3 style={{fontSize: '30px'}}><img src="/dist/Leaf.png"/>{tea.name}</h3>
      <div><TimerContainer /></div>
      <div style={{padding:'10px'}}>
        <span> Steep </span>
        <SteepCountSelector
          max_steeps={tea.max_steeps}
          steepCount={steepCount}
          timerRunning={timerRunning}
          onChangeSteepCount={onChangeSteepCount}
        />
      </div>
      <SteepInstructions tea={tea}/>
      <div>
        <TimerButton hidden={timerRunning} onClick={onStartClick}
          style = {{backgroundColor: '#8DDDA0'}}>
          Start
        </TimerButton>

        <TimerButton hidden={!timerRunning} onClick={onPauseClick}>Pause</TimerButton>
        <TimerButton onClick={onResetClick}>Reset</TimerButton>
      </div>
    </div>
  )
};

export default Tea;
