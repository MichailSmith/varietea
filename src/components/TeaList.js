import React from 'react';
import { TeaItem } from './';

const TeaList = ({ teas }) => {
  return(
    <div>
      {Object.keys(teas).map((tea)=><TeaItem key={tea} tea={tea} />)}
    </div>
  )
};

export default TeaList;
