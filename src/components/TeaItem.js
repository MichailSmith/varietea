import React from 'react';
import { Link } from 'react-router-dom';

const TeaItem = ({ tea }) =>{
  return (
    <div key={tea.name}>
      <Link to={`/tea/${tea}`}>{tea}</Link>
    </div>
  )
};

export default TeaItem;
