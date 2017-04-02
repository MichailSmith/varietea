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
        padding: '25px'
      }}>
        <Link to="/tea" style={{
          textDecoration: 'none',
          color: '#70B180',
          lineHeight:'53px',
        }}>
          <img height="53" width="96" src="/dist/Logo.png" style={{verticalAlign:'middle'}}/>
          <div style={{
            paddingLeft: '12px',
            lineHeight:'53px',
            display: 'inline-block',
            fontSize: '35px'
          }}>
            Infinitea
          </div>
        </Link>
      </h1>
    </div>
  )
}
