import React from 'react';

const Navbar = ()=>{
  const innerStyle = {
    width: '33%',
    margin: '0px',
    backgroundColor: '#8DDDA0',
    padding: '30px 0px 30px 0px',
    borderWidth: '0px 1px 0px 1px',
    borderStyle: 'solid',
    borderColor: 'white',
    display: 'inline-block',
    color: '#666666'
  };
  return (
    <div style={{
      width: '100%',
      textAlign: 'center',
      backgroundColor: '#8DDDA0'
    }}>
      <div style={innerStyle}>Recent Teas</div>
      <div style={{
        ...innerStyle,
        borderWidth: '0px',
      }}>Teas</div>
      <div style={innerStyle}>Manual Mode</div>
    </div>
  )
};

export default Navbar;
