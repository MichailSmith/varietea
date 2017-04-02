import React from 'react';
import { TimerFormat } from './';
const timer = ({secondsRemaining, isRunning, style}) =>{
  const defaultStyle = {
    color: 'black',
    fontSize: '30px',
    padding: '15px',
    display: 'inline-block',
    textAlign: 'center',
    fontWeight: 100,
    backgroundColor: '#F5F19D',
    color: '#393939',
    borderRadius: '5px'
  };
  return (
    <div style={{
      ...defaultStyle,
      ...style
    }}>
      <TimerFormat secondsRemaining={secondsRemaining}/>
    </div>
  );
};

export default timer;
