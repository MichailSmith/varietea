import React from 'react';
import { TimerFormat } from './';
const timer = ({secondsRemaining, isRunning, style}) =>{
  const defaultStyle = {
    color: 'black',
    fontSize: '50px',
    padding: '20px 50px 20px 50px',
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
