import React from 'react';
import { TeaItem } from './';

const TeaList = ({ teas }) => {
  return(
    <div style={{
        textDecoration: 'none',
        color: '#70B180',
        textAlign: 'center'
    }}>
      {Object.keys(teas).map((tea)=><TeaItem key={tea} tea={tea} />)}
    </div>
  )
};

export default TeaList;
