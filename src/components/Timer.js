import React from 'react';

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
