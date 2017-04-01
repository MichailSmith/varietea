export const startTimer = () => {
  return {
    type: 'START_TIMER',
    startTime: Date().getTime()
  };
};

export const updateTimer = () => {
  return {
    type: 'UPDATE_TIMER',
    time: Date().getTime()
  };
};

export const pauseTimer = () => {
  return {
    type: 'PAUSE_TIMER'
  };
};

export const resetTimer = () => {
  return {
    type: 'RESET_TIMER'
  };
};

export const setTimer = (timeRemaining) =>{
  return {
    type: 'SET_TIMER',
    timeRemaining
  };
};

export const updateSteeps = (steepCount) =>{
  return {
    type: 'UPDATE_STEEPS',
    steepCount
  };
};

export const selectTea = (teaName) => {
  return {
    type: 'SELECT_TEA',
    teaName
  };
};
