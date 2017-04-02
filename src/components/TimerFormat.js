import React from 'react';

const padTime = (time)=>{
  return time >= 10? `${time}`: `0${time}`;
}

const timerFormat = ({ secondsRemaining }) =>{
  const seconds = padTime(Math.floor(secondsRemaining % 60));
  const minutes = padTime(Math.floor(secondsRemaining / 60));
  return(
    <span>
      {`${minutes}:${seconds}`}
    </span>
  )
};

export default timerFormat;
