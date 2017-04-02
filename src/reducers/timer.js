const timer = (state = {}, action) =>{
  switch(action.type) {
    case 'START_TIMER':
    return {
      ...state,
      timerUpdatedTime: action.startTime,
      timerRunning:true
    };

    case 'UPDATE_TIMER':
    if(state.timerUpdatedTime > action.time || !state.timerRunning){
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
      steepCount: 1,
      timeRemaining: state.tea.time_seconds * 1000
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

    case 'UPDATE_STEEPS':
    const timeRemaining =
      (state.tea.time_seconds +
      (action.steepCount - 1) *
      state.tea.additional_time_per_steep) * 1000;
    return {
      ...state,
      timeRemaining: timeRemaining > state.tea.minimum_time_seconds?
        timeRemaining:
        state.tea.minimum_time_seconds * 1000,
      steepCount: action.steepCount,
      timerRunning: false
    };

    case 'SET_TEAS':
    return{
      ...state,
      teas: action.teas
    };

    case 'SELECT_TEA':
    const selectedTea = state.teas[action.teaName];
    if(selectedTea){
      return {
        ...state,
        tea: {
          ...selectedTea,
          name: action.teaName
        },
        timeRemaining: selectedTea.time_seconds * 1000,
        timerRunning: false,
        steepCount: 1
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
};

export default timer;
