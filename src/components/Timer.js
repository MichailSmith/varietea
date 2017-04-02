import React from 'react';
import { TimerFormat } from './';
const timer = ({secondsRemaining, isRunning, style}) =>{
  const defaultStyle = {
    fontSize: '65px',
    padding: '40px 100px 40px 100px',
    display: 'inline-block',
    textAlign: 'center',
    fontWeight: 100,
    backgroundColor: '#F5F19D',
    color: '#393939',
    borderRadius: '10px'
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
