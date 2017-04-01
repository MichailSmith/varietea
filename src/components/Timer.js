import React from 'react';

const timer = ({secondsRemaining, isRunning}) =>{
  return (
    <span style={{
      color: isRunning? 'green':'red',
      fontSize: '24px',
      border: '1px solid black',
      padding: '5px'
    }}>
    {secondsRemaining}s
  </span>
  );
};

export default timer;
