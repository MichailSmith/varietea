import React from 'react';

const TimerButton = ({onClick, style, hidden, children}) =>{
  const defaultStyle ={
    backgroundColor: '#F5F19D',
    padding: '30px 55px 30px 55px',
    borderRadius: '10px',
    display: 'inline-block',
    textAlign: 'center',
    color: '#666666',
    cursor: 'pointer',
    margin: '10px'
  };
  const hiddenStyle = hidden? {
    display: 'none'
  }: {};

  return (
    <span onClick={onClick} style={{
      ...defaultStyle,
      ...style,
      ...hiddenStyle
    }}>
      {children}
    </span>
  )
};

export default TimerButton;
