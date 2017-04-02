import React from 'react';

const SteepInstructions = ({tea}) =>{
  return (
    <div style={{padding: '10px', color: '#393939'}}>
      {`The recommended steep is ${tea.amount_g}g at ${Math.floor(tea.temperature_C)}C/${Math.floor(tea.temperature_F)}F`}
    </div>
  )
};

export default SteepInstructions;
