import teas from '../teas.json';

const tea = (state = {}, action) =>{
  switch(action.type) {
    case 'UPDATE_STEEPS':
    return {
      ...state,
      timeRemaining:
        (state.tea.time_seconds +
        (action.steepCount - 1) *
        state.tea.additional_time_per_steep) * 1000,
      steepCount: action.steepCount,
      timerRunning: false
    };
    case 'SELECT_TEA':
    const selectedTea = teas[action.teaName];
    if(selectedTea){
      return {
        ...state,
        tea: selectedTea,
        timeRemaining: selectedTea.time_seconds * 1000,
        timerRunning: false
      }
    } else {
      return {
        ...state,
        tea: undefined
      };
    }
    default:
    return state;
  }
  return state;
};
export default tea;
