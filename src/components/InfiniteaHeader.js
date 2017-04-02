import React from 'react';
import { Link } from 'react-router-dom';

export default ()=>{
  return(
    <div>
      <h1 style={{
        width: '100%',
        backgroundColor: '#F5F19D',
        textAlign: 'center',
        margin: '0px',
        padding: '10px'
      }}>
        <Link to="/tea" style={{
          textDecoration: 'none',
          color: '#70B180'
        }}>
          <img src="/dist/Logo.png"/>Infinitea
        </Link>
      </h1>
    </div>
  )
}
