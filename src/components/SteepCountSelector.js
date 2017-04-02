import React from 'react';

const SteepCountSelector = ({max_steeps, steepCount, onChangeSteepCount, timerRunning}) =>{
  const steepOptions =
    Array.apply(0, Array(max_steeps))
      .map(function (element, index) {
        return index + 1;
    });
  return (
    <span>
      <select
        value={steepCount}
        disabled={timerRunning}
        onChange={({target})=> onChangeSteepCount(target.value)}
        >
        {steepOptions.map((num)=>
          <option
            key={num}
            value={num}>
              {num}
            </option>)}
      </select>
    </span>
  );
};

export default SteepCountSelector;
