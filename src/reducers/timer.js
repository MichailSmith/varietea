const timer = (state = {}, action) =>{
  switch(action.type) {
    case 'START_TIMER':
    return {
      ...state,
      timerUpdatedTime: action.startTime,
      timerRunning:true
    };
    case 'UPDATE_TIMER':
    if(timerUpdatedTime > action.time || !state.timerRunning){
      return state;
    }
    const timeElapsed = action.time - state.timerUpdatedTime;
    const newTimeRemaining = state.timeRemaining - timeElapsed;
    return {
      ...state,
      timerUpdatedTime: action.time,
      timeRemaining: newTimeRemaining > 0? newTimeRemaining: 0,
      timerRunning: newTimeRemaining > 0
    };
    case 'RESET_TIMER':
    return {
      ...state,
      timerRunning: false,
      timeRemaining: state.tea.timeRemaining
    };
    case 'PAUSE_TIMER':
    return{
      ...state,
      timerRunning: false
    };
    case 'SET_TIMER':
    return{
      ...state,
      timerRunning: false,
      timeRemaining: action.timeRemaining
    };
    default:
    return state;
  }
};

export default timer;
