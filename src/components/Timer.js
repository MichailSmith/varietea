import React from 'react';

const timer = ({secondsRemaining, isRunning, style}) =>{
  const color = isRunning? 'green':'red';
  const defaultStyle = {
    color: color,
    fontSize: '30px',
    border: `3px solid ${color}`,
    padding: '15px',
    display: 'inline-block',
    textAlign: 'center',
    fontWeight: 100
  };
  return (
    <div style={{
      ...defaultStyle,
      ...style
    }}>
      <span >
      {secondsRemaining.toFixed(0)}
      </span>
      <div style={{
        fontSize: '16px'
      }}>Seconds</div>
    </div>
  );
};

export default timer;
